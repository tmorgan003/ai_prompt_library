---
role: "Product Manager"
title: "Edge Case Discovery for a Feature Spec"
slug: "edge-case-discovery-for-a-feature-spec"
category: "Requirements & Specs"
description: "Reviews a feature spec and surfaces edge cases the initial draft likely missed."
useCase: "Reviewing a spec before it goes to engineering for estimation."
variables:
  - "FEATURE_SPEC"
tags:
  - "specs"
---
Act as a product manager reviewing a feature spec for gaps.

Spec: [FEATURE_SPEC]

Identify:
1. Edge cases involving empty states, permission boundaries, and unusual user input.
2. What happens on failure (network error, third-party dependency down, partial completion).
3. Cross-platform or localization considerations not addressed.
4. Any requirement that reads as a solution rather than a testable outcome.
