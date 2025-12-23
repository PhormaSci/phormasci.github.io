# Qualifier Form Documentation

**Created:** 2025-12-23
**Status:** Ready to Build
**Implementation:** Option A - Split Forms Approach

---

## Overview

The **Qualifier Form** is a lightweight 3-question assessment that:
- Routes leads to appropriate next steps based on their needs
- Segments audiences (academic vs. industry)
- Captures initial pain points and contact information
- Takes less than 90 seconds to complete

---

## Documentation Files

### 📘 [qualifier-form-build-guide.md](./qualifier-form-build-guide.md)
**Complete build instructions** for creating the qualifier form in Google Forms.

**What's included:**
- Full English and Spanish form text
- Question-by-question setup instructions
- Branching logic configuration
- Google Sheets response tracking formulas
- Form settings and testing checklists

**Use this when:** You're ready to build the forms in Google Forms.

---

### ✅ [qualifier-build-checklist.md](./qualifier-build-checklist.md)
**Quick reference checklist** for the build process.

**What's included:**
- Checkbox list of all setup steps
- Separate checklists for English and Spanish
- Testing verification points
- Time estimates per section

**Use this when:** You're actively building and want to track progress.

---

### 🗺️ [qualifier-flow-diagram.md](./qualifier-flow-diagram.md)
**Visual flow diagram** showing routing logic.

**What's included:**
- ASCII art flow diagram
- Section summary table
- User journey examples
- Data collection mapping

**Use this when:** You need to understand or explain how the form routes users.

---

## Form Structure

### Section 1: Qualifier (3 Questions)
1. **Organization type** - Multiple choice, 6 options
2. **Main challenge** - Open text, min 20 characters
3. **Preferred next step** - Multiple choice, 4 options
   - Detailed survey → Section 2A
   - Book call → Section 2B
   - Resources → Section 2C
   - Newsletter → Section 2D

### Section 2A: Survey Path Choice
- Routes to Academic Survey (Section 3) or Industry Survey (Section 4)

### Sections 3 & 4: Survey Links
- Provide links to separate Academic and Industry diagnostic surveys
- **Note:** These surveys will be built in Phase 2

### Sections 2B/2C/2D: Alternative Paths
- Collect contact info for call bookings, resource requests, or newsletter

### Section 5: Thank You
- Final page, all paths converge here

---

## Next Steps

### Phase 1: Build Qualifier (Current)
- [ ] Create English qualifier form using build guide
- [ ] Create Spanish qualifier form using build guide
- [ ] Test both forms with all routing paths
- [ ] Set up response tracking in Google Sheets
- [ ] Share form URLs

**Estimated time:** 75-90 minutes

### Phase 2: Build Diagnostic Surveys (Next)
Once qualifier is complete, we'll build:
- [ ] Academic Diagnostic Survey (8 questions, simplified)
- [ ] Industry Diagnostic Survey (12 questions, technical)
- [ ] Both in English and Spanish
- [ ] Insert links back into qualifier forms

**Estimated time:** 3-4 hours

### Phase 3: Integration & Launch
- [ ] Set up automated email responses
- [ ] Create follow-up workflow
- [ ] Integrate qualifier links on website
- [ ] Configure analytics tracking
- [ ] Launch and monitor

---

## Key Design Decisions

### Why Split Forms (Option A)?
After Council of Minds debate, we chose split forms because:
- ✅ Simplest to build and maintain
- ✅ Cleaner data tracking (separate sheets)
- ✅ Easier to iterate independently
- ✅ No complex cross-section branching logic

### Why 3 Questions in Qualifier?
- ✅ 60-90 second completion time (low abandonment)
- ✅ Captures essential segmentation data
- ✅ Routes to appropriate depth of engagement
- ✅ Doesn't overwhelm cold traffic

### Why Separate Academic/Industry Paths?
Based on interview feedback from IBYME researcher:
- Academic audiences found technical jargon confusing
- Small labs need simplified language and examples
- Industry clients want technical credibility signals
- Single survey couldn't serve both without being too long

---

## Success Metrics (30-Day Target)

| Metric | Target |
|--------|--------|
| Qualifier Completion Rate | >40% |
| Academic Path Selection | 30-50% |
| Industry Path Selection | 30-50% |
| Call Booking Rate | 5-10% |
| Email Capture Rate | 60%+ |

---

## Support & Questions

**Issues during build?** Check the "Common Issues" section in the build guide.

**Need to modify questions?** Edit the forms directly in Google Forms, then update links if section numbers change.

**Analytics not working?** Verify Google Sheets formulas copied correctly (check for hard-coded row numbers).

---

## Related Documents

- [engagement/survey-questions-en.md](./survey-questions-en.md) - Original detailed survey (will be split into Academic/Industry versions)
- [engagement/explanations.md](./explanations.md) - Service explanation frameworks
- [engagement/README.md](./README.md) - Overall engagement strategy

---

**Status:** Ready to build qualifier forms. Diagnostic surveys pending.

**Contact:** Questions? Email info@phorma.sh or ping in project Slack.

---

Structure over Chaos.
— Phorma Scientific
