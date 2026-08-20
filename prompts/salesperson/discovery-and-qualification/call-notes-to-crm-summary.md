---
role: "Salesperson"
title: "Call Notes to CRM Summary"
slug: "call-notes-to-crm-summary"
category: "Discovery & Qualification"
description: "Converts raw call notes into a clean CRM-ready opportunity summary."
useCase: "Right after a sales call, before logging it in the CRM."
variables:
  - "RAW_CALL_NOTES"
  - "DEAL_STAGE"
tags:
  - "discovery"
  - "crm"
---
Act as a sales rep logging a call summary.

Deal stage: [DEAL_STAGE]
Raw call notes: [RAW_CALL_NOTES]

Produce a CRM-ready summary with:
1. Key pain points expressed.
2. Stated budget, timeline, and decision process, if mentioned.
3. Next steps and who owns each one.
4. A recommended next deal stage based on what was covered.
