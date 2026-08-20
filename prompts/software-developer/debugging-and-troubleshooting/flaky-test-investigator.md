---
role: "Software Developer"
title: "Flaky Test Investigator"
slug: "flaky-test-investigator"
category: "Debugging & Troubleshooting"
description: "Analyzes an intermittently failing test to identify likely sources of flakiness."
useCase: "A test fails inconsistently in CI and the cause isn't obvious."
variables:
  - "TEST_CODE"
  - "FAILURE_PATTERN"
tags:
  - "debugging"
  - "testing"
---
Act as a senior engineer investigating a flaky test.

Test code:
[TEST_CODE]

Failure pattern observed: [FAILURE_PATTERN]

Identify:
1. Common causes of flakiness that apply here (timing/race conditions, shared state, unmocked external calls, test order dependency, non-deterministic data).
2. Which of these is most likely given the code and failure pattern.
3. A specific fix or isolation step to confirm the cause.
