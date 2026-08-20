---
role: "Data Analyst"
title: "Data Quality Incident Writeup"
slug: "data-quality-incident-writeup"
category: "Data Quality & Governance"
description: "Documents a data quality incident (bad numbers reached a report or decision) for a postmortem."
useCase: "A data error made it into a report or decision and needs to be documented and understood."
variables:
  - "INCIDENT_DESCRIPTION"
  - "IMPACT"
tags:
  - "data-quality"
  - "incident"
---
Act as a data analyst writing up a data quality incident.

Incident: [INCIDENT_DESCRIPTION]
Impact: [IMPACT]

Write an incident summary with:
1. What went wrong and where in the pipeline it originated.
2. How it was detected, and how long it went undetected.
3. Who and what was affected by the bad data.
4. Preventive measures to catch this class of issue earlier next time.
