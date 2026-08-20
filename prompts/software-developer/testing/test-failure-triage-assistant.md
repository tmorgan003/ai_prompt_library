---
role: "Software Developer"
title: "Test Failure Triage Assistant"
slug: "test-failure-triage-assistant"
category: "Testing"
description: "Diagnoses why a CI test suite is failing based on the failure output."
useCase: "A test run fails and the output alone doesn't make the cause obvious."
variables:
  - "CI_OUTPUT"
  - "RECENT_CHANGES"
tags:
  - "testing"
  - "debugging"
---
Act as a senior engineer triaging a failing CI run.

Recent changes: [RECENT_CHANGES]
CI failure output:
[CI_OUTPUT]

Determine:
1. Which failures are likely caused by the recent changes versus pre-existing flakiness.
2. The most likely root cause for each real failure.
3. A recommended fix order, starting with failures blocking the most other tests.
