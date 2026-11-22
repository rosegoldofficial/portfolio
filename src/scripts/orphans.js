import { fixText } from '../lib/orphans.mjs';
const SKIP = new Set(['SCRIPT', 'STYLE', 'PRE', 'CODE', 'TEXTAREA', 'INPUT']);

function walk(root) {
  if (!root) return;
  if (root.nodeType === 3) { fix(root); return; }
  if (root.nodeType !== 1 || SKIP.has(root.nodeName)) return;
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: n => (n.parentElement?.closest('script,style,pre,code,textarea') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT)
  });
  let n; while ((n = w.nextNode())) fix(n);
}
function fix(n) { const v = n.nodeValue, f = fixText(v); if (f !== v) n.nodeValue = f; }

// Fixes the page now and every text that scripts add later (modals, filters, counters).
export function initOrphans() {
  walk(document.body);
  const mo = new MutationObserver(list => {
    for (const r of list) {
      if (r.type === 'characterData') fix(r.target);
      else r.addedNodes.forEach(walk);
    }
  });
  mo.observe(document.body, { childList: true, subtree: true, characterData: true });
  return () => mo.disconnect();
}
