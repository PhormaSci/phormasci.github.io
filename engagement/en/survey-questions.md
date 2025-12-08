# Scientific Software Health Check Survey
## Client Engagement Survey - Google Form Questions

This document contains the questions for the "Scientific Software Health Check" survey, designed to identify technical debt and operational inefficiencies in R&D organizations.

---

## Survey Introduction

**Title:** Scientific Software Health Check: R&D Pipeline Assessment

**Description:**
This brief 5-minute survey helps identify opportunities to accelerate your R&D innovation cycle. By understanding your current computational infrastructure, we can highlight areas where technical inefficiencies may be slowing your team's scientific discovery process.

Your responses will be treated confidentially and used solely to prepare a customized diagnostic report for your organization.

---

## Section 1: Organization Profile

### Question 1: Organization Information
**Field Type:** Short Answer
**Required:** Yes

**Question:** What is your organization name?

---

### Question 2: Contact Information
**Field Type:** Short Answer
**Required:** Yes

**Question:** Your name and title?

_Example: Dr. Jane Smith, Director of Bioinformatics_

---

### Question 3: Email Address
**Field Type:** Email
**Required:** Yes

**Question:** Best email to reach you?

---

### Question 4: Organization Type
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** Which best describes your organization?

**Options:**
- Academic Research Institution
- Biotech Startup (Seed/Series A)
- Biotech Startup (Series B+)
- Pharmaceutical Company
- Healthcare/Clinical Research
- Material Science/Engineering R&D
- Other: ___________

---

### Question 5: Team Size
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** How many researchers/scientists are on your computational team?

**Options:**
- 1-5
- 6-15
- 16-30
- 31-50
- 50+

---

## Section 2: Pain Point Assessment

### Question 6: Velocity & Scalability (The Technical Debt Trap)
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** Which of the following best describes the transition of software from your research team to your production environment?

**Options:**
- **A) Automated and Seamless:** Code is version-controlled, containerized (Docker), and deploys via CI/CD pipelines without manual intervention.
- **B) Functional but Fragile:** We have code that works, but we rely on a specific sequence of manual steps and dread touching it because it might break.
- **C) The Rewrite Cycle:** Research code is essentially discarded, and engineering teams must rewrite algorithms from scratch for production, causing months of delay.
- **D) Ad-hoc & Local:** We rely on manual Excel sheets and scripts stored on individual laptops; there is no central 'production' environment.

---

### Question 7: Integrity & Reproducibility (The Science Trap)
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** If your lead computational scientist were to leave tomorrow, how confident are you that their analysis pipelines could be re-run by a new hire to produce identical results on a fresh machine?

**Options:**
- **A) Extremely Confident:** Everything is containerized (Docker/Singularity), dependencies are pinned, and data is versioned (DVC/Pachyderm).
- **B) Somewhat Confident:** We have the code, but setting up the environment takes weeks of trial and error to match library versions.
- **C) Anxious:** There are many "magic steps" (manual file moves, parameter tweaks) that only the lead scientist knows.
- **D) Impossible:** The data lives on their hard drive and the methodology is partially in their head.

---

### Question 8: Talent & Continuity (The People Trap)
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** How much time does your R&D team spend on software maintenance, data cleaning, and debugging versus new scientific discovery?

**Options:**
- **A) < 10% on maintenance** (Pure Innovation Focus)
- **B) 10-30% on maintenance** (Healthy Balance)
- **C) 30-60% on maintenance** (Dragging Velocity)
- **D) > 60% on maintenance** (Technical Bankruptcy)

---

## Section 3: Current State Assessment

### Question 9: Version Control & Collaboration
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** Which version control system does your team currently use?

**Options:**
- Git (GitHub, GitLab, Bitbucket)
- Subversion (SVN)
- Shared network drives with file versioning (e.g., Dropbox, OneDrive)
- No formal version control
- Other: ___________

---

### Question 10: Data Management
**Field Type:** Checkboxes (Select all that apply)
**Required:** Yes

**Question:** Which tools does your team use for data analysis and management? (Select all that apply)

**Options:**
- Microsoft Excel
- R / RStudio
- Python (Jupyter Notebooks)
- MATLAB
- Specialized domain software (e.g., BLAST, PyMOL, ImageJ)
- SQL Databases
- Cloud data warehouses (e.g., Snowflake, BigQuery)
- Custom in-house tools
- Other: ___________

---

### Question 11: Infrastructure
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** Where does your team primarily run computational analyses?

**Options:**
- Individual laptops/desktops
- Shared on-premise servers
- HPC cluster (on-premise)
- Cloud infrastructure (AWS, Azure, GCP)
- Hybrid (mix of on-premise and cloud)

---

### Question 12: Testing & Quality Assurance
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** How does your team ensure code quality and correctness?

**Options:**
- Automated testing with continuous integration (CI)
- Manual code review by peers
- Ad-hoc testing when someone notices a problem
- We don't have a formal QA process
- Other: ___________

---

## Section 4: Pain Points & Goals

### Question 13: Biggest Challenge
**Field Type:** Paragraph
**Required:** No

**Question:** What is the single biggest technical or operational challenge your R&D team faces today?

---

### Question 14: Strategic Goals
**Field Type:** Checkboxes (Select all that apply)
**Required:** Yes

**Question:** What are your top strategic priorities for this year? (Select all that apply)

**Options:**
- Accelerate time-to-market for new products/therapies
- Improve data reproducibility and regulatory compliance
- Scale computational infrastructure for larger datasets
- Reduce operational costs (cloud, infrastructure, personnel)
- Onboard new team members faster
- Integrate AI/ML into workflows
- Improve collaboration across teams
- Other: ___________

---

### Question 15: Interest in Deep Dive
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** Based on your responses, you may benefit from a complimentary 45-minute Deep Dive Diagnostic with Phorma Scientific to quantify technical inefficiencies and propose a modernization roadmap. Would you be interested?

**Options:**
- Yes, I'd like to schedule a Deep Dive Interview
- Maybe, send me more information first
- Not at this time

---

## Survey Completion Message

**Title:** Thank you for completing the Scientific Software Health Check!

**Message:**

Based on your responses, your R&D organization may be carrying a "Technical Tax" that could be slowing your innovation cycle.

**What happens next:**

1. Our team will analyze your responses within 2 business days
2. You will receive a preliminary assessment via email
3. If you selected "Yes" for the Deep Dive, we will reach out to schedule a 45-minute diagnostic interview
4. Following the interview, we will provide a customized report with:
   - Your Scientific Software Maturity Level (1-5)
   - Quantified ROI analysis of current inefficiencies
   - Recommended modernization roadmap

Phorma Scientific specializes in converting technical debt into strategic equity for R&D organizations.

**Questions?** Contact us at: [Insert Contact Email]

---

## Notes for Google Form Setup

1. **Use page breaks** to separate the four main sections for better user experience
2. **Enable "Show progress bar"** so respondents know how far along they are
3. **Set up email notifications** to alert the team when a new response is submitted
4. **Use conditional logic:** If Q15 = "Yes", show an additional optional field for preferred contact times
5. **Enable "Response receipts"** so respondents get a copy of their answers
6. **Custom thank you page:** Use the completion message above
7. **Limit to 1 response per email** to prevent duplicate submissions
