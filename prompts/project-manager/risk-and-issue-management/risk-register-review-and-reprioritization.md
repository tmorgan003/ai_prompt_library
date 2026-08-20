---
role: "Project Manager"
title: "Risk Register Review and Reprioritization"
slug: "risk-register-review-and-reprioritization"
category: "Risk & Issue Management"
description: "Reviews an existing risk register and reprioritizes based on current project stage."
useCase: "Periodic risk register review, especially at a phase transition."
variables:
  - "EXISTING_RISK_REGISTER"
  - "CURRENT_PROJECT_STAGE"
tags:
  - "risk"
---
Act as a project manager reviewing a risk register.

Current project stage: [CURRENT_PROJECT_STAGE]
Existing risk register: [EXISTING_RISK_REGISTER]

Review and:
1. Flag risks that should be closed (no longer relevant at this stage).
2. Flag risks whose likelihood or impact has changed given the current stage.
3. Suggest two risks not currently listed that are common at this stage of a project like this.
4. Reorder the list by current priority.
