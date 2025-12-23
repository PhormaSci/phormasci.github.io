# Manual Build Guide: Academic Survey (Spanish)

## Quick Summary
- **Questions:** 8
- **Estimated completion time:** 7 minutes
- **Target audience:** Academic/research institutions, small labs
- **Language:** Spanish (Argentina/LATAM)

---

## Build Steps

### Step 1: Create New Form
1. Go to [forms.google.com](https://forms.google.com)
2. Click **+ Blank** to create new form
3. Click "Untitled form" at top and rename to: **Encuesta Diagnóstica Académica - Phorma Scientific**

### Step 2: Add Form Description
Click "Form description" and add:
```
Esta encuesta nos ayuda a entender los desafíos computacionales específicos de grupos académicos y de investigación.

⏱️ Tiempo estimado: 7 minutos
🔒 Tus respuestas son confidenciales
📬 Recibirás una evaluación personalizada en 2 días hábiles
```

### Step 3: Add Email Collection
1. Click ⚙️ (Settings) → **General**
2. Toggle ON: **Collect email addresses**
3. Description: "Necesitamos tu email para enviarte la evaluación personalizada"

---

## Section 1: Tu Contexto

### Question 1
- **Type:** Multiple choice
- **Question:** ¿Cuántas personas en tu grupo trabajan con herramientas computacionales, scripts o análisis de datos?
- **Required:** Yes
- **Options:**
  - Solo yo
  - 2-5 personas
  - 6-15 personas
  - 16+ personas

### Question 2
- **Type:** Checkboxes (multiple select)
- **Question:** ¿Qué herramientas o software usan más frecuentemente en tu grupo?
- **Description:** Seleccioná todas las que apliquen
- **Required:** Yes
- **Options:**
  - ImageJ / Fiji
  - Excel / GraphPad Prism
  - Python (scripts, Jupyter)
  - R / RStudio / Bioconductor
  - MATLAB
  - Galaxy / plataformas web
  - Software específico de equipos (microscopio, secuenciador, etc.)
  - Otro

---

## Section 2: Desafíos Actuales

### Question 3
- **Type:** Multiple choice
- **Question:** ¿Qué pasa cuando alguien en tu equipo crea un script o análisis que funciona?
- **Required:** Yes
- **Options:**
  - Lo usamos solo en esa computadora
  - Lo compartimos por email, WhatsApp o USB
  - Lo subimos a una carpeta compartida (Google Drive, Dropbox)
  - Usamos un sistema organizado (como GitHub)
  - No sabemos / No aplica

### Question 4
- **Type:** Checkboxes (multiple select)
- **Question:** ¿Alguna vez tuviste estos problemas?
- **Description:** Seleccioná todos los que apliquen
- **Required:** Yes
- **Options:**
  - Un script que funcionaba dejó de funcionar después de actualizar algo
  - No pudimos reproducir resultados de un análisis anterior
  - Cada persona usa una versión diferente del mismo software
  - Perdimos trabajo porque no había backup
  - Nadie más puede usar el código de otra persona
  - Los análisis tardan mucho tiempo en completarse
  - No sabemos si los resultados son correctos
  - No tenemos estos problemas

### Question 5
- **Type:** Multiple choice
- **Question:** ¿Cómo guardan y comparten los scripts/códigos en tu equipo?
- **Required:** Yes
- **Options:**
  - Cada quien en su computadora
  - Email o mensajería (WhatsApp, Slack)
  - Carpeta compartida (Dropbox, Google Drive, OneDrive)
  - Sistema de versiones (GitHub, GitLab, Bitbucket)
  - No compartimos código
  - No sé / No aplica

---

## Section 3: Infraestructura

### Question 6
- **Type:** Multiple choice
- **Question:** ¿Dónde corren los análisis computacionalmente intensivos?
- **Required:** Yes
- **Options:**
  - En nuestras computadoras personales (laptops/PCs)
  - En una computadora compartida del laboratorio
  - En un servidor o cluster de la institución
  - En la nube (AWS, Google Cloud, Azure)
  - No hacemos análisis pesados
  - No sé

### Question 7
- **Type:** Multiple choice
- **Question:** ¿Usan contenedores o ambientes virtuales para ejecutar software?
- **Description:** Los contenedores (como Docker) y ambientes virtuales (como conda) ayudan a que el software funcione igual en diferentes computadoras
- **Required:** Yes
- **Options:**
  - Sí, usamos Docker / Singularity / contenedores
  - Sí, usamos conda / virtualenv / ambientes virtuales
  - No usamos nada de eso
  - No sé qué es eso
  - No aplica a nuestro trabajo

---

## Section 4: Prioridades

### Question 8
- **Type:** Paragraph text
- **Question:** Si pudieras resolver UN problema hoy, ¿cuál sería?
- **Description:** Contanos en 2-3 oraciones cuál es tu mayor frustración o desafío computacional actual
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
¡Gracias por completar la encuesta!

📬 Te enviaremos una evaluación personalizada de tu salud computacional dentro de 2 días hábiles.

La evaluación incluirá:
• Análisis de tus principales desafíos técnicos
• Recomendaciones priorizadas
• Recursos específicos para tu contexto

📞 ¿Querés discutir los resultados? Respondé al email con tu disponibilidad y agendamos una llamada sin cargo.

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

**Column I: Team Size Category**
```
=IF(B2="Solo yo","Individual",IF(OR(B2="2-5 personas",B2="6-15 personas"),"Small Team","Large Team"))
```

**Column J: Has Version Control**
```
=IF(OR(F2="Sistema de versiones (GitHub, GitLab, Bitbucket)",F2="Usamos un sistema organizado (como GitHub)"),"Yes","No")
```

**Column K: Infrastructure Level**
```
=IF(OR(G2="En un servidor o cluster de la institución",G2="En la nube (AWS, Google Cloud, Azure)"),"Advanced",IF(G2="En una computadora compartida del laboratorio","Intermediate","Basic"))
```

**Column L: Follow-Up Priority**
```
=IF(J2="No",3,IF(K2="Basic",2,1))
```
(1 = Low, 2 = Medium, 3 = High priority for follow-up)

---

## Next Steps

Once form is built:
1. ✅ Share URL with Tomás
2. ✅ Test submit a response
3. ✅ Verify response appears in Google Sheet
4. ✅ URL will be inserted into Qualifier Form Section 3

---

## Form Preview

**Expected structure:**
- Email collection (auto-added at top)
- Question 1-2: Context (team size, tools)
- Question 3-5: Current challenges (sharing, problems, version control)
- Question 6-7: Infrastructure (compute, environments)
- Question 8: Open priorities

**Total:** 8 questions + email = 9 fields
**Time:** ~7 minutes
**Pages:** 1 (single page, scrollable)

---

## Troubleshooting

**Issue:** Can't find "Checkboxes" option
- **Fix:** When adding question, click type dropdown → Select "Checkboxes" (has multiple ☑️ icon)

**Issue:** Response validation not showing
- **Fix:** Click ⋮ (three dots) on question → "Response validation" → Add rule

**Issue:** Confirmation message not appearing
- **Fix:** Settings → Presentation → Edit "Confirmation message" field

---

**Build time:** ~25 minutes

**Questions?** Refer to main guide: `engagement/FORM-BUILDER-DOCS-GUIDE.md`
