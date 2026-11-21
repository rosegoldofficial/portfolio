// Structured data (JSON-LD) shared across pages. Facts here must match the visible content.
export const SITE_NAME = 'Mikołaj Borawski';
export const SAME_AS = [
  'https://www.facebook.com/mikolajjakubborawski',
  'https://www.instagram.com/mikolajborawski/',
  'https://www.tiktok.com/@mikolajborawski',
  'https://www.linkedin.com/in/mikolajborawski'
];

export const abs = (site: URL, path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return new URL(base + path, site).href;
};

export const person = (site: URL) => ({
  '@type': 'Person',
  '@id': abs(site, '/#person'),
  name: 'Mikołaj Borawski',
  alternateName: 'Mikołaj Jakub Borawski',
  url: abs(site, '/'),
  image: abs(site, '/press/mikolaj-borawski-portret-biznesowy.jpg'),
  email: 'mailto:kontakt@mikolajborawski.pl',
  telephone: '+48510684160',
  jobTitle: 'Specjalista ds. marketingu i obsługi klienta',
  description: 'Mikołaj Borawski z Częstochowy (Kiedrzyn). Współkoordynował zbiórkę podpisów pod referendum w sprawie odwołania władz Częstochowy w 2026 roku, prowadzi poradnik „Bezpiecznie w sieci” dla mieszkańców i założył sieć serwerów Minecraft DungeonHub.',
  homeLocation: { '@type': 'Place', name: 'Częstochowa, Kiedrzyn', address: { '@type': 'PostalAddress', addressLocality: 'Częstochowa', addressCountry: 'PL' } },
  knowsAbout: ['cyberbezpieczeństwo', 'Blue Team', 'Cyber Threat Intelligence', 'oszustwa internetowe', 'jawność finansów samorządu', 'Częstochowa', 'Minecraft', 'marketing'],
  knowsLanguage: ['pl', 'en'],
  founder: { '@id': abs(site, '/projekty/dungeonhub/#org') },
  sameAs: SAME_AS
});

export const website = (site: URL) => ({
  '@type': 'WebSite',
  '@id': abs(site, '/#website'),
  url: abs(site, '/'),
  name: 'Mikołaj Borawski',
  inLanguage: ['pl', 'en'],
  publisher: { '@id': abs(site, '/#person') }
});

export const dungeonhub = (site: URL) => ({
  '@type': 'Organization',
  '@id': abs(site, '/projekty/dungeonhub/#org'),
  name: 'DungeonHub',
  url: 'https://dungeonhub.pl',
  description: 'Sieć serwerów Minecraft z lobby, trybami gry i serwerami podzielonymi na sektory, portalem ze sklepem i rankingami, wiki dla graczy i moderacją społeczności wspieraną przez AI.',
  founder: { '@id': abs(site, '/#person') }
});

export const article = (site: URL, o: { url: string; title: string; description: string; date: string | Date; image: string; lang: string; section: string }) => ({
  '@type': 'BlogPosting',
  '@id': o.url + '#article',
  mainEntityOfPage: o.url,
  headline: o.title,
  description: o.description,
  datePublished: new Date(o.date).toISOString().slice(0, 10),
  dateModified: new Date(o.date).toISOString().slice(0, 10),
  inLanguage: o.lang,
  articleSection: o.section,
  image: o.image,
  author: { '@id': abs(site, '/#person') },
  publisher: { '@id': abs(site, '/#person') }
});

export const faqPage = (items: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: items.map(i => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } }))
});

export const breadcrumbs = (site: URL, items: [string, string][]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(site, path) }))
});

export const graph = (...nodes: object[]) => JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
