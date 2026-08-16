import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Impressum",
  description: "Legal disclosure for Barbu Media, Zürich, Switzerland.",
  path: "/legal/impressum/",
});

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum" updated="15 August 2026">
      <section>
        <h2>Responsible entity</h2>
        <p>
          <strong>Barbu Media</strong>
          <br />
          Sole proprietorship (Einzelunternehmen)
          <br />
          Owner: Constantin Barbu
          <br />
          Registered in Zürich, Switzerland
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Email: <strong>{SITE.supportEmail}</strong>
          <br />
          We respond within two business days.
        </p>
      </section>

      <section>
        <h2>Payments</h2>
        <p>
          Sales on this website are processed by Paddle as merchant of record;
          Paddle appears on your invoice and card statement.
        </p>
      </section>

      <section>
        <h2>Content responsibility</h2>
        <p>
          All content on this website is © Barbu Media unless stated
          otherwise. Product interfaces shown are genuine screenshots of
          shipping software; demonstration portraits used in B∕A Studio
          materials are synthetic and depict no real client.
        </p>
      </section>
    </LegalLayout>
  );
}
