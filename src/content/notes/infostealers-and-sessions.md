---
n: 6
slug: infostealers-and-sessions
tag: malware
title: "Infostealers: why MFA did not save the account"
lead: "“I had two-factor turned on and they still got in.” I hear this mostly from gamers and small business owners. The usual cause is an infostealer: malware that does not need the password at all, because it steals the session that is already logged in."
date: 2026-11-21
---

## How it gets in

- A “game to test” or a cracked tool sent on Discord.
- A fake installer from an ad that outranks the real download.
- A “mod”, cheat or premium plugin from an unofficial source.

## What it takes

Within seconds of running, a typical stealer collects saved browser passwords, session cookies, Discord tokens, crypto wallet files and screenshots, packs them up and sends them to the operator. Session cookies are the important part: they let the attacker continue an already authenticated session, so the second factor is never asked for.

## Response checklist

1. Disconnect the machine and treat it as compromised. Reinstalling the system is the clean option.
2. From a **different, clean device**, change passwords for email first, then everything else that was saved in the browser.
3. Use “log out of all sessions” on every important service. This kills stolen cookies. On Discord, changing the password also resets the token.
4. Check email forwarding rules and recovery options. Attackers add them to keep access.
5. Move crypto to a new wallet if one was on that machine.

> **Prevention that works:** do not run executables from chat, keep downloads to official sites, and prefer passkeys and hardware-backed sign-in. They reduce how much a stolen password is worth, though a stolen live session still needs to be revoked.
