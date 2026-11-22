---
n: 12
slug: sim-swap
tag: authentication
title: "SIM swapping: when your phone number becomes someone else's second factor"
lead: "Many services still treat a phone number as proof of identity: password resets, login codes, bank confirmations. A SIM swap moves that number to a SIM card the attacker controls, and every SMS meant for the victim follows it."
date: 2026-11-22
---

## The attack

- The attacker gathers personal data from leaks, social media or phishing.
- They obtain a replacement SIM or eSIM by impersonating the victim at a carrier, using forged documents, or with help from an insider.
- The victim's phone suddenly shows "emergency calls only". From that moment, SMS codes and voice calls go to the attacker.
- Password resets on email and financial accounts follow within minutes.

## Signals

- Unexpected loss of mobile service in an area with normal coverage.
- Carrier notifications about a new SIM or eSIM activation.
- Password reset emails the user did not request.

## Mitigations for individuals

1. Set an account PIN or password at the carrier for any SIM change.
2. Move high-value accounts off SMS: authenticator apps, security keys, passkeys.
3. Remove the phone number as a recovery option where a better one exists.
4. In Poland, a reserved PESEL number makes contracts in the victim's name harder to sign.

## Mitigations for organisations

- Do not use SMS as the only factor for privileged accounts or account recovery.
- Treat a phone number change followed by a password reset as a high-risk event.
- Banks and fintechs can consume carrier signals about recent SIM changes and add friction to transfers after one.

> **Takeaway:** a phone number is a routing address, not an identity. Design recovery flows as if it can be moved without the owner's consent.
