# Evaluación de Salud del Software Científico
## Encuesta de Participación del Cliente - Preguntas para Formulario de Google

Este documento contiene las preguntas para la encuesta "Evaluación de Salud del Software Científico", diseñada para identificar deuda técnica e ineficiencias operacionales en organizaciones de I+D.

---

## Introducción de la Encuesta

**Título:** Evaluación de Salud del Software Científico: Evaluación del Pipeline de I+D

**Descripción:**
Esta breve encuesta de 5 minutos ayuda a identificar oportunidades para acelerar su ciclo de innovación en I+D. Al comprender su infraestructura computacional actual, podemos destacar áreas donde las ineficiencias técnicas pueden estar ralentizando el proceso de descubrimiento científico de su equipo.

Sus respuestas serán tratadas confidencialmente y utilizadas únicamente para preparar un informe diagnóstico personalizado para su organización.

---

## Sección 1: Perfil de la Organización

### Pregunta 1: Información de la Organización
**Tipo de Campo:** Respuesta Corta
**Requerido:** Sí

**Pregunta:** ¿Cuál es el nombre de su organización?

---

### Pregunta 2: Información de Contacto
**Tipo de Campo:** Respuesta Corta
**Requerido:** Sí

**Pregunta:** ¿Su nombre y título?

_Ejemplo: Dra. María González, Directora de Bioinformática_

---

### Pregunta 3: Correo Electrónico
**Tipo de Campo:** Correo Electrónico
**Requerido:** Sí

**Pregunta:** ¿Mejor correo electrónico para contactarle?

---

### Pregunta 4: Tipo de Organización
**Tipo de Campo:** Opción Múltiple
**Requerido:** Sí

**Pregunta:** ¿Cuál describe mejor a su organización?

**Opciones:**
- Institución de Investigación Académica
- Startup de Biotecnología (Semilla/Serie A)
- Startup de Biotecnología (Serie B+)
- Empresa Farmacéutica
- Investigación en Salud/Clínica
- I+D en Ciencia de Materiales/Ingeniería
- Otro: ___________

---

### Pregunta 5: Tamaño del Equipo
**Tipo de Campo:** Opción Múltiple
**Requerido:** Sí

**Pregunta:** ¿Cuántos investigadores/científicos hay en su equipo computacional?

**Opciones:**
- 1-5
- 6-15
- 16-30
- 31-50
- 50+

---

## Sección 2: Evaluación de Puntos de Dolor

### Pregunta 6: Velocidad y Escalabilidad (La Trampa de la Deuda Técnica)
**Tipo de Campo:** Opción Múltiple
**Requerido:** Sí

**Pregunta:** ¿Cuál de las siguientes describe mejor la transición del software de su equipo de investigación a su entorno de producción?

**Opciones:**
- **A) Automatizado y Sin Problemas:** El código está bajo control de versiones, contenedorizado (Docker) y se despliega mediante pipelines CI/CD sin intervención manual.
- **B) Funcional pero Frágil:** Tenemos código que funciona, pero dependemos de una secuencia específica de pasos manuales y tememos tocarlo porque podría romperse.
- **C) El Ciclo de Reescritura:** El código de investigación es esencialmente descartado, y los equipos de ingeniería deben reescribir algoritmos desde cero para producción, causando meses de retraso.
- **D) Ad-hoc y Local:** Dependemos de hojas de Excel manuales y scripts almacenados en laptops individuales; no hay un entorno de 'producción' central.

---

### Pregunta 7: Integridad y Reproducibilidad (La Trampa de la Ciencia)
**Tipo de Campo:** Opción Múltiple
**Requerido:** Sí

**Pregunta:** Si su científico computacional principal se fuera mañana, ¿qué tan confiado está de que sus pipelines de análisis podrían ser re-ejecutados por un nuevo empleado para producir resultados idénticos en una máquina nueva?

**Opciones:**
- **A) Extremadamente Confiado:** Todo está contenedorizado (Docker/Singularity), las dependencias están fijadas, y los datos están versionados (DVC/Pachyderm).
- **B) Algo Confiado:** Tenemos el código, pero configurar el entorno toma semanas de prueba y error para igualar las versiones de las librerías.
- **C) Ansioso:** Hay muchos "pasos mágicos" (movimientos manuales de archivos, ajustes de parámetros) que solo el científico principal conoce.
- **D) Imposible:** Los datos viven en su disco duro y la metodología está parcialmente en su cabeza.

---

### Pregunta 8: Talento y Continuidad (La Trampa de las Personas)
**Tipo de Campo:** Opción Múltiple
**Requerido:** Sí

**Pregunta:** ¿Cuánto tiempo dedica su equipo de I+D al mantenimiento de software, limpieza de datos y depuración versus nuevo descubrimiento científico?

**Opciones:**
- **A) < 10% en mantenimiento** (Enfoque en Innovación Pura)
- **B) 10-30% en mantenimiento** (Balance Saludable)
- **C) 30-60% en mantenimiento** (Arrastrando Velocidad)
- **D) > 60% en mantenimiento** (Bancarrota Técnica)

---

## Sección 3: Evaluación del Estado Actual

### Pregunta 9: Control de Versiones y Colaboración
**Tipo de Campo:** Opción Múltiple
**Requerido:** Sí

**Pregunta:** ¿Qué sistema de control de versiones usa actualmente su equipo?

**Opciones:**
- Git (GitHub, GitLab, Bitbucket)
- Subversion (SVN)
- Unidades de red compartidas con versionado de archivos (ej., Dropbox, OneDrive)
- No hay control de versiones formal
- Otro: ___________

---

### Pregunta 10: Gestión de Datos
**Tipo de Campo:** Casillas de Verificación (Seleccione todas las que apliquen)
**Requerido:** Sí

**Pregunta:** ¿Qué herramientas usa su equipo para análisis y gestión de datos? (Seleccione todas las que apliquen)

**Opciones:**
- Microsoft Excel
- R / RStudio
- Python (Jupyter Notebooks)
- MATLAB
- Software especializado del dominio (ej., BLAST, PyMOL, ImageJ)
- Bases de datos SQL
- Almacenes de datos en la nube (ej., Snowflake, BigQuery)
- Herramientas personalizadas internas
- Otro: ___________

---

### Pregunta 11: Infraestructura
**Tipo de Campo:** Opción Múltiple
**Requerido:** Sí

**Pregunta:** ¿Dónde ejecuta su equipo principalmente los análisis computacionales?

**Opciones:**
- Laptops/escritorios individuales
- Servidores compartidos en las instalaciones
- Cluster HPC (en las instalaciones)
- Infraestructura en la nube (AWS, Azure, GCP)
- Híbrido (mezcla de instalaciones y nube)

---

### Pregunta 12: Pruebas y Garantía de Calidad
**Tipo de Campo:** Opción Múltiple
**Requerido:** Sí

**Pregunta:** ¿Cómo asegura su equipo la calidad y corrección del código?

**Opciones:**
- Pruebas automatizadas con integración continua (CI)
- Revisión manual del código por pares
- Pruebas ad-hoc cuando alguien nota un problema
- No tenemos un proceso formal de QA
- Otro: ___________

---

## Sección 4: Puntos de Dolor y Objetivos

### Pregunta 13: Mayor Desafío
**Tipo de Campo:** Párrafo
**Requerido:** No

**Pregunta:** ¿Cuál es el mayor desafío técnico u operacional que enfrenta su equipo de I+D hoy?

---

### Pregunta 14: Objetivos Estratégicos
**Tipo de Campo:** Casillas de Verificación (Seleccione todas las que apliquen)
**Requerido:** Sí

**Pregunta:** ¿Cuáles son sus principales prioridades estratégicas para este año? (Seleccione todas las que apliquen)

**Opciones:**
- Acelerar el tiempo de comercialización para nuevos productos/terapias
- Mejorar la reproducibilidad de datos y el cumplimiento regulatorio
- Escalar la infraestructura computacional para conjuntos de datos más grandes
- Reducir costos operacionales (nube, infraestructura, personal)
- Incorporar nuevos miembros del equipo más rápido
- Integrar IA/ML en flujos de trabajo
- Mejorar la colaboración entre equipos
- Otro: ___________

---

### Pregunta 15: Interés en Inmersión Profunda
**Tipo de Campo:** Opción Múltiple
**Requerido:** Sí

**Pregunta:** Según sus respuestas, puede beneficiarse de un Diagnóstico de Inmersión Profunda complementario de 45 minutos con Phorma Scientific para cuantificar ineficiencias técnicas y proponer una hoja de ruta de modernización. ¿Estaría interesado?

**Opciones:**
- Sí, me gustaría programar una Entrevista de Inmersión Profunda
- Tal vez, envíenme más información primero
- No en este momento

---

## Mensaje de Finalización de la Encuesta

**Título:** ¡Gracias por completar la Evaluación de Salud del Software Científico!

**Mensaje:**

Según sus respuestas, su organización de I+D puede estar cargando un "Impuesto Técnico" que podría estar ralentizando su ciclo de innovación.

**Qué sucede después:**

1. Nuestro equipo analizará sus respuestas dentro de 2 días hábiles
2. Recibirá una evaluación preliminar por correo electrónico
3. Si seleccionó "Sí" para la Inmersión Profunda, nos comunicaremos para programar una entrevista diagnóstica de 45 minutos
4. Después de la entrevista, proporcionaremos un informe personalizado con:
   - Su Nivel de Madurez de Software Científico (1-5)
   - Análisis cuantificado de ROI de las ineficiencias actuales
   - Hoja de ruta de modernización recomendada

Phorma Scientific se especializa en convertir la deuda técnica en capital estratégico para organizaciones de I+D.

**¿Preguntas?** Contáctenos en: [Insertar Correo Electrónico de Contacto]

---

## Notas para la Configuración del Formulario de Google

1. **Use saltos de página** para separar las cuatro secciones principales para una mejor experiencia del usuario
2. **Habilite "Mostrar barra de progreso"** para que los encuestados sepan qué tan lejos están
3. **Configure notificaciones por correo electrónico** para alertar al equipo cuando se envíe una nueva respuesta
4. **Use lógica condicional:** Si P15 = "Sí", muestre un campo adicional opcional para horarios de contacto preferidos
5. **Habilite "Recibos de respuesta"** para que los encuestados obtengan una copia de sus respuestas
6. **Página de agradecimiento personalizada:** Use el mensaje de finalización anterior
7. **Limite a 1 respuesta por correo electrónico** para evitar envíos duplicados
