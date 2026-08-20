---
role: "Project Manager"
title: "Risk Identification Workshop Prompt Set"
slug: "risk-identification-workshop-prompt-set"
category: "Risk & Issue Management"
description: "Generates a set of prompts to run a risk identification workshop with a project team."
useCase: "Kicking off risk planning at project start or a major phase gate."
variables:
  - "PROJECT_NAME"
  - "PROJECT_TYPE"
tags:
  - "risk"
  - "facilitation"
---
Act as a project manager facilitating a risk identification workshop.

Project: [PROJECT_NAME]
Project type: [PROJECT_TYPE]

Produce:
1. Eight prompting questions to surface risks across categories (technical, resource, schedule, vendor, compliance, organizational).
2. A method for the team to quickly rate likelihood and impact without a long debate.
3. A closing prompt to catch risks nobody has mentioned yet.
