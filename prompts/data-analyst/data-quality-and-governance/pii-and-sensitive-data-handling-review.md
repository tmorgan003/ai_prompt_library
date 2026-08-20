---
role: "Data Analyst"
title: "PII and Sensitive Data Handling Review"
slug: "pii-and-sensitive-data-handling-review"
category: "Data Quality & Governance"
description: "Reviews a dataset description for fields that likely need special handling under privacy or compliance policy."
useCase: "Assessing a new dataset or report for sensitive data exposure before it's shared broadly."
variables:
  - "DATASET_DESCRIPTION"
  - "COMPLIANCE_CONTEXT"
tags:
  - "data-quality"
  - "governance"
  - "compliance"
---
Act as a data analyst reviewing a dataset for sensitive data handling.

Compliance context: [COMPLIANCE_CONTEXT]
Dataset description: [DATASET_DESCRIPTION]

Identify:
1. Fields that likely qualify as personally identifiable or otherwise sensitive.
2. Whether the intended use and audience for this data is appropriate given that sensitivity.
3. Masking, aggregation, or access control options if the data needs to be shared more broadly.

Flag this as a starting point for review, not a compliance determination.
