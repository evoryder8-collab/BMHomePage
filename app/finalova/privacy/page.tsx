import Link from "next/link";
import LegalLayout from "@/components/legal/LegalLayout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Finalova for iPhone: Privacy Policy",
  description: "How Finalova for iPhone handles your media, saved work, permissions and App Store purchases.",
  path: "/finalova/privacy/",
});

export default function FinalovaPrivacyPage() {
  return (
    <LegalLayout title="Finalova Privacy Policy" updated="4 October 2026">
      <p>
        This policy covers Finalova for iPhone, provided by Constantin Barbu,
        Barbu Media Software, Switzerland. It describes the app itself. The
        <Link href="/legal/privacy/" className="underline underline-offset-4"> website privacy policy</Link>
        {" "}covers this website and its separate services.
      </p>
      <section>
        <h2>Your media stays on your device</h2>
        <p>
          Finalova processes the photos and videos you import on your device. We
          do not upload your client media to our servers. Caption recognition
          runs locally with speech models included in the app. The links you
          enter in QR Builder are used to create your code on your device.
        </p>
      </section>
      <section>
        <h2>Saved work and your profile</h2>
        <p>
          Imported media, logos, captions, preferences, QR designs and export
          history are saved locally. Your profile name, email address and photo
          are local preferences: they are not sent to a Finalova account service,
          and they do not create an online account. You can remove session media
          in Settings, remove saved logos from your collection and manage
          exported files in Photos or Files.
        </p>
      </section>
      <section>
        <h2>Permissions, storage and sharing</h2>
        <p>
          Finalova accesses the media and folders you choose and requests Photos
          permission when saving there. Exports and files you choose to share go
          to the destinations you select. A cloud-backed Photos library, Files
          provider or device backup may store that content under its own privacy
          policy. A QR code you share exposes its encoded link to anyone who
          scans it.
        </p>
      </section>
      <section>
        <h2>App Store purchases</h2>
        <p>
          Apple handles payment, billing and App Store purchase records.
          Finalova uses verified purchase information to provide Premium access.
          Manage or cancel a subscription through your Apple Account; buying a
          lifetime option does not cancel a separate monthly subscription.
          Apple&apos;s privacy terms apply to its purchase services.
        </p>
      </section>
      <section>
        <h2>Tracking and diagnostics</h2>
        <p>
          This version has no advertising or analytics service and does not
          track you across other apps or websites. Diagnostic information stays
          on your device unless you choose to send it to support. Reports may
          contain device and error details. Review them before sharing and avoid
          including private client media or passwords.
        </p>
      </section>
      <section>
        <h2>If you contact support</h2>
        <p>
          We receive the email address, message and attachments you choose to
          send, and use them to respond to your request. You can ask about that
          correspondence or request its deletion by contacting us. Applicable
          legal recordkeeping requirements may limit deletion.
        </p>
      </section>
      <section>
        <h2>Contact and changes</h2>
        <p>
          For questions about this policy or your information, email{" "}
          <a href="mailto:contact@iconstantine.ch?subject=Finalova%20privacy" className="underline underline-offset-4">contact@iconstantine.ch</a>.
          We will update this page if the app&apos;s data practices change.
          Practical app help is available on the{" "}
          <Link href="/finalova/support/" className="underline underline-offset-4">Finalova support page</Link>.
        </p>
      </section>
    </LegalLayout>
  );
}
