---
role: "Project Manager"
title: "Risk Response Strategy Selector"
slug: "risk-response-strategy-selector"
category: "Risk & Issue Management"
description: "Recommends a risk response strategy (avoid, mitigate, transfer, accept) for each risk in a list."
useCase: "Deciding how to actually respond to identified risks, not just track them."
variables:
  - "RISK_LIST"
  - "PROJECT_CONTEXT"
tags:
  - "risk"
---
Act as a project manager selecting risk response strategies.

Project context: [PROJECT_CONTEXT]
Risk list: [RISK_LIST]

For each risk, recommend:
1. A response strategy: Avoid, Mitigate, Transfer, or Accept.
2. A one-line justification for the chosen strategy.
3. The specific action that implements it.
4. A residual risk statement: what risk remains even after the response.
