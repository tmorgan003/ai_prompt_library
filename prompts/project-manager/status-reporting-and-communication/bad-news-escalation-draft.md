---
role: "Project Manager"
title: "Bad News Escalation Draft"
slug: "bad-news-escalation-draft"
category: "Status Reporting & Communication"
description: "Drafts a clear escalation message for a project problem that needs leadership attention now."
useCase: "A project has hit a real problem (budget, timeline, scope, vendor) that needs to go up the chain."
variables:
  - "ISSUE_DESCRIPTION"
  - "IMPACT"
  - "RECIPIENT_ROLE"
tags:
  - "status-reporting"
  - "escalation"
---
Act as a project manager escalating a project issue.

Issue: [ISSUE_DESCRIPTION]
Impact: [IMPACT]
Recipient role: [RECIPIENT_ROLE]

Write an escalation message that:
1. States the issue and its impact in the first two sentences, no burying the lede.
2. Explains what has already been tried or considered.
3. States exactly what decision or support is needed, and by when.
4. Uses a direct, calm tone with no defensive language.
