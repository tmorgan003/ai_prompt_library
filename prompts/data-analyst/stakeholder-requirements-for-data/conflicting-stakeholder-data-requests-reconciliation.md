---
role: "Data Analyst"
title: "Conflicting Stakeholder Data Requests Reconciliation"
slug: "conflicting-stakeholder-data-requests-reconciliation"
category: "Stakeholder Requirements for Data"
description: "Reconciles two stakeholders asking for the same data cut in different, conflicting ways."
useCase: "Two requesters want essentially the same analysis but define it differently."
variables:
  - "REQUEST_A"
  - "REQUEST_B"
tags:
  - "requirements"
  - "stakeholder-management"
---
Act as a data analyst reconciling conflicting data requests.

Request A: [REQUEST_A]
Request B: [REQUEST_B]

Produce:
1. Where the two requests actually agree, once definitional differences are stripped away.
2. Where they genuinely conflict and can't both be satisfied by one report.
3. A recommended approach: one unified report with clear labeling, or two separate outputs, with reasoning.
