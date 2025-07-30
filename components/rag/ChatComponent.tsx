// components/rag/ChatComponent.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ragApiClient } from "@/lib/api/rag-api-client";
import { ChatMessage, ChatResource, SessionData } from "@/lib/api/rag-api-types";
import { Loader2, Send, Bot, User, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ChatComponentProps {
  sessionId: string;
}

export function ChatComponent({ sessionId }: ChatComponentProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState({
    label: "Fast",
    modelName: "Grok-3-mini",
    id: "x-ai/grok-3-mini"
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the bottom of the chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Fetch initial session data and chat history
  useEffect(() => {
    const fetchSessionHistory = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const session: SessionData = await ragApiClient.getSession(sessionId);
        setMessages(session.chat_history || []);
      } catch (err: any) {
        setError(err.message || "Failed to load chat history.");
        console.error("Error fetching chat history:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSessionHistory();
  }, [sessionId]);

  // Scroll to bottom whenever messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: inputMessage,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await ragApiClient.chat(
        sessionId, 
        inputMessage,
        selectedModel.id
      );
      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: response.answer,
        timestamp: new Date().toISOString(),
        resources: response.resources,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      setError(err.message || "Failed to get a response from the AI.");
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Error: ${err.message || "Could not get a response."}`,
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = (message: ChatMessage, index: number) => (
    <div
      key={index}
      className={`flex gap-3 p-4 rounded-lg ${
        message.role === "user"
          ? "bg-primary-foreground text-primary-foreground-content justify-end"
          : ""
      }`}
    >
      {message.role === "assistant" && (
        <Bot className="h-6 w-6 shrink-0 text-muted-foreground" />
      )}
      <div className="flex flex-col">
        <p className="text-sm font-semibold">
          {message.role === "user" ? "You" : "AI Assistant"}
        </p>
        <p className="text-base whitespace-pre-wrap">{message.content}</p>
        {message.resources && message.resources.length > 0 && (
          <div className="mt-2 text-xs text-muted-foreground/80">
            <h5 className="font-semibold mb-1">Sources:</h5>
            <ul className="list-disc list-inside">
              {message.resources.map((resource, resIndex) => (
                <li key={resIndex}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="cursor-help underline-offset-2 hover:underline">
                          {resource.source}
                          {resource.page ? ` (Page ${resource.page})` : ""}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs p-2 text-xs">
                        <p>{resource.text_snippet}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {message.role === "user" && (
        <User className="h-6 w-6 shrink-0 text-primary-foreground-content" />
      )}
    </div>
  );

  return (
    // Adjusted height to fill available space, removed fixed height
    <Card className="flex flex-col flex-1 w-full max-w-3xl mx-auto">
      <CardContent className="flex-1 p-0 flex flex-col overflow-hidden">
        <ScrollArea className="flex-1 p-4">
          <div className="flex flex-col gap-4">
            {messages.length === 0 && !isLoading ? (
              <div className="text-center text-muted-foreground p-8">
                Start by asking a question about your document!
              </div>
            ) : (
              messages.map(renderMessage)
            )}
            {isLoading && (
              <div className="flex justify-center items-center p-4">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            )}
            <div ref={messagesEndRef} /> {/* Scroll target */}
          </div>
        </ScrollArea>
      </CardContent>
      <Separator className="my-0" />
      <CardFooter className="p-4">
        <div className="flex flex-col w-full gap-2">
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-32">
                  {selectedModel.label} Answer
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem 
                  onClick={() => setSelectedModel({
                    label: "Fast",
                    modelName: "Grok-3-mini",
                    id: "x-ai/grok-3-mini"
                  })}
                >
                  <div className="flex flex-col">
                    <span>Fast</span>
                    <span className="text-xs text-muted-foreground">Grok-3-mini</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setSelectedModel({
                    label: "Balanced",
                    modelName: "Gemini-2.5-flash",
                    id: "google/gemini-2.5-flash"
                  })}
                >
                  <div className="flex flex-col">
                    <span>Balanced</span>
                    <span className="text-xs text-muted-foreground">Gemini-2.5-flash</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setSelectedModel({
                    label: "Smart",
                    modelName: "Gemini-2.5-pro",
                    id: "google/gemini-2.5-pro"
                  })}
                >
                  <div className="flex flex-col">
                    <span>Smart</span>
                    <span className="text-xs text-muted-foreground">Gemini-2.5-pro</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <form onSubmit={handleSendMessage} className="flex flex-1 gap-2">
              <Input
                type="text"
                placeholder="Ask a question..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
          {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
        </div>
      </CardFooter>
    </Card>
  );
}
