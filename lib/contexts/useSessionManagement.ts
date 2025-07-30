// lib/contexts/useSessionManagement.ts

import { useCallback } from "react";
import { ragApiClient } from "@/lib/api/rag-api-client";
import { SessionData, StatusResponse } from "@/lib/api/rag-api-types";
import { useUser } from "@/lib/contexts/UserContext";
import { createClient as createSupabaseClient } from "@/lib/supabase/client";

interface UseSessionManagementProps {
  setSessions: React.Dispatch<React.SetStateAction<SessionData[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  startPolling: (sessionId: string) => void;
  updateSessionStatus: (sessionId: string, status: StatusResponse) => void;
}

export function useSessionManagement({
  setSessions,
  setLoading,
  setError,
  startPolling,
  updateSessionStatus,
}: UseSessionManagementProps) {
  const { user, loading: userLoading } = useUser();
  const supabase = createSupabaseClient();

  // Function to fetch all sessions for the current user from Supabase and RAG API
  const fetchSessions = useCallback(async () => {
    // Only fetch if user is loaded and logged in
    if (userLoading || !user?.id) {
      setLoading(false);
      setSessions([]); // Clear sessions if no user
      return;
    }

    setLoading(true);
    setError(null);
    try {
      // 1. Fetch user's RAG session IDs from Supabase
      const { data: userRagSessions, error: dbError } = await supabase
        .from("user_rag_sessions")
        .select("rag_session_id")
        .eq("user_id", user.id);

      if (dbError) {
        throw new Error(dbError.message || "Failed to fetch session IDs from Supabase.");
      }

      const fetchedSessions: SessionData[] = [];
      const sessionIdsToPoll: string[] = [];

      // 2. Fetch full session data from RAG API for each ID
      const fetchPromises = (userRagSessions || []).map(async ({ rag_session_id }) => {
        try {
          const session = await ragApiClient.getSession(rag_session_id);
          if (
            session.status === "processing" ||
            session.status === "faq_processing"
          ) {
            sessionIdsToPoll.push(session.user_session_id);
          }
          return session;
        } catch (sessionFetchError: any) {
          console.error(
            `Failed to fetch RAG session ${rag_session_id} from API:`,
            sessionFetchError,
          );
          return {
            user_session_id: rag_session_id,
            input_type: null,
            input_value: `Error loading: ${rag_session_id}`,
            processed_content: null,
            pdf_file_content_b64: null,
            generated_faqs: [],
            active_namespaces: [],
            chat_history: [],
            context_is_ready: false,
            status: "error",
            message: sessionFetchError.message || "Failed to load session data from RAG API",
          } as SessionData;
        }
      });

      const results = await Promise.allSettled(fetchPromises);

      results.forEach((result) => {
        if (result.status === "fulfilled") {
          fetchedSessions.push(result.value);
        }
      });

      setSessions(fetchedSessions);

      // 3. Start polling for any sessions still in progress
      sessionIdsToPoll.forEach((id) => startPolling(id));
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred while fetching sessions.");
      console.error("Error in fetchSessions:", err);
    } finally {
      setLoading(false);
    }
  }, [user?.id, userLoading, supabase, startPolling, setSessions, setLoading, setError]);

  // Function to add a new session to the local state and Supabase
  const addSession = useCallback(
    async (newSessionPartial: Partial<SessionData>) => {
      if (!user?.id) {
        setError("User not authenticated. Cannot add session.");
        return;
      }

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

      // Add to local state immediately for quick UI feedback
      setSessions((prevSessions) => [...prevSessions, newSession]);

      try {
        // Save the new session ID to Supabase
        const { error: dbError } = await supabase.from("user_rag_sessions").insert({
          user_id: user.id,
          rag_session_id: newSession.user_session_id,
        });

        if (dbError) {
          throw new Error(dbError.message || "Failed to save session to database.");
        }

        // Only start polling if Supabase save was successful
        if (
          newSession.status === "processing" ||
          newSession.status === "faq_processing"
        ) {
          startPolling(newSession.user_session_id);
        }
      } catch (err: any) {
        setError(err.message || "Failed to add session.");
        console.error("Add session error:", err);
        // Remove the session from local state if Supabase save fails
        setSessions((prev) =>
          prev.filter((s) => s.user_session_id !== newSession.user_session_id),
        );
      }
    },
    [user?.id, supabase, startPolling, setSessions, setError],
  );

  return { fetchSessions, addSession };
}