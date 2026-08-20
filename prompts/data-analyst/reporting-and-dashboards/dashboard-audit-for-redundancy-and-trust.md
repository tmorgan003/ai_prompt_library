---
role: "Data Analyst"
title: "Dashboard Audit for Redundancy and Trust"
slug: "dashboard-audit-for-redundancy-and-trust"
category: "Reporting & Dashboards"
description: "Audits a set of existing dashboards or reports for redundancy, inconsistent metric definitions, and low usage."
useCase: "Cleaning up a sprawling BI environment with too many overlapping reports."
variables:
  - "DASHBOARD_INVENTORY"
tags:
  - "reporting"
  - "governance"
---
Act as a data analyst auditing a dashboard inventory.

Dashboard inventory (names, purposes, owners): [DASHBOARD_INVENTORY]

Identify:
1. Dashboards that likely overlap or duplicate each other based on their stated purpose.
2. Dashboards with no clear owner, which are a governance risk.
3. A consolidation recommendation: which dashboards to merge, retire, or keep as-is.
