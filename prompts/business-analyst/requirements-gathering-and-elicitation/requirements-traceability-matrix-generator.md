---
role: "Business Analyst"
title: "Requirements Traceability Matrix Generator"
slug: "requirements-traceability-matrix-generator"
category: "Requirements Gathering & Elicitation"
description: "Builds a traceability matrix linking business requirements to functional requirements, test cases, and source."
useCase: "Audit prep, scope verification, or handoff to QA."
variables:
  - "REQUIREMENTS_LIST"
  - "PROJECT_NAME"
tags: []
---
Act as a business analyst building a requirements traceability matrix.

Project: [PROJECT_NAME]
Requirements list:
[REQUIREMENTS_LIST]

Build a matrix with columns: Requirement ID, Business Requirement, Functional Requirement, Source (stakeholder or document), Related Test Case ID (leave blank if not yet defined), Status (Draft/Approved/In Dev/Tested).

Flag any business requirement with no linked functional requirement, and any functional requirement with no clear business justification.
