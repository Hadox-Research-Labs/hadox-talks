# Demostraciones de Tableau · preparación del docente

Las láminas 13 y 14 anuncian las preguntas. El procedimiento se muestra en Tableau. Este documento permite preparar y ensayar el entorno antes de impartirlo.

## Preparación y materiales

1. Usar una cuenta de Tableau Cloud con Tableau Agent habilitado o una prueba compatible. Verificar inicio de sesión, acceso a autoría web, una hoja conectada y el icono Agent activo. Probar un cálculo y una visualización del caso. La documentación oficial contempla la prueba, pero no acredita que nuestra cuenta esté configurada.
2. Descomprimir KIT_TABLEAU_A_B_C.zip. Empezar con demo_ficticia para el ensayo. Las seis tablas contienen hechos ficticios y referencias ficticias identificadas como DEMO. No sirven para atribuir resultados a alumnos o clientes.
3. Preparar los datos de A: oportunidad, servicio del catálogo Nexo, sector, afirmaciones y fuentes. Para B: perfiles autorizados, objetivo 1 y objetivo 2, propuestas y abstenciones. Encaje_C añade la revisión del requisito de la oportunidad contra una capacidad documentada. Escenarios_C añade condiciones y costos propios, indicando el origen de cada supuesto.
4. Conservar fuentes originales y versiones. Sustituir nombres por alias en cualquier publicación pública. Trabajar con entregas reales únicamente en un entorno autorizado. No convertir el sitio de ensayo en una publicación de CV.
5. Relacionar Oportunidades_A con Evidencia_A, Encaje_C y Escenarios_C por oportunidad_id. Relacionar Personas_B con Encaje_C por persona_id. Para analizar recomendaciones, usar una hoja o fuente con identidad de propuesta y versión que conserve también las abstenciones sin companero_id. Revisar la granularidad antes de agregar costos. El agente no construye por nosotros el modelo de datos.

## Demo 1 · oportunidades y capacidades · 20 minutos

**0–3:** mostrar la fuente preparada, sus IDs y las dos preguntas: qué oportunidad tiene evidencia y qué capacidad necesitamos para prepararla. Recordar A y B con sus productos visibles.

**3–8:** pedir al agente un cálculo primero. Encargo:

> Crea un cálculo de proporción de afirmaciones factuales comprobadas. Cuenta de forma distinta afirmacion_id cuando naturaleza = HECHO y comprobacion = SI. Divide entre las afirmaciones distintas con naturaleza = HECHO. Si el denominador es cero, conserva NULL. Explica el cálculo.

Revisar los nombres reales de los campos y la fórmula. Referencia determinista del kit: A01 tiene dos afirmaciones factuales distintas y una comprobada, aunque la primera tenga dos fuentes. Resultado 50 %. A03 tiene cero afirmaciones factuales, resultado NULL. No forzar un 0 %.

**8–12:** pedir una vista con titulo de oportunidad, sector y el cálculo. Encargo:

> Muestra las oportunidades por sector y la proporción de afirmaciones comprobadas. Usa oportunidad_id distinto y conserva las oportunidades con evidencia pendiente. No interpretes ese porcentaje como rentabilidad o probabilidad de éxito.

Abrir la fuente de una afirmación. El cálculo lee los estados que registramos: no verifica automáticamente la verdad de los documentos.

**12–16:** en la hoja de Encaje_C, comparar requisitos con capacidades. Encargo:

> Para cada oportunidad muestra los requisito_id distintos y cuáles tienen una persona_id identificada con encaje_revisado = SI. Conserva los requisitos sin candidato. Distingue capacidad potencial de disponibilidad y compromiso.

Referencia A01: tres requisitos, dos con candidato y encaje revisado, cobertura potencial 2/3. No significa equipo comprometido. Mostrar la capacidad y la evidencia correspondiente.

**16–20:** cambiar filtro o pregunta, examinar lo que cambia y guardar ambas hojas. Si mostramos B, mantener propuesta_id, versión y objetivo_prueba. Comparar las recomendaciones de los objetivos 1 y 2 sin contar una nueva versión como otra persona. La abstención conserva su motivo.

## Demo 2 · escenarios · 10 minutos

**0–3:** abrir Escenarios_C. Cálculo revisado:

```text
Costo mensual = tecnologia_mensual + horas_humanas_mensuales * costo_hora
Costo del período = costo_inicial + horizonte_meses * Costo mensual
```

Las cifras del kit son supuestos. Para A01 los tres escenarios a tres meses son USD 2260, 4048 y 5890. Mantener escenario_id y horizonte. Comparar cada registro una sola vez, sin multiplicarlo por sus fuentes o candidatos. Este presupuesto es independiente del ejemplo de costo por propuesta de la lámina 9.

**3–6:** pedir una vista de costos por escenario y oportunidad. Revisar campos, agregación y unidades. Encargo:

> Compara el costo del período por escenario para A01. Conserva escenario_id y horizonte_meses. Identifica las entradas como supuestos. No calcules retorno ni ahorro: beneficio_mensual_supuesto no contiene un beneficio cuantificado.

**6–8:** el docente organiza las hojas en un dashboard. Si Tableau Agent en dashboards está habilitado, pedir un resumen y preguntar qué evidencia falta para elegir. Si la función Q&A requiere inglés en el entorno, usar:

> Compare the cost scenarios for opportunity A01. These are assumptions, not measured outcomes. What data is missing to assess a financial return?

No pedir al agente que construya el dashboard completo ni simular una ejecución de la función beta si está ausente.

**8–10:** contrastar la explicación con el cálculo y terminar con una decisión provisional: escenario para explorar, responsable, supuesto por medir y condición que haría cambiar la recomendación.

## Ruta si la IA no está disponible

Mostrar en Tableau la misma fuente, cálculos y vistas preparados manualmente. Identificar ese recorrido como BI y explicación docente. Usar la documentación oficial para explicar qué función de IA falta ensayar. Tableau Public permite la ruta gratuita de visualización, pero no se presenta como acceso gratuito a Tableau Agent para analizar este caso. No obligar al alumno a contratar una cuenta para la clase.

## Referencias

- [Tableau Agent: funciones, prueba y limitaciones](https://help.tableau.com/current/online/en-us/web_author_einstein_faq.htm)
- [Tableau Agent en dashboards, beta](https://help.tableau.com/current/pro/desktop/en-us/dashboard-narratives.htm)
- [Tableau Public](https://help.tableau.com/current/pro/desktop/en-us/public_faq.htm)
- [Relaciones entre tablas](https://help.tableau.com/current/pro/desktop/en-us/relate_tables.htm)
