---
role: "Product Manager"
title: "Product Requirements Document Builder"
slug: "product-requirements-document-builder"
category: "Requirements & Specs"
description: "Builds a full PRD from a feature idea and known context."
useCase: "Starting formal requirements work for a feature that's been prioritized."
variables:
  - "FEATURE_IDEA"
  - "PROBLEM_CONTEXT"
  - "SUCCESS_METRIC"
tags:
  - "specs"
---
Act as a product manager writing a product requirements document.

Feature: [FEATURE_IDEA]
Problem context: [PROBLEM_CONTEXT]
Success metric: [SUCCESS_METRIC]

Produce a PRD with:
1. Problem and context.
2. Goals and success metrics.
3. User stories or scenarios.
4. Functional requirements.
5. Out of scope, stated explicitly.
6. Open questions and risks.
