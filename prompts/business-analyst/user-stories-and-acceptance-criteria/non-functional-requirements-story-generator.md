---
role: "Business Analyst"
title: "Non-Functional Requirements Story Generator"
slug: "non-functional-requirements-story-generator"
category: "User Stories & Acceptance Criteria"
description: "Generates non-functional requirement stories (performance, security, accessibility, auditability) often missed in feature-focused backlogs."
useCase: "Ensuring non-functional needs get tracked as real backlog items, not afterthoughts."
variables:
  - "SYSTEM_OR_FEATURE"
  - "COMPLIANCE_CONTEXT"
tags: []
---
Act as a business analyst ensuring non-functional requirements are captured.

System or feature: [SYSTEM_OR_FEATURE]
Compliance or regulatory context: [COMPLIANCE_CONTEXT]

Generate user stories covering:
1. Performance (response time, load expectations).
2. Security and access control.
3. Auditability and logging.
4. Accessibility.
5. Data retention or privacy, if relevant to the compliance context.

Format each as a testable story with acceptance criteria, not a vague statement like "system should be secure."
