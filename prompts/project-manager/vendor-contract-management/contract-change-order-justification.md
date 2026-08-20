---
role: "Project Manager"
title: "Contract Change Order Justification"
slug: "contract-change-order-justification"
category: "Vendor/Contract Management"
description: "Builds a justification for a contract change order due to scope, timeline, or cost changes."
useCase: "Requesting a formal change order from or to a vendor contract."
variables:
  - "ORIGINAL_SCOPE"
  - "CHANGE_NEEDED"
  - "REASON"
tags:
  - "vendor"
  - "contract"
---
Act as a project manager drafting a contract change order justification.

Original scope: [ORIGINAL_SCOPE]
Change needed: [CHANGE_NEEDED]
Reason for change: [REASON]

Write a justification with:
1. What is changing relative to the original scope.
2. Why the change is necessary, stated factually.
3. Cost and timeline impact.
4. What happens if the change order is not approved.
