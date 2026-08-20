---
role: "All Employees"
title: "Resume Bullet Point Sharpener"
slug: "resume-bullet-point-sharpener"
category: "Professional Development & Career"
description: "Rewrites a vague resume bullet into a specific, results-oriented statement."
useCase: "Updating a resume and wanting bullets that actually stand out."
variables:
  - "ROUGH_BULLET"
  - "ROLE_CONTEXT"
tags:
  - "career"
  - "resume"
---
Act as a career coach sharpening resume bullets.

Role context: [ROLE_CONTEXT]
Rough bullet: [ROUGH_BULLET]

Rewrite the bullet to:
1. Lead with the action and result, not the task.
2. Include a specific, quantified outcome if the rough version implies one, without fabricating a number that wasn't there.
3. Cut filler words and passive phrasing.

Provide two versions: one metric-forward, one for a case where no clean metric exists.
