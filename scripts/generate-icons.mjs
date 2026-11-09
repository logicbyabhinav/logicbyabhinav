import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('d:/Dev/logicbyabhinav/assets/icons');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Single cohesive Titanium Slate palette with varying tonal shades
const c = {
  bright: '#F0F6FC',  // highlight
  primary: '#C9D1D9', // main glyph
  muted: '#8B949E',   // secondary / accent
  dark: '#484F58',    // border / subtle
  bg: '#161B22'       // card background
};

const icons = {
  // --- Social / Connect Icons ---
  'gmail.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <rect width="24" height="24" rx="4" fill="none"/>
    <path d="M4 6C2.9 6 2 6.9 2 8V16C2 17.1 2.9 18 4 18H20C21.1 18 22 17.1 22 16V8C22 6.9 21.1 6 20 6H4Z" stroke="${c.primary}" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M2 8L12 14L22 8" stroke="${c.bright}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  'github.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="${c.primary}">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>`,

  // --- Languages & Tools Icons ---
  'java.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path d="M7 17.5C10.5 18.5 15.5 18.5 18 17.5C15 16.5 10 16.5 7 17.5Z" fill="${c.muted}"/>
    <path d="M5 20.5C9 22 16.5 22 20 20.5C16 19.5 9 19.5 5 20.5Z" fill="${c.muted}"/>
    <path d="M8.5 14C9.5 14.5 13.5 14.8 16 13.5C17.5 12.7 18 11.5 18 10.5C18 9 17 8 15 8C13.5 8 11.5 9 11 10.5C10.5 12 11 13 13 13" stroke="${c.primary}" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M12.5 2C10.5 4 14.5 6 12 8" stroke="${c.bright}" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M15.5 3C14 4.5 17 6 15 7.5" stroke="${c.muted}" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M6 15C9 16 14 16 17 14.8" stroke="${c.dark}" stroke-width="1.4" stroke-linecap="round"/>
  </svg>`,

  'c.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path d="M12 2.5L20 7.1V16.9L12 21.5L4 16.9V7.1L12 2.5Z" stroke="${c.muted}" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M14.8 8.8C14 8.2 13 7.8 11.8 7.8C9.5 7.8 7.8 9.6 7.8 12C7.8 14.4 9.5 16.2 11.8 16.2C13 16.2 14 15.8 14.8 15.2" stroke="${c.bright}" stroke-width="2.2" stroke-linecap="round"/>
  </svg>`,

  'cpp.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path d="M12 2.5L20 7.1V16.9L12 21.5L4 16.9V7.1L12 2.5Z" stroke="${c.muted}" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M11 9C10.5 8.5 9.8 8.2 8.9 8.2C7.2 8.2 5.9 9.8 5.9 12C5.9 14.2 7.2 15.8 8.9 15.8C9.8 15.8 10.5 15.5 11 15" stroke="${c.bright}" stroke-width="2" stroke-linecap="round"/>
    <path d="M14 10.5V13.5M12.5 12H15.5" stroke="${c.primary}" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M18.5 10.5V13.5M17 12H20" stroke="${c.primary}" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`,

  'python.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <!-- Top snake -->
    <path d="M11.9 2C8.6 2 8.8 3.4 8.8 3.4L8.8 5.1H12.2V5.6H5.4C5.4 5.6 2 5.2 2 8.9C2 12.6 5 12.4 5 12.4H6.8V10.7C6.8 8.8 8.5 8.7 8.5 8.7H11.9C13.8 8.7 15.3 7.2 15.3 5.4C15.3 3.6 14.5 2 11.9 2ZM10.2 3.4C10.6 3.4 10.9 3.7 10.9 4.1C10.9 4.5 10.6 4.8 10.2 4.8C9.8 4.8 9.5 4.5 9.5 4.1C9.5 3.7 9.8 3.4 10.2 3.4Z" fill="${c.bright}"/>
    <!-- Bottom snake -->
    <path d="M12.1 22C15.4 22 15.2 20.6 15.2 20.6L15.2 18.9H11.8V18.4H18.6C18.6 18.4 22 18.8 22 15.1C22 11.4 19 11.6 19 11.6H17.2V13.3C17.2 15.2 15.5 15.3 15.5 15.3H12.1C10.2 15.3 8.7 16.8 8.7 18.6C8.7 20.4 9.5 22 12.1 22ZM13.8 20.6C13.4 20.6 13.1 20.3 13.1 19.9C13.1 19.5 13.4 19.2 13.8 19.2C14.2 19.2 14.5 19.5 14.5 19.9C14.5 20.3 14.2 20.6 13.8 20.6Z" fill="${c.muted}"/>
  </svg>`,

  'javascript.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="${c.bg}" stroke="${c.muted}" stroke-width="1.5"/>
    <path d="M8 13.5V17.5C8 18.3 7.4 19 6.6 19C5.8 19 5.2 18.3 5.2 17.5" stroke="${c.bright}" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M13 14.2C13 13.5 13.6 13 14.5 13C15.4 13 16 13.5 16 14.2C16 15.4 13 15.8 13 17.5C13 18.4 13.8 19 14.8 19C15.8 19 16.5 18.4 16.5 17.8" stroke="${c.bright}" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`,

  'nodejs.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path d="M12 2.5L20 7.1V16.9L12 21.5L4 16.9V7.1L12 2.5Z" stroke="${c.primary}" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M12 7.5V16.5M12 12L18 8.5M12 12L6 8.5" stroke="${c.muted}" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>`,

  'linux.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <!-- Tux penguin body -->
    <path d="M12 3C9.8 3 8 4.8 8 7.5C8 9.2 8.5 10.5 8.2 12C7.8 13.8 6 15.5 6 17.5C6 19.5 8.2 20.5 12 20.5C15.8 20.5 18 19.5 18 17.5C18 15.5 16.2 13.8 15.8 12C15.5 10.5 16 9.2 16 7.5C16 4.8 14.2 3 12 3Z" stroke="${c.primary}" stroke-width="1.5" fill="${c.bg}"/>
    <!-- Belly -->
    <path d="M12 10.5C10.5 10.5 9.5 12 9.5 14.5C9.5 17 10.5 18.5 12 18.5C13.5 18.5 14.5 17 14.5 14.5C14.5 12 13.5 10.5 12 10.5Z" fill="${c.bright}"/>
    <!-- Beak -->
    <path d="M11 7.8L12 8.8L13 7.8H11Z" fill="${c.muted}"/>
  </svg>`,

  'git.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="4" transform="rotate(45 12 12)" stroke="${c.muted}" stroke-width="1.5"/>
    <!-- Branch nodes -->
    <circle cx="9" cy="15" r="1.8" fill="${c.bright}"/>
    <circle cx="15" cy="9" r="1.8" fill="${c.bright}"/>
    <circle cx="9" cy="9" r="1.8" fill="${c.muted}"/>
    <path d="M9 10.8V13.2M10.3 10.3L13.7 13.7" stroke="${c.primary}" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  'bash.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <rect x="2" y="3" width="20" height="18" rx="3" stroke="${c.muted}" stroke-width="1.5" fill="${c.bg}"/>
    <path d="M6 8L10 12L6 16" stroke="${c.bright}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 16H18" stroke="${c.primary}" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  'mysql.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <!-- Dolphin tail & leap curve -->
    <path d="M21 8C19 6 15 5.5 12 7C9.5 8.2 7.5 10.5 6 13C4.8 15 3.5 16.5 2 17C4.2 16.8 6.5 15.5 8 14C9.5 12.5 11.2 10.8 13.5 10.2C15.5 9.7 17.5 10.2 19 11.5L21 8Z" fill="${c.bright}"/>
    <!-- Database disc below -->
    <ellipse cx="12" cy="19" rx="7" ry="2.2" stroke="${c.muted}" stroke-width="1.4"/>
    <path d="M5 16C5 17.2 8.1 18.2 12 18.2C15.9 18.2 19 17.2 19 16" stroke="${c.muted}" stroke-width="1.4"/>
  </svg>`,

  'redis.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <!-- Top isometric slab -->
    <polygon points="12,2 21,6.5 12,11 3,6.5" fill="${c.bright}" stroke="${c.muted}" stroke-width="1"/>
    <!-- Middle isometric slab -->
    <polygon points="12,7.5 21,12 12,16.5 3,12" fill="${c.primary}" stroke="${c.muted}" stroke-width="1"/>
    <!-- Bottom isometric slab -->
    <polygon points="12,13 21,17.5 12,22 3,17.5" fill="${c.muted}" stroke="${c.dark}" stroke-width="1"/>
  </svg>`,

  'express.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <rect x="2" y="3" width="20" height="18" rx="3" stroke="${c.muted}" stroke-width="1.5" fill="${c.bg}"/>
    <text x="6" y="16" font-family="ui-monospace, monospace" font-size="11" font-weight="700" fill="${c.bright}">ex</text>
  </svg>`,

  'firebase.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <!-- Left flame facet -->
    <path d="M4.5 17.5L8.5 3L11.5 8.5L4.5 17.5Z" fill="${c.muted}"/>
    <!-- Right flame facet -->
    <path d="M19.5 17.5L14 3.5L11.5 8.5L19.5 17.5Z" fill="${c.primary}"/>
    <!-- Central flame facet -->
    <path d="M11.5 8.5L8 15L12 21L19.5 17.5L11.5 8.5Z" fill="${c.bright}"/>
  </svg>`,

  'vscode.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <!-- VS Code origami ribbon folds -->
    <path d="M17.5 2.5L7.5 10.2L3.5 7L2 7.8V16.2L3.5 17L7.5 13.8L17.5 21.5L22 19.5V4.5L17.5 2.5Z" stroke="${c.muted}" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M17.5 2.5L7.5 10.2L17.5 18V2.5Z" fill="${c.bright}" fill-opacity="0.9"/>
    <path d="M17.5 21.5L7.5 13.8L17.5 6V21.5Z" fill="${c.muted}" fill-opacity="0.8"/>
    <path d="M2 7.8L7.5 12L2 16.2V7.8Z" fill="${c.primary}"/>
  </svg>`
};

for (const [filename, svg] of Object.entries(icons)) {
  fs.writeFileSync(path.join(outDir, filename), svg.trim() + '\n', 'utf8');
  console.log(`Generated: assets/icons/${filename}`);
}
