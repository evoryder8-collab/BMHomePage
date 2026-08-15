import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Barbu Media software and this website.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" updated="15 August 2026">
      <p>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your use of this
        website and of the software products published by Barbu Media, a sole
        proprietorship (Einzelunternehmen) registered in Zürich, Switzerland
        (&ldquo;Barbu Media&rdquo;, &ldquo;we&rdquo;). By purchasing,
        downloading or using our software you agree to these Terms.
      </p>

      <section>
        <h2>1. The software</h2>
        <p>
          Barbu Media publishes professional applications for macOS and iOS,
          currently Finalova and B∕A Studio. Software sold on this website is
          delivered as a direct download together with a personal license key.
          B∕A Studio for iPhone is distributed through the Apple App Store,
          where Apple&rsquo;s Media Services Terms additionally apply to the
          purchase.
        </p>
      </section>

      <section>
        <h2>2. License grant</h2>
        <p>
          Subject to payment, we grant you a personal, non-exclusive,
          non-transferable license to install and use the purchased edition of
          the software. Unless stated otherwise at purchase, each personal
          license may be activated on up to <strong>two (2) Macs</strong> that
          you use yourself; you can deactivate a machine at any time from your
          account to free a seat. Volume and enterprise licenses carry the
          seat count stated on the invoice.
        </p>
        <p>
          You may not resell, rent, sublicense or share your license key;
          circumvent license verification; or use the software to break the
          law. Exports you create with the software are yours.
        </p>
      </section>

      <section>
        <h2>3. Perpetual licenses and updates</h2>
        <p>
          Perpetual licenses are yours forever and include twelve (12) months
          of software updates from the date of purchase. After that period the
          software keeps working without limitation; installing updates
          released after your update entitlement ends requires an optional
          update renewal. Nothing about a lapsed renewal restricts the
          version you already run.
        </p>
      </section>

      <section>
        <h2>4. Subscriptions and trials</h2>
        <p>
          Subscriptions renew automatically until cancelled and can be
          cancelled at any time, effective at the end of the paid period.
          Trials are full-featured for the stated period and require a one-time
          internet activation; the software is otherwise designed to work
          offline.
        </p>
      </section>

      <section>
        <h2>5. Purchases and merchant of record</h2>
        <p>
          Sales on this website are processed by Paddle, acting as merchant of
          record. Paddle handles payment, applicable VAT/sales tax and
          invoicing; their terms of sale apply to the transaction alongside
          these Terms. Refunds are described in our{" "}
          <a href="./../refunds/" className="underline underline-offset-2">
            Refund Policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2>6. License signatures</h2>
        <p>
          Exports made with our software may carry an invisible signature that
          attributes the export to a license, as openly described in each
          product. The signature contains no personal data about you or the
          people depicted and cannot identify a client. It exists so authors
          can prove authorship of stolen exports and so licenses cannot be
          shared anonymously.
        </p>
      </section>

      <section>
        <h2>7. Warranty and liability</h2>
        <p>
          The software is provided with the care of a diligent Swiss craftsman
          and, to the maximum extent permitted by law, without warranty of
          fitness for a particular purpose. To the extent permitted by Swiss
          law, our total liability arising from the software or these Terms is
          limited to the amount you paid in the twelve months preceding the
          claim; we are not liable for indirect or consequential damages.
          Nothing in these Terms excludes liability for intent or gross
          negligence.
        </p>
      </section>

      <section>
        <h2>8. Measurements are information, not medical advice</h2>
        <p>
          B∕A Studio&rsquo;s measurements and the B∕A Lift Index are
          documentation tools computed from photographs. They are not medical
          devices, diagnoses or medical advice.
        </p>
      </section>

      <section>
        <h2>9. Governing law and venue</h2>
        <p>
          These Terms are governed by Swiss law, excluding its conflict-of-law
          rules. Exclusive venue is Zürich, Switzerland, subject to mandatory
          consumer-protection venues where applicable.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <p>
          Questions about these Terms: <strong>{SITE.supportEmail}</strong>.
        </p>
      </section>
    </LegalLayout>
  );
}
