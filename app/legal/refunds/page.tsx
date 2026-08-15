import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "14-day money-back guarantee on direct purchases.",
};

export default function RefundsPage() {
  return (
    <LegalLayout title="Refund Policy" updated="15 August 2026">
      <section>
        <h2>Direct purchases (this website)</h2>
        <p>
          If a Barbu Media app isn&rsquo;t right for you, tell us within{" "}
          <strong>14 days</strong> of purchase and you&rsquo;ll get your money
          back — no forms, no interrogation. Email{" "}
          <strong>{SITE.supportEmail}</strong> from your purchase email or use
          the receipt link; refunds are executed by Paddle, our merchant of
          record, to the original payment method. Refunded licenses are
          deactivated.
        </p>
      </section>

      <section>
        <h2>Subscriptions</h2>
        <p>
          Cancel anytime from your account or receipt link; cancellation takes
          effect at the end of the paid period and no further charges are
          made. The first 14 days of a new subscription are covered by the
          same money-back guarantee. We recommend using the free trial first —
          it&rsquo;s the full product.
        </p>
      </section>

      <section>
        <h2>App Store purchases</h2>
        <p>
          Purchases of B∕A Studio for iPhone made through the App Store are
          refunded by Apple under Apple&rsquo;s refund process
          (reportaproblem.apple.com); we cannot issue those refunds
          ourselves.
        </p>
      </section>

      <section>
        <h2>Statutory rights</h2>
        <p>
          This policy adds to, and does not limit, any mandatory rights you
          have under the law of your country of residence.
        </p>
      </section>
    </LegalLayout>
  );
}
