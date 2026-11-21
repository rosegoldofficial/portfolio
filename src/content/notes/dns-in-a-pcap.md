---
n: 5
slug: dns-in-a-pcap
tag: network
title: "What DNS tells you in a packet capture"
lead: "When I open an unfamiliar capture in Wireshark, I start with DNS. It is small, mostly unencrypted on home and office networks, and it shows what a machine was trying to reach before anything else happened."
date: 2026-11-21
---

## Start with the overview

`Statistics → DNS` gives counts of queries, response codes and record types. Then filter the traffic itself:

```
dns
dns.flags.response == 0
dns.flags.rcode == 3
dns.qry.type == 16
```

The lines show all DNS, only queries, NXDOMAIN answers and TXT queries.

## Patterns worth a second look

1. **Bursts of NXDOMAIN.** Many failed lookups for random-looking names can mean malware using a domain generation algorithm to find its server.
2. **Very long subdomains.** `dns.qry.name.len > 50` surfaces names like `a8f3…c2.example.top`. Data can be smuggled out inside the query itself (DNS tunnelling).
3. **Lots of TXT queries** to one domain from one host. TXT records are a convenient channel for commands.
4. **Regular timing.** A query every 60 seconds to the same rare domain looks like a beacon, not a person browsing.
5. **Fresh lookalike domains.** Copy suspicious names out and check their registration date and reputation.

> **Context first:** none of these is proof on its own. CDNs produce long names, security tools produce NXDOMAINs. The question is whether the pattern fits the host's normal behaviour.

## Following a lead

Right-click a suspicious query → **Apply as Filter**, then switch to `ip.addr == <answer>` to see what the host did with the resolved address. If DNS over HTTPS is in use, you will see far less here and need endpoint or resolver logs instead.
