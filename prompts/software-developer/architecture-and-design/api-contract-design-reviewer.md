---
role: "Software Developer"
title: "API Contract Design Reviewer"
slug: "api-contract-design-reviewer"
category: "Architecture & Design"
description: "Reviews a proposed API contract for consistency, extensibility, and common design mistakes."
useCase: "Before finalizing a new API endpoint or schema."
variables:
  - "API_CONTRACT"
  - "USE_CASES"
tags:
  - "architecture"
  - "api"
---
Act as a senior engineer reviewing an API design.

Proposed contract: [API_CONTRACT]
Known use cases: [USE_CASES]

Review for:
1. Consistency with common REST/GraphQL conventions (naming, verbs, status codes, pagination).
2. Whether the contract can support the known use cases without a breaking change later.
3. Missing error response definitions.
4. Backward compatibility risk if this replaces an existing endpoint.

List findings with severity (Blocker/Should Fix/Nit).
