---
role: "Data Analyst"
title: "SQL Dialect Translator"
slug: "sql-dialect-translator"
category: "SQL & Query Writing"
description: "Translates a query from one SQL dialect to another, flagging behavior differences."
useCase: "Migrating queries between platforms (e.g. SQL Server to Snowflake)."
variables:
  - "SQL_QUERY"
  - "SOURCE_DIALECT"
  - "TARGET_DIALECT"
tags:
  - "sql"
  - "migration"
---
Act as a data analyst translating SQL between dialects.

Source dialect: [SOURCE_DIALECT]
Target dialect: [TARGET_DIALECT]
Query:
[SQL_QUERY]

Produce:
1. The translated query.
2. Every function, syntax, or behavior difference between the dialects that affected the translation.
3. Anything that needs manual verification because the dialects handle it differently (date math, NULL handling, string functions).
