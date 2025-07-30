// app/protected/page.tsx

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { InfoIcon } from "lucide-react";

import { SessionProvider } from "@/lib/contexts/SessionContext"; // Import the SessionProvider
import { IngestionForm } from "@/components/rag/IngestionForm"; // Import the IngestionForm
import { SessionList } from "@/components/rag/SessionList"; // Import the SessionList

export default async function ProtectedDashboardPage() {
  const supabase = await createClient();

  // Ensure the user is authenticated to access this page
  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login"); // Redirect to login if not authenticated
  }

  return (
    // Wrap the entire content with SessionProvider
    <SessionProvider>
      <div className="flex-1 w-full flex flex-col gap-12">
    
        {/* Ingestion Form Section */}
        <div className="flex flex-col gap-4 items-start">
          <IngestionForm />
        </div>

        {/* Session List Section */}
        <div className="flex flex-col gap-4 items-start">
          <h2 className="font-bold text-2xl">Your workspace</h2>
          <SessionList />
        </div>
      </div>
    </SessionProvider>
  );
}