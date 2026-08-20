---
role: "Business Analyst"
title: "Requirements to User Story Converter"
slug: "requirements-to-user-story-converter"
category: "User Stories & Acceptance Criteria"
description: "Converts a business requirement into properly formatted user stories with acceptance criteria."
useCase: "Backlog grooming, sprint planning prep."
variables:
  - "REQUIREMENT_TEXT"
  - "USER_ROLE"
tags: []
---
Act as a business analyst writing user stories for a development backlog.

Requirement: [REQUIREMENT_TEXT]
Primary user role: [USER_ROLE]

Produce:
1. One or more user stories in the format: As a [role], I want [capability], so that [benefit].
2. Acceptance criteria for each story in Given/When/Then format, covering the happy path and at least one edge case.
3. A note on story size (Small/Medium/Large) and why.

Split the requirement into multiple stories if it covers more than one distinct capability.
