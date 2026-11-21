// HTML blocks injected into the converted home markup (see pages/index.astro).
import { posts, CATS, pl, searchIndex } from './posts';
import { icon } from './icons';
import { notes } from './notes';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const href = (slug: string) => `/porady/${slug}/`;
const time = (m: number) => `<span class="mb-time">${icon.clock(13)}${m} min</span>`;

// ---------- Porady ----------
export function poradyBody(): string {
  const [feat, ...rest] = posts;
  const cards = rest.slice(0, 4);
  const rows = rest.slice(4);
  const chips = [`<button type="button" class="mb-chip" aria-pressed="true" data-filter="all">Wszystkie</button>`]
    .concat(CATS.map(c => `<button type="button" class="mb-chip" aria-pressed="false" data-filter="${c.id}">${c.label} <span class="mb-chip__n">${posts.filter(p => p.cats.includes(c.id)).length}</span></button>`))
    .join('');
  const row = (p: typeof posts[number]) =>
    `<a href="${href(p.slug)}" class="row mb-prow" data-cats="${p.cats.join(' ')}"><span class="mb-prow__n">${p.num}</span><span class="mb-prow__tag">${esc(p.tag)}</span><span class="mb-prow__t">${esc(p.title)}</span>${time(p.minutes)}</a>`;
  return `
<div class="mb-porady">
  <div class="mb-chips" role="group" aria-label="Filtruj porady">${chips}</div>
  <div data-view="all">
    <div class="mb-pgrid">
      <a href="${href(feat.slug)}" class="feat mb-feat">
        <div class="mb-feat__top"><span>${feat.num} · ${esc(feat.tag)}</span>${time(feat.minutes)}</div>
        <div class="mb-feat__body"><span class="mb-feat__t">${esc(feat.title)}</span><span class="mb-feat__d">${esc(feat.card)}</span></div>
        <span class="mb-feat__go">Czytaj ${icon.arrowRight(16)}</span>
      </a>
      ${cards.map(p => `<a href="${href(p.slug)}" class="card mb-pcard" data-on="mousemove:spot"><span class="mb-pcard__k">${p.num} · ${esc(p.tag)}</span><span class="mb-pcard__t">${esc(p.title)}</span><span class="mb-pcard__d">${esc(p.card)}</span>${time(p.minutes)}</a>`).join('')}
    </div>
    <div class="mb-plist" data-more-list>${rows.map((p, i) => i >= 6 ? row(p).replace('class="row mb-prow"', 'class="row mb-prow" data-more hidden') : row(p)).join('')}</div>
    ${rows.length > 6 ? `<button type="button" class="mb-chip mb-morebtn" data-more-btn>Pokaż wszystkie porady (${posts.length})</button>` : ''}
  </div>
  <div data-view="filtered" hidden>
    <div class="mb-plist">${posts.map(row).join('')}</div>
  </div>
</div>
<script type="application/json" id="porady-data">${searchIndex()}</script>`;
}

// ---------- Modals ----------
interface Block { h: string; body: string }
interface ModalDef { id: string; kicker: string; title: string; lead: string; blocks: Block[]; aside?: string; cta?: { label: string; href: string; ext?: boolean } }

const modal = (m: ModalDef) => `
<dialog class="mb-modal" id="${m.id}" aria-labelledby="${m.id}-t">
  <div class="mb-modal__box">
    <button type="button" class="mb-modal__x" data-close aria-label="Zamknij">${icon.x(20)}</button>
    <span class="mb-modal__k">${m.kicker}</span>
    <h2 class="mb-modal__t" id="${m.id}-t">${m.title}</h2>
    <p class="mb-modal__lead">${m.lead}</p>
    ${m.aside ?? ''}
    <div class="mb-modal__blocks">
      ${m.blocks.map(b => `<section class="mb-modal__b"><h3>${b.h}</h3>${b.body}</section>`).join('')}
    </div>
    ${m.cta ? `<a class="btn mb-modal__cta" href="${m.cta.href}"${m.cta.ext ? ' target="_blank" rel="noopener"' : ' data-close'}>${m.cta.label} ${icon.arrowRight(16)}</a>` : ''}
  </div>
</dialog>`;

const ul = (items: string[]) => `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;

export const PROGRAM: ModalDef[] = [
  {
    id: 'm-mrm', kicker: '01 · od tego zacznę', title: 'Młodzieżowa Rada bez polityki',
    lead: 'Młodzieżowa Rada Miasta ma być głosem uczniów i studentów z Częstochowy, a nie przedsionkiem partii. Dziś wielu młodych nawet nie wie, że jest nabór.',
    blocks: [
      { h: 'Dlaczego', body: '<p>Rada młodzieżowa może opiniować sprawy, które dotyczą młodych: komunikację, szkoły, miejsca do spędzania czasu. Działa dobrze tylko wtedy, gdy trafiają do niej ludzie z różnych szkół i środowisk, a nie z jednego klucza.</p>' },
      { h: 'Co zrobię', body: ul(['złożę propozycję zmian w statucie: jawny nabór ogłaszany w każdej szkole i w sieci, z prostym formularzem', 'zaproponuję, żeby opinie rady były dołączane do uchwał, które dotyczą młodych', 'będę pytał radę o zdanie, zanim zagłosuję w sprawach młodzieży']) },
      { h: 'Jak to sprawdzisz', body: '<p>Terminy naboru, skład rady i jej opinie powinny być na stronie miasta. Będę o nich pisał tutaj, z linkami do dokumentów.</p>' }
    ],
    cta: { label: 'Masz pomysł? Napisz', href: '#zapytaj' }
  },
  {
    id: 'm-finanse', kicker: '02 · od tego zacznę', title: 'Jawne finanse miasta',
    lead: 'Każda złotówka z budżetu miasta to pieniądze mieszkańców. Powinieneś móc sprawdzić, na co poszła, bez pisania wniosków i czekania 14 dni.',
    blocks: [
      { h: 'Dlaczego', body: '<p>Najważniejsze decyzje zapadają na komisjach rady, zanim trafią na sesję. Sesje są nagrywane, komisje często nie, a protokoły bywają trudne do znalezienia.</p>' },
      { h: 'Co zrobię', body: ul(['złożę wniosek o nagrywanie i publikowanie posiedzeń komisji, tak jak sesji', 'będę domagał się publikowania protokołów komisji w BIP w stałym terminie', 'opublikuję tutaj, jak głosuję i dlaczego']) },
      { h: 'Jak to sprawdzisz', body: '<p>Nagrania i protokoły będą publiczne albo zobaczysz tu odpowiedź, dlaczego ich nie ma. Każdy mój wniosek wrzucę z datą złożenia.</p>' }
    ],
    cta: { label: 'Zapytaj o konkretny wydatek', href: '#zapytaj' }
  },
  {
    id: 'm-osiedla', kicker: '03 · od tego zacznę', title: 'Bezpieczne osiedla',
    lead: 'Ciemny chodnik, przejście, na którym kierowcy nie widzą pieszych, przepełniony kosz. Małe rzeczy, które decydują, czy dobrze się mieszka.',
    blocks: [
      { h: 'Dlaczego', body: '<p>Na Kiedrzynie wiele spraw ciągnie się latami, bo nikt ich nie zgłasza do końca. Drogi i przejścia należą do Miejskiego Zarządu Dróg, więc zgłoszenie musi trafić tam, a potem trzeba pilnować odpowiedzi.</p>' },
      { h: 'Co zrobię', body: ul(['zgłoszę do MZD brakujące oświetlenie i niebezpieczne przejścia, które wskażą mieszkańcy', 'będę wnioskował o dodatkowe kosze tam, gdzie się przepełniają', 'każde zgłoszenie opublikuję tutaj z datą i odpowiedzią urzędu']) },
      { h: 'Jak to sprawdzisz', body: '<p>Każde zgłoszenie dostanie tu swój wpis: co zgłosiłem, kiedy i co odpowiedział MZD. Bez odpowiedzi też to zobaczysz.</p>' }
    ],
    cta: { label: 'Zgłoś miejsce na osiedlu', href: '#zapytaj' }
  }
];

export const POZA: ModalDef[] = [
  {
    id: 'm-cyber', kicker: 'security', title: 'Cyberbezpieczeństwo',
    lead: 'Najbardziej wciąga mnie moment, w którym w zwykłym ruchu sieciowym albo zwykłym SMS-ie widać, że coś jest nie tak. I tłumaczenie tego tak, żeby zrozumiała to babcia.',
    blocks: [
      { h: 'Jak się uczę', body: ul(['analizuję ruch sieciowy w Wiresharku i szukam w nim anomalii', 'ćwiczę na labach: wykrywanie ataków, analiza logów, podstawy hardeningu', 'czytam ostrzeżenia CERT Polska i śledzę nowe kampanie oszustów w Polsce']) },
      { h: 'Dokąd zmierzam', body: '<p>Chcę pracować w zespole Blue Team albo Cyber Threat Intelligence: wykrywać zagrożenia, zanim zrobią komuś krzywdę, i pisać o nich raporty, które da się zrozumieć. Dlatego uczę się też angielskiego na poziomie C2.</p>' },
      { h: 'Na tej stronie', body: `<p>${posts.length} ${pl(posts.length, 'poradnik', 'poradniki', 'poradników')} dla mieszkańców, quiz „Czy to oszustwo?” i ${notes.length} ${pl(notes.length, 'notatka', 'notatki', 'notatek')} o bezpieczeństwie po angielsku w wersji EN.</p>` }
    ],
    cta: { label: 'Przeczytaj porady', href: '#porady' }
  },
  {
    id: 'm-sport', kicker: 'sport', title: '11 lat biegania',
    lead: 'Zawodnik CKS Budowlani Częstochowa. Biegałem sprinty i średnie dystanse, z przeszkodami też.',
    aside: `<div class="mb-stats">
      <div><span>400 m</span><strong>51,29 s</strong><em>rekord życiowy, 2023</em></div>
      <div><span>800 m</span><strong>2:10,27</strong><em>rekord życiowy</em></div>
      <div><span>1000 m</span><strong>2:47,35</strong><em>rekord życiowy</em></div>
    </div>`,
    blocks: [
      { h: 'Najważniejszy start', body: '<p>Mistrzostwa Polski U16 w Słupsku, 2020 rok, 1000 m z przeszkodami: 10. miejsce z czasem 2:54,92.</p>' },
      { h: 'Co mi to dało', body: '<p>Treningi kilka razy w tygodniu przez 11 lat uczą jednego: wynik przychodzi po miesiącach nudnej, regularnej pracy, a nie po jednym zrywie. Tak samo pracuję dziś przy projektach i w kampanii.</p>' }
    ],
    cta: { label: 'Profil w bazie PZLA', href: 'https://statystyka.pzla.pl/personal.php?page=profile&nr_zaw=105990&r=2', ext: true }
  },
  {
    id: 'm-media', kicker: 'komunikacja', title: 'Marketing i media',
    lead: 'Zawodowo zajmuję się marketingiem i obsługą klienta w kancelarii, która doradza prawnie sklepom internetowym. Prywatnie sam przygotowuję materiały do wszystkiego, co robię: od ulotki po tę stronę.',
    blocks: [
      { h: 'W pracy', body: '<p>Tworzę treści i grafiki, które w prosty sposób pokazują, w czym kancelaria może pomóc sklepom internetowym. Rozmawiam też z osobami, które się zgłaszają: ustalam, czego potrzebują, i przekazuję sprawę dalej.</p>' },
      { h: 'Po godzinach', body: ul(['projektuję grafiki, ulotki i plakaty, także do druku', 'nagrywam i montuję krótkie filmy do mediów społecznościowych', 'prowadzę swoje profile na Facebooku, Instagramie i TikToku', 'zaprojektowałem i zakodowałem tę stronę']) },
      { h: 'Przy referendum', body: '<p>W kampanii referendalnej w Częstochowie w 2026 roku przygotowywałem materiały i koordynowałem zbiórkę podpisów. Pod wnioskiem złożono 22 441 podpisów.</p>' },
      { h: 'Czego mnie to uczy', body: '<p>Jak powiedzieć coś skomplikowanego w jednym zdaniu, które zrozumie każdy. Przydaje się to w polityce, w obsłudze klienta i przy tłumaczeniu zagrożeń w sieci.</p>' }
    ],
    cta: { label: 'Zobacz moje profile', href: '#kontakt' }
  }
];

export const modals = () => PROGRAM.concat(POZA).map(modal).join('');
