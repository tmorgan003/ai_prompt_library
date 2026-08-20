---
role: "Software Developer"
title: "README Generator for a New Repo"
slug: "readme-generator-for-a-new-repo"
category: "Documentation"
description: "Builds a complete README from a description of the project and its setup."
useCase: "Starting a new repo or fixing a repo with no documentation."
variables:
  - "PROJECT_DESCRIPTION"
  - "SETUP_STEPS"
  - "TECH_STACK"
tags:
  - "documentation"
---
Act as a senior engineer writing a README for a new repository.

Project description: [PROJECT_DESCRIPTION]
Tech stack: [TECH_STACK]
Setup steps (raw notes): [SETUP_STEPS]

Write a README with:
1. Project overview (what it is, what problem it solves).
2. Tech stack.
3. Setup and installation instructions, numbered.
4. How to run tests.
5. Folder structure overview.
6. Contribution guidelines section, kept brief.

Write in plain, direct language. No marketing tone.
