# Client Engagement Materials

This directory contains all materials for the Phorma Scientific client engagement framework, based on the Strategic Engagement Framework for Scientific R&D.

## Overview

The engagement strategy is designed to identify and convert R&D organizations carrying "Technical Debt" into clients by using a structured three-phase approach:

1. **The Hook** - Short survey to identify symptoms
2. **The Deep Dive** - In-depth diagnostic interview
3. **The Deliverable** - Justification report with ROI analysis

## Directory Structure

```
engagement/
├── README.md                          # This file (overview)
├── README-FORM-BUILDER-CLEAN.md       # Quick start for building qualifier
├── FORM-BUILDER-DOCS-GUIDE.md         # Complete build instructions
├── qualifier-form-CLEAN-EN.txt        # English qualifier (import file)
├── qualifier-form-CLEAN-ES.txt        # Spanish qualifier (import file)
├── qualifier-flow-diagram.md          # Visual routing reference
├── en/                                # English content
│   ├── explanations.md                # Service descriptions (ELI5, family, technical)
│   ├── interview-guide.md             # Deep dive interview protocol
│   ├── email-templates.md             # Email response templates
│   └── linkedin-posts.md              # Social media templates
└── es/                                # Spanish content
    ├── explanations.md
    ├── interview-guide.md
    ├── email-templates.md
    └── linkedin-posts.md
```

## Quick Start

**New to this system?** Start here:

1. **Read:** `README-FORM-BUILDER-CLEAN.md` — Overview and quick reference
2. **Build:** Follow `FORM-BUILDER-DOCS-GUIDE.md` — Step-by-step Google Forms setup
3. **Import:** Use `qualifier-form-CLEAN-EN.txt` and `qualifier-form-CLEAN-ES.txt`
4. **Understand:** Review `qualifier-flow-diagram.md` — Visual routing map

**Building time:** ~55 min (English) + ~45 min (Spanish) + ~20 min (testing)

---

## Updated Strategy (Post-Council of Minds)

Based on user feedback from actual testing (IBYME interview, December 2025), the original 16-question monolithic survey was **too complex for academic audiences**.

**New Approach: Branching Qualifier + Specialized Surveys**

### Phase 1: Cold Qualifier (3 questions, 90 seconds)
- Segments audiences (academic vs. industry vs. clinical)
- Routes to appropriate next step:
  - Academic Diagnostic Survey (8 questions, ~7 min) — simplified language
  - Industry Diagnostic Survey (12 questions, ~10 min) — technical depth
  - Assessment call booking (Calendly)
  - Resource nurture (email + case studies)
  - Newsletter signup (passive engagement)

### Phase 2: Specialized Diagnostic Surveys (Coming Next)
- **Academic Path:** Plain language, concrete examples (ImageJ, Excel, email), addresses "too difficult" feedback
- **Industry Path:** Technical depth (CI/CD, infrastructure, compliance), maintains credibility

---

## Files Description

### 1. Qualifier Forms (`qualifier-form-CLEAN-*.txt`)

**Purpose:** Lightweight 3-question entry point that segments and routes leads.

**Contents:**
- Organization type (academic, startup, pharma, clinical, CRO)
- Main computational challenge (open text)
- Preferred next step (survey, call, resources, newsletter)

**Implementation:**
1. Create new Google Doc
2. Copy content from `.txt` file
3. Extensions → Form Builder for Docs → Create form
4. Manually configure branching, validation, sections
5. Test all 5 user paths

**Expected Outcome:** Route leads to appropriate engagement path with minimal friction.

---

### 2. Build Guides

**`README-FORM-BUILDER-CLEAN.md`**
- Quick start overview
- Success criteria checklist
- Links to all resources
- What happens next (Phase 2)

**`FORM-BUILDER-DOCS-GUIDE.md`**
- Complete 100-step build instructions
- Manual configuration checklist
- Branching logic setup (Q3 → 4 paths, Q4 → 2 paths)
- Testing procedures for all 5 user paths
- Response tracking formulas (Google Sheets)
- Troubleshooting guide

**`qualifier-flow-diagram.md`**
- ASCII art flow diagram
- Section summary table
- User journey examples
- Data collection mapping
- Analytics tracking points

---

### 3. Service Explanations (`en/explanations.md` + `es/explanations.md`)

**Purpose:** Multi-level descriptions of Phorma services for different audiences.

**Contents:**
- **ELI5 (Explain Like I'm 5):** Non-technical analogies
- **Family & Friends:** Accessible language with concrete examples
- **Technical:** Precise terminology for practitioners

**Use Cases:**
- Survey introduction text
- Email templates personalization
- Website copy
- Sales conversations with mixed-literacy audiences

---

### 4. Interview Guide (`interview-guide.md`)

**Purpose:** Comprehensive protocol for the 45-60 minute "Deep Dive Diagnostic" interview using the Osterwalder Value Proposition Design framework.

**Contents:**
- Pre-interview preparation checklist
- Six-phase interview structure:
  1. Opening & Context Setting (5-10 min)
  2. Jobs to be Done (JTBD) (10-15 min)
  3. Diagnosing Pains (15-20 min)
  4. Identifying Gains (10-15 min)
  5. Handling Objections (5 min)
  6. Closing & Next Steps (5 min)
- Post-interview action items
- Question mapping to Value Proposition Canvas
- Response coding scales (Pain Intensity, Job Importance)

**Who Should Use This:**
- Business development team members
- Technical consultants conducting client discovery
- Anyone conducting the deep dive interviews

**Key Features:**
- Semi-structured approach (use as a guide, not a script)
- Persona-specific questions (Economic Buyer vs. End User)
- Designed to uncover hidden technical debt and opportunity costs
- Maps directly to Phorma's service offerings

---

### 5. Email Templates (`email-templates.md`)

**Purpose:** Standardized email communications for all stages of client engagement.

**Contents:**
9 email templates covering:

1. **Contact Form - General Inquiry Response**
2. **Contact Form - Specific Service Inquiry**
3. **Survey Completion - Acknowledgment & Preliminary Assessment**
4. **Deep Dive Interview - Confirmation & Preparation**
5. **Post-Interview - Thank You & Report Delivery**
6. **Follow-Up - No Response After Report**
7. **Nurture Sequence - Educational Follow-Up (30 Days)**
8. **Re-Engagement - 6 Month Check-In**
9. **Client Onboarding - Welcome & Kickoff**

**Implementation:**
- All templates include [bracketed placeholders] for personalization
- Can be integrated with email marketing platforms
- Should be customized based on qualifier/survey responses
- Includes tone guidelines and personalization checklist

---

### 6. LinkedIn Posts (`en/linkedin-posts.md` + `es/linkedin-posts.md`)

**Purpose:** Social media content templates for promoting qualifier and building thought leadership.

**Contents:**
- Post templates for qualifier promotion
- Technical debt awareness content
- Case study teasers
- Industry insights
- Call-to-action variations

**Use Cases:**
- Driving traffic to qualifier form
- Building credibility in target industries
- Nurturing cold audiences
- Re-engaging dormant leads

---

## Strategic Framework

### Three-Pronged Engagement Strategy

#### Pain Point 1: Velocity & Scalability (The Technical Debt Trap)
**Target:** Development lifecycle maturity and deployment friction
**Hook Question:** "Which best describes the transition of software from research to production?"
**Symptoms:**
- Manual deployment processes
- Rewrite cycles
- Ad-hoc, laptop-based workflows
**Phorma Solution:** CI/CD implementation, containerization, refactoring

#### Pain Point 2: Integrity & Reproducibility (The Science Trap)
**Target:** Data integrity, environment reproducibility, "bus factor"
**Hook Question:** "How confident are you that analysis pipelines could be re-run by a new hire?"
**Symptoms:**
- Environment setup takes weeks
- "Magic steps" known only to specific individuals
- Data/methodology not version-controlled
**Phorma Solution:** Containerization, data versioning (DVC), infrastructure as code

#### Pain Point 3: Talent & Continuity (The People Trap)
**Target:** Skills gap, maintenance burden, opportunity cost
**Hook Question:** "How much time does your team spend on maintenance vs. discovery?"
**Symptoms:**
- >30% time on debugging/maintenance
- Highly paid scientists doing janitorial work
- Long onboarding times
**Phorma Solution:** Workflow automation, standardized environments, knowledge management

### Scientific Software Maturity Model (SSMM)

Used in the Justification Report to benchmark clients:

| Level | Name | Characteristics | Phorma Opportunity |
|-------|------|----------------|-------------------|
| 1 | Ad-Hoc | Chaotic, hero-based, no version control | **High** - Fundamental infrastructure build |
| 2 | Repeatable | Manual processes, fragmented silos | **High** - Automation, CI/CD |
| 3 | Defined | Standardized, documented processes | **Medium** - Optimization, architectural patterns |
| 4 | Managed | Quantitative management, automated testing | **Low** - Specialized optimization |
| 5 | Optimizing | Continuous improvement, self-healing | **Partner** - Strategic innovation |

### ROI Calculation Formula

Used in email follow-ups and justification reports:

```
Annual Waste = (Total R&D Headcount) × (Avg. Salary) × (Maintenance % - Target %)

Where:
- Avg. Salary = $138,000 (industry median for scientists)
- Target Maintenance % = 10% (healthy level)
- Current Maintenance % = from survey Q8
```

**Example:**
- 15 scientists
- 40% time on maintenance
- Calculation: 15 × $138,000 × (0.40 - 0.10) = **$621,000/year waste**

---

## Usage Workflow

### Phase 1: Awareness & Lead Generation

1. **Distribute Survey**
   - LinkedIn groups (Bioinformatics, Computational Chemistry)
   - Conference sponsorships
   - Direct outreach to warm leads
   - Website CTA

2. **Automatic Response**
   - Use Email Template #3 upon survey completion
   - Include preliminary assessment
   - CTA: Schedule Deep Dive if high-priority lead

### Phase 2: Diagnostic Interview

1. **Confirmation Email**
   - Use Email Template #4
   - Send calendar invite
   - Include preparation checklist

2. **Conduct Interview**
   - Follow Interview Guide structure
   - Take detailed notes (consider recording with permission)
   - Use Value Proposition Canvas to map responses

3. **Post-Interview Actions**
   - Send thank-you email within 24 hours
   - Update CRM with detailed notes
   - Begin preparing Justification Report

### Phase 3: Report Delivery & Conversion

1. **Deliver Report**
   - Use Email Template #5
   - Include:
     - SSMM assessment
     - ROI calculation
     - Risk profile
     - Solution mapping
     - Recommended roadmap

2. **Follow-Up**
   - If no response: Template #6 (after 7-10 days)
   - If not ready: Template #7 (nurture sequence)
   - If qualified out: Template #8 (6-month check-in)

3. **Convert to Client**
   - Use Email Template #9 for onboarding
   - Transition to project management
   - Deliver on promises made in report

---

## Customization Guidelines

### Adapting for Different Personas

**VP of R&D / CTO (Economic Buyer):**
- Emphasize ROI, strategic positioning, risk mitigation
- Use business language: "productivity loss," "competitive advantage," "operational efficiency"
- Focus on board-level metrics and funding implications

**Lead Scientist / Bioinformatician (End User):**
- Emphasize day-to-day pain relief, time savings, reduced frustration
- Use technical language: "pipeline," "containerization," "reproducibility"
- Focus on quality of life improvements and scientific integrity

**IT Lead / Infrastructure:**
- Emphasize scalability, security, maintainability
- Use infrastructure language: "CI/CD," "orchestration," "observability"
- Focus on technical debt reduction and system reliability

### Industry-Specific Adaptations

**Pharmaceutical:**
- Emphasize regulatory compliance (FDA, EMA)
- Highlight reproducibility for clinical trial data
- Reference 21 CFR Part 11 requirements

**Biotech Startup:**
- Emphasize speed-to-market, investor readiness
- Highlight team scalability and onboarding efficiency
- Reference burn rate and runway optimization

**Academic/Government:**
- Emphasize reproducibility for publications
- Highlight grant proposal competitiveness
- Reference NIH/NSF data management requirements

---

## Integration with Website

### Recommended Implementation

1. **Create Survey Landing Page**
   - New page: `/survey.html` and `/es/survey.html`
   - Embed Google Form or link to external form
   - Include value proposition messaging
   - Add trust signals (testimonials, logos)

2. **Update Navigation**
   - Add "Health Check" or "Assessment" link to nav
   - Include CTA button in header (e.g., "Free Assessment")

3. **Contact Form Auto-Response**
   - Integrate Email Templates 1-2 with contact form backend
   - Use conditional logic based on inquiry type

4. **CRM Integration**
   - Connect Google Form responses to CRM
   - Auto-create contact records
   - Trigger email sequences

### Technical Requirements

**For Google Form Integration:**
- Google Forms API access
- Zapier or Make.com for automation (optional)
- Email service (SendGrid, Mailgun, or Gmail)

**For CRM Integration:**
- CRM system (HubSpot, Salesforce, Pipedrive, etc.)
- Webhook endpoints
- Email marketing platform integration

---

## Metrics & KPIs

### Track These Metrics

**Top of Funnel:**
- Survey completion rate
- Survey responses per month
- High-priority leads (Q6-Q8 = C or D)

**Middle of Funnel:**
- Deep Dive interview booking rate
- Interview completion rate
- Time from survey to interview

**Bottom of Funnel:**
- Report delivery rate
- Follow-up call booking rate
- Conversion to paid engagement

**Engagement Quality:**
- Average SSMM level of prospects
- Average estimated ROI (from calculations)
- Industry breakdown (pharma, biotech, materials, etc.)

### Success Criteria

**Good Performance:**
- Survey-to-interview conversion: >20%
- Interview-to-proposal conversion: >40%
- Proposal-to-client conversion: >30%

**Excellent Performance:**
- Survey-to-interview conversion: >35%
- Interview-to-proposal conversion: >60%
- Proposal-to-client conversion: >50%

---

## Maintenance & Updates

### When to Update These Materials

**Survey Questions:**
- After 50-100 responses (analyze patterns, refine questions)
- If industry standards change (e.g., new tools become standard)
- If new pain points emerge from interviews

**Interview Guide:**
- Quarterly review based on interviewer feedback
- When new services are added to Phorma's portfolio
- If Value Proposition Canvas mapping changes

**Email Templates:**
- When brand messaging updates
- When new case studies or resources are available
- Based on email performance metrics (open rates, response rates)

### Version Control

- Track significant changes in git commits
- Date each major revision in file headers
- Maintain changelog in this README

---

## Questions & Support

For questions about implementing these materials, contact:
- **Business Development:** [Contact]
- **Marketing:** [Contact]
- **Technical Consulting:** [Contact]

---

## References

This engagement framework is based on:

1. **Alexander Osterwalder's Frameworks:**
   - Business Model Generation
   - Value Proposition Design
   - Value Proposition Canvas

2. **Research on R&D Technical Debt:**
   - "Hidden Technical Debt in Machine Learning Systems" (Google NIPS paper)
   - Reproducibility crisis literature
   - Excel gene name errors in genomics research
   - Academic-industrial computing culture gap studies

3. **Software Maturity Models:**
   - Capability Maturity Model (CMM)
   - Technical Debt Ratio (TDR) methodologies

---

## Changelog

### Version 2.0 (2025-12-23) — **Current**
- **Breaking Change:** Replaced monolithic 16-question survey with branching qualifier system
- Added Cold Qualifier (3 questions, 90 sec) with 5 routing paths
- Created clean import format for Form Builder for Docs
- Added comprehensive build guides (100-step instructions)
- Added service explanations (ELI5, family, technical levels)
- Added LinkedIn post templates
- **Removed:** Original survey files (too complex per user feedback)
- **Coming Next:** Academic Survey (8Q) + Industry Survey (12Q)

### Version 1.0 (2025-12-07)
- Initial creation of all engagement materials
- English and Spanish versions of all documents
- Complete survey, interview, and email template suite

---

*Last Updated: 2025-12-23*
