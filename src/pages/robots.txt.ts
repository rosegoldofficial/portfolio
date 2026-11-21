import type { APIContext } from 'astro';

// Everyone is welcome, including AI search and training crawlers: the goal is to be found and cited.
export function GET(context: APIContext) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const sitemap = new URL(base + '/sitemap-index.xml', context.site).href;
  const bots = ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'GPTBot', 'Claude-SearchBot', 'Claude-User', 'ClaudeBot', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot', 'Applebot-Extended', 'DuckDuckBot', 'CCBot', 'Meta-ExternalAgent', 'Amazonbot', 'MistralAI-User'];
  const body = ['User-agent: *', 'Allow: /', '', ...bots.flatMap(b => [`User-agent: ${b}`, 'Allow: /', '']), `Sitemap: ${sitemap}`, ''].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
