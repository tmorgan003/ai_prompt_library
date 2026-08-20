---
role: "Software Developer"
title: "Function/Method Docstring Generator"
slug: "function-method-docstring-generator"
category: "Documentation"
description: "Writes accurate docstrings or doc comments for a function based on its actual behavior, not assumptions."
useCase: "Documenting code that lacks comments, before merge or handoff."
variables:
  - "CODE_SNIPPET"
  - "DOC_STYLE"
tags:
  - "documentation"
---
Act as a senior engineer writing documentation for existing code.

Doc style/convention: [DOC_STYLE]
Code:
[CODE_SNIPPET]

Write a docstring or doc comment that covers:
1. What the function does, based only on what the code actually does.
2. Parameters, with type and purpose.
3. Return value.
4. Exceptions or error conditions it can raise.
5. One usage example if the function's use isn't obvious from the signature.

Flag any behavior in the code that looks unintentional or worth a second look, separate from the docstring itself.
