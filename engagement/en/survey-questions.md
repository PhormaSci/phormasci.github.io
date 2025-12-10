# Scientific Software Maturity Assessment
## Customer Survey - Google Form Questions (Improved Version)

This document contains a revised version of the survey, following the **Customer Discovery (Osterwalder)** methodology.

**Applied Principles:**
1.  **Separate the Problem from the Solution:** The questions focus on understanding the client's "Pains" and "Jobs-to-be-Done," without suggesting specific tools (our solution).
2.  **Ask Open-Ended and Scenario-Based Questions:** The priority is for the client to describe their reality in their own words.
3.  **Measure Impact:** The options aim to quantify the consequences of the problems (time, risk, frustration) instead of just verifying if they use a certain technology.

---

## Survey Introduction

**Title:** Scientific Software Maturity Assessment

**Description:**
At Phorma Scientific ([Phorma.sh](https://phorma.sh)), we help R&D teams **accelerate their research and development cycles**. This 5-minute survey is designed to understand the challenges your organization faces when using software for science.

Your answers are confidential and will help us identify bottlenecks that may be slowing down innovation in your team.

At the end, you will have the option to schedule a **free 30-minute diagnostic interview** to discuss these points.

---

## Section 1: Organization Profile

### Question 1: Organization Information
**Field Type:** Short Answer
**Required:** Yes

**Question:** What is your organization's name?

---

### Question 2: Contact Information
**Field Type:** Short Answer
**Required:** Yes

**Question:** Your name and role

_Example: Alex Perez, Head of Bioinformatics_

---

### Question 3: Email Address
**Field Type:** Email
**Required:** Yes

**Question:** Your contact email

---

### Question 4A: Entity Type
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** Which of the following options best describes your organization's entity type?

**Options:**
- Academic Research Institution
- Startup (any phase)
- Established Company (non-startup)
- Healthcare/Clinical Entity
- Other: ___________

---

### Question 4B: Main Topic or Specialty
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** What is the main R&D topic or specialty in your organization?

**Options:**
- Biotechnology
- Health Sciences/Medicine
- Materials Science/Engineering
- Basic Science Laboratories
- Academic Research
- Finance
- Economics
- Other: ___________

---

### Question 5: Team Size
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** How many people on your team spend a significant amount of their time on computational tasks (data analysis, modeling, software development)?

**Options:**
- 1-5
- 6-15
- 16-30
- 31-50
- 50+

---

## Section 2: Workflows and Challenges

### Question 7: From Prototype to Production
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** Imagine a software prototype (e.g., an analysis script) developed by a scientist proves to be successful. Which of these situations best describes what happens next for others to use it reliably?

**Options:**
- **A) Informal:** The script is shared "as is," and each person runs it as they can on their own computer.
- **B) Rewrite from scratch:** The engineering team takes it, but has to rewrite it almost completely, which delays implementation for weeks or months.
- **C) Author-dependent:** The scientist who created it must invest a significant amount of time to clean it up, document it, and help others use it.
- **D) Defined process:** We have a clear process to package, validate, and deploy the software so it is accessible and reliable for the rest of the team.

---

### Question 8: Continuity and Reproducibility
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** If the key person in your computational area leaves tomorrow, how difficult would it be for another team member to run a critical analysis and get the same results?

**Options:**
- **A) Almost impossible:** The key knowledge is not documented, and the data or code is isolated on their computer.
- **B) Very difficult:** It would take us weeks or even months to rebuild the software environment, find the correct data, and validate the results.
- **C) Possible, but with effort:** It would take several days to set up a new environment and ensure everything works as expected.
- **D) Straightforward:** We have the documentation and tools to reproduce the environment and results in a matter of hours or a few days.

---

### Question 9: R&D Team Focus
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** What percentage of time do you estimate your R&D team spends on support tasks (maintaining software, cleaning data, fixing bugs) instead of researching or developing innovations?

**Options:**
- **A) >60% of the time** (Mainly on support)
- **B) 30-60% of the time** (Balanced towards support)
- **C) 10-30% of the time** (Balanced towards research)
- **D) <10% of the time** (Mainly on research)

---

### Question 10: Main Operational Challenge
**Field Type:** Paragraph
**Required:** Yes

**Question:** In your own words, what is the biggest bottleneck or technical challenge holding back your R&D team today?

---

## Section 3: Current Tools and Practices

### Question 11: Version Control and Collaboration
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** How does your team share and manage code?

**Options:**
- We don't use a formal system. It's shared via email or chat.
- We use shared folders (e.g., Dropbox, Google Drive, OneDrive).
- Subversion (SVN)
- Git (e.g., GitHub, GitLab, Bitbucket)
- Other: ___________

---

### Question 12: Data Management and Analysis
**Field Type:** Checkboxes (Select all that apply)
**Required:** Yes

**Question:** What tools does your team primarily use to analyze and manage data?

**Options:**
- Microsoft Excel
- R / RStudio
- Python (e.g., Jupyter, Pandas)
- MATLAB
- Domain-specific software (e.g., BLAST, PyMOL, ImageJ)
- Databases (e.g., SQL, NoSQL)
- Cloud platforms (e.g., Snowflake, BigQuery)
- Custom in-house tools
- Other: ___________

---

### Question 13: Computational Infrastructure
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** Where are most computational analyses run?

**Options:**
- On personal computers (laptops/desktops)
- Shared local servers (on-premise)
- High-Performance Computing (HPC) cluster
- Cloud infrastructure (e.g., AWS, Azure, GCP)
- Hybrid (mix of local and cloud)

---

### Question 14: Software Testing and Quality
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** How do you ensure that the code produces correct and reliable results?

**Options:**
- We don't have a formal validation process.
- Sporadic manual testing, usually when someone reports a problem.
- Peer code review.
- We develop automated tests that run regularly.
- Other: ___________

---

## Section 4: Goals and Next Steps

### Question 15: Strategic Priorities
**Field Type:** Checkboxes (Select all that apply)
**Required:** Yes

**Question:** For the next year, what are the most important priorities for your team or department?

**Options:**
- Accelerate time to discovery or market for products.
- Improve the reproducibility of results to comply with regulations or publications.
- Scale computational capacity to handle larger data volumes.
- Reduce operational costs (cloud, infrastructure, personnel).
- Facilitate the onboarding and training of new team members.
- Integrate AI/ML capabilities into our workflows.
- Improve collaboration between teams (e.g., R&D and engineering).
- Other: ___________

---

### Question 16: Interest in Diagnostic
**Field Type:** Multiple Choice
**Required:** Yes

**Question:** Would you be interested in scheduling a **free 30-minute diagnostic interview** with our team to explore your challenges and outline possible solutions?

**Options:**
- Yes, I'd like to schedule the interview.
- Maybe, I'd like to receive more information first.
- Not at this time.

---

## Survey Completion Message

**Title:** Thank you for your answers!

**Message:**
We appreciate the time you have taken. The information you shared is very valuable.

**Next steps:**

1.  Our team will review your answers.
2.  If you chose "Yes," we will contact you to coordinate the **free diagnostic interview**.
3.  If applicable, after the conversation, we might propose a plan to create a **modernization report and strategic roadmap (paid service)**. This report would detail:
    *   A maturity analysis of your workflows.
    *   An assessment of how current inefficiencies impact your goals (ROI).
    *   A roadmap with actionable recommendations.

**Questions?** Write to us at: [Insert Contact Email]

---

## Notes for Google Form Setup

1.  **Use page breaks** to separate the four main sections.
2.  **Enable "Show progress bar"** for participants to see their progress.
3.  **Set up email notifications** to alert the team of new responses.
4.  **Use conditional logic:** If Q15 = "Yes," show an optional field for preferred contact times.
5.  **Enable "Response receipts"** so participants receive a copy of their answers.
6.  **Custom thank you page:** Use the completion message above.
7.  **Limit to 1 response per email** to prevent duplicate submissions.