// lib/contexts/SessionContext.tsx

"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { SessionData, StatusResponse } from "@/lib/api/rag-api-types";
import { useSessionManagement } from "./useSessionManagement"; // NEW IMPORT
import { useSessionPolling } from "./useSessionPolling"; // NEW IMPORT

// Define the shape of our context state
interface SessionContextType {
  sessions: SessionData[];
  loading: boolean;
  error: string | null;
  fetchSessions: () => Promise<void>;
  addSession: (newSessionPartial: Partial<SessionData>) => Promise<void>;
  updateSessionStatus: (sessionId: string, status: StatusResponse) => void;
}

// Create the context
const SessionContext = createContext<SessionContextType | undefined>(undefined);

// Define the provider component
export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [sessions, setSessions] = useState<SessionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use the new custom hook for polling logic
  const { pollingIntervals, startPolling, updateSessionStatus, clearIntervals } =
    useSessionPolling({ setSessions, setError });

  // Use the new custom hook for session management (fetch/add)
  const { fetchSessions, addSession } = useSessionManagement({
    setSessions,
    setLoading,
    setError,
    startPolling,
    updateSessionStatus,
  });

  // Effect to fetch sessions on initial load or user change
  useEffect(() => {
    fetchSessions();

    // Cleanup polling intervals on unmount
    return () => {
      clearIntervals();
    };
  }, [fetchSessions, clearIntervals]); // Depend on fetchSessions and clearIntervals

  const value = useMemo(
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