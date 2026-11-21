// Tiny runtime that drives the converted design markup.
// The markup carries plain attributes; this file fills them from a logic class:
//   data-t="path"            → textContent
//   data-if="path"           → hidden when falsy
//   data-tpl='{"attr":"…"}'  → attribute templates with {{path}} holes
//   data-on="click:fn;…"     → event handlers from renderVals()
//   <template data-for="list" data-as="item"> + <div data-for-out> → repeated rows

// Web3Forms access key for the "Zapytaj mnie" form. Empty = fall back to mailto.
export const WEB3FORMS_KEY = '4c83b60c-cab0-44a3-9356-4e12f9210e64';
export const CONTACT_MAIL = 'kontakt@mikolajborawski.pl';

export class DCLogic {
  constructor(props) { this.props = props || {}; this.state = {}; this._render = () => {}; }
  setState(patch) {
    this.state = { ...this.state, ...(typeof patch === 'function' ? patch(this.state) : patch) };
    this._render();
  }
}

const store = (() => { try { return window.localStorage; } catch (e) { return null; } })();
export const loadPref = k => { try { return store?.getItem('mb:' + k) === '1'; } catch (e) { return false; } };
export const savePref = (k, v) => { try { store?.setItem('mb:' + k, v ? '1' : '0'); } catch (e) {} };
export const setTheme = light => {
  document.documentElement.dataset.theme = light ? 'light' : 'dark';
  savePref('light', light);
};

export const clearForm = ev => {
  const scope = ev?.currentTarget?.closest('section') || document;
  scope.querySelectorAll('input, textarea').forEach(el => {
    if (el.type === 'checkbox') el.checked = false;
    else if (el.name !== 'botcheck') el.value = '';
  });
};

export const focusFirstError = e => {
  const map = { name: 'input:setName', mail: 'input:setMail', msg: 'input:setMsg', ok: 'change:setOk' };
  const key = ['name', 'mail', 'msg', 'ok'].find(k => e[k]);
  const el = key && document.querySelector(`[data-on="${map[key]}"]`);
  if (el) { el.focus({ preventScroll: true }); el.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
};

const mailtoFallback = (f, topic) => {
  const body = encodeURIComponent(f.msg + '\n\n' + f.name + ' · ' + f.mail);
  window.location.href = 'mailto:' + CONTACT_MAIL + '?subject=' + encodeURIComponent(topic || 'Pytanie ze strony') + '&body=' + body;
  return true;
};

export async function submitForm(f) {
  const hp = document.querySelector('input[name="botcheck"]');
  if (hp && hp.checked) return true; // bot: pretend success
  const topic = document.querySelector('#zapytaj select')?.value || '';
  if (!WEB3FORMS_KEY) return mailtoFallback(f, topic);
  try {
    const r = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: 'Strona: ' + (topic || 'pytanie') + ' (' + f.name + ')',
        from_name: 'mikolajborawski.pl',
        name: f.name, email: f.mail, replyto: f.mail, topic, message: f.msg
      })
    });
    const j = await r.json();
    return j.success ? true : mailtoFallback(f, topic);
  } catch (e) { return mailtoFallback(f, topic); }
}

const get = (path, vals, scope) => {
  const [head, ...rest] = path.split('.');
  let v = scope && head in scope ? scope[head] : vals?.[head];
  for (const k of rest) v = v == null ? undefined : v[k];
  return v;
};
const fill = (tpl, vals, scope) => tpl.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_, p) => {
  const v = get(p, vals, scope);
  return v == null || v === false ? (typeof v === 'boolean' ? 'false' : '') : String(v);
});

function collect(root) {
  const q = s => [...root.querySelectorAll(s)];
  const self = (a) => root.hasAttribute?.(a) ? [root] : [];
  return {
    t: [...self('data-t'), ...q('[data-t]')],
    ifs: [...self('data-if'), ...q('[data-if]')],
    tpl: [...self('data-tpl'), ...q('[data-tpl]')].map(el => ({ el, map: JSON.parse(el.getAttribute('data-tpl')) })),
    on: [...self('data-on'), ...q('[data-on]')],
    fors: q('template[data-for]')
  };
}

function apply(b, vals, scope) {
  for (const el of b.t) { const v = get(el.dataset.t, vals, scope); const s = v == null ? '' : String(v); if (el.textContent !== s) el.textContent = s; }
  for (const el of b.ifs) el.hidden = !get(el.dataset.if, vals, scope);
  for (const { el, map } of b.tpl) for (const [attr, tpl] of Object.entries(map)) {
    const v = fill(tpl, vals, scope);
    if (el.getAttribute(attr) !== v) el.setAttribute(attr, v);
  }
}

function wire(b, getVals) {
  for (const el of b.on) {
    if (el._mbWired) continue; el._mbWired = true;
    for (const pair of el.dataset.on.split(';')) {
      const [type, fn] = pair.split(':').map(s => s.trim());
      if (!type || !fn) continue;
      el.addEventListener(type, ev => {
        const h = getVals()[fn];
        if (typeof h !== 'function') return;
        if (type === 'click' && el.tagName === 'A' && el.getAttribute('href') === '#') ev.preventDefault();
        h(ev);
      });
    }
  }
}

export function mount(root, Logic, props) {
  const inst = new Logic(props || {});
  const b = collect(root);
  let vals = {};
  let queued = false;
  const render = () => {
    vals = inst.renderVals();
    apply(b, vals);
    for (const tpl of b.fors) {
      const out = tpl.nextElementSibling?.hasAttribute('data-for-out') ? tpl.nextElementSibling : null;
      if (!out) continue;
      const list = get(tpl.dataset.for, vals) || [];
      const as = tpl.dataset.as || 'item';
      out.replaceChildren();
      for (const item of list) {
        const frag = tpl.content.cloneNode(true);
        const wrap = document.createElement('div');
        wrap.style.display = 'contents';
        wrap.append(frag);
        const cb = collect(wrap);
        apply(cb, vals, { [as]: item });
        wire(cb, () => vals);
        out.append(wrap);
      }
    }
  };
  inst._render = () => { if (queued) return; queued = true; requestAnimationFrame(() => { queued = false; render(); }); };
  render();
  wire(b, () => vals);
  inst.componentDidMount?.();
  return () => inst.componentWillUnmount?.();
}
