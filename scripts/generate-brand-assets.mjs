import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const posterSource = "public/art/barbu-media-ar-orbit-native.png";
const posterPng = "public/art/barbu-media-ar-orbit.png";
const posterWebp = "public/art/barbu-media-ar-orbit.webp";
const socialSource = posterPng;
const socialPng = "public/social/barbu-media-social-card.png";
const socialJpg = "public/social/barbu-media-social-card.jpg";
const logoSource = "assets/brand/barbu-media-mark-source.png";

// The social marks are rendered natively inside this source artwork. Do not
// composite separate badges here; that breaks the shared lighting and depth.
const brandedPoster = sharp(posterSource);
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
