// lib/contexts/UserContext.tsx

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client"; // Import client-side Supabase client
import { User } from "@supabase/supabase-js"; // Supabase User type

// Define the shape of our UserContext state
interface UserContextType {
  user: User | null;
  loading: boolean; // True if still fetching initial user state
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the provider component
export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient(); // Get the client-side Supabase instance

  useEffect(() => {
    // Fetch initial user data
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    fetchUser();

    // Set up a real-time listener for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
      setLoading(false); // Ensure loading is false after any auth change
    });

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]); // Re-run if supabase client instance changes (unlikely)

  const value = { user, loading };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// Custom hook to use the UserContext
export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}