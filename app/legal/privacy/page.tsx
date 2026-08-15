import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Barbu Media handles data — on this website and in our offline-first apps.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="15 August 2026">
      <p>
        The shortest honest summary: our apps are built to keep your work on
        your machine, and this website collects only what an online store
        needs to function. Barbu Media, Zürich, Switzerland is the data
        controller; Swiss data protection law (FADP) and, where applicable,
        the GDPR govern our processing.
      </p>

      <section>
        <h2>1. What our apps do NOT do</h2>
        <ul>
          <li>No cloud requirement — processing happens on your device.</li>
          <li>No telemetry, analytics or usage tracking.</li>
          <li>Your media and your clients&rsquo; photos never leave your device through us.</li>
          <li>No face-recognition registry; B∕A Studio&rsquo;s client records are non-biometric by default and any local face grouping is off unless you explicitly enable it.</li>
        </ul>
      </section>

      <section>
        <h2>2. License activation</h2>
        <p>
          Activating a license or trial transmits your license key, app
          version and a <strong>salted, one-way hash</strong> of a hardware
          identifier — never the identifier itself, and nothing about your
          media. We store this to enforce seat counts and prevent fraud. You
          can deactivate machines from your account at any time.
        </p>
      </section>

      <section>
        <h2>3. This website</h2>
        <ul>
          <li>
            <strong>Account:</strong> if you create one, we store your email
            address and authentication data with Supabase (EU-hosted
            infrastructure) to show you your licenses, downloads and invoices.
          </li>
          <li>
            <strong>Cart:</strong> stays in your browser&rsquo;s local
            storage; it is not sent to us.
          </li>
          <li>
            <strong>Checkout:</strong> handled by Paddle as merchant of
            record. Paddle processes your payment details and billing data
            under its own privacy policy; we receive order and license
            information, not card numbers.
          </li>
          <li>
            <strong>No advertising trackers.</strong> This site currently uses
            no analytics or marketing cookies.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Retention and your rights</h2>
        <p>
          We keep account and license data for as long as your account exists
          and as long as bookkeeping law requires. You may request access,
          correction, export or deletion of your personal data at any time at{" "}
          <strong>{SITE.supportEmail}</strong>. If you believe we handle your
          data unlawfully you may complain to the Swiss FDPIC or your local
          supervisory authority.
        </p>
      </section>

      <section>
        <h2>5. Your clients&rsquo; data</h2>
        <p>
          When you photograph clients with our apps, you are the controller of
          that material. The apps are designed to help you honour that
          responsibility: originals stay on your device, records are
          non-biometric by default, and nothing is uploaded to us — ever.
        </p>
      </section>
    </LegalLayout>
  );
}
