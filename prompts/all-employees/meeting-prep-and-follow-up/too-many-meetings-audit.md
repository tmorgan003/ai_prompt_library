---
role: "All Employees"
title: "Too-Many-Meetings Audit"
slug: "too-many-meetings-audit"
category: "Meeting Prep & Follow-up"
description: "Reviews a week of meetings and flags which ones might not need you, or might not need to exist."
useCase: "Feeling buried in recurring meetings and wanting to reclaim time."
variables:
  - "WEEKLY_MEETING_LIST"
tags:
  - "meetings"
  - "productivity"
---
Act as someone auditing their own meeting load.

This week's meetings: [WEEKLY_MEETING_LIST]

For each meeting, assess:
1. Whether your presence is essential, helpful but optional, or unclear.
2. Whether it could be replaced by an async update instead.
3. A recommendation: keep, delegate, decline, or ask to convert to async.
