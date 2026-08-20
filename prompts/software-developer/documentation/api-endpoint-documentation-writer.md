---
role: "Software Developer"
title: "API Endpoint Documentation Writer"
slug: "api-endpoint-documentation-writer"
category: "Documentation"
description: "Documents an API endpoint's contract from its implementation."
useCase: "Documenting internal or external APIs for other developers to consume."
variables:
  - "ENDPOINT_CODE"
  - "API_STYLE"
tags:
  - "documentation"
  - "api"
---
Act as a senior engineer documenting an API endpoint.

API style (REST/GraphQL/RPC): [API_STYLE]
Endpoint implementation:
[ENDPOINT_CODE]

Document:
1. Method and path (or operation name).
2. Request parameters/body, with type and whether required.
3. Response shape, including status codes and error responses.
4. One example request and response.
5. Any authentication or rate limit behavior visible in the code.
