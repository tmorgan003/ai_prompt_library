---
role: "Business Analyst"
title: "Risk Register Builder"
slug: "risk-register-builder"
category: "Risk, Impact & Change Management"
description: "Generates a structured risk register from a project description and known concerns."
useCase: "Project planning or steering committee risk review."
variables:
  - "PROJECT_NAME"
  - "KNOWN_CONCERNS"
tags: []
---
Act as a business analyst building a project risk register.

Project: [PROJECT_NAME]
Known concerns: [KNOWN_CONCERNS]

Produce a table: Risk ID, Risk Description, Category (Technical/Resource/Schedule/Scope/Vendor/Compliance), Likelihood (High/Medium/Low), Impact (High/Medium/Low), Mitigation, Owner.

Add three risks not explicitly mentioned but likely for a project of this type, clearly marked as analyst-identified.
