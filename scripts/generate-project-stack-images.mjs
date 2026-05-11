import { promises as fs } from "node:fs";
import path from "node:path";

const PROJECTS_DIR = path.join(process.cwd(), "src", "content", "projects", "en");
const OUTPUT_DIR = path.join(process.cwd(), "public", "images", "project-stacks");
const LOGO_DIR = path.join(process.cwd(), "public", "images", "tech-logos");

const TECH_ICON_MAP = {
  n8n: { slug: "n8n", label: "n8n", color: "#EA4B71" },
  javascript: { slug: "javascript", label: "JavaScript", color: "#F7DF1E" },
  puppeteer: { slug: "puppeteer", label: "Puppeteer", color: "#40B5A4" },
  go: { slug: "go", label: "Go", color: "#00ADD8" },
  grafana: { slug: "grafana", label: "Grafana", color: "#F46800" },
  prometheus: { slug: "prometheus", label: "Prometheus", color: "#E6522C" },
  "next.js": { slug: "nextdotjs", label: "Next.js", color: "#000000" },
  supabase: { slug: "supabase", label: "Supabase", color: "#3ECF8E" },
  flutter: { slug: "flutter", label: "Flutter", color: "#02569B" },
  firebase: { slug: "firebase", label: "Firebase", color: "#DD2C00" },
};

const toRgb = (hex) => {
  const value = hex.replace("#", "");
  const n = parseInt(value, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
};

const toHex = ({ r, g, b }) =>
  `#${[r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("")}`;

const mix = (baseHex, overlayHex, ratio) => {
  const base = toRgb(baseHex);
  const overlay = toRgb(overlayHex);
  return toHex({
    r: base.r * (1 - ratio) + overlay.r * ratio,
    g: base.g * (1 - ratio) + overlay.g * ratio,
    b: base.b * (1 - ratio) + overlay.b * ratio,
  });
};

const parseTechStack = (content) => {
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return null;

  const techMatch = frontmatterMatch[1].match(/techStack:\s*\[([^\]]*)\]/m);
  if (!techMatch) return null;

  const stack = [];
  const valueRegex = /"([^"]+)"|'([^']+)'/g;
  let hit = valueRegex.exec(techMatch[1]);
  while (hit) {
    stack.push((hit[1] || hit[2]).trim());
    hit = valueRegex.exec(techMatch[1]);
  }
  return stack.length ? stack : null;
};

const downloadIcon = async (slug) => {
  const outputPath = path.join(LOGO_DIR, `${slug}.svg`);
  const iconUrl = `https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/${slug}.svg`;
  const response = await fetch(iconUrl, {
    headers: { "User-Agent": "portfolio-stack-image-generator" },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${iconUrl}: ${response.status} ${response.statusText}`);
  }

  const svg = await response.text();
  await fs.writeFile(outputPath, svg, "utf8");
  return svg;
};

const extractSvgParts = (svg) => {
  const viewBoxMatch = svg.match(/viewBox="([^"]+)"/i);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";
  const body = svg
    .replace(/<svg[^>]*>/i, "")
    .replace(/<\/svg>\s*$/i, "")
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .trim();

  return { viewBox, body };
};

const escapeXml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const makeCompositeSvg = (projectName, icons) => {
  const itemCount = icons.length;
  const width = Math.max(800, itemCount * 280);
  const height = 360;
  const segmentWidth = width / itemCount;

  const segments = icons
    .map((icon, index) => {
      const x = index * segmentWidth;
      const centerX = x + segmentWidth / 2;
      const bg = mix(icon.color, "#ffffff", 0.9);
      const border = mix(icon.color, "#ffffff", 0.7);
      const iconSize = 84;
      const iconX = centerX - iconSize / 2;
      const iconY = 106;
      const [vbX, vbY, vbW, vbH] = icon.viewBox.split(/\s+/).map(Number);
      const scale = Math.min(iconSize / vbW, iconSize / vbH);
      const tx = iconX + (iconSize - vbW * scale) / 2 - vbX * scale;
      const ty = iconY + (iconSize - vbH * scale) / 2 - vbY * scale;

      return `
  <rect x="${x}" y="0" width="${segmentWidth}" height="${height}" fill="${bg}" />
  <rect x="${x + 24}" y="88" width="${segmentWidth - 48}" height="112" rx="16" fill="#ffffff" stroke="${border}" stroke-width="2" />
  <g transform="translate(${tx} ${ty}) scale(${scale})" fill="${icon.color}">
    ${icon.body}
  </g>
  <text x="${centerX}" y="258" text-anchor="middle" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="24" font-weight="700" fill="#111111">${escapeXml(icon.label)}</text>`;
    })
    .join("\n");

  const dividers = icons
    .map((_, index) => {
      if (index === 0) return "";
      const x = index * segmentWidth;
      return `<line x1="${x}" y1="28" x2="${x}" y2="${height - 28}" stroke="#d7d7d7" stroke-width="2" />`;
    })
    .join("\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="surface" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#f3f3f3" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="${width}" height="${height}" fill="url(#surface)" />
  ${segments}
  ${dividers}
  <text x="${width / 2}" y="52" text-anchor="middle" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="18" font-weight="600" fill="#5b5b5b">${escapeXml(projectName)} Tech Stack</text>
</svg>
`;
};

const main = async () => {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.mkdir(LOGO_DIR, { recursive: true });

  const files = (await fs.readdir(PROJECTS_DIR)).filter((file) => file.endsWith(".md"));
  const uniqueSlugs = new Set();
  const projects = [];

  for (const file of files) {
    const fullPath = path.join(PROJECTS_DIR, file);
    const content = await fs.readFile(fullPath, "utf8");
    const techStack = parseTechStack(content);
    if (!techStack || techStack.length === 0) continue;

    const titleMatch = content.match(/^title:\s*"([^"]+)"/m);
    const title = titleMatch ? titleMatch[1] : path.basename(file, ".md");
    projects.push({
      file,
      slug: path.basename(file, ".md"),
      title,
      techStack,
    });

    for (const tech of techStack) uniqueSlugs.add(tech.toLowerCase());
  }

  const iconCache = new Map();
  for (const techKey of uniqueSlugs) {
    const mapped = TECH_ICON_MAP[techKey];
    if (!mapped) {
      throw new Error(`No icon mapping found for tech chip "${techKey}"`);
    }
    const svg = await downloadIcon(mapped.slug);
    iconCache.set(techKey, extractSvgParts(svg));
  }

  for (const project of projects) {
    const icons = project.techStack.map((tech) => {
      const key = tech.toLowerCase();
      const mapped = TECH_ICON_MAP[key];
      if (!mapped) {
        throw new Error(`Missing mapping for tech chip "${tech}" in project ${project.slug}`);
      }
      const iconParts = iconCache.get(key);
      return {
        label: mapped.label,
        color: mapped.color,
        viewBox: iconParts.viewBox,
        body: iconParts.body,
      };
    });

    const composite = makeCompositeSvg(project.title, icons);
    const outputPath = path.join(OUTPUT_DIR, `${project.slug}-stack.svg`);
    await fs.writeFile(outputPath, composite, "utf8");
  }

  console.log(`Downloaded ${iconCache.size} logos into public/images/tech-logos`);
  console.log(`Generated ${projects.length} stack images into public/images/project-stacks`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
