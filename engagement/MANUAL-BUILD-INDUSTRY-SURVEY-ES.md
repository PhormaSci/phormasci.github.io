# Manual Build Guide: Industry/Clinical Survey (Spanish)

## Quick Summary
- **Questions:** 12
- **Estimated completion time:** 10 minutes
- **Target audience:** Biotech, pharma, clinical labs, CROs
- **Language:** Spanish (Argentina/LATAM)

---

## Build Steps

### Step 1: Create New Form
1. Go to [forms.google.com](https://forms.google.com)
2. Click **+ Blank** to create new form
3. Click "Untitled form" at top and rename to: **Encuesta Diagnóstica Industria/Clínica - Phorma Scientific**

### Step 2: Add Form Description
Click "Form description" and add:
```
Esta encuesta nos ayuda a entender la arquitectura computacional, infraestructura y desafíos de escalabilidad de organizaciones biotech, pharma y clínicas.

⏱️ Tiempo estimado: 10 minutos
🔒 Tus respuestas son confidenciales
📬 Recibirás una evaluación técnica detallada en 2 días hábiles
```

### Step 3: Add Email Collection
1. Click ⚙️ (Settings) → **General**
2. Toggle ON: **Collect email addresses**
3. Description: "Necesitamos tu email para enviarte la evaluación técnica personalizada"

---

## Section 1: Contexto Organizacional

### Question 1
- **Type:** Multiple choice
- **Question:** ¿Cuántas personas trabajan en tareas computacionales/de software en tu organización?
- **Required:** Yes
- **Options:**
  - 1-2 personas
  - 3-10 personas
  - 11-30 personas
  - 31-100 personas
  - 100+ personas

### Question 2
- **Type:** Multiple choice
- **Question:** ¿Qué describe mejor el foco de I+D de tu equipo?
- **Required:** Yes
- **Options:**
  - Descubrimiento (investigación básica, exploratoria)
  - Desarrollo (optimización de productos/procesos)
  - Validación/Clínica (ensayos, diagnósticos, regulatory)
  - Mix de varios

---

## Section 2: Arquitectura y Pipelines

### Question 3
- **Type:** Multiple choice
- **Question:** ¿Qué tan frecuentemente los equipos de ingeniería/IT necesitan reescribir o refactorizar código de I+D?
- **Required:** Yes
- **Options:**
  - Nunca o casi nunca
  - Ocasionalmente (1-2 veces al año)
  - Frecuentemente (mensual)
  - Constantemente (cada nuevo proyecto)
  - No tenemos equipo de ingeniería separado

### Question 4
- **Type:** Multiple choice
- **Question:** Cuando un prototipo de software (ej. script de análisis) funciona en I+D, ¿qué tan difícil es llevarlo a producción?
- **Required:** Yes
- **Options:**
  - Muy difícil (lleva meses, requiere reescritura completa)
  - Moderadamente difícil (lleva semanas, ajustes significativos)
  - Relativamente fácil (días, ajustes menores)
  - Muy fácil (deployment directo, prácticamente sin cambios)
  - No aplicamos este concepto

### Question 5
- **Type:** Multiple choice
- **Question:** ¿Qué tan confiables son tus pipelines de análisis/procesamiento?
- **Required:** Yes
- **Options:**
  - Muy frágiles (fallan frecuentemente, requieren intervención manual)
  - Moderadamente estables (fallos ocasionales, debuggeo necesario)
  - Bastante robustos (funcionan de forma confiable con monitoreo)
  - Muy robustos (producción automatizada, manejo de errores completo)

---

## Section 3: Reproducibilidad y Gestión de Código

### Question 6
- **Type:** Multiple choice
- **Question:** ¿Cómo gestionan los entornos de software para asegurar reproducibilidad?
- **Required:** Yes
- **Options:**
  - No gestionamos activamente (cada persona/proyecto usa lo que tiene instalado)
  - Documentamos versiones en READMEs o papers
  - Usamos package managers (conda, pip, renv) con archivos de requisitos
  - Usamos contenedores (Docker, Singularity) para todos los análisis críticos
  - Usamos sistemas completos de gestión de entornos (Nix, Guix, ambientes validados)

### Question 7
- **Type:** Multiple choice
- **Question:** ¿Cómo comparte y gestiona el código tu equipo?
- **Required:** Yes
- **Options:**
  - Compartimos archivos ad-hoc (email, carpetas compartidas)
  - Usamos control de versiones básico (SVN o Git sin workflows formales)
  - Usamos Git con workflows estructurados (branches, pull requests, code review)
  - Usamos plataformas CI/CD completas (GitHub Actions, GitLab CI, Jenkins)

### Question 8
- **Type:** Checkboxes (multiple select)
- **Question:** ¿Qué herramientas usan regularmente?
- **Description:** Seleccioná todas las que apliquen
- **Required:** Yes
- **Options:**
  - Python (NumPy, Pandas, scikit-learn)
  - R / Bioconductor
  - MATLAB
  - Nextflow / Snakemake / workflow managers
  - Docker / Singularity / Podman
  - Kubernetes / orquestación de contenedores
  - Jupyter / RStudio / notebooks
  - Bases de datos (PostgreSQL, MongoDB, etc.)
  - Cloud platforms (AWS, GCP, Azure)
  - HPC / SLURM / cluster computing
  - Otro

---

## Section 4: Infraestructura

### Question 9
- **Type:** Checkboxes (multiple select)
- **Question:** ¿Dónde corren los workloads computacionales principales?
- **Description:** Seleccioná todas las que apliquen
- **Required:** Yes
- **Options:**
  - On-premise (servidores propios)
  - HPC institucional o compartido
  - Cloud público (AWS, GCP, Azure)
  - Cloud privado
  - Híbrido (mix de opciones)

### Question 10
- **Type:** Checkboxes (multiple select)
- **Question:** ¿Qué prácticas de testing y validación usan?
- **Description:** Seleccioná todas las que apliquen
- **Required:** Yes
- **Options:**
  - Unit tests automatizados
  - Integration / end-to-end tests
  - Continuous Integration (CI)
  - Peer review / code review
  - Validación formal (GxP, 21 CFR Part 11)
  - Testing manual ad-hoc
  - No tenemos prácticas formales de testing

---

## Section 5: Compliance y Regulatory

### Question 11
- **Type:** Multiple choice
- **Question:** ¿Tu organización necesita cumplir con requisitos regulatorios para software?
- **Required:** Yes
- **Options:**
  - Sí, GxP (GLP, GMP, GCP)
  - Sí, FDA 21 CFR Part 11 / GAMP
  - Sí, ISO (13485, 17025, otros)
  - Sí, HIPAA / protección de datos
  - No, no tenemos requisitos regulatorios
  - No estoy seguro

---

## Section 6: Prioridades

### Question 12
- **Type:** Paragraph text
- **Question:** ¿Cuál es el mayor obstáculo técnico para escalar tus operaciones de I+D?
- **Description:** Contanos en 2-3 oraciones qué te está frenando (infraestructura, procesos, herramientas, talento, etc.)
- **Required:** Yes
- **Response validation:**
  - Minimum character count: 30

---

## Step 4: Configure Final Settings

### Settings → Presentation
1. ✅ Show progress bar: ON
2. ❌ Shuffle question order: OFF
3. **Confirmation message:**
```
¡Gracias por completar la encuesta técnica!

📬 Te enviaremos una evaluación detallada de tu arquitectura computacional dentro de 2 días hábiles.

La evaluación incluirá:
• Análisis de madurez técnica (infraestructura, procesos, tooling)
• Benchmarking contra industry best practices
• Roadmap priorizado de mejoras
• Recomendaciones específicas de arquitectura

📞 ¿Querés una sesión de 30 min para discutir la evaluación? Respondé al email con tu disponibilidad.

---
Structure over Chaos.
— Phorma Scientific

🌐 phorma.sh
📧 info@phorma.sh
```

---

## Step 5: Test the Form

### Test Checklist:
- [ ] Submit a test response
- [ ] Verify email collection works
- [ ] Check all questions display correctly
- [ ] Verify required fields block submission
- [ ] Test on mobile device
- [ ] Check confirmation message appears

---

## Step 6: Get Shareable Link

1. Click **Send** button (top right)
2. Click **🔗 Link** tab
3. Toggle ON: **Shorten URL**
4. Click **Copy** button
5. **Paste URL here:** ____________________

---

## Step 7: View Responses Setup

1. Click **Responses** tab
2. Click **📊 View in Sheets** (green icon)
3. This creates a Google Sheet with all responses

### Add Analysis Columns to Sheet:

After auto-generated columns, add these:

**Column N: Maturity Score (Simple)**
```
=IF(H2="Usamos plataformas CI/CD completas (GitHub Actions, GitLab CI, Jenkins)",5,
  IF(H2="Usamos Git con workflows estructurados (branches, pull requests, code review)",4,
  IF(H2="Usamos control de versiones básico (SVN o Git sin workflows formales)",2,1)))
```

**Column O: Has Compliance Needs**
```
=IF(M2="No, no tenemos requisitos regulatorios","No","Yes")
```

**Column P: Infrastructure Type**
```
=IF(ISNUMBER(SEARCH("Cloud público",J2)),"Cloud",
  IF(ISNUMBER(SEARCH("HPC",J2)),"HPC",
  IF(ISNUMBER(SEARCH("On-premise",J2)),"On-prem","Unknown")))
```

**Column Q: Follow-Up Priority**
```
=IF(AND(N2>=4,O2="Yes"),1,
  IF(OR(N2<=2,ISNUMBER(SEARCH("Muy frágiles",F2))),3,2))
```
(1 = High, 2 = Medium, 3 = Low priority)

---

## Next Steps

Once form is built:
1. ✅ Share URL with Tomás
2. ✅ Test submit a response
3. ✅ Verify response appears in Google Sheet
4. ✅ URL will be inserted into Qualifier Form Section 4

---

## Form Preview

**Expected structure:**
- Email collection (auto-added at top)
- Question 1-2: Organizational context (team size, R&D focus)
- Question 3-5: Architecture & pipelines (refactoring, production, reliability)
- Question 6-8: Code management (environments, version control, tools)
- Question 9-10: Infrastructure & testing
- Question 11: Compliance
- Question 12: Open priorities

**Total:** 12 questions + email = 13 fields
**Time:** ~10 minutes
**Pages:** 1 (single page, scrollable)

---

## Troubleshooting

**Issue:** Too many checkbox options to add manually
- **Fix:** Copy all options from this guide, paste into a text editor, then add one by one (unfortunately Google Forms doesn't support bulk paste for options)

**Issue:** Validation rules not saving
- **Fix:** Ensure question type is "Paragraph" before adding character minimum validation

**Issue:** Can't edit confirmation message
- **Fix:** Must be in Settings → Presentation tab, not in Preview mode

---

**Build time:** ~35 minutes

**Questions?** Refer to main guide: `engagement/FORM-BUILDER-DOCS-GUIDE.md`
