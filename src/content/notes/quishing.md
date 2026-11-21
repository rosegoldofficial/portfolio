---
n: 10
slug: quishing
tag: phishing
title: "Quishing: phishing through QR codes"
lead: "Email filters have become good at spotting malicious links. Attackers responded by putting the link inside an image of a QR code. The filter sees a picture, the user scans it with a phone, and the phone usually has none of the company's protections."
date: 2026-11-21
---

## Where it shows up

- Emails about “expiring MFA”, “document to sign” or “salary update”, with a QR code instead of a button.
- Stickers placed over real codes on parking meters, EV chargers and restaurant tables.
- Printed letters that imitate couriers or utilities.

## Why it works

1. Text scanners in email gateways often do not decode images.
2. The user switches from a monitored laptop to a personal phone.
3. Phone browsers hide most of the URL, so lookalike domains are harder to notice.

## Defences

- Gateways that decode QR codes in images and attachments and check the URL like any other link.
- User training that treats a QR code in an email as a link, not as something more official.
- For physical codes: official apps instead of scanning stickers, and regular checks of public payment points.

> **For users:** before opening, read the domain your phone shows under the scanned code. If you would not click it as a link, do not open it as a QR code.

## Reporting

In Poland, suspicious pages can be reported at **incydent.cert.pl**. For stickers in public places, also tell whoever runs the meter or charger, so others do not scan them.
