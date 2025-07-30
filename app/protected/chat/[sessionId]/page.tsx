// app/protected/chat/[sessionId]/page.tsx

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { InfoIcon } from "lucide-react";

import { ChatComponent } from "@/components/rag/ChatComponent";

interface ChatPageProps {
  params: {
    sessionId: string;
  };
}

export default async function ChatPage({ params }: ChatPageProps) {
  const supabase = await createClient();

  // Ensure the user is authenticated
  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  const { sessionId } = params;

  return (
    // Removed outer flex-1, gap-12, and max-w-5xl from here.
    // The layout is now managed by the parent layout and ChatComponent's own max-width.
    <div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-8"> {/* Adjusted for full page height */}
      <div className="w-full max-w-3xl px-4"> {/* Max-width and padding for the info banner */}
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          You are chatting with session:{" "}
          <span className="font-mono text-sm font-semibold">{sessionId}</span>.
        </div>
      </div>
      {/* ChatComponent will now control its own height and width */}
      <div className="w-full max-w-3xl mt-8 flex-1 flex flex-col"> {/* Added flex-1 and flex-col to fill space */}
        <ChatComponent sessionId={sessionId} />
      </div>
    </div>
  );
}