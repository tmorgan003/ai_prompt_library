---
role: "Software Developer"
title: "Monitoring and Alerting Gap Finder"
slug: "monitoring-and-alerting-gap-finder"
category: "DevOps/CI-CD & Deployment"
description: "Reviews a service description against its existing alerts to find monitoring gaps."
useCase: "Before or after an incident, to close blind spots in observability."
variables:
  - "SERVICE_DESCRIPTION"
  - "EXISTING_ALERTS"
tags:
  - "devops"
  - "monitoring"
---
Act as a senior DevOps engineer reviewing monitoring coverage.

Service: [SERVICE_DESCRIPTION]
Existing alerts: [EXISTING_ALERTS]

Identify:
1. Failure modes for this service that have no corresponding alert.
2. Alerts that look noisy or likely to cause fatigue (too sensitive, no clear owner, unclear threshold).
3. Recommended new alerts, each with a suggested threshold and severity.
