---
role: "Software Developer"
title: "CI Pipeline Failure Diagnosis"
slug: "ci-pipeline-failure-diagnosis"
category: "DevOps/CI-CD & Deployment"
description: "Diagnoses why a CI/CD pipeline step is failing based on logs."
useCase: "A pipeline build or deploy step fails and the cause isn't obvious from a quick glance."
variables:
  - "PIPELINE_LOG"
  - "PIPELINE_CONFIG"
tags:
  - "devops"
  - "ci-cd"
---
Act as a senior DevOps engineer diagnosing a pipeline failure.

Pipeline config (relevant section): [PIPELINE_CONFIG]
Failure log:
[PIPELINE_LOG]

Determine:
1. The specific step and command that failed.
2. The most likely root cause (config error, dependency issue, environment mismatch, flaky step).
3. A recommended fix.
4. Whether this looks like a one-off failure or a systemic issue worth a pipeline change.
