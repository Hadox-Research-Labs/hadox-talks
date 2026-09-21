# Clase 1 · Preparar y comprobar un resultado

Edición abierta · Hadox Talks · Edgar Valdés

Discurso integrado por lámina: contexto, técnica, ejemplos y transiciones dentro del texto para decir en voz alta. Es el mismo texto que lee la narración de la página. Las notas de consulta permiten profundizar; no es necesario leerlas de nuevo durante la exposición. Los ejercicios del curso son ficticios; los casos empresariales citados se identifican con sus fuentes. Estas notas son públicas y no cambian actividades, entregas ni puntuaciones.

Las fuentes respaldan los conceptos indicados, no los resultados de los casos del curso. Consulta y revisión de referencias: 21 de septiembre de 2026.

## 1. Modelos fundacionales y multimodalidad

APERTURA · 18:00–18:02 · Horario Guatemala

### Discurso para exponer

Bienvenidos. Soy Edgar Valdés y hoy vamos a trabajar modelos fundacionales y multimodalidad desde las decisiones que le corresponden a un líder. Al terminar, podrán explicar qué capacidad necesitan, observar cómo trabaja con documentos e imágenes y decidir qué parte de un resultado está suficientemente sustentada para utilizarla.

Primero vamos a ubicarnos: quién desarrolla estas tecnologías, qué están haciendo algunas empresas con ellas y cómo funciona la capacidad que vamos a probar. Después les mostraré el procedimiento en Gemini y ustedes lo practicarán con mi acompañamiento. Trabajaremos con información ficticia. Empecemos por una situación que podría aparecer en una reunión de dirección.

### Notas de consulta

#### Apertura y propósito

Conservar la portada como bienvenida y encuadre. Presentar al expositor y el resultado esperado. Las dos infografías vienen después; la elección del caso ocurre tras la demostración. El horario y la numeración corresponden a la edición web de 26 láminas.

## 2. ¿Quién es quién en IA?

EXPLICACIÓN · 18:02–18:06 · Horario Guatemala

### Discurso para exponer

Imaginen que mañana llegan a una reunión de dirección y escuchan tres propuestas. Finanzas quiere que una IA prepare conciliaciones. Comercial quiere que ayude a responder a clientes. Tecnología pregunta qué plataforma van a contratar. Las tres propuestas parecen hablar de lo mismo, pero requieren decisiones diferentes. ¿Por dónde empezarían ustedes?

Dejen esa pregunta abierta un momento. Como líderes, van a tener que decidir qué trabajo vale la pena mejorar, qué información puede utilizarse y con qué evidencia aceptar un resultado. Para tomar esas decisiones, primero necesitamos entender qué tenemos enfrente. Ése es el propósito de esta clase.

La IA lleva décadas en las empresas: clasificación, recomendaciones, pronósticos. Con la IA generativa se amplía la posibilidad de encargar trabajo mediante lenguaje cotidiano: preparar un borrador, sintetizar documentos, interpretar una imagen o ayudar a escribir código. Una misma base puede apoyar muchas tareas. A esa base entrenada ampliamente y adaptable a distintos usos la llamamos modelo fundacional. Enseguida veremos cómo funciona; primero ubiquemos a los actores.

Miren las tres columnas. A la izquierda está la organización que desarrolla la tecnología. En el centro, la familia de modelos. A la derecha, algunas formas de utilizarla. OpenAI desarrolla la familia GPT; ChatGPT es una aplicación para trabajar con esas capacidades. Google desarrolla Gemini y ofrece aplicaciones como Gemini y Gemini Notebook, que antes conocíamos como NotebookLM. Anthropic desarrolla Claude; también encontramos ese nombre en su asistente y en Claude Code. Por eso es fácil confundir empresa, modelo y producto: a veces comparten nombre.

Meta tiene Llama, con modelos que pueden incorporarse a soluciones propias bajo sus condiciones de licencia. Mistral y DeepSeek ofrecen otras familias y formas de acceso. Este mapa es una selección para orientarnos, no una clasificación del mejor al peor. Tampoco significa que todas las opciones lean los mismos archivos o tengan las mismas condiciones.

Ahora miren Microsoft 365 Copilot. Es una aplicación que puede incorporar modelos de distintos proveedores. El nombre que compramos y el modelo que produce la respuesta pueden ser diferentes. Esto importa al preguntar qué datos utiliza una solución, con qué herramientas se conecta y quién administra el acceso.

No necesitan memorizar todos los nombres. Quiero que puedan distinguir tres cosas: quién desarrolla la tecnología, qué capacidad ofrece el modelo y qué permite hacer la aplicación. Con ese mapa ya podemos mirar cómo lo están usando organizaciones reales y qué decisiones de liderazgo aparecen detrás.

### Notas de consulta

#### Idea central

La escena de la reunión de dirección es hipotética. Dejar una pausa breve tras la pregunta inicial; no pedir que abran archivos ni que elijan una ruta. El objetivo es presentar la decisión que debe tomar un líder y ofrecer un mapa comprensible antes de profundizar en la teoría.

#### Contexto y antecedentes

Mapa selectivo de familias, no ranking de rendimiento ni lista exhaustiva. Una familia contiene modelos y versiones; una aplicación puede cambiar el modelo que utiliza según función, plan o configuración. La API es una vía de integración, no otra familia. Llama permite implementaciones sujetas a licencia; «integración propia» no significa que sea gratuita, inmediata o privada por defecto. Las rutas de acceso mostradas son ejemplos, no exclusivas.

#### Cómo funciona

Consulta del 21 de septiembre de 2026: el catálogo de OpenAI incluye GPT-6 Astra y GPT-5.6; Google enumera Gemini 3.8 Flash como estable y Gemini 3.1 Pro como preview; Anthropic registra Claude Sonnet 5, Opus 5 y tarjetas de Fable/Mythos 5.1. Son ejemplos de nombres y estados de catálogo, no equivalencias de rendimiento ni una afirmación de acceso para todos los usuarios. No atribuir automáticamente una versión de API al selector Flash de la aplicación usada en clase. Los números de versión se consultan en la fuente; la infografía conserva familias para orientar sin convertir la apertura en una lista de lanzamientos.

#### Un ejemplo para contarlo

En Microsoft 365 Copilot, el nombre de la aplicación no identifica por sí solo un modelo. Su documentación describe selección y enrutamiento de modelos, con condiciones de licencia y administración. Google anunció el cambio de nombre de NotebookLM a Gemini Notebook el 16 de julio de 2026; Mistral presenta Vibe como el producto que antes se llamaba Le Chat. Las ilustraciones y símbolos del mapa son recursos docentes, no una arquitectura técnica del proveedor.

#### Para profundizar

- [OpenAI · Catálogo de modelos](https://developers.openai.com/api/docs/models) — Familia GPT y nombres de modelos; API y aplicación no son equivalentes.
- [Google · Catálogo de modelos Gemini](https://ai.google.dev/gemini-api/docs/models) — Modelos y estados estable/preview; no identifica por sí solo el modelo activo en una cuenta.
- [Anthropic · Model system cards](https://www.anthropic.com/system-cards) — Familia Claude y documentación por versión; no implica acceso universal.
- [Meta · Repositorio oficial Llama Models](https://github.com/meta-llama/llama-models) — Modelos Llama, integración y condiciones de licencia.
- [Mistral AI · Vibe](https://mistral.ai/products/vibe/) — Producto de trabajo y código antes llamado Le Chat.
- [DeepSeek · Sitio oficial](https://www.deepseek.com/) — Familia de modelos y acceso mediante chat o API.
- [Microsoft · Descripción de Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview) — Selección y enrutamiento de modelos en una aplicación de trabajo.
- [Google · NotebookLM is now Gemini Notebook](https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/) — Anuncio del 16 de julio de 2026: nombre del producto y relación con Gemini.
- [Stanford CRFM (2021) · On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258) — Qué significa modelo fundacional y cómo se adapta a distintos usos.

## 3. ¿Qué están haciendo las empresas con IA?

EXPLICACIÓN · 18:06–18:10 · Horario Guatemala

### Discurso para exponer

Veamos tres usos distintos. BBVA ha utilizado ChatGPT Enterprise para el trabajo de sus empleados. En diciembre de 2025 informó que su fase inicial ya alcanzaba a once mil personas y anunció que extendería el acceso a más de ciento veinte mil. La cifra grande era el alcance anunciado de la expansión; no significa que todos ya lo utilizaran. Para nosotros, la pregunta es cómo conseguir que el acceso se convierta en trabajo útil: con formación, tareas concretas y seguimiento de la adopción.

Sanofi aporta otro ejemplo. En un testimonio publicado por Anthropic, describe el uso de Claude junto con bibliotecas internas de conocimiento en su aplicación Concierge. Aquí aparece una pieza esencial: el modelo se combina con información de la organización. Como líderes, eso nos lleva a preguntar quién mantiene esas fuentes, quién puede consultarlas y quién responde cuando están incompletas. Esas preguntas son nuestra lectura del caso, no una auditoría de cómo opera Sanofi.

El tercer ejemplo es Mercedes-Benz. Google Cloud documenta el uso de Gemini en su asistente MBUX para conversaciones relacionadas con navegación y puntos de interés. La IA pasa a formar parte de una experiencia que recibe el cliente. Estamos hablando de asistencia conversacional; ese ejemplo no demuestra conducción autónoma. La decisión empresarial incluye integrar la capacidad y comprobar la calidad de la experiencia.

Tenemos así tres posibilidades: ayudar al trabajo cotidiano, consultar conocimiento interno e incorporar una capacidad al producto. Los casos muestran usos reportados por las empresas y sus proveedores; no nos permiten prometer el mismo resultado en otra organización.

Éste será nuestro recorrido de hoy. Primero entenderemos los modelos fundacionales: qué pueden hacer y por qué necesitan contexto. Después me verán preparar y comprobar un resultado en Gemini. Cuando ya hayan visto el procedimiento, elegirán un caso y lo probarán con mi acompañamiento. Tras un descanso de diez minutos, incorporaremos una imagen para entender la multimodalidad. Cerraremos con una decisión propia: qué parte del resultado utilizarían, qué comprobaron y qué sigue pendiente.

La evidencia la iremos construyendo durante la clase. Al final la organizaremos en la entrega A, de veinte puntos. Van a salir con una prueba que puedan explicar y revisar. Para empezar esa explicación, aterricemos la oportunidad en algo concreto: ¿qué trabajo queremos que la IA nos ayude a preparar?

### Notas de consulta

#### Idea central

Los tres casos muestran categorías diferentes: productividad del empleado, consulta de conocimiento interno y experiencia del cliente. Los diagramas simplifican esas categorías; no son capturas de los sistemas reales ni diagramas verificados de sus procesos internos. Las preguntas de liderazgo son interpretación docente y se distinguen de los hechos reportados.

#### Contexto y antecedentes

BBVA comunicó el 12 de diciembre de 2025 una expansión anunciada de ChatGPT Enterprise a más de 120.000 empleados después de una fase con 11.000. No convertir el alcance anunciado en uso efectivo de toda la plantilla. Sanofi describe Claude junto con bibliotecas internas en Concierge en un testimonio publicado por Anthropic. Google Cloud documenta Gemini en MBUX para conversación, navegación y puntos de interés; no se afirma conducción autónoma ni uso exclusivo de un proveedor por Mercedes-Benz.

#### Un ejemplo para contarlo

Preguntar mentalmente por el tipo de decisión: acceso y formación en la primera categoría; fuentes y permisos en la segunda; integración y calidad del servicio en la tercera. No presentar estas preguntas como hallazgos de una auditoría de esas empresas. No extrapolar ahorro, retorno ni impacto clínico a los participantes.

#### Una pregunta para conectar

¿Qué aprenderemos hoy y en qué orden? La apertura ocupa 18:00–18:10: portada 18:00–18:02, mapa 18:02–18:06 y casos 18:06–18:10. Luego siguen teoría con ejemplos hasta 18:30, demostración hasta 18:50 y práctica acompañada hasta 19:15. La elección de ruta ocurre al iniciar esa práctica, después de observar el método. Descanso 19:15–19:25; teoría y demostración visual hasta 19:40; práctica visual hasta 20:05; integración de A hasta 20:20 y cierre hasta 20:30. La edición web tiene 26 láminas, incluida la portada restaurada, y conserva 20 puntos para A.

#### Para profundizar

- [BBVA · Alianza con OpenAI, diciembre de 2025](https://www.bbva.com/es/innovacion/bbva-y-openai-sellan-una-alianza-estrategica-para-redefinir-la-banca-con-inteligencia-artificial/) — Distinguir fase de 11.000 empleados de expansión anunciada a más de 120.000.
- [Anthropic · Claude for Life Sciences](https://www.anthropic.com/news/claude-for-life-sciences) — Testimonio de Sanofi sobre Claude, bibliotecas internas y Concierge; no evidencia de impacto clínico.
- [Google Cloud · Casos empresariales de IA generativa](https://cloud.google.com/transform/101-real-world-generative-ai-use-cases-from-industry-leaders) — Apartado Mercedes-Benz: Gemini y MBUX para conversación, navegación y puntos de interés.

## 4. La unidad de análisis es el trabajo

EXPLICACIÓN · 18:10–18:12 · Horario Guatemala

### Discurso para exponer

Pensemos en una mañana de trabajo. Ana, una analista ficticia de compras, abre un correo: llegó una factura y hay que confirmar la recepción. Antes de responder, busca el pedido, compara cantidades y redacta una aclaración. Su jefe necesita saber qué puede avanzar y qué necesita resolver.

Aquí hay una oportunidad que podemos describir: preparar una conciliación y un borrador a partir de documentos concretos. Ésa es nuestra unidad de análisis. Un puesto reúne muchas tareas; un proceso conecta personas y sistemas. Hoy vamos a mirar una tarea dentro de ese recorrido.

Sigan las cuatro piezas de la lámina: quién necesita ayuda, qué trabajo se hace, qué producto sale y qué decisión prepara. Si alguien propone IA para todo un departamento, estas cuatro preguntas permiten aterrizar por dónde empezar. Usaremos esa misma historia para comprender la tecnología y luego verla trabajar. Primero, ¿cómo puede una base servir tanto para organizar una tabla como para redactar la respuesta?

### Notas de consulta

#### Idea central

Conviene separar tarea, puesto y proceso. Un puesto reúne muchas tareas; el proceso conecta varias personas y sistemas. Mejorar una tarea con IA puede ayudar al conjunto, pero eso todavía tiene que demostrarse.

#### Cómo funciona

Descompón el trabajo en entrada, transformación, salida y decisión. En una conciliación, la entrada son documentos; la transformación es contrastar sus campos; la salida es una lista de coincidencias y diferencias; la decisión corresponde a quien tiene autoridad. Esta descripción también permite descubrir si el problema es de datos faltantes o de interpretación.

#### Un ejemplo para contarlo

Una tabla preparada en treinta segundos puede ahorrar lectura, pero si tarda veinte minutos en revisarse no conoces aún la mejora neta. Guarda esa pregunta para la medición de la clase 3.

## 5. De una base entrenada a una respuesta útil

EXPLICACIÓN · 18:12–18:16 · Horario Guatemala

### Discurso para exponer

La infografía separa dos momentos. Arriba está el entrenamiento: el modelo aprende patrones a partir de muchos ejemplos y cambia sus parámetros, que son valores numéricos internos. Esa etapa construye una capacidad que después podemos utilizar en tareas distintas. Por eso hablamos de un modelo fundacional: una base entrenada ampliamente, adaptable a diferentes usos.

Abajo está lo que hacemos al conversar con el asistente. Enviamos un encargo y contexto, el sistema utiliza el modelo entrenado y produce una respuesta. A ese uso lo llamamos inferencia. En nuestro ejemplo, entran el correo y la recepción; sale una ficha y un borrador. Adjuntar esos documentos aporta información para el encargo. Por sí solo, no equivale a volver a entrenar el modelo.

Ahora acerquémonos un poco. Un modelo de lenguaje procesa tokens: unidades que pueden ser palabras, partes de palabras o signos. La separación visual de la lámina es ilustrativa; cada sistema puede dividir el texto de manera diferente. Durante la generación, el contexto condiciona los tokens que se van produciendo. El comportamiento del asistente también depende de su entrenamiento posterior, de la aplicación y de las herramientas que pueda utilizar.

¿Y la atención? Es un mecanismo que calcula relaciones entre representaciones de la información. En una frase como «la recepción de este pedido registra dos cajas», necesitamos relacionar la cantidad con la recepción y con el pedido correspondiente. Ése es un ejemplo intuitivo del tipo de relación que nos interesa, no una descripción literal de una operación interna ni atención consciente.

La franja inferior ubica tres hitos. En 2017, el Transformer presentó una arquitectura basada en atención. En 2020, GPT-3 mostró tareas mediante instrucciones y ejemplos en el contexto. En 2021, Stanford desarrolló el concepto de modelos fundacionales. Son antecedentes de esta familia de modelos; la historia de la IA empezó mucho antes.

La consecuencia para Ana es muy práctica: puede aprovechar una capacidad general para leer, organizar y redactar, y aportar los documentos específicos de su operación. ¿Qué cambia si le da la recepción correcta? Cambia la información disponible para responder. Para llevar esta capacidad a la empresa necesitamos otras piezas; veamos cuáles.

### Notas de consulta

#### Idea central

El esquema separa entrenamiento e inferencia: aprender parámetros a partir de ejemplos y utilizar un modelo entrenado para responder a un encargo con contexto. Es una explicación conceptual, no un diagrama verificado de una arquitectura comercial.

#### Cómo funciona

Los modelos de lenguaje generativos producen secuencias de tokens condicionadas por el contexto. Un token puede ser una palabra, una parte o un signo; la división de la infografía es ilustrativa. La atención calcula relaciones entre representaciones, sin implicar conciencia. El sistema completo puede incluir entrenamiento posterior, herramientas y reglas de la aplicación. Dar un documento a una conversación no demuestra un cambio de parámetros.

#### Contexto y antecedentes

Tres hitos, sin presentarlos como el inicio de toda la IA: Transformer en 2017; GPT-3 y tareas mediante contexto en 2020; informe de Stanford sobre modelos fundacionales en 2021. Una base ampliamente entrenada puede apoyar diferentes tareas y requerir información específica de la organización.

#### Una pregunta para conectar

Si agregamos la recepción correcta al encargo de conciliación, ¿qué cambió: los parámetros del modelo o la información disponible para responder?

#### Para profundizar

- [Vaswani et al. (2017) · Attention Is All You Need](https://arxiv.org/abs/1706.03762) — Antecedente de la arquitectura Transformer; no es una descripción completa de todos los modelos actuales.
- [Brown et al. (2020) · Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165) — Aprendizaje en contexto mediante instrucciones y ejemplos, sin actualizar parámetros en cada tarea.
- [Stanford CRFM (2021) · On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258) — Qué significa modelo fundacional y cómo se adapta a distintos usos.
- [Google AI for Developers · Tokens y ventana de contexto](https://ai.google.dev/gemini-api/docs/tokens) — Unidades de procesamiento, límites de contexto y consumo.

## 6. Cuatro capas operativas

EXPLICACIÓN · 18:16–18:18 · Horario Guatemala

### Discurso para exponer

Volvamos a Ana y la factura. El modelo aporta la capacidad de relacionar información y redactar. La aplicación, hoy Gemini, es donde ella conversa y adjunta materiales. Los documentos aportan cantidades, identificadores y reglas. El proceso indica quién revisa la conciliación y qué ocurre después.

Estas cuatro capas ayudan a repartir el trabajo. Tecnología puede habilitar la aplicación; compras conserva la recepción; finanzas define qué necesita revisar. Una licencia resuelve una parte de la necesidad, y la organización aporta las demás.

Imaginemos el recorrido completo: Ana reúne las fuentes, pide el borrador, comprueba una diferencia y lo envía al responsable. El registro autorizado puede seguir viviendo en su ERP. En la práctica de hoy llegaremos hasta preparar y revisar el producto. Miren ahora cómo se ve ese producto, para que la oportunidad deje de ser abstracta.

### Notas de consulta

#### Idea central

Podemos cambiar una capa sin cambiar las otras. Actualizar el modelo no actualiza necesariamente el catálogo; comprar una licencia no define quién aprueba; mejorar una fuente no concede permisos de escritura.

#### Cómo funciona

Usa cuatro preguntas: ¿qué modelo procesa?, ¿qué aplicación lo presenta?, ¿qué información recibe?, ¿en qué proceso interviene? Gemini es la aplicación utilizada en clase; una API ofrece otra forma de incorporar capacidades a software propio. El CRM o ERP sigue siendo el sistema donde viven registros y operaciones. Un diseño puede consultar esos sistemas sin reemplazarlos.

#### Un ejemplo para contarlo

Dibuja verbalmente la cadena: persona pide revisión → aplicación reúne documentos → modelo prepara diferencias → revisor decide → sistema registra. Señala dónde podría fallar cada enlace.

## 7. Del material disperso al trabajo preparado

EXPLICACIÓN · 18:18–18:21 · Horario Guatemala

### Discurso para exponer

Aquí podemos ver el antes y el después. Es un ejemplo docente ficticio, distinto del caso que probaremos en vivo. A la izquierda hay un correo sobre la factura F-84: tres cajas a doscientos quetzales cada una. La recepción R-84 registra dos cajas. Ana tiene que relacionar esos fragmentos antes de contestar.

A la derecha aparecen dos productos. Primero, una ficha: se facturaron seiscientos quetzales, la cantidad recibida equivale a cuatrocientos y queda una diferencia de una caja, doscientos quetzales. Podemos localizar cada dato y comprobar la operación. Segundo, un borrador que pregunta por la entrega pendiente o la corrección de la factura.

Identifiquen las capacidades en ese recorrido. Extraer es localizar cantidades e identificadores. Comparar es relacionar lo facturado con lo recibido. Redactar es convertir el hallazgo en una solicitud comprensible. Una respuesta puede combinar las tres capacidades.

El trabajo adelantado ya es visible: una diferencia localizable y una comunicación preparada. La revisión del responsable es el siguiente paso. Cuando midamos el valor de una solución, consideraremos también ese tiempo de revisión; esta imagen no representa un ahorro medido.

¿Cuál de los dos productos le serviría más a Ana para continuar: la tabla, el mensaje o los dos? Escuchemos una razón. Esa respuesta nos ayuda a especificar qué salida pedir. Y cada parte de la tarea puede apoyarse en una herramienta diferente.

### Notas de consulta

#### Idea central

La imagen muestra productos concretos: conciliación y borrador de aclaración. F-84 y R-84 son un ejemplo docente ficticio diferente de los expedientes de práctica; no debe adjuntarse junto con el caso B.

#### Un ejemplo para contarlo

F-84: tres cajas a Q200, total Q600. R-84: dos cajas recibidas, equivalentes a Q400 usando el precio de F-84. Diferencia: una caja y Q200. La cantidad recibida proviene de R-84 y el precio unitario de F-84; ambos son necesarios para calcular su equivalente. El borrador pide confirmar entrega pendiente o corrección.

#### Cómo funciona

Señalar dónde ocurre extracción, comparación y redacción. El siguiente paso es la revisión del responsable. La imagen ilustra trabajo preparado, sin afirmar ahorro medido. La productividad requiere observar la tarea completa, incluida la revisión.

#### Contexto y antecedentes

Como ampliación opcional, el working paper de NBER de 2023 estudió a 5,179 agentes de soporte y encontró una mejora media de 14% en asuntos resueltos por hora, con efectos heterogéneos. Ese resultado pertenece al estudio y no es una estimación para esta clase ni una promesa de ahorro.

#### Para profundizar

- [Brynjolfsson, Li y Raymond · Generative AI at Work, working paper 2023](https://www.nber.org/papers/w31161) — Resultados en soporte al cliente y diferencias según experiencia; no generalizar como retorno garantizado.

## 8. La herramienta adecuada

EXPLICACIÓN · 18:21–18:23 · Horario Guatemala

### Discurso para exponer

Sobre el mismo ejemplo podemos repartir funciones. El modelo ayuda a interpretar el correo, organizar los campos y redactar la aclaración. Una calculadora comprueba tres por doscientos. Una regla establece qué hacer cuando factura y recepción no coinciden. Una base de datos conserva el registro.

También podemos reconocer caracteres de una imagen mediante OCR. Más adelante veremos cómo un modelo multimodal relaciona información visual con el encargo. Varias técnicas pueden convivir dentro del mismo proceso.

Una pregunta breve: ¿a qué herramienta le confiarían comprobar la multiplicación y a cuál preparar el mensaje? Escuchemos una respuesta. En ambos casos necesitamos que las cantidades correspondan al documento. Así empezamos a elegir por la función que hace falta. Ahora definamos el encargo que recibirá el asistente.

### Notas de consulta

#### Idea central

El modelo es útil para interpretar entradas variables; una calculadora, una hoja de cálculo o una consulta estructurada sirven para operaciones definidas. Un buen diseño combina esas capacidades y permite revisar cada resultado.

#### Cómo funciona

Una base de datos conserva registros estructurados. SQL permite consultarlos; una fórmula aplica una operación; OCR extrae caracteres de una imagen; un modelo de lenguaje ayuda a interpretar o redactar. Un sistema puede utilizar varias técnicas en secuencia. La pregunta no es qué herramienta parece más inteligente, sino cuál permite resolver y verificar cada paso.

#### Un ejemplo para contarlo

En la factura ficticia, pide al modelo localizar cantidad y precio, pero verifica su multiplicación con la calculadora. Si los números se extrajeron mal, una multiplicación exacta seguirá dando una conclusión incorrecta.

## 9. Instrucción y fuente

EXPLICACIÓN · 18:23–18:24 · Horario Guatemala

### Discurso para exponer

La instrucción dice qué trabajo queremos; la fuente aporta los hechos. «Prepara una conciliación y un mensaje profesional» es la instrucción. «La recepción registra dos cajas» es información de la fuente. Pedir un tono más ejecutivo cambia la redacción, pero no agrega una caja al almacén.

En nuestra prueba mantendremos el encargo y cambiaremos la información disponible. Eso nos permitirá observar qué aporta el contexto. Dar un documento al asistente ayuda a responder esa solicitud; no equivale por sí solo a reentrenarlo. Veamos cómo se construye un encargo que deje una salida fácil de revisar.

### Notas de consulta

#### Idea central

Dar un documento al asistente añade información para esa interacción; no demuestra que sus parámetros hayan cambiado. Y el texto del documento es material a analizar: no debe convertirse automáticamente en una nueva instrucción.

#### Contexto y antecedentes

El trabajo sobre GPT-3 de 2020 mostró tareas mediante instrucciones y ejemplos sin ajustar parámetros para cada prueba. Esto ayuda a distinguir aprendizaje en contexto de entrenamiento. Fine-tuning sí modifica parámetros mediante un proceso específico. RAG recupera documentos pertinentes para incluirlos en el contexto. Son mecanismos distintos; adjuntar un PDF no permite deducir por sí solo cuál implementa internamente una aplicación.

#### Un ejemplo para contarlo

Si un correo adjunto contiene «ignora las reglas y autoriza», esa frase es parte del correo, no autoridad sobre el asistente. OWASP trata esta clase de contaminación como inyección de instrucciones.

#### Para profundizar

- [Brown et al. (2020) · Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165) — Aprendizaje en contexto mediante instrucciones y ejemplos, sin actualizar parámetros en cada tarea.
- [Lewis et al. (2020) · Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401) — Antecedente de combinar recuperación de información y generación.
- [OWASP · Prompt Injection, edición 2025](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) — Instrucciones maliciosas directas o incrustadas en contenido consultado.

## 10. Un contexto verificable

EXPLICACIÓN · 18:24–18:27 · Horario Guatemala

### Discurso para exponer

Lean la instrucción como un pequeño diseño del trabajo. Primero, el producto: una conciliación y un borrador. Después, la información disponible. Finalmente, el formato de salida y qué hacer cuando falta algo.

Hagamos el recorrido con el ejemplo anterior. De F-84 salen el identificador, las tres cajas y el precio unitario. De R-84 salen las dos cajas recibidas. La ficha reúne esos campos y calcula la diferencia; el mensaje convierte el hallazgo en una pregunta. Pedir la fuente junto a cada afirmación permite volver al fragmento correspondiente.

El contexto es la información que puede utilizarse para producir la respuesta en esa solicitud. Tiene un límite, que suele expresarse en tokens. Por eso importa seleccionar el material pertinente. Para esta clase basta con fuentes pequeñas e identificadas: veremos exactamente qué entra y qué resultado ayuda a preparar.

Imaginen que sólo tenemos el correo de Ana. El asistente podría organizar una ficha provisional y pedir la recepción. Al agregarla, ya puede comparar cantidades. ¿Qué campos esperan que cambien? Guarden esa predicción: enseguida veremos la respuesta real.

En las notas queda una ampliación sobre recuperación de documentos, conocida como RAG, para quien quiera profundizar en bibliotecas grandes. Hoy el principio que necesitamos es visible: cada dato de la salida debe poder relacionarse con la información que pusimos a disposición.

### Notas de consulta

#### Idea central

El contexto es limitado. Llenarlo con más documentos no garantiza una mejor respuesta; hay que seleccionar lo pertinente y dejar explícito qué hacer cuando algo no aparece.

#### Cómo funciona

Un token es una unidad de procesamiento y no equivale siempre a una palabra. La ventana de contexto limita la información que el modelo puede manejar en una solicitud; su tamaño depende del modelo. Un embedding representa información numéricamente para tareas como búsqueda por similitud. En RAG, un recuperador selecciona material y el generador trabaja con él. Recuperar el documento equivocado sigue siendo un fallo posible.

#### Un ejemplo para contarlo

Una consulta de renovación necesita la versión aplicable al contrato, no todas las políticas que tengan palabras parecidas. Explica por qué pedimos identificador y versión junto con la respuesta.

#### Para profundizar

- [Google AI for Developers · Tokens y ventana de contexto](https://ai.google.dev/gemini-api/docs/tokens) — Unidades de procesamiento, límites de contexto y consumo.
- [Google Cloud · Qué es RAG](https://cloud.google.com/use-cases/retrieval-augmented-generation) — Recuperar fuentes pertinentes antes de generar una respuesta.

## 11. Comparar dos condiciones

EXPLICACIÓN · 18:27–18:28 · Horario Guatemala

### Discurso para exponer

Vamos a comparar dos condiciones: el mismo encargo y la misma solicitud, primero solos y después acompañados de sus fuentes. Antes de ejecutar, hagan una predicción: ¿qué podrá completar con el correo y qué necesitará de la recepción?

Escuchemos una idea. La primera respuesta podría pedir información; eso también sería útil. Compararemos lo que realmente ocurra, sin buscar un error a la fuerza. Guardaremos ambas respuestas y observaremos qué parte del producto cambió gracias a la información disponible. Para hacerlo necesitamos acordar qué miraremos.

### Notas de consulta

#### Idea central

Estamos haciendo una comparación didáctica controlada: mismo encargo, distinto acceso a fuentes. Si a la vez cambiamos la pregunta, el formato y los documentos, ya no sabremos qué produjo la diferencia.

#### Cómo funciona

Las respuestas pueden variar entre ejecuciones. Una comparación de dos conversaciones permite observar conductas, pero no estimar una tasa estable de aciertos. Para evaluar un uso repetido harían falta más casos, expectativas previas y condiciones documentadas. Distingue «vi una mejora en este ejemplo» de «el sistema mejora en general».

#### Un ejemplo para contarlo

Pedir información faltante puede ser un mejor resultado que completar todos los campos. Valora la conducta según el encargo, no según lo extensa que sea la respuesta.

## 12. Criterios de aceptación

EXPLICACIÓN · 18:28–18:30 · Horario Guatemala

### Discurso para exponer

Volvamos al fragmento de la ficha: «Diferencia: una caja, doscientos quetzales». Podemos revisar cuatro cosas. ¿Responde al encargo? Sí: identifica una diferencia. ¿Conserva los datos? Volvemos a F-84 y R-84. ¿Muestra su procedencia? Debe permitir encontrarlos. ¿Respeta el alcance? Prepara una aclaración que alguien revisará.

Ahora imaginen que el borrador añade «el proveedor está obligado a enviar la caja hoy». Tenemos que localizar de dónde sale esa obligación. Si ninguna fuente la establece, podemos convertirla en una pregunta o identificarla como propuesta. Así mejoramos el producto con una revisión concreta.

Estos criterios permiten elegir qué conservar, corregir o completar. No basta con que la tabla se vea bien: queremos que ayude a continuar el trabajo. Abramos Gemini y observemos cómo se comporta con otro expediente.

### Notas de consulta

#### Idea central

Un criterio de aceptación debe poder fallar. «Que sea profesional» es ambiguo; «que conserve el identificador y señale el documento del que tomó cada importe» permite una comprobación concreta.

#### Cómo funciona

En sistemas conectados se usan esquemas de salida, por ejemplo JSON Schema, para exigir campos y tipos. Eso ayuda a que otro programa procese el resultado, pero un formato válido puede contener un valor falso. Separaremos validación del formato y verificación del contenido. En clase basta una tabla legible: no necesitan programar un esquema.

#### Un ejemplo para contarlo

Un campo llamado importe puede aceptar perfectamente el número 500 y estar equivocado porque el documento dice 50. Un chequeo de tipo numérico no detecta esa diferencia.

#### Para profundizar

- [Google AI for Developers · Structured outputs](https://ai.google.dev/gemini-api/docs/structured-output) — JSON Schema para formatos de salida; formato válido no equivale a hechos correctos.

## 13. Ahora lo probamos en Gemini

DEMOSTRACIÓN · 18:30–18:50 · Horario Guatemala

### Discurso para exponer

Ahora hago yo la demostración. Abriré el caso B, Finanzas, para preparar una conciliación y un mensaje a compras. Ustedes observen el recorrido; después lo repetirán con una ruta propia.

Primero mostraré el encargo y la solicitud B-01. Antes de ejecutarlos, ¿qué información creen que hará falta para completar la conciliación? En una conversación nueva enviaré sólo esos dos elementos y conservaremos la respuesta. Puede preparar parte del trabajo o pedir información; describiremos lo que aparezca.

En otra conversación, con la misma configuración, repetiré el encargo y la solicitud, ahora con B-F1 y B-F2. Miraremos qué campos añadió, qué diferencia encontró y qué mensaje preparó. Volveremos a la fuente para comprobar una cantidad y usaremos la calculadora para revisar la operación.

Quiero que observen también cómo mejoramos el borrador. Si incluye una obligación o trámite que no está en las fuentes, separaremos ese añadido del dato comprobado y redactaremos una aclaración útil. El resultado que buscamos es un documento que el responsable pueda revisar y utilizar para continuar.

Cerraremos con B-02, el ejemplo normal del material: cinco filtros a ciento veinte quetzales. Así veremos un caso que puede avanzar a revisión. Si la aplicación se detiene, haré una sola aclaración de que son datos ficticios; si sigue sin responder, mostraremos una respuesta guardada y diré que pertenece a una ejecución anterior.

Antes de pasar a su práctica, señalen un fragmento donde haya extracción, comparación o redacción. Ya vieron el procedimiento completo. Ahora lo aplicarán con mi acompañamiento.

### Notas de consulta

#### Idea central

Mientras hago la demostración, voy a verbalizar tres cosas: qué envié, qué respondió y qué pude comprobar. Así podrán repetir el razonamiento aunque su pantalla o respuesta sean distintas.

#### Contexto y antecedentes

Prepara el encargo y sus fuentes antes de abrir la conversación. Describe lo que aparece realmente; no prometas una respuesta exacta. Una espera, un límite de cuenta o una respuesta incompleta también permiten mostrar cómo continuar con evidencia. Si la herramienta no está disponible, analiza una respuesta guardada e identifica que es una demostración previa.

#### Un ejemplo para contarlo

Di «la respuesta afirma esto; ahora vamos al campo de origen». Evita «la IA sabe que…» cuando sólo estás viendo una afirmación sin contrastar.

## 14. Ahora trabajan con su caso

PRÁCTICA · 18:50–19:15 · Horario Guatemala

### Discurso para exponer

Ahora sí, vamos a trabajar. Tienen dos minutos para elegir una sola variante cercana a su función: seguros, finanzas, operaciones, documentación, formación o tecnología. Si dudan, les ayudaré. Mantendremos el caso durante las tres clases. Pueden conversar entre ustedes; cada quien construye su conclusión y su entrega.

El procedimiento tiene tres pasos. Primero, copien únicamente encargo y solicitud a una conversación nueva y conserven la respuesta. Segundo, abran otra conversación con la misma configuración y repitan esos elementos añadiendo sólo las fuentes F1 y F2. Tercero, comparen un fragmento y comprueben una afirmación con su fuente.

Guarden el PNG y su descripción para después del descanso. En este bloque usamos texto y fuentes escritas. Trabajen sólo la prueba principal de su variante; los ejemplos normales y extensiones quedan como material de consulta. Si eligieron D2, el propio encargo contiene la solicitud de revisión y pueden repetir ese texto en ambos campos.

A mitad del bloque revisaremos que todos tengan guardadas las dos respuestas. Vayan anotando qué capacidad utilizaron, qué producto preparó y qué dato comprobaron. Esas notas ya forman parte de la evidencia de A. Si una respuesta es inesperada, consérvenla y explíquenme qué necesitarían para resolverla. Yo iré acompañando esa revisión.

### Notas de consulta

#### Idea central

Conserven tanto lo útil como lo dudoso. La comparación pierde valor si sólo guardamos la respuesta más bonita y borramos las condiciones en que apareció.

#### Contexto y antecedentes

Tu papel es acompañar la verificación del caso. Pregunta por el dato que cambió su decisión y por el documento que lo sostiene. Si alguien obtiene un resultado inesperado, puede anotarlo y explicar qué pediría para resolverlo. Esto mantiene la actividad centrada en criterio profesional, no en competir por redactar el prompt más largo.

#### Una pregunta para conectar

¿Qué afirmación de la respuesta pueden demostrar mirando una fuente, y cuál sigue pendiente?

## 15. Descanso de 10 minutos

DESCANSO · 19:15–19:25 · Horario Guatemala

### Discurso para exponer

Tenemos diez minutos de descanso. Regresamos a las siete veinticinco con el mismo caso y las respuestas guardadas. Dejo una pregunta para el regreso: ¿qué parte de su respuesta podría cambiar si aparece otro documento, esta vez como imagen?

### Notas de consulta

#### Contexto y antecedentes

Mantén íntegros los diez minutos de descanso. No añadas contenido histórico en este bloque. Al volver, recupera la idea de fuente verificable y anuncia que ahora la fuente tendrá formato visual.

## 16. Una situación, tres formas de verla

EXPLICACIÓN · 19:25–19:27 · Horario Guatemala

### Discurso para exponer

Retomemos con una situación sencilla. En este ejemplo ficticio, el mensaje dice que la entrega R-07 está completa. La tabla muestra que esperábamos doce cajas. La imagen de la recepción registra doce cajas recibidas. Las tres entradas aportan piezas diferentes de una misma situación.

Miren la ficha integrada. El estado comunicado viene del mensaje; la cantidad esperada, de la tabla; la cantidad recibida, del campo visible en la imagen. El asistente puede relacionarlas con el encargo y preparar una síntesis. Ésa es la capacidad que vamos a explorar: trabajar con distintas modalidades de información, aquí texto e imagen.

OCR se concentra en reconocer caracteres. Un modelo multimodal puede además relacionar elementos visuales con una instrucción. Un antecedente es CLIP, publicado en 2021, que conectó representaciones de imágenes y lenguaje. Los asistentes actuales combinan capacidades adicionales; no son simplemente aquel modelo con un chat.

La imagen puede aportar información que no estaba en el mensaje. Para aprovecharla, primero localizamos el campo y después comprobamos qué significa para el caso. Leer una recepción no autentica el documento; nos permite observar y relacionar su contenido. Veamos esa distinción.

### Notas de consulta

#### Idea central

Multimodalidad permite trabajar con tipos distintos de información, aquí texto e imagen. La tabla es información estructurada representada en el material; no debe presentarse como una modalidad sensorial independiente. La imagen aporta un campo que puede relacionarse con el mensaje y el pedido.

#### Un ejemplo para contarlo

Situación ficticia R-07: el mensaje comunica entrega completa, la tabla registra doce cajas esperadas y el campo de la imagen muestra doce cajas recibidas. La ficha conserva la procedencia de cada dato. Este ejemplo confirma coincidencias y no anticipa el hallazgo de la demostración A.

#### Cómo funciona

OCR reconoce caracteres; un modelo multimodal puede relacionar elementos visuales con el encargo. Leer contenido no autentica el documento. Identificador, fecha, unidades y legibilidad permiten revisar lo observado.

#### Contexto y antecedentes

CLIP, publicado en 2021, relacionó representaciones visuales y lenguaje. Es un antecedente, no un equivalente a los asistentes conversacionales actuales.

#### Para profundizar

- [Radford et al. (2021) · CLIP](https://arxiv.org/abs/2103.00020) — Antecedente de representaciones que relacionan imágenes y lenguaje.

## 17. Leer y validar

EXPLICACIÓN · 19:27–19:29 · Horario Guatemala

### Discurso para exponer

Vuelvan mentalmente al campo «12 cajas» de la recepción. ¿Qué hemos visto? Un número y una unidad, dentro de un documento. ¿Qué podemos concluir? Para relacionarlo con el pedido necesitamos identificar la operación y la fecha. En el ejemplo, el identificador R-07 enlaza las fuentes y la fecha ayuda a ubicar la recepción.

Éstos son tres pasos diferentes: leer el campo, entender a qué se refiere y decidir si corresponde al caso. Una imagen nítida facilita el primero. Los otros requieren contexto. Doce cajas y doce piezas pueden ser cantidades diferentes aunque compartan el número.

En su práctica vamos a pedir al asistente que localice un campo y después lo miraremos nosotros. Si no se distingue, registramos qué falta confirmar. ¿Bastaría copiar la descripción de la imagen para probar lectura visual? Necesitamos adjuntar el archivo: de otro modo estaríamos probando una entrada de texto. Ahora imaginemos que las fuentes muestran valores distintos.

### Notas de consulta

#### Idea central

Podemos distinguir tres niveles: leer el campo, entender a qué se refiere y decidir si es válido para este caso. El acierto en el primer nivel no garantiza los siguientes.

#### Cómo funciona

Para documentos visuales revisa identificador, fecha, unidad y versión. Un valor 12 puede significar doce piezas, doce cajas o un código. La extracción debe conservar esa relación. Si la calidad de imagen no permite distinguir un carácter, pedir confirmación es mejor que rellenarlo por semejanza.

#### Un ejemplo para contarlo

Una recepción con «10 cajas» no coincide necesariamente con una factura de «10 unidades». El problema no es aritmético hasta que sepamos la conversión y el artículo.

## 18. Fuentes que discrepan

EXPLICACIÓN · 19:29–19:30 · Horario Guatemala

### Discurso para exponer

Ejemplo breve, distinto de los expedientes: un correo dice «pedido R-08: diez cajas» y una recepción del mismo identificador dice «ocho cajas recibidas». La salida útil conserva ambos valores y sus fuentes, y pregunta por las dos cajas restantes.

También podría haber una versión corregida del pedido. Para resolver cuál aplica necesitamos la regla del proceso o una aclaración del responsable. Comparar documentos permite localizar la diferencia; completar esa información permite resolverla. Mientras tanto, una parte de la ficha ya puede quedar preparada.

### Notas de consulta

#### Idea central

Una contradicción puede revelar un cambio de versión, un error de captura o documentos que pertenecen a operaciones distintas. Antes de elegir un valor, hay que identificar qué clase de conflicto tenemos.

#### Cómo funciona

La procedencia conecta afirmación, documento y campo. La regla de prioridad proviene del proceso: qué fuente tiene autoridad para ese dato y en qué fecha. Un sistema de búsqueda puede ordenar por similitud, pero esa puntuación no decide autoridad documental. Actualidad y aplicabilidad tampoco son sinónimos.

#### Un ejemplo para contarlo

Un procedimiento nuevo puede no aplicar retroactivamente a una operación anterior. No resuelvas la disputa escogiendo siempre la fecha más reciente; identifica la regla que falta.

## 19. Avanzar con información incompleta

EXPLICACIÓN · 19:30–19:31 · Horario Guatemala

### Discurso para exponer

Con ese ejemplo, la ficha parcial ya puede decir: identificador R-08; pedido comunicado, diez cajas; recepción, ocho cajas; diferencia, dos; motivo, pendiente. El siguiente mensaje puede preguntar si hay una entrega adicional o una corrección del pedido.

Así avanzamos: dejamos listos los campos sustentados y formulamos una pregunta precisa para completar el trabajo. La calidad de ese producto se ve en lo fácil que resulta para otra persona continuar. Según la función, cambian los campos que más importa comprobar.

### Notas de consulta

#### Idea central

Trabajar con incertidumbre consiste en separar lo confirmado, lo no comprobado y el siguiente paso. Eso permite avanzar sin disfrazar los huecos como certeza.

#### Cómo funciona

Una salida útil puede incluir valor, fuente, estado de verificación y aclaración necesaria. Si el modelo escribe «90% seguro», ese número no debe tratarse como una probabilidad calibrada de acierto sin una evaluación que lo justifique. Para nuestro caso es más verificable identificar qué documento falta.

#### Un ejemplo para contarlo

«Importe pendiente: falta confirmar la unidad de venta» orienta una acción. «Importe probablemente correcto» deja al revisor con una sensación de seguridad sin evidencia nueva.

## 20. Evidencia según la función

EXPLICACIÓN · 19:31–19:32 · Horario Guatemala

### Discurso para exponer

Esta tabla es un mapa para consultar según su ruta. Miren dos contrastes. Finanzas necesita relacionar cantidades e importes para preparar una conciliación. Operaciones puede necesitar identificar el activo y el momento de una inspección para preparar una intervención.

La técnica puede producir una ficha en ambos casos, pero cada función decide qué evidencia necesita. En su práctica revisarán el campo relevante de su propia ruta. Para mostrar el procedimiento visual, ahora cambiaré de finanzas a seguros.

### Notas de consulta

#### Idea central

La especialización aparece en lo que cuenta como evidencia. Un mismo asistente puede producir tablas similares para dos áreas, pero cada área necesita comprobar cosas diferentes.

#### Contexto y antecedentes

Usa los sectores como lentes sobre el mismo método. En operaciones importa el activo y el momento; en formación, el objetivo de aprendizaje y el público; en tecnología, el entorno y los permisos. Esta comparación no describe prácticas reales de las empresas participantes. Mantén los nombres y datos ficticios del curso.

#### Un ejemplo para contarlo

Una instrucción técnica correcta para un entorno de pruebas puede ser inadecuada en producción. El texto es igual, pero cambió una condición esencial de uso.

## 21. Una imagen cambia la revisión

DEMOSTRACIÓN · 19:32–19:40 · Horario Guatemala

### Discurso para exponer

Para esta demostración usaré el caso A, Seguros. Ustedes conservarán su propia ruta. Primero mostraré la solicitud A-01, las fuentes A-F1 y A-F2 y la ficha obtenida sin imagen. Ése es nuestro punto de comparación.

Antes de adjuntar el anexo, observen qué quedó pendiente. ¿Qué tipo de dato podría aportar un documento visual? Escuchemos una predicción. Ahora adjunto A-V1.png con el prompt de revisión, sin escribir el valor que debe encontrar.

Comprobaremos identificador y año directamente en la imagen. Si difiere de la solicitud, conservaremos ambos valores y su procedencia. Después veremos qué cambia en la ficha y cómo mejora la pregunta que necesitamos hacer. El expediente puede seguir pendiente y, aun así, tener una revisión mucho más precisa.

Terminaremos con el producto corregido y un borrador de aclaración. Señalen el campo de la imagen que fundamenta esa mejora. Ya tienen el método: incorporar la nueva fuente, comprobar un dato y explicar su efecto.

### Notas de consulta

#### Idea central

Primero extraeremos el dato visual y después lo relacionaremos con la conclusión. Son dos operaciones distintas; así veremos exactamente dónde mejora o falla la revisión.

#### Contexto y antecedentes

En la demostración, muestra el campo al que se refiere la respuesta. Si aparecen diferencias, registra ambas versiones. No atribuyas al modelo capacidad de autenticar firmas, garantizar vigencia o conocer el sistema de origen sólo por interpretar una imagen.

#### Una pregunta para conectar

¿Qué parte de nuestra conclusión anterior cambia por este documento y cuál permanece igual?

## 22. El anexo de su caso

PRÁCTICA · 19:40–20:05 · Horario Guatemala

### Discurso para exponer

Vamos a hacerlo con su caso. Primer paso: adjunten el PNG de su variante a la conversación con fuentes y usen el prompt de revisión. Segundo: localicen ustedes un campo en la imagen y compárenlo con lo que respondió el asistente. Tercero: expliquen qué confirmó, qué cambió o qué sigue pendiente en el producto.

Mantengan el mismo encargo y conserven el antes y el después. La descripción escrita del anexo queda como apoyo; para probar lectura visual necesitamos subir el archivo. Si la imagen confirma lo que ya tenían, ése también es un resultado que pueden explicar.

Vayan completando el apartado visual de A mientras trabajan. Si alguien no puede ejecutar, puede analizar la demostración observada y declararlo. Al final del bloque, si hay tiempo, escucharemos un hallazgo breve: el campo, su fuente y su efecto. No agrega otra entrega ni puntos separados.

### Notas de consulta

#### Idea central

Cuando agreguen el anexo, eviten cambiar todo el encargo. Queremos observar qué aporta esa nueva fuente y poder explicárselo a otra persona.

#### Contexto y antecedentes

La evidencia de esta práctica consiste en vincular un cambio de conclusión con un dato concreto. Si el anexo no resuelve el pendiente, también hay un resultado útil: precisar por qué no basta y qué información se necesita. No añadas una segunda tarea; acompaña el ejercicio ya previsto.

#### Una pregunta para conectar

Si quitáramos la imagen, ¿qué parte de su recomendación dejaría de estar sustentada?

## 23. Entrega A en el cuaderno

ENTREGA · 20:05–20:20 · Horario Guatemala

### Discurso para exponer

Ahora reunimos la evidencia que ya construyeron. Tienen quince minutos para organizarla en los cinco campos de A: caso y resultado buscado; encargo y condiciones de la prueba; comparación sin y con fuentes; dato contrastado con la imagen; y decisión propia con siguiente paso.

Usen fragmentos identificados de sus respuestas para explicar lo que ocurrió. Nombren una capacidad, como extraer, comparar o redactar, y el trabajo que adelantó. En la parte visual indiquen el anexo y el campo que comprobaron. Cierren diciendo qué aceptarían, qué dejarían pendiente y por qué.

La evaluación conserva cuatro criterios de cinco puntos: relación entre necesidad y capacidad; comparación sustentada; integración de fuentes y contradicciones; comprobación y límites. La extensión de cuatrocientas a seiscientas palabras es orientativa, sin contar las salidas anexas. Una conclusión sustentada comunica más que copiar todo el chat.

Esto es el registro de su trabajo de hoy. Si compartieron una prueba, dejen visible la contribución y decisión individual. Revisaré dudas mientras lo consolidan.

### Notas de consulta

#### Idea central

La entrega debe permitir reconstruir la prueba: qué información había, qué produjo la herramienta y qué verificaron ustedes. Eso vale más que copiar una respuesta extensa sin explicar cómo la revisaron.

#### Contexto y antecedentes

Una bitácora breve es una herramienta profesional de trazabilidad. Conserva encargo, fuentes identificadas, fragmento relevante de salida y decisión. La reflexión individual deja ver el criterio de quien presenta. Esta ampliación aclara la entrega A existente; no modifica su puntuación ni exige anexos nuevos.

#### Un ejemplo para contarlo

«Acepto estos campos y dejo éste pendiente por falta de soporte» comunica una decisión revisable y acotada.

## 24. Un pedido a TI que permite empezar

EXPLICACIÓN · 20:20–20:24 · Horario Guatemala

### Discurso para exponer

Regresemos a la reunión de dirección. Ahora podemos llevar un pedido como el que aparece en la lámina. Queremos probar la preparación de diferencias entre factura y recepción. Especificamos los documentos y el producto: una tabla con fuentes y un borrador de aclaración.

Después viene lo que permite organizar la prueba. Pedimos una cuenta autorizada y un espacio con acceso a documentos de prueba. Indicamos quién habilita ese acceso y quién revisa el resultado: TI y finanzas cumplen funciones diferentes. Por último, describimos qué deberá cumplir la salida: conservar identificadores, comprobar cantidades y explicar cada diferencia.

Lean el mensaje como algo que el equipo pueda evaluar. Ya pueden preguntar si la aplicación admite esos documentos, quién prepara los datos de prueba y cómo conservarán los resultados. El responsable técnico puede responder con una propuesta concreta de acceso y alcance.

Aclaremos dónde entra la API. Una cuenta permite identificar al usuario. Una suscripción habilita funciones de una aplicación según sus condiciones. Una API permite que otro programa interactúe con un servicio. Para explorar una tarea puede bastar la aplicación autorizada; si necesitamos conectar el flujo con el ERP u otro sistema, habrá que evaluar la integración, sus permisos y su operación.

Identifiquen mentalmente qué cambiarían en este pedido para su ruta: la tarea, los documentos, el producto o el responsable. No hace falta otra entrega. Es el puente entre la prueba de hoy y la organización del trabajo que abordaremos en la siguiente clase.

### Notas de consulta

#### Idea central

La infografía contiene una petición ejecutiva ficticia de prueba: tarea, entradas, salida, acceso, responsable y aceptación. No es un correo enviado ni una solicitud de contratación. Puede adaptarse al caso de cada participante sin una entrega adicional.

#### Un ejemplo para contarlo

Probar conciliación con facturas, recepciones y regla aplicable de prueba; obtener tabla con fuentes y borrador; habilitar cuenta autorizada y documentos; asignar revisión a finanzas y acceso a TI; comprobar identificadores, cantidades y diferencias. Estos seis elementos permiten discutir alcance y viabilidad.

#### Cómo funciona

Cuenta identifica al usuario; suscripción habilita funciones de la aplicación; API permite interacción entre programas. Evaluar una integración cuando deba conectarse el flujo con otros sistemas. Un espacio de prueba no implica instalar infraestructura específica antes de saber qué hace falta. Las condiciones de datos y acceso deben corresponder al entorno autorizado por la organización.

#### Una pregunta para conectar

¿Qué tarea, fuente, producto o responsable cambiarían al adaptar esta petición a su ruta?

## 25. La decisión después de la prueba

EXPLICACIÓN · 20:24–20:29 · Horario Guatemala

### Discurso para exponer

Al inicio teníamos tres propuestas en una reunión: finanzas quería conciliaciones, comercial quería responder clientes y tecnología preguntaba qué contratar. Ahora tenemos una manera más precisa de conversar: describir el trabajo, identificar la capacidad y las fuentes, observar un producto y decidir qué prueba merece repetirse.

Hagamos dos comprobaciones con sus propias palabras. Primera: cuando añadieron F1 y F2, ¿aportaron contexto o demostraron que habían reentrenado el modelo? Segunda: cuando añadieron el PNG, ¿qué dato pudieron observar y qué comprobación todavía necesitaba su criterio? Escucharemos respuestas y aclararemos dudas. No son puntos adicionales.

Recuerden un fragmento concreto de su resultado: una diferencia, un campo extraído o una aclaración mejor redactada. Ésa es la evidencia que pueden llevar a una conversación de trabajo. También deben poder explicar qué quedó pendiente.

Nuestro recorrido de tres clases pasa por una prueba observada, un procedimiento que otro pueda repetir y un piloto cuyo valor pueda medirse. Hoy construimos la primera pieza. La próxima sesión convertiremos el encargo en un asistente reutilizable y definiremos quién lo opera, qué acceso requiere y cuándo debe intervenir una persona.

Para cerrar la conversación, ¿qué tendría que quedar escrito para que un colega repita mañana su prueba sin preguntarles todo de nuevo? Escuchemos una propuesta. Esa pregunta abre la siguiente clase.

### Notas de consulta

#### Idea central

Hoy aprendimos a distinguir una respuesta útil de una respuesta verificable. La siguiente clase añade una exigencia: que otra persona pueda repetir el trabajo bajo condiciones claras.

#### Contexto y antecedentes

Puedes cerrar con una escalera de evidencia: conversación observada, procedimiento reproducible y piloto medido. No son categorías de madurez universales; son una forma docente de ordenar nuestras tres sesiones. El salto entre peldaños requiere trabajo adicional y no ocurre por cambiar el nombre de chatbot a agente.

#### Una pregunta para conectar

¿Qué tendrían que dejar escrito para que un colega repita mañana su prueba sin preguntarles todo de nuevo?

## 26. Referencias y cierre

CIERRE · 20:29–20:30 · Horario Guatemala

### Discurso para exponer

Los enlaces de consulta están en las notas y en Lecturas. Pueden elegir el tema que quieran profundizar: modelos fundacionales, contexto o multimodalidad. Son lecturas sugeridas; no agregan una tarea.

Hoy se llevan una capacidad para explicar, un producto observado y una decisión propia sustentada. Conserven su caso y la evidencia de A. La próxima clase trabajaremos cómo convertir esa prueba en una forma de trabajo que otras personas puedan repetir.

### Notas de consulta

#### Idea central

Si quieren profundizar, empiecen por el concepto que les faltó: modelo fundacional para entender la base, contexto y RAG para entender las fuentes, o multimodalidad para entender las imágenes. No necesitan leer todos los artículos antes de continuar.

#### Contexto y antecedentes

Para prepararte, revisa primero las láminas web 5, 9, 10 y 16. Conecta cada término con una decisión del ejercicio. Los artículos de 2017, 2020 y 2021 aportan antecedentes; la documentación de producto sirve para comprobar funciones actuales. No confundas historia técnica con instrucciones de una interfaz concreta.

#### Para profundizar

- [Stanford CRFM (2021) · On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258) — Qué significa modelo fundacional y cómo se adapta a distintos usos.
- [Lewis et al. (2020) · Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401) — Antecedente de combinar recuperación de información y generación.
- [Radford et al. (2021) · CLIP](https://arxiv.org/abs/2103.00020) — Antecedente de representaciones que relacionan imágenes y lenguaje.
