// components/rag/SessionList.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal"; // Import Modal
import { useSessions } from "@/lib/contexts/SessionContext";
import { Loader2, MessageSquare, BookText, ExternalLink, UploadCloud } from "lucide-react"; // Added UploadCloud
import { ragApiClient } from "@/lib/api/rag-api-client"; // For FAQ generation

export function SessionList() {
  const { sessions, loading, error, fetchSessions, updateSessionStatus } =
    useSessions();
  const [faqLoadingSessionId, setFaqLoadingSessionId] = useState<string | null>(
    null,
  );
  const [faqErrorSessionId, setFaqErrorSessionId] = useState<string | null>(
    null,
  );
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [selectedFaqsForModal, setSelectedFaqsForModal] = useState<any>(null); // Consider a more specific type if possible

  const handleGenerateFaqs = async (sessionId: string) => {
    setFaqLoadingSessionId(sessionId);
    setFaqErrorSessionId(null);
    try {
      const response = await ragApiClient.generateFaqs(sessionId);
      updateSessionStatus(sessionId, response); // Update local state with new status
      // Fetch the updated session data to display in modal
      const updatedSessionData = await ragApiClient.getSession(sessionId);
      setSelectedFaqsForModal(updatedSessionData);
      setIsFaqModalOpen(true);
    } catch (err: unknown) {
      setFaqErrorSessionId(sessionId);
      console.error(`Failed to generate FAQs for session ${sessionId}:`, err);
    } finally {
      setFaqLoadingSessionId(null);
    }
  };

  const handleCloseFaqModal = () => {
    setIsFaqModalOpen(false);
    setSelectedFaqsForModal(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        <p className="ml-4 text-muted-foreground">Loading sessions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-8">
        <p>Error loading sessions: {error}</p>
        <Button onClick={fetchSessions} className="mt-4">
          Retry
        </Button>
      </div>
    );
  }

  if (sessions.length === 0) {
    return (
      <p className="text-muted-foreground text-center p-8">
        No document sessions found. Ingest new content above!
      </p>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {sessions.map((session) => (
        <Card key={session.user_session_id}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 flex-wrap">
              {session.input_type === "website" ? (
                <ExternalLink size={18} />
              ) : (
                <UploadCloud size={18} />
              )}
              <span className="truncate">
                {(session.input_value ?? "").length > 30
                  ? `${formatWebsiteUrl(session.input_value).substring(0, 27)}...`
                  : formatWebsiteUrl(session.input_value) || "Untitled Session"}
              </span>
            </CardTitle>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline">
                {session.input_type === "website" ? "Web" : "PDF"}
              </Badge>
            </div>
            <CardDescription>
              Session ID:{" "}
              <span className="font-mono text-xs">
                {session.user_session_id.substring(0, 8)}...
              </span>
            </CardDescription>
            <div className="flex items-center gap-2 mt-2">
              <Badge
                variant={
                  session.status === "ready"
                    ? "default"
                    : session.status === "error"
                      ? "destructive"
                      : "secondary"
                }
              >
                {session.status.replace(/_/g, " ")}
              </Badge>
              {session.status !== "ready" && session.status !== "error" && (
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              )}
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              {session.message}
            </p>
            <div className="flex gap-2 mt-4">
              {session.context_is_ready ? (
                <>
                  <Button asChild size="sm">
                    <Link href={`/protected/chat/${session.user_session_id}`}>
                      <MessageSquare className="mr-2" /> Chat
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleGenerateFaqs(session.user_session_id)}
                    disabled={
                      faqLoadingSessionId === session.user_session_id ||
                      session.status === "faq_processing"
                    }
                  >
                    {faqLoadingSessionId === session.user_session_id ||
                    session.status === "faq_processing" ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <BookText className="mr-2" />
                    )}
                    Generate FAQs
                  </Button>
                </>
              ) : (
                <Button size="sm" disabled>
                  Processing...
                </Button>
              )}
            </div>
            {faqErrorSessionId === session.user_session_id && (
              <p className="text-sm text-red-500 mt-2">
                Failed to generate FAQs for this session.
              </p>
            )}
            {/* Removed inline FAQ display */}
          </CardContent>
        </Card>
      ))}

      <Modal
        isOpen={isFaqModalOpen}
        onClose={handleCloseFaqModal}
        title="Generated FAQs"
        className="max-w-3xl"
      >
        {selectedFaqsForModal && selectedFaqsForModal.generated_faqs &&
          selectedFaqsForModal.generated_faqs.length > 0 ? (
          <div className="max-h-96 overflow-y-auto">
            <ul className="space-y-4">
              {selectedFaqsForModal.generated_faqs.map((faq: any, index: number) => (
                <li key={index} className="border-b pb-4 last:border-b-0">
                  <p className="font-semibold text-primary">Q: {faq.question}</p>
                  <p className="text-muted-foreground mt-1">A: {faq.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-muted-foreground">No FAQs generated yet or an error occurred.</p>
        )}
      </Modal>
    </div>
  );
}

// Helper function to clean website URLs
function formatWebsiteUrl(url: string | null | undefined): string {
  if (!url) return "";
  let formattedUrl = url;
  if (url.startsWith("https://")) {
    formattedUrl = url.substring(8);
  } else if (url.startsWith("http://")) {
    formattedUrl = url.substring(7);
  }
  if (formattedUrl.startsWith("www.")) {
    formattedUrl = formattedUrl.substring(4);
  }
  return formattedUrl;
}
