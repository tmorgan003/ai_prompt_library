---
role: "Data Analyst"
title: "Chart Simplification Pass"
slug: "chart-simplification-pass"
category: "Data Storytelling & Presentation"
description: "Reviews a cluttered or overly complex chart and proposes a simplified version."
useCase: "A chart has too much going on and isn't communicating clearly."
variables:
  - "CHART_DESCRIPTION"
  - "KEY_MESSAGE"
tags:
  - "storytelling"
  - "visualization"
---
Act as a data analyst simplifying a chart.

Chart description (what's currently shown): [CHART_DESCRIPTION]
Key message it should communicate: [KEY_MESSAGE]

Recommend:
1. What to remove (extra series, gridlines, labels, legend clutter) that doesn't serve the key message.
2. What to emphasize visually (color, annotation, ordering) to make the key message unmissable.
3. A one-line title that states the takeaway, not just the chart's topic.
