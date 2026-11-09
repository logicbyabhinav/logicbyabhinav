// Regenerates assets/terminal.svg
//   node scripts/make-terminal.mjs
//
// Edit `session` to match the commands MiniCache actually supports.
// `req` / `res` are the raw RESP bytes, written with literal \r\n.
import { writeFileSync } from "node:fs";

const session = [
  { prompt: "$ ", promptColor: "#7f91a1", cmd: "redis-cli -p 6379" },
  {
    cmd: "PING",
    req: "*1\\r\\n$4\\r\\nPING\\r\\n", reqNote: "array of 1 bulk string",
    res: "+PONG\\r\\n", resNote: "simple string",
  },
  {
    cmd: "SET user:1 abhinav",
    req: "*3\\r\\n$3\\r\\nSET\\r\\n$6\\r\\nuser:1\\r\\n$7\\r\\nabhinav\\r\\n", reqNote: "array of 3 bulk strings",
    res: "+OK\\r\\n", resNote: "simple string",
  },
  {
    cmd: "GET user:1",
    req: "*2\\r\\n$3\\r\\nGET\\r\\n$6\\r\\nuser:1\\r\\n", reqNote: "array of 2 bulk strings",
    res: "$7\\r\\nabhinav\\r\\n", resNote: "bulk string, 7 bytes",
  },
  {
    cmd: "GET user:2",
    req: "*2\\r\\n$3\\r\\nGET\\r\\n$6\\r\\nuser:2\\r\\n", reqNote: "array of 2 bulk strings",
    res: "$-1\\r\\n", resNote: "null bulk string: key not found",
  },
];

const C = {
  bg: "#0a1118", bar: "#101a24", line: "#1d2b38", text: "#dce6ee", muted: "#7f91a1",
  note: "#51657a", teal: "#36d6c8", amber: "#ffb347", coral: "#ff6f61",
};
const W = 820, CH = 7.8, LH = 20, TOP = 68, PAD = 24, NOTE_X = 500;
const DEFAULT_PROMPT = "127.0.0.1:6379> ";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const f = (n) => +n.toFixed(4);

// ---- timeline -------------------------------------------------------------
let t = 0.6;
const events = [];
for (const item of session) {
  const prompt = item.prompt ?? DEFAULT_PROMPT;
  const typeDur = Math.min(0.045 * item.cmd.length + 0.2, 1.6);
  const ev = { item, prompt, cmdAt: t, typeDur };
  t += typeDur + 0.35;
  if (item.req) { ev.reqAt = t; t += 0.55; ev.resAt = t; t += 0.9; } else { t += 0.4; }
  events.push(ev);
}
const cursorAt = t;
const TOTAL = t + 3.2 + 0.7; // hold, then fade out

const fade = (start) =>
  `<animate attributeName="opacity" dur="${TOTAL}s" repeatCount="indefinite" ` +
  `keyTimes="0;${f(start / TOTAL)};${f((start + 0.12) / TOTAL)};${f((TOTAL - 0.7) / TOTAL)};${f((TOTAL - 0.1) / TOTAL)};1" ` +
  `values="0;0;1;1;0;0"/>`;

// ---- rows -----------------------------------------------------------------
let defs = "", rows = "", y = TOP, n = 0;
const row = (inner, start) => `<text x="${PAD}" y="${y}" opacity="0">${inner}${fade(start)}</text>\n`;

for (const ev of events) {
  const { item, prompt } = ev;
  const pw = prompt.length * CH, fw = (prompt.length + item.cmd.length) * CH + 6;
  const id = `clip${n++}`;
  defs += `<clipPath id="${id}"><rect x="${PAD}" y="${y - 16}" height="22" width="${f(pw)}">` +
    `<animate attributeName="width" dur="${TOTAL}s" repeatCount="indefinite" ` +
    `keyTimes="0;${f(ev.cmdAt / TOTAL)};${f((ev.cmdAt + ev.typeDur) / TOTAL)};1" values="${f(pw)};${f(pw)};${f(fw)};${f(fw)}"/></rect></clipPath>\n`;
  rows += `<g clip-path="url(#${id})"><text x="${PAD}" y="${y}" opacity="0">` +
    `<tspan fill="${item.promptColor ?? C.teal}">${esc(prompt)}</tspan><tspan fill="${C.text}">${esc(item.cmd)}</tspan>${fade(ev.cmdAt)}</text></g>\n`;
  y += LH;
  if (item.req) {
    rows += row(`<tspan fill="${C.amber}">  &gt;&gt; </tspan><tspan fill="${C.muted}">${esc(item.req)}</tspan>`, ev.reqAt);
    rows += `<text x="${NOTE_X}" y="${y}" fill="${C.note}" font-size="11.5" opacity="0"># ${esc(item.reqNote)}${fade(ev.reqAt)}</text>\n`;
    y += LH;
    rows += row(`<tspan fill="${C.teal}">  &lt;&lt; </tspan><tspan fill="${C.muted}">${esc(item.res)}</tspan>`, ev.resAt);
    rows += `<text x="${NOTE_X}" y="${y}" fill="${C.note}" font-size="11.5" opacity="0"># ${esc(item.resNote)}${fade(ev.resAt)}</text>\n`;
    y += LH;
  }
}

// final prompt with blinking cursor
rows += row(`<tspan fill="${C.teal}">${esc(DEFAULT_PROMPT)}</tspan>`, cursorAt);
rows += `<rect x="${f(PAD + DEFAULT_PROMPT.length * CH)}" y="${y - 12}" width="7" height="15" fill="${C.amber}" opacity="0">` +
  `<animate attributeName="opacity" dur="${TOTAL}s" repeatCount="indefinite" keyTimes="0;${f(cursorAt / TOTAL)};${f((cursorAt + 0.1) / TOTAL)};${f((TOTAL - 0.7) / TOTAL)};${f((TOTAL - 0.1) / TOTAL)};1" values="0;0;1;1;0;0"/>` +
  `</rect>\n`;
const H = y + 22;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Animated terminal session: a client sends PING, SET and GET to MiniCache and receives RESP replies">
<style>text{white-space:pre;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,"Liberation Mono",monospace;font-size:13px}</style>
<defs>
${defs}</defs>
<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="12" fill="${C.bg}" stroke="${C.line}"/>
<path d="M0.5 36 V12.5 a12 12 0 0 1 12 -12 H${W - 12.5} a12 12 0 0 1 12 12 V36 Z" fill="${C.bar}"/>
<line x1="0" y1="36.5" x2="${W}" y2="36.5" stroke="${C.line}"/>
<circle cx="22" cy="18" r="5" fill="${C.coral}"/><circle cx="40" cy="18" r="5" fill="${C.amber}"/><circle cx="58" cy="18" r="5" fill="${C.teal}"/>
<text x="${W / 2}" y="22" text-anchor="middle" fill="${C.muted}" font-size="12">minicache on :6379</text>
${rows}</svg>
`;
writeFileSync(new URL("../assets/terminal.svg", import.meta.url), svg);
console.log(`terminal.svg  ${W}x${H}  loop ${TOTAL.toFixed(1)}s`);
