---
role: "Software Developer"
title: "Coding Standards Checker"
slug: "coding-standards-checker"
category: "Code Review & Quality"
description: "Checks a code snippet against a stated team style guide or convention set."
useCase: "Enforcing consistency before merge, especially on a team without full linter coverage."
variables:
  - "CODE_SNIPPET"
  - "TEAM_STANDARDS"
tags:
  - "code-review"
  - "standards"
---
Act as a code reviewer enforcing team coding standards.

Team standards: [TEAM_STANDARDS]
Code:
[CODE_SNIPPET]

Check the code against the stated standards and list every violation with the line or section it applies to. For each violation, give the corrected version. If the code fully complies, say so.
