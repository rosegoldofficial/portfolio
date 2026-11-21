---
n: 4
slug: hardening-a-minecraft-network
tag: hardening
title: "Hardening a Minecraft server network: the mistakes I see most"
lead: "I run a Minecraft network with a lobby, two game modes and servers split into sectors, and I know many owners on the Polish scene. Most compromises I hear about are not clever exploits. They are a handful of configuration mistakes that repeat from network to network."
date: 2026-11-21
---

## 1. Backend servers reachable from the internet

In a proxied network (Velocity or BungeeCord) the backend servers run with `online-mode=false`, because the proxy handles authentication. If a backend port is reachable directly, anyone can connect to it with any username, including an administrator's, and the server will believe them.

**Fix:** firewall the backends so they only accept connections from the proxy's IP, or bind them to a private network. On Velocity use modern forwarding with a shared secret, so a backend rejects connections that did not come through the proxy.

## 2. Panels and databases on public ports

Game panels, MySQL, Redis and RCON regularly end up listening on `0.0.0.0` with default or reused passwords. Scanners find them within hours.

- Expose only the proxy port and the website.
- Put panels behind a VPN or at least an IP allowlist.
- Bind databases to `127.0.0.1` or the private network.

## 3. Everything runs as root

A single vulnerable plugin then owns the whole machine. Run each server as an unprivileged user or in its own container, with only its own directory mounted.

## 4. Plugins from random sources

“Premium plugin for free” downloads are a common way to plant backdoors that grant OP to a hidden player or open a remote shell. Use plugins from official sources, keep a list of what is installed and why, and review updates on a staging server first.

## 5. SSH with passwords

Use SSH keys, disable password login and root login, and let fail2ban or equivalent rate-limit the rest. My note on reading `auth.log` shows what brute force looks like.

## 6. No tested backups

Griefing, a bad update or ransomware on the host are all survivable with backups that live somewhere else and have actually been restored once.

> **Checklist mindset:** a network is only as strong as its least maintained server. Sectors and modes multiply the number of places where one forgotten port can undo the rest.
