import { defineConfig } from "@playwright/test";

// Tests run against the production static export served with the same
// basePath GitHub Pages uses, so path bugs surface before deploy.
export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  retries: 1,
  use: {
    // Trailing slash matters: relative page.goto() paths resolve under the
    // basePath instead of the origin root.
    baseURL: "http://localhost:4173/BMHomePage/",
  },
  webServer: {
    // Nest the export under /BMHomePage so the served paths match GitHub Pages.
    command:
      "mkdir -p .serve && rm -f .serve/BMHomePage && ln -s ../out .serve/BMHomePage && npx serve .serve -l 4173",
    url: "http://localhost:4173/BMHomePage/",
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
