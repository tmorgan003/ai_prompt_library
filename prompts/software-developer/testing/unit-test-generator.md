---
role: "Software Developer"
title: "Unit Test Generator"
slug: "unit-test-generator"
category: "Testing"
description: "Writes unit tests for a function, including edge cases the developer may not have considered."
useCase: "Adding test coverage to new or existing code."
variables:
  - "CODE_SNIPPET"
  - "TEST_FRAMEWORK"
tags:
  - "testing"
---
Act as a senior engineer writing unit tests.

Test framework: [TEST_FRAMEWORK]
Code to test:
[CODE_SNIPPET]

Write unit tests covering:
1. The primary expected behavior (happy path).
2. Boundary values and empty/null inputs.
3. Error conditions the function is expected to handle.
4. Any branch or conditional path not yet covered.

Name each test to describe exactly what it verifies.
