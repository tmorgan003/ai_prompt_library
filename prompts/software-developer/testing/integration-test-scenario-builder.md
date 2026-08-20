---
role: "Software Developer"
title: "Integration Test Scenario Builder"
slug: "integration-test-scenario-builder"
category: "Testing"
description: "Designs integration test scenarios for a feature that spans multiple components or services."
useCase: "Planning test coverage for a feature involving more than one system."
variables:
  - "FEATURE_DESCRIPTION"
  - "COMPONENTS_INVOLVED"
tags:
  - "testing"
---
Act as a senior engineer planning integration tests.

Feature: [FEATURE_DESCRIPTION]
Components involved: [COMPONENTS_INVOLVED]

Design integration test scenarios covering:
1. The full happy path across all components.
2. Failure of each individual component and how the system should behave.
3. Data consistency checks across component boundaries.
4. Any race condition or ordering issue possible given how these components interact.

List each scenario with setup, action, and expected result.
