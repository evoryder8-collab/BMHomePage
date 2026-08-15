"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth";

export default function AccountLink({ className = "" }: { className?: string }) {
  const { user, loading } = useAuth();
  const cls = `text-sm text-pearl/70 transition-colors hover:text-pearl ${className}`;
  if (loading) return <span className={cls}>&nbsp;</span>;
  return user ? (
    <Link href="/account" className={cls}>
      Account
    </Link>
  ) : (
    <Link href="/login" className={cls}>
      Log in
    </Link>
  );
}
