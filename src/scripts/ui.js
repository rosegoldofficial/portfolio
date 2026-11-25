// Page-level UI that is not part of the converted design logic:
// sticky header, sliding nav indicator with scrollspy, dialogs, advice filters.
// Returns a cleanup function (called before Astro swaps the page).

const reduceMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

function scrollToHash(hash) {
  const el = hash && hash.length > 1 ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
  if (!el) return false;
  el.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
  history.replaceState(null, '', hash);
  return true;
}

export function initUI() {
  const off = [];
  const on = (target, type, fn, opts) => { target.addEventListener(type, fn, opts); off.push(() => target.removeEventListener(type, fn, opts)); };

  // Section reveal + "~/label" typing, once per section per page load.
  const secs = [...document.querySelectorAll('.rv')];
  if (secs.length) {
    const GL = '!<>-_\\/[]{}=+*^?#01';
    const type = el => {
      const full = el.dataset.label || el.textContent; let i = 0; el.classList.add('typing');
      const tick = () => {
        i++;
        const done = full.slice(0, i), rest = full.length - i;
        el.textContent = done + (rest > 0 ? Array.from({ length: Math.min(rest, 3) }, () => GL[Math.floor(Math.random() * GL.length)]).join('') : '');
        if (i < full.length) el._t = setTimeout(tick, 38); else { el.textContent = full; el._t = setTimeout(() => el.classList.remove('typing'), 900); }
      };
      el.textContent = ''; el._t = setTimeout(tick, 220);
    };
    const show = sec => { if (sec.classList.contains('in')) return; sec.classList.add('in'); if (document.documentElement.classList.contains('rv-on')) sec.querySelectorAll('.scr').forEach(type); };
    if (!('IntersectionObserver' in window)) secs.forEach(show);
    else {
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } }), { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
      secs.forEach(sec => io.observe(sec));
      off.push(() => io.disconnect());
    }
    off.push(() => document.querySelectorAll('.scr').forEach(el => { clearTimeout(el._t); el.classList.remove('typing'); if (el.dataset.label) el.textContent = el.dataset.label; }));
  }

  // Sticky header: turns into a floating translucent pill once the page scrolls.
  const hdr = document.querySelector('.hdr');
  if (hdr) {
    const update = () => hdr.classList.toggle('is-scrolled', window.scrollY > 24);
    update();
    on(window, 'scroll', update, { passive: true });
  }

  // Back-to-top button: hidden near the top; shows while scrolling up or at the bottom.
  const top = document.querySelector('.totop');
  if (top) {
    let lastY = window.scrollY, ticking = false;
    const show = v => { top.classList.toggle('is-visible', v); top.toggleAttribute('inert', !v); top.setAttribute('aria-hidden', v ? 'false' : 'true'); };
    const check = () => {
      const y = window.scrollY, h = window.innerHeight;
      const atBottom = y + h >= document.documentElement.scrollHeight - 160;
      if (y < h * 0.9) show(false);
      else if (atBottom) show(true);
      else if (y < lastY - 4) show(true);
      else if (y > lastY + 4) show(false);
      lastY = y; ticking = false;
    };
    show(false); check();
    on(window, 'scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(check); } }, { passive: true });
    on(top, 'click', e => {
      e.preventDefault(); top.blur(); show(false);
      window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' });
      history.replaceState(null, '', location.pathname + location.search);
    });
  }

  // Nav indicator follows the active section; it also moves at once on click.
  const nav = document.querySelector('.hdr-nav');
  const ind = nav?.querySelector('.nav-ind');
  if (nav && ind) {
    const links = [...nav.querySelectorAll('a.nav-link')];
    const targets = links
      .map(a => ({ a, el: document.getElementById((a.getAttribute('href') || '').slice(1)) }))
      .filter(t => t.el);
    let lockUntil = 0;
    const move = a => {
      for (const l of links) {
        l.classList.toggle('is-active', l === a);
        if (l === a) l.setAttribute('aria-current', 'location'); else l.removeAttribute('aria-current');
      }
      if (!a) { ind.style.opacity = '0'; return; }
      ind.style.opacity = '1';
      ind.style.width = a.offsetWidth + 'px';
      ind.style.height = a.offsetHeight + 'px';
      ind.style.transform = `translate(${a.offsetLeft}px, ${a.offsetTop}px)`;
    };
    const spy = () => {
      if (Date.now() < lockUntil) return;
      const line = window.innerHeight * 0.35;
      let cur = targets[0];
      for (const t of targets) if (t.el.getBoundingClientRect().top <= line) cur = t;
      move(cur?.a);
    };
    for (const a of links) on(a, 'click', () => { move(a); lockUntil = Date.now() + 1000; });
    spy();
    requestAnimationFrame(() => ind.classList.add('is-ready'));
    on(window, 'scroll', spy, { passive: true });
    on(window, 'resize', spy);
    if (document.fonts?.ready) document.fonts.ready.then(spy);
  }

  // Dialogs: open from [data-modal], close with X, Esc or a click outside the box.
  const close = (d, after) => {
    if (!d.open) return;
    d.classList.add('is-closing');
    setTimeout(() => {
      d.classList.remove('is-closing');
      d.close();
      if (after) after(); else d._opener?.focus({ preventScroll: true });
    }, reduceMotion() ? 0 : 180);
  };
  for (const t of document.querySelectorAll('[data-modal]')) {
    on(t, 'click', e => {
      const d = document.getElementById(t.dataset.modal);
      if (!d || typeof d.showModal !== 'function') return;
      e.preventDefault();
      d._opener = t;
      d.showModal();
      d.querySelector('.mb-modal__box')?.scrollTo?.(0, 0);
    });
  }
  for (const d of document.querySelectorAll('dialog.mb-modal')) {
    on(d, 'cancel', e => { e.preventDefault(); close(d); });
    on(d, 'click', e => {
      if (e.target === d) { close(d); return; }
      const c = e.target.closest('[data-close]');
      if (!c) return;
      const href = c.getAttribute('href');
      if (href && href.startsWith('#')) { e.preventDefault(); close(d, () => scrollToHash(href)); }
      else if (!href) close(d);
    });
  }
  // Open a dialog when the URL points at it (e.g. a shared link to #m-finanse).
  const fromHash = location.hash && document.getElementById(location.hash.slice(1));
  if (fromHash && fromHash.matches?.('dialog.mb-modal')) fromHash.showModal();

  // Advice filters.
  const box = document.querySelector('.mb-porady');
  if (box) {
    const chips = [...box.querySelectorAll('.mb-chip[data-filter]')];
    const all = box.querySelector('[data-view="all"]');
    const filtered = box.querySelector('[data-view="filtered"]');
    for (const chip of chips) {
      on(chip, 'click', () => {
        const f = chip.dataset.filter;
        for (const c of chips) c.setAttribute('aria-pressed', String(c === chip));
        const showAll = f === 'all';
        all.hidden = !showAll;
        filtered.hidden = showAll;
        if (!showAll) for (const r of filtered.querySelectorAll('[data-cats]')) r.hidden = !r.dataset.cats.split(' ').includes(f);
        filtered.classList.remove('is-in'); void filtered.offsetWidth; filtered.classList.add('is-in');
      });
    }
  }

  // "Show all" for the long advice list.
  const moreBtn = document.querySelector('[data-more-btn]');
  if (moreBtn) on(moreBtn, 'click', () => {
    const list = document.querySelector('[data-more-list]');
    for (const r of list.querySelectorAll('[data-more]')) r.hidden = false;
    list.closest('[data-view]')?.classList.remove('is-in');
    void list.offsetWidth;
    list.closest('[data-view]')?.classList.add('is-in');
    moreBtn.remove();
  });

  return () => off.forEach(fn => fn());
}
