---
n: 9
slug: reading-ssh-auth-log
tag: logs
title: "Reading an SSH auth log in five minutes"
lead: "Any server with SSH open to the internet is under constant automated login attempts. Reading the authentication log is one of the first blue-team skills worth practising: it shows the noise, and it shows when the noise becomes something else."
date: 2026-11-21
---

## Where the log lives

On Debian and Ubuntu it is `/var/log/auth.log`. On systems with systemd you can also use `journalctl -u ssh` (the unit is called `sshd` on some distributions).

## The three lines that matter

```
Failed password for root from 203.0.113.7 port 51234 ssh2
Invalid user admin from 198.51.100.23 port 40022
Accepted publickey for mikolaj from 192.0.2.10 port 50321 ssh2
```

The first two are attempts, the last one is a successful login.

## Quick triage commands

```
grep "Failed password" /var/log/auth.log | awk '{print $(NF-3)}' | sort | uniq -c | sort -nr | head
grep "Invalid user" /var/log/auth.log | awk '{print $8}' | sort | uniq -c | sort -nr | head
grep "Accepted" /var/log/auth.log
```

The first lists the IPs with the most failed passwords, the second shows which usernames bots guess (`admin`, `test`, `ubuntu`, `postgres`), the third lists every successful login.

## What is normal and what is not

- Thousands of failures from rotating IPs: background noise. Key-only login and fail2ban handle it.
- A successful login from an IP that just produced many failures: investigate immediately.
- A success at an unusual hour, from a new country, or for an account that never logs in interactively: investigate.
- `Accepted password` on a server that should only allow keys: the configuration is not what you think.

> **Good baseline:** disable password and root login, allow keys only, and alert on every `Accepted` line from an IP you have not seen before.
