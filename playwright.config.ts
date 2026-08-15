import { defineConfig } from "@playwright/test";

const port = process.env.PLAYWRIGHT_PORT ?? "4173";
const previewUrl = `http://localhost:${port}/BMHomePage/`;

// Tests run against the production static export served with the same
// basePath GitHub Pages uses, so path bugs surface before deploy.
export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  retries: 1,
  use: {
    // Trailing slash matters: relative page.goto() paths resolve under the
    // basePath instead of the origin root.
    baseURL: previewUrl,
  },
  webServer: {
    // Nest the export under /BMHomePage so the served paths match GitHub Pages.
    command:
      `mkdir -p .serve && rm -f .serve/BMHomePage && ln -s ../out .serve/BMHomePage && npx serve .serve -l ${port}`,
    url: previewUrl,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
