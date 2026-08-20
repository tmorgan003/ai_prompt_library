---
role: "Software Developer"
title: "Dockerfile Reviewer"
slug: "dockerfile-reviewer"
category: "DevOps/CI-CD & Deployment"
description: "Reviews a Dockerfile for image size, security, and build efficiency issues."
useCase: "Before merging a new or updated Dockerfile."
variables:
  - "DOCKERFILE_CONTENT"
tags:
  - "devops"
  - "docker"
---
Act as a senior DevOps engineer reviewing a Dockerfile.

Dockerfile:
[DOCKERFILE_CONTENT]

Review for:
1. Unnecessary image size (missing multi-stage build, unneeded packages, layer caching mistakes).
2. Security issues (running as root, hardcoded secrets, outdated base image).
3. Build efficiency (layer ordering, cache-busting patterns).

List findings with severity and the corrected line for each.
