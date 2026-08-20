---
role: "All Employees"
title: "Expense Report Description Writer"
slug: "expense-report-description-writer"
category: "Travel & Expenses"
description: "Writes clear, policy-compliant descriptions for expense report line items."
useCase: "Filing an expense report and needing descriptions that won't get flagged or questioned."
variables:
  - "EXPENSE_LIST"
  - "BUSINESS_PURPOSE"
tags:
  - "travel"
  - "expenses"
---
Act as someone completing an expense report.

Business purpose of the trip/activity: [BUSINESS_PURPOSE]
Expense list: [EXPENSE_LIST]

For each expense, write a clear, specific description connecting it to the stated business purpose, in the concise style expense systems expect. Flag any expense that looks like it might need a receipt or additional justification based on common policy patterns.
