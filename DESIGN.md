# DESIGN.md · Borawski

Design system strony mikolajborawski.pl i materiałów cyfrowych Mikołaja Borawskiego z Częstochowy. Kierunek „Noc”: ciemne tło, jeden pomarańczowy kolor sygnałowy, krój Inter Tight do treści i JetBrains Mono do etykiet. Strona ma działać tak samo dobrze dla 20-latka na telefonie, jak dla seniora z Kiedrzyna, który powiększa tekst.

## Głos i treść

- Konkret przed ozdobnikiem. Liczby zamiast przymiotników: „22 441 podpisów”, „11 lat”, „250+ graczy”.
- Pierwsza osoba, krótkie zdania, polszczyzna bez korpomowy. Czasowniki, które zależą ode mnie: „złożę”, „opublikuję”, „zgłoszę”. Nigdy „zbuduję” ani „obniżę”, bo to decyzja większości.
- Bez długich myślników (—). Zdania łączymy przecinkiem, w ostateczności zwykłym „-”.
- Bez wykrzykników i emoji w interfejsie. Jedyny znak ozdobny to ✦ w nagłówkach sekcji, i to rzadko.
- Etykiety sekcji w stylu ścieżki: `~/poza-polityka`, `~/porady-cyfrowe`. To nasz podpis wizualny, zawsze małymi literami.
- Fakty prawne i polityczne tylko ze źródłem. Zarzut to nie wyrok, i tak to piszemy.

## Kolor

Dwa motywy: **Noc** (domyślny, pierwszy) i **Dzień** (dla przycisku jasnego trybu).

- `bg` to tło strony, `surface` to karty, `surface-raised` to aktywne i podniesione elementy.
- Tekst idzie po drabinie: `ink` (nagłówki), `ink-soft` (wyróżnione akapity), `ink-muted` (opisy), `ink-faint` (etykiety mono, daty). Nic jaśniejszego niż `ink-faint` na tekst, bo traci kontrast 4.5:1.
- `accent` pojawia się najwyżej trzy razy na ekranie: główny przycisk, jeden wyróżniony element i drobne akcenty (kropka, kreska, numer). Tekst na pomarańczu zawsze `on-accent`.
- `accent-text` to akcent jako kolor tekstu, bo czysty `accent` w trybie Dzień jest za jasny na litery.
- `success` i `danger` zawsze z tekstem obok. Kolor nigdy nie jest jedyną informacją.

## Typografia

- **Inter Tight** (Google Fonts) do wszystkiego, co się czyta. Nagłówki 600, ciasno: `letter-spacing -0.04em` przy `display-*` i `heading-1`, `-0.02em` przy mniejszych.
- **JetBrains Mono** tylko do etykiet, dat, numerów, tagów i „kodowych” podpisów liczb (`referendum.podpisy`).
- Tekst ciągły min. 17px (`body`), na telefonie nie mniej niż 16px. Długość linii 60–75 znaków.

## Przestrzeń i kształt

Skala 4/8: `space-1` … `space-10`. Sekcje dzieli `space-10` (96px), boki strony `space-9` (64px), na telefonie 20px. Karty `radius-md`, panele `radius-lg`, wszystko klikalne i okrągłe `radius-pill`. Obramowania 1px w `line`, pola formularza w `line-strong`.

## Ruch

Ruch ma tłumaczyć, a nie zabawiać.

- Wejście nagłówków: rozmycie + 20px w górę, 1s, `cubic-bezier(.2,.8,.2,1)`, kolejne elementy co 150ms.
- Karty po najechaniu: uniesienie o 6px, ramka w `accent`, `shadow-glow` i poświata podążająca za kursorem (radial 360px w `accent-line`).
- Wiersze listy: wsunięcie o 16px i smuga w `accent-line`; strzałka jedzie 8px w prawo.
- Przyciski: skala 1.03 i przelatujący błysk. Ikony social: obrót −8° i wypełnienie `accent`.
- Liczby odliczają od zera przez 1,8s przy wejściu, etykiety `~/…` przez chwilę „deszyfrują się” losowymi znakami.
- Sekcje wjeżdżają przy scrollu (CSS `animation-timeline: view()`), u góry cienki pasek postępu czytania.
- Postać w hero stoi nieruchomo, dół zdjęcia zanika maską. Bez przesuwających się pasków tekstu.
- `prefers-reduced-motion: reduce` wyłącza wszystko powyżej.

## Dostępność

- Link „Przejdź do treści” na początku strony, widoczna obwódka `:focus-visible` w kolorze `accent`.
- Przyciski A+ (powiększenie o 15%) i jasny tryb w nagłówku; na telefonie w menu.
- Cele dotyku min. 44px. Każdy przycisk ikonowy ma `aria-label`.
- Formularz: komunikat błędu tekstem pod polem, ramka w `danger`, potwierdzenie po wysłaniu w `role="status"`.
- Poradniki mają „Posłuchaj wpisu” (synteza mowy przeglądarki) i „Wydrukuj ściągę” (czarno na białym, A4).

## Ikony i zdjęcia

Ikony liniowe 24px, kreska 1.8, zaokrąglone końce, kolor `currentColor`. Bez emoji. Zdjęcie główne to wycięta postać w garniturze (`assets/Photos/portret.png`) na poświacie w `accent`; dół zanika maską do `bg`. Logo to wordmark `borawski_` z podkreślnikiem w `accent` (`assets/Logos`).

## Komponenty

Button, Card, StatCard, ListRow, Field, Tag, Toast, QuizBubble i SocialButton, każdy z opisem i podglądem. Style są w `components/bundle.css` jako klasy `mb-*`; komponenty to czysty HTML i CSS, bez frameworka.


## Tokeny kolorów

W kodzie: `src/styles/tokens.css` (ciemny w `:root`, jasny w `[data-theme="light"]`). Strony używają nazw, nigdy surowych wartości.

| token | Noc | Dzień |
|---|---|---|
| `--bg` | `#0A0B0D` | `#F6F5F2` |
| `--surface` | `#101114` | `#FFFFFF` |
| `--surface-raised` | `#1A1C20` | `#EFEDE8` |
| `--line` | `#24262B` | `#DAD7D0` |
| `--line-strong` | `#34373D` | `#A9A59C` |
| `--ink` | `#EDEDED` | `#111214` |
| `--ink-soft` | `#D4D6DA` | `#2A2C31` |
| `--ink-muted` | `#A3A6AD` | `#4A4D55` |
| `--ink-faint` | `#8A8E96` | `#5F626A` |
| `--accent` | `#FF5B1F` | `#E04A12` |
| `--accent-text` | `#FF7A45` | `#B23C0E` |
| `--accent-tint` | `#1A0F0A` | `#FFEBE1` |
| `--accent-line` | `#3A2418` | `#F4C2AC` |
| `--on-accent` | `#0A0B0D` | `#0A0B0D` |
| `--success` | `#3DDC97` | `#127A52` |
| `--danger` | `#FF8A8A` | `#B3261E` |

Pełne tokeny (typografia, odstępy, promienie, cienie) i podgląd komponentów: design system „Borawski” w Claude.
