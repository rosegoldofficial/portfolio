import { isLive } from './today';
const mods = import.meta.glob<any>('../content/notes/*.md', { eager: true });
export const notes = Object.values(mods)
  .map((m) => {
    const fm = m.frontmatter;
    const words = (fm.lead + ' ' + m.rawContent()).split(/\s+/).filter(Boolean).length;
    return { ...fm, slug: String(fm.slug), minutes: Math.max(2, Math.round(words / 200)), Content: m.Content };
  })
  .filter((n: any) => isLive(n.date))
  .sort((a: any, b: any) => b.n - a.n);
export const dateEn = (d: string | Date) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
