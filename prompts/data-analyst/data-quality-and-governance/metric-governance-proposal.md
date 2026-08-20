---
role: "Data Analyst"
title: "Metric Governance Proposal"
slug: "metric-governance-proposal"
category: "Data Quality & Governance"
description: "Proposes a governance process for how a key business metric is defined, owned, and changed."
useCase: "A metric has caused confusion because multiple teams define it differently."
variables:
  - "METRIC_NAME"
  - "CURRENT_CONFUSION"
tags:
  - "data-quality"
  - "governance"
---
Act as a data analyst proposing metric governance.

Metric: [METRIC_NAME]
Current confusion: [CURRENT_CONFUSION]

Propose:
1. A single canonical definition, with inclusion and exclusion rules stated precisely.
2. Who should own this definition going forward.
3. A change control process: what happens if someone wants to redefine it later.
4. Where the canonical definition should live so it's discoverable.
