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

  const handleGenerateFaqs = async (sessionId: string) => {
    setFaqLoadingSessionId(sessionId);
    setFaqErrorSessionId(null);
    try {
      const response = await ragApiClient.generateFaqs(sessionId);
      updateSessionStatus(sessionId, response); // Update local state with new status
    } catch (err: unknown) {
      setFaqErrorSessionId(sessionId);
      console.error(`Failed to generate FAQs for session ${sessionId}:`, err);
    } finally {
      setFaqLoadingSessionId(null);
    }
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
            <CardTitle className="text-lg flex items-center gap-2">
              {session.input_type === "website" ? (
                <ExternalLink size={18} />
              ) : (
                <UploadCloud size={18} />
              )}
              {(session.input_value ?? "").length > 30
                ? `${session.input_value?.substring(0, 27)}...`
                : session.input_value || "Untitled Session"}
            </CardTitle>
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
            {session.generated_faqs && session.generated_faqs.length > 0 && (
              <div className="mt-4 text-xs text-muted-foreground">
                <h4 className="font-semibold mb-1">Generated FAQs:</h4>
                <ul className="list-disc list-inside">
                  {session.generated_faqs.slice(0, 3).map((faq, index) => (
                    <li key={index}>
                      **Q:** {faq.question}
                    </li>
                  ))}
                  {session.generated_faqs.length > 3 && (
                    <li>...and {session.generated_faqs.length - 3} more</li>
                  )}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
