---
role: "All Employees"
title: "Meeting Notes to Summary Converter"
slug: "meeting-notes-to-summary-converter"
category: "Meeting Prep & Follow-up"
description: "Turns raw meeting notes into a clean summary to send to attendees."
useCase: "Right after any meeting, before the details get fuzzy."
variables:
  - "RAW_NOTES"
  - "MEETING_TOPIC"
tags:
  - "meetings"
  - "documentation"
---
Act as someone writing a meeting recap.

Meeting topic: [MEETING_TOPIC]
Raw notes: [RAW_NOTES]

Produce a recap with:
1. Key decisions made.
2. Action items with owners and due dates where stated.
3. Open questions still unresolved.

Keep it scannable, under 150 words unless the notes genuinely require more.
