// @ts-check
import { defineConfig } from 'astro/config';

// SITE_BASE=/portfolio while the site lives at rosegoldofficial.github.io/portfolio.
// Once mikolajborawski.pl points here, drop SITE_BASE from the workflow (base becomes "/").
export default defineConfig({
  site: process.env.SITE_URL || 'https://mikolajborawski.pl',
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' }
});
