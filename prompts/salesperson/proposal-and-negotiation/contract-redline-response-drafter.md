---
role: "Salesperson"
title: "Contract Redline Response Drafter"
slug: "contract-redline-response-drafter"
category: "Proposal & Negotiation"
description: "Drafts a response to a prospect's legal redlines on a contract."
useCase: "Navigating contract negotiation with a prospect's legal or procurement team."
variables:
  - "REDLINE_SUMMARY"
  - "COMPANY_POSITION"
tags:
  - "negotiation"
  - "contracts"
---
Act as a sales rep coordinating a contract negotiation response.

Redline summary: [REDLINE_SUMMARY]
Company's position on each point: [COMPANY_POSITION]

Draft a response that:
1. Addresses each redlined point individually, stating what's accepted, what's countered, and why.
2. Keeps the tone collaborative, framed as working toward a deal both sides want, not adversarial.
3. Flags which points, if any, are true dealbreakers requiring escalation.
