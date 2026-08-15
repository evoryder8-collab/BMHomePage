export const SITE = {
  name: "Barbu Media",
  url: "https://evoryder8-collab.github.io/BMHomePage",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  supportEmail: "support@barbumedia.com",
  tagline: "Instruments, not apps.",
  location: "Zürich, Switzerland",
} as const;

/**
 * Prefix a public-asset or download path with the deployment basePath.
 * Next's own <Link>/<Image> handle this automatically; use withBase for
 * raw <img src>, download hrefs, and anything else Next doesn't rewrite.
 */
export function withBase(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return path;
  return `${base}${path}`;
}
