import { defineConfig } from "@playwright/test";

const port = process.env.PLAYWRIGHT_PORT ?? "4173";
const previewUrl = `http://localhost:${port}/`;

// Tests run against the production static export at the domain root, matching
// the custom-domain deployment on barbumedia.com.
export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  retries: 1,
  use: {
    // The trailing slash keeps relative page.goto() paths rooted predictably.
    baseURL: previewUrl,
  },
  webServer: {
    command: `npx serve out -l ${port}`,
    url: previewUrl,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
