// Listen / print / share buttons on long-form pages.
export function initPostTools() {
  const speakBtn = document.querySelector('[data-speak]');
  const printBtn = document.querySelector('[data-print]');
  const shareBtn = document.querySelector('[data-share]');
  const toast = document.querySelector('[data-toast]');
  if (!speakBtn && !printBtn && !shareBtn) return;
  const synth = window.speechSynthesis;
  if (speakBtn) {
    if (!synth) speakBtn.hidden = true;
    const label = speakBtn.querySelector('span');
    const set = on => { speakBtn.setAttribute('aria-pressed', String(on)); if (label) label.textContent = document.documentElement.lang === 'en' ? (on ? 'Stop' : 'Listen') : (on ? 'Zatrzymaj' : 'Posłuchaj'); };
    speakBtn.addEventListener('click', () => {
      if (speakBtn.getAttribute('aria-pressed') === 'true') { synth.cancel(); set(false); return; }
      const el = document.getElementById('wpis');
      const text = [...el.querySelectorAll('h1, .art__lead, .prose > *')].map(n => n.innerText).join('\n');
      const u = new SpeechSynthesisUtterance(text);
      u.lang = document.documentElement.lang === 'en' ? 'en-GB' : 'pl-PL';
      u.rate = 0.95;
      u.onend = () => set(false);
      synth.cancel(); synth.speak(u); set(true);
    });
    document.addEventListener('astro:before-swap', () => synth?.cancel(), { once: true });
  }
  printBtn?.addEventListener('click', () => window.print());
  shareBtn?.addEventListener('click', async () => {
    const data = { title: shareBtn.dataset.title, url: shareBtn.dataset.url };
    if (navigator.share) { try { await navigator.share(data); } catch (e) {} return; }
    try { await navigator.clipboard.writeText(data.url); } catch (e) {}
    if (toast) { toast.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(() => { toast.hidden = true; }, 2200); }
  });
}
