// app/protected/layout.tsx

import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { checkSupabaseEnvVars } from "@/lib/env"; // NEW IMPORT
import Link from "next/link";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasSupabaseEnvVars = checkSupabaseEnvVars(); // NEW: Perform check on server

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/protected"} className="hover:underline">
                RAG APP
              </Link>
              <ThemeSwitcher/>
           
            </div>
            <EnvVarWarning hasEnvVars={hasSupabaseEnvVars} />
            {hasSupabaseEnvVars && <AuthButton />}
          </div>
        </nav>
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          {children}
        </div>


      </div>
    </main>
  );
}