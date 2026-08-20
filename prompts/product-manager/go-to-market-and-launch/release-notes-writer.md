---
role: "Product Manager"
title: "Release Notes Writer"
slug: "release-notes-writer"
category: "Go-to-Market & Launch"
description: "Converts a technical changelog into user-facing release notes."
useCase: "Publishing release notes for a new version or feature update."
variables:
  - "TECHNICAL_CHANGELOG"
  - "AUDIENCE"
tags:
  - "launch"
  - "communication"
---
Act as a product manager writing release notes.

Audience: [AUDIENCE]
Technical changelog: [TECHNICAL_CHANGELOG]

Rewrite each changelog entry into a user-facing release note that states the benefit to the user, not just the technical change. Group into New, Improved, and Fixed. Skip internal-only changes with no user visibility.
