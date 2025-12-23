# Manual Build: Spanish Qualifier (No Form Builder Needed)

## 🎯 Build Time: 15-20 minutes

Follow these steps to manually create the **3-question Spanish Qualifier Form** without Form Builder.

---

## **Step 1: Create New Google Form**

1. Go to [forms.google.com](https://forms.google.com)
2. Click **"+ Blank"** or **"+ Blank form"**
3. Click **"Untitled form"** at top and rename:
   - **Title:** `Evaluación Rápida de Salud Computacional`
   - **Description:**
   ```
   Ayudanos a entender tus desafíos computacionales en investigación o desarrollo de ciencias de la vida.

   Esta evaluación rápida (menos de 90 segundos) te dirigirá a los recursos y próximos pasos más relevantes según tus necesidades.
   ```

---

## **Step 2: Add Question 1**

1. Click **"Untitled Question"**
2. **Question text:** `¿Qué describe mejor tu organización?`
3. **Type:** Multiple choice (should be default)
4. **Options** (click **"Add option"** for each):
   - Institución Académica/de Investigación
   - Startup Biotech (Pre-Serie B)
   - Biotech/Pharma (Serie B+)
   - Laboratorio Clínico/Diagnóstico
   - CRO/Proveedor de Servicios
   - Otro

5. Toggle **"Required"** ON (bottom right)

---

## **Step 3: Add Question 2**

1. Click **"+" button** to add new question
2. **Question text:** `¿Cuál es tu mayor desafío computacional o de software en este momento?`
3. **Type:** Click dropdown → **"Paragraph"**
4. **Description** (click three dots ⋮ → "Description"):
   ```
   Compartí 1-2 oraciones sobre qué te está frenando o causando frustración.

   Ejemplos:
   • "Nuestros scripts de análisis fallan cuando actualizamos software"
   • "No podemos reproducir resultados del paper del año pasado"
   • "El pipeline tarda semanas en correr y no sabemos por qué"
   • "Nadie puede usar el código de los demás"
   ```

5. **Validation:** Click three dots ⋮ → **"Response validation"**
   - Dropdown 1: **"Length"**
   - Dropdown 2: **"Minimum character count"**
   - Number: **20**
   - Error text: `Por favor compartí al menos 20 caracteres para ayudarnos a entender tu desafío`

6. Toggle **"Required"** ON

---

## **Step 4: Add Question 3 (Routes to different sections)**

1. Click **"+" button** to add new question
2. **Question text:** `¿Qué te sería más útil en este momento?`
3. **Type:** Multiple choice
4. **Options:**
   - Hacer una encuesta diagnóstica detallada para identificar problemas técnicos específicos (7-10 min)
   - Agendar una consulta técnica gratuita de 20 minutos con nuestro equipo
   - Recibir casos de estudio y recursos por email
   - Solo estoy explorando — anotame para actualizaciones ocasionales

5. Toggle **"Required"** ON
6. **Set up branching:** Click three dots ⋮ → **"Go to section based on answer"**
   - Option 1 → **Section 2** (we'll create this next)
   - Option 2 → **Section 3**
   - Option 3 → **Section 4**
   - Option 4 → **Section 5**

---

## **Step 5: Create Section 2 - Choose Survey Type**

1. Click **"Add section"** button (bottom toolbar, looks like two stacked rectangles)
2. **Section title:** `Elegí tu Encuesta`
3. **Section description:**
   ```
   Tenemos dos versiones de nuestra encuesta diagnóstica optimizadas para diferentes contextos:

   🎓 ENCUESTA ACADÉMICA/INVESTIGACIÓN (Recomendada para universidades, institutos, laboratorios pequeños)
   → 8 preguntas, ~7 minutos
   → Enfocada en desafíos comunes en trabajo computacional académico
   → Lenguaje simplificado, ejemplos prácticos

   🏢 ENCUESTA INDUSTRIA/CLÍNICA (Recomendada para biotech, pharma, CROs, labs clínicos)
   → 12 preguntas, ~10 minutos
   → Cubre infraestructura, compliance, y desafíos de escalabilidad
   → Profundidad técnica para equipos de ingeniería

   ¿No estás seguro cuál elegir? Empezá con la versión Académica — siempre podés hacer la otra después si es necesario.
   ```

4. **Add question:**
   - **Question:** `¿Qué encuesta se ajusta mejor a tu contexto?`
   - **Type:** Multiple choice
   - **Options:**
     - Encuesta Académica/Investigación (simplificada, ~7 min)
     - Encuesta Industria/Clínica (técnica, ~10 min)
   - **Required:** ON
   - **Branching:** Click three dots ⋮ → **"Go to section based on answer"**
     - Option 1 → **Section 6** (Academic Survey Link)
     - Option 2 → **Section 7** (Industry Survey Link)

---

## **Step 6: Create Section 3 - Book Call**

1. Click **"Add section"**
2. **Section title:** `Agendar Tu Consulta Gratuita`
3. **Section description:**
   ```
   ¡Perfecto! Vamos a discutir tus desafíos computacionales y explorar soluciones potenciales.

   📅 Clic acá para elegir un horario: [INSERTAR LINK DE CALENDLY]

   Antes de la llamada, te enviaremos un email breve de preparación para que aprovechemos al máximo nuestros 20 minutos juntos.
   ```

4. **Add question:**
   - **Question:** `¿A qué email te enviamos la confirmación del calendario?`
   - **Type:** Short answer
   - **Validation:** Three dots ⋮ → **"Response validation"**
     - Dropdown 1: **"Text"**
     - Dropdown 2: **"Email"**
     - Error: `Por favor ingresá un email válido`
   - **Required:** ON
   - **After section:** Three dots ⋮ on SECTION header → **"Go to section" → "Submit form"** (or Section 8 if you create Thank You section)

---

## **Step 7: Create Section 4 - Request Resources**

1. Click **"Add section"**
2. **Section title:** `Te Enviaremos Recursos`
3. **Section description:**
   ```
   Te enviaremos por email casos de estudio y recursos mostrando cómo hemos ayudado a organizaciones de ciencias de la vida a resolver desafíos computacionales.
   ```

4. **Add Question 1:**
   - **Question:** `¿Cuál es tu email?`
   - **Type:** Short answer
   - **Validation:** Email (same as Step 6)
   - **Required:** ON

5. **Add Question 2:**
   - **Question:** `¿Qué temas son más relevantes para vos? (Seleccioná todos los que apliquen)`
   - **Type:** Checkboxes (allows multiple selections)
   - **Options:**
     - Reproducibilidad y control de versiones
     - Performance y optimización de pipelines
     - Compliance regulatorio (GxP, FDA, 21 CFR Part 11)
     - Colaboración en equipo y compartir código
     - Estrategia de infraestructura Cloud/HPC
     - Reducir deuda técnica
     - Capacitar científicos en mejores prácticas de software
   - **Required:** NO (optional)
   - **After section:** Submit form (or Section 8 Thank You)

---

## **Step 8: Create Section 5 - Newsletter Signup**

1. Click **"Add section"**
2. **Section title:** `Mantenete Actualizado`
3. **Section description:**
   ```
   ¡No hay problema! Ocasionalmente compartimos insights sobre mejores prácticas de ingeniería de software para ciencias de la vida.

   Temas incluyen: pipelines reproducibles, infraestructura computacional, compliance regulatorio, y reducción de deuda técnica.
   ```

4. **Add question:**
   - **Question:** `¿Querés recibir nuestro newsletter? (Dejá en blanco si no te interesa)`
   - **Type:** Short answer
   - **Validation:** Email (same as before)
   - **Required:** NO (optional!)
   - **After section:** Submit form (or Section 8 Thank You)

---

## **Step 9: Create Section 6 - Academic Survey Link**

1. Click **"Add section"**
2. **Section title:** `Continuar a la Encuesta Académica`
3. **Section description:**
   ```
   Clic en el link de abajo para abrir la Encuesta Diagnóstica Académica en una pestaña nueva:

   👉 [LINK DE ENCUESTA ACADÉMICA - INSERTAR CUANDO ESTÉ LISTA]

   Esto tomará ~7 minutos completar. Según tus respuestas, te enviaremos una evaluación personalizada de tu salud computacional.

   (Podés cerrar esta ventana una vez que hayas abierto el link de la encuesta)
   ```

4. **Add question (optional placeholder):**
   - **Question:** `¿Abriste el link de la encuesta?`
   - **Type:** Multiple choice
   - **Options:**
     - Sí, lo abrí en una pestaña nueva
     - No, lo haré después
   - **Required:** NO
   - **After section:** Submit form (or Section 8)

---

## **Step 10: Create Section 7 - Industry Survey Link**

1. Click **"Add section"**
2. **Section title:** `Continuar a la Encuesta Industria/Clínica`
3. **Section description:**
   ```
   Clic en el link de abajo para abrir la Encuesta Diagnóstica Industria/Clínica en una pestaña nueva:

   👉 [LINK DE ENCUESTA INDUSTRIA - INSERTAR CUANDO ESTÉ LISTA]

   Esto tomará ~10 minutos completar. Según tus respuestas, te enviaremos una evaluación técnica detallada y recomendaciones.

   (Podés cerrar esta ventana una vez que hayas abierto el link de la encuesta)
   ```

4. **Add question (optional):**
   - Same as Section 6
   - **After section:** Submit form (or Section 8)

---

## **Step 11: Create Section 8 - Thank You (Final Page)**

1. Click **"Add section"**
2. **Section title:** `¡Gracias!`
3. **Section description:**
   ```
   Apreciamos que hayas tomado el tiempo de compartir tus desafíos con nosotros.

   📬 QUÉ SIGUE:

   • Respondientes de encuestas: Recibirás una evaluación personalizada dentro de 2 días hábiles
   • Agendados para llamada: Chequeá tu email para la invitación de calendario
   • Solicitudes de recursos: Recibirás materiales dentro de 24 horas
   • Inscripciones a newsletter: Buscá nuestra próxima edición (enviada mensualmente)

   ❓ ¿PREGUNTAS?
   Escribinos a info@phorma.sh

   🌐 APRENDÉ MÁS:
   Visitá phorma.sh para explorar nuestros servicios y enfoque

   ---

   Structure over Chaos.
   — Phorma Scientific
   ```

4. **No questions needed** - this is just a thank you message
5. **After section:** Submit form (this is the end!)

---

## **Step 12: Configure Form Settings**

1. Click **"Settings"** gear icon (top right)

### **General Tab:**
- ❌ **"Collect email addresses"** — Leave OFF (we ask manually)
- ❌ **"Limit to 1 response"** — Leave OFF
- ❌ **"Allow response editing"** — Leave OFF

### **Presentation Tab:**
- ✅ **"Show progress bar"** — Turn ON
- ❌ **"Shuffle question order"** — Leave OFF
- **"Confirmation message"** — Can customize or leave default

### **Responses Tab:**
- ✅ **"Get email notifications for new responses"** — Turn ON (sends to your email)

---

## **Step 13: Test the Form**

Test all 5 paths by submitting dummy responses:

1. **Path 1:** Q3 = "Encuesta detallada" → Choose "Académica" → See academic link
2. **Path 2:** Q3 = "Encuesta detallada" → Choose "Industria" → See industry link
3. **Path 3:** Q3 = "Agendar consulta" → Enter email → Thank you
4. **Path 4:** Q3 = "Recibir recursos" → Enter email + topics → Thank you
5. **Path 5:** Q3 = "Solo explorando" → Optional newsletter → Thank you

**Check:** All branching works correctly, required fields block submission, email validation works.

---

## **Step 14: Get Shareable Link**

1. Click **"Send"** button (top right)
2. Click **link icon** (chain/link symbol)
3. Click **"Shorten URL"**
4. Copy the link (will be like `https://forms.gle/XxXxXx`)
5. **Share this with me!**

---

## ✅ **You're Done!**

Once you share the URL, I'll:
- Test the qualifier form
- Build the Academic Survey (8 questions)
- Build the Industry Survey (12 questions)
- Give you those URLs to insert into Sections 6 & 7

---

**Total build time:** ~15-20 minutes if you follow step-by-step

**Questions? Get stuck? Tell me which step and I'll help!**
