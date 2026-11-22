// Mini quizzes for each advice post (generated from /home/claude/quiz, edit freely).
export interface QuizQ { q: string; o: string[]; a: number; why: string; ref?: string }
export const QUIZ: Record<string, QuizQ[]> = {
 "8080": [
  {
   "q": "Co robi CERT Polska z SMS-em przesłanym na 8080?",
   "o": [
    "Blokuje numer telefonu nadawcy w całej Polsce",
    "Odpisuje nadawcy z ostrzeżeniem",
    "Sprawdza link, a fałszywa strona trafia na listę ostrzeżeń"
   ],
   "a": 2,
   "why": "Specjaliści CERT Polska sprawdzają wiadomość. Jeśli to wyłudzenie, strona trafia na listę ostrzeżeń i przestaje się otwierać u klientów polskich operatorów.",
   "ref": "Co to jest 8080?"
  },
  {
   "q": "Jak przesłać podejrzanego SMS-a na 8080?",
   "o": [
    "Przepisać treść bez linku, żeby był bezpieczny",
    "Przekazać wiadomość w całości, z linkiem",
    "Zrobić zrzut ekranu i wysłać MMS-em"
   ],
   "a": 1,
   "why": "Wiadomość przekazujesz bez zmian, razem z linkiem. Bez linku nie da się sprawdzić, dokąd prowadzi.",
   "ref": "Jak to zrobić, krok po kroku"
  },
  {
   "q": "Kliknąłeś i podałeś kartę. Gdzie dzwonisz w pierwszej kolejności?",
   "o": [
    "Do banku, na numer z karty lub aplikacji",
    "Najpierw na 8080",
    "Na numer podany w tym SMS-ie"
   ],
   "a": 0,
   "why": "Najpierw bank, na numer z karty albo z aplikacji, nigdy z SMS-a. Szybka blokada karty i dostępu robi największą różnicę.",
   "ref": "Co to jest 8080?"
  }
 ],
 "na-wnuczka-ai": [
  {
   "q": "Dzwoni „wnuczka” z nieznanego numeru i prosi o pilny przelew. Co robisz?",
   "o": [
    "Oddzwaniam na numer, z którego dzwoniła",
    "Pytam o szczegóły wypadku, żeby sprawdzić historię",
    "Rozłączam się i dzwonię na jej numer zapisany od dawna"
   ],
   "a": 2,
   "why": "Rozłączasz się i dzwonisz sam na numer, który znasz od lat. Oddzwonienie na numer z połączenia może trafić znowu do oszusta.",
   "ref": "Co zrobić, krok po kroku"
  },
  {
   "q": "Do czego służy rodzinne hasło?",
   "o": [
    "Do sprawdzenia, czy dzwoni naprawdę ktoś bliski",
    "Do logowania w bankowości całej rodziny",
    "Do odblokowania telefonu dziadków"
   ],
   "a": 0,
   "why": "To słowo albo pytanie, które zna tylko rodzina. Kto dzwoni w „nagłej sprawie” i go nie zna, nie jest Waszym bliskim, nawet jeśli głos się zgadza.",
   "ref": "Co zrobić, krok po kroku"
  },
  {
   "q": "Czy policjant może przyjechać do domu odebrać gotówkę „do zabezpieczenia”?",
   "o": [
    "Tak, jeśli wcześniej dzwonił ktoś z rodziny",
    "Tak, jeśli pokaże legitymację",
    "Nie, policja nie odbiera pieniędzy w domach"
   ],
   "a": 2,
   "why": "Policja nigdy nie odbiera pieniędzy od obywateli. Kto po nie przyjeżdża, jest częścią oszustwa.",
   "ref": "Co zrobić, krok po kroku"
  }
 ],
 "bank-dzial-bezpieczenstwa": [
  {
   "q": "Na ekranie wyświetla się prawdziwy numer infolinii banku. Czy to dowód, że dzwoni bank?",
   "o": [
    "Tak, jeśli to numer stacjonarny",
    "Nie, numer na ekranie da się podrobić (spoofing)",
    "Tak, numeru nie da się podrobić"
   ],
   "a": 1,
   "why": "Oszuści potrafią wyświetlić dowolny numer. Sam numer na ekranie niczego nie dowodzi.",
   "ref": "Numer na ekranie można podrobić"
  },
  {
   "q": "„Konsultant” prosi o kod BLIK, żeby anulować podejrzaną transakcję. Co to znaczy?",
   "o": [
    "Kod z SMS-a lub BLIK zawsze coś zatwierdza, więc to oszustwo",
    "To normalna procedura banku",
    "Trzeba podać kod tylko, jeśli kwota jest duża"
   ],
   "a": 0,
   "why": "Kod z SMS-a ani BLIK niczego nie anulują. Zawsze coś zatwierdzają, np. przelew albo wypłatę.",
   "ref": "Trzy zdania, po których to na pewno oszust"
  },
  {
   "q": "Na czym polega „zasada jednej sekundy”?",
   "o": [
    "Prosisz konsultanta, żeby oddzwonił za chwilę",
    "Rozłączasz się i sam dzwonisz na numer z karty lub z aplikacji",
    "Odpowiadasz na pytania w ciągu sekundy, żeby nie stracić połączenia"
   ],
   "a": 1,
   "why": "Gdy pada prośba o instalację, przelew albo kod, rozłączasz się i dzwonisz sam. Jeśli coś się dzieje naprawdę, bank to potwierdzi.",
   "ref": "Trzy zdania, po których to na pewno oszust"
  }
 ],
 "zastrzez-pesel": [
  {
   "q": "Co się dzieje, gdy ktoś spróbuje wziąć kredyt na zastrzeżony PESEL?",
   "o": [
    "Bank musi sprawdzić rejestr i nie zawrze umowy",
    "Nic, zastrzeżenie dotyczy tylko kart SIM",
    "Kredyt jest udzielany, ale z wyższym oprocentowaniem"
   ],
   "a": 0,
   "why": "Banki, firmy pożyczkowe, notariusze i operatorzy muszą sprawdzić zastrzeżenie. Jeśli zawrą umowę mimo to, odpowiadają za szkodę.",
   "ref": "Co daje zastrzeżenie"
  },
  {
   "q": "Sam bierzesz kredyt. Co z zastrzeżeniem?",
   "o": [
    "Cofasz je w mObywatelu, nawet tylko na wybrany czas",
    "Nie da się, zastrzeżenie jest na stałe",
    "Musisz iść do urzędu i wypełnić wniosek"
   ],
   "a": 0,
   "why": "W tej samej usłudze cofniesz zastrzeżenie od razu albo na wybrany czas, np. tydzień. Potem blokada wraca sama.",
   "ref": "Jak to zrobić w aplikacji"
  },
  {
   "q": "Przed czym zastrzeżony PESEL NIE chroni?",
   "o": [
    "Przed umową z operatorem na Twoje dane",
    "Przed oszustem, który ma dostęp do Twojego konta bankowego",
    "Przed kredytem na Twoje dane"
   ],
   "a": 1,
   "why": "Zastrzeżenie blokuje nowe umowy, ale nie zatrzyma kogoś, kto już ma dostęp do Twojego banku albo poczty. Dlatego łączymy je z weryfikacją dwuetapową.",
   "ref": "Na co uważać"
  }
 ],
 "doplata-do-paczki": [
  {
   "q": "Po co oszustowi „dopłata 1,99 zł”?",
   "o": [
    "To prawdziwa opłata celna",
    "Zbiera drobne kwoty od wielu osób",
    "Chce danych karty albo logowania do banku"
   ],
   "a": 2,
   "why": "Kwota jest bez znaczenia. Na fałszywej stronie wpisujesz kartę albo logujesz się do banku i to jest cel.",
   "ref": "Po co im 1,99 zł?"
  },
  {
   "q": "Która strona należy do InPostu?",
   "o": [
    "inpost-doplata.info",
    "inpost.pl-paczka.top",
    "inpost.pl"
   ],
   "a": 2,
   "why": "Liczy się to, co stoi tuż przed końcówką. inpost.pl-paczka.top to strona pl-paczka.top, a inpost-doplata.info to zupełnie inna domena.",
   "ref": "Test 10 sekund"
  },
  {
   "q": "Jak najpewniej sprawdzić, czy paczka ma dopłatę?",
   "o": [
    "W aplikacji kuriera albo na stronie wpisanej samodzielnie",
    "Odpisując na SMS-a z pytaniem",
    "Klikając link, ale nie podając karty"
   ],
   "a": 0,
   "why": "Prawdziwą dopłatę zobaczysz w aplikacji kuriera albo na stronie, którą sam wpiszesz.",
   "ref": "Test 10 sekund"
  }
 ],
 "weryfikacja-dwuetapowa": [
  {
   "q": "Co daje weryfikacja dwuetapowa, gdy ktoś zna Twoje hasło?",
   "o": [
    "Konto zostaje od razu zablokowane",
    "Złodziej utknie na drugim kroku bez Twojego telefonu lub klucza",
    "Nic, hasło wystarczy do logowania"
   ],
   "a": 1,
   "why": "Przy logowaniu z nowego urządzenia serwis prosi o drugi dowód. Bez niego samo hasło nie wystarczy.",
   "ref": "Jak to działa"
  },
  {
   "q": "Która metoda drugiego kroku jest najsłabsza?",
   "o": [
    "Aplikacja uwierzytelniająca",
    "Klucz dostępu (passkey)",
    "Kod SMS"
   ],
   "a": 2,
   "why": "SMS jest lepszy niż nic, ale da się go przechwycić, np. przy podmianie karty SIM. Aplikacja i klucz dostępu są mocniejsze.",
   "ref": "Bank"
  },
  {
   "q": "Po co zapisywać kody zapasowe?",
   "o": [
    "Żeby podać je konsultantowi przez telefon",
    "Żeby odzyskać konto po zgubieniu telefonu",
    "Żeby logować się bez hasła"
   ],
   "a": 1,
   "why": "Zgubiony telefon bez kodów zapasowych może oznaczać utratę konta. Kody wydrukuj albo zapisz w menedżerze haseł.",
   "ref": "Kody zapasowe"
  }
 ],
 "menedzer-hasel": [
  {
   "q": "Ile haseł musisz pamiętać, korzystając z menedżera haseł?",
   "o": [
    "Żadnego",
    "Jedno, hasło główne",
    "Wszystkie, menedżer tylko je podpowiada"
   ],
   "a": 1,
   "why": "Menedżer pamięta wszystkie hasła, a Ty tylko jedno hasło główne.",
   "ref": "Jak to działa"
  },
  {
   "q": "Dlaczego menedżer haseł chroni też przed phishingiem?",
   "o": [
    "Bo blokuje SMS-y od oszustów",
    "Bo nie wpisze hasła na stronie o innym adresie",
    "Bo szyfruje cały telefon"
   ],
   "a": 1,
   "why": "Menedżer dopasowuje hasło do adresu strony. Na fałszywej stronie banku adres się nie zgadza, więc nic nie wpisze.",
   "ref": "Jak to działa"
  },
  {
   "q": "Od których kont zacząć zmianę haseł?",
   "o": [
    "Od forów i sklepów, których dawno nie używasz",
    "Od poczty, banku i Facebooka",
    "Kolejność nie ma znaczenia"
   ],
   "a": 1,
   "why": "Najpierw najważniejsze konta: poczta, bank, Facebook. Pozostałe przy okazji logowania.",
   "ref": "Jak zacząć, krok po kroku"
  }
 ],
 "olx-vinted-link": [
  {
   "q": "Sprzedajesz. Kupujący przysyła link „do odbioru płatności”, który prosi o dane karty. Co to jest?",
   "o": [
    "Weryfikacja wymagana przez bank",
    "Normalny sposób wypłaty w serwisie",
    "Oszustwo: żeby dostać pieniądze, nie podajesz danych karty"
   ],
   "a": 2,
   "why": "Żeby dostać pieniądze, nigdy nie podajesz karty ani kodów. Pieniądze z transakcji zobaczysz w aplikacji serwisu, a nie na stronie z linku.",
   "ref": "Na czym polega"
  },
  {
   "q": "Który sygnał jest czerwoną flagą?",
   "o": [
    "Kupujący korzysta z przycisku zakupu w aplikacji",
    "Kupujący od razu chce przejść na WhatsAppa i „płaci” bez pytań",
    "Kupujący pyta o wymiary i stan rzeczy"
   ],
   "a": 1,
   "why": "Przejście na inny komunikator i błyskawiczna „płatność” bez pytań o rzecz to typowe flagi.",
   "ref": "Czerwone flagi"
  },
  {
   "q": "Gdzie najbezpieczniej rozmawiać z kupującym?",
   "o": [
    "W czacie serwisu",
    "SMS-em",
    "Na WhatsAppie, bo jest szyfrowany"
   ],
   "a": 0,
   "why": "Rozmawiaj w czacie serwisu i korzystaj z płatności i przesyłki w aplikacji albo z odbioru osobistego.",
   "ref": "Jak sprzedawać bezpiecznie"
  }
 ],
 "aktualizacje": [
  {
   "q": "Dlaczego zaległa aktualizacja jest ryzykowna?",
   "o": [
    "Bo aplikacje przestają działać",
    "Bo telefon szybciej się rozładowuje",
    "Po wydaniu łatki opis błędu jest publiczny i atakujący wiedzą, czego szukać"
   ],
   "a": 2,
   "why": "Kiedy łatka wychodzi, błąd staje się znany. Celem stają się telefony, które się nie zaktualizowały.",
   "ref": "Co jest w aktualizacji"
  },
  {
   "q": "Ostatnia poprawka zabezpieczeń w telefonie jest sprzed ponad roku. Co to może znaczyć?",
   "o": [
    "Że trzeba wymienić kartę SIM",
    "Że producent prawdopodobnie przestał wspierać model",
    "Że telefon jest wyjątkowo bezpieczny"
   ],
   "a": 1,
   "why": "Brak poprawek od ponad roku zwykle oznacza koniec wsparcia. Do banku lepiej używać nowszego urządzenia.",
   "ref": "Ustaw raz i zapomnij"
  },
  {
   "q": "Skąd instalować aplikacje?",
   "o": [
    "Tylko ze Sklepu Play albo App Store",
    "Z plików .apk przysłanych SMS-em",
    "Z dowolnej strony, jeśli ma kłódkę"
   ],
   "a": 0,
   "why": "Pliki .apk z SMS-ów i komunikatorów to jeden z głównych sposobów infekowania telefonów.",
   "ref": "A co z aplikacjami spoza sklepu?"
  }
 ],
 "darmowe-wifi": [
  {
   "q": "Strona logowania do Wi‑Fi w galerii prosi o hasło do Facebooka. Co robisz?",
   "o": [
    "Loguję się, bo to szybsze niż regulamin",
    "Podaję inne hasło niż zwykle",
    "Odłączam się od sieci"
   ],
   "a": 2,
   "why": "Prawdziwy hotspot co najwyżej prosi o akceptację regulaminu. Prośba o hasło do innego serwisu albo kartę to fałszywa sieć.",
   "ref": "Na co uważać"
  },
  {
   "q": "Co jest w porządku w publicznym Wi‑Fi?",
   "o": [
    "Kliknięcie „przejdź mimo to” przy ostrzeżeniu przeglądarki",
    "Logowanie w aplikacji banku, która szyfruje połączenie",
    "Podanie karty „do weryfikacji” na stronie sieci"
   ],
   "a": 1,
   "why": "Przeglądanie i aplikacje banku czy poczty są w porządku, bo szyfrują połączenie same.",
   "ref": "Co jest w porządku"
  },
  {
   "q": "Czy VPN ochroni Cię przed fałszywą stroną, na której sam wpiszesz hasło?",
   "o": [
    "Tak, VPN blokuje każdy phishing",
    "Nie, rozsądek jest ważniejszy niż aplikacja",
    "Tak, ale tylko na Androidzie"
   ],
   "a": 1,
   "why": "VPN szyfruje ruch, ale nie zatrzyma Cię przed wpisaniem hasła na fałszywej stronie.",
   "ref": "A VPN?"
  }
 ],
 "falszywe-inwestycje": [
  {
   "q": "Znany dziennikarz poleca inwestycję w reklamie na Facebooku. Co to prawie na pewno jest?",
   "o": [
    "Oszustwo, nawet jeśli twarz i głos się zgadzają",
    "Sprawdzona okazja",
    "Reklama licencjonowanego brokera"
   ],
   "a": 0,
   "why": "Znani ludzie nie polecają inwestycji w takich reklamach. Twarz i głos da się podrobić.",
   "ref": "Jak to działa"
  },
  {
   "q": "Gdzie sprawdzisz, czy wobec firmy są ostrzeżenia?",
   "o": [
    "Na liście ostrzeżeń publicznych KNF",
    "W rozmowie z opiekunem inwestycji",
    "W opiniach na stronie platformy"
   ],
   "a": 0,
   "why": "Na knf.gov.pl jest Lista ostrzeżeń publicznych KNF. Brak firmy w rejestrach nadzoru to czerwona flaga.",
   "ref": "Jak sprawdzić firmę"
  },
  {
   "q": "Żeby wypłacić „zyski”, trzeba zapłacić podatek lub prowizję. Co robisz?",
   "o": [
    "Biorę kredyt na opłatę",
    "Przestaję wpłacać i zgłaszam sprawę w banku i na policji",
    "Płacę, bo zyski są większe"
   ],
   "a": 1,
   "why": "Opłata za odblokowanie wypłaty to etap oszustwa. Pieniędzy nigdy nie zobaczysz, a każda wpłata to kolejna strata.",
   "ref": "Już wpłaciłeś?"
  }
 ],
 "whatsapp-kod": [
  {
   "q": "Znajomy pisze, że wysłał Ci kod przez pomyłkę i prosi o przepisanie. Co to jest?",
   "o": [
    "Zwykła pomyłka",
    "Kod do weryfikacji znajomego",
    "Prośba o kod do przejęcia Twojego WhatsAppa"
   ],
   "a": 2,
   "why": "Ktoś loguje się na Twój numer. Kod, który dostałeś, to klucz do Twojego konta.",
   "ref": "Co się dzieje"
  },
  {
   "q": "Co blokuje przejęcie konta, nawet gdy ktoś zdobędzie kod z SMS-a?",
   "o": [
    "Weryfikacja dwuetapowa z sześciocyfrowym PIN-em",
    "Wylogowanie z komputera",
    "Ukrycie zdjęcia profilowego"
   ],
   "a": 0,
   "why": "PIN w weryfikacji dwuetapowej WhatsAppa jest wymagany przy logowaniu na nowym telefonie.",
   "ref": "Włącz drugi zamek"
  },
  {
   "q": "Dostałeś kod, o który nie prosiłeś. Co robisz?",
   "o": [
    "Ignoruję go, konto jest nadal bezpieczne",
    "Usuwam WhatsAppa",
    "Przekazuję go nadawcy, żeby się nie zablokował"
   ],
   "a": 0,
   "why": "Nieprzekazany kod nic nie daje oszustowi. Wystarczy go zignorować.",
   "ref": "Zasady"
  }
 ],
 "blik-od-znajomego": [
  {
   "q": "Ile czasu ważny jest kod BLIK?",
   "o": [
    "24 godziny",
    "2 minuty",
    "Do pierwszego użycia, bez limitu"
   ],
   "a": 1,
   "why": "Kod BLIK jest ważny 2 minuty, dlatego oszust naciska, żeby było szybko.",
   "ref": "Dlaczego to działa"
  },
  {
   "q": "Jak sprawdzić, czy to naprawdę znajomy prosi o BLIK?",
   "o": [
    "Zapytać o wspólnego znajomego na czacie",
    "Poprosić o wiadomość głosową na Messengerze",
    "Zadzwonić na numer, który już masz"
   ],
   "a": 2,
   "why": "Wiadomość głosowa też może pochodzić od oszusta. Dzwonisz na numer, który już znasz.",
   "ref": "Co zrobić"
  },
  {
   "q": "Znajomy naprawdę potrzebuje pomocy. Jak bezpiecznie przekazać pieniądze?",
   "o": [
    "Gotówka u kuriera",
    "Przelew na jego numer konta lub telefonu",
    "Kod BLIK w wiadomości"
   ],
   "a": 1,
   "why": "Przy przelewie na jego konto lub numer wiesz, do kogo trafiają pieniądze.",
   "ref": "Co zrobić"
  }
 ],
 "falszywe-sklepy": [
  {
   "q": "Gdzie sprawdzisz NIP sklepu?",
   "o": [
    "W regulaminie sklepu",
    "W opiniach na stronie sklepu",
    "W CEIDG albo KRS"
   ],
   "a": 2,
   "why": "Prawdziwy sklep ma pełne dane firmy i NIP, który sprawdzisz w CEIDG albo KRS.",
   "ref": "Pięć rzeczy do sprawdzenia"
  },
  {
   "q": "Dlaczego warto płacić kartą w nieznanym sklepie?",
   "o": [
    "Bo sklep nie widzi Twoich danych",
    "Bo karta jest szybsza",
    "Bo możesz złożyć reklamację w banku (chargeback), gdy towar nie przyjdzie"
   ],
   "a": 2,
   "why": "Przy karcie możesz złożyć chargeback. Przy przelewie i BLIK-u odzyskanie pieniędzy jest dużo trudniejsze.",
   "ref": "Pięć rzeczy do sprawdzenia"
  },
  {
   "q": "Które opinie warto czytać?",
   "o": [
    "Opinie poza sklepem, np. w wyszukiwarce z dopiskiem „opinie”",
    "Wystarczy liczba gwiazdek na stronie",
    "Te na stronie sklepu"
   ],
   "a": 0,
   "why": "Opinie na samej stronie sklepu niczego nie dowodzą. Szukaj ich gdzie indziej.",
   "ref": "Pięć rzeczy do sprawdzenia"
  }
 ],
 "kody-qr": [
  {
   "q": "Na parkometrze jest krzywo naklejony kod QR. Co robisz?",
   "o": [
    "Płacę w parkometrze albo oficjalnej aplikacji",
    "Skanuję i płacę BLIK-iem zamiast kartą",
    "Skanuję, bo tak szybciej"
   ],
   "a": 0,
   "why": "Naklejka na wierzchu to sygnał ostrzegawczy. Do parkowania nie potrzebujesz kodu z naklejki.",
   "ref": "Zanim zeskanujesz"
  },
  {
   "q": "Dlaczego oszuści wstawiają kody QR do maili?",
   "o": [
    "Bo kody są ładniejsze niż linki",
    "Bo kod omija filtry, a telefon jest gorzej chroniony niż firmowy komputer",
    "Bo kody QR nie mogą prowadzić do fałszywych stron"
   ],
   "a": 1,
   "why": "Kod QR zastępuje link, żeby ominąć filtry. Traktuj go dokładnie jak podejrzany link.",
   "ref": "Jak wygląda atak"
  },
  {
   "q": "Co sprawdzić przed otwarciem strony z kodu QR?",
   "o": [
    "Adres, który pokazuje telefon",
    "Czy kod jest duży",
    "Kolor kodu"
   ],
   "a": 0,
   "why": "Telefon pokazuje adres przed otwarciem. Jeśli nie należy do miasta albo znanej firmy, nie otwieraj.",
   "ref": "Zanim zeskanujesz"
  }
 ],
 "pierwszy-telefon-dziecka": [
  {
   "q": "Co jest najważniejsze, według porady, i nie jest w ustawieniach?",
   "o": [
    "Najdroższy model telefonu",
    "Umowa, że dziecko może przyjść z dziwną wiadomością i nie straci telefonu",
    "Zakaz korzystania z internetu"
   ],
   "a": 1,
   "why": "Dzieci najczęściej milczą ze strachu przed karą. Umowa bez kar sprawia, że powiedzą o problemie.",
   "ref": "Ustawienia na start"
  },
  {
   "q": "Które narzędzie służy do kontroli rodzicielskiej na Androidzie?",
   "o": [
    "Google Family Link",
    "Play Games",
    "Google Translate"
   ],
   "a": 0,
   "why": "Na Androidzie to Google Family Link, na iPhonie Czas przed ekranem w Chmurze rodzinnej.",
   "ref": "Ustawienia na start"
  },
  {
   "q": "Ktoś prosi dziecko o zachowanie rozmowy w tajemnicy przed rodzicami. Co powinno zrobić?",
   "o": [
    "Zachować tajemnicę, skoro obiecało",
    "Właśnie wtedy powiedzieć rodzicom",
    "Usunąć aplikację"
   ],
   "a": 1,
   "why": "Prośba o tajemnicę przed rodzicami to powód, żeby im powiedzieć.",
   "ref": "O czym porozmawiać"
  }
 ],
 "oszustwa-w-grach": [
  {
   "q": "„Admin serwera” prosi o hasło, żeby sprawdzić konto. Co to znaczy?",
   "o": [
    "Normalna procedura",
    "Oszustwo, prawdziwa administracja nie potrzebuje hasła",
    "Trzeba podać hasło, ale bez e-maila"
   ],
   "a": 1,
   "why": "Prawdziwa administracja nigdy nie potrzebuje Twojego hasła.",
   "ref": "Najczęstsze schematy"
  },
  {
   "q": "Co może zrobić plik „potestuj moją grę” od obcej osoby?",
   "o": [
    "Ukraść hasła z przeglądarki i sesję z Discorda",
    "Nic, gry są bezpieczne",
    "Tylko zająć miejsce na dysku"
   ],
   "a": 0,
   "why": "Takie pliki często kradną hasła z przeglądarki i sesje z Discorda.",
   "ref": "Najczęstsze schematy"
  },
  {
   "q": "Jak wymieniać przedmioty w grze?",
   "o": [
    "Przez prywatny czat i przelew",
    "Przez stronę z linku od kolegi",
    "Tylko w oficjalnym systemie wymiany"
   ],
   "a": 2,
   "why": "Wymiana poza oficjalnym systemem to częsty sposób na oszustwo.",
   "ref": "Jak się chronić"
  }
 ],
 "falszywe-wezwanie-policji": [
  {
   "q": "Jak przychodzą prawdziwe wezwania od policji lub prokuratury?",
   "o": [
    "Listem poleconym albo przez e-Doręczenia",
    "Mailem z Gmaila z PDF-em",
    "SMS-em z linkiem"
   ],
   "a": 0,
   "why": "Oficjalne wezwania przychodzą listem poleconym albo przez system e-Doręczeń, a nie z prywatnego maila.",
   "ref": "Jak to działa naprawdę"
  },
  {
   "q": "Mail proponuje „ugodę” i umorzenie sprawy za przelew. Co robisz?",
   "o": [
    "Nie odpisuję i nie płacę, zgłaszam na incydent.cert.pl",
    "Płacę, żeby sprawa zniknęła",
    "Odpisuję, że jestem niewinny"
   ],
   "a": 0,
   "why": "Policja nie umarza postępowań za przelew. Każda odpowiedź tylko potwierdza oszustom, że adres jest aktywny.",
   "ref": "Jak to działa naprawdę"
  },
  {
   "q": "Chcesz się upewnić, czy sprawa jest prawdziwa. Gdzie dzwonisz?",
   "o": [
    "Do nadawcy przez komunikator",
    "Na najbliższą komendę policji",
    "Na numer z maila"
   ],
   "a": 1,
   "why": "Dzwonisz na komendę, którą sam znajdziesz, a nie na numer z maila.",
   "ref": "Co zrobić"
  }
 ],
 "praca-za-lajki": [
  {
   "q": "Na czym polega „zarabianie za lajki”?",
   "o": [
    "Najpierw małe wypłaty, potem wpłaty za „zadania premium”",
    "Na jednorazowej ankiecie",
    "Na prawdziwej pracy w marketingu"
   ],
   "a": 0,
   "why": "Najpierw płacą Tobie, małe kwoty. Potem Ty płacisz, żeby odblokować „lepsze zadania”.",
   "ref": "Schemat krok po kroku"
  },
  {
   "q": "Jaka jest najprostsza zasada?",
   "o": [
    "Jeśli grupa jest duża, to jest bezpiecznie",
    "Jeśli żeby zarabiać, musisz najpierw zapłacić, to nie jest praca",
    "Jeśli wypłata przyszła raz, to jest uczciwie"
   ],
   "a": 1,
   "why": "Prawdziwy pracodawca nie każe wpłacać pieniędzy ani kupować kryptowalut.",
   "ref": "Schemat krok po kroku"
  },
  {
   "q": "„Rekruter” prosi o założenie konta w nowym banku. Czym to grozi?",
   "o": [
    "Tylko dodatkową opłatą za konto",
    "Twoje konto może posłużyć do przepuszczania cudzych pieniędzy",
    "Niczym, to standard"
   ],
   "a": 1,
   "why": "Za przepuszczane przez konto cudze pieniądze odpowiada jego właściciel.",
   "ref": "Inne sygnały ostrzegawcze"
  }
 ],
 "zgubiony-telefon": [
  {
   "q": "Dlaczego tak szybko zmienia się hasło do poczty po zgubieniu telefonu?",
   "o": [
    "Bo poczta zajmuje dużo miejsca",
    "Bo operator tego wymaga",
    "Bo poczta to klucz do resetu reszty kont"
   ],
   "a": 2,
   "why": "Przez pocztę resetuje się hasła do innych kont. Zmieniasz ją z innego urządzenia i wylogowujesz sesje.",
   "ref": "Pierwsza godzina"
  },
  {
   "q": "Po co blokować kartę SIM u operatora?",
   "o": [
    "Żeby telefon przestał się ładować",
    "Żeby odzyskać numer IMEI",
    "Żeby nikt nie odbierał Twoich kodów SMS"
   ],
   "a": 2,
   "why": "Kto ma Twoją kartę SIM, odbiera kody z SMS-ów.",
   "ref": "Pierwsza godzina"
  },
  {
   "q": "Jak sprawdzić numer IMEI?",
   "o": [
    "Zadzwonić na 8080",
    "Wysłać SMS do banku",
    "Wpisać *#06# w telefonie"
   ],
   "a": 2,
   "why": "Kod *#06# wyświetla IMEI. Zapisz go w bezpiecznym miejscu, przyda się przy zgłoszeniu kradzieży.",
   "ref": "Zrób to dziś"
  }
 ],
 "kopia-zapasowa": [
  {
   "q": "Co oznacza zasada 3-2-1?",
   "o": [
    "Kopia co 3 dni, 2 razy w tygodniu, 1 raz w miesiącu",
    "3 hasła, 2 telefony, 1 komputer",
    "3 kopie, na 2 nośnikach, 1 poza domem"
   ],
   "a": 2,
   "why": "Trzy kopie na dwóch różnych nośnikach, z czego jedna poza domem, np. w chmurze.",
   "ref": "Zasada 3-2-1"
  },
  {
   "q": "Jak kopia chroni przed oprogramowaniem żądającym okupu?",
   "o": [
    "Kopia usuwa wirusy",
    "Nie chroni wcale",
    "Kopia na odłączonym dysku pozwala nie płacić"
   ],
   "a": 2,
   "why": "Jeśli pliki zostaną zaszyfrowane, odtwarzasz je z odłączonego dysku zamiast płacić.",
   "ref": "Zasada 3-2-1"
  },
  {
   "q": "Jak sprawdzić, czy kopia działa?",
   "o": [
    "Otworzyć zdjęcia w przeglądarce, np. na photos.google.com, i zobaczyć najnowsze",
    "Nie trzeba sprawdzać",
    "Zobaczyć, czy telefon jest naładowany"
   ],
   "a": 0,
   "why": "Kopia, której nikt nie sprawdził, to tylko nadzieja.",
   "ref": "Sprawdź, czy działa"
  }
 ],
 "oszustwo-na-milosc": [
  {
   "q": "Osoba poznana w sieci nigdy nie może porozmawiać przez kamerę. Co to jest?",
   "o": [
    "Dowód, że jest nieśmiała",
    "Normalne przy pracy na misji",
    "Sygnał ostrzegawczy"
   ],
   "a": 2,
   "why": "Ciągłe wymówki przy wideo to jeden z głównych sygnałów oszustwa „na miłość”.",
   "ref": "Jak sprawdzić"
  },
  {
   "q": "Jak sprawdzić, czy zdjęcia należą do tej osoby?",
   "o": [
    "Patrząc na jakość zdjęć",
    "Pytając ją o to",
    "Wyszukiwaniem obrazem w Google"
   ],
   "a": 2,
   "why": "Zdjęcia często należą do kogoś zupełnie innego. Wyszukiwanie obrazem to pokazuje.",
   "ref": "Jak sprawdzić"
  },
  {
   "q": "Mama mówi, że kogoś poznała i wspomina o przelewach. Co robisz?",
   "o": [
    "Wyśmiewam ją, żeby przejrzała na oczy",
    "Nic, to jej sprawa",
    "Rozmawiam spokojnie i sprawdzamy zdjęcia razem"
   ],
   "a": 2,
   "why": "Wstyd sprawia, że ludzie ukrywają kolejne przelewy. Spokojna rozmowa działa lepiej.",
   "ref": "Dla rodziny"
  }
 ],
 "czy-to-ty-na-filmie": [
  {
   "q": "Po kliknięciu w link z Messengera pojawia się logowanie do Facebooka. Co robisz?",
   "o": [
    "Loguję się, żeby obejrzeć film",
    "Loguję się, ale innym hasłem",
    "Zamykam stronę, przecież już jestem zalogowany"
   ],
   "a": 2,
   "why": "Jesteś już zalogowany, więc prośba o logowanie oznacza fałszywą stronę.",
   "ref": "Jak się nie dać"
  },
  {
   "q": "Skąd przyszła wiadomość od znajomego?",
   "o": [
    "Jego konto jest przejęte i oszust wysyła link automatycznie",
    "Facebook wysyła takie przypomnienia",
    "Znajomy naprawdę Cię nagrał"
   ],
   "a": 0,
   "why": "Oszust automatycznie wysyła link wszystkim kontaktom przejętego konta.",
   "ref": "Co się dzieje"
  },
  {
   "q": "Już się zalogowałeś. Co sprawdzasz w Centrum kont?",
   "o": [
    "Listę polubień",
    "Zdjęcie profilowe",
    "Miejsca, w których jesteś zalogowany, i wylogowujesz nieznane"
   ],
   "a": 2,
   "why": "Zmieniasz hasło i wylogowujesz nieznane urządzenia w Miejscach, w których jesteś zalogowany.",
   "ref": "Już się zalogowałeś?"
  }
 ],
 "wynajem-wakacje": [
  {
   "q": "Właściciel prosi o przejście na WhatsAppa i przelew poza serwisem. Co to znaczy?",
   "o": [
    "Że chce uniknąć prowizji, to normalne",
    "Czerwona flaga: serwis nie chroni płatności poza nim",
    "Że oferta jest wyjątkowa"
   ],
   "a": 1,
   "why": "Płać tylko w serwisie, w którym znalazłeś ofertę. Płatności poza nim nie są chronione.",
   "ref": "Czerwone flagi"
  },
  {
   "q": "Jak sprawdzić zdjęcia apartamentu?",
   "o": [
    "Pytając właściciela o więcej zdjęć",
    "Wyszukiwaniem zdjęć w Google Grafika",
    "Po rozdzielczości zdjęć"
   ],
   "a": 1,
   "why": "Te same zdjęcia w innym mieście albo na stronie hotelu to oszustwo.",
   "ref": "Jak sprawdzić ofertę"
  },
  {
   "q": "Link do płatności „od Bookingu” na WhatsAppie to:",
   "o": [
    "Standard przy rezerwacjach last minute",
    "Wygodny sposób płatności",
    "Prawie zawsze oszustwo"
   ],
   "a": 2,
   "why": "Płatności za rezerwację widzisz w aplikacji serwisu, a nie w linku od rzekomego właściciela.",
   "ref": "Jak sprawdzić ofertę"
  }
 ],
 "zdalny-pulpit": [
  {
   "q": "„Pracownik banku” prosi o instalację AnyDeska, żeby zabezpieczyć konto. Co to jest?",
   "o": [
    "Wymóg nowych przepisów",
    "Standardowa pomoc techniczna banku",
    "Oszustwo, bank nigdy o to nie prosi"
   ],
   "a": 2,
   "why": "Żaden bank, urzędnik ani policjant nie prosi o aplikację do zdalnego pulpitu.",
   "ref": "Jak to wygląda"
  },
  {
   "q": "Co widzi oszust po połączeniu przez taką aplikację?",
   "o": [
    "Nic, dopóki nie podasz hasła",
    "Twój ekran, kody z SMS-ów i powiadomienia banku",
    "Tylko Twoje imię"
   ],
   "a": 1,
   "why": "Od chwili połączenia widzi wszystko na ekranie, a na komputerze może nawet sterować myszką.",
   "ref": "Jak to wygląda"
  },
  {
   "q": "Aplikacja jest już zainstalowana. Co robisz?",
   "o": [
    "Zmieniam tylko tapetę",
    "Zostawiam ją na przyszłość",
    "Odinstalowuję i dzwonię do banku jeszcze tego dnia"
   ],
   "a": 2,
   "why": "Odinstaluj aplikację i zgłoś sprawę w banku jak najszybciej.",
   "ref": "Co zrobić"
  }
 ],
 "mandat-autostrada": [
  {
   "q": "Co jest celem fałszywej strony o „nieopłaconym przejeździe”?",
   "o": [
    "Pobranie kilku złotych",
    "Numer rejestracyjny do bazy",
    "Dane karty, z której schodzą potem większe kwoty"
   ],
   "a": 2,
   "why": "Strona „sprawdza” rejestrację, a potem prosi o kartę. Z karty schodzą dużo większe kwoty niż ta w SMS-ie.",
   "ref": "Jak działa oszustwo"
  },
  {
   "q": "Czy zarządca A4 Katowice–Kraków wysyła SMS-y o mandatach?",
   "o": [
    "Tak, z linkiem do płatności",
    "Tylko w weekendy",
    "Nie, podkreśla, że takich SMS-ów nie wysyła"
   ],
   "a": 2,
   "why": "Zarządca odcinka A4 informuje, że nie wysyła SMS-ów o mandatach, a e-TOLL zaleca ignorowanie takich wiadomości.",
   "ref": "Jak działa oszustwo"
  },
  {
   "q": "Podałeś dane karty na takiej stronie. Co robisz?",
   "o": [
    "Blokuję kartę w aplikacji lub pod 828 828 828",
    "Czekam na wyciąg",
    "Odpisuję na SMS-a z reklamacją"
   ],
   "a": 0,
   "why": "Kartę blokujesz od razu: w aplikacji banku albo pod numerem 828 828 828.",
   "ref": "Co zrobić"
  }
 ],
 "zwrot-podatku": [
  {
   "q": "Jak trafia do Ciebie zwrot nadpłaty podatku?",
   "o": [
    "Po kliknięciu linku z SMS-a",
    "Automatycznie na rachunek z zeznania lub e-Urzędu Skarbowego",
    "Po podaniu danych karty"
   ],
   "a": 1,
   "why": "Zwrotu nie trzeba odbierać ani potwierdzać przez link.",
   "ref": "Jak jest naprawdę"
  },
  {
   "q": "Czy KAS wysyła SMS-y z prośbą o potwierdzenie konta do zwrotu?",
   "o": [
    "Tak, w sezonie PIT",
    "Nie",
    "Tylko przy zwrotach powyżej 1000 zł"
   ],
   "a": 1,
   "why": "Krajowa Administracja Skarbowa nie wysyła SMS-ów ani maili z prośbą o potwierdzenie rachunku.",
   "ref": "Jak jest naprawdę"
  },
  {
   "q": "Gdzie wyjaśnisz wątpliwości co do wiadomości „z urzędu”?",
   "o": [
    "Pod numerem z wiadomości",
    "Odpisując na maila",
    "Na infolinii KAS: 22 330 03 30"
   ],
   "a": 2,
   "why": "Wątpliwości wyjaśnisz na infolinii KAS albo logując się do e-Urzędu Skarbowego wpisanym ręcznie adresem.",
   "ref": "Jak jest naprawdę"
  }
 ],
 "telefon-od-policjanta": [
  {
   "q": "Czy policja może poprosić o przelew na „bezpieczne konto”?",
   "o": [
    "Nie, nigdy",
    "Tylko przez prokuratora",
    "Tak, przy tajnej akcji"
   ],
   "a": 0,
   "why": "Policja nigdy nie każe przelewać ani wypłacać pieniędzy.",
   "ref": "Co zrobić"
  },
  {
   "q": "Dlaczego warto odczekać albo użyć innego telefonu przed telefonem na 112?",
   "o": [
    "Bo oszuści potrafią udawać, że połączenie trwa dalej",
    "Bo 112 nie działa od razu",
    "Bo tak każe operator"
   ],
   "a": 0,
   "why": "Oszust może nie rozłączyć się po swojej stronie i „odebrać” Twój telefon na 112.",
   "ref": "Co zrobić"
  },
  {
   "q": "„Policjant” prosi, żeby nie mówić nic rodzinie ani w banku. Co to oznacza?",
   "o": [
    "Sygnał oszustwa",
    "Że sprawa jest naprawdę poważna",
    "Że trzeba współpracować"
   ],
   "a": 0,
   "why": "Prośba o tajemnicę i kłamstwo w banku to typowe sygnały ostrzegawcze.",
   "ref": "Sygnały ostrzegawcze"
  }
 ],
 "konto-slup": [
  {
   "q": "Co się zwykle dzieje z kontem, przez które przechodzą cudze pieniądze?",
   "o": [
    "Zostaje zablokowane, a sprawa trafia na policję",
    "Nic, to legalne",
    "Bank daje bonus"
   ],
   "a": 0,
   "why": "Bank widzi, że pieniądze przyszły i od razu wyszły. Konto jest blokowane, a właściciel może usłyszeć zarzuty.",
   "ref": "Dlaczego to niebezpieczne"
  },
  {
   "q": "Ktoś przelał Ci pieniądze „przez pomyłkę” i prosi o zwrot na inne konto. Co robisz?",
   "o": [
    "Odsyłam na wskazane konto",
    "Zgłaszam sprawę w banku",
    "Wypłacam i oddaję gotówką"
   ],
   "a": 1,
   "why": "Nie odsyłaj na inne konto. Bank może zwrócić środki nadawcy tą samą drogą.",
   "ref": "Co zrobić"
  },
  {
   "q": "Kto zwykle pierwszy trafia do śledczych?",
   "o": [
    "Właściciel konta, przez które szły pieniądze",
    "Organizator oszustwa",
    "Bank"
   ],
   "a": 0,
   "why": "Organizator zostaje anonimowy, a właściciel rachunku jest z imienia i nazwiska.",
   "ref": "Dlaczego to niebezpieczne"
  }
 ],
 "zaglosuj-na-mnie": [
  {
   "q": "Co naprawdę robisz, wpisując kod z SMS-a na stronie „głosowania”?",
   "o": [
    "Oddajesz głos",
    "Potwierdzasz pełnoletność",
    "Oddajesz konto"
   ],
   "a": 2,
   "why": "Kod z SMS-a to kod do Twojego konta. Wpisując go, oddajesz konto.",
   "ref": "Jak to działa"
  },
  {
   "q": "Dlaczego znajomy wysłał Ci taki link?",
   "o": [
    "Bo Facebook to podpowiedział",
    "Bo jego konto najczęściej już zostało przejęte",
    "Bo naprawdę zbiera głosy"
   ],
   "a": 1,
   "why": "Wiadomość zwykle wysyła oszust z przejętego konta znajomego.",
   "ref": "Jak to działa"
  },
  {
   "q": "Jakie zabezpieczenie warto włączyć?",
   "o": [
    "Weryfikację dwuetapową w aplikacji uwierzytelniającej",
    "Powiadomienia o urodzinach",
    "Tryb ciemny"
   ],
   "a": 0,
   "why": "Weryfikacja dwuetapowa w aplikacji uwierzytelniającej, nie tylko SMS-em.",
   "ref": "Co zrobić"
  }
 ],
 "aplikacja-apk": [
  {
   "q": "Które uprawnienie aplikacji z linku jest szczególnie niebezpieczne?",
   "o": [
    "Dostęp do latarki",
    "Ułatwienia dostępu",
    "Zmiana dzwonka"
   ],
   "a": 1,
   "why": "Ułatwienia dostępu pozwalają czytać ekran i klikać za Ciebie.",
   "ref": "Jak to rozpoznać"
  },
  {
   "q": "Co warto mieć wyłączone w Androidzie?",
   "o": [
    "Aktualizacje",
    "Play Protect",
    "Instalowanie nieznanych aplikacji"
   ],
   "a": 2,
   "why": "Instalowanie nieznanych aplikacji powinno być wyłączone, a Play Protect włączony.",
   "ref": "Ustawienia, które warto zostawić wyłączone"
  },
  {
   "q": "Czy kurier może wymagać aplikacji z linku w SMS-ie?",
   "o": [
    "Tak, przy paczkach z zagranicy",
    "Tylko przy dopłatach",
    "Nie"
   ],
   "a": 2,
   "why": "Ani kurier, ani bank nie wymaga instalowania aplikacji z linku w SMS-ie.",
   "ref": "Ustawienia, które warto zostawić wyłączone"
  }
 ],
 "szantaz-mailowy": [
  {
   "q": "Skąd szantażysta zna Twoje hasło?",
   "o": [
    "Z kamerki w laptopie",
    "Od Twojego operatora",
    "Ze starego wycieku danych"
   ],
   "a": 2,
   "why": "Hasło pochodzi z dawnego wycieku jakiegoś serwisu. Nagrań nie ma.",
   "ref": "Dlaczego to nieprawda"
  },
  {
   "q": "Co zrobić z hasłem z maila?",
   "o": [
    "Nic, skoro jest stare",
    "Zmienić je wszędzie, gdzie nadal działa",
    "Wysłać szantażyście nowe"
   ],
   "a": 1,
   "why": "Jeśli to hasło nadal gdzieś działa, zmień je wszędzie, a od teraz używaj różnych haseł.",
   "ref": "Co zrobić z hasłem"
  },
  {
   "q": "Mail wygląda, jakby przyszedł z Twojego adresu. Czy to znaczy, że ktoś ma Twoją skrzynkę?",
   "o": [
    "Tak, na pewno",
    "Nie, nadawcę w e-mailu da się podrobić",
    "Tak, jeśli jest w folderze Spam"
   ],
   "a": 1,
   "why": "Adres nadawcy da się podrobić bez dostępu do skrzynki.",
   "ref": "Dlaczego to nieprawda"
  }
 ],
 "falszywa-pomoc-techniczna": [
  {
   "q": "Czy czerwony ekran z alarmem w przeglądarce oznacza, że komputer ma wirusa?",
   "o": [
    "Nie, to zwykła strona udająca komunikat systemu",
    "Tylko gdy słychać dźwięk",
    "Tak"
   ],
   "a": 0,
   "why": "To strona internetowa, często otwarta przez reklamę. Komputer nie jest zainfekowany.",
   "ref": "Co się naprawdę dzieje"
  },
  {
   "q": "Jak zamknąć stronę, która nie daje się zamknąć krzyżykiem?",
   "o": [
    "Zadzwonić pod numer z ekranu",
    "Ctrl+Shift+Esc i zakończyć przeglądarkę",
    "Kliknąć „Napraw”"
   ],
   "a": 1,
   "why": "Menedżer zadań zamknie przeglądarkę. Przy ponownym uruchomieniu nie przywracaj kart.",
   "ref": "Co zrobić"
  },
  {
   "q": "Gdzie zaczyna się prawdziwe zagrożenie?",
   "o": [
    "Przy zamknięciu przeglądarki",
    "Przy wyświetleniu strony",
    "Przy telefonie do „technika”"
   ],
   "a": 2,
   "why": "„Technik” prosi o zdalny dostęp i opłatę, często przez logowanie do banku.",
   "ref": "Co się naprawdę dzieje"
  }
 ],
 "zakupy-w-grach": [
  {
   "q": "Jak na iPhonie zablokować zakupy dziecka bez Twojej zgody?",
   "o": [
    "Wyłączenie Wi‑Fi",
    "Funkcja „Poproś o zakup” w Chmurze Rodzinnej",
    "Usunięcie App Store"
   ],
   "a": 1,
   "why": "„Poproś o zakup” sprawia, że każdy zakup wymaga zgody rodzica na jego telefonie.",
   "ref": "Trzy ustawienia na start"
  },
  {
   "q": "Dlaczego skrzynki z losowymi nagrodami są problematyczne?",
   "o": [
    "Działają podobnie do automatów i zachęcają do kolejnych zakupów",
    "Nie da się ich otworzyć",
    "Są zawsze darmowe"
   ],
   "a": 0,
   "why": "Nie wiesz, co wypadnie, więc kupujesz kolejną.",
   "ref": "Porozmawiaj o skrzynkach"
  },
  {
   "q": "Jakie rozwiązanie zamiast podpiętej karty proponuje porada?",
   "o": [
    "Kartę kredytową dziecka",
    "Kartę podarunkową na konkretną kwotę",
    "Zapisanie hasła dziecku"
   ],
   "a": 1,
   "why": "Gdy karta podarunkowa się skończy, zakupy się kończą.",
   "ref": "Lepsze rozwiązanie niż karta"
  }
 ],
 "zdjecia-dzieci": [
  {
   "q": "Co jest głównym ryzykiem przy zdjęciach dzieci w sieci?",
   "o": [
    "Suma szczegółów: imię, szkoła, miejsce, stałe godziny",
    "Jakość zdjęcia",
    "Samo zdjęcie"
   ],
   "a": 0,
   "why": "Z kilku postów obcy mogą wiedzieć, gdzie dziecko chodzi do szkoły i kiedy z niej wychodzi.",
   "ref": "5 pytań przed publikacją"
  },
  {
   "q": "Kiedy lepiej publikować zdjęcia z wyjazdu?",
   "o": [
    "Po powrocie z miejsca",
    "Na żywo, w trakcie",
    "Nigdy"
   ],
   "a": 0,
   "why": "Lepiej publikować po powrocie niż w trakcie.",
   "ref": "5 pytań przed publikacją"
  },
  {
   "q": "Jakie grono odbiorców ustawić dla zdjęć dzieci?",
   "o": [
    "Znajomi znajomych",
    "Znajomi albo wybrana lista",
    "Publiczne"
   ],
   "a": 1,
   "why": "Post publiczny widzi każdy. Ustaw znajomych albo wybraną listę.",
   "ref": "5 pytań przed publikacją"
  }
 ],
 "wygrales-nagrode": [
  {
   "q": "Co często kryje się drobnym drukiem w „konkursie”?",
   "o": [
    "Gwarancja producenta",
    "Subskrypcja odnawiana co miesiąc",
    "Regulamin loterii państwowej"
   ],
   "a": 1,
   "why": "Opłata „za wysyłkę” to sposób na kartę i comiesięczne obciążenia.",
   "ref": "Jak to rozpoznać"
  },
  {
   "q": "Jaka jest główna zasada?",
   "o": [
    "Licznik czasu oznacza uczciwy konkurs",
    "Mała opłata oznacza prawdziwą nagrodę",
    "Jeśli trzeba podać kartę, żeby coś wygrać, to nic nie wygrałeś"
   ],
   "a": 2,
   "why": "Prawdziwy organizator kontaktuje się sam i nie żąda płatności przez link.",
   "ref": "Co zrobić"
  },
  {
   "q": "Jak sprawdzić, czy konkurs sklepu istnieje?",
   "o": [
    "Klikając „odbierz”",
    "Na oficjalnym profilu sklepu",
    "W komentarzach pod reklamą"
   ],
   "a": 1,
   "why": "Oszuści używają logo znanych sklepów. Sprawdź oficjalny profil.",
   "ref": "Uwaga na podszywanie pod znane sklepy"
  }
 ],
 "router-w-domu": [
  {
   "q": "Które szyfrowanie Wi‑Fi wybrać?",
   "o": [
    "WEP",
    "WPA2 albo WPA3",
    "Bez hasła, za to z ukrytą nazwą"
   ],
   "a": 1,
   "why": "WPA2 albo WPA3 i hasło z co najmniej 12 znaków.",
   "ref": "4 ustawienia"
  },
  {
   "q": "Gdzie podłączyć sprzęty „smart”, jak żarówki czy odkurzacz?",
   "o": [
    "Kablem do telewizora",
    "Do głównej sieci z komputerami",
    "Do sieci dla gości"
   ],
   "a": 2,
   "why": "Sieć dla gości oddziela je od komputerów i telefonów.",
   "ref": "Sieć dla gości"
  },
  {
   "q": "Co zrobić z funkcją WPS, jeśli jej nie używasz?",
   "o": [
    "Zostawić włączoną",
    "Wyłączyć",
    "Zmienić na PIN 0000"
   ],
   "a": 1,
   "why": "Łączenie przyciskiem lub PIN-em warto wyłączyć, jeśli z niego nie korzystasz.",
   "ref": "4 ustawienia"
  }
 ],
 "zastrzez-karte": [
  {
   "q": "Do czego służy numer 828 828 828?",
   "o": [
    "Do zastrzegania kart z wielu banków",
    "Do infolinii mObywatela",
    "Do zgłaszania SMS-ów"
   ],
   "a": 0,
   "why": "To System Zastrzegania Kart Związku Banków Polskich. Przekierowuje do Twojego banku.",
   "ref": "Co zrobić od razu"
  },
  {
   "q": "Jak zadzwonić na ten numer z zagranicy?",
   "o": [
    "Nie da się",
    "+48 828 828 828",
    "00 828"
   ],
   "a": 1,
   "why": "Z zagranicy wybierasz +48 828 828 828. Numer działa całą dobę.",
   "ref": "Co zrobić od razu"
  },
  {
   "q": "Czym różni się blokada od zastrzeżenia?",
   "o": [
    "Blokadę zwykle da się cofnąć, zastrzeżenie jest nieodwracalne",
    "Zastrzeżenie da się cofnąć, blokady nie",
    "Niczym"
   ],
   "a": 0,
   "why": "Blokada w aplikacji jest tymczasowa. Po zastrzeżeniu bank wydaje nową kartę.",
   "ref": "Co zrobić od razu"
  }
 ],
 "zgubiony-dowod": [
  {
   "q": "Kto korzysta z Systemu Dokumenty Zastrzeżone?",
   "o": [
    "Banki, operatorzy i inne instytucje",
    "Tylko urzędy gminy",
    "Tylko policja"
   ],
   "a": 0,
   "why": "Zastrzeżony dokument nie powinien zostać przyjęty przy zawieraniu umowy.",
   "ref": "Krok 1: zastrzeż dokument"
  },
  {
   "q": "Nie masz pewności, czy dowód przepadł. Co możesz zrobić?",
   "o": [
    "Nic nie robić przez miesiąc",
    "Czasowo zawiesić i cofnąć zawieszenie, gdy się znajdzie",
    "Od razu unieważnić"
   ],
   "a": 1,
   "why": "Zawieszenie da się cofnąć. Unieważnienie działa od razu i jest nieodwracalne.",
   "ref": "Krok 2: zgłoś utratę"
  },
  {
   "q": "Ile kroków po zgubieniu dowodu opisuje porada?",
   "o": [
    "Dwa: zastrzeżenie dokumentu i zgłoszenie utraty",
    "Trzy: zmiana hasła, PIN-u i e-maila",
    "Jeden: zgłoszenie na policji"
   ],
   "a": 0,
   "why": "Zastrzeżenie w systemie dla banków i zgłoszenie utraty w urzędzie. Oba w telefonie.",
   "ref": "Krok 1: zastrzeż dokument"
  }
 ],
 "odzyskamy-pieniadze": [
  {
   "q": "Dzwoni „kancelaria”, zna szczegóły Twojej straty i obiecuje zwrot za opłatą. Co to najpewniej jest?",
   "o": [
    "Drugi etap tego samego oszustwa",
    "Prawdziwa pomoc prawna",
    "Kontakt z KNF"
   ],
   "a": 0,
   "why": "Często dzwonią ci sami ludzie, którzy oszukali za pierwszym razem.",
   "ref": "Jak to działa"
  },
  {
   "q": "Czy KNF, Interpol albo policja odzyskują pieniądze za opłatą?",
   "o": [
    "Nie",
    "Tylko w kryptowalutach",
    "Tak, za opłatą transferową"
   ],
   "a": 0,
   "why": "Te instytucje nie pobierają opłat za odzyskanie pieniędzy.",
   "ref": "Sygnały ostrzegawcze"
  },
  {
   "q": "Co zrobić z takim kontaktem?",
   "o": [
    "Zapłacić część opłaty",
    "Podać dane, żeby sprawdzić",
    "Rozłączyć się i zgłosić go na policji"
   ],
   "a": 2,
   "why": "Nie podawaj danych i dopisz kontakt do sprawy pierwszego oszustwa.",
   "ref": "Co zrobić"
  }
 ],
 "reklama-falszywego-banku": [
  {
   "q": "Jak bezpiecznie wejść do bankowości?",
   "o": [
    "Przez pierwszy wynik w Google",
    "Przez link z maila",
    "Z aplikacji albo zapisanej zakładki"
   ],
   "a": 2,
   "why": "Do banku nie wchodzimy przez wyszukiwarkę.",
   "ref": "Prosta zmiana nawyku"
  },
  {
   "q": "Po zalogowaniu strona prosi o „dodatkową weryfikację” kodem. Co naprawdę zatwierdzasz?",
   "o": [
    "Najpewniej przelew albo nowe urządzenie",
    "Logowanie",
    "Zmianę hasła"
   ],
   "a": 0,
   "why": "Na fałszywej stronie „weryfikacja” to zatwierdzenie przelewu lub dodania urządzenia oszusta.",
   "ref": "Jak to wygląda"
  },
  {
   "q": "Jak oznaczona bywa reklama w wynikach wyszukiwania?",
   "o": [
    "Nie jest oznaczona",
    "„Sponsorowane” albo „Reklama”",
    "Zielona kłódka"
   ],
   "a": 1,
   "why": "Wynik oznaczony jako sponsorowany może prowadzić do kopii strony banku.",
   "ref": "Jak to wygląda"
  }
 ],
 "duplikat-karty-sim": [
  {
   "q": "Telefon nagle pokazuje „tylko połączenia alarmowe” i przychodzą maile o zmianie hasła. Co robisz?",
   "o": [
    "Z innego telefonu dzwonię do operatora i banku",
    "Nic, to awaria sieci",
    "Restartuję telefon i czekam"
   ],
   "a": 0,
   "why": "To może być duplikat karty SIM. Liczy się szybka reakcja: operator, bank, poczta.",
   "ref": "Sygnały, których nie wolno ignorować"
  },
  {
   "q": "Co utrudnia wydanie duplikatu oszustowi?",
   "o": [
    "Hasło lub PIN do obsługi klienta u operatora",
    "Ciemny motyw",
    "Wyłączony Bluetooth"
   ],
   "a": 0,
   "why": "Dodatkowe hasło u operatora jest wymagane przy zmianach na koncie, w tym przy duplikacie.",
   "ref": "Jak się chronić"
  },
  {
   "q": "Dlaczego przejęcie numeru jest tak groźne?",
   "o": [
    "Bo oszust dostaje Twoje kody z SMS-ów",
    "Bo rośnie rachunek",
    "Bo traci się kontakty"
   ],
   "a": 0,
   "why": "Kto ma Twój numer, dostaje SMS-y z kodami do banku i poczty.",
   "ref": "Jak się chronić"
  }
 ],
 "falszywe-zbiorki": [
  {
   "q": "Która forma wpłaty jest czerwoną flagą?",
   "o": [
    "Przelew na konto fundacji",
    "BLIK na prywatny numer „bo szybciej”",
    "Wpłata przez znany portal zbiórkowy"
   ],
   "a": 1,
   "why": "Prośba o BLIK albo przelew na prywatne konto to typowy sygnał oszustwa.",
   "ref": "Typowe sygnały"
  },
  {
   "q": "Gdzie sprawdzisz fundację?",
   "o": [
    "W historii profilu",
    "W KRS",
    "W komentarzach pod postem"
   ],
   "a": 1,
   "why": "Fundację lub stowarzyszenie sprawdzisz w KRS.",
   "ref": "Trzy rzeczy do sprawdzenia"
  },
  {
   "q": "Jak sprawdzić, czy zdjęcie dziecka nie jest skradzione?",
   "o": [
    "Pytając autora",
    "Po jakości zdjęcia",
    "Wyszukiwaniem obrazem"
   ],
   "a": 2,
   "why": "Jeśli to samo zdjęcie jest w innej zbiórce pod innym nazwiskiem, to oszustwo.",
   "ref": "Trzy rzeczy do sprawdzenia"
  }
 ],
 "prywatnosc-facebook": [
  {
   "q": "Dlaczego warto ukryć listę znajomych?",
   "o": [
    "Bo Facebook tego wymaga",
    "Bo spowalnia profil",
    "Bo z niej oszuści wybierają, do kogo pisać w Twoim imieniu"
   ],
   "a": 2,
   "why": "Lista znajomych i relacje rodzinne to materiał dla oszustów „na wnuczka”.",
   "ref": "Pięć ustawień do sprawdzenia"
  },
  {
   "q": "Jak sprawdzić, co widzi obcy na Twoim profilu?",
   "o": [
    "Opcją „Wyświetl jako” lub podglądem dla osób spoza znajomych",
    "Nie da się",
    "Pytając znajomych"
   ],
   "a": 0,
   "why": "Podgląd profilu pokazuje dokładnie to, co widzą obcy.",
   "ref": "Pięć ustawień do sprawdzenia"
  },
  {
   "q": "Jak pokazywać datę urodzenia?",
   "o": [
    "Pełną, publicznie",
    "Bez roku urodzenia",
    "Z rokiem tylko dla znajomych znajomych"
   ],
   "a": 1,
   "why": "Data urodzenia bez roku utrudnia podszywanie się.",
   "ref": "Pięć ustawień do sprawdzenia"
  }
 ],
 "plan-po-oszustwie": [
  {
   "q": "Co robisz w pierwszych minutach po oszustwie?",
   "o": [
    "Zmieniam hasło do Facebooka",
    "Zgłaszam sprawę na policji",
    "Dzwonię do banku i blokuję bankowość, karty i przelewy"
   ],
   "a": 2,
   "why": "Pierwsze minuty to bank: blokada dostępu, kart i wstrzymanie przelewów. Czasem da się jeszcze zatrzymać przelew.",
   "ref": "Minuty 0–15: zatrzymaj dalsze straty"
  },
  {
   "q": "Od którego hasła zacząć zmiany?",
   "o": [
    "Od poczty e-mail",
    "Od Netflixa",
    "Od konta w sklepie"
   ],
   "a": 0,
   "why": "Przez pocztę resetuje się hasła do wszystkiego innego, więc idzie pierwsza. Zmieniaj z czystego urządzenia.",
   "ref": "Godzina 1: zabezpiecz konta i dane"
  },
  {
   "q": "Co zrobić przed skasowaniem SMS-ów i maili od oszusta?",
   "o": [
    "Zrobić zrzuty ekranu i notatkę z godzinami",
    "Nic, lepiej od razu usunąć",
    "Odpisać, że zgłaszam sprawę"
   ],
   "a": 0,
   "why": "Dowody i notatka z godzinami bardzo pomagają policji i bankowi.",
   "ref": "Godziny 2–6: zbierz dowody i zgłoś"
  },
  {
   "q": "Kiedy bank co do zasady powinien zwrócić pieniądze?",
   "o": [
    "Zawsze, niezależnie od sytuacji",
    "Gdy sam zleciłeś przelew pod wpływem manipulacji",
    "Gdy nie autoryzowałeś transakcji"
   ],
   "a": 2,
   "why": "Przy transakcji nieautoryzowanej bank co do zasady powinien ją zwrócić. Przy przelewie zleconym samodzielnie jest trudniej, ale warto składać reklamację.",
   "ref": "Godziny 2–6: zbierz dowody i zgłoś"
  },
  {
   "q": "Tydzień później dzwoni „kancelaria”, która odzyska pieniądze za opłatą. Co to jest?",
   "o": [
    "Prawdziwa pomoc",
    "Najczęściej drugi etap oszustwa",
    "Kontakt z banku"
   ],
   "a": 1,
   "why": "Prawdziwa pomoc nie zaczyna się od telefonu do Ciebie i nie wymaga opłaty z góry.",
   "ref": "Kolejne dni: uważaj na drugi atak"
  }
 ],
 "telefon-seniora": [
  {
   "q": "Które ustawienie blokuje dużą część oszustw „na kuriera” na Androidzie?",
   "o": [
    "Wyłączenie instalowania nieznanych aplikacji",
    "Wyłączenie Bluetooth",
    "Większa czcionka"
   ],
   "a": 0,
   "why": "SMS każe pobrać aplikację z linku. Bez zgody na nieznane aplikacje się nie zainstaluje.",
   "ref": "Część 1: blokady, które działają same"
  },
  {
   "q": "Co zrobić przed włączeniem wyciszania nieznanych numerów?",
   "o": [
    "Wyłączyć internet",
    "Zapisać w kontaktach przychodnię, aptekę i ważne numery",
    "Zresetować telefon"
   ],
   "a": 1,
   "why": "Inaczej rodzic przegapi telefon od lekarza.",
   "ref": "Część 1: blokady, które działają same"
  },
  {
   "q": "Po co niski dzienny limit przelewów u seniora?",
   "o": [
    "Żeby karta działała za granicą",
    "Żeby bank pobierał mniejsze opłaty",
    "Żeby oszust nie wyczyścił konta jednym przelewem"
   ],
   "a": 2,
   "why": "Niski limit nie przeszkadza w życiu, a ogranicza stratę. W razie większego zakupu można go podnieść na chwilę.",
   "ref": "Część 2: bank i pieniądze"
  },
  {
   "q": "Jak działa rodzinne hasło?",
   "o": [
    "Rodzic pyta o nie dzwoniącego „wnuczka”, a oszust go nie zna",
    "To hasło do Wi‑Fi",
    "To PIN do aplikacji banku"
   ],
   "a": 0,
   "why": "Głos da się podrobić, hasła ustalonego przy stole nie.",
   "ref": "Część 4: rozmowa, która chroni najlepiej"
  },
  {
   "q": "Jaka jest jedna zasada na wszystko, gdy chodzi o pieniądze?",
   "o": [
    "Słucham do końca, żeby nie urazić rozmówcy",
    "Proszę o numer zwrotny",
    "Rozłączam się i oddzwaniam sam na znany numer"
   ],
   "a": 2,
   "why": "Do banku z numeru na karcie, do wnuczka na numer zapisany od lat.",
   "ref": "Część 4: rozmowa, która chroni najlepiej"
  }
 ],
 "wyciek-danych": [
  {
   "q": "Wyciekło hasło. Gdzie je zmienić?",
   "o": [
    "Tylko w serwisie, z którego wyciekło",
    "Wszędzie, gdzie było takie samo albo podobne",
    "Nigdzie, jeśli było zaszyfrowane"
   ],
   "a": 1,
   "why": "Oszuści automatycznie sprawdzają wyciekłe pary e-mail i hasło w setkach innych serwisów.",
   "ref": "Krok 2: reakcja zależnie od rodzaju danych"
  },
  {
   "q": "Wyciekł skan dowodu z obu stron. Co jeszcze warto rozważyć poza zastrzeżeniem?",
   "o": [
    "Zmianę numeru telefonu",
    "Unieważnienie i wymianę dowodu",
    "Nic więcej"
   ],
   "a": 1,
   "why": "Przy pełnym skanie dokumentu warto go unieważnić i wyrobić nowy.",
   "ref": "Krok 2: reakcja zależnie od rodzaju danych"
  },
  {
   "q": "Na karcie pojawiły się płatności na 1–2 zł. Co mogą oznaczać?",
   "o": [
    "Opłatę za kartę",
    "Że ktoś sprawdza, czy karta działa",
    "Zwrot od sklepu"
   ],
   "a": 1,
   "why": "Drobne testowe płatności bywają pierwszym sygnałem użycia wyciekłej karty.",
   "ref": "Krok 2: reakcja zależnie od rodzaju danych"
  },
  {
   "q": "Gdzie sprawdzisz, w jakich wyciekach był Twój e-mail?",
   "o": [
    "haveibeenpwned.com",
    "Na stronie firmy z wycieku przez link z maila",
    "W ustawieniach telefonu"
   ],
   "a": 0,
   "why": "Wpisujesz tam adres e-mail, nigdy hasło.",
   "ref": "Krok 3: sprawdź, gdzie jeszcze jesteś"
  },
  {
   "q": "Gdzie złożysz skargę na firmę, z której wyciekły dane?",
   "o": [
    "Do Prezesa UODO",
    "Do operatora komórkowego",
    "Do CERT Polska"
   ],
   "a": 0,
   "why": "Skargę składa się do Prezesa UODO. Przy szkodzie można też dochodzić odszkodowania.",
   "ref": "Krok 4: Twoje prawa"
  }
 ],
 "anatomia-phishingu": [
  {
   "q": "Jaka jest domena w adresie mbank.pl.logowanie-weryfikacja.com/login?",
   "o": [
    "logowanie-weryfikacja.com",
    "login",
    "mbank.pl"
   ],
   "a": 0,
   "why": "Czytasz od pierwszego ukośnika w lewo. „mbank.pl” na początku to tylko subdomena, czyli dekoracja.",
   "ref": "Część 1: jak czytać adres strony"
  },
  {
   "q": "Co oznacza kłódka w pasku adresu?",
   "o": [
    "Że strona należy do banku",
    "Tylko to, że połączenie jest szyfrowane",
    "Że strona jest sprawdzona przez CERT"
   ],
   "a": 1,
   "why": "Fałszywa strona też może mieć kłódkę. Certyfikat dostaje się za darmo w kilka minut.",
   "ref": "Część 1: jak czytać adres strony"
  },
  {
   "q": "W skrzynce widzisz nadawcę „PKO Bank Polski”. Co sprawdzasz?",
   "o": [
    "Prawdziwy adres e-mail nadawcy",
    "Nic, nazwa wystarczy",
    "Czy jest logo"
   ],
   "a": 0,
   "why": "Nazwę wyświetlaną można wpisać dowolnie. Adres nadawcy to pierwszy filtr, choć też nie dowód.",
   "ref": "Część 2: jak czytać e-mail"
  },
  {
   "q": "Który załącznik jest szczególnie podejrzany?",
   "o": [
    "faktura.pdf.exe",
    "Brak załącznika",
    "zdjecie.jpg od znajomego"
   ],
   "a": 0,
   "why": "Podwójna końcówka, spakowane pliki z hasłem i dokumenty proszące o „włączenie zawartości” to czerwone flagi.",
   "ref": "Część 2: jak czytać e-mail"
  },
  {
   "q": "Najprostsza obrona przed phishingiem to:",
   "o": [
    "Antywirus",
    "Nie wchodzić przez linki z wiadomości tam, gdzie chodzi o pieniądze lub logowanie",
    "Czytanie tylko maili z polskimi znakami"
   ],
   "a": 1,
   "why": "Bank z aplikacji, paczka w aplikacji kuriera, urząd przez wpisany adres.",
   "ref": "Najprostsza obrona"
  }
 ],
 "umowa-rodzinna": [
  {
   "q": "Co według poradnika chroni dziecko najlepiej?",
   "o": [
    "Najmocniejsza kontrola rodzicielska",
    "Zakaz telefonu do 16 lat",
    "Pewność, że z problemem może przyjść bez obawy o karę"
   ],
   "a": 2,
   "why": "Dziecko, które nie boi się powiedzieć, jest bezpieczniejsze niż dziecko z najlepiej ustawioną kontrolą.",
   "ref": "Etap 1: 8–10 lat. Pierwszy tablet i telefon"
  },
  {
   "q": "Od ilu lat większość mediów społecznościowych pozwala założyć konto?",
   "o": [
    "Od 18",
    "Od 10",
    "Od 13"
   ],
   "a": 2,
   "why": "Regulaminy wymagają zwykle co najmniej 13 lat. Fałszywa data urodzenia wyłącza zabezpieczenia dla nastolatków.",
   "ref": "Etap 3: 13–16 lat. Media społecznościowe"
  },
  {
   "q": "Dorosły w internecie prosi dziecko o tajemnicę przed rodzicami. Czego dziecko powinno się nauczyć?",
   "o": [
    "Że taki dorosły robi coś złego i trzeba o tym powiedzieć",
    "Że trzeba zablokować tylko aplikację",
    "Że to w porządku, jeśli to miła osoba"
   ],
   "a": 0,
   "why": "To zdanie warto powtarzać: dorosły, który prosi o sekret przed rodzicami, robi coś złego.",
   "ref": "Etap 2: 10–12 lat. Własny telefon i pierwsze czaty"
  },
  {
   "q": "Nastolatek jest szantażowany zdjęciami. Co powinien zrobić?",
   "o": [
    "Usunąć konto i nikomu nie mówić",
    "Nie płacić, nie wysyłać więcej i przyjść do rodzica",
    "Zapłacić, żeby było cicho"
   ],
   "a": 1,
   "why": "Rodzic nie krzyczy, tylko pomaga: zrzuty ekranu, blokada, zgłoszenie.",
   "ref": "Etap 3: 13–16 lat. Media społecznościowe"
  },
  {
   "q": "Gdzie zgłosić niepokojące treści lub kontakty z dzieckiem?",
   "o": [
    "Na infolinię operatora",
    "Tylko do szkoły",
    "Dyżurnet NASK i telefon 116 111 dla wsparcia"
   ],
   "a": 2,
   "why": "Niepokojące treści i kontakty zgłasza się do Dyżurnetu, a wsparcie dla dzieci i rodziców daje 116 111.",
   "ref": "Sygnały, że warto porozmawiać"
  }
 ],
 "zakupy-z-ogloszen": [
  {
   "q": "Od czego zaczyna się prawie każde oszustwo na ogłoszeniach?",
   "o": [
    "Od wyprowadzenia rozmowy lub płatności poza serwis",
    "Od niskiej oceny sprzedającego",
    "Od zbyt wielu zdjęć"
   ],
   "a": 0,
   "why": "Zostań w czacie serwisu i płać przez jego system albo gotówką przy odbiorze.",
   "ref": "Krok 2: rozmowa"
  },
  {
   "q": "Jak sprawdzić, czy sprzedający naprawdę ma przedmiot?",
   "o": [
    "Poprosić o skan dowodu",
    "Poprosić o zdjęcie z kartką z Twoim imieniem i datą",
    "Zapłacić zaliczkę"
   ],
   "a": 1,
   "why": "Prawdziwy sprzedający zrobi takie zdjęcie w minutę.",
   "ref": "Krok 2: rozmowa"
  },
  {
   "q": "Która forma płatności jest najmniej bezpieczna?",
   "o": [
    "Przelew albo BLIK z góry na prywatny numer",
    "Gotówka przy odbiorze po obejrzeniu",
    "Przesyłka z ochroną kupującego"
   ],
   "a": 0,
   "why": "Przy przelewie z góry odzyskanie pieniędzy jest najtrudniejsze.",
   "ref": "Krok 3: płatność"
  },
  {
   "q": "Po co nagrywać otwieranie paczki?",
   "o": [
    "Dla zabawy",
    "Do reklamacji, gdy w środku jest coś innego",
    "Bo wymaga tego kurier"
   ],
   "a": 1,
   "why": "Nagranie od przecięcia taśmy bardzo pomaga przy reklamacji.",
   "ref": "Krok 4: odbiór i sprawdzenie"
  },
  {
   "q": "Gdzie sprawdzisz historię używanego samochodu?",
   "o": [
    "W ogłoszeniu",
    "historiapojazdu.gov.pl",
    "Pytając sprzedającego"
   ],
   "a": 1,
   "why": "Rządowa strona pokazuje historię pojazdu. Nie płać też „zaliczki, żeby nikt inny nie kupił”.",
   "ref": "Szczególne przypadki"
  }
 ],
 "ustawienia-banku": [
  {
   "q": "Ktoś przez telefon prowadzi Cię krok po kroku po ustawieniach banku. Kto to jest?",
   "o": [
    "Konsultant, który pomaga",
    "Automat banku",
    "Oszust, bank nie dzwoni z prośbą o zmianę limitów"
   ],
   "a": 2,
   "why": "Ustawienia zmieniasz tylko sam, w aplikacji, którą sam otworzysz.",
   "ref": "8. Jak bank naprawdę się z Tobą kontaktuje"
  },
  {
   "q": "Jaki dzienny limit przelewów ustawić?",
   "o": [
    "Zero",
    "Zbliżony do typowych wydatków, podnoszony na chwilę w razie potrzeby",
    "Najwyższy możliwy"
   ],
   "a": 1,
   "why": "Oszust jest ograniczony limitem, a podniesienie go wymaga dodatkowej autoryzacji.",
   "ref": "1. Limity"
  },
  {
   "q": "Co warto sprawdzić na liście zaufanych odbiorców?",
   "o": [
    "Czy nie ma tam nieznanych kont",
    "Czy odbiorcy mają zdjęcia",
    "Nic, lista jest tylko informacyjna"
   ],
   "a": 0,
   "why": "Oszuści, którzy przejmą dostęp, lubią dodać tam swoje konto.",
   "ref": "3. Urządzenia i dostęp"
  },
  {
   "q": "Najprostsza zmiana o największym efekcie to:",
   "o": [
    "Zmiana PIN-u co tydzień",
    "Oszczędności na osobnym rachunku bez karty i BLIK-a",
    "Wyłączenie powiadomień"
   ],
   "a": 1,
   "why": "Na koncie codziennym zostaw tylko to, co potrzebne na bieżące wydatki.",
   "ref": "5. Struktura kont"
  },
  {
   "q": "Do czego przydaje się karta wirtualna?",
   "o": [
    "Do zakupów w nieznanych sklepach z niskim limitem",
    "Do logowania w mObywatelu",
    "Do wypłat w bankomacie"
   ],
   "a": 0,
   "why": "Jeśli jej dane wyciekną, ryzykujesz tylko niewielką kwotę.",
   "ref": "4. Karty"
  }
 ],
 "kryptowaluty-bez-oszustw": [
  {
   "q": "Platforma gwarantuje zysk. Co to oznacza?",
   "o": [
    "Bezpieczną inwestycję",
    "Sygnał oszustwa, prawdziwe inwestycje nie gwarantują zysku",
    "Licencję KNF"
   ],
   "a": 1,
   "why": "Gwarantowany zysk to jedna z głównych czerwonych flag.",
   "ref": "Wspólne cechy oszustw"
  },
  {
   "q": "Czym jest fraza odzyskiwania (seed)?",
   "o": [
    "Słowami dającymi pełny dostęp do portfela",
    "Hasłem do e-maila",
    "Numerem klienta giełdy"
   ],
   "a": 0,
   "why": "Kto ją zna, może zabrać wszystkie środki. Nie podawaj jej nikomu i nie wpisuj na stronach.",
   "ref": "Zasady ochrony"
  },
  {
   "q": "Gdzie przechowywać frazę odzyskiwania?",
   "o": [
    "W notatkach w chmurze",
    "Zdjęcie w galerii telefonu",
    "Na papierze w bezpiecznym miejscu"
   ],
   "a": 2,
   "why": "Nie rób jej zdjęcia i nie trzymaj w telefonie ani w chmurze.",
   "ref": "Zasady ochrony"
  },
  {
   "q": "„Opiekun” prosi o zdalny dostęp, „żeby pomóc założyć konto”. Co robisz?",
   "o": [
    "Zgadzam się, bo jest profesjonalny",
    "Przerywam rozmowę",
    "Zgadzam się, ale tylko na 10 minut"
   ],
   "a": 1,
   "why": "Z dostępem zdalnym oszust sam robi przelewy, zakłada konta i bierze kredyty.",
   "ref": "Siedem najczęstszych schematów"
  },
  {
   "q": "Wypłata wymaga „podatku” i „opłaty za weryfikację”. Co robisz?",
   "o": [
    "Biorę kredyt",
    "Przestaję wpłacać i dzwonię do banku",
    "Płacę, żeby odzyskać zyski"
   ],
   "a": 1,
   "why": "Każda kolejna „opłata za wypłatę” to kolejna strata.",
   "ref": "Jeśli już wpłaciłeś"
  }
 ],
 "bezpieczne-podroze": [
  {
   "q": "Po co włączyć PIN na karcie SIM przed wyjazdem?",
   "o": [
    "Żeby telefon szybciej się ładował",
    "Żeby mieć tańszy roaming",
    "Żeby złodziej nie użył Twojego numeru do odbierania kodów SMS"
   ],
   "a": 2,
   "why": "Bez PIN-u karta z ukradzionego telefonu odbiera Twoje kody.",
   "ref": "Przed wyjazdem"
  },
  {
   "q": "Terminal za granicą pyta, czy płacić w złotówkach czy w walucie lokalnej. Co zwykle wybrać?",
   "o": [
    "Walutę lokalną",
    "Złotówki",
    "Obojętnie"
   ],
   "a": 0,
   "why": "Przeliczenie w terminalu (DCC) często ma gorszy kurs niż przeliczenie przez bank.",
   "ref": "Na miejscu"
  },
  {
   "q": "Jak najlepiej logować się do banku na wyjeździe?",
   "o": [
    "Przez hotelowe Wi‑Fi",
    "Z komputera w lobby",
    "Przez internet komórkowy"
   ],
   "a": 2,
   "why": "Do banku i ważnych kont lepiej używać internetu komórkowego.",
   "ref": "Na miejscu"
  },
  {
   "q": "Zgubiłeś paszport i potrzebujesz dokumentu do powrotu. Gdzie się zgłaszasz?",
   "o": [
    "Do konsulatu RP",
    "Do linii lotniczej",
    "Do hotelu"
   ],
   "a": 0,
   "why": "Konsulat może wydać paszport tymczasowy. Utratę zgłaszasz też w mObywatelu i zastrzegasz dokument.",
   "ref": "Gdy coś zginie"
  },
  {
   "q": "Dlaczego lepiej publikować zdjęcia z wakacji po powrocie?",
   "o": [
    "Bo w trakcie są gorsze",
    "Bo relacje na żywo mówią, że mieszkanie stoi puste",
    "Bo roaming jest drogi"
   ],
   "a": 1,
   "why": "Relacja na żywo to informacja dla każdego, że nie ma Cię w domu.",
   "ref": "Na miejscu"
  }
 ],
 "hasla-od-zera": [
  {
   "q": "Co jest największym problemem z hasłami według poradnika?",
   "o": [
    "Za długie hasła",
    "Brak znaków specjalnych",
    "Powtarzanie tego samego hasła w wielu miejscach"
   ],
   "a": 2,
   "why": "Po wycieku jednego serwisu oszuści sprawdzają to samo hasło w setkach innych (credential stuffing).",
   "ref": "Dlaczego „mocne hasło” to za mało"
  },
  {
   "q": "Jakie hasło główne poleca poradnik?",
   "o": [
    "Krótkie hasło z wykrzyknikiem",
    "Frazę z kilku losowych słów",
    "Imię dziecka i rok urodzenia"
   ],
   "a": 1,
   "why": "Fraza z kilku losowych słów jest długa, trudna do odgadnięcia i łatwa do zapamiętania.",
   "ref": "Krok 1: wybierz menedżer haseł"
  },
  {
   "q": "Która metoda drugiego kroku jest najmocniejsza?",
   "o": [
    "Klucz dostępu lub klucz sprzętowy",
    "Potwierdzenie push",
    "Kod SMS"
   ],
   "a": 0,
   "why": "Działa tylko na prawdziwej stronie, więc chroni przed phishingiem.",
   "ref": "Krok 3: weryfikacja dwuetapowa"
  },
  {
   "q": "Dlaczego klucz dostępu (passkey) chroni przed phishingiem?",
   "o": [
    "Bo jest dłuższy niż hasło",
    "Bo zmienia się codziennie",
    "Bo jest przypisany do prawdziwego adresu serwisu"
   ],
   "a": 2,
   "why": "Nawet po kliknięciu w link oszusta nie da się nim zalogować na fałszywej stronie.",
   "ref": "Krok 4: klucze dostępu, czyli przyszłość bez haseł"
  },
  {
   "q": "Przychodzi prośba o potwierdzenie logowania, a nie logujesz się. Co robisz?",
   "o": [
    "Odrzucam i zmieniam hasło",
    "Potwierdzam, żeby zniknęło",
    "Ignoruję na zawsze"
   ],
   "a": 0,
   "why": "To znak, że ktoś zna Twoje hasło.",
   "ref": "Najczęstsze błędy przy przechodzeniu na menedżer"
  }
 ],
 "deepfake-ai": [
  {
   "q": "Ile nagrania potrzebują programy do klonowania głosu?",
   "o": [
    "Nagranie ze studia",
    "Krótkie nagranie, np. z filmiku w sieci",
    "Kilka godzin"
   ],
   "a": 1,
   "why": "Wystarczy krótkie nagranie z mediów społecznościowych albo wiadomości głosowej.",
   "ref": "Co potrafią dziś narzędzia AI"
  },
  {
   "q": "Na czym najlepiej opierać obronę przed deepfake?",
   "o": [
    "Na wypatrywaniu błędów w obrazie",
    "Na antywirusie",
    "Na weryfikacji: oddzwonieniu, rodzinnym haśle, sprawdzeniu źródła"
   ],
   "a": 2,
   "why": "Sygnały wizualne coraz rzadziej są widoczne. Weryfikacja działa niezależnie od jakości podróbki.",
   "ref": "Zasady, które działają mimo AI"
  },
  {
   "q": "Dzwoni „syn” z nowego numeru. Co robisz?",
   "o": [
    "Rozłączam się i dzwonię na numer zapisany od lat",
    "Sprawdzam, czy głos jest naturalny",
    "Proszę o wiadomość głosową"
   ],
   "a": 0,
   "why": "AI podrobi głos, ale nie przejmie telefonu, na który sam dzwonisz.",
   "ref": "Zasady, które działają mimo AI"
  },
  {
   "q": "Jak sprawdzić reklamę, w której znana osoba poleca inwestycję?",
   "o": [
    "W komentarzach pod reklamą",
    "Na oficjalnych profilach tej osoby",
    "Po jakości nagrania"
   ],
   "a": 1,
   "why": "Sprawdzaj źródło, a nie twarz. Zwykle znajdziesz tam ostrzeżenie przed oszustami.",
   "ref": "Zasady, które działają mimo AI"
  },
  {
   "q": "Ktoś szantażuje przerobionymi zdjęciami. Co robisz?",
   "o": [
    "Nie płacę, robię zrzuty, blokuję i zgłaszam na policję",
    "Wysyłam kolejne zdjęcia, żeby udowodnić fałszerstwo",
    "Płacę, żeby nie publikował"
   ],
   "a": 0,
   "why": "Winny jest szantażysta. Przy osobach niepełnoletnich zgłoś także do Dyżurnetu.",
   "ref": "Gdy ktoś szantażuje przerobionymi zdjęciami"
  }
 ],
 "bezpieczny-komputer": [
  {
   "q": "Czy do domowego komputera z Windowsem potrzebny jest płatny antywirus?",
   "o": [
    "Tak, i najlepiej dwa",
    "Tak, zawsze",
    "Dla większości wystarczą wbudowane Zabezpieczenia Windows"
   ],
   "a": 2,
   "why": "Ważniejsze od płatnego antywirusa są aktualizacje, rozsądne pobieranie i kopie zapasowe.",
   "ref": "2. Zabezpieczenia Windows"
  },
  {
   "q": "Co daje kontrolowany dostęp do folderów?",
   "o": [
    "Przyspiesza komputer",
    "Ukrywa pliki przed rodziną",
    "Chroni Dokumenty i Obrazy przed zaszyfrowaniem przez złośliwe programy"
   ],
   "a": 2,
   "why": "To ochrona przed oprogramowaniem wymuszającym okup.",
   "ref": "2. Zabezpieczenia Windows"
  },
  {
   "q": "Dlaczego na co dzień pracować na koncie standardowym?",
   "o": [
    "Bo złośliwy program ma na nim dużo mniejsze możliwości",
    "Bo nie wymaga hasła",
    "Bo jest szybsze"
   ],
   "a": 0,
   "why": "Konto administratora zostaw do instalowania programów i zmian w systemie.",
   "ref": "3. Konto bez uprawnień administratora"
  },
  {
   "q": "Dlaczego dysk z kopią zapasową odłączać po kopii?",
   "o": [
    "Bo się przegrzewa",
    "Bo tak każe Windows",
    "Bo podłączony na stałe może zostać zaszyfrowany razem z komputerem"
   ],
   "a": 2,
   "why": "Tylko odłączona kopia chroni przed oprogramowaniem wymuszającym okup.",
   "ref": "6. Kopia zapasowa"
  },
  {
   "q": "Co zrobić z kluczem odzyskiwania szyfrowania dysku?",
   "o": [
    "Zapisać w bezpiecznym miejscu, np. na koncie Microsoft i wydrukowany",
    "Wysłać mailem do siebie i znajomych",
    "Nic, nie jest potrzebny"
   ],
   "a": 0,
   "why": "Bez klucza, w razie awarii, możesz stracić dostęp do danych.",
   "ref": "5. Szyfrowanie dysku"
  }
 ],
 "gry-online-dziecka": [
  {
   "q": "Jakie ustawienie czatu w Robloxie poleca poradnik dla młodszych dzieci?",
   "o": [
    "Czat wyłączony albo tylko ze znajomymi",
    "Czat otwarty dla wszystkich",
    "Czat tylko głosowy"
   ],
   "a": 0,
   "why": "Czat ustawiasz zależnie od wieku. Konto rodzica połączone z kontem dziecka daje najwięcej kontroli.",
   "ref": "Roblox"
  },
  {
   "q": "Od ilu lat jest Discord według regulaminu?",
   "o": [
    "Od 16",
    "Od 10",
    "Od 13"
   ],
   "a": 2,
   "why": "Dla nastolatka warto ustawić wiadomości prywatne tylko od znajomych i filtr treści.",
   "ref": "Discord"
  },
  {
   "q": "Obcy gracz daje dziecku prezenty w grze i proponuje prywatny komunikator. Co to może być?",
   "o": [
    "Budowanie zaufania przed prośbą o coś w zamian",
    "Promocja gry",
    "Zwykła uprzejmość"
   ],
   "a": 0,
   "why": "Prezenty od nieznajomych i przeniesienie rozmowy poza grę to znany wzorzec. Warto porozmawiać z dzieckiem.",
   "ref": "Obcy dorośli"
  },
  {
   "q": "Co mówi oznaczenie PEGI?",
   "o": [
    "Gwarantuje bezpieczny czat",
    "Określa cenę gry",
    "Ocenia treść samej gry, ale nie rozmowy innych graczy"
   ],
   "a": 2,
   "why": "Gra „od 7 lat” z otwartym czatem może być miejscem rozmów nieodpowiednich dla siedmiolatka.",
   "ref": "Klasyfikacja wiekowa PEGI"
  },
  {
   "q": "Dziecko mówi o niepokojącym kontakcie w grze. Co robisz najpierw?",
   "o": [
    "Dziękuję, że powiedziało, i robię zrzuty ekranu",
    "Każę usunąć grę i zapomnieć",
    "Zabieram urządzenie"
   ],
   "a": 0,
   "why": "Bez krzyku i szlabanu, inaczej następnym razem dziecko nic nie powie.",
   "ref": "Gdy dzieje się coś złego"
  }
 ],
 "faktura-zmiana-konta": [
  {
   "q": "Kontrahent pisze, że zmienił numer konta. Co robisz?",
   "o": [
    "Odpisuję z prośbą o potwierdzenie",
    "Dzwonię do niego na znany wcześniej numer",
    "Płacę na nowy numer, bo wątek się zgadza"
   ],
   "a": 1,
   "why": "Odpowiedź na maila może trafić do oszusta, który przejął skrzynkę. Telefon na znany numer to jedyny pewny sposób.",
   "ref": "Zasady, które chronią firmę"
  },
  {
   "q": "Gdzie sprawdzisz rachunek czynnego podatnika VAT?",
   "o": [
    "Na białej liście podatników VAT",
    "W stopce maila",
    "W KRS"
   ],
   "a": 0,
   "why": "Rachunek spoza wykazu to sygnał ostrzegawczy.",
   "ref": "Zasady, które chronią firmę"
  },
  {
   "q": "„Prezes” pisze z wakacji o pilnym przelewie. Co robisz?",
   "o": [
    "Robię połowę przelewu",
    "Robię przelew, bo to szef",
    "Trzymam się procedury i potwierdzam głosowo"
   ],
   "a": 2,
   "why": "Szef też podlega procedurom. Prawdziwy szef to zrozumie.",
   "ref": "Zasady, które chronią firmę"
  },
  {
   "q": "Od czego zaczyna się większość takich oszustw?",
   "o": [
    "Od zgubionej faktury",
    "Od awarii banku",
    "Od przejętej skrzynki pocztowej"
   ],
   "a": 2,
   "why": "Dlatego weryfikacja dwuetapowa i przegląd reguł przekierowania są tak ważne.",
   "ref": "Zasady, które chronią firmę"
  },
  {
   "q": "Przelew już poszedł na fałszywy rachunek. Co robisz najpierw?",
   "o": [
    "Wysyłam maila do oszusta",
    "Dzwonię od razu do banku",
    "Czekam, aż kontrahent się odezwie"
   ],
   "a": 1,
   "why": "Bank może spróbować zatrzymać przelew i skontaktować się z bankiem odbiorcy. Liczą się godziny.",
   "ref": "Gdy przelew już poszedł"
  }
 ],
 "smart-dom": [
  {
   "q": "Co jest najczęstszą przyczyną problemów z kamerami domowymi?",
   "o": [
    "Domyślne hasła, brak aktualizacji i kont bez 2FA",
    "Wyrafinowane ataki hakerów",
    "Słaby zasięg Wi‑Fi"
   ],
   "a": 0,
   "why": "Najczęściej to proste zaniedbania, a nie zaawansowane ataki.",
   "ref": "Dlaczego to ważne"
  },
  {
   "q": "Do której sieci podłączyć urządzenia smart?",
   "o": [
    "Do sieci dla gości",
    "Do głównej sieci z komputerami",
    "Bez znaczenia"
   ],
   "a": 0,
   "why": "Osobna sieć oddziela je od komputerów i telefonów.",
   "ref": "Po instalacji: lista ustawień"
  },
  {
   "q": "Które zabezpieczenie konta w aplikacji producenta jest kluczowe?",
   "o": [
    "Ładne zdjęcie profilowe",
    "Krótka nazwa urządzenia",
    "Weryfikacja dwuetapowa"
   ],
   "a": 2,
   "why": "Silne hasło i 2FA w aplikacji to podstawa.",
   "ref": "Po instalacji: lista ustawień"
  },
  {
   "q": "Sprzedajesz kamerę. Co robisz przed oddaniem?",
   "o": [
    "Nic, nowy właściciel sam ustawi",
    "Zmieniam tylko nazwę",
    "Usuwam ją z konta, resetuję i wyjmuję kartę pamięci"
   ],
   "a": 2,
   "why": "Bez tego nowy właściciel może mieć dostęp do Twoich nagrań lub konta.",
   "ref": "Sprzedajesz albo oddajesz urządzenie?"
  },
  {
   "q": "Najbezpieczniejsza niania elektroniczna to:",
   "o": [
    "Model z publicznym podglądem",
    "Model działający lokalnie, bez internetu",
    "Najtańszy model z aplikacją"
   ],
   "a": 1,
   "why": "Lokalna niania radiowa nie wystawia obrazu z pokoju dziecka do internetu.",
   "ref": "Niania elektroniczna: osobna uwaga"
  }
 ],
 "cyfrowy-spadek": [
  {
   "q": "Co pozwala w Google przekazać dane zaufanej osobie po dłuższej nieaktywności?",
   "o": [
    "Tryb incognito",
    "Kopia zapasowa WhatsAppa",
    "Menedżer nieaktywnego konta"
   ],
   "a": 2,
   "why": "Ustalasz, po jakim czasie i komu Google udostępni wybrane dane.",
   "ref": "Google: menedżer nieaktywnego konta"
  },
  {
   "q": "Jak nazywa się odpowiednik na iPhonie?",
   "o": [
    "Czas przed ekranem",
    "Kontakt alarmowy SOS",
    "Kontakt spadkowy"
   ],
   "a": 2,
   "why": "Kontakt spadkowy z kluczem dostępu i aktem zgonu może uzyskać dostęp do danych w iCloud.",
   "ref": "Apple: kontakt spadkowy"
  },
  {
   "q": "Dlaczego nie rezygnować od razu z numeru telefonu zmarłej osoby?",
   "o": [
    "Bo mogą na niego przychodzić kody potrzebne do odzyskania kont",
    "Bo abonamentu nie da się rozwiązać",
    "Bo tak każe bank"
   ],
   "a": 0,
   "why": "Numer utrzymaj do czasu uporządkowania kont.",
   "ref": "1. Telefon i karta SIM"
  },
  {
   "q": "Co daje upamiętnienie konta na Facebooku?",
   "o": [
    "Pozwala pisać w imieniu zmarłego",
    "Usuwa wszystkie zdjęcia",
    "Chroni je przed logowaniem i przejęciem"
   ],
   "a": 2,
   "why": "Niezamknięte konta zmarłych bywają przejmowane i używane do wyłudzeń.",
   "ref": "5. Media społecznościowe"
  },
  {
   "q": "Co zrobić przed zamknięciem jakiegokolwiek konta?",
   "o": [
    "Nic",
    "Zmienić nazwę konta",
    "Pobrać zdjęcia i ważne pliki"
   ],
   "a": 2,
   "why": "Po usunięciu konta zwykle nie da się ich odzyskać.",
   "ref": "7. Zdjęcia i pamiątki"
  }
 ]
};
