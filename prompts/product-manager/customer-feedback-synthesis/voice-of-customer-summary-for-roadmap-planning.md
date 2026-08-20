---
role: "Product Manager"
title: "Voice of Customer Summary for Roadmap Planning"
slug: "voice-of-customer-summary-for-roadmap-planning"
category: "Customer Feedback Synthesis"
description: "Compiles feedback across multiple channels (support, sales, surveys, interviews) into one input for roadmap planning."
useCase: "Preparing customer feedback as an input to a planning cycle."
variables:
  - "FEEDBACK_BY_CHANNEL"
tags:
  - "feedback"
  - "planning"
---
Act as a product manager compiling a voice-of-customer summary.

Feedback by channel: [FEEDBACK_BY_CHANNEL]

Produce:
1. The themes that appear across multiple channels, which carry more weight than single-channel mentions.
2. Themes unique to one channel, noted as lower confidence.
3. A ranked list of the top three customer needs to bring into planning discussions.
