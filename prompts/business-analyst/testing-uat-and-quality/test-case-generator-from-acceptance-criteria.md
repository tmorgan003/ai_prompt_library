---
role: "Business Analyst"
title: "Test Case Generator from Acceptance Criteria"
slug: "test-case-generator-from-acceptance-criteria"
category: "Testing, UAT & Quality"
description: "Converts acceptance criteria into a set of structured test cases."
useCase: "Handoff from BA to QA, or self-testing before UAT."
variables:
  - "USER_STORY"
  - "ACCEPTANCE_CRITERIA"
tags: []
---
Act as a business analyst writing test cases from acceptance criteria.

User story: [USER_STORY]
Acceptance criteria: [ACCEPTANCE_CRITERIA]

Produce a table: Test Case ID, Scenario, Preconditions, Steps, Expected Result, Priority (High/Medium/Low).

Include at least one negative test case and one boundary/edge case per acceptance criterion.
