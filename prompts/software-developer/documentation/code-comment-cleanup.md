---
role: "Software Developer"
title: "Code Comment Cleanup"
slug: "code-comment-cleanup"
category: "Documentation"
description: "Reviews existing comments in code and flags ones that are outdated, misleading, or redundant."
useCase: "Cleaning up an old file before a refactor, or during a documentation audit."
variables:
  - "CODE_WITH_COMMENTS"
tags:
  - "documentation"
  - "cleanup"
---
Act as a senior engineer auditing comments in existing code.

Code:
[CODE_WITH_COMMENTS]

For each comment, classify it as: Accurate and Useful, Outdated (contradicts the code), Redundant (just restates the code), or Missing Context (code needs a comment but has none). List each comment with its classification and, where needed, a corrected or new comment.
