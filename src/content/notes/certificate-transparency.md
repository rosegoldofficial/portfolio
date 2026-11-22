---
n: 15
slug: certificate-transparency
tag: threat intel
title: "Finding phishing domains early with Certificate Transparency logs"
lead: "Almost every phishing site today uses HTTPS. To get a certificate, the operator has to request one from a public certificate authority, and every such certificate is published in Certificate Transparency (CT) logs. Watching those logs lets defenders see lookalike domains, sometimes before the first SMS is sent."
date: 2026-11-22
---

## What CT gives you

- A public, append-only record of issued certificates and the domain names in them.
- Near real-time visibility: certificates usually appear in logs within minutes of issuance.
- Free search interfaces such as crt.sh, plus streaming feeds for automation.

## A simple monitoring approach

1. Build a list of brand keywords: the company name, product names, common misspellings, and local terms used in scams (in Poland, for example, words like "paczka", "doplata", "inpost" or bank names).
2. Stream new certificates and match subject names against the list, including look-alike characters and added words such as "-weryfikacja" or "-logowanie".
3. Score matches: newly registered domain, cheap TLD, free certificate, hosting known for abuse.
4. Send high-scoring domains for review and takedown, and to blocklists.

## Limits

- Wildcard certificates hide the exact subdomain used.
- Attackers can use hosting platforms whose certificates cover many customer subdomains.
- Many matches are harmless: fan pages, resellers, typos.

> **Takeaway:** CT logs turn a phishing campaign's first infrastructure step into a public signal. It is one of the cheapest early warnings a defender can have.

## In Poland

CERT Polska maintains a public list of malicious domains that DNS resolvers of participating operators block. Reporting a confirmed lookalike there protects users across networks, not just your own customers.
