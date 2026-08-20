---
role: "Software Developer"
title: "Pull Request Self-Review Checklist"
slug: "pull-request-self-review-checklist"
category: "Code Review & Quality"
description: "Runs your own diff through a structured self-review before requesting a human reviewer."
useCase: "Right before opening a pull request."
variables:
  - "DIFF_OR_CODE"
  - "LANGUAGE"
  - "PR_PURPOSE"
tags:
  - "code-review"
  - "git"
---
Act as a senior engineer performing a self-review on a pull request.

Language: [LANGUAGE]
Purpose of this PR: [PR_PURPOSE]
Diff or code:
[DIFF_OR_CODE]

Review for:
1. Logic errors or edge cases not handled.
2. Naming, readability, and consistency with common conventions for this language.
3. Missing tests for new logic or changed behavior.
4. Anything that looks like a leftover debug statement, TODO, or dead code.
5. Security concerns (input validation, secrets, injection risk) if applicable.

Output as a numbered list of findings with severity (Blocker/Should Fix/Nit). If nothing is wrong, say so plainly.
