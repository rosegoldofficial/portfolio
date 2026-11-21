import type { APIContext } from 'astro';
import { posts } from '../lib/posts';
import { notes } from '../lib/notes';

// Plain-language summary for AI tools (llms.txt convention). The HTML pages remain the source of truth.
export function GET(context: APIContext) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const u = (p: string) => new URL(base + p, context.site).href;
  const lines = [
    '# Mikołaj Borawski',
    '',
    '> Mikołaj Borawski (21) z Częstochowy, dzielnica Kiedrzyn. Zajmuje się cyberbezpieczeństwem i jawnością finansów samorządu. W 2026 roku współkoordynował zbiórkę podpisów pod referendum w sprawie odwołania władz Częstochowy (22 441 złożonych podpisów). Założyciel sieci serwerów Minecraft DungeonHub. Prowadzi poradnik „Bezpiecznie w sieci” dla mieszkańców.',
    '',
    'Kontakt: kontakt@mikolajborawski.pl, +48 510 684 160. Profile: facebook.com/mikolajjakubborawski, instagram.com/mikolajborawski, tiktok.com/@mikolajborawski, linkedin.com/in/mikolajborawski.',
    '',
    '## O mnie',
    `- [O mnie i dla mediów](${u('/media/')}): biogram, fakty, odpowiedzi na najczęstsze pytania, zdjęcia`,
    `- [DungeonHub, case study](${u('/projekty/dungeonhub/')}): sieć serwerów Minecraft, historia od 2018 roku, rola założyciela`,
    `- [Strona główna](${u('/')}): program, sport, cyberbezpieczeństwo, kontakt`,
    `- [English version](${u('/en/')})`,
    '',
    '## Bezpiecznie w sieci (porady po polsku)',
    ...posts.map(p => `- [${p.title}](${u(`/porady/${p.slug}/`)}): ${p.card}`),
    '',
    '## Security notes (English)',
    ...notes.map((n: any) => `- [${n.title}](${u(`/en/notes/${n.slug}/`)})`),
    ''
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
