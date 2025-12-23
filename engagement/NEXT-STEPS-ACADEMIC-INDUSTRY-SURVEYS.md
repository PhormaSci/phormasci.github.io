# Next Steps: Build Academic & Industry Surveys

## ✅ **Status Update**

**Completed:**
- ✅ Spanish Qualifier Form built and tested
- ✅ URL: https://forms.gle/hZ25JcNMhhKAN9E18
- ✅ Academic Survey questions designed (8 questions)
- ✅ Industry Survey questions designed (12 questions)
- ✅ Manual build guides created for both

**To Do:**
- [ ] Build Academic Survey (Spanish)
- [ ] Build Industry Survey (Spanish)
- [ ] Insert survey URLs into Qualifier Form
- [ ] Test complete user journey

---

## 🎯 **Your Next Actions**

### **Action 1: Build Academic Survey** (~25 min)

**Follow:** `engagement/MANUAL-BUILD-ACADEMIC-SURVEY-ES.md`

**What you'll build:**
- 8 simplified questions
- ~7 minute completion time
- Plain language (no jargon)
- Concrete examples (ImageJ, Excel, email)

**Target audience:**
- Academic/research institutions
- Small labs (1-15 people)
- Limited software engineering infrastructure

**When done:**
Share URL here: ____________________

---

### **Action 2: Build Industry Survey** (~35 min)

**Follow:** `engagement/MANUAL-BUILD-INDUSTRY-SURVEY-ES.md`

**What you'll build:**
- 12 technical questions
- ~10 minute completion time
- Infrastructure, CI/CD, compliance depth

**Target audience:**
- Biotech startups (pre/post Series B)
- Pharma R&D teams
- Clinical/diagnostic labs
- CROs

**When done:**
Share URL here: ____________________

---

## 🔗 **Action 3: Update Qualifier Form**

Once you have both survey URLs, update the Qualifier Form:

### **Update Section 6: Academic Survey Link**

1. Open Qualifier: https://forms.gle/hZ25JcNMhhKAN9E18
2. Go to **Section 6** (Encuesta Académica)
3. Find the text: `[ENLACE A LA ENCUESTA ACADÉMICA - INSERTAR CUANDO ESTÉ LISTA]`
4. Replace with actual URL from Action 1

### **Update Section 7: Industry Survey Link**

1. Still in Qualifier Form
2. Go to **Section 7** (Encuesta Industria)
3. Find the text: `[ENLACE A LA ENCUESTA INDUSTRIA - INSERTAR CUANDO ESTÉ LISTA]`
4. Replace with actual URL from Action 2

---

## ✅ **Action 4: Test Complete Journey**

Test all user paths end-to-end:

### **Path 1: Academic Survey Route**
1. Open Qualifier: https://forms.gle/hZ25JcNMhhKAN9E18
2. Q1: Select "Institución Académica/de Investigación"
3. Q2: Enter a challenge (e.g., "Scripts que se rompen")
4. Q3: Select "Hacer una encuesta diagnóstica detallada"
5. Q4: Select "Encuesta Académica/Investigación"
6. Click Academic Survey link → Should open form
7. Complete Academic Survey
8. Verify confirmation message appears

### **Path 2: Industry Survey Route**
1. Open Qualifier (new session)
2. Q1: Select "Biotech/Pharma (Serie B+)"
3. Q2: Enter challenge
4. Q3: Select "Hacer una encuesta diagnóstica detallada"
5. Q4: Select "Encuesta Industria/Clínica"
6. Click Industry Survey link → Should open form
7. Complete Industry Survey
8. Verify confirmation message appears

### **Path 3: Call Booking**
1. Open Qualifier (new session)
2. Q3: Select "Agendar una consulta técnica gratuita"
3. Enter email
4. Verify Calendly link works (when you add it)

### **Path 4: Resources**
1. Open Qualifier (new session)
2. Q3: Select "Recibir casos de estudio y recursos"
3. Enter email
4. Select topics
5. Verify thank you message

### **Path 5: Newsletter**
1. Open Qualifier (new session)
2. Q3: Select "Solo estoy explorando"
3. Optionally enter email
4. Verify thank you message

---

## 📊 **What Success Looks Like**

After completing all actions:

✅ **3 working forms:**
- Qualifier (3 Q) → Routes to appropriate path
- Academic Survey (8 Q) → Simplified for small labs
- Industry Survey (12 Q) → Technical depth for biotech/pharma

✅ **5 user journeys work:**
- Academic survey path
- Industry survey path
- Call booking (when Calendly added)
- Resource request
- Newsletter signup

✅ **Data collection setup:**
- All 3 forms send responses to Google Sheets
- Analysis columns added (formulas provided in build guides)
- Lead scoring functional

---

## 🌍 **English Versions (Phase 2)**

After Spanish versions are working, we'll create:
- [ ] Academic Survey (English)
- [ ] Industry Survey (English)
- [ ] English Qualifier (duplicate of Spanish)

**Estimated time:** ~60 min (faster because it's translation)

---

## 📋 **Files Reference**

All documentation in `/engagement/`:

| File | Purpose |
|------|---------|
| `MANUAL-BUILD-ACADEMIC-SURVEY-ES.md` | Step-by-step academic survey build |
| `MANUAL-BUILD-INDUSTRY-SURVEY-ES.md` | Step-by-step industry survey build |
| `academic-survey-CLEAN-ES.txt` | Import file (if using Form Builder) |
| `industry-survey-CLEAN-ES.txt` | Import file (if using Form Builder) |
| `qualifier-flow-diagram.md` | Visual routing map |

---

## ⏱️ **Time Estimate**

- Build Academic Survey: 25 min
- Build Industry Survey: 35 min
- Update Qualifier links: 5 min
- Test all 5 paths: 15 min

**Total:** ~80 minutes

---

## 🎯 **Ready to Build?**

**Start with Academic Survey:**
Open `engagement/MANUAL-BUILD-ACADEMIC-SURVEY-ES.md`

**Then Industry Survey:**
Open `engagement/MANUAL-BUILD-INDUSTRY-SURVEY-ES.md`

**Then update Qualifier with both URLs.**

---

## 🚀 **After This Phase**

Once all 3 Spanish forms work:

1. **Deploy:** Add Qualifier to phormasci.github.io website
2. **Test:** Send to IBYME contact for validation
3. **Iterate:** Adjust based on real user feedback
4. **Translate:** Create English versions
5. **Analyze:** Review first 30 responses, optimize

---

**Questions? Issues? Share here and I'll help troubleshoot!**
