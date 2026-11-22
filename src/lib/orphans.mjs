// Polish typography: keep one-letter words (a, i, o, u, w, z) and numbers
// together with the next word, so no line ends on a lone "w" or "3".
const NB = ' ';
const SINGLE = /(^|[\s („"«'\[\/—-])([aiouwzAIOUWZ])[ \t\n\r]+(?=\S)/g;
const NUM = /(\d)[ \t\n\r]+(?=[\p{L}%§]|\d{3}\b)/gu;

export function fixText(s) {
  if (!s || !/\s/.test(s)) return s;
  let prev;
  do { prev = s; s = s.replace(SINGLE, `$1$2${NB}`); } while (s !== prev);
  return s.replace(NUM, `$1${NB}`);
}

// HTML string: touch only text between tags, skip script/style/pre/code/textarea.
export function fixHtml(html) {
  const out = [];
  const re = /(<(script|style|pre|code|textarea)\b[\s\S]*?<\/\2>)|(<[^>]*>)|([^<]+)/gi;
  let m;
  while ((m = re.exec(html))) out.push(m[4] ? fixText(m[4]) : m[0]);
  return out.join('');
}
