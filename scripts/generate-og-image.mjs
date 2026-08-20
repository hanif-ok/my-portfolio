/**
 * Renders the Open Graph share card to public/images/og-cover.png.
 *
 * The card reuses the site's palette and paper-card motif so a link preview in
 * LinkedIn / WhatsApp / Slack looks like it came from the same place as the site.
 *
 * Fonts: the SVG asks for Syne and JetBrains Mono first, then falls back to the
 * exact stack global.css declares (Arial Black / Consolas). Machines with the
 * webfonts installed locally get the real faces for free; everything else still
 * renders on-brand. Run `npm run generate:og-image` after changing NAME/ROLE.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const OUTPUT = path.join(process.cwd(), "public", "images", "og-cover.png");

const WIDTH = 1200;
const HEIGHT = 630;

const PALETTE = {
  paper: "#e8ecef",
  surface: "#dde1e5",
  inkPrimary: "#2c3e50",
  inkSecondary: "#3d5166",
  inkMuted: "#6b7e8e",
  blueprint: "#3498db",
  statusDot: "#e74c3c",
};

const DISPLAY = "Syne, 'Arial Black', Arial, sans-serif";
const MONO = "'JetBrains Mono', Consolas, 'Courier New', monospace";

const NAME = "Hanif Omar Kertapati";
const ROLE = "Fullstack Engineer";
const DOMAIN = "hanifok.com";
const STACK = "Next.js  ·  Flutter  ·  Supabase  ·  n8n  ·  Go";

const escapeXml = (value) =>
  value.replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c])
  );

// Faint blueprint grid, same idea as graph paper behind the cards.
const grid = () => {
  const step = 40;
  const lines = [];
  for (let x = step; x < WIDTH; x += step) {
    lines.push(`<line x1="${x}" y1="0" x2="${x}" y2="${HEIGHT}" />`);
  }
  for (let y = step; y < HEIGHT; y += step) {
    lines.push(`<line x1="0" y1="${y}" x2="${WIDTH}" y2="${y}" />`);
  }
  return `<g stroke="${PALETTE.inkMuted}" stroke-width="1" opacity="0.13">${lines.join("")}</g>`;
};

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${PALETTE.paper}"/>
  ${grid()}

  <!-- paper card, tilted like .tilt-negative on the site -->
  <g transform="rotate(-0.8 600 315)">
    <rect x="84" y="66" width="1032" height="498" fill="#000000" opacity="0.07"/>
    <rect x="80" y="60" width="1032" height="498" fill="${PALETTE.surface}"
          stroke="${PALETTE.inkPrimary}" stroke-width="2"/>

    <text x="128" y="126" font-family="${MONO}" font-size="21" letter-spacing="3.5"
          fill="${PALETTE.inkMuted}">HELLO</text>

    <circle cx="1060" cy="118" r="11" fill="${PALETTE.statusDot}"/>

    <text x="128" y="264" font-family="${DISPLAY}" font-size="74" font-weight="700"
          fill="${PALETTE.inkPrimary}">${escapeXml(NAME)}</text>

    <text x="128" y="340" font-family="${DISPLAY}" font-size="56" font-weight="700"
          fill="${PALETTE.blueprint}">${escapeXml(ROLE)}</text>

    <line x1="128" y1="404" x2="1064" y2="404"
          stroke="${PALETTE.inkMuted}" stroke-width="1.5" stroke-dasharray="7 7"/>

    <text x="128" y="456" font-family="${MONO}" font-size="24"
          fill="${PALETTE.inkSecondary}">${escapeXml(STACK)}</text>

    <text x="128" y="516" font-family="${MONO}" font-size="27" letter-spacing="1"
          fill="${PALETTE.inkPrimary}">${escapeXml(DOMAIN)}</text>
  </g>
</svg>`;

await fs.mkdir(path.dirname(OUTPUT), { recursive: true });
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(OUTPUT);

const { size } = await fs.stat(OUTPUT);
console.log(`wrote ${path.relative(process.cwd(), OUTPUT)} (${WIDTH}x${HEIGHT}, ${(size / 1024).toFixed(1)} KB)`);
