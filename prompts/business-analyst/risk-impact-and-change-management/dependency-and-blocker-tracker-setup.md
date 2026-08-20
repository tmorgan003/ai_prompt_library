---
role: "Business Analyst"
title: "Dependency and Blocker Tracker Setup"
slug: "dependency-and-blocker-tracker-setup"
category: "Risk, Impact & Change Management"
description: "Structures a list of raw project dependencies into a trackable format with resolution paths."
useCase: "Program-level coordination across multiple workstreams or teams."
variables:
  - "PROJECT_NAME"
  - "RAW_DEPENDENCY_NOTES"
tags: []
---
Act as a business analyst organizing project dependencies for tracking.

Project: [PROJECT_NAME]
Raw dependency notes: [RAW_DEPENDENCY_NOTES]

Produce a table: Dependency ID, Description, Owning Team, Needed By Date, Status (Not Started/In Progress/Blocked/Resolved), Risk if Missed.

Flag any dependency with no clear owner or no needed-by date as high priority to clarify.
