---
role: "Project Manager"
title: "Meeting Necessity Filter"
slug: "meeting-necessity-filter"
category: "Meeting Facilitation"
description: "Evaluates whether a proposed meeting is actually needed, or could be handled asynchronously."
useCase: "Reviewing a recurring meeting series or a new meeting request before it gets added to calendars."
variables:
  - "MEETING_PURPOSE"
  - "PROPOSED_ATTENDEES"
  - "FREQUENCY"
tags:
  - "facilitation"
---
Act as a project manager evaluating whether a meeting is necessary.

Purpose: [MEETING_PURPOSE]
Proposed attendees: [PROPOSED_ATTENDEES]
Proposed frequency: [FREQUENCY]

Assess:
1. Whether this purpose could be met with an async update instead (status doc, message, dashboard).
2. Whether every proposed attendee needs to be present live, or could receive notes.
3. A recommendation: keep as a meeting, convert to async, or reduce frequency/attendees.
