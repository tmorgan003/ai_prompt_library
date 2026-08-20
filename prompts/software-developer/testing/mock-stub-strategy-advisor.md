---
role: "Software Developer"
title: "Mock/Stub Strategy Advisor"
slug: "mock-stub-strategy-advisor"
category: "Testing"
description: "Recommends what to mock, stub, or fake versus what to test with real dependencies."
useCase: "Deciding test isolation strategy for code with external dependencies."
variables:
  - "CODE_SNIPPET"
  - "DEPENDENCIES"
tags:
  - "testing"
---
Act as a senior engineer designing a test isolation strategy.

Code:
[CODE_SNIPPET]

External dependencies: [DEPENDENCIES]

For each dependency, recommend:
1. Whether to mock, stub, use a test double, or call the real dependency in tests.
2. Why, based on speed, determinism, and cost of the real call.
3. What behavior of the dependency the mock must accurately represent to keep the test meaningful.
