"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  if (!session) {
    return (
      <button
        type="button"
        onClick={() => signIn("github")}
        className="text-sm font-medium text-muted hover:text-accent"
      >
        Sign in with GitHub
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-muted">{session.user?.name ?? session.user?.email}</span>
      <button
        type="button"
        onClick={() => signOut()}
        className="font-medium text-muted hover:text-accent"
      >
        Sign out
      </button>
    </div>
  );
}
