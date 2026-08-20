---
role: "Software Developer"
title: "Performance Bottleneck Investigator"
slug: "performance-bottleneck-investigator"
category: "Debugging & Troubleshooting"
description: "Given code and a performance symptom, suggests likely bottlenecks and how to confirm them."
useCase: "Diagnosing slow code before reaching for a profiler, or interpreting profiler output."
variables:
  - "CODE_SNIPPET"
  - "SYMPTOM_DESCRIPTION"
tags:
  - "debugging"
  - "performance"
---
Act as a senior engineer diagnosing a performance issue.

Symptom: [SYMPTOM_DESCRIPTION]
Code:
[CODE_SNIPPET]

Identify:
1. The most likely bottlenecks in this code (algorithmic complexity, I/O, N+1 queries, unnecessary re-renders, blocking calls).
2. For each candidate, how to confirm it's the actual cause (specific tool, log, or measurement).
3. A prioritized fix order if more than one issue is found.
