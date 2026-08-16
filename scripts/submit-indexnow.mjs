const key = "79ae4af83e2d4d6aa5bc4bd6f12bc74e";
const host = "barbumedia.com";
const paths = [
  "/",
  "/apps/",
  "/finalova/",
  "/finalova/pricing/",
  "/ba-studio/",
  "/ba-studio/pricing/",
  "/store/",
  "/about/",
  "/press/",
  "/contact/",
];

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: paths.map((path) => `https://${host}${path}`),
  }),
});

if (![200, 202].includes(response.status)) {
  const body = await response.text();
  throw new Error(`IndexNow rejected the URL update (${response.status}): ${body}`);
}

console.log(`IndexNow accepted ${paths.length} URLs (${response.status}).`);
