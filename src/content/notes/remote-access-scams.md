---
n: 13
slug: remote-access-scams
tag: fraud
title: "Remote access tools in bank fraud: the 'security department' call, step by step"
lead: "One of the most common fraud chains in Poland starts with a phone call from a spoofed bank number and ends with the victim installing a legitimate remote desktop tool. Nothing in it requires malware, which is exactly why it works."
date: 2026-11-28
---

## The chain

1. **Spoofed call.** The caller ID shows the bank's real hotline. The "analyst" reports a suspicious transfer.
2. **Escalation.** A second caller, sometimes posing as police, confirms the story and adds urgency and secrecy.
3. **Remote access.** The victim is asked to install AnyDesk, TeamViewer, QuickSupport or RustDesk and read out the connection code.
4. **Takeover.** With the screen visible, the attacker watches logins, reads one-time codes and instructs the victim to approve "test" transfers or a "safe account" payment. Loans are often taken out in the process.

## Why controls miss it

- The tools are signed, legitimate software.
- The login comes from the victim's own device and IP.
- The victim actively approves each step.

## Defensive ideas

- **Banking apps** can detect active screen sharing or accessibility overlays and block sensitive actions while they run.
- **Fraud scoring** can weigh a recent install of a remote access tool, an ongoing phone call during a session, and first-time payees.
- **Call centres** can publish clearly that they never ask customers to install software, and repeat it in the app.
- **Endpoint teams** in companies can alert on remote access tools installed outside approved channels.

> **Takeaway:** social engineering turns legitimate tools into the attack. Detection has to look at context (a call in progress, a fresh install, a new payee), not at the binary.

## For families

The simplest rule to teach: a bank never asks you to install anything. Hang up and call back using the number on the card.
