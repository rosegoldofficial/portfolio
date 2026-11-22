---
n: 11
slug: aitm-phishing
tag: phishing
title: "Adversary-in-the-middle phishing: why one-time codes are not enough"
lead: "Classic phishing steals a password. Adversary-in-the-middle (AiTM) phishing sits between the victim and the real login page, relays everything in real time and keeps the session cookie the real site issues after a successful MFA prompt. The attacker never needs the code again."
date: 2026-11-19
---

## How it works

1. The victim opens a lookalike domain that acts as a reverse proxy to the genuine login page.
2. Username, password and the one-time code are passed through to the real service, which accepts them.
3. The service sets a session cookie. The proxy forwards it to the victim and keeps a copy.
4. The attacker imports the cookie into a browser and is logged in, MFA already satisfied.

To the user everything looks normal: the real page, the real MFA prompt, a successful login.

## What does not stop it

- SMS and authenticator app codes, because the code is relayed while still valid.
- Push approvals, for the same reason.
- Training that only says "check for HTTPS". The proxy has a valid certificate for its own domain.

## What does

- **Phishing-resistant authentication.** FIDO2 security keys and passkeys bind the signature to the origin, so a proxy on another domain cannot complete the login.
- **Conditional access.** Tie sessions to compliant devices or known networks so a replayed cookie from elsewhere fails.
- **Short session lifetimes and token binding** where the platform supports them.
- **Detection.** Look for a successful sign-in followed shortly by activity from a different IP, ASN or user agent with the same session, and for new inbox rules or MFA method registrations right after login.

> **Takeaway:** if an attacker can relay your code, the code is not the defence. Origin-bound credentials are.

## For users

Use a password manager. It autofills only on the real domain, so a lookalike page that it refuses to fill is a useful warning sign.
