---
role: "Business Analyst"
title: "Defect Triage Summary"
slug: "defect-triage-summary"
category: "Testing, UAT & Quality"
description: "Organizes a raw list of reported defects into a prioritized triage summary for a defect review meeting."
useCase: "Preparing for a defect triage or bug bash review."
variables:
  - "RAW_DEFECT_LIST"
  - "RELEASE_DEADLINE"
tags: []
---
Act as a business analyst preparing a defect triage summary.

Raw defect list: [RAW_DEFECT_LIST]
Release deadline: [RELEASE_DEADLINE]

Produce a table: Defect ID, Description, Severity (Critical/High/Medium/Low), Suggested Priority for This Release (Fix Now/Fix if Time/Defer), Rationale.

Flag any defect that looks like it could be a duplicate of another based on the description.
