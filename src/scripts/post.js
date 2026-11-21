// Listen / print / share buttons on long-form pages.

// Pick the best available voice for the page language. Without this, Chrome on Windows
// often reads Polish with an English voice, which sounds garbled.
const PREFERRED = {
  pl: [/Google polski/i, /Zofia/i, /Marek/i, /Paulina/i, /Ewa/i, /Agnieszka/i],
  en: [/Google UK English Female/i, /Sonia/i, /Libby/i, /Google US English/i, /Aria/i, /Jenny/i, /Samantha/i, /Daniel/i]
};
function pickVoice(synth, lang) {
  const voices = synth.getVoices().filter(v => v.lang && v.lang.toLowerCase().startsWith(lang));
  if (!voices.length) return null;
  for (const re of PREFERRED[lang] || []) {
    const v = voices.find(v => re.test(v.name));
    if (v) return v;
  }
  return voices.find(v => /natural|online|neural/i.test(v.name)) || voices.find(v => v.localService) || voices[0];
}
const voicesReady = synth => new Promise(res => {
  if (synth.getVoices().length) return res();
  const done = () => { synth.removeEventListener?.('voiceschanged', done); res(); };
  synth.addEventListener?.('voiceschanged', done);
  setTimeout(res, 1200);
});

// Chrome stops long utterances after ~15 s, so read paragraph by paragraph.
function chunks(root) {
  const out = [];
  for (const n of root.querySelectorAll('h1, .art__lead, .prose > *')) {
    if (n.matches('pre, table')) continue;
    const t = n.innerText.replace(/\s+/g, ' ').trim();
    if (!t) continue;
    if (t.length <= 220) { out.push(t); continue; }
    let buf = '';
    for (const s of t.split(/(?<=[.!?:])\s+/)) {
      if ((buf + ' ' + s).length > 220 && buf) { out.push(buf); buf = s; } else buf = buf ? buf + ' ' + s : s;
    }
    if (buf) out.push(buf);
  }
  return out;
}

export function initPostTools() {
  const speakBtn = document.querySelector('[data-speak]');
  const printBtn = document.querySelector('[data-print]');
  const shareBtn = document.querySelector('[data-share]');
  const toast = document.querySelector('[data-toast]');
  if (!speakBtn && !printBtn && !shareBtn) return;
  const isEn = document.documentElement.lang === 'en';
  const synth = window.speechSynthesis;

  if (speakBtn) {
    const lang = isEn ? 'en' : 'pl';
    if (!synth) speakBtn.hidden = true;
    const label = speakBtn.querySelector('span');
    let token = 0;
    const set = on => {
      speakBtn.setAttribute('aria-pressed', String(on));
      if (label) label.textContent = isEn ? (on ? 'Stop' : 'Listen') : (on ? 'Zatrzymaj' : 'Posłuchaj');
    };
    const stop = () => { token++; synth?.cancel(); set(false); };
    speakBtn.addEventListener('click', async () => {
      if (speakBtn.getAttribute('aria-pressed') === 'true') { stop(); return; }
      const my = ++token;
      set(true);
      synth.cancel();
      await voicesReady(synth);
      const voice = pickVoice(synth, lang);
      if (!voice) {
        // Reading Polish with an English voice sounds garbled, so do not try.
        set(false);
        if (toast) {
          const prev = toast.textContent;
          toast.textContent = isEn
            ? 'Your browser has no English voice installed.'
            : 'Brak polskiego głosu w przeglądarce. Działa na telefonie i w Edge; w Windows dodasz go w Ustawienia → Czas i język → Mowa.';
          toast.hidden = false;
          clearTimeout(toast._t);
          toast._t = setTimeout(() => { toast.hidden = true; toast.textContent = prev; }, 6000);
        }
        return;
      }
      const parts = chunks(document.getElementById('wpis'));
      let i = 0;
      const next = () => {
        if (my !== token) return;
        if (i >= parts.length) { set(false); return; }
        const u = new SpeechSynthesisUtterance(parts[i++]);
        if (voice) u.voice = voice;
        u.lang = voice?.lang || (isEn ? 'en-GB' : 'pl-PL');
        u.rate = isEn ? 1 : 1.02;
        u.pitch = 1;
        u.onend = next;
        u.onerror = () => set(false);
        synth.speak(u);
      };
      next();
    });
    document.addEventListener('astro:before-swap', stop, { once: true });
  }

  printBtn?.addEventListener('click', () => window.print());
  shareBtn?.addEventListener('click', async () => {
    const data = { title: shareBtn.dataset.title, url: shareBtn.dataset.url };
    if (navigator.share) { try { await navigator.share(data); } catch (e) {} return; }
    try { await navigator.clipboard.writeText(data.url); } catch (e) {}
    if (toast) { toast.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(() => { toast.hidden = true; }, 2200); }
  });
}
