# Qualifier Form Build Checklist

**Quick reference for building the qualifier forms in Google Forms**

---

## 🇬🇧 English Form Build Checklist

### Setup
- [ ] Go to forms.google.com
- [ ] Create new blank form
- [ ] Set title: "Computational Health Quick Assessment"
- [ ] Add form description (see build guide)

### Section 1: Qualifier (3 questions)
- [ ] Q1: Organization type (multiple choice, 6 options, required)
- [ ] Q2: Main challenge (paragraph, min 20 chars, required)
- [ ] Q3: Preferred next step (multiple choice, 4 options, required)
- [ ] **Set branching on Q3** → 4 different sections

### Section 2A: Survey Path Choice
- [ ] Add section description
- [ ] Q4: Academic vs Industry survey (multiple choice, 2 options, required)
- [ ] **Set branching on Q4** → Section 3 or 4

### Section 3: Academic Survey Link
- [ ] Add section description with link placeholder
- [ ] Q5: Opened link? (optional tracking)
- [ ] **Route to Section 5**

### Section 4: Industry Survey Link
- [ ] Add section description with link placeholder
- [ ] Q6: Opened link? (optional tracking)
- [ ] **Route to Section 5**

### Section 2B: Call Booking
- [ ] Add section description with Calendly link
- [ ] Q7: Email address (short answer, email validation, required)
- [ ] **Route to Section 5**

### Section 2C: Resources Request
- [ ] Add section description
- [ ] Q8: Email address (short answer, email validation, required)
- [ ] Q9: Topic interests (checkboxes, 7 options, optional)
- [ ] **Route to Section 5**

### Section 2D: Newsletter
- [ ] Add section description
- [ ] Q10: Email address (short answer, email validation, optional)
- [ ] **Route to Section 5**

### Section 5: Thank You
- [ ] Add final thank you message
- [ ] No questions in this section

### Form Settings
- [ ] Settings → General → DON'T collect email addresses
- [ ] Settings → Presentation → Show progress bar: YES
- [ ] Settings → Presentation → Custom confirmation message

### Testing
- [ ] Test path: Survey → Academic
- [ ] Test path: Survey → Industry
- [ ] Test path: Call booking
- [ ] Test path: Resources
- [ ] Test path: Newsletter
- [ ] Verify email validation works
- [ ] Verify 20-char minimum on Q2

### Response Setup
- [ ] Create Google Sheet for responses
- [ ] Name: "Qualifier Responses - English"
- [ ] Add calculated columns (see build guide)
- [ ] Set up conditional formatting

### Final
- [ ] Get shareable link
- [ ] Test link in incognito mode
- [ ] Copy link for later use

---

## 🇪🇸 Spanish Form Build Checklist

### Setup
- [ ] Create new blank form
- [ ] Set title: "Evaluación Rápida de Salud Computacional"
- [ ] Add form description (Spanish version)

### Follow same structure as English
- [ ] Section 1: 3 questions with branching
- [ ] Section 2A: Survey choice
- [ ] Section 3: Academic link
- [ ] Section 4: Industry link
- [ ] Section 2B: Call booking
- [ ] Section 2C: Resources
- [ ] Section 2D: Newsletter
- [ ] Section 5: Thank you

### Settings
- [ ] Same as English version

### Testing
- [ ] Test all 5 paths
- [ ] Verify validations work

### Response Setup
- [ ] Create Google Sheet
- [ ] Name: "Respuestas Calificador - Español"
- [ ] Add same calculated columns

### Final
- [ ] Get shareable link
- [ ] Test in incognito
- [ ] Copy link

---

## 📋 Links to Update Later

Once you've built the Academic and Industry surveys:

### In English Qualifier
- [ ] Section 3 description → Insert Academic Survey link
- [ ] Section 4 description → Insert Industry Survey link
- [ ] Section 2B description → Insert Calendly link

### In Spanish Qualifier
- [ ] Section 3 description → Insert Academic Survey link (ES)
- [ ] Section 4 description → Insert Industry Survey link (ES)
- [ ] Section 2B description → Insert Calendly link

---

## ⏱️ Time Estimates

- English form: 30-40 minutes
- Spanish form: 20-30 minutes (faster because it's duplicate)
- Testing both: 15 minutes
- Total: ~75-90 minutes

---

## 🆘 Common Issues

**Issue:** Can't find branching option
**Fix:** Click ⋮ (three dots) at bottom right of question

**Issue:** Email validation not working
**Fix:** Response validation → Text → Email (not "Short answer → Email")

**Issue:** Can't add section description
**Fix:** Click on section title bar, description field appears below title

**Issue:** Lost track of section numbers
**Fix:** Sections are numbered automatically on left sidebar

**Issue:** Want to reorder sections
**Fix:** Can't reorder in Google Forms - need to rebuild or duplicate

---

## ✅ When You're Done

Share both form links with me:
- English: `https://docs.google.com/forms/...`
- Spanish: `https://docs.google.com/forms/...`

Then I'll build the Academic and Industry diagnostic surveys! 🚀
