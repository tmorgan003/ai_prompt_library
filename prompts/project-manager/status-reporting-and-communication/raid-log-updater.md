---
role: "Project Manager"
title: "RAID Log Updater"
slug: "raid-log-updater"
category: "Status Reporting & Communication"
description: "Structures raw project notes into a RAID log (Risks, Assumptions, Issues, Dependencies)."
useCase: "Maintaining a living project tracking artifact."
variables:
  - "RAW_NOTES"
  - "PROJECT_NAME"
tags:
  - "status-reporting"
  - "risk"
---
Act as a project manager updating a RAID log.

Project: [PROJECT_NAME]
Raw notes: [RAW_NOTES]

Sort the notes into four categories: Risks (things that might happen), Assumptions (things treated as true but not confirmed), Issues (things that have already happened and need resolution), Dependencies (things this project needs from outside itself).

For each entry, include a one-line description, owner if known, and status.
