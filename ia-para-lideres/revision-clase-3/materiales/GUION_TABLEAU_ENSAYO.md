# Tableau con IA · conducción de 22 minutos

Clase 3, lámina 11. El aprendizaje es solicitar un análisis, examinar el cálculo y limitar la conclusión. Cargar un archivo no constituye el objetivo del demo.

## Preparar el entorno

Usar Tableau Cloud o Desktop conectado a un entorno compatible con Agent habilitado. Revisar la fuente, permisos, idioma y campos. Confirmar acceso con las páginas oficiales: [autoría](https://help.tableau.com/current/online/en-us/web_author_einstein.htm), [habilitación](https://help.tableau.com/current/online/en-us/setup_tabAI_site_setting.htm), [prueba Cloud](https://www.tableau.com/products/trial). Public sirve para practicar BI con datos publicables; no equivale al acceso a Agent.

El kit es ficticio. Mantener los trabajos reales bajo su acceso apropiado. Preparar también el libro con cálculos y vistas para explicar el recorrido si la función no está habilitada. Identificar la demostración ejecutada y la explicación documental; no atribuir resultados preparados al agente.

## 1. Encargo ejecutivo · tres minutos

«Comparamos tres alternativas de una propuesta. Queremos decidir cuál merece un piloto y qué evidencia falta para financiarla». Reconocer afirmación, referencia, oportunidad y escenario como unidades distintas.

## 2. Pedir y revisar un indicador · cinco minutos

Solicitar: «Propón una proporción de afirmaciones factuales comprobadas por oportunidad, contando afirmacion_id distinto. Usa las categorías HECHO y SI de la fuente. Si no hay hechos, conserva NULL. Explica numerador, denominador y filtros».

Leer el cálculo antes de aceptarlo. A01 tiene dos hechos y uno comprobado: 50 %. Sus tres referencias no cambian el denominador. A03 sin hechos conserva NULL. Cambiar una referencia no debe multiplicar una afirmación. La verdad procede de la revisión registrada; el producto no verifica automáticamente fuentes.

## 3. Pedir una vista comparativa · seis minutos

Solicitar: «Para A01 compara costo del periodo por escenario, conservando tres meses y un registro económico por escenario. Calcula inicial + meses × (tecnología mensual + horas humanas mensuales × costo por hora). Muestra una barra por alternativa y explica partidas y supuestos».

Contrastar los campos reales y una cuenta manual. Totales ficticios: USD 2.260, 4.048 y 5.890. No sumar escenarios repetidos al relacionar fuentes. Los números son supuestos docentes, no precios de proveedores.

## 4. Examinar la explicación · cuatro minutos

Preguntar: «¿Puedes concluir que existe retorno positivo? ¿Qué evidencia falta?». El costo no demuestra beneficio, calidad o encaje. Mostrar que la recomendación debe conservar esas ausencias. Comparar una conclusión sustentada con una que inventa ahorro.

## 5. Refinar y decidir · cuatro minutos

Aumentar una hora mensual de revisión a USD 18 por hora y conservar tres meses: el costo agrega USD 54. Comprobar vista y explicación. Formular una recomendación de piloto que mida calidad y revisión. Preguntar qué resultado cambiaría la decisión.

## Extensión de seguimiento

[Pulse](https://help.tableau.com/current/online/en-us/pulse_insights_platform_insight_types.htm) sirve para seguir métricas y explorar cambios, con funciones habilitadas. Preparar una métrica observada de costo por resultado aceptado requeriría resultados, periodo y definición; los escenarios supuestos del kit no son producción. [Prep con Agent](https://help.tableau.com/current/prep/en-us/prep_einstein.htm) ayuda en preparación y cálculos. La experiencia de Agent en dashboards tiene [condiciones beta propias](https://help.tableau.com/current/pro/desktop/en-us/dashboard-narratives.htm).
