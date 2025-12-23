# Qualifier Form - Flow Diagram

Visual representation of the routing logic for the qualifier form.

---

## Complete Flow Map

```
┌─────────────────────────────────────────────────────────────────┐
│                   SECTION 1: QUALIFIER                          │
│                                                                 │
│  Q1: What best describes your organization?                    │
│      [ ] Academic/Research Institution                         │
│      [ ] Biotech Startup (Pre-Series B)                        │
│      [ ] Biotech/Pharma (Series B+)                            │
│      [ ] Clinical/Diagnostics Lab                              │
│      [ ] CRO/Service Provider                                  │
│      [ ] Other                                                 │
│                                                                 │
│  Q2: What's your biggest computational challenge?              │
│      [Open text - minimum 20 characters]                       │
│                                                                 │
│  Q3: What would be most helpful for you right now?             │
│      ┌─────────────────────────────────────────────┐           │
│      │ [ ] Detailed diagnostic survey (7-10 min)   │───────┐   │
│      │ [ ] Book 20-min assessment call             │───┐   │   │
│      │ [ ] Receive case studies via email          │─┐ │   │   │
│      │ [ ] Just browsing - sign up for updates     │ │ │   │   │
│      └─────────────────────────────────────────────┘ │ │   │   │
└───────────────────────────────────────────────────────┼─┼───┼───┘
                                                        │ │   │
                     ┌──────────────────────────────────┘ │   │
                     │                                    │   │
                     │         ┌──────────────────────────┘   │
                     │         │                              │
                     │         │         ┌────────────────────┘
                     │         │         │
                     ▼         ▼         ▼
        ┌────────────┴─┐  ┌───┴────┐  ┌─┴─────────┐
        │              │  │        │  │           │
        │  SECTION 2D  │  │SECTION │  │ SECTION   │
        │  Newsletter  │  │  2B    │  │   2C      │
        │              │  │  Call  │  │Resources  │
        └──────┬───────┘  └───┬────┘  └─────┬─────┘
               │              │             │
               │              │             │
               │              ▼             ▼
               │         ┌─────────┐   ┌────────────┐
               │         │Q7: Email│   │Q8: Email   │
               │         └────┬────┘   │Q9: Topics  │
               │              │        └──────┬─────┘
               │              │               │
               └──────────────┼───────────────┘
                              │
                              ▼
                     ┌─────────────────┐
                     │  SECTION 5      │
                     │  THANK YOU      │
                     │  (Final page)   │
                     └─────────────────┘


┌─────────────────────────────────────────────────────────────────┐
│           DETAILED SURVEY PATH (from Q3 option 1)               │
└─────────────────────────────────────────────────────────────────┘

                     ┌──────────────────────┐
                     │   SECTION 2A:        │
                     │   Survey Path Choice │
                     │                      │
                     │ Q4: Which survey?    │
                     │ [ ] Academic (7 min) │───┐
                     │ [ ] Industry (10 min)│─┐ │
                     └──────────────────────┘ │ │
                                              │ │
                              ┌───────────────┘ │
                              │                 │
                              ▼                 ▼
                     ┌──────────────┐   ┌──────────────┐
                     │  SECTION 3   │   │  SECTION 4   │
                     │  Academic    │   │  Industry    │
                     │  Survey Link │   │  Survey Link │
                     │              │   │              │
                     │ 👉 [LINK]    │   │ 👉 [LINK]    │
                     │              │   │              │
                     │ Q5: Opened?  │   │ Q6: Opened?  │
                     └──────┬───────┘   └──────┬───────┘
                            │                  │
                            └─────────┬────────┘
                                      │
                                      ▼
                             ┌─────────────────┐
                             │  SECTION 5      │
                             │  THANK YOU      │
                             └─────────────────┘
```

---

## Section Summary

| Section | Purpose | Questions | Next Stop |
|---------|---------|-----------|-----------|
| **Section 1** | Qualifier | Q1, Q2, Q3 | Branches to 2A/2B/2C/2D |
| **Section 2A** | Survey choice | Q4 | Branches to 3 or 4 |
| **Section 3** | Academic link | Q5 (optional) | Section 5 |
| **Section 4** | Industry link | Q6 (optional) | Section 5 |
| **Section 2B** | Call booking | Q7 (email) | Section 5 |
| **Section 2C** | Resources | Q8 (email), Q9 (topics) | Section 5 |
| **Section 2D** | Newsletter | Q10 (email, optional) | Section 5 |
| **Section 5** | Thank you | None | END |

---

## Branching Rules

### From Q3 (Preferred Next Step):
- **"Detailed survey"** → Section 2A
- **"Book call"** → Section 2B
- **"Resources"** → Section 2C
- **"Just browsing"** → Section 2D

### From Q4 (Survey Type):
- **"Academic"** → Section 3
- **"Industry"** → Section 4

### From All Other Paths:
- All paths eventually lead to **Section 5 (Thank You)**

---

## User Journey Examples

### Journey 1: Academic Researcher Wants Diagnostic
```
Start → Q1: Academic → Q2: "Scripts break" → Q3: Detailed survey
→ Section 2A → Q4: Academic → Section 3 → Opens link
→ Q5: Yes → Section 5: Thank You → END
```

### Journey 2: Biotech CTO Books Call
```
Start → Q1: Startup → Q2: "Scaling issues" → Q3: Book call
→ Section 2B → Q7: cto@biotech.com → Section 5: Thank You → END
```

### Journey 3: Curious Visitor Gets Resources
```
Start → Q1: Other → Q2: "Just curious" → Q3: Resources
→ Section 2C → Q8: curious@email.com → Q9: [Selects 3 topics]
→ Section 5: Thank You → END
```

### Journey 4: Passive Browser
```
Start → Q1: Academic → Q2: "Exploring options" → Q3: Just browsing
→ Section 2D → Q10: [Leaves blank] → Section 5: Thank You → END
```

---

## Completion Paths Summary

| Path | Sections Visited | Questions Answered | Est. Time |
|------|------------------|-------------------|-----------|
| **Survey → Academic** | 1 → 2A → 3 → 5 | 5 (Q1-Q5) | 2-3 min |
| **Survey → Industry** | 1 → 2A → 4 → 5 | 5 (Q1-Q4, Q6) | 2-3 min |
| **Call Booking** | 1 → 2B → 5 | 4 (Q1-Q3, Q7) | 1-2 min |
| **Resources** | 1 → 2C → 5 | 4-5 (Q1-Q3, Q8-Q9) | 1-2 min |
| **Newsletter** | 1 → 2D → 5 | 3-4 (Q1-Q3, Q10?) | 1 min |

---

## Data Collected Per Path

### All Paths Collect:
- Organization type (Q1)
- Main challenge (Q2)
- Preferred next step (Q3)

### Additional Data by Path:

**Survey Path:**
- Survey type preference (Q4: Academic vs Industry)
- Link opened confirmation (Q5 or Q6)

**Call Booking Path:**
- Email address (Q7)

**Resources Path:**
- Email address (Q8)
- Topic interests (Q9)

**Newsletter Path:**
- Email address (Q10, optional)

---

## Analytics Tracking Points

Track these metrics in your response sheet:

1. **Qualifier completion rate:** How many finish Q1-Q3?
2. **Path distribution:** Which Q3 option is most popular?
3. **Survey preference:** Academic vs Industry split (Q4)
4. **Email capture rate:** How many provide email across all paths?
5. **Topic interest distribution:** Which Q9 topics get most selections?

---

This flow ensures:
- ✅ Every respondent sees only 3-5 questions (low burden)
- ✅ Email is only collected when needed (privacy-conscious)
- ✅ Multiple entry points to relationship (survey, call, resources, newsletter)
- ✅ All paths end at consistent thank you page (clean UX)
- ✅ Easy to track which path led to which outcome (clear analytics)
