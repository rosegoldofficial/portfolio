---
n: 7
slug: passkeys-explained
tag: authentication
title: "Passkeys, explained without the marketing"
lead: "Passkeys are being pushed by Google, Apple and Microsoft, and the pitch is “no more passwords”. The more interesting part for defenders is that they are resistant to phishing by design, which no password or SMS code is."
date: 2026-11-11
---

## What a passkey is

A passkey is a key pair created for one specific website. The private key stays on your device or in your password manager. The site only stores the public key. When you sign in, the site sends a challenge, your device signs it after you unlock it with a fingerprint, face or PIN, and the site checks the signature.

## Why phishing stops working

The browser only offers a passkey to the exact domain it was created for. On `faceb00k-login.top` there is simply no passkey to use, so there is nothing to type and nothing to steal. Compare that with an SMS code, which a fake page can ask for and relay in real time.

## Practical points

1. **Sync:** passkeys usually sync through Google Password Manager, iCloud Keychain or a password manager such as Bitwarden, so a lost phone does not mean a lost account.
2. **Recovery:** keep at least two ways in, for example a passkey on the phone and one on a laptop or a hardware key.
3. **Shared devices:** you can sign in on someone else's computer by scanning a QR code with your phone, without leaving anything behind.

> **Limits:** passkeys protect the login. They do not protect a session that malware has already stolen from your browser, and they do not help if the account recovery path is weak.
