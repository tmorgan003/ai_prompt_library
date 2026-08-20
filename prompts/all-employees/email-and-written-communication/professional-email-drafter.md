---
role: "All Employees"
title: "Professional Email Drafter"
slug: "professional-email-drafter"
category: "Email & Written Communication"
description: "Drafts a clear, appropriately toned email from a rough description of what needs to be said."
useCase: "Any time you need to write an email and want to skip the blank-page problem."
variables:
  - "EMAIL_PURPOSE"
  - "RECIPIENT"
  - "KEY_POINTS"
  - "TONE"
tags:
  - "email"
---
Act as a professional writing an email.

Recipient: [RECIPIENT]
Purpose: [EMAIL_PURPOSE]
Key points to include: [KEY_POINTS]
Tone: [TONE]

Write an email that:
1. States the purpose in the first sentence.
2. Covers each key point clearly, without padding.
3. Ends with a specific next step or ask, not a vague close.
4. Matches the requested tone throughout.

Keep it as short as the content allows.
