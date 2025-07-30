// lib/contexts/useSessionPolling.ts

import { useState, useCallback, useRef } from "react";
import { ragApiClient } from "@/lib/api/rag-api-client";
import { SessionData, StatusResponse } from "@/lib/api/rag-api-types";

interface UseSessionPollingProps {
  setSessions: React.Dispatch<React.SetStateAction<SessionData[]>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export function useSessionPolling({
  setSessions,
  setError,
}: UseSessionPollingProps) {
  const pollingIntervalsRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

  // Function to update a session's status in the local state
  // This function is crucial as it's called by the polling and by addSession/generateFaqs
  const updateSessionStatus = useCallback(
    (sessionId: string, statusResponse: StatusResponse) => {
      setSessions((prevSessions) => {
        const updatedSessions = prevSessions.map((session) =>
          session.user_session_id === sessionId
            ? {
                ...session,
                status: statusResponse.status,
                message: statusResponse.message,
                context_is_ready: statusResponse.status === "ready",
              }
            : session,
        );

        // After updating the status, if it's still processing/faq_processing,
        // ensure polling is active for this session.
        // This handles cases where status is updated externally (e.g., from generateFaqs click)
        const currentSession = updatedSessions.find(s => s.user_session_id === sessionId);
        if (currentSession && (currentSession.status === "processing" || currentSession.status === "faq_processing")) {
            // Ensure polling is running for this session
            // We use a direct call here to avoid circular dependencies with startPolling's useCallback
            if (!pollingIntervalsRef.current.has(sessionId)) {
                console.log(`[Polling] Re-starting polling for ${sessionId} due to status update to ${currentSession.status}`);
                // Call the internal polling logic directly, not the memoized startPolling
                // This is a common pattern when a callback needs to trigger another callback
                // that depends on a ref, without creating a dependency loop.
                const interval = setInterval(async () => {
                    try {
                        const statusResp = await ragApiClient.getIngestionStatus(sessionId);
                        console.log(`Polling status for ${sessionId}:`, statusResp.status);
                        updateSessionStatus(sessionId, statusResp); // Recursive call is fine here

                        if (statusResp.status === "ready" || statusResp.status === "error") {
                            clearInterval(interval);
                            pollingIntervalsRef.current.delete(sessionId);
                            if (statusResp.status === "ready") {
                                const fullSessionData = await ragApiClient.getSession(sessionId);
                                setSessions(p => p.map(s => s.user_session_id === sessionId ? fullSessionData : s));
                            }
                        }
                    } catch (err: any) {
                        console.error(`Error polling session ${sessionId}:`, err);
                        clearInterval(interval);
                        pollingIntervalsRef.current.delete(sessionId);
                        updateSessionStatus(sessionId, {
                            session_id: sessionId,
                            status: "error",
                            message: err.message || "Polling error",
                        });
                    }
                }, 5000);
                pollingIntervalsRef.current.set(sessionId, interval);
            }
        }
        return updatedSessions;
      });
    },
    [setSessions, setError], // Dependencies for updateSessionStatus
  );


  // Function to start polling for a session's status (primarily for initial setup)
  const startPolling = useCallback(
    (sessionId: string) => {
      // Only start if not already polling
      if (!pollingIntervalsRef.current.has(sessionId)) {
        console.log(`[Polling] Initial start polling for ${sessionId}`);
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
              clearInterval(interval);
              pollingIntervalsRef.current.delete(sessionId);
              if (statusResponse.status === "ready") {
                const fullSessionData = await ragApiClient.getSession(sessionId);
                setSessions((prevSessions) =>
                  prevSessions.map((session) =>
                    session.user_session_id === sessionId
                      ? fullSessionData
                      : session,
                  ),
                );
              }
            }
          } catch (err: any) {
            console.error(`Error polling session ${sessionId}:`, err);
            clearInterval(interval);
            pollingIntervalsRef.current.delete(sessionId);
            updateSessionStatus(sessionId, {
              session_id: sessionId,
              status: "error",
              message: err.message || "Polling error",
            });
          }
        }, 5000); // Poll every 5 seconds

        pollingIntervalsRef.current.set(sessionId, interval);
      }
    },
    [updateSessionStatus, setSessions, setError], // Dependencies for startPolling
  );

  // Function to clear all active polling intervals
  const clearIntervals = useCallback(() => {
    pollingIntervalsRef.current.forEach((interval) => clearInterval(interval));
    pollingIntervalsRef.current.clear();
  }, []);

  return { pollingIntervals: pollingIntervalsRef.current, startPolling, updateSessionStatus, clearIntervals };
}