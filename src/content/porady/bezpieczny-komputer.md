---
n: 56
slug: bezpieczny-komputer
tag: przewodnik
cats: [konta, przewodniki]
title: "Bezpieczny komputer domowy z Windowsem. Ustawienia krok po kroku"
card: "Bez kupowania programów: wszystko, co potrzebne, jest już w systemie."
lead: "Domowy laptop to bankowość, zdjęcia, dokumenty i konta całej rodziny. Nie potrzebujesz drogiego antywirusa ani specjalisty, żeby był dobrze zabezpieczony. Windows ma większość narzędzi wbudowanych, trzeba je tylko włączyć i raz przejrzeć. Ten przewodnik przeprowadza przez wszystko w godzinę."
date: 2026-11-22
faq:
  - q: "Czy potrzebuję płatnego antywirusa?"
    a: "Dla większości domowych użytkowników wbudowane Zabezpieczenia Windows (Microsoft Defender) wystarczą, jeśli są włączone i aktualizowane. Ważniejsze od antywirusa są aktualizacje, rozsądne pobieranie programów i kopie zapasowe."
  - q: "Mam starego Windowsa, który nie dostaje już aktualizacji. Co zrobić?"
    a: "Komputer bez aktualizacji bezpieczeństwa jest coraz łatwiejszym celem. Sprawdź, czy da się go zaktualizować do nowszej wersji. Jeśli nie, nie używaj go do bankowości i ważnych kont."
  - q: "Czy szyfrować dysk w laptopie?"
    a: "Tak, jeśli laptop wychodzi z domu. Szyfrowanie urządzenia lub BitLocker sprawia, że złodziej nie odczyta Twoich plików. Klucz odzyskiwania zapisz w bezpiecznym miejscu."
---

Nazwy menu poniżej dotyczą Windowsa 11. W Windowsie 10 większość ustawień jest w podobnych miejscach.

## 1. Aktualizacje

Ustawienia → **Windows Update**.

- Zainstaluj wszystkie oczekujące aktualizacje i uruchom komputer ponownie.
- Włącz otrzymywanie aktualizacji innych produktów Microsoft.
- Ustaw godziny aktywności, żeby restarty nie przeszkadzały w pracy.

Aktualizuj też przeglądarkę (zwykle robi to sama po ponownym uruchomieniu) i programy, z których korzystasz: pakiet biurowy, czytnik PDF, komunikatory.

## 2. Zabezpieczenia Windows

Ustawienia → Prywatność i zabezpieczenia → **Zabezpieczenia Windows**.

Wszystkie kafelki powinny mieć zielone znaczki:

- **Ochrona przed wirusami i zagrożeniami:** włączona ochrona w czasie rzeczywistym i ochrona dostarczana z chmury.
- **Ochrona przed oprogramowaniem wymuszającym okup:** włącz **Kontrolowany dostęp do folderów**. Chroni Dokumenty, Obrazy i Pulpit przed zaszyfrowaniem przez złośliwe programy. Jeśli jakiś zaufany program przestanie zapisywać pliki, możesz go dodać do wyjątków.
- **Zapora i ochrona sieci:** włączona dla wszystkich sieci.
- **Kontrola aplikacji i przeglądarki:** włączona ochrona oparta na reputacji (SmartScreen).

## 3. Konto bez uprawnień administratora

To ustawienie robi ogromną różnicę, a mało kto o nim wie.

Na co dzień najlepiej korzystać z **konta standardowego**, a konto administratora zostawić do instalowania programów i zmian w systemie. Złośliwy program uruchomiony na koncie standardowym ma dużo mniejsze możliwości.

Jak to zrobić:

1. Ustawienia → Konta → Inni użytkownicy → dodaj nowe konto administratora z silnym hasłem.
2. Swoje codzienne konto zmień na **standardowe**.
3. Gdy będziesz instalować program, Windows poprosi o hasło administratora.

Dzieci powinny mieć własne konta standardowe, najlepiej z ustawieniami w **Microsoft Family Safety**.

## 4. Logowanie

- Ustaw PIN albo logowanie twarzą lub odciskiem palca (Windows Hello).
- Komputer blokuje się automatycznie po kilku minutach bezczynności.
- Przy odchodzeniu od komputera: klawisz Windows + L.

## 5. Szyfrowanie dysku

Ustawienia → Prywatność i zabezpieczenia → **Szyfrowanie urządzenia** (albo BitLocker w wersjach Pro).

Jeśli laptop zostanie skradziony, złodziej nie odczyta plików bez Twojego logowania. **Klucz odzyskiwania** zapisz w bezpiecznym miejscu, np. na koncie Microsoft i wydrukowany w domu. Bez niego, w razie awarii, możesz stracić dostęp do danych.

## 6. Kopia zapasowa

Najlepsza ochrona przed awarią, kradzieżą i oprogramowaniem wymuszającym okup.

- **Kopia w chmurze:** OneDrive, Dysk Google albo inna usługa dla folderów Dokumenty i Obrazy.
- **Kopia na dysku zewnętrznym:** raz w miesiącu, a potem odłącz dysk od komputera. Dysk podłączony na stałe może zostać zaszyfrowany razem z komputerem.

Sprawdź raz na jakiś czas, czy z kopii da się odtworzyć plik.

## 7. Przeglądarka

- Jedna, aktualna przeglądarka zamiast kilku.
- Rozszerzenia: tylko te, których naprawdę używasz, ze sklepu przeglądarki. Usuń nieznane, zwłaszcza „kupony”, „konwertery PDF” i „pobieracze filmów”.
- Powiadomienia ze stron: wyłącz zgody dla stron, których nie znasz. Fałszywe alarmy o wirusach często pochodzą z takich powiadomień.
- Zakładka do strony banku, żeby nie wchodzić przez wyszukiwarkę.

## 8. Pobieranie programów

- Programy tylko ze strony producenta albo ze sklepu Microsoft Store.
- Uważaj na reklamy w wynikach wyszukiwania. Pierwszy wynik dla „pobierz VLC” czy „pobierz Zoom” bywa fałszywą stroną.
- Nie instaluj „cracków” ani programów z nieznanych forów. To jeden z głównych sposobów infekcji programami kradnącymi hasła.

## 9. Sieć domowa

Zobacz poradę o routerze: zmienione hasło administratora, WPA2 lub WPA3, aktualne oprogramowanie, sieć dla gości.

## 10. Prywatność

Ustawienia → Prywatność i zabezpieczenia. Przejrzyj uprawnienia aplikacji do:

- **kamery i mikrofonu:** tylko komunikatory i programy, których naprawdę używasz,
- **lokalizacji:** wyłącz dla aplikacji, które jej nie potrzebują,
- **danych diagnostycznych:** wystarczą wymagane.

Jeśli laptop ma kamerę bez przełącznika, zasłonka na obiektyw to tania i skuteczna ochrona przed podglądaniem, nawet jeśli ryzyko jest niewielkie.

## 11. Komputer dla seniora

Starszym rodzicom ustaw konto standardowe, zainstaluj tylko potrzebne programy, przypnij na pasku zadań przeglądarkę z zakładką do banku i dodaj na pulpicie plik „Gdy coś jest nie tak, dzwoń do …” z Twoim numerem. Czerwony ekran z alarmem i numerem telefonu to strona internetowa, a nie wirus. Pokaż, jak zamknąć przeglądarkę przez Ctrl+Shift+Esc.

> **Zasada:** aktualizacje, włączony Defender, codzienna praca na koncie standardowym i kopia na odłączanym dysku. Cztery rzeczy, które chronią przed większością zagrożeń bez płacenia za dodatkowe programy.

## Lista kontrolna na godzinę

1. Windows Update: wszystko zainstalowane.
2. Zabezpieczenia Windows: same zielone znaczki, kontrolowany dostęp do folderów włączony.
3. Codzienne konto standardowe, osobne konto administratora.
4. PIN lub Windows Hello, automatyczna blokada ekranu.
5. Szyfrowanie dysku włączone, klucz odzyskiwania zapisany.
6. Kopia w chmurze i na odłączanym dysku.
7. Przeglądarka bez zbędnych rozszerzeń i powiadomień.

## Gdy coś jest nie tak

Objawy: komputer nagle bardzo zwolnił, w przeglądarce pojawiły się nowe paski lub wyszukiwarka, wyskakują reklamy, przyjaciele dostają od Ciebie dziwne wiadomości.

1. Odłącz komputer od internetu.
2. Uruchom pełne skanowanie w Zabezpieczeniach Windows, a potem skanowanie offline.
3. Usuń nieznane programy i rozszerzenia.
4. Zmień hasła do najważniejszych kont z innego, czystego urządzenia.
5. Jeśli problem wraca, rozważ przywrócenie systemu do ustawień fabrycznych po skopiowaniu plików.
