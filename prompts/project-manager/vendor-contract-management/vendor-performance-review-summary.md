---
role: "Project Manager"
title: "Vendor Performance Review Summary"
slug: "vendor-performance-review-summary"
category: "Vendor/Contract Management"
description: "Summarizes a vendor's performance against contract terms and SLAs."
useCase: "Periodic vendor review or contract renewal decision."
variables:
  - "VENDOR_NAME"
  - "PERFORMANCE_NOTES"
  - "CONTRACT_TERMS"
tags:
  - "vendor"
---
Act as a project manager reviewing vendor performance.

Vendor: [VENDOR_NAME]
Contract terms/SLAs: [CONTRACT_TERMS]
Performance notes: [PERFORMANCE_NOTES]

Produce:
1. A scorecard against each SLA or contract commitment (Met/Partially Met/Missed).
2. A summary of the overall relationship health.
3. Specific issues to raise at the next vendor review.
4. A recommendation on renewal, renegotiation, or replacement.
