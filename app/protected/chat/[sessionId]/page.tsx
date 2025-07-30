// app/protected/chat/[sessionId]/page.tsx

"use client"; // Make this a client component to use state and hooks

import { createClientComponentClient } from "@/lib/supabase/client-component";
import { redirect } from "next/navigation";
import { InfoIcon } from "lucide-react";
import { useState, useEffect, use } from "react"; // Import 'use'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChatComponent } from "@/components/rag/ChatComponent";
import { ragApiClient } from "@/lib/api/rag-api-client";
import { SessionData } from "@/lib/api/rag-api-types";

interface ChatPageProps {
  params: Promise<{
    sessionId: string;
  }>;
}

export default function ChatPage({ params }: ChatPageProps) {
  const { sessionId } = use(params); // Use the 'use' hook to unwrap params
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthAndFetchData = async () => {
      const supabase = createClientComponentClient();
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) {
        redirect("/auth/login");
      }
      setIsAuthenticated(true); // Authenticated, proceed to fetch session details
    };
    checkAuthAndFetchData();
  }, []); // Empty dependency array means this runs once on mount
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [chatTitle, setChatTitle] = useState<string>("");
  const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);
  const [tempTitle, setTempTitle] = useState<string>("");

  useEffect(() => {
    const fetchSessionDetails = async () => {
      if (!isAuthenticated) return; // Don't fetch if not authenticated yet

      try {
        const data: SessionData = await ragApiClient.getSession(sessionId);
        setSessionData(data);
        const initialTitle = data.input_value || new Date().toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          hour: '2-digit', 
          minute: '2-digit' 
        });
        setChatTitle(initialTitle);
        setTempTitle(initialTitle);
      } catch (err) {
        console.error("Failed to fetch session details:", err);
        // Fallback to default title if fetching fails
        const defaultTitle = new Date().toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          hour: '2-digit', 
          minute: '2-digit' 
        });
        setChatTitle(defaultTitle);
        setTempTitle(defaultTitle);
      }
    };

    fetchSessionDetails();
  }, [sessionId, isAuthenticated]); // Add isAuthenticated to dependency array

  const handleTitleClick = () => {
    setIsEditingTitle(true);
    setTempTitle(chatTitle); // Ensure tempTitle is current when starting edit
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setChatTitle(tempTitle);
    setIsEditingTitle(false);
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setChatTitle(tempTitle);
      setIsEditingTitle(false);
    } else if (e.key === "Escape") {
      setTempTitle(chatTitle); // Revert to last saved title
      setIsEditingTitle(false);
    }
  };

  if (!isAuthenticated) {
    return null; // Or a loading spinner
  }

  return (
    <div className="w-full flex flex-col items-start justify-start min-h-[calc(100vh-4rem)] py-8 px-4"> 
      <div className="w-full max-w-3xl mb-6">
        {isEditingTitle ? (
          <Input
            type="text"
            value={tempTitle}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            onKeyDown={handleTitleKeyDown}
            autoFocus
            className="text-2xl font-bold p-2 border-2 border-primary rounded"
          />
        ) : (
          <h1 
            className="text-2xl font-bold cursor-pointer hover:bg-accent p-2 rounded transition-colors duration-200"
            onClick={handleTitleClick}
            title="Click to edit title"
          >
            {chatTitle}
          </h1>
        )}
      </div>
      <div className="w-full max-w-3xl flex-1 flex flex-col">
        <ChatComponent sessionId={sessionId} />
      </div>
    </div>
  );
}
