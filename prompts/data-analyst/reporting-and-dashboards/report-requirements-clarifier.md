---
role: "Data Analyst"
title: "Report Requirements Clarifier"
slug: "report-requirements-clarifier"
category: "Reporting & Dashboards"
description: "Turns a vague reporting request into a clarified, buildable set of requirements."
useCase: "Receiving a reporting request like 'can you show me our numbers' with no further detail."
variables:
  - "RAW_REQUEST"
  - "REQUESTER_ROLE"
tags:
  - "reporting"
---
Act as a data analyst clarifying a reporting request.

Requester role: [REQUESTER_ROLE]
Raw request: [RAW_REQUEST]

Produce:
1. A restated version of the request as a specific, answerable question.
2. Clarifying questions to ask before building anything (time period, segment, definition of key terms, format needed).
3. A guess at what decision this report is meant to support, to confirm you're building the right thing.
