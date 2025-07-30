// lib/contexts/SessionContext.tsx

"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { ragApiClient } from "@/lib/api/rag-api-client";
import { SessionData, StatusResponse } from "@/lib/api/rag-api-types";
import { useUser } from "@/lib/contexts/UserContext"; // Import useUser from our new UserContext

// Define the shape of our context state
interface SessionContextType {
  sessions: SessionData[];
  loading: boolean;
  error: string | null;
  fetchSessions: () => Promise<void>;
  addSession: (newSessionPartial: Partial<SessionData>) => void;
  updateSessionStatus: (sessionId: string, status: StatusResponse) => void;
  // Potentially add functions for deleting sessions, etc.
}

// Create the context
const SessionContext = createContext<SessionContextType | undefined>(undefined);

// Define the provider component
export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [sessions, setSessions] = useState<SessionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, loading: userLoading } = useUser(); // Use our new useUser hook

  // Use a map to track polling intervals for each session
  const [pollingIntervals, setPollingIntervals] = useState<
    Map<string, NodeJS.Timeout>
  >(new Map());

  // --- FIX START: Define updateSessionStatus BEFORE startPolling ---

  // Function to update a session's status in the local state
  const updateSessionStatus = useCallback(
    (sessionId: string, statusResponse: StatusResponse) => {
      setSessions((prevSessions) =>
        prevSessions.map((session) =>
          session.user_session_id === sessionId
            ? {
                ...session,
                status: statusResponse.status,
                message: statusResponse.message,
                context_is_ready: statusResponse.status === "ready",
              }
            : session,
        ),
      );
    },
    [],
  );

  // Function to start polling for a session's status
  const startPolling = useCallback((sessionId: string) => {
    // Clear any existing interval for this session first
    if (pollingIntervals.has(sessionId)) {
      clearInterval(pollingIntervals.get(sessionId)!);
      pollingIntervals.delete(sessionId);
    }

    const interval = setInterval(async () => {
      try {
        const statusResponse = await ragApiClient.getIngestionStatus(
          sessionId,
        );
        console.log(`Polling status for ${sessionId}:`, statusResponse.status);
        updateSessionStatus(sessionId, statusResponse); // This call is now safe

        if (
          statusResponse.status === "ready" ||
          statusResponse.status === "error"
        ) {
          // Stop polling if status is final
          clearInterval(interval);
          setPollingIntervals((prev) => {
            const newMap = new Map(prev);
            newMap.delete(sessionId);
            return newMap;
          });
          // After stopping polling, fetch the full session data to get FAQs, etc.
          if (statusResponse.status === "ready") {
            // Fetch the full session data to get all populated fields
            const fullSessionData = await ragApiClient.getSession(sessionId);
            setSessions((prevSessions) =>
              prevSessions.map((session) =>
                session.user_session_id === sessionId
                  ? fullSessionData // Replace with the full, updated data
                  : session,
              ),
            );
          }
        }
      } catch (err: unknown) {
        console.error(`Error polling session ${sessionId}:`, err);
        // Stop polling on error to prevent infinite loops
        clearInterval(interval);
        setPollingIntervals((prev) => {
          const newMap = new Map(prev);
          newMap.delete(sessionId);
          return newMap;
        });
        updateSessionStatus(sessionId, {
          session_id: sessionId,
          status: "error",
          message: err instanceof Error ? err.message : "Polling error",
        });
      }
    }, 5000); // Poll every 5 seconds

    setPollingIntervals((prev) => new Map(prev).set(sessionId, interval));
  }, [pollingIntervals, updateSessionStatus]); // Dependency on pollingIntervals and updateSessionStatus

  // --- FIX END ---

  // Function to fetch all sessions for the current user
  const fetchSessions = useCallback(async () => {
    if (userLoading) {
      setLoading(true);
      return;
    }
    if (!user?.id) {
      setLoading(false);
      setSessions([]);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      console.warn(
        "SessionContext: `fetchSessions` currently does not retrieve sessions from a backend list. Implement Supabase table for user-session_id mapping.",
      );
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to fetch sessions.");
    } finally {
      setLoading(false);
    }
  }, [user?.id, userLoading]);

  // Function to add a new session to the local state and start polling
  const addSession = useCallback(
    (newSessionPartial: Partial<SessionData>) => {
      const newSession: SessionData = {
        processed_content: null,
        pdf_file_content_b64: null,
        generated_faqs: [],
        active_namespaces: [],
        chat_history: [],
        context_is_ready: false,
        ...newSessionPartial,
        user_session_id: newSessionPartial.user_session_id!,
        input_type: newSessionPartial.input_type!,
        input_value: newSessionPartial.input_value!,
        status: newSessionPartial.status!,
        message: newSessionPartial.message!,
      };

      setSessions((prevSessions) => [...prevSessions, newSession]);
      if (
        newSession.status === "processing" ||
        newSession.status === "faq_processing"
      ) {
        startPolling(newSession.user_session_id);
      }
    },
    [startPolling],
  );

  // Effect to fetch sessions on initial load or user change
  useEffect(() => {
    fetchSessions();

    // Cleanup polling intervals on unmount
    return () => {
      pollingIntervals.forEach((interval) => clearInterval(interval));
    };
  }, [fetchSessions, pollingIntervals]);

  const value = React.useMemo(
    () => ({
      sessions,
      loading,
      error,
      fetchSessions,
      addSession,
      updateSessionStatus,
    }),
    [sessions, loading, error, fetchSessions, addSession, updateSessionStatus],
  );

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
}

// Custom hook to use the session context
export function useSessions() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSessions must be used within a SessionProvider");
  }
  return context;
}
