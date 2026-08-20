---
role: "Software Developer"
title: "Test Coverage Gap Finder"
slug: "test-coverage-gap-finder"
category: "Testing"
description: "Reviews existing tests against the code they cover and identifies untested paths."
useCase: "Auditing test coverage before a release or refactor."
variables:
  - "CODE_SNIPPET"
  - "EXISTING_TESTS"
tags:
  - "testing"
  - "code-review"
---
Act as a senior engineer auditing test coverage.

Code:
[CODE_SNIPPET]

Existing tests:
[EXISTING_TESTS]

Identify:
1. Branches, conditions, or error paths in the code with no corresponding test.
2. Edge cases (empty input, max/min values, concurrent access if relevant) not currently tested.
3. Tests that look brittle (tightly coupled to implementation rather than behavior).

List missing tests as ready-to-write test case descriptions.
