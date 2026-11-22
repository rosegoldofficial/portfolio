---
n: 14
slug: first-sigma-rule
tag: detection
title: "Writing a first Sigma rule: detecting remote access tools installed by users"
lead: "Sigma is a vendor-neutral format for detection rules. You describe what to look for in YAML once and convert it to the query language of your SIEM. This note walks through a small, realistic rule: a user starting a remote access tool that is not on the approved list."
date: 2026-12-05
---

## The idea

Remote access tools are legitimate, but in many organisations only IT should use them. A user launching one from their Downloads folder is worth a look, especially in finance or customer support teams.

## The rule

```yaml
title: Remote Access Tool Started From User Downloads
id: 5f3c1d2e-7a41-4b8e-9c6f-0d2a9b1e4c77
status: experimental
description: Detects common remote access tools launched from a user's Downloads folder.
logsource:
  category: process_creation
  product: windows
detection:
  selection_tool:
    Image|endswith:
      - '\AnyDesk.exe'
      - '\TeamViewer.exe'
      - '\rustdesk.exe'
  selection_path:
    Image|contains: '\Downloads\'
  condition: selection_tool and selection_path
falsepositives:
  - IT staff testing tools
level: medium
tags:
  - attack.command_and_control
  - attack.t1219
```

## Reading it

- **logsource** says which events the rule applies to: Windows process creation (Sysmon event ID 1 or Security 4688 with command line logging).
- **selection_tool** and **selection_path** are two conditions. Both must match.
- **tags** map the rule to MITRE ATT&CK T1219, Remote Access Software.

## Making it useful

1. Convert it with the Sigma CLI for your backend and run it against a week of history before enabling alerts.
2. Add an exclusion for the IT group instead of loosening the rule.
3. Pair it with a second rule for the same tools making outbound connections from non-IT hosts.

> **Takeaway:** good first rules are narrow, explainable and tied to a real fraud or intrusion pattern. Breadth comes later.
