# Deep Dive Diagnostic Interview Guide
## Osterwalder Value Proposition Interview Protocol

**Purpose:** This interview uses the Value Proposition Design framework to map the customer's Jobs to be Done (JTBD), Pains, and Gains to Phorma's specific services.

**Duration:** 45-60 minutes

**Target Personas:**
- **Economic Buyer:** VP of R&D, CTO, Director of Informatics
- **End User:** Lead Scientist, Bioinformatician, Computational Researcher

**Interview Mode:** Semi-structured (use as a guide, allow conversation to flow naturally)

---

## Pre-Interview Preparation

### Information to Review Before the Call

1. Survey responses from the Scientific Software Health Check
2. Organization's public information (website, publications, funding announcements)
3. LinkedIn profiles of interviewees (to understand background)
4. Any relevant industry reports for their sector (pharma, biotech, materials science)

### Materials to Have Ready

- Blank Value Proposition Canvas (for real-time mapping)
- Survey response summary
- ROI calculation template
- Scientific Software Maturity Model (SSMM) reference chart

---

## Interview Structure

### Phase 1: Opening & Context Setting (5-10 minutes)

**Objective:** Establish rapport, set expectations, and gather baseline context.

#### Opening Script

"Thank you for taking the time to speak with me today. Based on your survey responses, it seems like your team is navigating some interesting technical challenges. The goal of this conversation is to dig deeper into your current R&D workflows—not to sell you anything today, but to genuinely understand where friction points exist.

At the end, I'll share some preliminary observations and, if it makes sense, we can discuss how Phorma might help. Does that sound good?"

#### Context Questions

1. **Persona Identification:**
   - "Can you walk me through your role and primary responsibilities?"
   - "Who else is involved in decisions about computational tools and infrastructure?"

2. **Organizational Context:**
   - "What does your org chart look like for the R&D team?"
   - "How many people are on the team, and what are their primary disciplines?"

3. **Strategic Context:**
   - "What are your top three strategic objectives for this fiscal year?"
   - _Examples: "Reduce time-to-IND," "Integrate Multi-Omics data," "Lower cloud costs," "Launch a new product line"_

---

### Phase 2: Jobs to be Done (JTBD) (10-15 minutes)

**Objective:** Understand what the client is actually trying to achieve—functional, social, and emotional jobs.

#### Primary JTBD Questions

4. **For R&D Director/CTO (Economic Buyer):**
   - "What are the critical milestones you must hit this year to ensure continued funding or board confidence?"
   - "When you think about your competitors, what gives you an edge? What's slowing you down?"
   - "If you could wave a magic wand and fix one thing about your R&D operations, what would it be?"

5. **For Bioinformatician/Lead Scientist (End User):**
   - "Walk me through a typical lifecycle of a project in your lab—from the moment a hypothesis is generated to the final delivery of data."
   - "When you sit down to analyze a dataset, what is the most tedious, repetitive task you have to perform?"
   - "What's the most exciting part of your work? What's the part you wish you could skip?"

6. **For Both Personas:**
   - "How do you define 'success' for a computational project?"
   - "What does 'good enough' look like versus 'gold standard'?"

#### Social & Emotional Jobs

7. "How is computational work perceived in your organization? Is it seen as a cost center or a strategic asset?"

8. "When you present results to senior leadership or external stakeholders, what do they care most about?"

9. "How do you personally feel when a pipeline breaks or a result can't be reproduced? What's the emotional toll on the team?"

---

### Phase 3: Diagnosing Pains (15-20 minutes)

**Objective:** Identify bad outcomes, risks, and obstacles. Probe for intensity and frequency.

#### Pain Category 1: Integrity & Reproducibility

10. **The Integrity Probe:**
    - "Have you ever experienced a situation where a key result could not be reproduced, or where data was lost due to versioning issues?"
    - _If yes:_ "What was the business impact of that event? How much time was lost investigating the discrepancy?"
    - _If no:_ "What safeguards do you have in place to prevent that?"

11. **The Data Corruption Probe:**
    - "In your survey, you mentioned using [Excel/Jupyter/etc.]. Have you ever discovered an error in a dataset after analysis was already complete?"
    - _Prompt:_ "For example, gene names converting to dates in Excel, or formulas accidentally overwriting raw data?"
    - _If yes:_ "How did you catch it? What was the downstream impact?"

12. **The Bus Factor Probe:**
    - "If your lead computational person left tomorrow, how long would it take to get a replacement up to speed?"
    - "What would be lost in that transition—knowledge, code, data access?"

#### Pain Category 2: Velocity & Scalability

13. **The Efficiency Probe (Deep Dive):**
    - "You mentioned spending [X%] of time on debugging and maintenance. Can you give me a specific example from the last month?"
    - "If you could reclaim half of that time, what specific scientific problems would your team tackle?"

14. **The Scalability Wall Probe:**
    - "As your datasets grow—say, 10x in size—do you feel confident your current infrastructure can handle it?"
    - "Have you ever had to abandon an analysis because it was computationally infeasible?"

15. **The Integration Probe:**
    - "How long does it take for a new algorithm developed by a researcher to be deployed into a tool that the rest of the company can use?"
    - "Is it days, weeks, or months?"
    - _If long:_ "What are the bottlenecks in that process?"

16. **The Translation Gap Probe:**
    - "Do you have separate 'research' and 'engineering' teams? How do they communicate?"
    - "When research hands off to engineering, what typically gets lost in translation?"

#### Pain Category 3: Talent & Continuity

17. **The Skills Gap Probe:**
    - "When you're hiring, what's harder to find: people with domain expertise (biology, chemistry) or people who can code well?"
    - "Have you ever hired someone who was brilliant scientifically but struggled with software?"

18. **The Onboarding Probe:**
    - "How long does it take for a new hire to become productive—actually running analyses independently?"
    - "What are the biggest barriers to faster onboarding?"

19. **The Opportunity Cost Probe:**
    - "When your senior scientists are spending time fixing broken scripts or cleaning data, what are they not doing?"
    - "How much does that cost the organization in terms of lost innovation?"

#### Pain Category 4: Hidden Technical Debt (Advanced)

20. **The Entanglement Probe:**
    - "If you change one parameter or input feature in your model, does it affect everything else unpredictably?"
    - "How much testing do you do before pushing a change to production?"

21. **The Pipeline Jungle Probe:**
    - "How many different scripts or tools are chained together in your typical analysis pipeline?"
    - "If one step changes, how easy is it to update the downstream steps?"

22. **The Undeclared Consumer Probe:**
    - "Are there any 'silent dependencies'—where one team's output is consumed by another team, but there's no formal contract or communication?"

---

### Phase 4: Identifying Gains (10-15 minutes)

**Objective:** Understand what 'better' looks like. What would delight the client?

#### Gain Questions

23. **The Ideal State:**
    - "If your software infrastructure were ideal, what would that look like?"
    - "How would it change your competitive position?"

24. **The Speed Gain:**
    - "What would it mean for your organization if you could reduce analysis time by 50%?"
    - "What new questions could you ask with that extra capacity?"

25. **The Quality Gain:**
    - "What would it mean if you could guarantee bit-for-bit reproducibility for all analyses?"
    - "How would that affect regulatory submissions or investor confidence?"

26. **The Onboarding Gain:**
    - "What would it mean if you could onboard a new scientist and have them running productive analysis on Day 1, rather than Week 4?"

27. **The Innovation Gain:**
    - "If you could free up 20-30% of your team's time from maintenance work, what breakthrough projects would you pursue?"

28. **The Unexpected Gain:**
    - "Is there something you haven't thought of yet—a capability you don't even know you need—that would be a game-changer if you had it?"

---

### Phase 5: Handling Objections & Sunk Costs (5 minutes)

**Objective:** Address the "we've already invested so much" concern.

29. **The Sunk Cost Probe:**
    - "You've built a lot of infrastructure over the years. How much effort is currently required to maintain your legacy 'glue code'?"
    - "Does this maintenance effort grow linearly or exponentially as you add new data sources?"

30. **The Risk of Inaction:**
    - "If you don't address these technical inefficiencies, what happens in 12 months? 24 months?"
    - "What's the risk of doing nothing?"

---

### Phase 6: Closing & Next Steps (5 minutes)

#### Synthesis

31. "Based on our conversation, it sounds like the top three pain points are:
    1. [Pain 1]
    2. [Pain 2]
    3. [Pain 3]

    Does that resonate?"

32. "And the biggest opportunities for gain would be:
    1. [Gain 1]
    2. [Gain 2]

    Is that accurate?"

#### Call to Action

33. "Here's what I'd like to propose:
    - I'll synthesize everything we discussed today into a **Justification Report**.
    - This report will include:
      - Your current **Scientific Software Maturity Level** (1-5)
      - A **quantified ROI analysis** showing how much current inefficiencies are costing you
      - A **recommended roadmap** for modernization
    - I'll have this to you within **5 business days**.
    - After you review it, we can schedule a follow-up to discuss whether Phorma is the right fit to help you execute.

    Does that work for you?"

#### Permission for Follow-Up

34. "Is there anyone else on your team who should be part of the next conversation?"

35. "What's the best way to stay in touch—email, Slack, or scheduled check-ins?"

---

## Post-Interview Actions

### Immediate (Within 24 hours)

- [ ] Send thank-you email with meeting summary
- [ ] Update CRM with detailed notes
- [ ] Flag any urgent issues mentioned (e.g., active data corruption, imminent deadlines)

### Within 5 Business Days

- [ ] Complete Justification Report with:
  - SSMM assessment
  - ROI calculation
  - Risk profile (epistemic & technical)
  - Solution mapping (Phorma services to JTBD)
  - Recommended roadmap
- [ ] Send report via email with personalized cover note
- [ ] Schedule follow-up call (if client indicated interest)

### Ongoing

- [ ] Monitor for trigger events (funding announcements, team changes, publications)
- [ ] Add to nurture sequence if not ready to buy now
- [ ] Request introductions to peers in similar organizations

---

## Interview Tips & Best Practices

### Do's

✅ **Listen more than you talk** (80/20 rule)
✅ **Ask "why" and "how" follow-ups** to dig deeper
✅ **Use silence strategically** to let the client think
✅ **Validate emotions** ("That sounds incredibly frustrating")
✅ **Take detailed notes** (consider recording with permission)
✅ **Be genuinely curious** about their science

### Don'ts

❌ **Don't pitch Phorma's services during the interview** (save for the report)
❌ **Don't dismiss their current approach** (even if it's objectively bad)
❌ **Don't use jargon they don't use** (mirror their language)
❌ **Don't interrupt** or finish their sentences
❌ **Don't make assumptions** about their priorities

---

## Appendix: Question Mapping to Value Proposition Canvas

| Interview Question # | Maps to VPC Element | Purpose |
|----------------------|---------------------|---------|
| Q1-Q3 | Customer Profile (Context) | Persona identification |
| Q4-Q9 | Customer Jobs | Understand what they're trying to accomplish |
| Q10-Q22 | Customer Pains | Identify obstacles, risks, bad outcomes |
| Q23-Q28 | Customer Gains | Understand desired outcomes and benefits |
| Q29-Q30 | Pains (Objection Handling) | Address sunk cost fallacy |
| Q31-Q35 | Transition to Fit | Bridge to Phorma's Value Proposition |

---

## Sample Response Coding

After the interview, code responses using this framework:

### Pain Intensity Scale
- **Critical (5):** Existential risk, threatens viability
- **High (4):** Major blocker, significant financial impact
- **Moderate (3):** Annoying, but workarounds exist
- **Low (2):** Minor inconvenience
- **None (1):** Not a concern

### Job Importance Scale
- **Essential (5):** Mission-critical, must succeed
- **Important (4):** High priority, significant impact
- **Nice-to-have (3):** Helpful but not critical
- **Optional (2):** Low priority
- **Irrelevant (1):** Not on their radar

Use these scales to prioritize which pains to solve and which gains to create in the Justification Report.
