---
role: "Project Manager"
title: "Statement of Work Reviewer"
slug: "statement-of-work-reviewer"
category: "Vendor/Contract Management"
description: "Reviews a draft statement of work for gaps, ambiguity, and missing deliverable definitions."
useCase: "Before signing off on a vendor SOW."
variables:
  - "SOW_DRAFT"
  - "PROJECT_NEEDS"
tags:
  - "vendor"
  - "contract"
---
Act as a project manager reviewing a statement of work.

Project needs: [PROJECT_NEEDS]
SOW draft: [SOW_DRAFT]

Review for:
1. Deliverables that are vaguely defined or lack acceptance criteria.
2. Missing timeline, milestone payment, or change control terms.
3. Assumptions the vendor has baked in that should be confirmed.
4. Gaps between the SOW and the stated project needs.
