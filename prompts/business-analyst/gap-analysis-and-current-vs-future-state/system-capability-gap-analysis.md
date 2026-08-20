---
role: "Business Analyst"
title: "System Capability Gap Analysis"
slug: "system-capability-gap-analysis"
category: "Gap Analysis & Current vs. Future State"
description: "Compares a system's current capabilities against a target requirement set to identify what's missing."
useCase: "Evaluating whether an existing system can support new requirements, or whether a new system is needed."
variables:
  - "SYSTEM_NAME"
  - "CURRENT_CAPABILITIES"
  - "TARGET_REQUIREMENTS"
tags: []
---
Act as a business analyst assessing system capability gaps.

System: [SYSTEM_NAME]
Current capabilities: [CURRENT_CAPABILITIES]
Target requirements: [TARGET_REQUIREMENTS]

Produce:
1. A table: Requirement, Supported Today (Yes/Partial/No), Gap Description, Suggested Path (Configure/Customize/Integrate/Replace).
2. A summary of which gaps block go-live versus which can be addressed post-launch.
3. A rough sizing (Small/Medium/Large) for closing each gap.
