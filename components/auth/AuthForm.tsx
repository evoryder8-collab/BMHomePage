"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import Button from "@/components/ui/Button";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const { signIn, signUp } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setNotice(null);
    setPending(true);
    if (mode === "login") {
      const { error } = await signIn(email.trim(), password);
      setPending(false);
      if (error) {
        setError(error);
        return;
      }
      router.push("/account");
      return;
    }
    const { error, needsConfirmation } = await signUp(email.trim(), password);
    setPending(false);
    if (error) {
      setError(error);
      return;
    }
    if (needsConfirmation) {
      setNotice(
        "Account created. Confirm your email to finish. We've sent you a message; once you confirm, log in here.",
      );
    } else {
      router.push("/account");
    }
  };

  return (
    <div className="mx-auto w-full max-w-sm">
      <h1 className="display-md mb-2">
        {mode === "login" ? "Welcome back." : "Create your account."}
      </h1>
      <p className="mb-8 text-sm text-pearl/60">
        {mode === "login"
          ? "Your licenses, downloads and invoices live here."
          : "One account for every Barbu Media instrument."}
      </p>

      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-pearl/60">
            Email
          </span>
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-pearl/15 bg-obsidian-soft px-4 py-3 text-sm outline-none transition focus:border-pearl/40"
            placeholder="you@studio.com"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-pearl/60">
            Password
          </span>
          <input
            type="password"
            required
            minLength={6}
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-pearl/15 bg-obsidian-soft px-4 py-3 text-sm outline-none transition focus:border-pearl/40"
            placeholder="••••••••"
          />
        </label>

        {error && (
          <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        )}
        {notice && (
          <p role="status" className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {notice}
          </p>
        )}

        <Button type="submit" disabled={pending} className="w-full">
          {pending
            ? "One moment…"
            : mode === "login"
              ? "Log in"
              : "Create account"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-pearl/60">
        {mode === "login" ? (
          <>
            New here?{" "}
            <Link href="/signup" className="font-semibold underline underline-offset-2">
              Create an account
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/login" className="font-semibold underline underline-offset-2">
              Log in
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
