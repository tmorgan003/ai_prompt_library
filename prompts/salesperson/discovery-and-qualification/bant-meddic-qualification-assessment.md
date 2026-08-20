---
role: "Salesperson"
title: "BANT/MEDDIC Qualification Assessment"
slug: "bant-meddic-qualification-assessment"
category: "Discovery & Qualification"
description: "Assesses an opportunity against a qualification framework based on what's known so far."
useCase: "Deciding whether to keep investing time in an opportunity."
variables:
  - "OPPORTUNITY_NOTES"
  - "FRAMEWORK"
tags:
  - "qualification"
---
Act as a sales rep qualifying an opportunity.

Framework: [FRAMEWORK]
Opportunity notes: [OPPORTUNITY_NOTES]

Produce:
1. An assessment against each element of the framework, based only on what's known.
2. What's still unknown and needs to be confirmed before this can be called well-qualified.
3. A recommendation: keep pursuing, deprioritize, or disqualify.
