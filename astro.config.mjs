// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { fixHtml } from './src/lib/orphans.mjs';

// Post-build: no lone one-letter words or numbers at line ends in static HTML.
const polishOrphans = {
  name: 'polish-orphans',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const root = fileURLToPath(dir);
      const files = await readdir(root, { recursive: true });
      for (const f of files.filter(f => f.endsWith('.html'))) {
        const p = join(root, f);
        await writeFile(p, fixHtml(await readFile(p, 'utf8')));
      }
    }
  }
};

// SITE_BASE=/portfolio while the site lives at rosegoldofficial.github.io/portfolio.
// Once mikolajborawski.pl points here, drop SITE_BASE from the workflow (base becomes "/").
export default defineConfig({
  site: process.env.SITE_URL || 'https://mikolajborawski.pl',
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'ignore',
  integrations: [polishOrphans, sitemap({ filter: (page) => !page.includes('/404') })],
  build: { format: 'directory', inlineStylesheets: 'always' }
});
