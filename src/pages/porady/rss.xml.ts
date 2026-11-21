import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { posts } from '../../lib/posts';

export function GET(context: APIContext) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: 'Bezpiecznie w sieci · Mikołaj Borawski',
    description: 'Krótkie poradniki dla mieszkańców: jak nie dać się oszukać przez telefon, SMS i internet.',
    site: new URL(base + '/', context.site).href,
    customData: '<language>pl-pl</language>',
    items: posts.map(p => ({ title: p.title, description: p.card + ' ' + p.lead, pubDate: new Date(p.date), link: `${base}/porady/${p.slug}/` }))
  });
}
