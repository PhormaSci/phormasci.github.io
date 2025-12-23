# Qualifier Form - Build Guide

**Last Updated:** 2025-12-23
**Purpose:** Cold lead qualification and routing to appropriate next steps
**Estimated Build Time:** 30-40 minutes
**Platform:** Google Forms

---

## Quick Start

1. Go to [forms.google.com](https://forms.google.com)
2. Click **+ Blank** to create new form
3. Follow the structure below exactly

---

# 🇬🇧 ENGLISH VERSION

## Form Settings

### **Form Title**
```
Computational Health Quick Assessment
```

### **Form Description**
```
Help us understand your computational challenges in life sciences research or development.

This quick assessment (less than 90 seconds) will route you to the most relevant resources and next steps based on your needs.
```

---

## Section 1: Qualifier Questions

### **Question 1**

- **Type:** Multiple choice
- **Required:** ✅ Yes
- **Question Text:**
```
What best describes your organization?
```

**Options (in this order):**
```
Academic/Research Institution
Biotech Startup (Pre-Series B)
Biotech/Pharma (Series B+)
Clinical/Diagnostics Lab
CRO/Service Provider
Other
```

**Settings:**
- No "Other" option with text field (keep it simple)

---

### **Question 2**

- **Type:** Paragraph text
- **Required:** ✅ Yes
- **Question Text:**
```
What's your biggest computational or software challenge right now?
```

**Description (help text below question):**
```
Share 1-2 sentences about what's slowing you down or causing frustration.

Examples:
• "Our analysis scripts break when we update software"
• "We can't reproduce results from last year's paper"
• "Pipeline takes weeks to run and we don't know why"
• "No one can use each other's code"
```

**Response Validation:**
- Click **⋮ (three dots)** → Response validation
- Length → Minimum character count → 20
- Custom error text: "Please provide at least a brief description (20+ characters)"

---

### **Question 3**

- **Type:** Multiple choice
- **Required:** ✅ Yes
- **Question Text:**
```
What would be most helpful for you right now?
```

**Options (in this order):**
```
Take a detailed diagnostic survey to identify specific technical issues (7-10 min)
Book a free 20-minute technical assessment call with our team
Receive case studies and resources via email
Just browsing — sign me up for occasional updates
```

**BRANCHING SETUP:**
- Click **⋮ (three dots)** → "Go to section based on answer"
- Set routing:
  - Option 1 ("Take a detailed diagnostic survey...") → **Section 2A**
  - Option 2 ("Book a free 20-minute call...") → **Section 2B**
  - Option 3 ("Receive case studies...") → **Section 2C**
  - Option 4 ("Just browsing...") → **Section 2D**

---

## Section 2A: Route to Detailed Survey

**How to create:** Click the **two-page icon** at bottom right to add new section

### **Section Settings**

**Section Title:**
```
Choose Your Survey Path
```

**Section Description:**
```
Great! We have two versions of our diagnostic survey optimized for different contexts:

🎓 ACADEMIC/RESEARCH SURVEY (Recommended for universities, research institutes, small labs)
→ 8 questions, ~7 minutes
→ Focuses on common challenges in academic computational work
→ Simplified language, practical examples

🏢 INDUSTRY/CLINICAL SURVEY (Recommended for biotech, pharma, CROs, clinical labs)
→ 12 questions, ~10 minutes
→ Covers infrastructure, compliance, and scaling challenges
→ Technical depth for engineering teams

Not sure which to choose? Start with the Academic version — you can always take the other one later if needed.
```

---

### **Question 4**

- **Type:** Multiple choice
- **Required:** ✅ Yes
- **Question Text:**
```
Which survey matches your context?
```

**Options:**
```
Academic/Research Survey (simplified, ~7 min)
Industry/Clinical Survey (technical, ~10 min)
```

**BRANCHING SETUP:**
- Click **⋮ (three dots)** → "Go to section based on answer"
- Set routing:
  - Option 1 ("Academic/Research Survey...") → **Section 3**
  - Option 2 ("Industry/Clinical Survey...") → **Section 4**

---

## Section 3: Academic Survey Link

### **Section Settings**

**Section Title:**
```
Continue to Academic Survey
```

**Section Description:**
```
Click the link below to open the Academic Diagnostic Survey in a new tab:

👉 [ACADEMIC SURVEY LINK - TO BE INSERTED]

This will take ~7 minutes to complete. Based on your responses, we'll send you a personalized assessment of your computational health.

(You can close this window once you've opened the survey link)
```

---

### **Question 5** (Optional tracking question)

- **Type:** Multiple choice
- **Required:** ❌ No
- **Question Text:**
```
Have you opened the survey link?
```

**Options:**
```
Yes, I've opened it in a new tab
No, I'll do it later
```

**After this question:**
- Click **⋮ (three dots)** → "Go to section based on answer"
- **BOTH options** → Go to **Section 5** (Thank You)

---

## Section 4: Industry Survey Link

### **Section Settings**

**Section Title:**
```
Continue to Industry Survey
```

**Section Description:**
```
Click the link below to open the Industry/Clinical Diagnostic Survey in a new tab:

👉 [INDUSTRY SURVEY LINK - TO BE INSERTED]

This will take ~10 minutes to complete. Based on your responses, we'll send you a detailed technical assessment and recommendations.

(You can close this window once you've opened the survey link)
```

---

### **Question 6** (Optional tracking question)

- **Type:** Multiple choice
- **Required:** ❌ No
- **Question Text:**
```
Have you opened the survey link?
```

**Options:**
```
Yes, I've opened it in a new tab
No, I'll do it later
```

**After this question:**
- Click **⋮ (three dots)** → "Go to section based on answer"
- **BOTH options** → Go to **Section 5** (Thank You)

---

## Section 2B: Book Assessment Call

### **Section Settings**

**Section Title:**
```
Book Your Free Assessment Call
```

**Section Description:**
```
Perfect! We'll discuss your computational challenges and explore potential solutions.

📅 Click here to choose a time: [INSERT CALENDLY LINK]

Before the call, we'll send you a short prep email so we can make the most of our 20 minutes together.
```

**⚠️ ACTION REQUIRED:** Replace `[INSERT CALENDLY LINK]` with your actual Calendly link

---

### **Question 7**

- **Type:** Short answer
- **Required:** ✅ Yes
- **Question Text:**
```
What email should we send the calendar confirmation to?
```

**Response Validation:**
- Click **⋮ (three dots)** → Response validation
- Select: **Text** → **Email**
- Custom error text: "Please enter a valid email address"

**After this question:**
- Set to go to **Section 5** (Thank You)

---

## Section 2C: Request Resources

### **Section Settings**

**Section Title:**
```
We'll Send You Resources
```

**Section Description:**
```
We'll email you case studies and resources showing how we've helped life science organizations tackle computational challenges.
```

---

### **Question 8**

- **Type:** Short answer
- **Required:** ✅ Yes
- **Question Text:**
```
What's your email address?
```

**Response Validation:**
- Click **⋮ (three dots)** → Response validation
- Select: **Text** → **Email**
- Custom error text: "Please enter a valid email address"

---

### **Question 9**

- **Type:** Checkboxes
- **Required:** ❌ No
- **Question Text:**
```
Which topics are most relevant to you? (Select all that apply)
```

**Options:**
```
Reproducibility and version control
Pipeline performance and optimization
Regulatory compliance (GxP, FDA, 21 CFR Part 11)
Team collaboration and code sharing
Cloud/HPC infrastructure strategy
Reducing technical debt
Training scientists in software best practices
```

**After this question:**
- Set to go to **Section 5** (Thank You)

---

## Section 2D: Newsletter Signup

### **Section Settings**

**Section Title:**
```
Stay Updated
```

**Section Description:**
```
No problem! We occasionally share insights on software engineering best practices for life sciences.

Topics include: reproducible pipelines, computational infrastructure, regulatory compliance, and reducing technical debt.
```

---

### **Question 10**

- **Type:** Short answer
- **Required:** ❌ No
- **Question Text:**
```
Want to receive our newsletter? (Leave blank if not interested)
```

**Description/Help text:**
```
Enter your email address to subscribe
```

**Response Validation:**
- Click **⋮ (three dots)** → Response validation
- Select: **Text** → **Email**
- **IMPORTANT:** Since this is optional, users can leave it blank
- Custom error text: "Please enter a valid email address or leave blank"

**After this question:**
- Set to go to **Section 5** (Thank You)

---

## Section 5: Thank You (Final Page)

### **Section Settings**

**Section Title:**
```
Thank You!
```

**Section Description:**
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

**⚠️ NOTE:** This is the final section. Do NOT add any more questions here.

---

## Form-Wide Settings

Click the **⚙️ (gear icon)** at top right to access settings:

### **General Tab**

- ☐ Collect email addresses → **UNCHECKED** (we ask manually where needed)
- ☐ Limit to 1 response → **UNCHECKED**
- ☐ Respondents can edit after submit → **UNCHECKED**

### **Presentation Tab**

- ☑️ Show progress bar → **CHECKED**
- ☐ Shuffle question order → **UNCHECKED**
- ☐ Show link to submit another response → **UNCHECKED**

**Confirmation message:** (This overrides Section 5 in older Google Forms versions)
```
Thank you for completing our assessment! Check your email for next steps.
```

---

## Response Setup

1. Click **Responses** tab at top of form
2. Click **Create Spreadsheet** (green Sheets icon)
3. Choose **Create a new spreadsheet**
4. Name it: `Qualifier Responses - English`

---

## Testing Checklist

Before sharing the form publicly, test these paths:

- [ ] **Path 1:** Q3 → "Take survey" → Q4 → "Academic" → See Section 3
- [ ] **Path 2:** Q3 → "Take survey" → Q4 → "Industry" → See Section 4
- [ ] **Path 3:** Q3 → "Book call" → Enter email → See Thank You
- [ ] **Path 4:** Q3 → "Resources" → Enter email + select topics → See Thank You
- [ ] **Path 5:** Q3 → "Just browsing" → Optional email → See Thank You
- [ ] Verify Q2 requires at least 20 characters
- [ ] Verify all email fields validate email format
- [ ] Check that responses appear in Google Sheet

---

## Sharing the Form

Once tested:

1. Click **Send** button (top right)
2. Click **link icon** (chain link)
3. Check **Shorten URL**
4. Copy the link
5. Use this as your main CTA on website/emails

**Suggested short URL format:**
- Use a URL shortener: `phorma.sh/assess` or `phorma.sh/qualifier`

---

## Follow-Up Actions After Form is Built

### **Immediate:**
- [ ] Insert actual Calendly link in Section 2B description
- [ ] Insert Academic Survey link in Section 3 description (once built)
- [ ] Insert Industry Survey link in Section 4 description (once built)

### **Later:**
- [ ] Set up email notifications for new responses (Form Settings → Notifications)
- [ ] Create automated response email templates
- [ ] Build tracking dashboard in Google Sheets

---

# 🇪🇸 SPANISH VERSION

## Form Settings

### **Título del Formulario**
```
Evaluación Rápida de Salud Computacional
```

### **Descripción del Formulario**
```
Ayudanos a entender tus desafíos computacionales en investigación o desarrollo de ciencias de la vida.

Esta evaluación rápida (menos de 90 segundos) te dirigirá a los recursos y próximos pasos más relevantes según tus necesidades.
```

---

## Sección 1: Preguntas Calificadoras

### **Pregunta 1**

- **Tipo:** Opción múltiple
- **Obligatoria:** ✅ Sí
- **Texto de la pregunta:**
```
¿Qué describe mejor tu organización?
```

**Opciones (en este orden):**
```
Institución Académica/de Investigación
Startup Biotech (Pre-Serie B)
Biotech/Pharma (Serie B+)
Laboratorio Clínico/Diagnóstico
CRO/Proveedor de Servicios
Otro
```

---

### **Pregunta 2**

- **Tipo:** Párrafo
- **Obligatoria:** ✅ Sí
- **Texto de la pregunta:**
```
¿Cuál es tu mayor desafío computacional o de software en este momento?
```

**Descripción (texto de ayuda debajo de la pregunta):**
```
Compartí 1-2 oraciones sobre qué te está frenando o causando frustración.

Ejemplos:
• "Nuestros scripts de análisis fallan cuando actualizamos software"
• "No podemos reproducir resultados del paper del año pasado"
• "El pipeline tarda semanas en correr y no sabemos por qué"
• "Nadie puede usar el código de los demás"
```

**Validación de respuesta:**
- Click **⋮ (tres puntos)** → Validación de respuesta
- Longitud → Cantidad mínima de caracteres → 20
- Texto de error personalizado: "Por favor proporcioná al menos una descripción breve (20+ caracteres)"

---

### **Pregunta 3**

- **Tipo:** Opción múltiple
- **Obligatoria:** ✅ Sí
- **Texto de la pregunta:**
```
¿Qué te sería más útil en este momento?
```

**Opciones (en este orden):**
```
Hacer una encuesta diagnóstica detallada para identificar problemas técnicos específicos (7-10 min)
Agendar una consulta técnica gratuita de 20 minutos con nuestro equipo
Recibir casos de estudio y recursos por email
Solo estoy explorando — anotame para actualizaciones ocasionales
```

**CONFIGURACIÓN DE RAMIFICACIÓN:**
- Click **⋮ (tres puntos)** → "Ir a la sección según la respuesta"
- Configurar rutas:
  - Opción 1 ("Hacer una encuesta diagnóstica...") → **Sección 2A**
  - Opción 2 ("Agendar una consulta...") → **Sección 2B**
  - Opción 3 ("Recibir casos de estudio...") → **Sección 2C**
  - Opción 4 ("Solo estoy explorando...") → **Sección 2D**

---

## Sección 2A: Ruta a Encuesta Detallada

### **Configuración de Sección**

**Título de Sección:**
```
Elegí tu Camino de Encuesta
```

**Descripción de Sección:**
```
¡Excelente! Tenemos dos versiones de nuestra encuesta diagnóstica optimizadas para diferentes contextos:

🎓 ENCUESTA ACADÉMICA/INVESTIGACIÓN (Recomendada para universidades, institutos de investigación, laboratorios pequeños)
→ 8 preguntas, ~7 minutos
→ Enfocada en desafíos comunes en trabajo computacional académico
→ Lenguaje simplificado, ejemplos prácticos

🏢 ENCUESTA INDUSTRIA/CLÍNICA (Recomendada para biotech, pharma, CROs, laboratorios clínicos)
→ 12 preguntas, ~10 minutos
→ Cubre infraestructura, compliance y desafíos de escalabilidad
→ Profundidad técnica para equipos de ingeniería

¿No estás seguro cuál elegir? Empezá con la versión Académica — siempre podés hacer la otra después si es necesario.
```

---

### **Pregunta 4**

- **Tipo:** Opción múltiple
- **Obligatoria:** ✅ Sí
- **Texto de la pregunta:**
```
¿Qué encuesta se ajusta a tu contexto?
```

**Opciones:**
```
Encuesta Académica/Investigación (simplificada, ~7 min)
Encuesta Industria/Clínica (técnica, ~10 min)
```

**CONFIGURACIÓN DE RAMIFICACIÓN:**
- Click **⋮ (tres puntos)** → "Ir a la sección según la respuesta"
- Configurar rutas:
  - Opción 1 ("Encuesta Académica...") → **Sección 3**
  - Opción 2 ("Encuesta Industria...") → **Sección 4**

---

## Sección 3: Link a Encuesta Académica

### **Configuración de Sección**

**Título de Sección:**
```
Continuar a Encuesta Académica
```

**Descripción de Sección:**
```
Hacé click en el link debajo para abrir la Encuesta Diagnóstica Académica en una nueva pestaña:

👉 [LINK ENCUESTA ACADÉMICA - A INSERTAR]

Te tomará ~7 minutos completarla. Según tus respuestas, te enviaremos una evaluación personalizada de tu salud computacional.

(Podés cerrar esta ventana una vez que hayas abierto el link de la encuesta)
```

---

### **Pregunta 5** (Pregunta opcional de seguimiento)

- **Tipo:** Opción múltiple
- **Obligatoria:** ❌ No
- **Texto de la pregunta:**
```
¿Abriste el link de la encuesta?
```

**Opciones:**
```
Sí, lo abrí en una nueva pestaña
No, lo haré más tarde
```

**Después de esta pregunta:**
- Click **⋮ (tres puntos)** → "Ir a la sección según la respuesta"
- **AMBAS opciones** → Ir a **Sección 5** (Gracias)

---

## Sección 4: Link a Encuesta Industria

### **Configuración de Sección**

**Título de Sección:**
```
Continuar a Encuesta Industria
```

**Descripción de Sección:**
```
Hacé click en el link debajo para abrir la Encuesta Diagnóstica Industria/Clínica en una nueva pestaña:

👉 [LINK ENCUESTA INDUSTRIA - A INSERTAR]

Te tomará ~10 minutos completarla. Según tus respuestas, te enviaremos una evaluación técnica detallada y recomendaciones.

(Podés cerrar esta ventana una vez que hayas abierto el link de la encuesta)
```

---

### **Pregunta 6** (Pregunta opcional de seguimiento)

- **Tipo:** Opción múltiple
- **Obligatoria:** ❌ No
- **Texto de la pregunta:**
```
¿Abriste el link de la encuesta?
```

**Opciones:**
```
Sí, lo abrí en una nueva pestaña
No, lo haré más tarde
```

**Después de esta pregunta:**
- Click **⋮ (tres puntos)** → "Ir a la sección según la respuesta"
- **AMBAS opciones** → Ir a **Sección 5** (Gracias)

---

## Sección 2B: Agendar Consulta

### **Configuración de Sección**

**Título de Sección:**
```
Agendá tu Consulta Gratuita
```

**Descripción de Sección:**
```
¡Perfecto! Discutiremos tus desafíos computacionales y exploraremos posibles soluciones.

📅 Hacé click acá para elegir un horario: [INSERTAR LINK CALENDLY]

Antes de la llamada, te enviaremos un email breve de preparación para aprovechar al máximo nuestros 20 minutos juntos.
```

---

### **Pregunta 7**

- **Tipo:** Respuesta breve
- **Obligatoria:** ✅ Sí
- **Texto de la pregunta:**
```
¿A qué email te enviamos la confirmación del calendario?
```

**Validación de respuesta:**
- Click **⋮ (tres puntos)** → Validación de respuesta
- Seleccionar: **Texto** → **Dirección de email**
- Texto de error personalizado: "Por favor ingresá una dirección de email válida"

**Después de esta pregunta:**
- Configurar para ir a **Sección 5** (Gracias)

---

## Sección 2C: Solicitar Recursos

### **Configuración de Sección**

**Título de Sección:**
```
Te Enviaremos Recursos
```

**Descripción de Sección:**
```
Te enviaremos por email casos de estudio y recursos mostrando cómo hemos ayudado a organizaciones de ciencias de la vida a enfrentar desafíos computacionales.
```

---

### **Pregunta 8**

- **Tipo:** Respuesta breve
- **Obligatoria:** ✅ Sí
- **Texto de la pregunta:**
```
¿Cuál es tu dirección de email?
```

**Validación de respuesta:**
- Click **⋮ (tres puntos)** → Validación de respuesta
- Seleccionar: **Texto** → **Dirección de email**
- Texto de error personalizado: "Por favor ingresá una dirección de email válida"

---

### **Pregunta 9**

- **Tipo:** Casillas de verificación
- **Obligatoria:** ❌ No
- **Texto de la pregunta:**
```
¿Qué temas son más relevantes para vos? (Seleccioná todos los que apliquen)
```

**Opciones:**
```
Reproducibilidad y control de versiones
Performance y optimización de pipelines
Compliance regulatorio (GxP, FDA, 21 CFR Part 11)
Colaboración en equipo y compartir código
Estrategia de infraestructura Cloud/HPC
Reducción de deuda técnica
Entrenar científicos en mejores prácticas de software
```

**Después de esta pregunta:**
- Configurar para ir a **Sección 5** (Gracias)

---

## Sección 2D: Registro Newsletter

### **Configuración de Sección**

**Título de Sección:**
```
Mantenete Actualizado
```

**Descripción de Sección:**
```
¡No hay problema! Ocasionalmente compartimos insights sobre mejores prácticas de ingeniería de software para ciencias de la vida.

Temas incluyen: pipelines reproducibles, infraestructura computacional, compliance regulatorio y reducción de deuda técnica.
```

---

### **Pregunta 10**

- **Tipo:** Respuesta breve
- **Obligatoria:** ❌ No
- **Texto de la pregunta:**
```
¿Querés recibir nuestro newsletter? (Dejá en blanco si no te interesa)
```

**Descripción/Texto de ayuda:**
```
Ingresá tu dirección de email para suscribirte
```

**Validación de respuesta:**
- Click **⋮ (tres puntos)** → Validación de respuesta
- Seleccionar: **Texto** → **Dirección de email**
- Texto de error personalizado: "Por favor ingresá una dirección de email válida o dejá en blanco"

**Después de esta pregunta:**
- Configurar para ir a **Sección 5** (Gracias)

---

## Sección 5: Gracias (Página Final)

### **Configuración de Sección**

**Título de Sección:**
```
¡Gracias!
```

**Descripción de Sección:**
```
Apreciamos que te hayas tomado el tiempo de compartir tus desafíos con nosotros.

📬 QUÉ PASA AHORA:

• Respondientes de encuesta: Recibirás una evaluación personalizada dentro de 2 días hábiles
• Agendados para llamada: Revisá tu email para la invitación de calendario
• Solicitudes de recursos: Recibirás materiales dentro de 24 horas
• Registros a newsletter: Esperá nuestro próximo número (enviado mensualmente)

❓ ¿PREGUNTAS?
Envianos un email a info@phorma.sh

🌐 CONOCÉ MÁS:
Visitá phorma.sh para explorar nuestros servicios y enfoque

---

Structure over Chaos.
— Phorma Scientific
```

---

## Configuración General del Formulario

Click el **⚙️ (ícono de engranaje)** arriba a la derecha para acceder a configuración:

### **Pestaña General**

- ☐ Recopilar direcciones de correo electrónico → **DESMARCADO**
- ☐ Limitar a 1 respuesta → **DESMARCADO**
- ☐ Los encuestados pueden editar después de enviar → **DESMARCADO**

### **Pestaña Presentación**

- ☑️ Mostrar barra de progreso → **MARCADO**
- ☐ Ordenar las preguntas aleatoriamente → **DESMARCADO**
- ☐ Mostrar vínculo para enviar otra respuesta → **DESMARCADO**

**Mensaje de confirmación:**
```
¡Gracias por completar nuestra evaluación! Revisá tu email para los próximos pasos.
```

---

## Configuración de Respuestas

1. Click en la pestaña **Respuestas** en la parte superior del formulario
2. Click **Crear hoja de cálculo** (ícono verde de Sheets)
3. Elegir **Crear una hoja de cálculo nueva**
4. Nombrarla: `Respuestas Calificador - Español`

---

## Lista de Verificación de Pruebas

Antes de compartir el formulario públicamente, probá estos caminos:

- [ ] **Camino 1:** P3 → "Hacer encuesta" → P4 → "Académica" → Ver Sección 3
- [ ] **Camino 2:** P3 → "Hacer encuesta" → P4 → "Industria" → Ver Sección 4
- [ ] **Camino 3:** P3 → "Agendar consulta" → Ingresar email → Ver Gracias
- [ ] **Camino 4:** P3 → "Recursos" → Ingresar email + seleccionar temas → Ver Gracias
- [ ] **Camino 5:** P3 → "Solo explorando" → Email opcional → Ver Gracias
- [ ] Verificar que P2 requiera al menos 20 caracteres
- [ ] Verificar que todos los campos de email validen formato de email
- [ ] Verificar que las respuestas aparezcan en Google Sheet

---

## Compartir el Formulario

Una vez probado:

1. Click botón **Enviar** (arriba a la derecha)
2. Click **ícono de link** (cadena)
3. Marcar **Acortar URL**
4. Copiar el link
5. Usar este como tu CTA principal en website/emails

**Formato sugerido de URL corta:**
- Usar un acortador de URLs: `phorma.sh/evaluar` o `phorma.sh/calificador`

---

## Acciones de Seguimiento Después de Construir el Formulario

### **Inmediato:**
- [ ] Insertar link real de Calendly en descripción de Sección 2B
- [ ] Insertar link de Encuesta Académica en descripción de Sección 3 (una vez construida)
- [ ] Insertar link de Encuesta Industria en descripción de Sección 4 (una vez construida)

### **Más tarde:**
- [ ] Configurar notificaciones por email para nuevas respuestas (Configuración del Formulario → Notificaciones)
- [ ] Crear templates de emails de respuesta automatizados
- [ ] Construir dashboard de seguimiento en Google Sheets

---

# 📊 Tracking & Analytics Setup

## Google Sheets Response Tracking

After creating your response spreadsheet, enhance it with these calculated columns:

### **Column Formulas** (Add after auto-generated columns)

Assuming your data starts in row 2 (row 1 has headers):

**Column K: Organization Segment**
```
=IF(B2="Academic/Research Institution","Academic",IF(OR(B2="Biotech Startup (Pre-Series B)",B2="Biotech/Pharma (Series B+)",B2="Clinical/Diagnostics Lab",B2="CRO/Service Provider"),"Industry","Other"))
```

**Column L: Lead Score**
```
=IF(D2="Take a detailed diagnostic survey to identify specific technical issues (7-10 min)",3,IF(D2="Book a free 20-minute technical assessment call with our team",5,IF(D2="Receive case studies and resources via email",2,1)))
```

**Column M: Lead Temperature**
```
=IF(L2=5,"🔥 Hot",IF(L2=3,"🌤️ Warm",IF(L2=2,"❄️ Cool","💤 Cold")))
```

**Column N: Follow-Up Status** (Manual entry)
```
Not Started
```
*(Create dropdown with options: Not Started, Email Sent, Call Scheduled, Completed, Not Interested)*

**Column O: Survey Path Chosen** (for tracking which survey they selected)
```
=IF(E2="Academic/Research Survey (simplified, ~7 min)","Academic",IF(E2="Industry/Clinical Survey (technical, ~10 min)","Industry","N/A"))
```

### **Conditional Formatting**

1. **Select Column L (Lead Score)**
   - Format → Conditional formatting
   - Format rules:
     - If value = 5 → Green background (#34a853)
     - If value = 3 → Yellow background (#fbbc04)
     - If value = 2 → Light gray background (#f1f3f4)
     - If value = 1 → White background

2. **Select Column N (Follow-Up Status)**
   - Format → Conditional formatting
   - Format rules:
     - If text contains "Completed" → Green text
     - If text contains "Call Scheduled" → Blue text
     - If text contains "Not Started" → Red text
     - If text contains "Not Interested" → Gray strikethrough

---

## Email Notification Setup

1. In Google Forms, click **⋮ (three dots menu)** → Settings
2. Go to **General** tab
3. Check **Get email notifications for new responses**

This will send you an email every time someone completes the qualifier.

---

## Weekly Digest Dashboard (Optional)

Create a summary sheet to track weekly performance:

**Sheet 2: Weekly Dashboard**

| Metric | Formula | This Week | Last Week |
|--------|---------|-----------|-----------|
| Total Responses | `=COUNTA(Responses!A2:A)` | | |
| Academic Segment | `=COUNTIF(Responses!K2:K,"Academic")` | | |
| Industry Segment | `=COUNTIF(Responses!K2:K,"Industry")` | | |
| Hot Leads (Call Bookings) | `=COUNTIF(Responses!L2:L,5)` | | |
| Warm Leads (Survey Interest) | `=COUNTIF(Responses!L2:L,3)` | | |
| Completion Rate | *(Manual calculation based on website traffic)* | | |

---

# 🎯 Next Steps

After you've built both English and Spanish qualifier forms:

1. **Test both forms thoroughly** using the checklists above
2. **Share the form URLs** with me so I can review
3. **I'll then provide:**
   - Academic Survey (8 questions, simplified)
   - Industry Survey (12 questions, technical)
   - Email response templates
   - Follow-up workflow automation

---

# ⚙️ Technical Notes

**Form URLs will be:**
- English: `https://docs.google.com/forms/d/e/XXXXXXXXX/viewform`
- Spanish: `https://docs.google.com/forms/d/e/YYYYYYYYY/viewform`

**Embed Options:**
- You can embed these forms directly on your website using `<iframe>` tags
- Or link to them from CTAs on your service pages

**URL Shortening:**
- Consider using Bitly or your own domain redirect (`phorma.sh/assess`)
- This makes it easier to track clicks and update forms without changing links

---

**BUILD TIME ESTIMATE:** 30-40 minutes per language (60-80 minutes total)

Good luck! Let me know when you've built the forms and I'll help with the next phase (Academic/Industry surveys). 🚀
