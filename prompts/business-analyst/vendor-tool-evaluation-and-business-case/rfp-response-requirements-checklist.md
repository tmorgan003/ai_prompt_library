---
role: "Business Analyst"
title: "RFP Response Requirements Checklist"
slug: "rfp-response-requirements-checklist"
category: "Vendor/Tool Evaluation & Business Case"
description: "Converts internal requirements into a structured checklist for evaluating incoming RFP responses."
useCase: "Reviewing vendor RFP responses against what was actually asked for."
variables:
  - "RFP_REQUIREMENTS"
  - "VENDOR_RESPONSE"
tags: []
---
Act as a business analyst reviewing an RFP response against stated requirements.

RFP requirements: [RFP_REQUIREMENTS]
Vendor response: [VENDOR_RESPONSE]

Produce a table: Requirement, Addressed in Response (Yes/Partial/No), Vendor's Stated Approach, Concern or Follow-Up Needed.

Flag any requirement the vendor response ignored entirely.
