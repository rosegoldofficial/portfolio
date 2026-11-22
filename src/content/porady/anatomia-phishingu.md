---
n: 48
slug: anatomia-phishingu
tag: przewodnik
cats: [sms, konta, przewodniki]
title: "Jak czytać link i e-mail, żeby nie dać się nabrać. Anatomia phishingu"
card: "Praktyczna lekcja czytania adresów, nadawców i załączników."
lead: "Większość porad mówi „nie klikaj w podejrzane linki”. Tylko jak odróżnić podejrzany od prawdziwego, skoro fałszywe strony wyglądają identycznie? Ten przewodnik uczy jednej umiejętności: czytania adresu i wiadomości tak, jak robią to specjaliści od bezpieczeństwa. Wystarczy 10 minut, żeby zostało na zawsze."
date: 2026-12-20
faq:
  - q: "Która część adresu strony jest najważniejsza?"
    a: "Domena, czyli fragment tuż przed pierwszym pojedynczym ukośnikiem, czytany od prawej strony: np. w adresie logowanie.mbank.pl.weryfikacja.com/... właściwą domeną jest weryfikacja.com, a nie mbank.pl."
  - q: "Czy kłódka i https oznaczają, że strona jest bezpieczna?"
    a: "Nie. Kłódka oznacza tylko, że połączenie jest szyfrowane. Fałszywe strony też ją mają."
  - q: "Jak sprawdzić, dokąd prowadzi link, bez klikania?"
    a: "Na komputerze najedź kursorem na link i spójrz na adres w lewym dolnym rogu. Na telefonie przytrzymaj palec na linku, a pojawi się podgląd adresu."
---

Phishing to podszywanie się pod kogoś, komu ufasz: bank, kuriera, urząd, znajomego. Celem jest skłonienie Cię, żebyś sam oddał dane: hasło, kod, numer karty. Fałszywa strona może wyglądać jak prawdziwa w każdym szczególe, bo da się ją po prostu skopiować. Jest jednak jedno miejsce, którego oszust nie może podrobić: **adres strony**.

## Część 1: jak czytać adres strony

### Domena to nazwisko strony

Weźmy prawdziwy adres:

`https://www.mbank.pl/indywidualny/`

Rozbierzmy go:

- `https://` to sposób połączenia. Nie mówi nic o tym, kto jest właścicielem.
- `www.mbank.pl` to nazwa hosta. Najważniejsza jest jej końcówka: **mbank.pl**. To domena, czyli „nazwisko” strony.
- `/indywidualny/` to ścieżka, czyli „pokój” w tym domu. Może zawierać dowolne słowa.

### Czytaj od prawej do pierwszego ukośnika

Oszuści wiedzą, że ludzie czytają od lewej. Dlatego budują adresy tak:

`https://mbank.pl.logowanie-weryfikacja.com/login`

Czytamy od pierwszego pojedynczego ukośnika w lewo: `.com`, potem `logowanie-weryfikacja`. Domena to **logowanie-weryfikacja.com**. Słowo „mbank.pl” na początku to tylko dekoracja, tak zwana subdomena, którą właściciel domeny może nazwać, jak chce.

Kolejny przykład:

`https://inpost-dopłata.pl-paczka.shop/`

Domena: **pl-paczka.shop**. Z InPostem nie ma nic wspólnego.

### Podobne znaki

Uważaj na adresy, w których:

- litera „o” jest zamieniona na cyfrę „0” (`allegr0.pl`),
- „rn” udaje „m” (`rnbank.pl`),
- dopisano słowo (`pkobp-pomoc.pl`, `olx-dostawa.pl`),
- zmieniono końcówkę (`ing.com.pl.co`, `gov-pl.online`).

### Kłódka niczego nie dowodzi

Kłódka w pasku adresu oznacza, że połączenie jest szyfrowane. Fałszywa strona też może ją mieć, bo certyfikat dostaje się za darmo w kilka minut. Kłódka mówi „nikt nie podsłucha rozmowy”, a nie „rozmawiasz z bankiem”.

### Skracacze i przekierowania

Linki typu `bit.ly/...` albo `tinyurl.com/...` ukrywają prawdziwy adres. W SMS-ie od „banku” czy „kuriera” to sygnał ostrzegawczy. Prawdziwe firmy coraz częściej używają własnych domen.

## Część 2: jak czytać e-mail

### Nadawca: nazwa to nie adres

W skrzynce widzisz najczęściej nazwę wyświetlaną, np. „PKO Bank Polski”. Tę nazwę można wpisać dowolnie. Kliknij w nią albo rozwiń szczegóły, żeby zobaczyć adres e-mail. Jeśli to `powiadomienia@pkobp-bezpieczenstwo.info` albo przypadkowy adres z Gmaila, wiadomość nie jest od banku.

Uwaga: nawet adres nadawcy da się czasem podrobić. Dlatego adres nadawcy to dopiero pierwszy filtr, a nie dowód prawdziwości.

### Treść: sześć czerwonych flag

1. **Pośpiech:** „w ciągu 24 godzin”, „dziś o 21:00”, „ostatnie ostrzeżenie”.
2. **Strach albo nagroda:** blokada konta, mandat, wezwanie, zwrot pieniędzy, wygrana.
3. **Prośba o dane:** hasło, kod, numer karty, PESEL, zdjęcie dowodu.
4. **Ogólne powitanie:** „Szanowny Kliencie” zamiast imienia (choć oszuści coraz częściej znają imię).
5. **Dziwny język:** błędy, kalki z tłumacza, brak polskich znaków.
6. **Załącznik, którego się nie spodziewasz:** faktura, wezwanie, „dokument do podpisu”.

Jedna flaga nie przesądza. Dwie albo trzy naraz powinny zapalić lampkę.

### Załączniki

Szczególnie uważaj na pliki:

- spakowane (`.zip`, `.rar`, `.7z`), zwłaszcza z hasłem podanym w treści,
- z podwójną końcówką (`faktura.pdf.exe`),
- dokumenty Office, które po otwarciu proszą o „włączenie zawartości” albo „włączenie edycji”,
- pliki `.html` udające dokument, które po otwarciu pokazują stronę logowania.

## Część 3: SMS-y i komunikatory

SMS ma mało miejsca, więc phishing jest krótki: kwota, termin, link. Typowe tematy w Polsce:

- dopłata do paczki,
- nieopłacony rachunek za prąd albo „odłączenie”,
- mandat, autostrada, parking,
- zwrot podatku,
- „Twój numer PESEL jest zagrożony”.

W komunikatorach dochodzi jeszcze podszywanie się pod znajomych: „pożycz BLIK-a”, „zagłosuj na córkę”, „czy to Ty na tym filmie?”. Tu zasada jest prosta: przy prośbie o pieniądze lub kody zadzwoń do tej osoby.

## Część 4: trening

Spróbuj ocenić te adresy (odpowiedzi poniżej):

1. `https://allegro.pl/moje-allegro`
2. `https://allegro.pl-oferta.com/platnosc`
3. `https://www.gov.pl/web/gov/zastrzez-pesel`
4. `https://gov.pl.mobywatel-weryfikacja.net/`
5. `https://olx.pl.dostawa-bezpieczna.store/`

Odpowiedzi: 1 i 3 są prawdziwe. 2: domena `pl-oferta.com`. 4: domena `mobywatel-weryfikacja.net`. 5: domena `dostawa-bezpieczna.store`.

> **Zasada:** czytaj adres od prawej do pierwszego ukośnika. To, co tam stoi, mówi, czyja jest strona. Wszystko na lewo od tego to tylko napis.

## Część 5: phishing bez linku

Coraz częściej oszuści w ogóle nie wysyłają linku, bo filtry pocztowe nauczyły się je wyłapywać. Zamiast tego:

- **kod QR** w mailu albo na naklejce, który prowadzi do fałszywej strony,
- **numer telefonu** w wiadomości („w razie pytań zadzwoń do działu bezpieczeństwa”), pod którym czeka oszust,
- **plik PDF** z przyciskiem „pobierz dokument”, który prowadzi do strony logowania,
- **zaproszenie do udostępnionego dokumentu** w prawdziwej usłudze chmurowej, gdzie dopiero w środku jest link do fałszywego logowania.

Kod QR czytaj tak samo jak link: telefon pokazuje adres przed otwarciem, sprawdź domenę. Numer telefonu z maila nigdy nie jest dobrym sposobem kontaktu z bankiem. Używaj numeru z karty albo z oficjalnej strony.

## Najprostsza obrona

Najlepsza metoda w ogóle nie wymaga analizowania linków: **nie wchodź przez linki z wiadomości tam, gdzie chodzi o pieniądze albo logowanie**. Bank otwierasz z aplikacji, paczkę sprawdzasz w aplikacji kuriera, urząd przez wpisany ręcznie adres. Podejrzane SMS-y przesyłaj na **8080**, a maile i strony zgłaszaj na **incydent.cert.pl**.
