---
n: 2
slug: polish-sms-scam-playbook
tag: threat intel
title: "The Polish SMS scam playbook"
lead: "Scam campaigns in Poland change their branding every few weeks, but the playbook underneath stays remarkably stable. I keep a running list of the lures that show up in my city and in reports. These are the patterns worth knowing."
date: 2026-11-01
---

## The lures

| Lure | Pretext | Real goal |
|---|---|---|
| Parcel surcharge | “Dopłać 1,99 zł”, address problem | card data, then 3-D Secure or BLIK codes |
| Energy or gas | disconnection tonight over a small debt | card data on a fake payment page |
| Tax refund | “nadpłata podatku”, claim within 24 h | online banking credentials |
| Marketplace payout | buyer on OLX or Vinted “already paid” | card data under the pretext of receiving money |
| “Hi mum” | new number, urgent transfer | direct transfer or BLIK code |
| Bank security team | suspicious transaction, call follows | remote access app, transfer to a “safe account” |

## What they have in common

1. **Urgency** measured in hours, not days.
2. **A tiny amount** that makes the request feel harmless. The amount is irrelevant; the card is the target.
3. **A link to a lookalike domain**, usually registered days before the campaign and abandoned soon after.
4. **A second step** that asks for a code. That code approves a payment, adds a device to the victim's banking app, or confirms a BLIK withdrawal.

## Infrastructure notes

Phishing kits are reused across brands. The same page template switches between a courier, a utility and a bank with a change of logo. Domains are cheap and short-lived, so blocking individual URLs only works if it happens within hours. That is why fast reporting matters more than perfect analysis.

> **Defender's takeaway:** user education should target the second step, not the first. People will click links. What saves the account is refusing to type a code that “cancels” or “receives” something.

## What reduces the damage

- Reporting to **8080** feeds CERT Polska's warning list, which mobile operators use to block domains.
- Banks increasingly show the payee and the purpose of a code in the authorisation screen. Reading that screen is the last line of defence.
- Reserving one's PESEL number in mObywatel blocks the identity-theft follow-up: loans taken out on stolen data.
