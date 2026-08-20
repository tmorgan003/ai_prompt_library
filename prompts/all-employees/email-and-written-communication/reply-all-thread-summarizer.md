---
role: "All Employees"
title: "Reply-All Thread Summarizer"
slug: "reply-all-thread-summarizer"
category: "Email & Written Communication"
description: "Summarizes a long, messy email thread so you can catch up fast before replying."
useCase: "Returning to a long thread after time away, or joining one mid-conversation."
variables:
  - "THREAD_CONTENT"
tags:
  - "email"
  - "summarization"
---
Act as an assistant summarizing an email thread.

Thread content: [THREAD_CONTENT]

Produce:
1. What's being decided or discussed, in one sentence.
2. Where things currently stand.
3. Any open question or action still waiting on someone.
4. What, if anything, seems to be waiting on you specifically.
