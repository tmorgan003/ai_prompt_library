---
role: "Software Developer"
title: "Database Schema Reviewer"
slug: "database-schema-reviewer"
category: "Architecture & Design"
description: "Reviews a proposed database schema for normalization issues, missing indexes, and scaling concerns."
useCase: "Before implementing a new schema or migration."
variables:
  - "SCHEMA_DEFINITION"
  - "EXPECTED_QUERY_PATTERNS"
tags:
  - "architecture"
  - "database"
---
Act as a senior engineer reviewing a database schema.

Schema:
[SCHEMA_DEFINITION]

Expected query patterns: [EXPECTED_QUERY_PATTERNS]

Review for:
1. Normalization issues or redundant data.
2. Missing indexes given the expected query patterns.
3. Data types that may not scale well (e.g. wrong precision, missing constraints).
4. Foreign key and referential integrity concerns.

List findings with severity and a suggested fix for each.
