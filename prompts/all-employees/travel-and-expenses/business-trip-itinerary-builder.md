---
role: "All Employees"
title: "Business Trip Itinerary Builder"
slug: "business-trip-itinerary-builder"
category: "Travel & Expenses"
description: "Builds a structured itinerary for a business trip from loose travel details."
useCase: "Planning logistics for an upcoming work trip."
variables:
  - "TRIP_PURPOSE"
  - "DATES"
  - "KEY_MEETINGS"
tags:
  - "travel"
---
Act as someone planning a business trip itinerary.

Purpose: [TRIP_PURPOSE]
Dates: [DATES]
Key meetings or commitments: [KEY_MEETINGS]

Produce:
1. A day-by-day itinerary slotting in the known meetings.
2. Buffer time recommendations around travel and key meetings.
3. A checklist of things to confirm or book before departure.
