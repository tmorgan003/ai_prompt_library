---
role: "Business Analyst"
title: "Dashboard Requirements Gatherer"
slug: "dashboard-requirements-gatherer"
category: "Data Analysis & BI Reporting"
description: "Structures a discovery conversation for building a new BI dashboard (MicroStrategy, Power BI, Tableau, or similar)."
useCase: "Before starting dashboard build work."
variables:
  - "DASHBOARD_PURPOSE"
  - "AUDIENCE"
  - "DATA_SOURCES"
tags: []
---
Act as a business analyst gathering requirements for a BI dashboard.

Dashboard purpose: [DASHBOARD_PURPOSE]
Audience: [AUDIENCE]
Known data sources: [DATA_SOURCES]

Produce:
1. A list of the 5-8 core metrics the dashboard must show, each with a one-line definition.
2. Recommended filters or drill-down dimensions.
3. Refresh frequency needed based on how the audience will use it.
4. Open questions about data definitions that could cause disagreement later (e.g. how "active user" or "closed ticket" is defined).
