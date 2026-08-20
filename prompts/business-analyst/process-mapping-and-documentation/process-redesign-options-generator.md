---
role: "Business Analyst"
title: "Process Redesign Options Generator"
slug: "process-redesign-options-generator"
category: "Process Mapping & Documentation"
description: "Given an as-is process and known pain points, generates two or three redesign options with tradeoffs."
useCase: "Presenting process improvement options to a steering committee or process owner."
variables:
  - "PROCESS_NAME"
  - "AS_IS_SUMMARY"
  - "PAIN_POINTS"
tags: []
---
Act as a business analyst proposing process redesign options.

Process: [PROCESS_NAME]
As-is summary: [AS_IS_SUMMARY]
Known pain points: [PAIN_POINTS]

Produce three redesign options, each with:
1. A short description of the change.
2. What problem it solves.
3. Effort estimate (Low/Medium/High).
4. Risk or tradeoff of choosing this option.

Close with a one-paragraph recommendation and why.
