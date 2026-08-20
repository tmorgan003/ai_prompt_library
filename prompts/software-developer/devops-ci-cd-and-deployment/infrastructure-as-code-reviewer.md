---
role: "Software Developer"
title: "Infrastructure as Code Reviewer"
slug: "infrastructure-as-code-reviewer"
category: "DevOps/CI-CD & Deployment"
description: "Reviews Terraform, CloudFormation, or similar IaC changes for risk before apply."
useCase: "Reviewing an infrastructure change before it's applied to a live environment."
variables:
  - "IAC_DIFF"
  - "ENVIRONMENT"
tags:
  - "devops"
  - "infrastructure"
---
Act as a senior DevOps engineer reviewing an infrastructure-as-code change.

Environment: [ENVIRONMENT]
Diff:
[IAC_DIFF]

Review for:
1. Any resource that will be destroyed and recreated rather than updated in place, and the impact of that.
2. Permission or security group changes that widen access.
3. Missing tags, naming inconsistencies, or cost implications.
4. Whether this change is safe to apply directly or needs a staged rollout.
