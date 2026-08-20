---
role: "Salesperson"
title: "Outbound Sequence Planner"
slug: "outbound-sequence-planner"
category: "Prospecting & Outreach"
description: "Plans a multi-touch outbound sequence across email, LinkedIn, and phone."
useCase: "Building a structured cadence for a new target account or persona."
variables:
  - "TARGET_PERSONA"
  - "NUMBER_OF_TOUCHES"
  - "TIMEFRAME"
tags:
  - "prospecting"
  - "cadence"
---
Act as a sales rep planning an outbound sequence.

Target persona: [TARGET_PERSONA]
Number of touches: [NUMBER_OF_TOUCHES]
Timeframe: [TIMEFRAME]

Produce a sequence plan:
1. Each touch with its channel (email, LinkedIn, call, video) and day it goes out.
2. The angle or message theme for each touch, varying rather than repeating the same pitch.
3. The exit criteria: what response (or lack of one) should stop or pause the sequence.
