---
role: "Product Manager"
title: "Feature Prioritization Scorer"
slug: "feature-prioritization-scorer"
category: "Roadmap & Prioritization"
description: "Scores a list of candidate features using a stated prioritization framework."
useCase: "Roadmap planning when the backlog has more ideas than capacity."
variables:
  - "FEATURE_LIST"
  - "FRAMEWORK"
tags:
  - "prioritization"
---
Act as a product manager prioritizing a feature list.

Framework to use (e.g. RICE, value vs. effort, Kano): [FRAMEWORK]
Feature list: [FEATURE_LIST]

For each feature, produce a score using the stated framework, with the reasoning behind each component of the score. Rank the list by final score and flag any feature where the score feels counterintuitive, worth a second look.
