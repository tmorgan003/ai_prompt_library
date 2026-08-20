---
role: "Software Developer"
title: "Root Cause Analysis Writer"
slug: "root-cause-analysis-writer"
category: "Debugging & Troubleshooting"
description: "Structures a formal root cause analysis after a bug or incident is resolved."
useCase: "Post-incident documentation, especially for production issues."
variables:
  - "INCIDENT_SUMMARY"
  - "TIMELINE_NOTES"
  - "FIX_APPLIED"
tags:
  - "debugging"
  - "incident"
---
Act as a senior engineer writing a root cause analysis.

Incident summary: [INCIDENT_SUMMARY]
Timeline notes: [TIMELINE_NOTES]
Fix applied: [FIX_APPLIED]

Write a root cause analysis with:
1. Summary of impact (what broke, who was affected, for how long).
2. Timeline of detection through resolution.
3. Root cause, stated as the actual underlying reason, not just the symptom.
4. Contributing factors.
5. Corrective actions, split into immediate and long-term, each with a suggested owner.
