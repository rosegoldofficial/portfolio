const mods = import.meta.glob<any>('../content/notes/*.md', { eager: true });
export const notes = Object.values(mods)
  .map((m) => {
    const fm = m.frontmatter;
    const words = (fm.lead + ' ' + m.rawContent()).split(/\s+/).filter(Boolean).length;
    return { ...fm, slug: String(fm.slug), minutes: Math.max(2, Math.round(words / 200)), Content: m.Content };
  })
  .sort((a: any, b: any) => a.n - b.n);
export const dateEn = (d: string | Date) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
