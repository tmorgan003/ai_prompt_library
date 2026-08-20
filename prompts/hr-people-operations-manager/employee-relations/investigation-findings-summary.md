---
role: "HR/People Operations Manager"
title: "Investigation Findings Summary"
slug: "investigation-findings-summary"
category: "Employee Relations"
description: "Summarizes investigation findings into a clear, factual report."
useCase: "Closing out a formal workplace investigation."
variables:
  - "INVESTIGATION_NOTES"
  - "ALLEGATION_SUMMARY"
tags:
  - "employee-relations"
  - "documentation"
---
Act as an HR professional summarizing an investigation.

Allegation: [ALLEGATION_SUMMARY]
Investigation notes: [INVESTIGATION_NOTES]

Produce a summary with:
1. The allegation as originally reported.
2. Evidence gathered, presented factually without editorializing.
3. A finding stated in terms of what the evidence supports (substantiated, unsubstantiated, inconclusive), not a legal conclusion.
4. Recommended next steps.

Use precise, neutral, factual language throughout.
