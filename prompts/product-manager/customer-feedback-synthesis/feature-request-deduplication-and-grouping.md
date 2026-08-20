---
role: "Product Manager"
title: "Feature Request Deduplication and Grouping"
slug: "feature-request-deduplication-and-grouping"
category: "Customer Feedback Synthesis"
description: "Groups a raw list of feature requests into consolidated themes to avoid tracking duplicates separately."
useCase: "Cleaning up a feature request backlog that has grown unmanaged."
variables:
  - "RAW_FEATURE_REQUESTS"
tags:
  - "feedback"
---
Act as a product manager consolidating feature requests.

Raw feature requests: [RAW_FEATURE_REQUESTS]

Group these into consolidated themes. For each theme:
1. A clear name and description.
2. How many individual requests map to it.
3. The underlying need behind the requests, which may differ from the literal ask.
