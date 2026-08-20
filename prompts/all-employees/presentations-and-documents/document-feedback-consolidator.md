---
role: "All Employees"
title: "Document Feedback Consolidator"
slug: "document-feedback-consolidator"
category: "Presentations & Documents"
description: "Consolidates scattered feedback from multiple reviewers into one clear action list."
useCase: "After sending a document for review and getting comments back from several people."
variables:
  - "RAW_FEEDBACK_FROM_REVIEWERS"
tags:
  - "presentations"
  - "collaboration"
---
Act as someone consolidating document review feedback.

Raw feedback from reviewers: [RAW_FEEDBACK_FROM_REVIEWERS]

Produce:
1. Feedback points where reviewers agree, grouped together.
2. Feedback points that conflict between reviewers, flagged for a decision.
3. A prioritized list of changes to make first.
