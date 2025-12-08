# Guía de Entrevista Diagnóstica de Inmersión Profunda
## Protocolo de Entrevista de Propuesta de Valor Osterwalder

**Propósito:** Esta entrevista utiliza el marco de Diseño de Propuesta de Valor para mapear los Trabajos por Hacer (JTBD) del cliente, Dolores y Ganancias a los servicios específicos de Phorma.

**Duración:** 45-60 minutos

**Personas Objetivo:**
- **Comprador Económico:** VP de I+D, CTO, Director de Informática
- **Usuario Final:** Científico Líder, Bioinformático, Investigador Computacional

**Modo de Entrevista:** Semi-estructurado (usar como guía, permitir que la conversación fluya naturalmente)

---

## Preparación Previa a la Entrevista

### Información para Revisar Antes de la Llamada

1. Respuestas de la encuesta de la Evaluación de Salud del Software Científico
2. Información pública de la organización (sitio web, publicaciones, anuncios de financiamiento)
3. Perfiles de LinkedIn de los entrevistados (para entender antecedentes)
4. Cualquier informe de la industria relevante para su sector (farmacéutico, biotecnología, ciencia de materiales)

### Materiales para Tener Listos

- Lienzo de Propuesta de Valor en blanco (para mapeo en tiempo real)
- Resumen de respuestas de la encuesta
- Plantilla de cálculo de ROI
- Gráfico de referencia del Modelo de Madurez de Software Científico (SSMM)

---

## Estructura de la Entrevista

### Fase 1: Apertura y Establecimiento del Contexto (5-10 minutos)

**Objetivo:** Establecer rapport, establecer expectativas y recopilar contexto básico.

#### Guión de Apertura

"Gracias por tomarse el tiempo para hablar conmigo hoy. Según sus respuestas de la encuesta, parece que su equipo está navegando algunos desafíos técnicos interesantes. El objetivo de esta conversación es profundizar en sus flujos de trabajo actuales de I+D—no para venderle nada hoy, sino para comprender genuinamente dónde existen puntos de fricción.

Al final, compartiré algunas observaciones preliminares y, si tiene sentido, podemos discutir cómo Phorma podría ayudar. ¿Le parece bien?"

#### Preguntas de Contexto

1. **Identificación de Persona:**
   - "¿Puede describirme su rol y responsabilidades principales?"
   - "¿Quién más está involucrado en decisiones sobre herramientas computacionales e infraestructura?"

2. **Contexto Organizacional:**
   - "¿Cómo es el organigrama del equipo de I+D?"
   - "¿Cuántas personas hay en el equipo y cuáles son sus disciplinas principales?"

3. **Contexto Estratégico:**
   - "¿Cuáles son sus tres principales objetivos estratégicos para este año fiscal?"
   - _Ejemplos: "Reducir tiempo hasta IND," "Integrar datos Multi-Ómicos," "Reducir costos de nube," "Lanzar una nueva línea de productos"_

---

### Fase 2: Trabajos por Hacer (JTBD) (10-15 minutos)

**Objetivo:** Comprender qué está intentando lograr realmente el cliente—trabajos funcionales, sociales y emocionales.

#### Preguntas Principales de JTBD

4. **Para Director de I+D/CTO (Comprador Económico):**
   - "¿Cuáles son los hitos críticos que debe alcanzar este año para asegurar financiamiento continuo o confianza de la junta?"
   - "Cuando piensa en sus competidores, ¿qué le da ventaja? ¿Qué lo está ralentizando?"
   - "Si pudiera agitar una varita mágica y arreglar una cosa sobre sus operaciones de I+D, ¿qué sería?"

5. **Para Bioinformático/Científico Líder (Usuario Final):**
   - "Descríbame el ciclo de vida típico de un proyecto en su laboratorio—desde el momento en que se genera una hipótesis hasta la entrega final de datos."
   - "Cuando se sienta a analizar un conjunto de datos, ¿cuál es la tarea más tediosa y repetitiva que debe realizar?"
   - "¿Cuál es la parte más emocionante de su trabajo? ¿Cuál es la parte que desearía poder omitir?"

6. **Para Ambas Personas:**
   - "¿Cómo define el 'éxito' para un proyecto computacional?"
   - "¿Cómo se ve 'suficientemente bueno' versus 'estándar de oro'?"

#### Trabajos Sociales y Emocionales

7. "¿Cómo se percibe el trabajo computacional en su organización? ¿Se ve como un centro de costos o un activo estratégico?"

8. "Cuando presenta resultados a la alta dirección o a partes interesadas externas, ¿qué les importa más?"

9. "¿Cómo se siente personalmente cuando un pipeline se rompe o un resultado no se puede reproducir? ¿Cuál es el costo emocional para el equipo?"

---

### Fase 3: Diagnóstico de Dolores (15-20 minutos)

**Objetivo:** Identificar malos resultados, riesgos y obstáculos. Sondear intensidad y frecuencia.

#### Categoría de Dolor 1: Integridad y Reproducibilidad

10. **La Sonda de Integridad:**
    - "¿Ha experimentado alguna situación donde un resultado clave no pudo ser reproducido, o donde se perdieron datos debido a problemas de versionado?"
    - _Si es sí:_ "¿Cuál fue el impacto comercial de ese evento? ¿Cuánto tiempo se perdió investigando la discrepancia?"
    - _Si es no:_ "¿Qué salvaguardas tiene en lugar para prevenir eso?"

11. **La Sonda de Corrupción de Datos:**
    - "En su encuesta, mencionó usar [Excel/Jupyter/etc.]. ¿Alguna vez ha descubierto un error en un conjunto de datos después de que el análisis ya estaba completo?"
    - _Sugerencia:_ "Por ejemplo, nombres de genes que se convierten en fechas en Excel, o fórmulas que sobrescriben accidentalmente datos crudos?"
    - _Si es sí:_ "¿Cómo lo detectó? ¿Cuál fue el impacto posterior?"

12. **La Sonda del Factor Bus:**
    - "Si su persona computacional líder se fuera mañana, ¿cuánto tiempo tomaría poner a un reemplazo al día?"
    - "¿Qué se perdería en esa transición—conocimiento, código, acceso a datos?"

#### Categoría de Dolor 2: Velocidad y Escalabilidad

13. **La Sonda de Eficiencia (Inmersión Profunda):**
    - "Mencionó pasar [X%] del tiempo en depuración y mantenimiento. ¿Puede darme un ejemplo específico del último mes?"
    - "Si pudiera recuperar la mitad de ese tiempo, ¿qué problemas científicos específicos abordaría su equipo?"

14. **La Sonda del Muro de Escalabilidad:**
    - "A medida que sus conjuntos de datos crecen—digamos, 10x en tamaño—¿se siente confiado de que su infraestructura actual puede manejarlo?"
    - "¿Alguna vez ha tenido que abandonar un análisis porque era computacionalmente inviable?"

15. **La Sonda de Integración:**
    - "¿Cuánto tiempo tarda un nuevo algoritmo desarrollado por un investigador en desplegarse en una herramienta que el resto de la empresa pueda usar?"
    - "¿Son días, semanas o meses?"
    - _Si es largo:_ "¿Cuáles son los cuellos de botella en ese proceso?"

16. **La Sonda de la Brecha de Traducción:**
    - "¿Tiene equipos separados de 'investigación' e 'ingeniería'? ¿Cómo se comunican?"
    - "Cuando la investigación pasa a ingeniería, ¿qué típicamente se pierde en la traducción?"

#### Categoría de Dolor 3: Talento y Continuidad

17. **La Sonda de la Brecha de Habilidades:**
    - "Cuando está contratando, ¿qué es más difícil de encontrar: personas con experiencia en el dominio (biología, química) o personas que puedan codificar bien?"
    - "¿Alguna vez ha contratado a alguien que fuera brillante científicamente pero luchara con el software?"

18. **La Sonda de Incorporación:**
    - "¿Cuánto tiempo tarda un nuevo empleado en volverse productivo—realmente ejecutando análisis independientemente?"
    - "¿Cuáles son las mayores barreras para una incorporación más rápida?"

19. **La Sonda del Costo de Oportunidad:**
    - "Cuando sus científicos senior están pasando tiempo arreglando scripts rotos o limpiando datos, ¿qué no están haciendo?"
    - "¿Cuánto le cuesta eso a la organización en términos de innovación perdida?"

#### Categoría de Dolor 4: Deuda Técnica Oculta (Avanzado)

20. **La Sonda de Entrelazamiento:**
    - "Si cambia un parámetro o característica de entrada en su modelo, ¿afecta todo lo demás de manera impredecible?"
    - "¿Cuántas pruebas hace antes de impulsar un cambio a producción?"

21. **La Sonda de la Jungla de Pipelines:**
    - "¿Cuántos scripts o herramientas diferentes están encadenados en su pipeline de análisis típico?"
    - "Si un paso cambia, ¿qué tan fácil es actualizar los pasos posteriores?"

22. **La Sonda del Consumidor No Declarado:**
    - "¿Hay 'dependencias silenciosas'—donde la salida de un equipo es consumida por otro equipo, pero no hay un contrato o comunicación formal?"

---

### Fase 4: Identificación de Ganancias (10-15 minutos)

**Objetivo:** Comprender cómo se ve 'mejor'. ¿Qué deleitaría al cliente?

#### Preguntas de Ganancia

23. **El Estado Ideal:**
    - "Si su infraestructura de software fuera ideal, ¿cómo se vería?"
    - "¿Cómo cambiaría su posición competitiva?"

24. **La Ganancia de Velocidad:**
    - "¿Qué significaría para su organización si pudiera reducir el tiempo de análisis en un 50%?"
    - "¿Qué nuevas preguntas podría hacer con esa capacidad extra?"

25. **La Ganancia de Calidad:**
    - "¿Qué significaría si pudiera garantizar reproducibilidad bit a bit para todos los análisis?"
    - "¿Cómo afectaría eso las presentaciones regulatorias o la confianza de los inversores?"

26. **La Ganancia de Incorporación:**
    - "¿Qué significaría si pudiera incorporar a un nuevo científico y tenerlo ejecutando análisis productivo en el Día 1, en lugar de la Semana 4?"

27. **La Ganancia de Innovación:**
    - "Si pudiera liberar el 20-30% del tiempo de su equipo del trabajo de mantenimiento, ¿qué proyectos revolucionarios perseguiría?"

28. **La Ganancia Inesperada:**
    - "¿Hay algo en lo que no haya pensado todavía—una capacidad que ni siquiera sabe que necesita—que sería revolucionaria si la tuviera?"

---

### Fase 5: Manejo de Objeciones y Costos Hundidos (5 minutos)

**Objetivo:** Abordar la preocupación de "ya hemos invertido tanto".

29. **La Sonda de Costo Hundido:**
    - "Ha construido mucha infraestructura a lo largo de los años. ¿Cuánto esfuerzo se requiere actualmente para mantener su 'código pegamento' heredado?"
    - "¿Este esfuerzo de mantenimiento crece linealmente o exponencialmente a medida que agrega nuevas fuentes de datos?"

30. **El Riesgo de la Inacción:**
    - "Si no aborda estas ineficiencias técnicas, ¿qué sucede en 12 meses? ¿24 meses?"
    - "¿Cuál es el riesgo de no hacer nada?"

---

### Fase 6: Cierre y Próximos Pasos (5 minutos)

#### Síntesis

31. "Según nuestra conversación, parece que los tres principales puntos de dolor son:
    1. [Dolor 1]
    2. [Dolor 2]
    3. [Dolor 3]

    ¿Resuena con usted?"

32. "Y las mayores oportunidades de ganancia serían:
    1. [Ganancia 1]
    2. [Ganancia 2]

    ¿Es eso preciso?"

#### Llamado a la Acción

33. "Esto es lo que me gustaría proponer:
    - Sintetizaré todo lo que discutimos hoy en un **Informe de Justificación**.
    - Este informe incluirá:
      - Su **Nivel de Madurez de Software Científico** actual (1-5)
      - Un **análisis cuantificado de ROI** que muestra cuánto le están costando las ineficiencias actuales
      - Una **hoja de ruta recomendada** para la modernización
    - Lo tendré para usted dentro de **5 días hábiles**.
    - Después de que lo revise, podemos programar un seguimiento para discutir si Phorma es la opción correcta para ayudarlo a ejecutar.

    ¿Le funciona?"

#### Permiso para Seguimiento

34. "¿Hay alguien más en su equipo que deba ser parte de la próxima conversación?"

35. "¿Cuál es la mejor manera de mantenernos en contacto—correo electrónico, Slack o controles programados?"

---

## Acciones Post-Entrevista

### Inmediato (Dentro de 24 horas)

- [ ] Enviar correo electrónico de agradecimiento con resumen de la reunión
- [ ] Actualizar CRM con notas detalladas
- [ ] Marcar cualquier problema urgente mencionado (ej., corrupción de datos activa, plazos inminentes)

### Dentro de 5 Días Hábiles

- [ ] Completar Informe de Justificación con:
  - Evaluación SSMM
  - Cálculo de ROI
  - Perfil de riesgo (epistémico y técnico)
  - Mapeo de soluciones (servicios de Phorma a JTBD)
  - Hoja de ruta recomendada
- [ ] Enviar informe por correo electrónico con nota de presentación personalizada
- [ ] Programar llamada de seguimiento (si el cliente indicó interés)

### Continuo

- [ ] Monitorear eventos desencadenantes (anuncios de financiamiento, cambios de equipo, publicaciones)
- [ ] Agregar a secuencia de nutrición si no está listo para comprar ahora
- [ ] Solicitar presentaciones a pares en organizaciones similares

---

## Consejos y Mejores Prácticas de Entrevista

### Hacer

✅ **Escuchar más de lo que habla** (regla 80/20)
✅ **Hacer seguimientos de "por qué" y "cómo"** para profundizar
✅ **Usar el silencio estratégicamente** para dejar pensar al cliente
✅ **Validar emociones** ("Eso suena increíblemente frustrante")
✅ **Tomar notas detalladas** (considerar grabar con permiso)
✅ **Ser genuinamente curioso** sobre su ciencia

### No Hacer

❌ **No promocionar los servicios de Phorma durante la entrevista** (guardar para el informe)
❌ **No descartar su enfoque actual** (incluso si es objetivamente malo)
❌ **No usar jerga que no usen** (reflejar su lenguaje)
❌ **No interrumpir** o terminar sus oraciones
❌ **No hacer suposiciones** sobre sus prioridades

---

## Apéndice: Mapeo de Preguntas al Lienzo de Propuesta de Valor

| Pregunta de Entrevista # | Mapea a Elemento VPC | Propósito |
|--------------------------|----------------------|-----------|
| P1-P3 | Perfil del Cliente (Contexto) | Identificación de persona |
| P4-P9 | Trabajos del Cliente | Comprender qué están tratando de lograr |
| P10-P22 | Dolores del Cliente | Identificar obstáculos, riesgos, malos resultados |
| P23-P28 | Ganancias del Cliente | Comprender resultados deseados y beneficios |
| P29-P30 | Dolores (Manejo de Objeciones) | Abordar la falacia del costo hundido |
| P31-P35 | Transición al Ajuste | Puente a la Propuesta de Valor de Phorma |

---

## Codificación de Respuestas de Muestra

Después de la entrevista, codificar respuestas usando este marco:

### Escala de Intensidad del Dolor
- **Crítico (5):** Riesgo existencial, amenaza viabilidad
- **Alto (4):** Bloqueador mayor, impacto financiero significativo
- **Moderado (3):** Molesto, pero existen soluciones alternativas
- **Bajo (2):** Inconveniente menor
- **Ninguno (1):** No es una preocupación

### Escala de Importancia del Trabajo
- **Esencial (5):** Crítico para la misión, debe tener éxito
- **Importante (4):** Alta prioridad, impacto significativo
- **Agradable tener (3):** Útil pero no crítico
- **Opcional (2):** Baja prioridad
- **Irrelevante (1):** No está en su radar

Use estas escalas para priorizar qué dolores resolver y qué ganancias crear en el Informe de Justificación.
