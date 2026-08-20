---
role: "All Employees"
title: "Slide Content Outliner"
slug: "slide-content-outliner"
category: "Presentations & Documents"
description: "Turns a rough topic into a structured slide-by-slide outline before any slide is built."
useCase: "Starting a presentation from scratch."
variables:
  - "PRESENTATION_TOPIC"
  - "AUDIENCE"
  - "TIME_ALLOTTED"
tags:
  - "presentations"
---
Act as someone outlining a presentation.

Topic: [PRESENTATION_TOPIC]
Audience: [AUDIENCE]
Time allotted: [TIME_ALLOTTED]

Produce a slide-by-slide outline:
1. A title slide message that states the point, not just the topic.
2. Each subsequent slide's core message in one sentence.
3. A logical flow from problem/context through to the takeaway or ask.
4. Which slide is most important if time runs short.
