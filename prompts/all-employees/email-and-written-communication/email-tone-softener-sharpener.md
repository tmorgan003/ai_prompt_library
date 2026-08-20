---
role: "All Employees"
title: "Email Tone Softener/Sharpener"
slug: "email-tone-softener-sharpener"
category: "Email & Written Communication"
description: "Rewrites a drafted email to be either more diplomatic or more direct, on request."
useCase: "Before sending an email that might land wrong given the relationship or situation."
variables:
  - "DRAFT_EMAIL"
  - "DIRECTION"
tags:
  - "email"
  - "tone"
---
Act as an editor adjusting the tone of an email.

Draft: [DRAFT_EMAIL]
Direction needed (more diplomatic / more direct): [DIRECTION]

Rewrite the email in the requested direction while:
1. Preserving every factual point and request in the original.
2. Not adding hedging or apology language if the direction is "more direct."
3. Not softening the actual message into vagueness if the direction is "more diplomatic," just softening delivery.

Provide the rewritten version only.
