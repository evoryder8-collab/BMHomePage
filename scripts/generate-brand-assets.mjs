import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const socialSource = "public/social/barbu-media-social-source.png";
const socialPng = "public/social/barbu-media-social-card.png";
const socialJpg = "public/social/barbu-media-social-card.jpg";
const iconSvg = "app/icon.svg";

const socialOverlay = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fade" x1="0" y1="0" x2="760" y2="0" gradientUnits="userSpaceOnUse">
        <stop stop-color="#050608" stop-opacity="0.98"/>
        <stop offset="0.64" stop-color="#050608" stop-opacity="0.76"/>
        <stop offset="1" stop-color="#050608" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="rule" x1="82" y1="0" x2="532" y2="0" gradientUnits="userSpaceOnUse">
        <stop stop-color="#f0442f"/>
        <stop offset="0.54" stop-color="#73dce9"/>
        <stop offset="1" stop-color="#73dce9" stop-opacity="0"/>
      </linearGradient>
    </defs>

    <rect width="780" height="630" fill="url(#fade)"/>
    <rect x="43" y="40" width="1114" height="550" rx="26" fill="none" stroke="#fff" stroke-opacity="0.12"/>

    <g transform="translate(82 70)">
      <rect width="54" height="54" rx="17" fill="#f7f4ee" fill-opacity="0.09" stroke="#fff" stroke-opacity="0.28"/>
      <text x="27" y="34" text-anchor="middle" fill="#f7f4ee" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="-1">B/M</text>
      <text x="76" y="20" fill="#f7f4ee" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="18" font-weight="700" letter-spacing="2.8">BARBU MEDIA SOFTWARE</text>
      <text x="76" y="45" fill="#f7f4ee" fill-opacity="0.48" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="10" font-weight="600" letter-spacing="2.15">INDEPENDENT SOFTWARE COMPANY · ZÜRICH</text>
    </g>

    <text x="82" y="244" fill="#f7f4ee" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="66" font-weight="650" letter-spacing="-3.2">Software that</text>
    <text x="78" y="319" fill="#f5ede8" font-family="Didot, Bodoni 72, Times New Roman, serif" font-size="73" font-style="italic" font-weight="400" letter-spacing="-2.6">finishes the thought.</text>

    <text x="84" y="377" fill="#f7f4ee" fill-opacity="0.65" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="20" font-weight="400">Purpose-built professional software</text>
    <text x="84" y="409" fill="#f7f4ee" fill-opacity="0.65" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="20" font-weight="400">without the missing pieces.</text>

    <rect x="82" y="477" width="462" height="2" rx="1" fill="url(#rule)"/>
    <g transform="translate(82 504)">
      <rect width="36" height="36" rx="8" fill="#da291c"/>
      <path d="M15 8h6v7h7v6h-7v7h-6v-7H8v-6h7z" fill="#fff"/>
      <text x="52" y="14" fill="#f7f4ee" fill-opacity="0.48" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="10" font-weight="700" letter-spacing="2">CONCEIVED &amp; BUILT IN ZÜRICH</text>
      <text x="52" y="36" fill="#f7f4ee" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="2.2">BARBUMEDIA.COM</text>
    </g>
  </svg>
`);

const preparedBackground = await sharp(socialSource)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .modulate({ saturation: 0.98, brightness: 0.92 })
  .sharpen({ sigma: 0.55 })
  .png()
  .toBuffer();

const socialCard = sharp(preparedBackground).composite([
  { input: socialOverlay, top: 0, left: 0 },
]);

await socialCard.clone().png({ compressionLevel: 9 }).toFile(socialPng);
await socialCard
  .clone()
  .jpeg({ quality: 92, chromaSubsampling: "4:4:4", progressive: true })
  .toFile(socialJpg);

const icon = await readFile(iconSvg);
await sharp(icon).resize(180, 180).png().toFile("app/apple-icon.png");
await sharp(icon).resize(32, 32).png().toFile("public/favicon-32x32.png");
await sharp(icon).resize(192, 192).png().toFile("public/icon-192.png");
await sharp(icon).resize(512, 512).png().toFile("public/icon-512.png");

// ICO supports PNG-compressed image payloads. A single 128px entry gives
// legacy favicon requests a crisp source while modern browsers use icon.svg.
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
