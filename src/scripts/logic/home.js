import { DCLogic, setTheme, savePref, loadPref, clearForm, submitForm } from '../bind.js';
const QS = [
{ from: 'Kurier · SMS', text: 'Twoja paczka czeka w punkcie. Dopłać 1,99 zł za zmianę adresu doręczenia: kurier-doplata.com/p/8812', scam: true, why: 'Kurierzy nie każą dopłacać grosików przez linki z dziwnych domen. Ta strona wyłudza dane karty. Prześlij SMS na 8080.' },
{ from: 'Twój bank · SMS', text: 'Kod BLIK 482 913 do płatności 89,99 zł w sklepie internetowym. Nikomu nie podawaj tego kodu.', scam: false, why: 'Zwykłe potwierdzenie płatności, którą sam zleciłeś: bez linku, z ostrzeżeniem. Jeśli niczego nie kupowałeś, zadzwoń do banku.' },
{ from: 'Dostawca prądu · SMS', text: 'Z powodu zaległości 12,40 zł dziś o 21:00 nastąpi odłączenie energii. Opłać teraz: energia-oplaty.pl', scam: true, why: 'Presja czasu, mała kwota i link do płatności to klasyka. Prawdziwy dostawca wysyła pisemne wezwanie, a nie odcina prądu tego samego wieczoru.' },
{ from: 'Telefon · „dział bezpieczeństwa banku”', text: 'Wykryliśmy podejrzaną transakcję. Proszę zainstalować aplikację do zdalnej pomocy, pomożemy zabezpieczyć środki.', scam: true, why: 'Bank nigdy nie prosi o instalowanie aplikacji ani nie przejmuje Twojego telefonu. Rozłącz się i oddzwoń na numer z karty.' },
{ from: 'Przychodnia · SMS', text: 'Przypominamy o wizycie jutro o 10:30. Aby odwołać, zadzwoń do rejestracji pod numer z karty pacjenta.', scam: false, why: 'Zwykłe przypomnienie: bez linku, bez płatności i bez pośpiechu.' },
{ from: 'WhatsApp · nieznany numer', text: 'Mamo, to mój nowy numer, stary telefon mi się zepsuł. Możesz szybko przelać 900 zł? Oddam jutro, nie mogę teraz rozmawiać.', scam: true, why: 'Schemat „na dziecko”: nowy numer, pilny przelew i brak możliwości rozmowy. Zadzwoń na stary numer albo zadaj pytanie, na które zna odpowiedź tylko Twoje dziecko.' },
{ from: 'Urząd skarbowy · SMS', text: 'Masz nadpłatę podatku 438,20 zł. Odbierz zwrot w ciągu 24 h: zwrot-podatku-pl.info', scam: true, why: 'Urząd nie wysyła linków do „odbioru zwrotu”. Zwrot trafia na konto podane w zeznaniu, bez Twojego klikania.' },
{ from: 'Operator komórkowy · SMS', text: 'Twoja faktura za październik jest dostępna w aplikacji operatora. Kwota: 49,99 zł, termin płatności: 25.11.', scam: false, why: 'Informacja bez linku i bez pośpiechu, odsyła do aplikacji, którą już masz. Fakturę sprawdzisz tam sam.' },
{ from: 'Kupujący z ogłoszenia · czat', text: 'Kupuję! Zapłaciłem przez bezpieczną przesyłkę. Kliknij w link, podaj dane karty i odbierz pieniądze: odbior-platnosci.shop', scam: true, why: 'Żeby otrzymać pieniądze, nie trzeba podawać danych karty. To najczęstsze oszustwo na sprzedających w serwisach ogłoszeniowych.' },
{ from: 'Telefon · „policjant”', text: 'Pani wnuczek spowodował wypadek. Żeby uniknął aresztu, trzeba dziś przekazać kaucję naszemu funkcjonariuszowi.', scam: true, why: 'Policja nigdy nie odbiera pieniędzy ani nie prosi o kaucję przez telefon. Rozłącz się i zadzwoń do rodziny albo na 112.' },
{ from: 'mObywatel · SMS', text: 'Twój PESEL został użyty do wniosku o kredyt. Aby zablokować, zaloguj się: mobywatel-pesel-blokada.com', scam: true, why: 'Prawdziwe powiadomienia o zastrzeżeniu PESEL nie zawierają linków. PESEL zastrzegasz w aplikacji mObywatel, którą sam otwierasz.' },
{ from: 'Sklep internetowy · e-mail', text: 'Dziękujemy za zamówienie nr 20451. Paczka zostanie nadana w ciągu 2 dni roboczych. Status sprawdzisz po zalogowaniu na swoje konto.', scam: false, why: 'Potwierdzenie zamówienia, które złożyłeś: bez nacisku, bez prośby o dane. Status sprawdzasz, wchodząc na stronę sklepu sam.' },
{ from: 'Facebook · znajomy', text: 'Hej, głosujesz na moją córkę w konkursie? Wejdź w link i zaloguj się przez Facebooka: glosowanie-konkurs.top', scam: true, why: 'Konto znajomego mogło zostać przejęte. Fałszywa strona logowania kradnie Twoje konto, a potem pisze tak samo do Twoich znajomych.' },
{ from: 'Bank · e-mail', text: 'Twoje konto zostanie zablokowane w ciągu 12 godzin. Potwierdź dane, logując się przez poniższy przycisk.', scam: true, why: 'Groźba blokady i przycisk logowania w mailu to phishing. Do banku logujesz się tylko przez aplikację albo adres wpisany ręcznie.' },
{ from: 'Kurier · SMS', text: 'Paczka od nadawcy Jan K. zostanie doręczona dziś w godz. 12:00–15:00. Kod odbioru: 4471.', scam: false, why: 'Brak linku i brak płatności. Jeśli czekasz na paczkę, to zwykła informacja.' },
{ from: 'Telefon · „inwestycje”', text: 'Gratulacje, zakwalifikował się Pan do programu inwestycyjnego. Gwarantowany zysk 30% miesięcznie, wystarczy wpłacić 800 zł na start.', scam: true, why: 'Gwarantowany wysoki zysk nie istnieje. To oszustwo „inwestycyjne”, które zaczyna się od małej wpłaty i kończy utratą oszczędności.' },
{ from: 'Instagram · konto z niebieskim znaczkiem', text: 'Wygrałeś iPhone’a w naszym losowaniu! Opłać tylko wysyłkę 9,99 zł w ciągu godziny.', scam: true, why: 'Nie można wygrać konkursu, w którym się nie brało udziału. „Opłata za wysyłkę” to sposób na zdobycie danych karty.' },
{ from: 'Szkoła · e-dziennik', text: 'Nowa wiadomość od wychowawcy w dzienniku elektronicznym. Zaloguj się w aplikacji, aby ją przeczytać.', scam: false, why: 'Powiadomienie odsyła do aplikacji, którą znasz, a nie do linku. Wiadomość przeczytasz po samodzielnym zalogowaniu.' },
{ from: 'Wodociągi · SMS', text: 'Wykryto wyciek w Twoim budynku. Technik przyjdzie dziś. Prosimy przygotować gotówkę na opłatę serwisową 250 zł.', scam: true, why: 'Fałszywi „technicy” to częsty sposób na wejście do mieszkania seniora. Zadzwoń do administracji budynku i nie wpuszczaj nikogo bez sprawdzenia.' },
{ from: 'Platforma streamingowa · e-mail', text: 'Płatność za subskrypcję nie powiodła się. Zaktualizuj dane karty w ciągu 24 h, inaczej konto zostanie usunięte.', scam: true, why: 'Pośpiech i prośba o kartę przez link w mailu. Sprawdź płatność w aplikacji albo na stronie wpisanej ręcznie.' },
{ from: 'Bank · aplikacja', text: 'Zalogowano się do bankowości z nowego urządzenia. Jeśli to nie Ty, zadzwoń na infolinię z odwrotu karty.', scam: false, why: 'Prawdziwe powiadomienie bezpieczeństwa: nie ma linku, a kontakt kieruje na numer, który znasz z karty.' },
{ from: 'SMS · nieznany numer', text: 'Ups, chyba pomyliłam numer. Ale skoro już piszemy, może się poznamy? 😊', scam: true, why: 'Tak zaczyna się oszustwo „na znajomość”. Po tygodniach rozmów pojawia się prośba o pieniądze albo „inwestycję”.' },
{ from: 'Telefon · „operator”', text: 'Ze względów bezpieczeństwa przedłużamy Pana umowę. Proszę podać kod, który za chwilę przyjdzie SMS-em.', scam: true, why: 'Kodów z SMS-ów nie podaje się nikomu. Służą do zatwierdzania operacji, np. duplikatu karty SIM.' },
{ from: 'Kurier · SMS', text: 'Nie zastaliśmy Cię w domu. Umów ponowną dostawę i opłać 2,50 zł: dostawa-ponowna.net', scam: true, why: 'Ponowna dostawa nie wymaga płatności przez link. Domena nie należy do żadnego przewoźnika.' },
{ from: 'Urząd miasta · e-mail', text: 'Przypominamy o terminie płatności opłaty za odpady do 31 marca. Numer rachunku znajdziesz w deklaracji lub na stronie urzędu.', scam: false, why: 'Przypomnienie bez linku do płatności, odsyła do dokumentów, które masz. Rachunek sprawdzisz na oficjalnej stronie.' },
{ from: 'Telefon · nagrany głos', text: 'Tu automatyczny system ZUS. Twoje świadczenie zostanie wstrzymane. Naciśnij 1, aby połączyć się z konsultantem.', scam: true, why: 'Automatyczne groźby wstrzymania świadczeń to próba wyłudzenia danych. Rozłącz się i sprawdź sprawę na oficjalnym koncie albo w placówce.' },
{ from: 'Aplikacja randkowa · czat', text: 'Kocham Cię, ale utknąłem na lotnisku za granicą. Potrzebuję 2000 zł na bilet, oddam, jak tylko przylecę.', scam: true, why: 'Oszustwo „na miłość”: ktoś, kogo nigdy nie spotkałeś, prosi o pieniądze. Nie wysyłaj nic osobie znanej tylko z internetu.' },
{ from: 'Biblioteka · SMS', text: 'Termin zwrotu książki „Lalka” mija za 3 dni. Możesz ją prolongować na koncie czytelnika.', scam: false, why: 'Zwykłe przypomnienie bez linku i bez płatności.' },
{ from: 'E-mail · „szef”', text: 'Jestem na spotkaniu, nie mogę rozmawiać. Kup proszę 5 kart podarunkowych po 200 zł i prześlij mi kody zdjęciem.', scam: true, why: 'Oszustwo „na prezesa”. Karty podarunkowe są nie do odzyskania. Zawsze potwierdź taką prośbę telefonicznie.' },
{ from: 'Sklep · SMS', text: 'Twój kod rabatowy na urodziny: URODZINY10, ważny w sklepie stacjonarnym do końca miesiąca.', scam: false, why: 'Kod do wykorzystania w sklepie, bez linku i bez danych. Nic nie ryzykujesz.' },
{ from: 'Telefon · „bank”', text: 'Podejrzewamy, że pracownik banku współpracuje z oszustami. Proszę przelać środki na bezpieczne konto techniczne.', scam: true, why: '„Bezpieczne konto” nie istnieje. Żaden bank ani policja nie każe przelewać pieniędzy na inne konto.' },
{ from: 'Poczta · SMS', text: 'Twoja przesyłka została zatrzymana w urzędzie celnym. Opłać cło 4,80 zł: odprawa-celna-pl.com', scam: true, why: 'Cło nie jest pobierane przez linki z SMS-ów. Domena udaje urzędową, a strona kradnie dane karty.' },
{ from: 'Linie lotnicze · e-mail', text: 'Twoja karta pokładowa na jutrzejszy lot jest dostępna w aplikacji przewoźnika. Odprawa online kończy się 2 h przed odlotem.', scam: false, why: 'Informacja o locie, który zarezerwowałeś, bez prośby o płatność. Kartę pobierzesz z aplikacji.' },
{ from: 'YouTube · komentarz', text: 'Dzięki temu panu zarobiłem 15 000 zł w tydzień! Napisz do niego na Telegramie, link w opisie.', scam: true, why: 'Fałszywe komentarze z „cudownym zarobkiem” prowadzą do oszustów inwestycyjnych.' },
{ from: 'Spółdzielnia · ogłoszenie na klatce', text: 'W czwartek w godz. 8–14 przegląd instalacji gazowej. Firma ma upoważnienie spółdzielni, numer telefonu do weryfikacji poniżej.', scam: false, why: 'Prawdziwe ogłoszenia podają termin i numer do sprawdzenia. Gdy masz wątpliwości, zadzwoń do spółdzielni przed wpuszczeniem kogokolwiek.' },
{ from: 'SMS · „Twoje konto”', text: 'Wykryto logowanie z Rosji. Jeśli to nie Ty, kliknij, aby zabezpieczyć konto: zabezpiecz-konto.app', scam: true, why: 'Strach plus link do „zabezpieczenia” to phishing. Zmień hasło, wchodząc do serwisu samodzielnie.' },
{ from: 'Gra online · czat', text: 'Dam Ci rzadki przedmiot za darmo, wystarczy, że zalogujesz się na tej stronie swoim kontem.', scam: true, why: 'Kradzież kont graczy zaczyna się od „darmowych przedmiotów”. Nigdy nie loguj się przez linki od nieznajomych.' },
{ from: 'Telefon · nieznany numer', text: '(dzwoni raz i się rozłącza, numer zaczyna się na +247)', scam: true, why: 'Głuche połączenia z egzotycznych numerów liczą, że oddzwonisz na drogą linię. Nie oddzwaniaj.' },
{ from: 'Pracodawca · e-mail', text: 'Pasek wynagrodzenia za listopad jest dostępny w systemie kadrowym. Zaloguj się jak zwykle przez intranet.', scam: false, why: 'Odsyła do systemu, z którego zawsze korzystasz, bez linku i bez pośpiechu.' },
{ from: 'Ogłoszenie · „praca”', text: 'Praca zdalna, 400 zł dziennie za lajkowanie filmów. Na start wpłać 50 zł na zakup pakietu zadań.', scam: true, why: 'Prawdziwy pracodawca nie każe płacić za możliwość pracy. To oszustwo na „łatwy zarobek”.' },
{ from: 'Organizacja charytatywna · SMS', text: 'Pomóż dzieciom z domu dziecka! Wpłać 20 zł przez szybki link: pomoc-dzieciom-teraz.xyz', scam: true, why: 'Oszuści podszywają się pod zbiórki. Wpłacaj tylko przez oficjalne strony fundacji albo sprawdzone serwisy zbiórkowe.' },
{ from: 'Bank · SMS', text: 'Na Twoim koncie zaksięgowano przelew przychodzący 1 250,00 zł od NAZWA PRACODAWCY.', scam: false, why: 'Zwykłe powiadomienie o wpływie, bez linku i bez prośby o działanie.' },
{ from: 'Telefon · „wnuczek”', text: 'Babciu, to ja, mam katar, dlatego mam inny głos. Pilnie potrzebuję pieniędzy, przyjdzie po nie mój kolega.', scam: true, why: 'Klasyczne „na wnuczka”, dziś często z głosem podrobionym przez AI. Ustalcie w rodzinie hasło na takie sytuacje.' },
{ from: 'Kryptowaluty · e-mail', text: 'Twój portfel otrzymał 0,5 BTC. Aby je wypłacić, podaj frazę odzyskiwania portfela.', scam: true, why: 'Frazy odzyskiwania nie podaje się nikomu, nigdy. Kto ją zna, ten przejmuje cały portfel.' },
{ from: 'Aplikacja kurierska · powiadomienie', text: 'Przesyłka jest w drodze. Szacowana dostawa: jutro. Śledź paczkę w aplikacji.', scam: false, why: 'Powiadomienie z aplikacji, którą sam zainstalowałeś, bez płatności i bez linku do obcej strony.' }
];

const ROUND = 10;
const shuffle = () => { const a = QS.map((_, i) => i); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a.slice(0, ROUND); };
const PORADY = [
{ n: '#01', href: 'porady/8080/', tag: 'telefon i SMS', t: 'Dziwny SMS? Prześlij go na 8080, zanim klikniesz', k: 'sms 8080 cert link' },
{ n: '#02', href: 'porady/na-wnuczka-ai/', tag: 'dla seniorów', t: '„Na wnuczka” 2.0: głos bliskiej osoby może być podrobiony', k: 'wnuczek telefon ai głos seniorzy' },
{ n: '#03', href: 'porady/bank-dzial-bezpieczenstwa/', tag: 'bank', t: '„Dzwonię z działu bezpieczeństwa banku”. Rozłącz się.', k: 'bank telefon konsultant' },
{ n: '#04', href: 'porady/zastrzez-pesel/', tag: 'dane', t: 'Zastrzeż PESEL w mObywatelu w 2 minuty', k: 'pesel mobywatel kredyt dane' },
{ n: '#05', href: 'porady/doplata-do-paczki/', tag: 'paczki', t: '„Dopłać 1,99 zł do paczki”: jak rozpoznać fałszywy link', k: 'paczka kurier sms link dopłata' },
{ n: '#06', href: 'porady/weryfikacja-dwuetapowa/', tag: 'konta i hasła', t: 'Weryfikacja dwuetapowa na Facebooku, Gmailu i w banku: 5 minut', k: 'hasło 2fa konto facebook' },
{ n: '#07', href: 'porady/menedzer-hasel/', tag: 'konta i hasła', t: 'Jedno hasło do wszystkiego to otwarte drzwi. Menedżer haseł bez stresu', k: 'hasło menedżer konto' },
{ n: '#08', href: 'porady/olx-vinted-link/', tag: 'zakupy', t: 'Sprzedajesz na OLX lub Vinted? Uważaj na „link do odbioru płatności”', k: 'olx vinted zakupy sprzedaż link' },
{ n: '#09', href: 'porady/aktualizacje/', tag: 'telefon', t: '„Przypomnij później” to zły pomysł. Dlaczego aktualizacje są ważne', k: 'aktualizacje telefon system' },
{ n: '#10', href: 'porady/darmowe-wifi/', tag: 'poza domem', t: 'Darmowe Wi‑Fi w galerii i na dworcu: co wolno, a czego lepiej nie', k: 'wifi sieć publiczna' }
];
const LABELS = { jak_dziala_rada: '~/jak-dziala-rada', poza_polityka: '~/poza-polityka', porady_cyfrowe: '~/porady-cyfrowe', quiz: '~/quiz', zapytaj_mnie: '~/zapytaj-mnie' };
const GLYPHS = '!<>-_\\/[]{}=+*^?#01';
const scramble = (str, p) => str.split('').map((ch, i) => (i / str.length) < p || ch === ' ' ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]).join('');
const fmt = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
class Component extends DCLogic {
constructor(props) {
super(props);
this.state = { light: loadPref('light'), big: loadPref('big'), sendErr: false, q: 0, answer: null, score: 0, done: false,  order: shuffle(), menu: false, copied: false, f: { name: '', mail: '', msg: '', ok: false }, e: {}, sent: false, query: '', t: 0 };
}
componentDidMount() {
setTheme(this.state.light);
const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduce) { this.setState({ t: 1 }); return; }
const start = performance.now();
const step = now => { const t = Math.min(1, (now - start) / 1800); this.setState({ t }); if (t < 1) this.raf = requestAnimationFrame(step); };
this.raf = requestAnimationFrame(step);
}
componentWillUnmount() { cancelAnimationFrame(this.raf); clearTimeout(this.toastT); }
renderVals() {
const hex = (this.props.accent ?? 'var(--accent)').replace('#','');
const c = [0,2,4].map(i => parseInt(hex.slice(i,i+2),16));
const mix = (base, t) => '#' + c.map((v,i) => Math.round(v*t + base[i]*(1-t)).toString(16).padStart(2,'0')).join('');
const bg = [10,11,13];
const rgba = a => 'rgba(' + c.join(',') + ',' + a + ')';
const qs = QS;
const s = this.state;
const cur = qs[s.order[s.q]];
const answered = s.answer !== null;
const correct = answered && s.answer === cur.scam;
const pick = v => () => { if (this.state.answer !== null) return; this.setState({ answer: v, score: this.state.score + (v === qs[this.state.order[this.state.q]].scam ? 1 : 0) }); };
const last = s.q === ROUND - 1;
const resultText = s.score === ROUND ? 'Bezbłędnie. Oszuści mają z Tobą pod górkę, ale wyślij quiz komuś, kto ma mniej szczęścia.' : s.score >= 7 ? 'Nieźle, ale jeden fałszywy SMS wystarczy. Zajrzyj do poradników powyżej.' : 'Uwaga, tak właśnie działają oszuści. Przeczytaj poradnik o numerze 8080 i spróbuj jeszcze raz.';
return {
accent: '#' + hex,
accentLight: mix([255,255,255], 0.7),
accentBg: mix(bg, 0.1),
accentDeep: mix(bg, 0.05),
accentLine: mix(bg, 0.22),
glow45: rgba(0.45), glow22: rgba(0.22), glow08: rgba(0.08), glow0: rgba(0),
cur,
score: s.score,
done: s.done,
notDone: !s.done,
answered: answered,
notAnswered: !answered,
progressLabel: s.done ? 'koniec' : 'pytanie ' + (s.q + 1) + '/' + ROUND,
progressPct: s.done ? '100%' : Math.round((s.q + (answered ? 1 : 0)) * 100 / ROUND) + '%',
fbTitle: correct ? (cur.scam ? 'Dobrze, to oszustwo.' : 'Dobrze, to prawdziwa wiadomość.') : (cur.scam ? 'Niestety, to oszustwo.' : 'To akurat prawdziwa wiadomość.'),
fbColor: correct ? 'var(--success)' : 'var(--danger)',
nextLabel: last ? 'Zobacz wynik' : 'Następne pytanie →',
resultText,
pickScam: pick(true),
pickReal: pick(false),
next: () => { if (this.state.q === ROUND - 1) this.setState({ done: true }); else this.setState({ q: this.state.q + 1, answer: null }); },
restart: () => this.setState({ q: 0, answer: null, score: 0, done: false, order: shuffle() }),
roundLen: ROUND,
poolSize: QS.length,
toggleLight: () => { const v = !this.state.light; this.setState({ light: v }); setTheme(v); },
toggleBig: () => { const v = !this.state.big; this.setState({ big: v }); savePref('big', v); },

menuOpen: s.menu,
toggleMenu: () => this.setState({ menu: !this.state.menu }),
copied: s.copied,
copyLabel: s.copied ? 'skopiowano ✓' : 'kopiuj',
copyMail: () => { try { navigator.clipboard.writeText('kontakt@mikolajborawski.pl'); } catch (err) {} this.setState({ copied: true }); clearTimeout(this.toastT); this.toastT = setTimeout(() => this.setState({ copied: false }), 2200); },
f: s.f, e: s.e,
errNameBorder: s.e.name ? 'var(--danger)' : 'var(--line-strong)',
errMailBorder: s.e.mail ? 'var(--danger)' : 'var(--line-strong)',
errMsgBorder: s.e.msg ? 'var(--danger)' : 'var(--line-strong)',
setName: ev => this.setState({ f: { ...this.state.f, name: ev.target.value } }),
setMail: ev => this.setState({ f: { ...this.state.f, mail: ev.target.value } }),
setMsg: ev => this.setState({ f: { ...this.state.f, msg: ev.target.value } }),
setOk: ev => this.setState({ f: { ...this.state.f, ok: ev.target.checked } }),
send: () => { const f = this.state.f; const e = { name: !f.name.trim(), mail: !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.mail.trim()), msg: f.msg.trim().length < 10, ok: !f.ok }; const bad = Object.values(e).some(Boolean); this.setState({ e }); if (!bad) submitForm(f).then(ok => this.setState({ sent: ok, sendErr: !ok })); },
resetForm: ev => { clearForm(ev); this.setState({ sent: false, sendErr: false, e: {}, f: { name: '', mail: '', msg: '', ok: false } }); },
sent: s.sent, notSent: !s.sent,
shareQuiz: () => { const data = { title: 'Czy to oszustwo? Quiz', text: 'Sprawdź, czy rozpoznasz oszustwo SMS-owe. 10 pytań, minuta.', url: 'https://mikolajborawski.pl/#quiz' }; if (navigator.share) { navigator.share(data).catch(() => {}); } else { try { navigator.clipboard.writeText(data.url); } catch (err) {} this.setState({ copied: true }); clearTimeout(this.toastT); this.toastT = setTimeout(() => this.setState({ copied: false }), 2200); } },
query: s.query,
setQuery: ev => this.setState({ query: ev.target.value }),
hasQuery: s.query.trim().length > 0,
noQuery: s.query.trim().length === 0,
results: (() => { const q = s.query.trim().toLowerCase(); if (!q) return []; return PORADY.filter(p => (p.t + ' ' + p.tag + ' ' + p.k).toLowerCase().includes(q)); })(),
resultsLabel: (() => { const q = s.query.trim().toLowerCase(); const n = PORADY.filter(p => (p.t + ' ' + p.tag + ' ' + p.k).toLowerCase().includes(q)).length; return n ? 'znaleziono: ' + n : 'nic nie znaleziono, spróbuj: SMS, bank, hasło'; })(),
c1: fmt(Math.round(22441 * (1 - Math.pow(1 - s.t, 3)))),
c2: String(Math.round(11 * (1 - Math.pow(1 - s.t, 3)))),
c3: Math.round(250 * (1 - Math.pow(1 - s.t, 3))) + '+',
scr: Object.fromEntries(Object.entries(LABELS).map(([k, v]) => [k, s.t >= 0.5 ? v : scramble(v, s.t * 2)])),
spot: ev => { const el = ev.currentTarget; const r = el.getBoundingClientRect(); el.style.setProperty('--mx', (ev.clientX - r.left) + 'px'); el.style.setProperty('--my', (ev.clientY - r.top) + 'px'); },
tilt: ev => { const el = ev.currentTarget; const r = el.getBoundingClientRect(); const x = (ev.clientX - r.left) / r.width - 0.5; const y = (ev.clientY - r.top) / r.height - 0.5; el.style.setProperty('--mx', (ev.clientX - r.left) + 'px'); el.style.setProperty('--my', (ev.clientY - r.top) + 'px'); el.style.transform = 'perspective(1200px) rotateX(' + (-y * 4).toFixed(2) + 'deg) rotateY(' + (x * 6).toFixed(2) + 'deg) translateY(-4px)'; },
untilt: ev => { ev.currentTarget.style.transform = ''; },
rootCls: s.light ? 'light' : '',
sendErr: s.sendErr,
rootFx: (s.big ? 'zoom: 1.15; ' : ''),
bigBg: s.big ? 'var(--line)' : 'transparent'
};
}
}
export default Component;
