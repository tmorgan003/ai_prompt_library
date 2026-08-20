---
role: "Product Manager"
title: "API/Platform Requirements for Internal Consumers"
slug: "api-platform-requirements-for-internal-consumers"
category: "Requirements & Specs"
description: "Gathers requirements for an internal API or platform capability from the perspective of its consuming teams."
useCase: "Building a platform capability that other internal teams will depend on."
variables:
  - "CAPABILITY_NEEDED"
  - "CONSUMING_TEAMS"
tags:
  - "specs"
  - "platform"
---
Act as a product manager gathering requirements for an internal platform capability.

Capability: [CAPABILITY_NEEDED]
Consuming teams: [CONSUMING_TEAMS]

Produce:
1. Questions to ask each consuming team about their specific use case.
2. A list of requirements likely to conflict across consuming teams, and how to resolve them.
3. Non-functional requirements this platform capability needs (reliability, versioning, documentation) given multiple internal consumers.
