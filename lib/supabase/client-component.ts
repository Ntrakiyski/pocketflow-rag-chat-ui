import { createBrowserClient } from "@supabase/ssr";

/**
 * A Supabase client for use in Client Components.
 * This client uses browser cookies and does not rely on server-side APIs.
 */
export function createClientComponentClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY!
  );
}
