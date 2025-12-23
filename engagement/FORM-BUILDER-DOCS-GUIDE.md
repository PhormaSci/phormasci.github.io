# Form Builder for Docs - Complete Setup Guide

## 🎯 Quick Start (15 minutes per form)

This guide shows you how to use **Form Builder for Docs** to create the Cold Qualifier Forms from the simplified text files.

---

## 📋 Prerequisites

1. ✅ Form Builder for Docs extension installed: https://workspace.google.com/marketplace/app/form_builder_for_docs/725512574241
2. ✅ Google account with access to Google Docs and Forms
3. ✅ Files ready: `qualifier-form-CLEAN-EN.txt` and `qualifier-form-CLEAN-ES.txt`

---

## 🚀 Part 1: Import the English Form

### Step 1: Create a New Google Doc

1. Go to [docs.google.com](https://docs.google.com)
2. Click **"+ Blank document"**
3. Name it: `Qualifier Form - English - Import`

### Step 2: Copy the Clean Content

1. Open `qualifier-form-CLEAN-EN.txt`
2. **Select ALL** content (Ctrl+A / Cmd+A)
3. **Copy** (Ctrl+C / Cmd+C)
4. **Paste** into the Google Doc (Ctrl+V / Cmd+V)

### Step 3: Run Form Builder

1. In Google Doc menu: **Extensions** → **Form Builder for Docs** → **Create form**
2. Wait ~5-10 seconds for it to process
3. A new Google Form will be created and opened in a new tab

### Step 4: Review Auto-Generated Form

Form Builder will create:
- ✅ Sections (based on `## SECTION` headers)
- ✅ Questions (lines with `?` at the end)
- ✅ Multiple choice options (lines starting with `-`)
- ⚠️ **But NOT:** Branching logic, validation, or help text

---

## 🛠️ Part 2: Manual Configuration (Required)

Form Builder for Docs creates a **basic structure**, but you must manually configure:

### A. Add Form Title and Description

1. In the form, click **"Untitled form"** at top
2. Change to: `Computational Health Quick Assessment`
3. Click **"Form description"**
4. Add:
   ```
   Help us understand your computational challenges in life sciences research or development.

   This quick assessment (less than 90 seconds) will route you to the most relevant resources and next steps based on your needs.
   ```

### B. Configure Question 2 (Open Text Challenge)

1. Find: **"What's your biggest computational or software challenge right now?"**
2. Click the question to edit
3. Click **"⋮" (three dots)** → **Description**
4. Add help text:
   ```
   Share 1-2 sentences about what's slowing you down or causing frustration.

   Examples:
   • "Our analysis scripts break when we update software"
   • "We can't reproduce results from last year's paper"
   • "Pipeline takes weeks to run and we don't know why"
   ```
5. Click **"⋮" (three dots)** → **Response validation**
6. Select: **Text** → **Length** → **Minimum character count: 20**
7. Custom error text: `Please provide at least 20 characters to help us understand your challenge`

### C. Set Up Branching Logic (CRITICAL!)

**After Question 3: "What would be most helpful for you right now?"**

1. Click the question to select it
2. Click **"⋮" (three dots)** → **Go to section based on answer**
3. Configure routing:
   - `Take a detailed diagnostic survey...` → **Section 2A: Choose Your Survey**
   - `Book a free 20-minute call...` → **Section 2B: Book Assessment Call**
   - `Receive case studies...` → **Section 2C: Request Resources**
   - `Just browsing...` → **Section 2D: Newsletter Signup**

**In Section 2A: After "Which survey matches your context?"**

1. Click the question
2. **⋮** → **Go to section based on answer**
3. Configure:
   - `Academic/Research Survey` → **Section 3** (you'll create this)
   - `Industry/Clinical Survey` → **Section 4** (you'll create this)

### D. Add Missing Sections (External Links)

Form Builder won't create the "redirect to external survey" sections. Add them manually:

**Add Section 3: Academic Survey Link**

1. At bottom of form, click **"+ Add section"**
2. Section title: `Continue to Academic Survey`
3. Section description:
   ```
   Click the link below to open the Academic Diagnostic Survey in a new tab:

   👉 [ACADEMIC SURVEY LINK - INSERT WHEN READY]

   This will take ~7 minutes to complete. Based on your responses, we'll send you a personalized assessment of your computational health.

   (You can close this window once you've opened the survey link)
   ```
4. Add a dummy question:
   - Type: **Multiple choice**
   - Question: `Have you opened the survey link?`
   - Options:
     - `Yes, I've opened it in a new tab`
     - `No, I'll do it later`
   - Make it **Optional** (toggle off "Required")
5. After this question → **Go to section: Section 5 (Thank You)**

**Add Section 4: Industry Survey Link**

(Repeat same structure as Section 3, but for Industry survey)

**Add Section 5: Thank You**

1. Add final section at bottom
2. Section title: `Thank You!`
3. Section description:
   ```
   We appreciate you taking the time to share your challenges with us.

   📬 WHAT HAPPENS NEXT:

   • Survey respondents: You'll receive a personalized assessment within 2 business days
   • Call bookings: Check your email for the calendar invite
   • Resource requests: You'll receive materials within 24 hours
   • Newsletter signups: Watch for our next issue (sent monthly)

   ❓ QUESTIONS?
   Email us at info@phorma.sh

   🌐 LEARN MORE:
   Visit phorma.sh to explore our services and approach

   ---

   Structure over Chaos.
   — Phorma Scientific
   ```
4. **No questions in this section** (it's just a thank you page)
5. Make sure all previous paths route here

### E. Configure Email Validation

**For all email questions** (Sections 2B, 2C, 2D):

1. Click the email question
2. **⋮** → **Response validation**
3. Select: **Text** → **Email**
4. Custom error text: `Please enter a valid email address`

### F. Make Questions Required

Set as **Required** (toggle on):
- ✅ Q1: Organization type
- ✅ Q2: Main challenge
- ✅ Q3: Preferred next step
- ✅ Q4: Survey type choice (Section 2A)
- ✅ Q7: Email (Section 2B - call booking)
- ✅ Q8: Email (Section 2C - resources)

Set as **Optional** (toggle off):
- ⬜ Q9: Topic interests (Section 2C)
- ⬜ Q10: Newsletter email (Section 2D)
- ⬜ Q5, Q6: "Have you opened link?" (Sections 3, 4)

### G. Add Calendly Link (Section 2B)

1. Go to Section 2B description
2. Add your Calendly link:
   ```
   📅 Click here to choose a time: https://calendly.com/phorma-scientific/assessment

   Before the call, we'll send you a short prep email so we can make the most of our 20 minutes together.
   ```

### H. Configure Form Settings

1. Click **⚙️ Settings** (top right)

**General tab:**
- ☐ Collect email addresses: **OFF** (we ask manually)
- ☐ Limit to 1 response: **OFF**
- ☐ Respondents can edit after submit: **OFF**

**Presentation tab:**
- ☑️ Show progress bar: **ON**
- ☐ Shuffle question order: **OFF**
- ☐ Show link to submit another response: **OFF**

**Responses tab:**
- Set up Google Sheets: **Click "Select response destination"** → **Create a new spreadsheet**
- Name it: `Qualifier Responses - English`

---

## 🌍 Part 3: Create Spanish Version

### Option A: Duplicate and Translate (Faster)

1. In the English form, click **⋮** (three dots top right) → **Make a copy**
2. Name it: `Computational Health Quick Assessment (ES)`
3. Manually translate ALL text using `qualifier-form-CLEAN-ES.txt` as reference
4. Update all descriptions, help text, validation messages
5. Link to new response sheet: `Qualifier Responses - Spanish`

### Option B: Import from Scratch

1. Create new Google Doc: `Qualifier Form - Spanish - Import`
2. Copy content from `qualifier-form-CLEAN-ES.txt`
3. Run Form Builder for Docs
4. Repeat ALL manual configuration steps from Part 2
5. Use Spanish text throughout

**Recommendation:** Use **Option A** (duplicate and translate) - faster and ensures identical structure.

---

## ✅ Part 4: Testing Checklist

### Test Path 1: Detailed Survey → Academic

1. Fill Q1: `Academic/Research Institution`
2. Fill Q2: `Testing reproducibility issues with analysis scripts`
3. Choose Q3: `Take a detailed diagnostic survey...`
4. ✅ Should route to Section 2A
5. Choose: `Academic/Research Survey`
6. ✅ Should route to Section 3 (Academic Survey Link)
7. Click dummy Q5 option
8. ✅ Should route to Section 5 (Thank You)
9. Submit form

**Expected:** Response recorded, thank you message shows

### Test Path 2: Detailed Survey → Industry

(Same as Path 1, but choose `Industry/Clinical Survey` in Section 2A)

### Test Path 3: Call Booking

1. Fill Q1-Q2
2. Choose Q3: `Book a free 20-minute call...`
3. ✅ Should route to Section 2B
4. Enter email: `test@example.com`
5. ✅ Should validate as proper email
6. Submit
7. ✅ Should show thank you message

### Test Path 4: Resources

1. Fill Q1-Q2
2. Choose Q3: `Receive case studies...`
3. ✅ Should route to Section 2C
4. Enter email, select 2-3 topic interests
5. Submit

### Test Path 5: Newsletter

1. Fill Q1-Q2
2. Choose Q3: `Just browsing...`
3. ✅ Should route to Section 2D
4. Optionally enter email
5. Submit

### Validation Tests

**Test email validation:**
- Try submitting `notanemail` → Should show error
- Try submitting `test@example.com` → Should accept

**Test required fields:**
- Try submitting without Q1 → Should block
- Try submitting without Q2 → Should block
- Try submitting Q2 with only `test` (< 20 chars) → Should show validation error

**Test branching:**
- Verify each Q3 choice routes to correct section
- Verify Section 2A routes to correct survey section
- Verify all paths end at Thank You section

---

## 📊 Part 5: Response Tracking Setup

### Auto-Generated Spreadsheet

When you linked responses to Google Sheets, a sheet was auto-created with columns for each answer.

### Add Calculated Columns

After the auto-generated columns (probably A-J), add these:

**Column K: Organization Segment**
Header: `Segment`

Formula (row 2):
```
=IF(B2="Academic/Research Institution","Academic",IF(OR(B2="Biotech Startup (Pre-Series B)",B2="Biotech/Pharma (Series B+)",B2="Clinical/Diagnostics Lab",B2="CRO/Service Provider"),"Industry","Other"))
```

Drag down to apply to all rows.

**Column L: Lead Score**
Header: `Score`

Formula (row 2):
```
=IF(D2="Take a detailed diagnostic survey to identify specific technical issues (7-10 min)",3,IF(D2="Book a free 20-minute technical assessment call with our team",5,IF(D2="Receive case studies and resources via email",2,1)))
```

**Column M: Follow-Up Status**
Header: `Status`

Leave blank initially. Manually update as you follow up:
- `Not Started`
- `Email Sent`
- `Call Scheduled`
- `Completed`
- `Not Interested`

### Conditional Formatting

1. Select Column L (Lead Score)
2. **Format** → **Conditional formatting**
3. Add 3 rules:
   - **If cell value = 5** → Background: Green (#d9ead3)
   - **If cell value = 3** → Background: Yellow (#fff2cc)
   - **If cell value ≤ 2** → Background: White (default)

### Create Dashboard View

1. Add a new sheet tab: `Dashboard`
2. Add summary formulas:

**Total Responses:**
```
=COUNTA(Responses!A2:A)
```

**By Organization Type:**
```
Academic: =COUNTIF(Responses!B2:B,"Academic/Research Institution")
Industry: =COUNTIF(Responses!B2:B,"Biotech*")
```

**By Next Step:**
```
Survey: =COUNTIF(Responses!D2:D,"*detailed diagnostic survey*")
Call: =COUNTIF(Responses!D2:D,"*20-minute call*")
Resources: =COUNTIF(Responses!D2:D,"*case studies*")
Newsletter: =COUNTIF(Responses!D2:D,"*browsing*")
```

**Average Lead Score:**
```
=AVERAGE(Responses!L2:L)
```

---

## 🔗 Part 6: Get Shareable Links

### Shorten the Form URL

1. In the form, click **Send** (top right)
2. Click **🔗 Link** tab
3. ✅ Check **"Shorten URL"**
4. Copy the shortened link (e.g., `https://forms.gle/ABC123`)

### Create Branded Short Links (Optional)

If you have `phorma.sh` domain with redirect capability:

**English:**
- Full: `https://forms.gle/ABC123`
- Branded: `https://phorma.sh/assess-en`

**Spanish:**
- Full: `https://forms.gle/XYZ789`
- Branded: `https://phorma.sh/assess-es`

**How to set up:**
1. Use your domain registrar's redirect feature
2. Or set up via website `.htaccess` / server config
3. Or use a service like Bitly with custom domain

---

## ⚠️ Troubleshooting

### Issue: Form Builder adds too many elements

**Solution:** Use the CLEAN .txt files I created. They have minimal formatting that Form Builder can parse cleanly.

### Issue: Branching doesn't work

**Check:**
1. Did you set "Go to section based on answer" on the routing questions?
2. Are section names exactly matching?
3. Did you create Sections 3, 4, and 5 manually?

### Issue: Email validation not working

**Fix:**
1. Click the email question
2. ⋮ → Response validation
3. Text → **Email** (not "Regular expression")

### Issue: Required fields can be skipped

**Fix:**
1. Each question has a toggle switch: **Required**
2. Make sure it's ON (blue) for Q1, Q2, Q3, Q4, Q7, Q8

### Issue: Thank you message not showing

**Fix:**
1. Settings → Presentation → Confirmation message
2. Make sure you've filled in custom text
3. Or use Section 5 description as the final message

---

## 📋 Quick Reference: Section Flow

```
Section 1: Qualifier (Q1-Q3)
    ├─ Q3 → "Survey" → Section 2A (Q4)
    │              ├─ "Academic" → Section 3 (Q5) → Section 5
    │              └─ "Industry" → Section 4 (Q6) → Section 5
    ├─ Q3 → "Call" → Section 2B (Q7) → Section 5
    ├─ Q3 → "Resources" → Section 2C (Q8-Q9) → Section 5
    └─ Q3 → "Newsletter" → Section 2D (Q10) → Section 5

Section 5: Thank You (End)
```

---

## ✅ Completion Checklist

### English Form:
- [ ] Imported from CLEAN-EN.txt
- [ ] Added form title and description
- [ ] Configured Q2 help text and validation
- [ ] Set up Q3 branching (4 paths)
- [ ] Set up Section 2A Q4 branching (2 paths)
- [ ] Created Section 3 (Academic link) manually
- [ ] Created Section 4 (Industry link) manually
- [ ] Created Section 5 (Thank You) manually
- [ ] Added Calendly link to Section 2B
- [ ] Set email validation on Q7, Q8, Q10
- [ ] Made Q1-Q4, Q7-Q8 required
- [ ] Configured form settings (progress bar, etc.)
- [ ] Linked to Google Sheets
- [ ] Tested all 5 paths
- [ ] Got shareable link

### Spanish Form:
- [ ] Duplicated English form OR imported from CLEAN-ES.txt
- [ ] Translated all text to Spanish
- [ ] Verified branching logic intact
- [ ] Tested all 5 paths
- [ ] Linked to separate Spanish response sheet
- [ ] Got shareable link

---

## 🎯 Success Criteria

**You're done when:**

1. ✅ Both English and Spanish forms are live
2. ✅ All 5 user paths work correctly
3. ✅ Responses flow to Google Sheets
4. ✅ Email validation prevents bad emails
5. ✅ Required fields block submission if empty
6. ✅ You have shareable links for both forms
7. ✅ Placeholder links noted for Academic/Industry surveys (to be added later)

---

## ⏭️ What's Next

Once both forms are built and tested:

**Share with me:**
1. English form URL
2. Spanish form URL
3. Any issues or questions

**I'll provide next:**
1. **Academic Diagnostic Survey** (8 simplified questions, ~7 min)
2. **Industry Diagnostic Survey** (12 technical questions, ~10 min)
3. Both in CLEAN format for Form Builder for Docs

Then you'll insert those URLs into Sections 3 and 4 of the Qualifier Forms!

---

## 📁 File Reference

**Use these files:**
- `qualifier-form-CLEAN-EN.txt` → Copy into Google Doc for English import
- `qualifier-form-CLEAN-ES.txt` → Copy into Google Doc for Spanish import
- This file (`FORM-BUILDER-DOCS-GUIDE.md`) → Step-by-step instructions

**Estimated time:**
- English form: ~45 minutes (first time)
- Spanish form: ~30 minutes (duplicate + translate)
- **Total: ~75 minutes**

---

**Ready to build? Start with Part 1 and work your way through!** 🚀
