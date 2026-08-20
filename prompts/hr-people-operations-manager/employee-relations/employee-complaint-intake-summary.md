---
role: "HR/People Operations Manager"
title: "Employee Complaint Intake Summary"
slug: "employee-complaint-intake-summary"
category: "Employee Relations"
description: "Structures a raw employee complaint into a clear, neutral intake summary for investigation."
useCase: "Receiving an employee concern that needs to be documented objectively before any investigation begins."
variables:
  - "RAW_COMPLAINT_NOTES"
tags:
  - "employee-relations"
---
Act as an HR professional documenting an employee complaint.

Raw complaint notes: [RAW_COMPLAINT_NOTES]

Produce a neutral intake summary with:
1. What was reported, in factual, non-interpretive language.
2. Parties involved and their roles.
3. Dates and specific incidents mentioned, separated from general characterizations.
4. Questions still needed to move forward with an investigation.

Use neutral language throughout; do not draw conclusions about wrongdoing.
