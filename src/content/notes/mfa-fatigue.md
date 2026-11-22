---
n: 8
slug: mfa-fatigue
tag: authentication
title: "MFA fatigue: when the attacker just keeps pressing “send”"
lead: "Push notifications are the friendliest form of two-factor authentication: a prompt appears, you tap “Approve”. That convenience is exactly what MFA fatigue attacks exploit."
date: 2026-11-13
---

## The attack

The attacker already has the password, from a breach or a phishing page. They try to log in again and again. The victim's phone fills with approval requests, often at night. Sometimes a message follows from “IT support”: “We are fixing your account, please approve the request.” One tired tap is enough.

## Defences

1. **Number matching.** The login screen shows a number and the user has to type it into the app. A random push spam cannot be approved by accident. Microsoft Authenticator and many other apps now work this way.
2. **Context in the prompt.** Showing the location and app requesting access helps users notice “this is not me”.
3. **Rate limits and alerts.** Several denied prompts in a row should lock further attempts and alert the security team.
4. **Phishing-resistant methods** for admins and high-value accounts: passkeys or hardware keys.

> **User rule:** if you did not just try to log in, never approve. Deny, then change the password, because a prompt you did not trigger means someone has it.

## What to look for in logs

Repeated MFA challenges for one account from a new IP or country, followed by a success, is a classic pattern. It is worth an alert even when the final login succeeded, especially then.
