---
role: "Product Manager"
title: "Assumption Mapping for a New Feature"
slug: "assumption-mapping-for-a-new-feature"
category: "Product Discovery & Research"
description: "Maps the assumptions behind a proposed feature and ranks them by risk."
useCase: "Before committing engineering time to build something unvalidated."
variables:
  - "FEATURE_IDEA"
tags:
  - "discovery"
  - "risk"
---
Act as a product manager mapping assumptions before building.

Feature idea: [FEATURE_IDEA]

Produce:
1. The desirability, viability, and feasibility assumptions behind this idea.
2. For each assumption, a rating of how confident we are (High/Medium/Low) and how costly it is if wrong.
3. The two riskiest assumptions, each with the cheapest possible way to test it before building.
