import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const posterBase = "public/art/barbu-media-ar-orbit-base.png";
const posterPng = "public/art/barbu-media-ar-orbit.png";
const posterWebp = "public/art/barbu-media-ar-orbit.webp";
const socialSource = posterPng;
const socialPng = "public/social/barbu-media-social-card.png";
const socialJpg = "public/social/barbu-media-social-card.jpg";
const logoSource = "assets/brand/barbu-media-mark-source.png";

const PLATFORM_BADGES = [
  { icon: "public/brand/social-instagram.svg", left: 998, top: 82, size: 84, rotate: -2 },
  { icon: "public/brand/social-tiktok.svg", left: 1000, top: 174, size: 82, rotate: 2 },
  { icon: "public/brand/social-linkedin.svg", left: 1001, top: 264, size: 82, rotate: -1 },
  { icon: "public/brand/social-youtube.svg", left: 148, top: 348, size: 66, rotate: -10 },
  { icon: "public/brand/social-facebook.svg", left: 1544, top: 708, size: 64, rotate: 8 },
];

async function platformBadge({ icon, size, rotate }) {
  const shell = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#765271" flood-opacity=".18"/>
        </filter>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#ffffff" stop-opacity=".92"/>
          <stop offset="1" stop-color="#edf8fb" stop-opacity=".72"/>
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="${size - 16}" height="${size - 16}" rx="${Math.round(size * .24)}" fill="url(#glass)" stroke="#ffffff" stroke-width="2" filter="url(#shadow)"/>
      <rect x="9" y="9" width="${size - 18}" height="${size - 18}" rx="${Math.round(size * .23)}" fill="none" stroke="#8e6d8b" stroke-opacity=".22"/>
    </svg>
  `);
  const iconBuffer = await sharp(await readFile(icon))
    .resize({ width: Math.round(size * .4), height: Math.round(size * .4), fit: "contain" })
    .png()
    .toBuffer();
  const composed = await sharp(shell)
    .composite([{ input: iconBuffer, left: Math.round(size * .3), top: Math.round(size * .3) }])
    .png()
    .toBuffer();
  return sharp(composed)
    .rotate(rotate, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

const posterComposites = await Promise.all(
  PLATFORM_BADGES.map(async (badge) => ({
    input: await platformBadge(badge),
    left: badge.left,
    top: badge.top,
  })),
);

const brandedPoster = sharp(posterBase).composite(posterComposites);
await brandedPoster.clone().png({ compressionLevel: 9 }).toFile(posterPng);
await brandedPoster
  .clone()
  .webp({ quality: 92, smartSubsample: true, effort: 6 })
  .toFile(posterWebp);

const brandLogo = await sharp(logoSource)
  .trim()
  .resize({ width: 640, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toBuffer();

await writeFile("public/brand/barbu-media-mark.png", brandLogo);

const socialLogo = await sharp(brandLogo)
  .resize({ width: 42, height: 42, fit: "contain" })
  .png()
  .toBuffer();

const socialOverlay = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fade" x1="0" y1="0" x2="830" y2="0" gradientUnits="userSpaceOnUse">
        <stop stop-color="#f4f7f7" stop-opacity="1"/>
        <stop offset="0.66" stop-color="#f4f7f7" stop-opacity="0.96"/>
        <stop offset="1" stop-color="#f4f7f7" stop-opacity="0"/>
      </linearGradient>
    </defs>

    <rect width="840" height="630" fill="url(#fade)"/>
    <rect x="42" y="40" width="1116" height="550" rx="12" fill="none" stroke="#765271" stroke-opacity="0.22"/>

    <g transform="translate(82 70)">
      <rect width="54" height="54" rx="10" fill="#000" fill-opacity="0.92" stroke="#fff" stroke-opacity="0.2"/>
      <text x="76" y="20" fill="#433549" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="18" font-weight="700" letter-spacing="2.8">BARBU MEDIA SOFTWARE</text>
      <text x="76" y="45" fill="#62596a" fill-opacity="0.68" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="10" font-weight="600" letter-spacing="2.15">INDEPENDENT SOFTWARE COMPANY</text>
    </g>

    <text x="82" y="241" fill="#433549" font-family="Didot, Bodoni 72, Times New Roman, serif" font-size="71" font-weight="400" letter-spacing="-2.7">Useful software,</text>
    <text x="78" y="316" fill="#765271" font-family="Didot, Bodoni 72, Times New Roman, serif" font-size="75" font-style="italic" font-weight="400" letter-spacing="-2.6">thought through.</text>

    <text x="84" y="376" fill="#62596a" fill-opacity="0.82" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="19" font-weight="400">Focused professional tools for complete,</text>
    <text x="84" y="407" fill="#62596a" fill-opacity="0.82" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="19" font-weight="400">real-world workflows.</text>

    <rect x="82" y="470" width="54" height="3" rx="1.5" fill="#765271"/>
    <text x="154" y="475" fill="#62596a" fill-opacity="0.72" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="10" font-weight="600" letter-spacing="2">FINALOVA · B/A STUDIO</text>
    <g transform="translate(82 504)">
      <rect width="36" height="36" rx="8" fill="#da291c"/>
      <path d="M15 8h6v7h7v6h-7v7h-6v-7H8v-6h7z" fill="#fff"/>
      <text x="52" y="14" fill="#62596a" fill-opacity="0.68" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="10" font-weight="700" letter-spacing="2">CONCEIVED &amp; BUILT IN ZÜRICH</text>
      <text x="52" y="36" fill="#433549" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="2.2">BARBUMEDIA.COM</text>
    </g>
  </svg>
`);

const preparedBackground = await sharp(socialSource)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .modulate({ saturation: 1.02, brightness: 1.01 })
  .sharpen({ sigma: 0.4 })
  .png()
  .toBuffer();

const socialCard = sharp(preparedBackground).composite([
  { input: socialOverlay, top: 0, left: 0 },
  { input: socialLogo, top: 76, left: 88 },
]);

await socialCard.clone().png({ compressionLevel: 9 }).toFile(socialPng);
await socialCard
  .clone()
  .jpeg({ quality: 92, chromaSubsampling: "4:4:4", progressive: true })
  .toFile(socialJpg);

const iconBase = Buffer.from(`
  <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="496" height="496" rx="112" fill="#000"/>
    <rect x="9" y="9" width="494" height="494" rx="111" fill="none" stroke="#fff" stroke-opacity=".13" stroke-width="2"/>
  </svg>
`);

const iconLogo = await sharp(brandLogo)
  .resize({ width: 344, height: 344, fit: "contain" })
  .png()
  .toBuffer();

const icon = await sharp(iconBase)
  .composite([{ input: iconLogo, top: 84, left: 84 }])
  .png()
  .toBuffer();

await writeFile("app/icon.png", icon);
await sharp(icon).resize(180, 180).png().toFile("app/apple-icon.png");
await sharp(icon).resize(32, 32).png().toFile("public/favicon-32x32.png");
await sharp(icon).resize(192, 192).png().toFile("public/icon-192.png");
await writeFile("public/icon-512.png", icon);

// ICO supports PNG-compressed image payloads. A single 128px entry gives
// legacy favicon requests a crisp source while modern browsers use icon.png.
const faviconPng = await sharp(icon).resize(128, 128).png().toBuffer();
const icoHeader = Buffer.alloc(22);
icoHeader.writeUInt16LE(0, 0); // reserved
icoHeader.writeUInt16LE(1, 2); // icon resource
icoHeader.writeUInt16LE(1, 4); // one image
icoHeader.writeUInt8(128, 6);
icoHeader.writeUInt8(128, 7);
icoHeader.writeUInt8(0, 8);
icoHeader.writeUInt8(0, 9);
icoHeader.writeUInt16LE(1, 10);
icoHeader.writeUInt16LE(32, 12);
icoHeader.writeUInt32LE(faviconPng.length, 14);
icoHeader.writeUInt32LE(22, 18);
await writeFile("app/favicon.ico", Buffer.concat([icoHeader, faviconPng]));

console.log("Generated Barbu Media social card and favicon assets.");
