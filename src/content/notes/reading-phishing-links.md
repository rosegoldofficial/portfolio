---
n: 1
slug: reading-phishing-links
tag: phishing
title: "Reading a phishing link in ten seconds"
lead: "Most phishing links are not technically clever. They rely on people reading a URL from left to right, the way we read sentences. Browsers and DNS read it the other way round. Once you read it like DNS does, most lures fall apart."
date: 2026-11-21
---

## Find the registrable domain first

Strip the scheme and the path, then read the hostname from the right. The registrable domain is the label just before the public suffix (`.pl`, `.com`, `.com.pl`). Everything to its left is a subdomain that the owner of that domain controls completely.

| URL | Who actually owns it |
|---|---|
| `https://inpost.pl/sledzenie` | `inpost.pl` |
| `https://inpost.pl.paczka-doplata.top/` | `paczka-doplata.top` |
| `https://login.mbank.pl-secure.info/` | `pl-secure.info` |
| `https://pko-bp.com-weryfikacja.net/` | `com-weryfikacja.net` |

The brand name sitting at the start of the hostname is decoration. The attacker paid for whatever sits at the end.

## Then look for the usual tricks

1. **Lookalike spelling:** `inp0st`, `allegrolokalnie-pl`, `olx-pay`, an extra hyphen or a doubled letter.
2. **Punycode:** a hostname starting with `xn--` is an internationalised name. `аllegro.pl` with a Cyrillic `а` renders almost identically to the real one.
3. **Shorteners and redirect chains:** the visible link is a shortener, the real destination is two hops away.
4. **Fresh, cheap TLDs:** `.top`, `.xyz`, `.info`, `.shop` are not malicious by themselves, but campaigns burn through them because registration costs a few złoty.

> **Rule of thumb:** if you cannot name the registrable domain in one breath, do not type a password there.

## Checking without clicking

- `whois` the registrable domain. A parcel company registered yesterday is not a parcel company.
- Submit the URL to **urlscan.io** to get a screenshot and the redirect chain without visiting it yourself.
- Check passive DNS and other domains on the same IP. Campaigns often host dozens of brands on one server.

## Report it

In Poland, forward the SMS to **8080** or submit the URL at **incydent.cert.pl**. Confirmed domains go onto CERT Polska's warning list, which operators use to block them for everyone.
