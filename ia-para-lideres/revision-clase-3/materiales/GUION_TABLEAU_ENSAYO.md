# Tableau · Guion de ensayo de la clase 3

Pregunta: **¿qué propuesta podemos llevar adelante, con qué capacidades, qué evidencia y bajo qué condiciones?**

## Preparación anterior a la sesión

1. Revisar Tableau Cloud y su configuración de IA, edición, idioma y permisos. Ensayar Tableau Agent en authoring. La modalidad Q&A de dashboards está en beta y requiere inglés según la documentación consultada. Next necesita su propio entorno compatible.
2. Descomprimir el kit. Para el ensayo inicial utilizar exclusivamente `demo_ficticia/`. Las fechas, perfiles, fuentes y costos de ese conjunto son ficticios. Sus referencias DEMO no son enlaces ni hechos externos.
3. Preparar una fuente con las seis tablas y conservar su detalle. Comprobar las relaciones por identificadores: Oportunidades–Evidencia y Oportunidades–Encaje por oportunidad_id; Encaje–Personas por persona_id; Oportunidades–Escenarios por oportunidad_id. Recomendaciones–Personas utiliza propietario_id; el papel de compañero puede necesitar otra instancia de Personas. No forzar relaciones de propuestas cuando faltan o tienen versiones distintas.
4. Conservar las recomendaciones históricas en una vista propia. Para asociarlas a una oportunidad, comprobar la relación de Encaje C; compartir autor no acredita pertinencia. Las recomendaciones pendientes no se presentan como acuerdos.
5. Conciliar primero los conteos del LEEME. Crear las cuatro vistas y organizar el dashboard. Agent asiste vistas y cálculos; no se promete que construya automáticamente el tablero completo.
6. Cuando lleguen las entregas reales, utilizar `plantillas_vacias/` para proponer su síntesis y hacerla revisar por los autores. Conservar los orígenes y fechas disponibles. Usar identificadores o alias y acceso apropiado. La preparación de la fuente sucede antes de la sesión.

## Recorrido en clase · Láminas 22 a 30 · 40 minutos

### Láminas 22–24 · Pregunta, modelo y funciones · 14 minutos
Recuperar el título de una oportunidad y sus resultados de B. Mostrar el modelo preparado, sus llaves y las brechas. Explicar Agent, Pulse, conversación de dashboards y Next con sus condiciones. Evitar convertir el bloque en una lección de carga de CSV.

### Lámina 25 · Oportunidades y evidencia · 5 minutos
Abrir Tableau Agent en el entorno de authoring habilitado. Utilizar el encargo de la lámina para crear o revisar la vista. Seleccionar A01 del ejemplo, mostrar afirmaciones y sus referencias y abrir el cálculo. Esperado: 2 hechos distintos; 1 comprobado; 50%. Dos fuentes de A01-F1 cuentan una afirmación.

Patrón orientativo de cálculo sobre Evidencia A:
```text
Hechos de la oportunidad =
{ FIXED [oportunidad_id] : COUNTD(
  IF [naturaleza] = 'HECHO' THEN [afirmacion_id] END
) }

Hechos comprobados de la oportunidad =
{ FIXED [oportunidad_id] : COUNTD(
  IF [naturaleza] = 'HECHO' AND [comprobacion] = 'SI'
  THEN [afirmacion_id] END
) }

Cobertura factual =
IF [Hechos de la oportunidad] > 0
THEN [Hechos comprobados de la oportunidad] / [Hechos de la oportunidad]
END
```
Comprobar los nombres de campos de la fuente y el alcance del cálculo. FIXED considera los filtros de contexto; otros filtros de la vista pueden no cambiar su alcance. Si se necesita otro periodo o corte, adaptar y conciliar. El estado de comprobación se revisa por afirmación; no deducirlo sólo del número de fuentes. A03 tiene cobertura nula, sin hechos.

### Lámina 26 · Capacidades y brechas · 5 minutos
Usar el encargo de la lámina. Seleccionar A01: tiene 3 requisitos distintos, 2 con candidato documentado y encaje SI. Mostrar A01-R3 con persona vacía. Cobertura potencial 66,67%; no significa compromiso. Verificar la referencia del perfil.

Patrón orientativo sobre Encaje C:
```text
Requisitos = { FIXED [oportunidad_id] : COUNTD([requisito_id]) }
Requisitos con candidato revisado =
{ FIXED [oportunidad_id] : COUNTD(
  IF NOT ISNULL([persona_id]) AND LEN(TRIM([persona_id])) > 0
  AND NOT ISNULL([referencia_capacidad])
  AND LEN(TRIM([referencia_capacidad])) > 0
  AND [encaje_revisado] = 'SI'
  THEN [requisito_id] END
) }
```
Dividir por Requisitos sólo si es mayor que cero. El segundo candidato de A01-R1 no aumenta el conteo. Conservar brechas y confirmar disponibilidad; no sumar horas textuales ni duplicarlas por capacidad.

### Lámina 27 · Objetivo 1 y Objetivo 2 · 5 minutos
Comparar B01 y B02 del ejemplo por propietario P01. Objetivo 1 recomienda P02; Objetivo 2 se abstiene por falta de evidencia de validación operativa. Mostrar propósito, evidencia, archivo y fecha. Son salidas ficticias, no pruebas del agente real. En todo el conjunto hay 3 recomendaciones y 1 abstención; no hay acuerdos. En datos reales, contar propuesta y versión distintas y explicar qué cambió.

### Lámina 28 · Condiciones del piloto · 5 minutos
Comparar S01, S02 y S03 en USD a 3 meses. Costo mensual = tecnología_mensual + horas_humanas_mensuales × costo_hora. TCO = costo_inicial + horizonte_meses × costo mensual. Esperado: 2 260, 4 048 y 5 890 USD. Los beneficios no están cuantificados; no calcular ROI. Conservar cada escenario una vez. Estas hipótesis no se mezclan con el ejemplo de 10 000 casos de las láminas 18–21.

### Lámina 29 · Pulse y dashboard · 3 minutos
Mostrar una definición de «Nuevas oportunidades registradas»: medida, fecha, dimensiones y filtros. Las fechas del kit son ficticias; no atribuirlas al grupo. «Nuevas recomendaciones válidas» requiere criterio de validez y primera aparición del evento. Sin historial real suficiente, explicar la configuración y omitir tendencias o insights que no estén disponibles.

Si la función de dashboard está habilitada y ensayada, preguntar en inglés: “Which opportunities have factual claims pending verification?” Comprobar respuesta en las vistas y filtros. Si no está disponible, conservar el análisis en authoring y registrar la limitación.

### Lámina 30 · Next y decisión · 3 minutos
Explicar cómo definiciones semánticas como oportunidad vigente y recomendación válida sustentan preguntas. Next se presenta como arquitectura; el kit no incluye una conexión operativa a n8n. Cerrar con una decisión provisional, capacidad pendiente y supuesto por medir.

## Ruta cuando no esté habilitada la IA
Utilizar las vistas y cálculos preparados con BI convencional. Leer los encargos y explicar qué trabajo solicitaríamos a Agent. Identificarlo como recorrido manual y mantener visibles los límites de acceso. Tableau Public ofrece BI web gratuito; su Help Agent es asistencia sobre el producto, no análisis del caso.

## Comprobaciones para el ensayo docente
- Reconstruir 3 oportunidades, cobertura A01 50%, cobertura potencial A01 2/3 y 4 salidas históricas.
- Verificar brecha visible, abstención y ausencia de acuerdos.
- Conciliar costo una vez por escenario, moneda y horizonte.
- Revisar fórmulas y filtros antes de aceptar lo que propone Agent.
- Abrir una referencia original cuando se trabaje con entregas reales; la tabla no acredita revisar todo NotebookLM.
- Registrar qué función se ejecutó y qué se explicó por falta de cuenta, configuración o historial.

## Fuentes oficiales · consultadas para el diseño del bloque
[Agent](https://help.tableau.com/current/online/en-us/web_author_einstein_faq.htm) · [Relaciones](https://help.tableau.com/current/pro/desktop/en-us/relate_tables.htm) · [Configuración](https://help.tableau.com/current/online/en-us/setup_tabAI_site_setting.htm) · [Permisos](https://help.tableau.com/current/online/en-us/permissions.htm) · [Pulse](https://help.tableau.com/current/online/en-us/pulse_create_metrics.htm) · [Dashboards](https://help.tableau.com/current/pro/desktop/en-us/dashboard-narratives.htm) · [Idiomas](https://help.tableau.com/current/tableau/en-us/tableau_gai_einstein_trust.htm) · [Next](https://help.salesforce.com/s/articleView?id=analytics.tua_ai.htm&language=en_US&type=5) · [Public](https://help.tableau.com/current/pro/desktop/en-us/public_faq.htm).

El diseño y el kit están preparados para ensayo. No acreditan un dashboard publicado ni una ejecución real de Tableau Cloud con las entregas del grupo.
