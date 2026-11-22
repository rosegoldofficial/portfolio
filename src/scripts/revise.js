// Mini quiz at the end of an advice post. Correct answers unlock the "next / random" cards.
const norm = (s) => (s || '').replace(/ /g, ' ').replace(/\s+/g, ' ').trim();
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};

export function initRevise() {
  // Print: every FAQ answer open, then back to how it was.
  const details = [...document.querySelectorAll('.faq details')];
  let prev = [];
  const before = () => { prev = details.map((d) => d.open); details.forEach((d) => (d.open = true)); };
  const after = () => details.forEach((d, i) => (d.open = prev[i] ?? d.open));
  window.addEventListener('beforeprint', before);
  window.addEventListener('afterprint', after);
  document.addEventListener('astro:before-swap', () => {
    window.removeEventListener('beforeprint', before);
    window.removeEventListener('afterprint', after);
  }, { once: true });

  const box = document.querySelector('[data-quiz]');
  const pick = document.querySelector('[data-rq-pick]');
  const lock = document.querySelector('[data-rq-lock]');
  if (!box || !pick) return;
  const key = 'mb:quiz:' + box.dataset.quiz;
  const answers = JSON.parse(box.dataset.answers || '[]');
  const items = [...box.querySelectorAll('.rq__q')];
  const btn = box.querySelector('[data-rq-check]');
  const score = box.querySelector('.rq__score');
  let mode = 'check';

  const unlock = (remember) => {
    pick.classList.remove('is-locked');
    pick.classList.add('is-open');
    if (lock) lock.hidden = true;
    if (remember) store.set(key, '1');
  };
  if (store.get(key) === '1') {
    unlock(false);
    score.textContent = 'Ten quiz masz już zaliczony. Możesz rozwiązać go jeszcze raz.';
  }
  document.querySelector('[data-rq-skip]')?.addEventListener('click', () => unlock(false));

  const findHeading = (ref) => {
    if (!ref) return null;
    const want = norm(ref);
    return [...document.querySelectorAll('.prose h2, .prose h3')].find((h) => norm(h.textContent) === want) || null;
  };

  const feedback = (li, ok, chosenText, why, ref) => {
    const fb = li.querySelector('.rq__fb');
    fb.replaceChildren();
    const head = document.createElement('strong');
    head.textContent = ok ? 'Dobrze.' : 'Jeszcze nie.';
    fb.append(head);
    if (!ok) {
      const p = document.createElement('p');
      p.textContent = `Twoja odpowiedź: „${chosenText}”. Ta odpowiedź jest błędna.`;
      fb.append(p);
    }
    const w = document.createElement('p');
    w.textContent = why;
    fb.append(w);
    const h = !ok && findHeading(ref);
    if (h) {
      const a = document.createElement('button');
      a.type = 'button';
      a.className = 'rq__ref';
      a.textContent = `Przeczytaj jeszcze raz: ${norm(h.textContent)} ↑`;
      a.addEventListener('click', () => {
        h.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
        h.classList.remove('rq-flash'); void h.offsetWidth; h.classList.add('rq-flash');
      });
      fb.append(a);
    }
    fb.hidden = false;
  };

  const check = () => {
    const missing = items.find((li) => !li.querySelector('input:checked'));
    if (missing) {
      score.textContent = 'Zaznacz odpowiedź w każdym pytaniu.';
      missing.classList.add('rq--miss');
      missing.querySelector('input')?.focus();
      setTimeout(() => missing.classList.remove('rq--miss'), 1200);
      return;
    }
    let good = 0;
    items.forEach((li, i) => {
      const input = li.querySelector('input:checked');
      const ok = Number(input.value) === answers[i];
      if (ok) good++;
      li.classList.toggle('rq--ok', ok);
      li.classList.toggle('rq--bad', !ok);
      li.querySelectorAll('input').forEach((x) => (x.disabled = ok));
      feedback(li, ok, input.parentElement.textContent.trim(), li.dataset.why, li.dataset.ref);
    });
    if (good === items.length) {
      score.textContent = `Wszystko dobrze: ${good}/${items.length}. Następna porada jest odblokowana.`;
      box.classList.add('rq--done');
      btn.hidden = true;
      unlock(true);
      setTimeout(() => pick.scrollIntoView({ behavior: 'smooth', block: 'center' }), 600);
    } else {
      score.textContent = `${good}/${items.length} dobrze. Przeczytaj jeszcze raz zaznaczone fragmenty i popraw odpowiedzi.`;
      btn.textContent = 'Spróbuj jeszcze raz';
      mode = 'retry';
      box.querySelector('.rq--bad')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const retry = () => {
    items.filter((li) => li.classList.contains('rq--bad')).forEach((li) => {
      li.classList.remove('rq--bad');
      li.querySelectorAll('input').forEach((x) => (x.checked = false));
      const fb = li.querySelector('.rq__fb'); fb.hidden = true; fb.replaceChildren();
    });
    btn.textContent = 'Sprawdź odpowiedzi';
    score.textContent = '';
    mode = 'check';
    box.querySelector('.rq__q:not(.rq--ok) input')?.focus();
  };

  btn.addEventListener('click', () => (mode === 'check' ? check() : retry()));
}
