---
role: "Business Analyst"
title: "Acceptance Criteria Reviewer"
slug: "acceptance-criteria-reviewer"
category: "User Stories & Acceptance Criteria"
description: "Reviews existing acceptance criteria for completeness, testability, and edge case coverage."
useCase: "QA prep or story review before a sprint starts."
variables:
  - "USER_STORY"
  - "EXISTING_ACCEPTANCE_CRITERIA"
tags: []
---
Act as a business analyst reviewing acceptance criteria before development starts.

User story: [USER_STORY]
Existing acceptance criteria: [EXISTING_ACCEPTANCE_CRITERIA]

Review and provide:
1. Any criteria that are vague or not objectively testable, rewritten to be testable.
2. Missing edge cases (error states, empty states, permission boundaries, data limits).
3. A final revised acceptance criteria list in Given/When/Then format.
