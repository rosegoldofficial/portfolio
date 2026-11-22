export interface PostMeta {
  n: number;
  slug: string;
  tag: string;
  cats: string[];
  title: string;
  card: string;
  lead: string;
  date: string | Date;
  faq?: { q: string; a: string }[];
}
export interface Post extends PostMeta {
  minutes: number;
  num: string;
  Content: any;
}

const mods = import.meta.glob<any>('../content/porady/*.md', { eager: true });

export const CATS: { id: string; label: string }[] = [
  { id: 'sms', label: 'Telefon i SMS' },
  { id: 'bank', label: 'Bank i pieniądze' },
  { id: 'konta', label: 'Konta i hasła' },
  { id: 'zakupy', label: 'Zakupy i ogłoszenia' },
  { id: 'seniorzy', label: 'Dla seniorów' },
  { id: 'dzieci', label: 'Dzieci i gry' },
  { id: 'przewodniki', label: 'Dłuższe poradniki' }
];

export const posts: Post[] = Object.values(mods)
  .map((m) => {
    const fm = m.frontmatter as PostMeta;
    const words = (fm.lead + ' ' + m.rawContent()).split(/\s+/).filter(Boolean).length;
    return {
      ...fm,
      slug: String(fm.slug),
      minutes: Math.max(2, Math.round(words / 180)),
      num: '#' + String(fm.n).padStart(2, '0'),
      Content: m.Content
    };
  })
  .sort((a, b) => a.n - b.n);

export const dateLabel = (d: string | Date) =>
  new Date(d).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });

export const pl = (n: number, one: string, few: string, many: string) =>
  n === 1 ? one : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)) ? few : many;

export const searchIndex = () =>
  JSON.stringify(posts.map(p => ({ n: p.num, href: `porady/${p.slug}/`, tag: p.tag, t: p.title, k: [p.card, p.lead, p.cats.join(' ')].join(' ') })));
