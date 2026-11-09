// Builds assets/generated/stats.svg from live GitHub data (GraphQL).
// Runs inside GitHub Actions with GITHUB_TOKEN; needs Node 18+ (global fetch). No dependencies.
//
//   GITHUB_TOKEN=... GH_USER=logicbyabhinav node scripts/build-stats.mjs
//
// Contributions to private repos are only counted if GH_TOKEN is a personal
// access token (read:user) from the profile owner. The default GITHUB_TOKEN
// sees public activity only, which is fine for a public profile.
import { mkdirSync, writeFileSync } from "node:fs";

const USER = process.env.GH_USER || process.env.GITHUB_REPOSITORY_OWNER || "logicbyabhinav";
const TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
if (!TOKEN) { console.error("Set GITHUB_TOKEN or GH_TOKEN"); process.exit(1); }

const query = `
query($login: String!) {
  user(login: $login) {
    followers { totalCount }
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { contributionCount date } }
      }
    }
    repositories(ownerAffiliations: OWNER, isFork: false, privacy: PUBLIC, first: 100) {
      totalCount
      nodes {
        stargazerCount
        languages(first: 6, orderBy: {field: SIZE, direction: DESC}) {
          edges { size node { name } }
        }
      }
    }
  }
}`;

const res = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: { Authorization: `bearer ${TOKEN}`, "Content-Type": "application/json", "User-Agent": "profile-stats" },
  body: JSON.stringify({ query, variables: { login: USER } }),
});
const json = await res.json();
if (!res.ok || json.errors) { console.error(JSON.stringify(json.errors ?? json, null, 2)); process.exit(1); }
const u = json.data.user;

// ---- numbers ----------------------------------------------------------------
const weeks = u.contributionsCollection.contributionCalendar.weeks;
const days = weeks.flatMap((w) => w.contributionDays);
const total = u.contributionsCollection.contributionCalendar.totalContributions;
const today = new Date().toISOString().slice(0, 10);

let longest = 0, run = 0;
for (const d of days) { run = d.contributionCount > 0 ? run + 1 : 0; longest = Math.max(longest, run); }
// current streak: walk back from today (or yesterday, if today has no commits yet)
let current = 0, i = days.length - 1;
if (days[i]?.date === today && days[i].contributionCount === 0) i--;
for (; i >= 0 && days[i].contributionCount > 0; i--) current++;

const stars = u.repositories.nodes.reduce((s, r) => s + r.stargazerCount, 0);
const repoCount = u.repositories.totalCount;

const bytes = new Map();
for (const r of u.repositories.nodes)
  for (const e of r.languages.edges) bytes.set(e.node.name, (bytes.get(e.node.name) ?? 0) + e.size);
const langTotal = [...bytes.values()].reduce((a, b) => a + b, 0) || 1;
const langs = [...bytes].sort((a, b) => b[1] - a[1]).slice(0, 5)
  .map(([name, size]) => ({ name, pct: (size / langTotal) * 100 }));

// last 26 weeks, weekly totals
const recent = weeks.slice(-26).map((w) => w.contributionDays.reduce((s, d) => s + d.contributionCount, 0));

// ---- drawing ----------------------------------------------------------------
const C = {
  bg: "#0a1118", panel: "#101a24", line: "#1d2b38", text: "#e6eef5", muted: "#8396a6",
  teal: "#36d6c8", amber: "#ffb347", coral: "#ff6f61", lilac: "#a99cff", slate: "#5d7a94",
};
const langColors = [C.teal, C.amber, C.coral, C.lilac, C.slate];
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const W = 820, H = 250;

const tiles = [
  { label: "contributions, last year", value: total, color: C.teal },
  { label: "current streak (days)", value: current, color: C.amber },
  { label: "longest streak (days)", value: longest, color: C.amber },
  { label: "stars on public repos", value: stars, color: C.teal },
];

let tilesSvg = "";
tiles.forEach((t, k) => {
  const x = 24 + (k % 2) * 188, y = 24 + Math.floor(k / 2) * 74;
  tilesSvg += `<g transform="translate(${x},${y})">
    <rect width="176" height="64" rx="10" fill="${C.panel}" stroke="${C.line}"/>
    <rect x="0" y="14" width="3" height="36" rx="1.5" fill="${t.color}"/>
    <text x="18" y="35" font-size="26" font-weight="700" fill="${C.text}" class="sans">${esc(t.value)}</text>
    <text x="18" y="52" font-size="11.5" fill="${C.muted}" class="sans">${esc(t.label)}</text>
  </g>\n`;
});

// weekly bars (grow once on load)
const cx = 420, cy = 24, cw = 376, chh = 142, base = cy + chh - 18;
const max = Math.max(...recent, 1);
const bw = cw / recent.length;
let bars = "";
recent.forEach((v, k) => {
  const h = Math.max(2, (v / max) * (chh - 46));
  const x = cx + k * bw + 2;
  const last = k === recent.length - 1;
  bars += `<rect x="${x.toFixed(1)}" y="${base}" width="${(bw - 4).toFixed(1)}" height="0" rx="2" fill="${last ? C.amber : C.teal}" fill-opacity="${v ? (last ? 1 : 0.55 + 0.45 * (v / max)) : 0.18}">
    <animate attributeName="height" from="0" to="${h.toFixed(1)}" dur="0.7s" begin="${(k * 0.03).toFixed(2)}s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.2 0.8 0.2 1"/>
    <animate attributeName="y" from="${base}" to="${(base - h).toFixed(1)}" dur="0.7s" begin="${(k * 0.03).toFixed(2)}s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.2 0.8 0.2 1"/>
  </rect>\n`;
});

// language bar
let lx = 24;
const lw = W - 48;
let langBar = "", legend = "";
langs.forEach((l, k) => {
  const w = Math.max(4, (l.pct / 100) * lw);
  langBar += `<rect x="${lx.toFixed(1)}" y="188" width="${w.toFixed(1)}" height="10" fill="${langColors[k]}"/>`;
  lx += w;
  const x = 24 + k * 156;
  legend += `<circle cx="${x + 5}" cy="220" r="5" fill="${langColors[k]}"/>
    <text x="${x + 16}" y="224" font-size="12.5" fill="${C.text}" class="sans">${esc(l.name)} <tspan fill="${C.muted}">${l.pct.toFixed(1)}%</tspan></text>\n`;
});

const stamp = new Date().toISOString().slice(0, 10);
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="GitHub activity for ${esc(USER)}: ${total} contributions in the last year, ${current} day streak, ${repoCount} public repositories">
<style>.sans{font-family:"Segoe UI",Inter,"Helvetica Neue",Arial,sans-serif}</style>
<defs><clipPath id="lang"><rect x="24" y="188" width="${lw}" height="10" rx="5"/></clipPath></defs>
<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="14" fill="${C.bg}" stroke="${C.line}"/>
${tilesSvg}
<text x="${cx}" y="${cy + 14}" font-size="12.5" fill="${C.muted}" class="sans">contributions per week, last 26 weeks</text>
${bars}
<line x1="${cx}" y1="${base + 4}" x2="${cx + cw}" y2="${base + 4}" stroke="${C.line}"/>
<text x="24" y="176" font-size="12.5" fill="${C.muted}" class="sans">languages across ${repoCount} public repositories, by bytes</text>
<g clip-path="url(#lang)"><rect x="24" y="188" width="${lw}" height="10" fill="${C.panel}"/>${langBar}</g>
${legend}
<text x="${W - 24}" y="${H - 10}" text-anchor="end" font-size="10.5" fill="#4d6073" class="sans">updated ${stamp}</text>
</svg>
`;

mkdirSync(new URL("../assets/generated/", import.meta.url), { recursive: true });
writeFileSync(new URL("../assets/generated/stats.svg", import.meta.url), svg);
console.log(`stats.svg written: ${total} contributions, streak ${current}/${longest}, ${stars} stars, ${repoCount} repos`);
