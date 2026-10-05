# Clase 3 · Implementar IA en una empresa

Dr. Edgar Valdés · PBS · 5 octubre 2026 · 18:00–21:00 Guatemala

## 1. Implementar IA en una empresa

18:00–18:03 · 3 minutos

### Discurso

Una empresa puede disponer de una herramienta de IA y seguir sin resolver su problema. Puede recibir respuestas convincentes, producir documentos rápidamente y aun así confirmar pedidos imposibles, interpretar mal un indicador o gastar más en revisar que lo que ahorró al generar.

Hoy estudiaremos cómo se produce ese resultado y cómo evaluarlo. Empezaremos con una distribuidora que recibe pedidos, prepara mercancía y organiza entregas. Ese proceso nos permitirá distinguir interpretar, predecir, optimizar y ejecutar. Después construiremos indicadores, compararemos aplicaciones por industria y calcularemos el costo de obtener un resultado utilizable.

La última parte será una demostración de Tableau. La herramienta permitirá ver qué ocurre cuando elegimos un denominador equivocado o cambiamos un supuesto. Para llegar a esa demostración necesitamos saber qué estamos midiendo y por qué. Al terminar podremos explicar qué solución merece una prueba, qué debe comprobar esa prueba y bajo qué condiciones conviene continuar.

La ilustración muestra personas, documentos, datos y un proceso. Esos elementos forman parte de la implementación. El modelo participa en ese sistema; la decisión empresarial incluye el sistema completo.

### Conducción

- Presentar la pregunta empresarial de la distribuidora.
- Explicar el recorrido de conceptos, ejemplos, demostración y aplicación.

**Pregunta:** ¿Qué tendría que ocurrir para considerar resuelto un pedido?



## 2. Generar, predecir, optimizar y automatizar

18:03–18:13 · 10 minutos

### Discurso

Leamos el pedido del dibujo: veinte cajas, mañana, antes de las diez. Para cumplirlo hay cuatro trabajos distintos. Interpretar el mensaje identifica producto, cantidad y plazo. Predecir ayuda a estimar demanda futura. Optimizar permite asignar entregas a vehículos respetando restricciones. Automatizar coordina pasos y registra un pedido autorizado.

La generación produce contenido: texto, imágenes, propuestas de código o una respuesta estructurada. Un modelo puede interpretar lenguaje y proponer campos extraídos. Esa interpretación requiere comprobar si el dato está en la fuente y si conserva su sentido. Una frase como “antes de las diez” no se puede convertir en “durante la mañana” sin cambiar el compromiso.

La predicción estima una variable o una clase a partir de datos. Puede estimar demanda, probabilidad de abandono o presencia de un defecto. Para evaluar un pronóstico precisamos qué se predice, con qué horizonte y contra qué referencia. Un número plausible escrito por un asistente no acredita un modelo predictivo validado.

La optimización busca una solución que mejore un objetivo y cumpla restricciones. En reparto, el objetivo podría ser reducir distancia o costo. Las restricciones incluyen capacidad, horarios y compatibilidad de vehículos. Una ruta corta que incumple el plazo no resuelve el problema. El objetivo y las restricciones deben estar separados.

La automatización ejecuta un proceso. Puede incorporar reglas, un modelo generativo, una predicción o un optimizador. No toda automatización necesita IA. Cuando una condición está definida y se puede comprobar directamente, una regla puede ser suficiente. Introducir un modelo añade una nueva decisión sobre comportamiento y evaluación.

Resolvamos el pedido. El mensaje se convierte en una propuesta de campos. El sistema comprueba catálogo, dirección y existencias. El optimizador examina si hay una entrega factible. La confirmación se emite después de esas comprobaciones. Si el dato de dirección falta, el proceso pide aclaración. Si la ruta no es factible, se ofrece otra condición. La interpretación del mensaje no debe prometer por sí sola una entrega.

Esta separación cambia la compra tecnológica. Podemos necesitar un asistente para documentos y un sistema de pronóstico para inventario. Pueden convivir, pero la buena redacción del primero no demuestra precisión del segundo. La prueba se diseña para cada función.

### Conducción

- Explicar las cuatro escenas con el mismo pedido, sin cambiar de caso.
- Durante dos minutos, pedir al grupo que clasifique redactar una respuesta, estimar demanda, asignar rutas y guardar un pedido.
- Resolver cada clasificación y señalar qué salida debe comprobarse.

**Pregunta:** ¿Cuál de las cuatro funciones necesita comprobar factibilidad?

**Fuentes:** [Google: Route Optimization API](https://developers.google.com/maps/documentation/route-optimization/overview), [Google: forecasting](https://docs.cloud.google.com/vertex-ai/docs/tabular-data/forecasting/overview)

## 3. El modelo es una parte del sistema

18:13–18:20 · 7 minutos

### Discurso

Cuando decimos “vamos a implementar IA”, necesitamos saber qué estamos implementando. El dibujo separa seis componentes. El modelo produce una inferencia. La aplicación define la experiencia y cómo se utiliza el resultado. Los datos aportan documentos y registros. La integración permite consultar o modificar otros sistemas. Los permisos determinan las acciones posibles. La operación atiende revisión, excepciones y mantenimiento.

Una suscripción puede dar acceso a una aplicación y a modelos. Eso no significa que incluya la integración con inventario, el permiso para confirmar pedidos o un procedimiento para atender errores. Tampoco contratar una API produce por sí solo una aplicación que el equipo pueda utilizar.

En nuestra distribuidora, la aplicación recibe el pedido. La integración consulta existencias. Los permisos permiten leer inventario y quizá crear un borrador de pedido. La operación define quién revisa una excepción. Si falta un dato, el modelo no debe inventarlo para completar el formato. El sistema debe conservar el estado pendiente y permitir resolverlo.

Esta arquitectura permite localizar fallos. Si el mensaje se interpreta bien pero el inventario está desactualizado, cambiar el modelo puede no corregir el problema. Si el pedido es válido pero nadie atiende las excepciones, tenemos un problema de operación. Si el asistente puede confirmar entregas sin comprobar factibilidad, debemos examinar integración y autoridad.

También cambia la decisión entre comprar, configurar o desarrollar. Comprar una aplicación reduce ciertas tareas, pero exige comprobar encaje e integración. Configurar puede adaptar un proceso existente. Desarrollar permite mayor control y añade responsabilidades de mantenimiento y evaluación. Compararemos esas alternativas con el mismo alcance y horizonte; tener mayor control no elimina el trabajo que hay que financiar.

Una demostración termina al obtener una salida. La operación debe responder también qué ocurre cuando el proveedor falla, el dato cambia o el resultado no es aceptable. Por eso un diagrama de implementación incluye el recorrido de las excepciones.

### Conducción

- Seguir un pedido incompleto por las seis capas.
- Pedir que localicen el fallo de un inventario desactualizado y resolver por qué no pertenece necesariamente al modelo.

**Pregunta:** ¿Qué componente debe conservar un pedido pendiente de aclaración?

**Fuentes:** [n8n Tools Agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/tools-agent/), [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

## 4. Analítica aumentada: de la pregunta a la decisión

18:20–18:30 · 10 minutos

### Discurso

La analítica aumentada incorpora IA para apoyar preparación, consulta, representación o explicación de datos. Puede ayudarnos a escribir un cálculo o proponer una vista. Para aprovecharlo necesitamos transformar una preocupación del negocio en una pregunta que los datos puedan responder.

“¿Estamos atendiendo mejor?” no define un indicador. Podría referirse al tiempo de primera respuesta, al tiempo de resolución, a satisfacción o a reaperturas. Cada uno mide un fenómeno diferente. Una respuesta rápida puede no resolver la solicitud; un caso cerrado puede reabrirse. La primera decisión analítica consiste en precisar qué entendemos por mejorar.

CRISP-DM organiza el trabajo en comprensión del negocio, comprensión de datos, preparación, modelado, evaluación y despliegue. El ciclo permite volver sobre fases anteriores. Lo usamos como una referencia para relacionar el análisis con su propósito. No es un método exclusivo de IA generativa y no exige entrenar un modelo cuando basta un cálculo descriptivo.

En comprensión del negocio preguntamos qué decisión cambiará con el resultado. Por ejemplo, si necesitamos ampliar la revisión de respuestas. En comprensión de datos examinamos qué representa cada registro y cómo se captura. En preparación corregimos estructura, identificamos duplicados y documentamos faltantes. En modelado construimos el cálculo o modelo pertinente. En evaluación comprobamos el resultado y su utilidad. En despliegue establecemos quién lo utiliza, cuándo se actualiza y cómo se supervisa.

Supongamos que el equipo afirma que su servicio mejoró porque bajó el tiempo medio. Antes de aceptar esa conclusión examinamos si cambió la mezcla de solicitudes. Si ahora llegan más casos fáciles, el promedio puede bajar aunque el proceso no mejore. Si los casos difíciles quedaron fuera del registro, el indicador omite precisamente parte del problema.

Un gráfico representa los datos que le entregamos. Una explicación generada interpreta esa representación con sus supuestos. Ninguno demuestra automáticamente causalidad. Observar un cambio después de introducir IA no permite atribuirle todo el cambio. Debemos diseñar una comparación y examinar otras causas posibles.

El resultado de esta etapa será una ficha de indicador: pregunta, población, periodo, unidad de observación, numerador, denominador y tratamiento de faltantes. Esa ficha nos permite formular una solicitud específica al asistente y comprobar si el cálculo responde a la pregunta empresarial.

### Conducción

- Explicar el ciclo con la pregunta de calidad del servicio.
- Dar tres minutos para definir un indicador de resolución, incluyendo periodo y denominador.
- Contrastar una definición concreta con “mejor atención” y corregir lo que aún no se puede medir.

**Pregunta:** ¿Qué decisión cambiaría al conocer ese indicador?

**Fuentes:** [IBM: CRISP-DM](https://www.ibm.com/docs/en/spss-modeler/18.6.0?topic=dm-crisp-help-overview)

## 5. Qué estamos contando

18:30–18:40 · 10 minutos

### Discurso

Antes de pedir un porcentaje tenemos que decidir qué estamos contando. El ejemplo ficticio tiene dos afirmaciones factuales. La primera está comprobada y tiene dos referencias; la segunda tiene una referencia y permanece pendiente. Si cada fila representa una referencia, hay tres filas. Si cada unidad representa una afirmación, hay dos.

Contar las referencias asociadas a la afirmación comprobada produce dos de tres: 66,7 por ciento. Contar las afirmaciones comprobadas produce una de dos: 50 por ciento. Las dos divisiones son correctas, pero responden a preguntas diferentes. Si queremos saber qué proporción de afirmaciones factuales está comprobada, corresponde 50 por ciento.

En datos empresariales esto ocurre constantemente. Un pedido puede tener varias líneas. Un caso puede tener varias interacciones. Una persona puede tener varias versiones de perfil. Al relacionar tablas podemos repetir una unidad y luego contarla como si fueran varias. Por eso definimos la granularidad: qué representa una fila en cada tabla.

También importa qué incluimos en la población. Si mezclamos hechos, hipótesis y recomendaciones en el denominador, dejamos de medir comprobación de hechos. Una hipótesis puede ser legítima y seguir pendiente de prueba. Clasificar su naturaleza evita darle apariencia de verificación a una idea propuesta.

Consideremos un tercer caso con cero afirmaciones factuales. Dividir entre cero no permite calcular esa proporción. Lo conservaremos sin valor, en vez de asignar cero por ciento. Cero por ciento indica que existe una población de hechos y ninguno está comprobado. Ausencia de denominador indica otra situación.

Ahora traslademos el razonamiento a soporte: dos reclamaciones, una resuelta con dos interacciones y otra pendiente con una. Por filas, dos de tres; por reclamaciones, una de dos. El principio es el mismo. Al revisar una vista, debemos poder señalar el identificador de la unidad, el filtro y el denominador.

La IA puede construir rápidamente una fórmula sobre el campo equivocado. La rapidez no elimina este razonamiento. En Tableau revisaremos la fórmula y contrastaremos el resultado con estas unidades conocidas.

### Conducción

- Resolver a mano referencias y afirmaciones.
- Durante dos minutos, pedir una explicación del caso con cero hechos.
- Resolver por qué ausencia de valor no equivale a 0 %.

**Pregunta:** ¿Qué identificador debes contar de forma distinta?

**Fuentes:** [Tableau: relaciones entre tablas](https://help.tableau.com/current/pro/desktop/en-us/relate_tables.htm), [Tableau Agent: autoría y limitaciones](https://help.tableau.com/current/online/en-us/web_author_einstein.htm)

## 6. Cada industria necesita una prueba distinta

18:40–19:00 · 20 minutos

### Discurso

La industria cambia la decisión, los datos y la consecuencia de equivocarse. Por eso una matriz de herramientas debe ayudar a identificar candidatos y pruebas. Una marca de capacidad documentada no constituye una nota de rendimiento. El proveedor describe una función; nuestra evaluación debe determinar si sirve para una tarea y unas condiciones concretas.

En distribución, podemos pronosticar demanda por producto y periodo. Para evaluar el pronóstico reservamos periodos posteriores y comparamos con una referencia sencilla, como una predicción basada en periodos equivalentes. Utilizar información del futuro durante la preparación daría una evaluación engañosa. Después examinamos consecuencias: faltantes, exceso de inventario y recursos comprometidos.

El dato requiere interpretación. Si un producto vendió cero durante un faltante, no sabemos que su demanda fuera cero. Las ventas observadas están limitadas por disponibilidad. Un modelo entrenado sin identificar esa situación puede aprender una señal equivocada. También debemos mirar resultados por producto: un promedio favorable puede ocultar fallos en artículos importantes.

En atención al cliente, un asistente puede consultar documentación y preparar una respuesta. El indicador debe incluir resolución revisada, tiempo total, reaperturas y escalamiento por tipo de solicitud. Un texto cortés que omite una condición puede aumentar correcciones. Un antecedente de productividad en otro entorno no sustituye nuestra prueba.

En movilidad, el mecanismo es distinto. Un optimizador recibe paradas, vehículos y restricciones. Una solución se evalúa primero por factibilidad y después por el objetivo que mejora. Cumplir horarios y capacidad puede ser una condición obligatoria. La distancia menor no compensa una entrega imposible.

En manufactura, una clasificación de defectos necesita distinguir falsos aceptados y falsos rechazados. Aceptar una pieza defectuosa y rechazar una correcta tienen costos distintos. La precisión global no expresa por sí sola esa diferencia. La prueba debe incluir defectos y condiciones relevantes de producción.

En servicios profesionales, documentos, investigación y borradores requieren medir omisiones, afirmaciones no sustentadas y tiempo hasta aceptación. En turismo, una respuesta necesita corresponder con disponibilidad y condiciones. En educación, la retroalimentación se evalúa por corrección y utilidad pedagógica. En salud y finanzas, el uso concreto determina qué revisión especializada y restricciones corresponden; una prueba administrativa no acredita otro uso de mayores consecuencias.

Abriremos ahora la biblioteca. Sus diez capacidades separan investigación, documentos, análisis tabular, BI y SQL, modelos predictivos, flujos y agentes, medios, desarrollo, especialización sectorial y evaluación. Esa clasificación permite buscar una función. Las fichas aportan entradas, condiciones, factores de costo y una fuente documental. Debemos leer esos campos juntos.

Construyamos una fila para nuestra distribuidora: decidir reposición; histórico por producto y periodo; predicción; herramienta candidata; prueba temporal contra referencia; restricciones de abastecimiento; responsable de inventario. Construyamos otra para soporte: decidir respuesta o escalamiento; documentación y solicitud; generación con fuentes; prueba de resolución y excepciones; responsable de servicio. La diferencia queda visible sin convertir una lista de productos en una competición universal.

La herramienta puede cubrir sólo una parte del recorrido. Un asistente documental no necesariamente pronostica inventario y un sistema de BI no organiza por sí solo toda la operación. El encaje se demuestra al conectar la función con la decisión y su prueba.

### Conducción

- Dedicar diez minutos a explicar los tres sectores del temario y contrastar manufactura.
- Abrir la matriz y enseñar una ficha completa: entrada, capacidad, condición, costo y fuente.
- Durante seis minutos, construir dos filas con el grupo y resolver la pertinencia de las pruebas.

**Pregunta:** ¿Qué error sería más costoso en esa aplicación?

**Fuentes:** [Google: forecasting](https://docs.cloud.google.com/vertex-ai/docs/tabular-data/forecasting/overview), [Google: Route Optimization API](https://developers.google.com/maps/documentation/route-optimization/overview), [Generative AI at Work, versión NBER noviembre 2023](https://www.nber.org/papers/w31161), [Biblioteca y matriz del curso](https://hadox-research-labs.github.io/hadox-talks/ia-para-lideres/revision-clase-3/biblioteca.html)

## 7. El costo completo de una operación con IA

19:00–19:10 · 10 minutos

### Discurso

Los sistemas sin IA ya tienen costos variables: nube, almacenamiento, transacciones y soporte. Por tanto, no vamos a enseñar que todo sistema tradicional tiene costo fijo. La IA añade o vuelve especialmente relevantes unidades de consumo y tareas de control que necesitamos observar.

El recorrido del dibujo separa inversión inicial, operación, consumo y revisión. La inversión inicial puede incluir integración, preparación de datos, configuración y formación. La operación recurrente puede incluir licencias, mantenimiento y supervisión. El consumo varía con llamadas, contexto, salida y herramientas utilizadas. La revisión y las correcciones también consumen recursos.

En una llamada generativa, la cantidad de contexto y la longitud de salida pueden afectar el cargo. En un agente, una tarea puede recorrer varias llamadas y reintentos. No siempre una solicitud equivale a una inferencia. Una tarifa por unidad técnica sólo describe una parte del costo de terminar el trabajo.

El presupuesto necesita el proceso completo. Si una persona revisa la respuesta y corrige omisiones, ese tiempo forma parte de obtener el resultado aceptado. Si los fallos se envían a otro equipo, debemos incluir ese tratamiento. Si el sistema exige evaluación periódica y actualización de documentos, debe tener un responsable y recursos.

Para comparar comprar, configurar o desarrollar fijamos el mismo horizonte, volumen y alcance. Una alternativa puede requerir más inversión inicial y menos trabajo recurrente; otra puede empezar rápido y consumir más revisión. También debemos distinguir un costo realmente incremental de un recurso existente que se reasigna. No contamos dos veces consumo incluido en una licencia y la misma unidad como un cargo adicional.

Una expresión de presupuesto útil es costo del periodo igual a inversión inicial más operación durante el horizonte más consumo y trabajo humano del periodo. Cada término necesita su supuesto y origen. Si el uso aumenta, examinamos qué partidas crecen y cuáles cambian por escalones de capacidad.

FinOps relaciona gasto tecnológico con unidades técnicas y resultados de negocio. Podemos observar costo por llamada y por token para localizar consumo. Para decidir sobre la operación necesitamos además saber cuánto cuesta un caso resuelto o una tarea aceptada. El denominador vuelve a ser decisivo.

### Conducción

- Descomponer un presupuesto en cuatro partidas.
- Cambiar volumen y reintentos durante dos minutos; identificar qué término cambia.
- Explicar los costos que quedarían fuera si sólo miramos la suscripción.

**Pregunta:** ¿Qué partida aumenta cuando la salida necesita más revisión?

**Fuentes:** [FinOps: Unit Economics](https://www.finops.org/framework/capabilities/unit-economics/), [FinOps para IA](https://www.finops.org/framework/technology-categories/ai/)

## 8. Costo por resultado aceptado

19:10–19:18 · 8 minutos

### Discurso

Dos configuraciones reciben cien solicitudes comparables. X consume diez dólares de tecnología y noventa de revisión. Ochenta resultados cumplen el criterio de aceptación. Y consume veinticinco de tecnología y cuarenta y cinco de revisión. Noventa cumplen. Todas son cifras ficticias para enseñar el cálculo.

Si miramos sólo tecnología, X parece más económica. Sumemos el trabajo incluido. X cuesta cien dólares; Y, setenta. Dividamos por los resultados aceptados: cien entre ochenta es 1,25. Setenta entre noventa es aproximadamente 0,78. Y tiene mayor gasto tecnológico y menor costo por resultado aceptado en este ejemplo.

Esta conclusión depende de comparar alcance y criterios. Si X se utilizó en casos más difíciles, no podemos atribuir toda la diferencia a la configuración. Si Y excluyó fallos de sus registros, el denominador y los costos están incompletos. Necesitamos tareas comparables y la misma definición de aceptación.

Tampoco significa que las cien solicitudes hayan sido resueltas. Quedan veinte en X y diez en Y pendientes o rechazadas. Sus intentos ya están incluidos en el gasto observado, pero resolverlas puede exigir recursos adicionales. Si el compromiso es atender todas, presupuestamos también esa continuidad.

El criterio de aceptación debe establecerse antes de medir. Puede incluir exactitud de campos, correspondencia con fuentes, cumplimiento de una restricción y revisión responsable. Un formato válido no acredita todas esas condiciones. Si cambian los requisitos, el porcentaje de aceptación puede cambiar sin que haya cambiado el modelo.

La lección es económica y operativa: un precio por llamada menor no determina el costo menor por trabajo útil. La tasa de aceptación, los reintentos, la revisión y los casos pendientes forman parte de la comparación.

### Conducción

- Resolver ambos totales y divisiones antes de mostrar la conclusión.
- Pedir al grupo que identifique los casos pendientes y qué costo falta para atenderlos.

**Pregunta:** ¿Qué conclusión cambiaría si las solicitudes no fueran comparables?

**Fuentes:** [FinOps: Unit Economics](https://www.finops.org/framework/capabilities/unit-economics/)

## 9. Capacidad, margen y caja

19:18–19:25 · 7 minutos

### Discurso

El dibujo distingue tres fenómenos. Capacidad es disponibilidad de recursos para trabajar. Contribución es ingreso menos costos pertinentes de un servicio. Caja incorpora desembolsos y cobros, y cuándo ocurren. Una mejora puede afectar uno sin producir automáticamente los otros.

La escena central muestra un servicio con mil dólares de ingreso y cuatrocientos de costo directo. Su contribución es seiscientos: el sesenta por ciento del ingreso. Antes de atribuir esa contribución a IA debemos establecer qué ingreso y costos son incrementales y qué parte procede de la mejora.

Supongamos que una operación libera veinte horas. Si la nómina y los pagos permanecen iguales, no aparece automáticamente un ahorro de caja. Esa capacidad podría atender más demanda, disminuir espera o permitir otro trabajo. Para valorar ingresos adicionales necesitamos demanda y los demás recursos; las horas por sí solas no acreditan ventas.

Otro ejemplo: mil dólares iniciales, trescientos mensuales de costo incremental y quinientos mensuales de contribución incremental antes de esos trescientos. El saldo mensual del proyecto sería doscientos. La recuperación simple del desembolso inicial sería cinco meses, si la contribución se realiza y los cobros y pagos siguen ese supuesto. Es una cuenta docente simplificada, no un resultado observado ni una valoración descontada.

Si el cliente paga más tarde, la caja puede necesitar financiación aunque el servicio aporte contribución. Si la demanda no aparece, el beneficio supuesto queda pendiente y los desembolsos pueden continuar. Al comparar escenarios separamos capacidad disponible, contribución realizable y calendario de caja.

También evitamos doble conteo. Si las mismas horas se utilizan para producir servicios adicionales, no sumamos su valoración completa como un ahorro independiente sin justificar que ambas consecuencias puedan ocurrir. La decisión exige un escenario coherente.

### Conducción

- Resolver el ingreso, costo y contribución de la imagen.
- Explicar qué falta para convertir horas disponibles en cobros.

**Pregunta:** ¿Qué beneficio permanece como capacidad si la demanda no aumenta?

**Fuentes:** [FinOps: Unit Economics](https://www.finops.org/framework/capabilities/unit-economics/)

## 10. Descanso

19:25–19:35 · 10 minutos

### Discurso

Volvemos a las diecinueve treinta y cinco. Después del descanso examinaremos permisos, evaluación ejecutiva y evidencia de un piloto.

### Conducción

- Pausa de diez minutos.

**Pregunta:** ¿Qué indicador necesitas definir antes de una prueba?



## 11. Un documento puede contener una orden peligrosa

19:35–19:45 · 10 minutos

### Discurso

El asistente recibió un contrato ficticio para resumirlo. Dentro del texto aparece una orden para copiar todos los documentos a otro destino. Esa orden es parte del material recibido; no debería adquirir la autoridad de una instrucción del usuario ni conceder nuevos permisos.

Este incidente permite distinguir comportamiento del modelo y control del sistema. Pedir al modelo que trate el documento como datos orienta su interpretación. Limitar las herramientas y credenciales determina qué acciones puede ejecutar. Si el asistente sólo necesita leer y resumir, una función para exportar todos los documentos excede ese alcance.

OWASP describe agencia excesiva mediante exceso de funciones, permisos o autonomía. Una función innecesaria aumenta las acciones posibles. Un permiso amplio aumenta lo que esa función puede afectar. La autonomía determina qué se puede ejecutar sin intervención. Las tres dimensiones deben corresponder al encargo.

En la simulación, la barrera de permisos impide el envío. Eso no significa que todo intento de instrucción incrustada se detecte automáticamente o que cualquier herramienta tenga configurada esa barrera. La prueba debe examinar la configuración real y el registro. Una intención escrita en un prompt no acredita un control efectivo.

Si el incidente ocurre en operación, el responsable necesita identificar qué ejecución fue afectada y qué acciones ocurrieron. Puede ser necesario detener la ejecución, limitar accesos, conservar registros y evaluar el impacto. La reanudación requiere una corrección y una prueba; no basta con que el siguiente ejemplo salga bien.

Resolvamos el caso del dibujo. La tarea legítima es resumir el contrato. La orden incrustada intenta ampliar el alcance. El permiso de envío debe estar fuera de la autorización de ese asistente. El registro permite comprobar si hubo un intento y qué ocurrió. El responsable de la operación decide cuándo puede continuar con el uso autorizado.

Trabajamos sobre una simulación ficticia, sin ejecutar envíos ni intervenir en los sistemas compartidos. El conocimiento transferible es relacionar tarea, función, permiso y consecuencia.

### Conducción

- Dar dos minutos para identificar tarea legítima, orden incrustada y permiso excesivo.
- Resolver contención, evidencia y condición de reanudación.

**Pregunta:** ¿Qué permiso convierte una respuesta equivocada en una acción material?

**Fuentes:** [OWASP: agencia excesiva, versión 2025](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/), [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

## 12. Cómo gestionamos el riesgo

19:45–19:55 · 10 minutos

### Discurso

NIST AI RMF organiza la gestión del riesgo mediante cuatro funciones complementarias. GOVERN establece responsabilidades y decisiones de gobierno. MAP caracteriza contexto, uso e impactos. MEASURE obtiene evidencia mediante medición y evaluación. MANAGE orienta el tratamiento del riesgo. El dibujo las conecta porque el trabajo continúa durante el ciclo del sistema; no son cuatro sellos que certifican al proveedor.

En el incidente del contrato, GOVERN permite saber quién autoriza el uso y quién puede detenerlo. MAP describe documentos, destinatarios y acciones expuestas. MEASURE incluye las pruebas de permisos y el examen de registros. MANAGE aplica la corrección y establece las condiciones para continuar. La prueba puede revelar que debemos cambiar el alcance o la responsabilidad.

La evaluación ejecutiva convierte esas preguntas en evidencia. Para los datos necesitamos flujo, configuración y condiciones de tratamiento. Para las acciones, herramientas y permisos efectivos. Para los fallos, casos de prueba y resultados. Para continuidad, responsable y procedimiento. Para costos, medición y límites. Para salida, exportación y recuperación comprobadas.

Una respuesta “sí, tiene seguridad” no resuelve estas preguntas. Preguntamos qué protección se configuró para ese uso y qué prueba la demuestra. Una descripción comercial puede ayudarnos a iniciar la búsqueda, pero no muestra que nuestro entorno tenga activado el control.

El checklist del curso es una adaptación docente apoyada en esas funciones y en el análisis de incidentes. Registra condición, evidencia, responsable y estado. No lo utilizamos como una certificación de NIST ni como una media de respuestas favorables. Si una condición crítica del uso sigue pendiente, muchas condiciones menos importantes atendidas no la compensan.

Consideremos una aplicación que responde con documentos internos. Podemos tener una interfaz excelente y un costo favorable, pero si no sabemos quién puede consultar la información, la decisión sigue necesitando esa comprobación. Podemos limitar el piloto a documentos autorizados mientras resolvemos el acceso más amplio. El alcance del piloto y el alcance del despliegue deben estar explícitos.

Abramos una condición del checklist y resolvamos cómo se acreditaría. “Permisos adecuados” se convierte en lista de acciones autorizadas, configuración observada, prueba de acción permitida y prueba de acción no permitida, con responsable. Esa transformación produce información para decidir.

### Conducción

- Enseñar las cuatro funciones con el incidente ya resuelto.
- Durante tres minutos, completar una condición del checklist con evidencia y responsable.
- Resolver por qué no basta una respuesta favorable sin prueba.

**Pregunta:** ¿Qué evidencia acreditaría el permiso que afirmas tener?

**Fuentes:** [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/), [OWASP: agencia excesiva, versión 2025](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/), [Biblioteca y matriz del curso](https://hadox-research-labs.github.io/hadox-talks/ia-para-lideres/revision-clase-3/biblioteca.html)

## 13. Medir el trabajo completo del piloto

19:55–20:10 · 15 minutos

### Discurso

Un piloto necesita producir información sobre una decisión. Antes de empezar delimitamos tarea, población, referencia, duración, indicadores y condiciones para continuar, modificar o detener. Un criterio de corte debe justificarse para ese uso; no existe un porcentaje universal que convierta cualquier piloto en éxito.

La referencia describe el procedimiento actual. La comparación utiliza casos equivalentes y observa el trabajo completo. En el ejemplo ficticio, redactar manualmente tarda doce minutos y revisar, dos: catorce en total. Con IA, generar tarda cuatro y revisar, nueve: trece en total.

Si comparamos sólo cuatro con doce, anunciamos ocho minutos de reducción. Si comparamos el recorrido completo, la diferencia es un minuto. Eso equivale aproximadamente a 7,1 por ciento del tiempo original. Todavía debemos comprobar calidad, costo y casos pendientes. El ejemplo no afirma que la IA siempre aumente revisión; muestra por qué hay que medirla.

La calidad puede cambiar la interpretación de ese minuto. Si los resultados asistidos cumplen mejor el criterio, existe otra dimensión favorable que necesitamos documentar. Si omiten condiciones, el tiempo menor puede no ser útil. Una media tampoco revela si las excepciones empeoraron; separamos tipos de tarea y conservamos ejemplos de fallos.

La población debe representar el trabajo que esperamos atender. Probar únicamente los casos más fáciles limita la conclusión. Una muestra pequeña produce información preliminar y puede justificar ampliar la prueba, pero no permite afirmar desempeño estable en toda la operación.

Si queremos atribuir un efecto a la asistencia, diseñamos la comparación para reducir otras explicaciones. La mezcla de casos, experiencia de las personas, volumen y cambios del proceso pueden influir. Una comparación aleatoria puede ser útil cuando sea viable. Un antes y después necesita examinar esos cambios y explicitar sus limitaciones.

También registramos adopción. Si una herramienta tiene buenos resultados cuando se utiliza, pero el equipo casi no la usa, la operación puede no producir el beneficio esperado. Investigar causas de uso y abandono forma parte de la implementación. La aceptación debe medirse con el criterio definido, no sólo con que alguien haya pulsado un botón.

Para decidir, escribimos tres salidas posibles. Continuar con alcance delimitado cuando la evidencia sostenga calidad, costo y control; corregir cuando exista un fallo identificado que se pueda probar de nuevo; detener o cambiar de alternativa cuando las condiciones no se sostengan. Cada salida lleva responsable y evidencia pendiente.

Resolvamos la comparación del dibujo. Sabemos el tiempo observado de dos recorridos hipotéticos. No sabemos todavía el resultado de calidad ni la representatividad. La recomendación razonable es medir esas dimensiones antes de prometer un ahorro amplio. La pregunta de Dirección debe ser qué aprendió el piloto y qué decisión permite sostener.

### Conducción

- Resolver ambos tiempos completos y la diferencia.
- Durante cinco minutos, completar una ficha de piloto con referencia, resultado aceptable y condición de revisión.
- Resolver una recomendación acotada sin extrapolar la muestra.

**Pregunta:** ¿Qué conclusión no puedes sostener todavía con esos tiempos?

**Fuentes:** [Generative AI at Work, versión NBER noviembre 2023](https://www.nber.org/papers/w31161), [Dell’Acqua et al., Organization Science, 2026](https://doi.org/10.1287/orsc.2025.21838), [FinOps: Unit Economics](https://www.finops.org/framework/capabilities/unit-economics/)

## 14. Una comparación sobre la misma tarea

20:10–20:20 · 10 minutos

### Discurso

Un asistente general y una herramienta de BI pueden ayudar a analizar información, pero ocupan lugares distintos en el trabajo. Un asistente como Claude puede explorar un archivo, ayudar a preparar datos y producir código cuando esas funciones estén disponibles. En Tableau organizamos una fuente analítica, cálculos y vistas que podemos conservar y volver a consultar.

Para una exploración inicial puede ser útil preguntar por registros faltantes o pedir una comprobación. Para un indicador que debe repetirse cada mes necesitamos preservar la definición, la fuente, los filtros y el procedimiento. La elección depende del resultado y de quién tendrá que utilizarlo de forma recurrente.

En Tableau, una dimensión organiza categorías, como sector o escenario. Una medida representa cantidades, como costo u horas. La agregación determina cómo se combinan registros. Un costo por escenario puede repetirse si lo relacionamos indebidamente con varias fuentes o personas. No debemos sumarlo repetidas veces como si fueran nuevos costos.

Un campo calculado implementa una definición. La visualización muestra el resultado de esa definición bajo filtros y niveles de detalle. Por eso comprobar una vista requiere leer también el cálculo y el modelo de datos. Una barra bien dibujada puede representar una suma equivocada.

Tableau Agent puede ayudar a generar cálculos y visualizaciones sobre una fuente seleccionada. La documentación de autoría delimita sus funciones y señala que no elige ni construye joins o relaciones por nosotros. La experiencia de dashboards tiene condiciones propias y figura como beta. No debemos presentar esas funciones como intercambiables.

El acceso depende de entorno y funciones habilitadas. Una prueba compatible de Agent y Tableau Public no son el mismo servicio. Antes del demo necesitamos una cuenta con la función preparada. Si se utiliza la ruta de BI sin IA, la identificamos como tal, sin simular que el agente ejecutó la tarea.

La comparación se resuelve preguntando qué procedimiento conservará el análisis. El asistente puede acelerar una parte. Tableau puede organizar el cálculo y la consulta. El responsable debe comprobar que ambos utilicen las mismas unidades y permitan revisar el resultado.

### Conducción

- Explicar dimensión, medida, agregación y cálculo con escenario y costo.
- Comparar exploración inicial y análisis recurrente sobre la misma tarea.

**Pregunta:** ¿Qué debes conservar para repetir el indicador el próximo mes?

**Fuentes:** [Claude: funciones y tarifas](https://claude.com/pricing), [Tableau Agent: autoría y limitaciones](https://help.tableau.com/current/online/en-us/web_author_einstein.htm), [Tableau Agent: funciones y prueba](https://help.tableau.com/current/online/en-us/web_author_einstein_faq.htm), [Tableau: relaciones entre tablas](https://help.tableau.com/current/pro/desktop/en-us/relate_tables.htm)

## 15. Tableau: calcular, visualizar y comprobar

20:20–20:40 · 20 minutos

### Discurso

Vamos a recorrer tres pasos: definir un cálculo, construir una vista y comprobar la interpretación. Utilizaremos datos ficticios preparados. En la aplicación posterior podremos sustituirlos por investigación y capacidades documentadas de las clases anteriores, con acceso apropiado. El ejemplo no representa resultados de los participantes.

Primero observemos la tabla de afirmaciones y fuentes. Una afirmación puede tener varias referencias. Identificamos afirmacion_id para contar afirmaciones distintas y distinguimos hechos de hipótesis. El caso A01 del kit tiene dos afirmaciones factuales distintas; una está comprobada. El resultado esperado es 50 por ciento. El caso A03 no tiene afirmaciones factuales; conservamos ausencia de valor.

Pedimos al Agent un cálculo que cuente afirmaciones factuales distintas comprobadas y las divida por afirmaciones factuales distintas. Especificamos los valores HECHO y SI y la condición de denominador cero. Antes de construir la vista leemos la fórmula. Comprobamos que el identificador y las condiciones respondan a la definición que acabamos de enseñar.

Después pedimos una vista por oportunidad y sector. Volvemos a la tabla para contrastar un resultado conocido. Cambiar filtro o nivel de detalle puede cambiar la población; si cambia el porcentaje debemos poder explicar por qué. El estado de comprobación es un dato registrado: Tableau no verifica por sí solo la verdad de los documentos.

Ahora examinamos escenarios. El costo mensual es tecnología mensual más horas humanas mensuales por costo de la hora. El costo del periodo es costo inicial más horizonte en meses por costo mensual. Conservamos escenario_id y sumamos cada escenario una sola vez.

En el caso ficticio hay tres alternativas a tres meses. La primera: mil iniciales más tres veces ciento cincuenta de tecnología y quince horas a dieciocho dólares; total 2.260. La segunda: 2.500 iniciales más tres veces trescientos y doce horas a dieciocho; total 4.048. La tercera: cuatro mil iniciales más tres veces cuatrocientos cincuenta y diez horas a dieciocho; total 5.890.

Esos importes son supuestos docentes de alternativas, no precios cotizados de proveedores. Una vista puede compararlos, pero todavía no tenemos un beneficio cuantificado para calcular retorno. La alternativa más barata no queda automáticamente elegida: necesitamos saber qué alcance, calidad y control entrega cada una.

Terminamos modificando un supuesto y explicando la decisión. Si aumenta la revisión, aumenta el término de trabajo humano. Si cambia el horizonte, cambia la acumulación recurrente. Si no existe evidencia de beneficio, conservamos esa ausencia. Una buena explicación distingue dato observado, entrada supuesta y conclusión pendiente.

La IA ayuda a producir el cálculo y la vista. El aprendizaje que acabamos de aplicar es formular la pregunta, conservar las unidades, comprobar el resultado y limitar la conclusión a lo que los datos sostienen.

### Conducción

- Usar GUIA_DEMOS_TABLEAU: seis minutos para indicador, cuatro para vista y comprobación, siete para escenarios y tres para interpretar.
- Leer la fórmula y contrastarla con el cálculo manual.
- Si Agent no está disponible, mostrar la ruta BI preparada e identificar la función de IA pendiente de ensayo.

**Pregunta:** ¿Qué dato falta para calcular un retorno financiero?

**Fuentes:** [Tableau Agent: autoría y limitaciones](https://help.tableau.com/current/online/en-us/web_author_einstein.htm), [Tableau Agent: funciones y prueba](https://help.tableau.com/current/online/en-us/web_author_einstein_faq.htm), [Tableau: relaciones entre tablas](https://help.tableau.com/current/pro/desktop/en-us/relate_tables.htm)

## 16. El comité compara una propuesta

20:40–21:00 · 20 minutos

### Discurso

Ahora recuperaremos los trabajos anteriores para aplicar estos conceptos. La primera clase produjo investigación y una propuesta comercial. La segunda documentó capacidades y recomendaciones de colaboración. La investigación ayuda a caracterizar una oportunidad; las capacidades permiten examinar quién podría contribuir. El vínculo exige contrastar requisitos, evidencia y disponibilidad.

Una persona recomendada por un agente no constituye automáticamente un equipo comprometido. La capacidad documentada puede cubrir un requisito y aun así necesitar confirmar disponibilidad. También puede faltar una capacidad que el proyecto requiere. Conservamos oportunidad_id, persona_id y requisito_id para examinar ese vínculo.

La propuesta empresarial no tiene que consistir en vender IA. Puede ofrecer un servicio cuyo trabajo interno se beneficia de asistencia, analítica o automatización. La elección de herramienta responde al proceso que hemos identificado. No convertimos el catálogo de servicios en una promesa tecnológica sin evidencia.

En la mesa compararemos tres alternativas sobre el mismo problema: aprovechar una solución existente, configurar una herramienta especializada o desarrollar una solución propia. La referencia puede ser conservar el procedimiento actual si todavía no hay evidencia suficiente para cambiar. Cada alternativa necesita alcance, datos, integración, costo, revisión y responsable.

El análisis debe distinguir lo que sabemos, lo que suponemos y lo que necesitamos probar. Una fuente respalda una afirmación concreta. Una tarifa o un tiempo estimado alimenta un escenario, no un beneficio observado. Un resultado parcial puede justificar una prueba delimitada en vez de un despliegue completo.

El memo expresa la decisión y una alternativa, integra evidencia críticamente, relaciona valor con recursos y establece condiciones de revisión. Puede recomendar continuar un piloto, modificar su alcance o elegir otra ruta. La recomendación se sostiene explicando qué cambiaría nuestra conclusión.

La actividad de análisis conserva cuatro dimensiones: cálculos, límites y riesgos, oportunidad sectorial y condiciones de ejecución. Las etiquetas de evaluación sirven para registrar la entrega; el razonamiento utiliza los conceptos que hemos aprendido hoy.

Durante el trabajo, revisaré primero una cuenta y una condición crítica. Si la cuenta usa un denominador distinto al propósito, la corregimos. Si el beneficio se presenta como ahorro de caja sin cambiar pagos, lo reformulamos. Si una acción necesita un permiso que no está definido, delimitamos el piloto. Esas correcciones hacen que la recomendación sea concreta.

Cerraremos con dos defensas breves. Cada participante explicará su alternativa, la evidencia principal y una condición que haría revisarla. El resultado será una decisión que otro responsable pueda comprender y evaluar, con sus límites visibles.

### Conducción

- Dos minutos para recuperar una propuesta y una capacidad pertinente.
- Doce minutos para resolver alternativa, indicador, costo y condición crítica; acompañar una cuenta y una evidencia.
- Cuatro minutos para dos defensas y dos para cerrar el memo y las condiciones de revisión.

**Pregunta:** ¿Qué evidencia te haría cambiar de alternativa?

**Fuentes:** [Actividad A vigente](https://campus.panamericanlatam.com/mod/assign/view.php?id=75997), [Actividad B vigente](https://campus.panamericanlatam.com/mod/assign/view.php?id=77506), [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/), [FinOps: Unit Economics](https://www.finops.org/framework/capabilities/unit-economics/)

