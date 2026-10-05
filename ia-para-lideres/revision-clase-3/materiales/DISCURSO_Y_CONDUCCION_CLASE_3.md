# Clase 3 · IA para líderes: analizar, elegir y decidir

Dr. Edgar Valdés · PBS · 5 octubre 2026 · 18:00–21:00 Guatemala

Discurso revisado para exposición oral. Conserva las 16 láminas y la agenda. Las transiciones están integradas en el texto que se lee y escucha.

## 1. IA para líderes: analizar, elegir y decidir

18:00–18:03 · 3 minutos

### Discurso

Hoy vamos a trabajar una decisión que cualquier líder puede enfrentar: tenemos una propuesta para usar inteligencia artificial en la empresa y debemos decidir si vale la pena probarla, bajo qué condiciones y con qué recursos.

Esta clase desarrolla los dos temas de nuestro temario: analítica aumentada, y límites reales, riesgos ejecutivos y oportunidades por industria. La analítica aumentada nos ayudará a entender cómo la IA participa en el análisis. El segundo tema nos permitirá evaluar dónde conviene aplicarla y qué debemos comprobar antes de implementarla.

Seguiremos el recorrido de esa decisión. Primero veremos qué puede aportar la IA y cómo comparar herramientas. Después calcularemos su costo y trabajaremos con Tableau. Finalmente evaluaremos los riesgos y formularemos una recomendación. Para esa recomendación recuperaremos los resultados de las dos clases anteriores.

Comencemos con una pregunta de negocio: las ventas crecieron, pero el margen cayó. ¿Cómo nos ayudaría la IA a investigar lo que está pasando?

### Conducción

- Presentar los dos temas PBS y el resultado ejecutivo.
- Mostrar el recorrido de analítica, herramientas, industrias, economía, Tableau y evaluación.

**Pregunta:** ¿Qué análisis necesitas para decidir una inversión o cambiar un proceso?



## 2. Qué añade la IA al análisis

18:03–18:13 · 10 minutos

### Discurso

La analítica aumentada incorpora IA a distintas partes del análisis: preparar datos, explorar cambios, construir cálculos y explicar resultados. Para entender su aporte, sigamos la pregunta que acabamos de plantear: vendemos más, pero obtenemos menos margen por cada peso vendido.

Primero debemos definir qué estamos midiendo. En este ejemplo usaremos margen de contribución: ventas menos los costos variables asociados a esas ventas. Para expresarlo como porcentaje, dividimos esa diferencia entre las ventas. La definición importa porque margen bruto, contribución y utilidad consideran costos distintos. Si cada área usa una definición diferente, sus respuestas pueden parecer contradictorias aunque las cuentas estén bien.

Con la definición acordada, buscamos dónde cambió el resultado. Podemos comparar meses, productos, clientes o canales. Tal vez vendimos más productos con menor contribución. Tal vez aumentó el costo de atender cierto canal. Cada explicación es una hipótesis que debemos contrastar con los registros.

La IA puede ayudarnos a preparar los datos, proponer un cálculo o construir una vista para explorar esas hipótesis. También puede resumir un cambio: por ejemplo, señalar qué categoría aporta más a la caída del margen. Eso facilita la investigación, pero todavía necesitamos comprobar la definición, el periodo y los datos que sustentan la respuesta.

Una buena revisión empieza con preguntas concretas. ¿El cálculo incluye todos los costos previstos? ¿Estamos comparando periodos equivalentes? ¿El filtro dejó fuera alguna parte del negocio? ¿Podemos reproducir el resultado con una cuenta sencilla?

El análisis nos ayuda a decidir qué investigar o qué intervención probar. Para comprobar que una intervención produce un efecto, necesitamos evidencia adicional, como una comparación adecuada o una prueba controlada. Un gráfico que muestra dos cambios simultáneos todavía no demuestra una causa.

Ya vimos varias tareas dentro de una sola pregunta. Preparar datos, consultar documentos y analizar indicadores requieren capacidades diferentes. Esa diferencia nos lleva a elegir la familia de herramientas que corresponde al trabajo.

### Conducción

- Explicar preparación, exploración, cálculo y explicación con la caída del margen.
- Dar dos minutos para transformar una preocupación en una pregunta con indicador, periodo y segmento.
- Resolver por qué un patrón orienta una investigación sin demostrar causalidad.

**Pregunta:** ¿Qué explicación alternativa podría cambiar tu decisión?

**Fuentes:** [Tableau Agent en Prep](https://help.tableau.com/current/prep/en-us/prep_einstein.htm), [Tableau Agent: autoría y limitaciones](https://help.tableau.com/current/online/en-us/web_author_einstein.htm), [Tableau Pulse: plataforma de insights](https://help.tableau.com/current/online/en-us/pulse_insights_platform_insight_types.htm), [IBM: CRISP-DM](https://www.ibm.com/docs/en/spss-modeler/18.6.0?topic=dm-crisp-help-overview)

## 3. Elegir la familia antes que la marca

18:13–18:23 · 10 minutos

### Discurso

Antes de comparar marcas, describamos la tarea. Una empresa puede necesitar leer documentos, seguir indicadores, anticipar demanda o ejecutar un proceso. Cada necesidad nos lleva a una familia distinta de herramientas.

La primera familia es la de asistentes generales, como Claude, ChatGPT o Gemini. Ayudan a explorar información y preparar análisis o borradores. Por ejemplo, podemos pedirles que expliquen diferencias entre dos reportes. Para utilizar el resultado debemos revisar sus cálculos y las fuentes que realmente consultaron.

La segunda familia trabaja con un conjunto de documentos y fuentes, como Notebook o las soluciones de búsqueda empresarial. Es útil para consultar políticas, manuales o antecedentes. Si queremos saber qué descuento está autorizado, necesitamos recuperar la política vigente y comprobar que la respuesta corresponde a ella.

La tercera familia reúne inteligencia de negocios y analítica aumentada, como Tableau y Power BI con sus funciones de IA. Aquí organizamos indicadores, cálculos y vistas que podemos consultar de forma recurrente. Es la familia que usaremos para investigar el cambio de margen del ejemplo.

La cuarta familia incluye plataformas para construir y gestionar modelos predictivos, como Dataiku o DataRobot. Una aplicación posible es anticipar demanda a partir de datos históricos. Debemos comprobar su desempeño con datos que no utilizamos para ajustar el modelo y compararlo con una referencia sencilla, como el mismo periodo del año anterior.

La quinta familia conecta aplicaciones y automatiza tareas, como n8n y otras plataformas de flujos y agentes. Puede recibir una solicitud, consultar información y preparar una respuesta. Aquí importa tanto la calidad del resultado como el permiso para ejecutar cada acción.

La sexta familia agrupa herramientas especializadas en procesos o sectores. Por ejemplo, asistentes de atención al cliente o soluciones para apoyar la planeación de rutas. Su evaluación debe considerar las reglas y consecuencias de ese proceso.

Una misma herramienta puede participar en varias familias. Por eso esta clasificación nos orienta, pero todavía necesitamos examinar sus capacidades concretas. Vamos a hacerlo con la matriz de la siguiente lámina.

### Conducción

- Clasificar exploración puntual, indicador recurrente, pronóstico y acción.
- Abrir cuatro familias en la biblioteca y mostrar sus datos, condiciones y motores de costo.

**Pregunta:** ¿Buscas una respuesta puntual, un indicador recurrente, una predicción o una acción?

**Fuentes:** [Biblioteca y matriz del curso](https://hadox-research-labs.github.io/hadox-talks/ia-para-lideres/revision-clase-3/biblioteca.html), [Anthropic: crear y editar archivos](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude), [Microsoft: Copilot para Power BI y requisitos](https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-introduction), [Tableau Agent: autoría y limitaciones](https://help.tableau.com/current/online/en-us/web_author_einstein.htm), [Dataiku: plataforma y capacidades](https://www.dataiku.com/product), [n8n Tools Agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/tools-agent/)

## 4. Leer una matriz de capacidades

18:23–18:40 · 17 minutos

### Discurso

La matriz nos permite comparar herramientas con la misma pregunta: ¿qué capacidad necesitamos y cómo la ofrece cada candidata? Las filas contienen herramientas. Las columnas separan trabajo con documentos, análisis de tablas, inteligencia de negocios y flujos.

Leamos primero la clave. La letra D indica una capacidad documentada para el alcance descrito en la biblioteca. La letra I señala una aplicación o integración que debemos validar. La raya indica que esa capacidad no se evaluó en esta matriz. Ninguna de estas marcas es una calificación de rendimiento.

Volvamos a nuestra pregunta sobre el margen. Si necesitamos un indicador recurrente, con una definición compartida y vistas por producto, examinamos la columna de inteligencia de negocios. Si además debemos consultar las políticas comerciales, examinamos documentos. Si queremos que el análisis genere una alerta o inicie una tarea, revisamos flujos. Así podemos identificar cuándo basta una herramienta y cuándo necesitamos una integración.

La biblioteca completa amplía esta selección a 51 herramientas. Al abrir una ficha debemos revisar qué producto o edición se describe, qué acceso requiere y qué evidencia respalda la capacidad. El nombre de una marca puede agrupar funciones que se venden o habilitan por separado.

La selección tiene dos pasos. Primero comprobamos si la candidata ofrece la capacidad necesaria. Después verificamos si podemos utilizarla en nuestra empresa: licencia, permisos, datos disponibles, integración y condiciones de uso. Una función documentada puede quedar fuera de nuestra cuenta o requerir preparación adicional.

Para comparar dos candidatas, definamos una tarea pequeña y el resultado esperado. Si queremos explicar la caída del margen, ambas deben trabajar con la misma definición y el mismo periodo. Registramos errores, revisión necesaria y tiempo completo. Esa prueba nos permite evaluar el trabajo real.

Ahora elijan una tarea de su actividad y busquen dos candidatas. Anoten qué capacidad usarían y qué condición falta confirmar. En la siguiente parte añadiremos otra pregunta: ¿cómo cambia esa evaluación según la industria?

### Conducción

- Abrir la matriz completa y explicar D, I y capacidad no evaluada.
- Elegir dos candidatas para un indicador recurrente; justificar por capacidades y condiciones.
- Mostrar por qué una marca documentada no constituye una prueba de desempeño.

**Pregunta:** ¿Qué celda y qué condición necesitas comprobar antes de comprar?

**Fuentes:** [Biblioteca y matriz del curso](https://hadox-research-labs.github.io/hadox-talks/ia-para-lideres/revision-clase-3/biblioteca.html), [Anthropic: crear y editar archivos](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude), [Tableau Agent: autoría y limitaciones](https://help.tableau.com/current/online/en-us/web_author_einstein.htm), [Microsoft: Copilot para Power BI y requisitos](https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-introduction), [Dataiku: plataforma y capacidades](https://www.dataiku.com/product), [n8n Tools Agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/tools-agent/)

## 5. Oportunidades por industria: proceso y prueba

18:40–18:58 · 18 minutos

### Discurso

La capacidad de una herramienta puede ser similar en varias empresas, pero el criterio para aceptar su resultado cambia con el proceso. Una respuesta incorrecta en una cotización, una ruta o un expediente tiene consecuencias diferentes.

En distribución podemos estudiar demanda, existencias o preparación de cotizaciones. Tomemos la cotización: necesitamos catálogo vigente, precio, disponibilidad y política comercial. Una prueba útil incluye un producto válido, uno inexistente, un precio vencido y una solicitud de descuento que requiere autorización. Aceptamos el resultado cuando conserva la información correcta y deriva la excepción a quien puede decidir.

En atención al cliente podemos investigar consulta de políticas, clasificación de solicitudes y preparación de respuestas. Además del tiempo, medimos resolución correcta y derivación de los casos que requieren una persona. Una respuesta rápida que obliga al cliente a volver a contactar puede aumentar el trabajo total.

En movilidad y logística podemos apoyar la planeación de rutas. Debemos considerar horarios, capacidad del vehículo y restricciones de operación. La prueba consiste en comprobar si la propuesta es viable y mejora un indicador acordado, como entregas a tiempo o costo por recorrido.

En manufactura encontramos aplicaciones como inspección visual, mantenimiento o extracción de datos de facturas. Cada una requiere una prueba distinta. En una factura, por ejemplo, revisamos proveedor, moneda, importe y duplicados. La precisión necesaria depende del uso posterior y del costo de corregir un error.

Esta misma lógica se extiende a otras industrias. En finanzas comprobamos conciliaciones contra los registros. En servicios profesionales y asuntos legales revisamos fuentes, versiones y confidencialidad. En salud, la documentación y las recomendaciones requieren controles acordes con su uso y revisión profesional.

En educación evaluamos apoyo a la preparación y evaluación con criterios definidos. En turismo revisamos políticas y atención. En agro necesitamos datos de campo para evaluar detección y recomendaciones. En construcción importan las versiones de planos y documentos. En el sector público debemos comprobar acceso, trazabilidad y facultades del responsable.

La biblioteca sectorial organiza doce industrias y 48 aplicaciones propuestas. Cada fila permite identificar proceso, capacidad, herramientas candidatas, datos, indicador y criterio de aceptación. Son puntos de partida para investigar y probar en su contexto.

Elijan una fila cercana a su trabajo y respondan: ¿qué error tendría una consecuencia importante y cómo lo detectaríamos? Con eso ya podemos definir una prueba. Falta saber cuánto costará producir y aceptar cada resultado. Ese es el siguiente paso.

### Conducción

- Abrir la matriz sectorial, no sólo enumerar industrias.
- Resolver cotización y factura con datos, candidatas, indicador y prueba.
- Dar seis minutos para seleccionar una aplicación propia y dos herramientas; discutir dos elecciones.

**Pregunta:** ¿Qué error sería material en tu industria y cómo lo detectarías?

**Fuentes:** [Biblioteca y matriz del curso](https://hadox-research-labs.github.io/hadox-talks/ia-para-lideres/revision-clase-3/biblioteca.html), [Google: forecasting](https://docs.cloud.google.com/vertex-ai/docs/tabular-data/forecasting/overview), [Google: Route Optimization API](https://developers.google.com/maps/documentation/route-optimization/overview), [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

## 6. El costo completo de una operación con IA

18:58–19:08 · 10 minutos

### Discurso

El costo de implementar IA comienza con el trabajo que queremos resolver. Los sistemas de información ya tienen costos de licencia, infraestructura, integración y operación. Con IA debemos examinar además cómo el uso y la calidad del resultado modifican ese costo.

Separemos inversión inicial y operación recurrente. La inversión inicial puede incluir preparar datos, conectar sistemas, configurar permisos y capacitar al equipo. La operación recurrente incluye tecnología, soporte y trabajo humano. Para comparar alternativas usamos el mismo horizonte, por ejemplo tres meses o un año.

En la tecnología, el cobro puede depender de usuarios, consultas, volumen procesado o consumo del modelo. Algunos proveedores miden texto mediante tokens, que son fragmentos que el modelo procesa. Otros utilizan créditos o unidades propias. Necesitamos conocer la unidad facturada y estimar cuántas consumirá nuestra tarea.

También debemos medir las repeticiones. Una solicitud puede generar varias llamadas al modelo, intentos fallidos o consultas a otras herramientas. Si sólo contamos el primer intento, subestimamos el consumo. Si el precio es fijo, esa actividad puede afectar límites, capacidad o trabajo de operación aunque no cambie inmediatamente la factura.

Después sumamos el trabajo humano: revisar, corregir, atender excepciones y mantener la solución. La revisión depende de la calidad que entrega la herramienta y de la consecuencia del error. Por eso dos alternativas con precios técnicos parecidos pueden tener costos operativos muy distintos.

FinOps propone gestionar el gasto tecnológico en relación con su uso y el valor que aporta al negocio. Para esta clase aplicamos esa idea mediante una unidad comprensible para el proceso: cotización válida, solicitud resuelta o análisis aceptado. Registramos las partidas una sola vez y aclaramos los supuestos.

El costo del periodo será la inversión inicial más la operación durante ese periodo. Esa cuenta nos da el presupuesto, pero para comparar eficiencia necesitamos dividir el costo entre los resultados que realmente podemos aceptar. Veamos un ejemplo.

### Conducción

- Descomponer un presupuesto en cuatro partidas.
- Cambiar volumen y reintentos durante dos minutos; identificar qué término cambia.
- Explicar los costos que quedarían fuera si sólo miramos la suscripción.

**Pregunta:** ¿Qué partida aumenta cuando la salida necesita más revisión?

**Fuentes:** [FinOps: Unit Economics](https://www.finops.org/framework/capabilities/unit-economics/), [FinOps para IA](https://www.finops.org/framework/technology-categories/ai/)

## 7. Costo por resultado aceptado

19:08–19:16 · 8 minutos

### Discurso

Las dos alternativas de la lámina reciben cien solicitudes. Para compararlas, usamos el mismo periodo y el mismo criterio de aceptación. Los números son un ejemplo docente en dólares.

La alternativa X cuesta diez en tecnología y noventa en revisión. Su costo total es cien. De las cien solicitudes, ochenta producen un resultado aceptado. Dividimos cien entre ochenta y obtenemos un costo de 1,25 por resultado aceptado.

La alternativa Y cuesta veinticinco en tecnología y cuarenta y cinco en revisión. Su costo total es setenta y entrega noventa resultados aceptados. Setenta dividido entre noventa da aproximadamente 0,78 por resultado aceptado.

Si miramos la partida tecnológica, X parece más barata. Al incorporar la revisión y los resultados aceptados, Y resulta más eficiente dentro de este ejemplo. La calidad afecta la economía porque modifica cuánto trabajo necesitamos para llegar a un resultado útil.

Fíjense en el denominador: contamos resultados que cumplen el criterio acordado. Debemos definir ese criterio antes de la prueba. En una cotización puede significar producto, precio y política correctos. En una solicitud de atención puede significar resolución válida y registrada.

También debemos incluir el costo incurrido en las solicitudes que fallaron. Si después requieren un nuevo intento o atención adicional, esa actividad debe entrar en la evaluación correspondiente. Así evitamos presentar un costo incompleto.

Esta comparación nos dice cuánto cuesta obtener un resultado útil. La siguiente pregunta es qué beneficio produce ese resultado y cómo aparece en la operación, en el margen o en la caja de la empresa.

### Conducción

- Resolver ambos totales y divisiones antes de mostrar la conclusión.
- Pedir al grupo que identifique los casos pendientes y qué costo falta para atenderlos.

**Pregunta:** ¿Qué conclusión cambiaría si las solicitudes no fueran comparables?

**Fuentes:** [FinOps: Unit Economics](https://www.finops.org/framework/capabilities/unit-economics/)

## 8. Capacidad, margen y caja

19:16–19:23 · 7 minutos

### Discurso

Para evaluar el beneficio conviene distinguir capacidad, margen y caja. Cada uno describe un efecto diferente y necesita su propia evidencia.

La capacidad aumenta cuando el equipo puede atender más trabajo con los recursos disponibles. Si la IA libera horas, debemos explicar para qué se utilizarán: atender demanda pendiente, mejorar el servicio o realizar otra tarea. Esas horas pueden tener valor aunque la nómina siga igual.

El margen de contribución cambia cuando una venta adicional deja recursos después de cubrir sus costos variables. En el ejemplo de la lámina, una venta de mil con cuatrocientos de costo variable aporta seiscientos de contribución. Para evaluar una propuesta necesitamos comprobar que esa venta puede ocurrir y qué costos genera. El ingreso completo no es el beneficio.

La caja se refiere a entradas y salidas efectivas de dinero. Podemos mejorar capacidad sin reducir un pago, y podemos generar una venta antes de cobrarla. Por eso debemos aclarar cuándo ocurriría el beneficio y si se convertiría en efectivo disponible.

Cuando calculemos retorno o recuperación de una inversión, utilizaremos beneficios y costos del mismo horizonte. Marcaremos qué cifras observamos y cuáles son supuestos. Si todavía no tenemos un beneficio sustentado, podemos estimar el costo del piloto y definir qué evidencia necesitamos para evaluar su retorno después.

Antes de la pausa, piensen en su aplicación: ¿su principal beneficio sería atender más trabajo, aumentar contribución o cambiar una entrada o salida de dinero? Al volver usaremos Tableau para ordenar la evidencia y explorar los escenarios de una propuesta.

### Conducción

- Resolver el ingreso, costo y contribución de la imagen.
- Explicar qué falta para convertir horas disponibles en cobros.

**Pregunta:** ¿Qué beneficio permanece como capacidad si la demanda no aumenta?

**Fuentes:** [FinOps: Unit Economics](https://www.finops.org/framework/capabilities/unit-economics/)

## 9. Descanso

19:23–19:33 · 10 minutos

### Discurso

Hacemos una pausa de diez minutos. Volvemos a las 19:33. Retomaremos la propuesta para ver cómo Tableau y sus funciones de IA pueden ayudarnos a analizarla.

### Conducción

- Volver a las 19:33.

**Pregunta:** 



## 10. Tableau: tres aportes de IA al trabajo

19:33–19:50 · 17 minutos

### Discurso

Retomemos la propuesta. Ya sabemos qué necesitamos analizar y qué condiciones económicas debemos distinguir. Ahora veremos cómo Tableau apoya ese trabajo y dónde interviene la IA.

En la lámina aparecen tres momentos: preparar datos, construir el análisis y dar seguimiento a indicadores. El dibujo es conceptual. Cada momento tiene funciones y requisitos propios.

En Tableau Prep, Agent puede ayudar a construir pasos de preparación y campos calculados mediante lenguaje natural. Por ejemplo, podemos pedir apoyo para normalizar categorías. Después revisamos que el cambio conserve las diferencias que necesita el negocio y que el flujo pueda repetirse con nuevos datos.

Cuando construimos un análisis, Tableau Agent puede ayudar a crear visualizaciones, aplicar filtros y crear, modificar o explicar cálculos sobre una fuente seleccionada. Podemos pasar de una pregunta a una primera vista y después refinarla. El analista sigue comprobando las relaciones entre los datos, las unidades y el cálculo.

Tableau Pulse se centra en dar seguimiento a métricas definidas. Puede destacar cambios y patrones. Las funciones habilitadas de IA pueden resumirlos en lenguaje natural y apoyar su exploración. Para un líder, esto permite detectar un cambio y volver a la evidencia que lo explica. Identificar un segmento que contribuye al cambio todavía no demuestra su causa.

La documentación también distingue una experiencia de Agent en dashboards que se presenta como beta, con condiciones propias. Para nuestro ejercicio nos centraremos en construir el análisis. El seguimiento con Pulse requiere preparar las métricas y contar con el acceso correspondiente.

La ruta web está en Tableau Cloud. Debemos comprobar antes de la clase qué funciones tiene habilitadas la cuenta de ensayo. Tableau Public sirve para practicar análisis con datos que pueden publicarse, pero su acceso no equivale a tener todas las funciones de IA de Cloud.

Tableau nos interesa porque permite revisar la relación entre pregunta, fuente, cálculo y vista. Un asistente general puede ayudar a explorar o preparar información. Tableau nos ofrece un entorno para organizar el análisis y consultarlo de nuevo. El valor empresarial depende de que ese análisis conserve definiciones y controles claros.

Vamos a recorrer ahora una pregunta concreta. Observaremos qué pedimos al Agent, qué produce y cómo comprobamos su respuesta antes de recomendar una decisión.

### Conducción

- Distinguir Prep, autoría con Agent y seguimiento con Pulse.
- Abrir las páginas oficiales de funciones y acceso.
- Comprobar en la cuenta de ensayo qué función se ejecutará.

**Pregunta:** ¿Necesitas preparar datos, construir un análisis o seguir una métrica?

**Fuentes:** [Tableau Agent en Prep](https://help.tableau.com/current/prep/en-us/prep_einstein.htm), [Tableau Agent: autoría y limitaciones](https://help.tableau.com/current/online/en-us/web_author_einstein.htm), [Tableau Pulse: plataforma de insights](https://help.tableau.com/current/online/en-us/pulse_insights_platform_insight_types.htm), [Tableau: activar IA y prueba Cloud](https://help.tableau.com/current/online/en-us/setup_tabAI_site_setting.htm), [Prueba de Tableau Cloud](https://www.tableau.com/products/trial), [Tableau Agent en dashboards: beta y límites](https://help.tableau.com/current/pro/desktop/en-us/dashboard-narratives.htm), [Anthropic: crear y editar archivos](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude)

## 11. Demo: de la pregunta a una recomendación

19:50–20:12 · 22 minutos

### Discurso

El encargo es evaluar tres alternativas para una misma propuesta: ¿cuál merece una prueba y qué falta comprobar para financiarla? Trabajaremos con datos ficticios del kit. La demostración recorre cinco momentos: revisar la fuente, construir un indicador, comparar costos, interpretar y probar un cambio de supuesto.

Primero reconocemos qué representa cada registro. Tenemos afirmaciones y sus referencias, y tenemos escenarios económicos. Una afirmación puede contar con varias referencias. Necesitamos conservar sus identificadores para contar cada afirmación una sola vez, aunque tenga varios documentos de respaldo.

Pedimos al Agent el porcentaje de afirmaciones de hecho comprobadas por oportunidad. El numerador debe contar hechos comprobados. El denominador debe contar todas las afirmaciones de hecho registradas para esa oportunidad, una sola vez cada una. El estado de comprobación viene de la revisión que registramos en la fuente.

Probamos un caso sencillo: dos afirmaciones de hecho y una comprobada deben dar cincuenta por ciento. Si obtenemos 66,7 porque el cálculo contó tres referencias, tenemos que corregirlo. Si no hay afirmaciones de hecho, el indicador debe quedar sin valor y explicar esa ausencia. Un cero sugeriría que sí hubo hechos evaluados y ninguno quedó comprobado.

Ahora comparamos el costo total de las tres alternativas durante tres meses. La fórmula suma inversión inicial más tres veces el costo mensual. Ese costo mensual incluye tecnología y horas humanas multiplicadas por su costo por hora.

Comprobemos la primera alternativa manualmente. Tiene mil de inversión inicial. Cada mes suma ciento cincuenta de tecnología y quince horas a dieciocho dólares, es decir, doscientos setenta de trabajo humano. El mensual es cuatrocientos veinte. Tres meses cuestan mil doscientos sesenta. Al sumar la inversión inicial obtenemos dos mil doscientos sesenta.

Las otras alternativas dan cuatro mil cuarenta y ocho y cinco mil ochocientos noventa. Son supuestos docentes para practicar la cuenta, no cotizaciones comerciales. Solicitamos una barra por alternativa y verificamos que la vista conserve el mismo horizonte y un registro económico por escenario.

Después pedimos que explique la diferencia de costos. La respuesta debe apoyarse en las partidas disponibles. Para recomendar una alternativa también necesitamos comparar alcance y calidad. Un escenario de menor costo podría entregar menos trabajo o necesitar condiciones distintas.

Probemos el límite de la interpretación: ¿podemos concluir que hay retorno positivo? Con esta fuente todavía falta un beneficio cuantificado y sustentado. El análisis permite comparar presupuesto, pero no calcular un retorno que los datos aún no permiten sostener.

Finalmente cambiamos un supuesto. Si añadimos una hora de revisión mensual a dieciocho dólares durante tres meses, el costo total aumenta cincuenta y cuatro. Confirmamos que el cálculo, la vista y la explicación cambien de manera consistente. Esa sensibilidad nos ayuda a elegir qué debemos medir en el piloto.

Para usar Pulse después, necesitaríamos una métrica definida y resultados de operación que permitan darle seguimiento. Hoy hemos trabajado escenarios. Nuestra recomendación será probar la calidad y la revisión de las candidatas, con el presupuesto y las condiciones señaladas.

Hemos revisado los cálculos. Ahora falta revisar qué información puede consultar la herramienta y qué acciones puede ejecutar. Ese punto nos lleva a los riesgos ejecutivos.

### Conducción

- Seguir GUIA_DEMOS_TABLEAU: encargo 3 min, indicador 5, escenarios 6, interpretación 4, sensibilidad y decisión 4.
- Solicitar, leer, contrastar y refinar: mostrar el ciclo del Agent.
- Usar el ejemplo preparado cuando la cuenta no tenga la función; distinguir ejecución de explicación documental.

**Pregunta:** ¿Qué conclusión excedería los datos de esta demostración?

**Fuentes:** [Tableau Agent: autoría y limitaciones](https://help.tableau.com/current/online/en-us/web_author_einstein.htm), [Tableau: relaciones entre tablas](https://help.tableau.com/current/pro/desktop/en-us/relate_tables.htm), [Tableau Pulse: plataforma de insights](https://help.tableau.com/current/online/en-us/pulse_insights_platform_insight_types.htm), [FinOps: Unit Economics](https://www.finops.org/framework/capabilities/unit-economics/)

## 12. Un documento puede contener una orden peligrosa

20:12–20:24 · 12 minutos

### Discurso

Una herramienta puede producir un análisis correcto y aun así introducir un riesgo por los datos o permisos que utiliza. El riesgo depende de qué puede acceder, qué puede hacer y qué consecuencia tendría un error.

Veamos el caso de la lámina. Le pedimos a un asistente que revise un documento. Dentro del documento aparece una instrucción para copiar información o enviarla a otro lugar. Ese contenido proviene de la fuente que estamos analizando. Si el sistema lo interpreta como una orden autorizada, puede desviarse del encargo.

Este tipo de intento se conoce como inyección de instrucciones. Puede aparecer en documentos, correos, páginas o resultados de una consulta. La fuente contiene texto que trata de modificar el comportamiento del asistente. El riesgo aumenta cuando el asistente tiene herramientas y permisos para realizar acciones.

La primera pregunta ejecutiva es qué autorizamos realmente. Leer un contrato no requiere enviar todos los archivos de la empresa. Debemos limitar acceso y acciones a lo que necesita el trabajo. Los controles de permisos y aprobación deben operar en el sistema, además de las instrucciones que damos al modelo.

En una prueba podemos introducir un documento simulado con una orden fuera del encargo y comprobar qué ocurre. Debemos verificar que el sistema limite la acción y deje evidencia suficiente para investigar el intento. La prueba utiliza datos de ensayo y un entorno delimitado.

Si ocurre un incidente, necesitamos contenerlo, identificar qué información o acciones quedaron afectadas y conservar registros. Después corregimos la condición que lo permitió y comprobamos la recuperación antes de retomar la operación. Debe estar claro quién puede detener el flujo y quién autoriza su regreso.

Hay otros riesgos que debemos evaluar: respuestas incorrectas, exposición de datos, falta de trazabilidad o dependencia del proveedor. Para cada uno necesitamos describir una consecuencia y una forma de controlarla.

Esto convierte la evaluación de una herramienta en algo más concreto que leer sus promesas. Antes de contratar debemos pedir pruebas y responsables. Organicemos esa revisión con el checklist.

### Conducción

- Dar dos minutos para identificar tarea legítima, orden incrustada y permiso excesivo.
- Resolver contención, evidencia y condición de reanudación.

**Pregunta:** ¿Qué permiso convierte una respuesta equivocada en una acción material?

**Fuentes:** [OWASP: agencia excesiva, versión 2025](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/), [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

## 13. Checklist: evidencia antes de contratar

20:24–20:34 · 10 minutos

### Discurso

El checklist convierte nuestras preguntas en evidencia que podemos revisar antes de contratar y durante la implementación. Cada condición necesita una prueba, un responsable y un estado: comprobada, pendiente o incumplida.

Lo organizamos con las cuatro funciones del marco NIST para gestión de riesgos de IA. Govern establece responsabilidades y reglas. Map permite entender el contexto, las personas afectadas y las consecuencias. Measure evalúa el sistema con pruebas e indicadores. Manage utiliza esa evaluación para tratar los riesgos y decidir cómo operar. La tabla es una adaptación docente de ese marco.

En datos pedimos conocer qué información entra, dónde se procesa y cuánto tiempo se conserva. En permisos probamos una acción permitida y una que debe quedar bloqueada. Una declaración comercial necesita acompañarse de condiciones y evidencia aplicables a nuestro uso.

En calidad pedimos resultados sobre casos representativos, incluidas excepciones importantes. En costo revisamos consumo, revisión humana y límites de presupuesto. En continuidad comprobamos cómo detener el proceso y recuperar el servicio. En salida verificamos qué podemos exportar y qué trabajo implicaría cambiar de solución.

Los responsables de la tabla son una propuesta para orientar la conversación. Cada organización debe asignar personas con facultades reales. El dueño del proceso define qué resultado puede aceptar. TI comprueba acceso e integración. Finanzas ayuda a revisar el costo completo. Algunas condiciones requerirán participación de otras áreas.

Una condición crítica pendiente puede impedir que iniciemos, aunque muchas casillas estén favorables. Por ejemplo, un buen precio no resuelve la falta de autorización para tratar los datos. Debemos explicar qué condición detiene la decisión y qué evidencia permitiría revisarla.

El checklist establece qué necesitamos comprobar. El piloto nos permite reunir parte de esa evidencia. En la siguiente lámina veremos cómo medirlo para saber si mejora el trabajo completo.

### Conducción

- Enseñar las cuatro funciones con el incidente ya resuelto.
- Durante tres minutos, completar una condición del checklist con evidencia y responsable.
- Resolver por qué no basta una respuesta favorable sin prueba.

**Pregunta:** ¿Qué evidencia acreditaría el permiso que afirmas tener?

**Fuentes:** [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/), [OWASP: agencia excesiva, versión 2025](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/), [Biblioteca y matriz del curso](https://hadox-research-labs.github.io/hadox-talks/ia-para-lideres/revision-clase-3/biblioteca.html)

## 14. Medir el trabajo completo del piloto

20:34–20:44 · 10 minutos

### Discurso

Un piloto debe comparar el proceso actual con la alternativa que incorpora IA. La medida comienza cuando recibimos la tarea y termina cuando tenemos un resultado aceptado. Así incluimos redacción, revisión y correcciones.

En el ejemplo, el proceso actual requiere doce minutos para redactar y dos para revisar. El total es catorce. Con IA, la redacción baja a cuatro minutos, pero la revisión sube a nueve. El total es trece. La reducción completa es un minuto, aproximadamente 7,1 por ciento.

Si reportamos sólo la redacción, presentaríamos ocho minutos de mejora. Para la operación, esa cifra dejaría fuera el aumento de revisión. El ejemplo explica por qué debemos observar cada etapa y sumar el trabajo necesario para aceptar el resultado.

La comparación también necesita casos equivalentes. Si probamos la IA con solicitudes sencillas y medimos el proceso actual con casos difíciles, la diferencia no permite atribuir una mejora a la herramienta. Acordamos una muestra representativa, el criterio de aceptación y la forma de registrar excepciones.

Medimos tiempo completo, costo por resultado aceptado y calidad. Según el proceso también registramos errores materiales, intervenciones humanas y uso efectivo por parte del equipo. El piloto debe ayudarnos a entender qué ocurre en condiciones cercanas a la operación.

Antes de comenzar definimos las reglas de decisión. Podemos continuar si cumple calidad y mejora el indicador acordado. Podemos ajustar si la revisión concentra un problema corregible. Podemos detener si aparecen errores críticos o si el trabajo total supera el límite aceptable. Los umbrales dependen de la tarea y de sus consecuencias.

Ahora tenemos una forma de reunir evidencia para decidir. Vamos a aplicarla a la oportunidad y a las capacidades que identificamos en las dos clases anteriores.

### Conducción

- Resolver ambos tiempos completos y la diferencia.
- Durante cinco minutos, completar una ficha de piloto con referencia, resultado aceptable y condición de revisión.
- Resolver una recomendación acotada sin extrapolar la muestra.

**Pregunta:** ¿Qué conclusión no puedes sostener todavía con esos tiempos?

**Fuentes:** [Generative AI at Work, versión NBER noviembre 2023](https://www.nber.org/papers/w31161), [Dell’Acqua et al., Organization Science, 2026](https://doi.org/10.1287/orsc.2025.21838), [FinOps: Unit Economics](https://www.finops.org/framework/capabilities/unit-economics/)

## 15. La oportunidad y el equipo

20:44–20:50 · 6 minutos

### Discurso

Recuperemos lo que ya produjimos. En la primera clase investigamos una oportunidad y preparamos una propuesta comercial. En la segunda identificamos capacidades y posibles colaboraciones. Hoy podemos añadir herramientas candidatas, escenarios de costo y una prueba de implementación.

La lámina representa la conexión entre esos trabajos. La oportunidad necesita ciertos requisitos: conocimiento, datos, trabajo y responsables. La información sobre capacidades nos ayuda a identificar quién podría cubrirlos. Antes de planear la ejecución debemos confirmar disponibilidad y alcance. Una recomendación de colaboración todavía requiere ese acuerdo.

Tomemos una afirmación de la propuesta y un requisito de ejecución. Para la afirmación, identifiquemos la fuente y qué parte respalda. Para el requisito, indiquemos la capacidad disponible y qué falta confirmar. Después elijamos una aplicación de la matriz sectorial que pueda apoyar ese trabajo.

En Tableau podemos organizar oportunidades, afirmaciones, capacidades y escenarios mediante sus identificadores. Eso permite revisar qué tiene evidencia, qué permanece como supuesto y qué está pendiente. El kit ficticio muestra la estructura. Al incorporar los resultados reales debemos conservar sus fuentes y utilizar el acceso apropiado.

La IA puede apoyar investigación, preparación o ejecución interna de la propuesta. El servicio que ofrecemos al cliente puede seguir siendo el que necesita. Lo que evaluamos aquí es cómo la herramienta mejora un trabajo específico y bajo qué condiciones.

Conecten ahora una oportunidad, una capacidad y una herramienta candidata. Añadan un escenario y una prueba que permita evaluar el resultado. Con esos elementos podremos redactar la recomendación ejecutiva final.

### Conducción

- Recuperar una oportunidad y una evidencia de capacidad.
- Relacionar un requisito, una herramienta candidata y un escenario.

**Pregunta:** ¿Qué requisito de la propuesta tiene evidencia y cuál sigue pendiente?

**Fuentes:** [Actividad A vigente](https://campus.panamericanlatam.com/mod/assign/view.php?id=75997), [Actividad B vigente](https://campus.panamericanlatam.com/mod/assign/view.php?id=77506), [Biblioteca y matriz del curso](https://hadox-research-labs.github.io/hadox-talks/ia-para-lideres/revision-clase-3/biblioteca.html), [Tableau: relaciones entre tablas](https://help.tableau.com/current/pro/desktop/en-us/relate_tables.htm)

## 16. Decidir: continuar, modificar o detener

20:50–21:00 · 10 minutos

### Discurso

La recomendación debe permitir que otra persona entienda qué proponemos, por qué y bajo qué condiciones. Empecemos por la tarea y la alternativa elegida. Después indiquemos la evidencia que sostiene la decisión y lo que todavía falta comprobar.

Revisamos cuatro condiciones. Utilidad: el resultado sirve al proceso y cumple el criterio de calidad. Factibilidad: tenemos datos, acceso, integración y un equipo que puede ejecutarlo. Economía: conocemos el costo completo y distinguimos beneficios sustentados de supuestos. Riesgo: contamos con controles y una forma de detener y recuperar la operación.

Con esa revisión podemos recomendar continuar con un piloto delimitado. También podemos modificar el alcance para resolver una condición pendiente, o detener y posponer cuando falta algo esencial. La recomendación debe explicar por qué corresponde esa opción.

Incluyamos qué evidencia cambiaría nuestra decisión. Por ejemplo, si la revisión supera cierto tiempo, ajustaremos la alternativa. Si aparece un error material, suspenderemos esa acción. Si faltan datos representativos, ampliaremos la prueba antes de avanzar. Estas condiciones permiten supervisar la implementación después de aprobarla.

Durante cinco minutos completen el memo con su decisión, una alternativa, una cuenta de costo y una condición crítica. Indiquen quién realizará la prueba y qué resultado permitiría continuar. Después escucharemos dos defensas breves y revisaremos si la evidencia sostiene lo que proponen. Conservamos las reglas de evaluación comunicadas en el aula.

La clase nos deja un recorrido que podemos utilizar en la empresa: partir de una pregunta, identificar capacidades, comprobar el análisis y evaluar su costo junto con sus consecuencias. Así podemos recomendar una aplicación de IA y explicar qué necesitamos observar para implementarla con responsabilidad.

### Conducción

- Cinco minutos para completar decisión, alternativa, costo y condición crítica.
- Tres minutos para dos defensas; dos minutos para cerrar el memo.

**Pregunta:** ¿Qué resultado te haría modificar o detener la implementación?

**Fuentes:** [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/), [FinOps: Unit Economics](https://www.finops.org/framework/capabilities/unit-economics/), [Biblioteca y matriz del curso](https://hadox-research-labs.github.io/hadox-talks/ia-para-lideres/revision-clase-3/biblioteca.html)

