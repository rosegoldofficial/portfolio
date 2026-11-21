import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { notes } from '../../../lib/notes';

export function GET(context: APIContext) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: 'Security notes · Mikołaj Borawski',
    description: 'Blue-team notes in English: phishing, logs, network traffic, authentication.',
    site: new URL(base + '/en/', context.site).href,
    customData: '<language>en-gb</language>',
    items: notes.map((n: any) => ({ title: n.title, description: n.lead, pubDate: new Date(n.date), link: `${base}/en/notes/${n.slug}/` }))
  });
}
