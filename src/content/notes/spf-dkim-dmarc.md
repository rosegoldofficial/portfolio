---
n: 3
slug: spf-dkim-dmarc
tag: email
title: "SPF, DKIM and DMARC in a real header"
lead: "When someone forwards me a suspicious email, the first thing I open is not the body but the headers. Three results in one line tell most of the story. They also show the limit of email authentication: it proves who sent a message, not that the sender is honest."
date: 2026-11-03
---

## Where to look

In Gmail use **Show original**, in Outlook **View message source**. Find the `Authentication-Results` header added by the receiving server. A simplified example:

```
Authentication-Results: mx.google.com;
  spf=pass smtp.mailfrom=bounce.newsletter.example.pl;
  dkim=pass header.d=example.pl;
  dmarc=pass (p=REJECT) header.from=example.pl
```

## What each result means

1. **SPF** checks whether the sending server's IP is allowed to send for the envelope domain (`smtp.mailfrom`). It says nothing about the `From:` address the user sees.
2. **DKIM** verifies a cryptographic signature. `header.d` is the domain that signed the message.
3. **DMARC** ties them together: it passes only if SPF or DKIM passed **and** that domain aligns with the visible `From:` domain. `p=reject` means the domain owner asked receivers to drop failures.

> **The trap:** a phishing message from `example-pl-verify.com` can pass SPF, DKIM and DMARC perfectly, because the attacker owns that domain and configured it properly. A pass means “this really came from that domain”. You still have to ask whether that domain should be talking to you.

## Quick triage

| Pattern | Reading |
|---|---|
| `dmarc=fail` with a well-known `From:` domain | spoofing attempt, usually blocked if the brand uses `p=reject` |
| all pass, unfamiliar lookalike domain | attacker-owned domain, check registration date |
| all pass, real domain, odd request | compromised account or insider; verify through another channel |
| `spf=softfail`, no DKIM | badly configured legitimate sender or a forgery; treat with caution |

## Why it matters locally

Many small organisations, from schools to sports clubs, still publish no DMARC record at all. That makes their domains easy to spoof in messages to parents or members. Publishing `p=none` with reporting is a free first step that shows who is sending mail in your name.
