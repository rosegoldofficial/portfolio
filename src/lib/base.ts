// Prefix root-relative links in the converted markup with the site base
// (needed while the site lives at github.io/portfolio, a no-op on the real domain).
export const withBase = (html: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!base) return html;
  return html
    .replace(/(href|src)="\/(?!\/)/g, `$1="${base}/`)
    .replace(/srcset="([^"]*)"/g, (_, v) => `srcset="${v.replace(/(^|,\s*)\/(?!\/)/g, `$1${base}/`)}"`);
};
