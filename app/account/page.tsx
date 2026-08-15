"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import Button from "@/components/ui/Button";

function ZeroState({ label }: { label: string }) {
  return (
    <p className="rounded-xl border border-dashed border-ink/15 px-5 py-8 text-center text-sm text-ink/50">
      {label}
    </p>
  );
}

export default function AccountPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.replace("/login");
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="container-page flex min-h-[60vh] items-center justify-center text-sm text-ink/50">
        Loading your account…
      </div>
    );
  }

  return (
    <div className="container-page max-w-3xl py-16">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <div className="eyebrow mb-2 text-ink/50">Your account</div>
          <h1 className="display-md">{user.email}</h1>
        </div>
        <Button variant="ghost" onClick={() => void signOut()}>
          Sign out
        </Button>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="mb-3 text-lg font-semibold">Licenses</h2>
          <ZeroState label="Your purchases will appear here once checkout opens: license keys, editions and update entitlements, all in one place." />
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold">Activations</h2>
          <ZeroState label="Each license includes 2 Mac activations. You'll deactivate an old machine here yourself, with no support email required." />
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold">Downloads</h2>
          <ZeroState label="Notarized downloads for your apps will live here, always the latest version your license covers." />
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold">Invoices</h2>
          <ZeroState label="Your invoices will appear here after each purchase." />
        </section>
      </div>
    </div>
  );
}
