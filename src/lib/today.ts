// Build date in Polish time (YYYY-MM-DD). Content dated later stays unpublished
// until the nightly rebuild (deploy.yml cron, ~00:05 Warsaw) on that day.
export const TODAY = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Warsaw' }).format(new Date());
const iso = (d: string | Date) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d).slice(0, 10));
export const isLive = (d: string | Date) => process.env.SHOW_ALL === '1' || iso(d) <= TODAY;
