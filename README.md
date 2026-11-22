# mikolajborawski.pl

Strona Mikołaja Borawskiego, Częstochowa. Astro 7, statyczna, hostowana za darmo na GitHub Pages.

## Uruchomienie

```
npm install
npm run dev      # http://localhost:4321
npm run build    # wynik w dist/
```

## Struktura

- `src/sections/*.html` – treść stron (przeniesiona z projektu „F · Noc”)
- `src/scripts/logic/*.js` – zachowanie: quiz, wyszukiwarka porad, formularz, tryb jasny, A+
- `src/scripts/bind.js` – mały runtime, który łączy treść z logiką (atrybuty `data-t`, `data-if`, `data-on`, `data-tpl`, `data-for`)
- `src/styles/tokens.css` – kolory i odstępy z design systemu, `responsive.css` – układ na telefon
- `DESIGN.md` – zasady wyglądu i treści

## Nowa porada

1. Dodaj plik w `src/content/porady/` (wzór: dowolny istniejący wpis, z `faq`).
2. `python3 tools/graphics.py --fb ~/grafiki` tworzy obrazek do linków (`public/og/porady/`) i grafikę 1080×1350 na Facebooka.
3. Commit i push.

## Do zrobienia przed startem

1. Kupić domenę `mikolajborawski.pl`, dodać `public/CNAME` z jej nazwą i usunąć `SITE_BASE`/`SITE_URL` z `.github/workflows/deploy.yml`.
2. Klucz Web3Forms wpisać w `WEB3FORMS_KEY` w `src/scripts/bind.js` (bez klucza formularz otwiera program pocztowy).
3. Kod GoatCounter wpisać w `GOATCOUNTER` w `src/layouts/BaseLayout.astro`.

Publikacja: każdy push na `main` buduje i wdraża stronę (GitHub Actions).

## Grafiki social

```
python3 tools/social.py news --foto zdjecie.jpg --etykieta "Rada miasta" --tytul "Rada przyjęła *budżet*" --zrodlo "BIP UM" --format post --out post.jpg
python3 tools/social.py nakladki --out nakladki/
python3 tools/banner.py
```

Grafiki do publikacji przez API (Instagram wymaga publicznego linku) trafiają do `public/social/<rrrr-mm-dd-slug>/`, patrz `public/social/README.md`. Wrapper tekstu w `tools/` nie zostawia pojedynczych liter ani liczb na końcu linii.
