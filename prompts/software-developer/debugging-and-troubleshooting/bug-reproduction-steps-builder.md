---
role: "Software Developer"
title: "Bug Reproduction Steps Builder"
slug: "bug-reproduction-steps-builder"
category: "Debugging & Troubleshooting"
description: "Turns a vague bug report into a precise, reproducible set of steps."
useCase: "Triaging an incoming bug report that lacks clear repro steps."
variables:
  - "BUG_REPORT"
  - "SYSTEM_CONTEXT"
tags:
  - "debugging"
  - "qa"
---
Act as a senior engineer turning a vague bug report into a reproducible test case.

System context: [SYSTEM_CONTEXT]
Raw bug report: [BUG_REPORT]

Produce:
1. A numbered list of exact steps to reproduce, filling gaps with the most likely assumption and marking each assumption clearly.
2. Expected behavior versus actual behavior.
3. Environment details still needed from the reporter (browser, version, data state) to confirm repro.
4. A guess at severity and why.
