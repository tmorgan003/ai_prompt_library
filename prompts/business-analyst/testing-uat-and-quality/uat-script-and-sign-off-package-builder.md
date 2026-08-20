---
role: "Business Analyst"
title: "UAT Script and Sign-Off Package Builder"
slug: "uat-script-and-sign-off-package-builder"
category: "Testing, UAT & Quality"
description: "Builds a full UAT test script with sign-off tracking for business users."
useCase: "Preparing business users to formally test and approve a release."
variables:
  - "FEATURE_LIST"
  - "UAT_PARTICIPANTS"
tags: []
---
Act as a business analyst preparing a UAT package for business users.

Features to test: [FEATURE_LIST]
UAT participants: [UAT_PARTICIPANTS]

Produce:
1. A UAT script per feature: step-by-step actions, expected results, and a Pass/Fail column.
2. Instructions for participants on how to log a defect versus a question.
3. A sign-off summary template with participant name, date, and approval status.
