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

## Do zrobienia przed startem

1. Kupić domenę `mikolajborawski.pl`, dodać `public/CNAME` z jej nazwą i usunąć `SITE_BASE`/`SITE_URL` z `.github/workflows/deploy.yml`.
2. Klucz Web3Forms wpisać w `WEB3FORMS_KEY` w `src/scripts/bind.js` (bez klucza formularz otwiera program pocztowy).
3. Kod GoatCounter wpisać w `GOATCOUNTER` w `src/layouts/BaseLayout.astro`.

Publikacja: każdy push na `main` buduje i wdraża stronę (GitHub Actions).
