---
role: "Software Developer"
title: "Stack Trace Interpreter"
slug: "stack-trace-interpreter"
category: "Debugging & Troubleshooting"
description: "Breaks down a raw stack trace or error log into a plain-language explanation and likely cause."
useCase: "Hitting an unfamiliar error and needing a fast first read."
variables:
  - "ERROR_LOG"
  - "LANGUAGE_OR_FRAMEWORK"
  - "CONTEXT"
tags:
  - "debugging"
---
Act as a senior engineer diagnosing an error.

Language/framework: [LANGUAGE_OR_FRAMEWORK]
Context (what the code was doing): [CONTEXT]
Error log or stack trace:
[ERROR_LOG]

Explain:
1. What the error actually means, in plain language.
2. The most likely root cause given the context.
3. Two other plausible causes, ranked by likelihood.
4. The fastest way to confirm which cause is correct before making a fix.
