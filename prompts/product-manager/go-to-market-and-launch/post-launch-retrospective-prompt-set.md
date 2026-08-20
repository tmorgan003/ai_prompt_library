---
role: "Product Manager"
title: "Post-Launch Retrospective Prompt Set"
slug: "post-launch-retrospective-prompt-set"
category: "Go-to-Market & Launch"
description: "Builds a structured set of questions to evaluate a launch after it's shipped."
useCase: "Reviewing a launch two to four weeks after go-live."
variables:
  - "LAUNCH_NAME"
  - "GOAL_METRIC"
  - "ACTUAL_RESULTS"
tags:
  - "launch"
  - "retrospective"
---
Act as a product manager running a post-launch retrospective.

Launch: [LAUNCH_NAME]
Goal metric: [GOAL_METRIC]
Actual results so far: [ACTUAL_RESULTS]

Produce:
1. An assessment of whether the launch is tracking to the goal, ahead, or behind.
2. Three questions to investigate the gap if results are behind goal.
3. What to do next: iterate, expand rollout, or reconsider the approach.
