---
role: "Business Analyst"
title: "SOP Writer from Process Notes"
slug: "sop-writer-from-process-notes"
category: "Process Mapping & Documentation"
description: "Converts process notes into a formal standard operating procedure document."
useCase: "Creating documentation for compliance, training, or knowledge transfer."
variables:
  - "PROCESS_NAME"
  - "PROCESS_NOTES"
  - "AUDIENCE"
tags: []
---
Act as a business analyst writing a standard operating procedure.

Process: [PROCESS_NAME]
Process notes: [PROCESS_NOTES]
Intended audience: [AUDIENCE]

Write an SOP with:
1. Purpose and scope.
2. Roles and responsibilities.
3. Step-by-step instructions, numbered, one action per step.
4. Exceptions and escalation path.
5. Related systems, forms, or references.

Use imperative voice for instructions (e.g. "Enter the ticket number," not "The user should enter the ticket number").
