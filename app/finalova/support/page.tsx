import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Finalova for iPhone — Support",
  description: "Help with Finalova media, captions, exports and Apple-managed Premium purchases.",
  path: "/finalova/support/",
});

export default function FinalovaSupportPage() {
  return (
    <div className="bg-linen">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[14rem_1fr] md:py-20">
        <aside className="md:sticky md:top-24 md:self-start">
          <p className="eyebrow mb-4 text-ink/70">Finalova for iPhone</p>
          <nav aria-label="Finalova help" className="flex flex-wrap gap-x-5 gap-y-3 text-sm md:flex-col">
            <a href="#purchases" className="text-ink/80 hover:underline">Premium &amp; purchases</a>
            <a href="#media" className="text-ink/80 hover:underline">Media &amp; exports</a>
            <a href="#contact" className="text-ink/80 hover:underline">Contact support</a>
            <Link href="/finalova/privacy/" className="text-ink/80 hover:underline">Privacy Policy</Link>
          </nav>
        </aside>
        <article className="max-w-2xl space-y-10 text-base leading-relaxed text-ink/85 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_h3]:mb-2 [&_h3]:font-semibold [&_h3]:text-ink [&_section]:scroll-mt-28">
          <header>
            <h1 className="display-md mb-5 text-ink">Help with Finalova</h1>
            <p>Prepare your media, review the result and keep your finished files easy to find. Here is help with the iPhone edition.</p>
          </header>
          <section id="purchases" className="space-y-6">
            <h2>Premium &amp; purchases</h2>
            <div>
              <h3>Restore access on your iPhone</h3>
              <p>Use the Apple Account that made the purchase for App Store purchases, then choose Restore Purchases in Finalova. An internet connection is needed to check with Apple. Monthly and lifetime purchases cover the iPhone edition; desktop Studio is separate.</p>
            </div>
            <div>
              <h3>Manage or cancel a subscription</h3>
              <p>Use Manage Subscription in Finalova, or open iPhone Settings, tap your name, then Subscriptions. Apple manages App Store billing and cancellation. If you buy lifetime access while also subscribed monthly, cancel the monthly subscription separately to stop its renewal.</p>
            </div>
            <div>
              <h3>Local profile and Apple Account</h3>
              <p>Your name, email and profile photo are saved locally. They do not create an online Finalova account or transfer an Apple purchase to a different Apple Account.</p>
            </div>
            <div>
              <h3>Purchase options are unavailable</h3>
              <p>Check your connection and App Store sign-in, then use Retry on the Premium screen. If a completed purchase is still missing after Restore Purchases, contact support. Never send your Apple Account password.</p>
            </div>
          </section>
          <section id="media" className="space-y-6">
            <h2>Media &amp; exports</h2>
            <div>
              <h3>Logos and framing</h3>
              <p>Choose a logo from your saved collection or import one. Drag the selected logo&apos;s body to move it and use a corner bracket to resize it. Shape assessment lets you review placement across the frame shapes in your batch. Reframe has its own controls for changing the video&apos;s framing.</p>
            </div>
            <div>
              <h3>Captions</h3>
              <p>Speech recognition uses the models included with the app. Keep Finalova open while it works, then review the words, punctuation and timing before exporting. Music, background noise and overlapping voices can reduce recognition accuracy. Standalone Audio &amp; Lyrics editing is currently a desktop feature.</p>
            </div>
            <div>
              <h3>Find your finished files</h3>
              <p>Open History and expand an export to see its individual files and available preview or sharing actions. Photos exports appear in your Photos library. Files exports use the folder you chose. If access to an external folder has changed, choose it again; a moved or deleted output needs to be located or exported again.</p>
            </div>
            <div>
              <h3>If an export stops or the app closes</h3>
              <p>Check free device space and whether the original media is still available. For cloud-backed files, let the provider finish downloading them. Try one affected file and note the steps that reproduce the problem. Keep your original media and any completed exports while investigating.</p>
            </div>
          </section>
          <section id="contact" className="space-y-4">
            <h2>Contact support</h2>
            <p>Email{" "}<a href="mailto:contact@iconstantine.ch?subject=Finalova%20support" className="font-semibold text-ink underline underline-offset-4">contact@iconstantine.ch</a> with your Finalova version, iPhone model, iOS version, the action you tried and what happened. A screenshot or a short set of repeatable steps is helpful.</p>
            <p>Do not include passwords, payment details or private client media. If a sample is needed, use a file you are comfortable sharing. Nothing is sent by this page automatically.</p>
            <p className="text-sm">See the{" "}<Link href="/finalova/privacy/" className="underline underline-offset-4">Finalova Privacy Policy</Link> and{" "}<a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className="underline underline-offset-4">Apple Standard Terms of Use</a>.</p>
          </section>
        </article>
      </div>
    </div>
  );
}
