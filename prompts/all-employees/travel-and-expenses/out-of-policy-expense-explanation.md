---
role: "All Employees"
title: "Out-of-Policy Expense Explanation"
slug: "out-of-policy-expense-explanation"
category: "Travel & Expenses"
description: "Drafts an explanation for an expense that falls outside standard policy."
useCase: "Needing to justify an expense that will likely get questioned during review."
variables:
  - "EXPENSE_DESCRIPTION"
  - "REASON_OUT_OF_POLICY"
tags:
  - "travel"
  - "expenses"
---
Act as someone explaining an out-of-policy expense.

Expense: [EXPENSE_DESCRIPTION]
Reason it's out of policy: [REASON_OUT_OF_POLICY]

Write a brief, factual explanation that states the circumstance plainly, without over-justifying, and states what you'd do differently next time if the circumstance was avoidable.
