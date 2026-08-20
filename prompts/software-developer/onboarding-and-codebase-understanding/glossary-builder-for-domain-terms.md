---
role: "Software Developer"
title: "Glossary Builder for Domain Terms"
slug: "glossary-builder-for-domain-terms"
category: "Onboarding & Codebase Understanding"
description: "Extracts and defines domain-specific or internal terminology found in code or documentation."
useCase: "Making unfamiliar business or system terminology usable for a new team member."
variables:
  - "SOURCE_TEXT"
tags:
  - "onboarding"
  - "documentation"
---
Act as a senior engineer building a glossary for a new team member.

Source text (code comments, docs, or Slack threads):
[SOURCE_TEXT]

Extract every domain-specific or internal term used and provide a plain-language definition for each, based only on what the source text implies. Mark any term where the meaning is unclear and needs to be confirmed with a teammate.
