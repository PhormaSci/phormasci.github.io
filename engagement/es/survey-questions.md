# Diagnóstico de Madurez de Software Científico
## Encuesta para Clientes - Preguntas para Formulario de Google

Este documento tiene las preguntas para la encuesta "Diagnóstico de Madurez de Software Científico", pensada para identificar deuda técnica e ineficiencias en áreas de I+D.

---

## Introducción de la Encuesta

**Título:** Diagnóstico de Madurez de tu Software Científico

**Descripción:**
En Phorma Scientific [Phorma.sh](https://phorma.sh) nos especializamos en convertir la deuda técnica en capital estratégico para organizaciones de I+D. Esta encuesta de 5 minutos nos ayuda a entender los desafíos que tu organización enfrenta en el desarrollo y uso de software para I+D. Al entender estos problemas, podemos identificar cuellos de botella que frenan la innovación y ofrecerte soluciones a medida.

Tus respuestas son confidenciales y nos permiten identificar problemas que frenan la innovación.

una **entrevista de diagnóstico gratuita de 30 minutos** para charlar sobre estos puntos. Después de la entrevista, podemos armar un **informe de modernización y una hoja de ruta estratégica**. Este es un servicio con costo, pensado para optimizar tus operaciones.

---

## Sección 1: Perfil de la Organización

### Pregunta 1: Información de la Organización
**Tipo de Campo:** Respuesta Corta
**Requerido:** Sí

**Pregunta:** ¿Cómo se llama tu organización?

---

### Pregunta 2: Información de Contacto
**Tipo de Campo:** Respuesta Corta
**Requerido:** Sí

**Pregunta:** Tu nombre y rol

_Ejemplo: Alex Pérez, Líder de Bioinformática_

---

### Pregunta 3: Correo Electrónico
**Tipo de Campo:** Correo Electrónico
**Requerido:** Sí

**Pregunta:** Tu correo electrónico de contacto

---

### Pregunta 4: Tipo de Organización
**Tipo de Campo:** Opción Múltiple
**Requerido:** Sí

**Pregunta:** ¿Cuál de estas opciones describe mejor a tu organización?

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

**Pregunta:** ¿Cuántas personas en tu equipo hacen tareas computacionales (análisis de datos, modelado, desarrollo de software)?

**Opciones:**
- 1-5
- 6-15
- 16-30
- 31-50
- 50+

---

## Sección 2: Puntos Débiles

### Pregunta 6: Velocidad y Escalabilidad (La Trampa de la Deuda Técnica)
**Tipo de Campo:** Opción Múltiple
**Requerido:** Sí

**Pregunta:** ¿Cómo pasan el software de investigación a producción en tu organización?

**Opciones:**
- **A) A mano y local:** Usamos Excel y scripts en las computadoras de cada uno. No existe un entorno de 'producción'.
- **B) Funciona, pero es frágil:** Tenemos código que anda, pero depende de pasos manuales que nadie quiere tocar por miedo a que se rompa.
- **C) Reescribir todo:** El código de investigación se tira. El equipo de ingeniería tiene que reescribir los algoritmos desde cero para producción, perdiendo meses.
- **D) Automatizado y eficiente:** El código está versionado, en contenedores (Docker) y se despliega con pipelines CI/CD sin tocar nada.

---

### Pregunta 7: Integridad y Reproducibilidad (La Trampa de la Ciencia)
**Tipo de Campo:** Opción Múltiple
**Requerido:** Sí

**Pregunta:** Si la persona clave de tu área computacional se va mañana, ¿qué tan seguro/a estás de que otra persona del equipo podría correr los análisis en una compu nueva y tener los mismos resultados?

**Opciones:**
- **A) Imposible:** Los datos están en su compu y parte de la metodología la tiene en la cabeza.
- **B) Complicado:** Hay "pasos mágicos" (mover archivos a mano, cambiar parámetros) que solo esa persona conoce.
- **C) Más o menos:** Tenemos el código, pero armar el entorno para que coincidan las versiones de las librerías lleva semanas.
- **D) Totalmente seguro:** Todo está en contenedores (Docker/Singularity), las dependencias están fijas y los datos versionados (DVC/Pachyderm).

---

### Pregunta 8: Talento y Continuidad (La Trampa de las Personas)
**Tipo de Campo:** Opción Múltiple
**Requerido:** Sí

**Pregunta:** ¿Qué porcentaje de tiempo le dedica tu equipo de I+D a mantener software, limpiar datos y arreglar bugs, en vez de a investigar cosas nuevas?

**Opciones:**
- **A) >60% en mantenimiento** (Bancarrota Técnica)
- **B) 30-60% en mantenimiento** (Poco eficientes)
- **C) 10-30% en mantenimiento** (Balance Aceptable)
- **D) <10% en mantenimiento** (Foco en Innovación)

---

## Sección 3: Estado Actual

### Pregunta 9: Control de Versiones y Colaboración
**Tipo de Campo:** Opción Múltiple
**Requerido:** Sí

**Pregunta:** ¿Qué sistema de control de versiones usan en tu equipo?

**Opciones:**
- No usamos un control de versiones formal
- Carpetas compartidas con versiones a mano (ej., Dropbox, OneDrive)
- Subversion (SVN)
- Git (GitHub, GitLab, Bitbucket)
- Otro: ___________

---

### Pregunta 10: Gestión de Datos
**Tipo de Campo:** Casillas de Verificación (Seleccioná todas las que apliquen)
**Requerido:** Sí

**Pregunta:** ¿Qué herramientas usan en tu equipo para analizar y gestionar datos?

**Opciones:**
- Microsoft Excel
- R / RStudio
- Python (Jupyter Notebooks)
- MATLAB
- Software específico del área (ej., BLAST, PyMOL, ImageJ)
- Bases de datos SQL
- Almacenes de datos en la nube (ej., Snowflake, BigQuery)
- Herramientas internas a medida
- Otro: ___________

---

### Pregunta 11: Infraestructura
**Tipo de Campo:** Opción Múltiple
**Requerido:** Sí

**Pregunta:** ¿Dónde corren principalmente los análisis computacionales?

**Opciones:**
- En computadoras personales (laptops/escritorios)
- Servidores compartidos locales (on-premise)
- Cluster HPC (on-premise)
- Infraestructura en la nube (AWS, Azure, GCP)
- Híbrido (mezcla de local y nube)

---

### Pregunta 12: Pruebas y Calidad
**Tipo de Campo:** Opción Múltiple
**Requerido:** Sí

**Pregunta:** ¿Cómo se aseguran de que el código sea correcto y de calidad?

**Opciones:**
- No tenemos un proceso formal de QA
- Pruebas puntuales cuando alguien encuentra un problema
- Revisión de código entre compañeros
- Pruebas automáticas con integración continua (CI)
- Otro: ___________

---

## Sección 4: Desafíos y Objetivos

### Pregunta 13: Principal Desafío
**Tipo de Campo:** Párrafo
**Requerido:** No

**Pregunta:** ¿Cuál es el principal desafío técnico u operativo que tiene tu equipo de I+D hoy?

---

### Pregunta 14: Objetivos Estratégicos
**Tipo de Campo:** Casillas de Verificación (Seleccioná todas las que apliquen)
**Requerido:** Sí

**Pregunta:** ¿Cuáles son tus prioridades estratégicas para este año?

**Opciones:**
- Acelerar la salida al mercado de nuevos productos/terapias
- Mejorar la reproducibilidad de datos y el cumplimiento de normas
- Escalar la infraestructura para manejar más datos
- Reducir costos operativos (nube, infraestructura, personal)
- Incorporar gente nueva al equipo más rápido
- Integrar IA/ML en los flujos de trabajo
- Mejorar la colaboración entre equipos
- Otro: ___________

---

### Pregunta 15: Interés en Diagnóstico
**Tipo de Campo:** Opción Múltiple
**Requerido:** Sí

**Pregunta:** ¿Te interesaría agendar una **entrevista de diagnóstico gratuita de 30 minutos** con Phorma Scientific para medir ineficiencias y pensar una hoja de ruta?

**Opciones:**
- Sí, me gustaría agendar la entrevista
- Tal vez, quisiera más información primero
- No por ahora

---

## Mensaje de Finalización de la Encuesta

**Título:** ¡Gracias por completar la encuesta!

**Mensaje:**
Tus respuestas nos dan a entender que tu organización podría estar pagando un "Impuesto Técnico" que frena la innovación.

**Próximos pasos:**

1.  Nuestro equipo va a analizar tus respuestas en 2 días hábiles.
2.  Vas a recibir una evaluación preliminar por mail.
3.  Si elegiste "Sí", te contactamos para coordinar la **entrevista de diagnóstico gratuita**.
4.  Después de la charla, te vamos a proponer un plan para armar un **informe de modernización y una hoja de ruta (servicio con costo)**. Este informe incluirá:
    *   Nivel de Madurez de tu Software Científico (1-5).
    *   Análisis de ROI sobre las ineficiencias actuales.
    *   Hoja de ruta con recomendaciones.

En Phorma Scientific nos especializamos en convertir deuda técnica en capital estratégico.

**¿Dudas?** Escribinos a: [Insertar Correo Electrónico de Contacto]

---

## Notas para la Configuración del Formulario de Google

1.  **Usar saltos de página** para separar las cuatro secciones principales.
2.  **Habilitar "Mostrar barra de progreso"** para que los participantes vean su avance.
3.  **Configurar notificaciones por mail** para avisar al equipo sobre nuevas respuestas.
4.  **Usar lógica condicional:** Si P15 = "Sí", mostrar un campo opcional para horarios de contacto preferidos.
5.  **Habilitar "Recibos de respuesta"** para que los participantes reciban una copia de sus respuestas.
6.  **Página de agradecimiento personalizada:** Usar el mensaje de finalización anterior.
7.  **Limitar a 1 respuesta por mail** para evitar envíos duplicados.
