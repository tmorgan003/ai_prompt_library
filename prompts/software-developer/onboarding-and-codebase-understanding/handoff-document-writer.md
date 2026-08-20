---
role: "Software Developer"
title: "Handoff Document Writer"
slug: "handoff-document-writer"
category: "Onboarding & Codebase Understanding"
description: "Builds a handoff document when leaving a project or team, capturing what a written README won't."
useCase: "Preparing to transition ownership of a project or system to someone else."
variables:
  - "PROJECT_NAME"
  - "KNOWLEDGE_NOTES"
tags:
  - "onboarding"
  - "documentation"
---
Act as a senior engineer writing a project handoff document.

Project: [PROJECT_NAME]
Knowledge notes (raw, unstructured): [KNOWLEDGE_NOTES]

Structure a handoff document with:
1. System overview and where to find deeper documentation.
2. Known issues and workarounds not yet fixed.
3. Tribal knowledge: things you'd only know from working on this, not from reading the code.
4. Key contacts and what each one owns.
5. Anything currently in progress and its status.
