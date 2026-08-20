---
role: "Business Analyst"
title: "Meeting Notes to Action Items Converter"
slug: "meeting-notes-to-action-items-converter"
category: "Stakeholder Communication & Summaries"
description: "Turns raw meeting notes into a clean action item list with owners and due dates."
useCase: "Right after any working session or stakeholder meeting."
variables:
  - "MEETING_NOTES"
  - "MEETING_DATE"
tags: []
---
Act as a business analyst converting meeting notes into action items.

Meeting date: [MEETING_DATE]
Raw notes:
[MEETING_NOTES]

Extract:
1. A table of action items with columns: Action, Owner, Due Date (if stated, otherwise mark TBD), Priority.
2. A short list of decisions made in the meeting.
3. A short list of open questions still unresolved.

If an owner or due date was not stated, mark it TBD instead of guessing.
