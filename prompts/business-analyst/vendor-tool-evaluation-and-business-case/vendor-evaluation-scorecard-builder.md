---
role: "Business Analyst"
title: "Vendor Evaluation Scorecard Builder"
slug: "vendor-evaluation-scorecard-builder"
category: "Vendor/Tool Evaluation & Business Case"
description: "Builds a weighted scorecard for comparing vendors or tools against business requirements."
useCase: "RFP evaluation or tool selection process."
variables:
  - "REQUIREMENTS_LIST"
  - "VENDOR_OPTIONS"
tags: []
---
Act as a business analyst building a vendor evaluation scorecard.

Requirements: [REQUIREMENTS_LIST]
Vendor options: [VENDOR_OPTIONS]

Produce:
1. A weighted criteria list derived from the requirements, with suggested weight percentages that sum to 100.
2. A scorecard template: Criteria, Weight, Vendor A Score, Vendor B Score, Vendor C Score, Notes.
3. Three questions to ask each vendor that the requirements list doesn't already answer.
