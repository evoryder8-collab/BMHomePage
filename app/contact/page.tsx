"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website contact from ${name || email}`);
    const body = encodeURIComponent(`${message}\n\nFrom ${name} (${email})`);
    window.location.href = `mailto:${SITE.supportEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-ivory">
      <div className="container-page grid gap-14 py-16 md:grid-cols-2 md:py-20">
        <div>
          <Reveal>
            <h1 className="display-lg">Talk to us.</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65">
              Support, licensing, press, an idea the apps should steal: it
              all lands in the same inbox, read by the person who builds the
              software. We answer within two business days.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-sm text-ink/60">
              Prefer plain email? Write directly to{" "}
              <a
                className="font-semibold underline underline-offset-2"
                href={`mailto:${SITE.supportEmail}`}
              >
                {SITE.supportEmail}
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-2xl border border-ink/10 bg-white p-7 shadow-sm"
          >
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold text-ink/60">
                Name
              </span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-ink/40"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold text-ink/60">
                Email
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-ink/40"
                placeholder="you@studio.com"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold text-ink/60">
                Message
              </span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full resize-y rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-ink/40"
                placeholder="What can we help with?"
              />
            </label>
            <Button type="submit" className="w-full">
              Open in your mail app
            </Button>
            <p className="text-center text-xs text-ink/45">
              The button composes the message in your own mail client, so nothing
              is sent through this website.
            </p>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
