// lib/env.ts

// This function will only run on the server side.
// It explicitly checks for the presence of the environment variables.
export function checkSupabaseEnvVars(): boolean {
    const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
    const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY;
  
    return hasUrl && hasKey;
  }
  
  // This function provides the RAG API URL, ensuring it's set.
  export function getRagApiUrl(): string {
    const url = process.env.NEXT_PUBLIC_RAG_API_URL;
    if (!url) {
      // In production, this should ideally be caught at build time or deployment
      console.error("NEXT_PUBLIC_RAG_API_URL is not set!");
      throw new Error("RAG API URL is not configured. Please set NEXT_PUBLIC_RAG_API_URL in your .env.local file.");
    }
    return url;
  }