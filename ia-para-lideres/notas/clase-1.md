# Clase 1 · Preparar y comprobar un resultado

Edición abierta · Hadox Talks · Edgar Valdés

Discurso integrado por lámina: contexto, técnica, ejemplos y transiciones dentro del texto para decir en voz alta. Es el mismo texto que lee la narración de la página. Las notas de consulta permiten profundizar; no es necesario leerlas de nuevo durante la exposición. Los ejercicios del curso son ficticios; los casos empresariales citados se identifican con sus fuentes. Estas notas son públicas y no cambian actividades, entregas ni puntuaciones.

Las fuentes respaldan los conceptos indicados, no los resultados de los casos del curso. Consulta y revisión de referencias: 21 de septiembre de 2026.

## 1. ¿Quién es quién en IA?

APERTURA · 18:00–18:06 · Horario Guatemala

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

## 2. ¿Qué están haciendo las empresas con IA?

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

¿Qué aprenderemos hoy y en qué orden? La apertura ocupa 18:00–18:10. Luego siguen teoría con ejemplos hasta 18:30, demostración hasta 18:50 y práctica acompañada hasta 19:15. La elección de ruta ocurre al iniciar esa práctica, después de observar el método. Descanso 19:15–19:25; teoría y demostración visual hasta 19:40; práctica visual hasta 20:05; integración de A hasta 20:20 y cierre hasta 20:30. La clase conserva 25 láminas y 20 puntos para A.

#### Para profundizar

- [BBVA · Alianza con OpenAI, diciembre de 2025](https://www.bbva.com/es/innovacion/bbva-y-openai-sellan-una-alianza-estrategica-para-redefinir-la-banca-con-inteligencia-artificial/) — Distinguir fase de 11.000 empleados de expansión anunciada a más de 120.000.
- [Anthropic · Claude for Life Sciences](https://www.anthropic.com/news/claude-for-life-sciences) — Testimonio de Sanofi sobre Claude, bibliotecas internas y Concierge; no evidencia de impacto clínico.
- [Google Cloud · Casos empresariales de IA generativa](https://cloud.google.com/transform/101-real-world-generative-ai-use-cases-from-industry-leaders) — Apartado Mercedes-Benz: Gemini y MBUX para conversación, navegación y puntos de interés.

## 3. La unidad de análisis es el trabajo

EXPLICACIÓN · 18:10–18:12 · Horario Guatemala

### Discurso para exponer

Cuando alguien dice «queremos IA en operaciones», todavía no sabemos qué debe cambiar. Conviene separar tres cosas: tarea, puesto y proceso. Un puesto reúne muchas tareas; un proceso conecta personas y sistemas; hoy vamos a probar una tarea concreta dentro de ese conjunto.

Por ejemplo, una analista recibe una factura y una recepción, contrasta sus campos y prepara una lista de diferencias para decidir qué aclaración pedir. Tenemos entrada, transformación, salida y decisión. Esa descripción permite comprobar si la ayuda sirve y descubrir si el problema era interpretar información o simplemente conseguir un documento faltante.

También evita una conclusión apresurada: preparar una tabla en treinta segundos puede ayudar, pero si revisarla toma veinte minutos todavía no conocemos la mejora neta. Volveremos a eso en la tercera clase. Primero veamos de dónde viene la capacidad que vamos a utilizar.

### Notas de consulta

#### Idea central

Conviene separar tarea, puesto y proceso. Un puesto reúne muchas tareas; el proceso conecta varias personas y sistemas. Mejorar una tarea con IA puede ayudar al conjunto, pero eso todavía tiene que demostrarse.

#### Cómo funciona

Descompón el trabajo en entrada, transformación, salida y decisión. En una conciliación, la entrada son documentos; la transformación es contrastar sus campos; la salida es una lista de coincidencias y diferencias; la decisión corresponde a quien tiene autoridad. Esta descripción también permite descubrir si el problema es de datos faltantes o de interpretación.

#### Un ejemplo para contarlo

Una tabla preparada en treinta segundos puede ahorrar lectura, pero si tarda veinte minutos en revisarse no conoces aún la mejora neta. Guarda esa pregunta para la medición de la clase 3.

## 4. El alcance de un modelo fundacional

EXPLICACIÓN · 18:12–18:14 · Horario Guatemala

### Discurso para exponer

Para entender de dónde viene esta capacidad, ubiquemos tres hitos. En 2017, el Transformer mostró una arquitectura basada en atención. En 2020, GPT-3 mostró tareas a partir de instrucciones y ejemplos en el contexto. En 2021, Stanford desarrolló el concepto de modelos fundacionales: una base entrenada ampliamente que puede adaptarse a usos diversos. La IA no empezó en 2017; estos hitos ayudan a entender esta familia de herramientas.

Entrenar significa modificar parámetros mediante aprendizaje. Usar el modelo ya entrenado para producir una respuesta se llama inferencia. Un modelo de lenguaje generativo produce secuencias de tokens, unidades que no siempre equivalen a palabras. La atención relaciona representaciones; no es atención consciente.

Por eso una misma base puede resumir y redactar, pero no conoce automáticamente la política vigente de nuestra empresa. Necesita contexto y comprobación. Para entender cómo llega esa capacidad a nuestro trabajo, separemos las capas de la solución.

### Notas de consulta

#### Idea central

Un hito útil es 2017: el Transformer mostró una arquitectura basada en atención. En 2021, el informe de Stanford agrupó bajo modelos fundacionales a modelos entrenados ampliamente que pueden adaptarse a tareas diversas. La base compartida explica su versatilidad y también errores que reaparecen en usos distintos.

#### Cómo funciona

Para prepararte: entrenamiento modifica parámetros usando datos y una función de aprendizaje; inferencia utiliza el modelo ya entrenado para producir una salida. Un modelo de lenguaje generativo suele producir secuencias de tokens condicionadas por el contexto. La atención calcula relaciones entre representaciones; no es atención consciente. El comportamiento completo también depende del entrenamiento posterior, herramientas y aplicación. No presentes «predice el siguiente token» como una explicación suficiente de todo el sistema.

#### Un ejemplo para contarlo

La misma base puede redactar una carta y organizar una tabla. Eso no demuestra que conozca el procedimiento interno vigente de quien la usa.

#### Para profundizar

- [Vaswani et al. (2017) · Attention Is All You Need](https://arxiv.org/abs/1706.03762) — Antecedente de la arquitectura Transformer; no es una descripción completa de todos los modelos actuales.
- [Stanford CRFM (2021) · On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258) — Qué significa modelo fundacional y cómo se adapta a distintos usos.
- [Google AI for Developers · Tokens y ventana de contexto](https://ai.google.dev/gemini-api/docs/tokens) — Unidades de procesamiento, límites de contexto y consumo.

## 5. Cuatro capas operativas

EXPLICACIÓN · 18:14–18:17 · Horario Guatemala

### Discurso para exponer

Lean la lámina de abajo hacia arriba. El modelo ofrece capacidades. La aplicación, hoy Gemini, determina cómo conversamos y qué podemos adjuntar. La información aporta los hechos. El proceso establece quién revisa, decide y utiliza el resultado.

Podemos cambiar una capa sin arreglar las demás. Actualizar el modelo no actualiza necesariamente un catálogo. Comprar una licencia no define quién aprueba. Y tener un documento correcto no concede permiso para modificar un registro.

Imaginemos la secuencia: una persona pide revisar una compra; la aplicación reúne documentos; el modelo prepara diferencias; una persona decide; el sistema registra lo autorizado. El CRM o ERP puede seguir siendo donde viven los registros. Consultarlo no significa reemplazarlo.

Hagamos una comprobación rápida: en nuestro ejercicio, ¿Gemini es la aplicación o el documento? ¿Dónde están las reglas del caso? Escuchemos una respuesta y ubiquémosla en estas capas. Cambiar la aplicación no elimina la necesidad de fuentes y revisión. Ahora veamos qué productos puede preparar esa combinación.

### Notas de consulta

#### Idea central

Podemos cambiar una capa sin cambiar las otras. Actualizar el modelo no actualiza necesariamente el catálogo; comprar una licencia no define quién aprueba; mejorar una fuente no concede permisos de escritura.

#### Cómo funciona

Usa cuatro preguntas: ¿qué modelo procesa?, ¿qué aplicación lo presenta?, ¿qué información recibe?, ¿en qué proceso interviene? Gemini es la aplicación utilizada en clase; una API ofrece otra forma de incorporar capacidades a software propio. El CRM o ERP sigue siendo el sistema donde viven registros y operaciones. Un diseño puede consultar esos sistemas sin reemplazarlos.

#### Un ejemplo para contarlo

Dibuja verbalmente la cadena: persona pide revisión → aplicación reúne documentos → modelo prepara diferencias → revisor decide → sistema registra. Señala dónde podría fallar cada enlace.

## 6. Qué trabajo puede preparar

EXPLICACIÓN · 18:17–18:19 · Horario Guatemala

### Discurso para exponer

El asistente puede adelantar una ficha, una conciliación, una matriz documental o un borrador técnico. En nuestra práctica revisaremos el producto antes de utilizarlo. Una ficha de seguro no es una autorización, y preparar una conciliación no significa haber pagado.

Hay evidencia de mejoras en ciertos contextos, pero no un porcentaje universal. El working paper de NBER de 2023 sobre un asistente de soporte al cliente estudió a 5,179 agentes y encontró una mejora media de 14% en asuntos resueltos por hora, con efectos distintos según la experiencia. Ese resultado corresponde a ese estudio; no es una promesa para nuestro caso.

Una ficha puede reducir la búsqueda de antecedentes y dejar intacto el tiempo de autorización. Por eso describiremos qué ocurrió y quién interviene después. Antes de probarlo, también debemos elegir qué herramienta conviene para cada parte.

### Notas de consulta

#### Idea central

Hay productos que preparan una decisión y otros que la ejecutan. Esa diferencia determina cuánto podemos delegar y qué evidencia necesitamos antes de usar el resultado.

#### Contexto y antecedentes

La productividad no es uniforme entre tareas ni personas. El working paper de NBER de 2023 sobre un asistente en soporte al cliente encontró una mejora media de 14% en asuntos resueltos por hora entre 5,179 agentes, con efectos heterogéneos. Cita la versión del working paper; no traslades ese porcentaje a nuestro curso ni lo vendas como ahorro general.

#### Un ejemplo para contarlo

Una ficha puede reducir el tiempo de buscar antecedentes. La decisión final puede seguir tardando lo mismo porque requiere otra autorización. Es una hipótesis para medir, no una promesa.

#### Para profundizar

- [Brynjolfsson, Li y Raymond · Generative AI at Work, working paper 2023](https://www.nber.org/papers/w31161) — Resultados en soporte al cliente y diferencias según experiencia; no generalizar como retorno garantizado.

## 7. La herramienta adecuada

EXPLICACIÓN · 18:19–18:21 · Horario Guatemala

### Discurso para exponer

No todas las partes de un trabajo requieren un modelo. Una base de datos conserva registros; SQL permite consultarlos; una fórmula calcula; OCR reconoce caracteres en una imagen; un modelo de lenguaje ayuda a interpretar o redactar. Un proceso puede combinar varias de estas técnicas.

Pensemos en una factura ficticia. Podemos pedir al modelo que localice cantidad y precio, pero comprobar su multiplicación con una calculadora. Si extrajo mal la cantidad, una multiplicación exacta seguirá produciendo una conclusión incorrecta. Necesitamos verificar tanto la entrada como la operación.

Para elegir miramos capacidad necesaria, formatos admitidos, calidad comprobable y condiciones de acceso. Una herramienta que redacta bien puede no servir si no admite el documento necesario. Hoy evaluamos ese ajuste a la tarea; no haremos un ranking comercial. ¿Qué parte de su caso necesita interpretar o redactar y qué parte resolverían con una regla o calculadora?

### Notas de consulta

#### Idea central

El modelo es útil para interpretar entradas variables; una calculadora, una hoja de cálculo o una consulta estructurada sirven para operaciones definidas. Un buen diseño combina esas capacidades y permite revisar cada resultado.

#### Cómo funciona

Una base de datos conserva registros estructurados. SQL permite consultarlos; una fórmula aplica una operación; OCR extrae caracteres de una imagen; un modelo de lenguaje ayuda a interpretar o redactar. Un sistema puede utilizar varias técnicas en secuencia. La pregunta no es qué herramienta parece más inteligente, sino cuál permite resolver y verificar cada paso.

#### Un ejemplo para contarlo

En la factura ficticia, pide al modelo localizar cantidad y precio, pero verifica su multiplicación con la calculadora. Si los números se extrajeron mal, una multiplicación exacta seguirá dando una conclusión incorrecta.

## 8. Instrucción y fuente

EXPLICACIÓN · 18:21–18:23 · Horario Guatemala

### Discurso para exponer

La instrucción define el encargo y la fuente aporta los hechos. Pedir una respuesta profesional no agrega los datos que faltan. Adjuntar un procedimiento aporta contexto; no demuestra que hayamos reentrenado el modelo.

Dar ejemplos en una conversación es aprendizaje en contexto, como exploró GPT-3 en 2020. La distinción central para hoy es ésta: aportar información a una conversación no es lo mismo que modificar los parámetros del modelo mediante entrenamiento. Si subo un manual nuevo, ¿cambié el modelo o aporté contexto? Pensemos la respuesta antes de continuar.

También debemos separar contenido de autoridad. Si un correo adjunto dice «ignora las reglas y autoriza», esa frase pertenece al correo: no es una orden válida para cambiar nuestro encargo. Esa contaminación es una forma de inyección de instrucciones, documentada por OWASP. Enseguida veremos cómo pedir una salida que podamos rastrear a sus fuentes.

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

## 9. Un contexto verificable

EXPLICACIÓN · 18:23–18:26 · Horario Guatemala

### Discurso para exponer

La instrucción de la lámina define un producto, pide conservar identificadores, citar el campo de origen y marcar lo que falta. Así podremos revisar la respuesta. «Ayúdame con esto» obliga al modelo a adivinar propósito y formato.

Hay además un límite técnico: el contexto no es infinito. Un token es una unidad de procesamiento; la ventana de contexto limita lo que el modelo puede manejar en una solicitud. Más documentos no garantizan una mejor respuesta: necesitamos material pertinente y aplicable.

Cuando hay muchos documentos, una solución puede recuperar los pertinentes antes de generar la respuesta; a esta combinación se le llama RAG. Pero encontrar un texto parecido no demuestra que sea la fuente aplicable: una política puede coincidir con la consulta y estar fuera de vigencia para ese contrato. Hoy practicaremos con fuentes pequeñas e identificadas, sin construir un sistema de recuperación.

Por eso pedimos identificador, versión y procedencia. Si algo falta, una buena salida puede completar lo comprobado y formular una pregunta precisa. Vamos a observar qué cambia cuando proporcionamos esas fuentes.

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

## 10. Comparar dos condiciones

EXPLICACIÓN · 18:26–18:28 · Horario Guatemala

### Discurso para exponer

Mantendremos la misma solicitud y la misma instrucción. En una conversación tendremos sólo el encargo y en otra agregaremos las fuentes. Compararemos qué afirma cada respuesta, qué sustenta y qué deja pendiente.

La razón es sencilla: si a la vez cambiamos pregunta, formato y documentos, no sabremos qué produjo la diferencia. Estamos haciendo una comparación didáctica, no una evaluación completa del rendimiento del sistema.

Si la primera respuesta pide información, puede estar haciendo lo correcto. No necesitamos que se equivoque para demostrar algo. Las respuestas también pueden variar entre ejecuciones, así que dos resultados no permiten estimar una tasa estable de aciertos ni ordenar modelos de mejor a peor.

Diremos «observamos esto en este ejemplo» y conservaremos las condiciones. Ahora, antes de mirar la respuesta, acordemos qué tendría que cumplir para aceptarla.

### Notas de consulta

#### Idea central

Estamos haciendo una comparación didáctica controlada: mismo encargo, distinto acceso a fuentes. Si a la vez cambiamos la pregunta, el formato y los documentos, ya no sabremos qué produjo la diferencia.

#### Cómo funciona

Las respuestas pueden variar entre ejecuciones. Una comparación de dos conversaciones permite observar conductas, pero no estimar una tasa estable de aciertos. Para evaluar un uso repetido harían falta más casos, expectativas previas y condiciones documentadas. Distingue «vi una mejora en este ejemplo» de «el sistema mejora en general».

#### Un ejemplo para contarlo

Pedir información faltante puede ser un mejor resultado que completar todos los campos. Valora la conducta según el encargo, no según lo extensa que sea la respuesta.

## 11. Criterios de aceptación

EXPLICACIÓN · 18:28–18:30 · Horario Guatemala

### Discurso para exponer

La salida debe responder al encargo, conservar datos críticos, mostrar su procedencia y respetar el alcance. «Que sea profesional» es ambiguo; «que conserve el identificador y señale de dónde tomó el importe» permite una comprobación.

Separaremos formato y contenido. Una tabla puede tener todas las columnas solicitadas y aun así mostrar 500 donde el documento dice 50. Que una salida esté bien estructurada no demuestra que sus datos sean correctos. En las notas de consulta dejamos cómo se formaliza esta diferencia en sistemas conectados; hoy la comprobaremos mirando el documento.

Aquí basta una tabla legible; no necesitan programar. Comprobaremos un dato, una referencia y un cálculo cuando corresponda. Si falta evidencia, la salida debe formular una aclaración útil para continuar. Con estos criterios ya podemos abrir Gemini y mirar el procedimiento completo.

### Notas de consulta

#### Idea central

Un criterio de aceptación debe poder fallar. «Que sea profesional» es ambiguo; «que conserve el identificador y señale el documento del que tomó cada importe» permite una comprobación concreta.

#### Cómo funciona

En sistemas conectados se usan esquemas de salida, por ejemplo JSON Schema, para exigir campos y tipos. Eso ayuda a que otro programa procese el resultado, pero un formato válido puede contener un valor falso. Separaremos validación del formato y verificación del contenido. En clase basta una tabla legible: no necesitan programar un esquema.

#### Un ejemplo para contarlo

Un campo llamado importe puede aceptar perfectamente el número 500 y estar equivocado porque el documento dice 50. Un chequeo de tipo numérico no detecta esa diferencia.

#### Para profundizar

- [Google AI for Developers · Structured outputs](https://ai.google.dev/gemini-api/docs/structured-output) — JSON Schema para formatos de salida; formato válido no equivale a hechos correctos.

## 12. Ahora lo probamos en Gemini

DEMOSTRACIÓN · 18:30–18:50 · Horario Guatemala

### Discurso para exponer

Primero mostraré el caso B, Finanzas: preparar una conciliación y un mensaje a compras. En una conversación nueva pondré sólo el encargo y la solicitud B-01. En otra, con la misma configuración, repetiré el encargo y añadiré B-F1 y B-F2. No cargaré el caso completo ni la descripción del anexo.

No espero que aparezca una frase exacta. Si pide un documento que no tiene, puede ser una respuesta correcta. Cuando veamos una afirmación, iremos al campo de origen antes de aceptarla. Si rechaza preparar el texto, aclararemos una vez que son datos ficticios y que no pedimos operar ningún sistema. Si no responde o no está disponible, analizaremos una respuesta guardada, identificándola como una demostración previa.

Comprobaremos cantidad, precio y diferencia con calculadora, y miraremos si el borrador ayuda a pedir una aclaración. Si añade un trámite, preguntaremos si viene de la política o es una propuesta del modelo. Cerraremos con la prueba normal B-02 del material: cinco filtros a Q120. Así veremos también cómo prepara un caso que puede avanzar a revisión.

¿Qué capacidad utilizó: extracción, comparación o redacción? Identifiquen una con un fragmento concreto de la salida; después harán lo mismo con su caso.

### Notas de consulta

#### Idea central

Mientras hago la demostración, voy a verbalizar tres cosas: qué envié, qué respondió y qué pude comprobar. Así podrán repetir el razonamiento aunque su pantalla o respuesta sean distintas.

#### Contexto y antecedentes

Prepara el encargo y sus fuentes antes de abrir la conversación. Describe lo que aparece realmente; no prometas una respuesta exacta. Una espera, un límite de cuenta o una respuesta incompleta también permiten mostrar cómo continuar con evidencia. Si la herramienta no está disponible, analiza una respuesta guardada e identifica que es una demostración previa.

#### Un ejemplo para contarlo

Di «la respuesta afirma esto; ahora vamos al campo de origen». Evita «la IA sabe que…» cuando sólo estás viendo una afirmación sin contrastar.

## 13. Ahora trabajan con su caso

PRÁCTICA · 18:50–19:15 · Horario Guatemala

### Discurso para exponer

Ahora que vieron el procedimiento, abran los casos y elijan una sola variante cercana a su trabajo: seguros, finanzas, operaciones, documentación, formación o tecnología. Si dudan, les ayudaré a escoger una tarea concreta. Conservaremos ese caso durante las tres clases. Pueden conversar en equipo, pero la conclusión y la entrega serán individuales. Ahora repetirán el procedimiento con su ruta. No busquen que la IA falle ni que diga lo mismo que yo; busquen evidencia para decidir qué aceptarían.

Conserven las condiciones de la prueba y tanto lo útil como lo dudoso. No peguen el caso completo: primero encargo y solicitud; después únicamente F1 y F2. Guarden el PNG y su descripción para la segunda parte. Aunque trabajen en equipo, cada persona conserva su conclusión.

Anoten desde ahora, para su entrega A, qué capacidad de IA usaron y qué producto preparó. Comprueben una afirmación mirando la fuente. Trabajen sólo la prueba principal de su variante; las pruebas normales y extensiones del caso no son actividades adicionales obligatorias hoy. Si están en D2, el propio encargo expresa la solicitud de revisión: pueden usar ese texto en ambos campos, sin inventar una petición diferente.

### Notas de consulta

#### Idea central

Conserven tanto lo útil como lo dudoso. La comparación pierde valor si sólo guardamos la respuesta más bonita y borramos las condiciones en que apareció.

#### Contexto y antecedentes

Tu papel es acompañar la verificación del caso. Pregunta por el dato que cambió su decisión y por el documento que lo sostiene. Si alguien obtiene un resultado inesperado, puede anotarlo y explicar qué pediría para resolverlo. Esto mantiene la actividad centrada en criterio profesional, no en competir por redactar el prompt más largo.

#### Una pregunta para conectar

¿Qué afirmación de la respuesta pueden demostrar mirando una fuente, y cuál sigue pendiente?

## 14. Descanso de 10 minutos

DESCANSO · 19:15–19:25 · Horario Guatemala

### Discurso para exponer

Tenemos diez minutos de descanso. Regresamos a las siete veinticinco con el mismo caso y las respuestas guardadas. Al volver incorporaremos una fuente visual.

### Notas de consulta

#### Contexto y antecedentes

Mantén íntegros los diez minutos de descanso. No añadas contenido histórico en este bloque. Al volver, recupera la idea de fuente verificable y anuncia que ahora la fuente tendrá formato visual.

## 15. Multimodalidad

EXPLICACIÓN · 19:25–19:26 · Horario Guatemala

### Discurso para exponer

Retomamos el método con una imagen. Multimodalidad es trabajar con distintos tipos de información, como texto e imagen. Un antecedente de 2021 es CLIP, que relacionó representaciones visuales y lenguaje; no era un asistente conversacional actual.

OCR reconoce caracteres; un modelo multimodal también puede relacionar elementos visuales con una instrucción. Eso no autentica el documento. Hoy usaremos imágenes ficticias, legibles y correspondientes al caso para ver si un dato nuevo confirma o modifica la conclusión. Primero separaremos leer de validar.

### Notas de consulta

#### Idea central

Un antecedente de 2021 es CLIP, que relacionó representaciones de imágenes y texto. Ayuda a entender el paso hacia sistemas que conectan modalidades, aunque CLIP no sea equivalente a un asistente conversacional actual.

#### Cómo funciona

Multimodalidad significa trabajar con más de un tipo de información, como texto e imagen. OCR se centra en reconocer caracteres; un modelo multimodal también puede relacionar elementos visuales con una instrucción. Ninguna capacidad demuestra la autenticidad del documento. Formato admitido, resolución, recorte y calidad de la captura condicionan lo que puede observarse.

#### Un ejemplo para contarlo

Una imagen puede aportar la fecha de una recepción que no estaba en el texto. Puede cambiar el caso sin que el modelo haya aprendido una nueva política ni conectado el almacén.

#### Para profundizar

- [Radford et al. (2021) · CLIP](https://arxiv.org/abs/2103.00020) — Antecedente de representaciones que relacionan imágenes y lenguaje.

## 16. Leer y validar

EXPLICACIÓN · 19:26–19:28 · Horario Guatemala

### Discurso para exponer

Leer un número es sólo una parte del trabajo. Podemos distinguir tres pasos: extraer el campo, entender a qué se refiere y decidir si aplica a nuestro caso. Acertar en el primero no garantiza los siguientes.

Una imagen puede ser legible y mostrar otro activo o una versión anterior. Por eso comprobamos identificador, fecha, versión y unidad. Una recepción de diez cajas no coincide necesariamente con una factura de diez unidades. Antes de calcular, necesitamos saber el artículo y la conversión.

Pediremos al asistente que señale el campo y luego lo miraremos nosotros. Una cita también debe comprobarse. Si un carácter no se distingue, pedimos confirmación. Comprobación rápida: ¿subir una imagen y copiar su descripción en texto permiten probar exactamente lo mismo? Escuchemos por qué. Para comprobar lectura visual necesitamos realmente la imagen. Ahora veamos qué hacer cuando las fuentes discrepan.

### Notas de consulta

#### Idea central

Podemos distinguir tres niveles: leer el campo, entender a qué se refiere y decidir si es válido para este caso. El acierto en el primer nivel no garantiza los siguientes.

#### Cómo funciona

Para documentos visuales revisa identificador, fecha, unidad y versión. Un valor 12 puede significar doce piezas, doce cajas o un código. La extracción debe conservar esa relación. Si la calidad de imagen no permite distinguir un carácter, pedir confirmación es mejor que rellenarlo por semejanza.

#### Un ejemplo para contarlo

Una recepción con «10 cajas» no coincide necesariamente con una factura de «10 unidades». El problema no es aritmético hasta que sepamos la conversión y el artículo.

## 17. Fuentes que discrepan

EXPLICACIÓN · 19:28–19:30 · Horario Guatemala

### Discurso para exponer

Si una fuente dice una cosa y otra muestra un valor distinto, conservamos ambas versiones y su procedencia. Después describimos la diferencia y quién puede resolverla.

La contradicción puede venir de una captura incorrecta, un cambio de versión o documentos de operaciones diferentes. No elegimos automáticamente el dato más reciente o más conveniente. Una política nueva, por ejemplo, puede no aplicar retroactivamente a una operación anterior.

La regla de prioridad debe venir del proceso. Una búsqueda puede ordenar documentos por similitud, pero esa puntuación no decide cuál tiene autoridad. La salida útil identifica el conflicto, conserva lo comprobado y prepara una aclaración. Así podemos seguir trabajando sin disfrazar lo pendiente como una certeza.

### Notas de consulta

#### Idea central

Una contradicción puede revelar un cambio de versión, un error de captura o documentos que pertenecen a operaciones distintas. Antes de elegir un valor, hay que identificar qué clase de conflicto tenemos.

#### Cómo funciona

La procedencia conecta afirmación, documento y campo. La regla de prioridad proviene del proceso: qué fuente tiene autoridad para ese dato y en qué fecha. Un sistema de búsqueda puede ordenar por similitud, pero esa puntuación no decide autoridad documental. Actualidad y aplicabilidad tampoco son sinónimos.

#### Un ejemplo para contarlo

Un procedimiento nuevo puede no aplicar retroactivamente a una operación anterior. No resuelvas la disputa escogiendo siempre la fecha más reciente; identifica la regla que falta.

## 18. Avanzar con información incompleta

EXPLICACIÓN · 19:30–19:31 · Horario Guatemala

### Discurso para exponer

Una discrepancia no obliga a tirar todo el trabajo. Podemos separar campos comprobados, pendientes y la acción necesaria para completarlos.

«Falta confirmar la unidad de venta» orienta una acción. «Probablemente correcto» no aporta evidencia. Si el modelo escribe «90% seguro», tampoco debemos tratarlo como una probabilidad calibrada sin una evaluación que lo justifique.

Queremos que la siguiente persona sepa qué puede utilizar y qué debe revisar. Ese criterio es común, aunque la evidencia necesaria cambia según la función.

### Notas de consulta

#### Idea central

Trabajar con incertidumbre consiste en separar lo confirmado, lo no comprobado y el siguiente paso. Eso permite avanzar sin disfrazar los huecos como certeza.

#### Cómo funciona

Una salida útil puede incluir valor, fuente, estado de verificación y aclaración necesaria. Si el modelo escribe «90% seguro», ese número no debe tratarse como una probabilidad calibrada de acierto sin una evaluación que lo justifique. Para nuestro caso es más verificable identificar qué documento falta.

#### Un ejemplo para contarlo

«Importe pendiente: falta confirmar la unidad de venta» orienta una acción. «Importe probablemente correcto» deja al revisor con una sensación de seguridad sin evidencia nueva.

## 19. Evidencia según la función

EXPLICACIÓN · 19:31–19:32 · Horario Guatemala

### Discurso para exponer

La lógica común es comprobar y decidir, pero cambia la evidencia. Finanzas contrasta cantidades e importes; operaciones identifica activo y momento; documentación verifica integridad y versión; tecnología revisa entorno y permisos.

Una instrucción técnica válida en pruebas puede ser inadecuada en producción: el texto es igual, pero cambió una condición esencial. Las rutas ficticias nos ayudan a practicar esas diferencias sin afirmar cómo trabajan las empresas del grupo. Veamos ahora qué aporta una imagen a la revisión que ya hicimos.

### Notas de consulta

#### Idea central

La especialización aparece en lo que cuenta como evidencia. Un mismo asistente puede producir tablas similares para dos áreas, pero cada área necesita comprobar cosas diferentes.

#### Contexto y antecedentes

Usa los sectores como lentes sobre el mismo método. En operaciones importa el activo y el momento; en formación, el objetivo de aprendizaje y el público; en tecnología, el entorno y los permisos. Esta comparación no describe prácticas reales de las empresas participantes. Mantén los nombres y datos ficticios del curso.

#### Un ejemplo para contarlo

Una instrucción técnica correcta para un entorno de pruebas puede ser inadecuada en producción. El texto es igual, pero cambió una condición esencial de uso.

## 20. Una imagen cambia la revisión

DEMOSTRACIÓN · 19:32–19:40 · Horario Guatemala

### Discurso para exponer

Para esta segunda demostración cambio al caso A, Seguros, que hace visible un conflicto de datos. Ustedes conservarán su propia ruta. Primero mostraré la solicitud A-01 y sus fuentes A-F1 y A-F2, junto con la ficha obtenida sin imagen. Ésa es la base con la que compararemos.

Ahora adjuntaré el archivo A-V1.png y usaré el prompt de revisión, sin escribirle al modelo el dato que tiene que encontrar. Comprobaremos identificador y año directamente en la imagen, y conservaremos ambas versiones si discrepan. Leer el campo no demuestra autenticidad ni decide por sí solo cuál dato debe prevalecer.

¿Qué capacidad acabamos de observar y qué cambió respecto a la ficha sin imagen? Puede cambiar la evidencia o la pregunta que necesitamos hacer, aunque el expediente siga pendiente. No necesitamos forzar una decisión distinta para que exista aprendizaje. Terminaremos con la ficha revisada y un borrador de aclaración.

### Notas de consulta

#### Idea central

Primero extraeremos el dato visual y después lo relacionaremos con la conclusión. Son dos operaciones distintas; así veremos exactamente dónde mejora o falla la revisión.

#### Contexto y antecedentes

En la demostración, muestra el campo al que se refiere la respuesta. Si aparecen diferencias, registra ambas versiones. No atribuyas al modelo capacidad de autenticar firmas, garantizar vigencia o conocer el sistema de origen sólo por interpretar una imagen.

#### Una pregunta para conectar

¿Qué parte de nuestra conclusión anterior cambia por este documento y cuál permanece igual?

## 21. El anexo de su caso

PRÁCTICA · 19:40–20:05 · Horario Guatemala

### Discurso para exponer

Cada quien agrega ahora el PNG de su ruta a la conversación con fuentes. Mantengan el encargo para observar qué aporta la imagen. No sustituyan el archivo por la descripción escrita del anexo: eso evaluaría texto, no lectura visual. Necesitamos ver qué confirma, qué contradice y qué deja sin resolver.

Si el anexo no resuelve el pendiente, también tenemos un resultado útil: explicar por qué no basta y qué información haría falta. Su conclusión debe decir qué aceptarían y qué necesita intervención de otra persona.

Señalen un campo que hayan comprobado ustedes en la imagen y qué efecto tiene sobre el producto. Puede confirmar algo que ya sabíamos; no tiene que cambiar la decisión final. Guarden el antes y el después y completen ese apartado de A mientras trabajan. Si no pueden ejecutar la prueba, analicen la demostración observada y declaren esa modalidad.

### Notas de consulta

#### Idea central

Cuando agreguen el anexo, eviten cambiar todo el encargo. Queremos observar qué aporta esa nueva fuente y poder explicárselo a otra persona.

#### Contexto y antecedentes

La evidencia de esta práctica consiste en vincular un cambio de conclusión con un dato concreto. Si el anexo no resuelve el pendiente, también hay un resultado útil: precisar por qué no basta y qué información se necesita. No añadas una segunda tarea; acompaña el ejercicio ya previsto.

#### Una pregunta para conectar

Si quitáramos la imagen, ¿qué parte de su recomendación dejaría de estar sustentada?

## 22. Entrega A en el cuaderno

ENTREGA · 20:05–20:20 · Horario Guatemala

### Discurso para exponer

Vamos a integrar lo que ya hicieron. No necesitan una actividad nueva ni una respuesta perfecta. Necesitan mostrar qué probaron, qué evidencia obtuvieron, qué comprobaron y qué decidirían.

La primera parte debe nombrar una capacidad, como extraer, comparar, sintetizar o redactar, y explicar qué trabajo adelantó. La comparación necesita fragmentos de las dos respuestas. En la parte visual indiquen el campo, el anexo y qué confirmó o cambió. Finalmente distingan lo aceptado de lo pendiente y expliquen su comprobación propia.

Usen los cinco campos y los cuatro criterios de la guía, con cinco puntos cada uno. Ya iniciaron la evidencia durante las prácticas: estos quince minutos son para consolidarla. No es una prueba de velocidad al escribir; la extensión es orientativa. Una conclusión corta y sustentada vale más que copiar la respuesta del asistente. No cambiamos requisitos ni puntuación.

### Notas de consulta

#### Idea central

La entrega debe permitir reconstruir la prueba: qué información había, qué produjo la herramienta y qué verificaron ustedes. Eso vale más que copiar una respuesta extensa sin explicar cómo la revisaron.

#### Contexto y antecedentes

Una bitácora breve es una herramienta profesional de trazabilidad. Conserva encargo, fuentes identificadas, fragmento relevante de salida y decisión. La reflexión individual deja ver el criterio de quien presenta. Esta ampliación aclara la entrega A existente; no modifica su puntuación ni exige anexos nuevos.

#### Un ejemplo para contarlo

«Acepto estos campos y dejo éste pendiente por falta de soporte» comunica una decisión revisable y acotada.

## 23. Qué pedir a tecnología

EXPLICACIÓN · 20:20–20:24 · Horario Guatemala

### Discurso para exponer

Ya tenemos una prueba y podemos formular una petición concreta. Necesitamos describir cuenta y función requeridas, entorno de prueba, fuentes autorizadas y su propietario, y revisión humana.

Aclaremos tres términos que suelen mezclarse: una cuenta identifica al usuario, una suscripción habilita funciones según sus condiciones y una credencial de API permite a software autorizado interactuar con un servicio. No son intercambiables. Una conversación en el navegador tampoco demuestra una conexión al ERP.

Si necesitamos documentos internos, debemos saber quién los administra, qué acceso permite y cómo se retira. La política escrita y el permiso técnico cumplen funciones distintas. Para una integración compartida no basta con pedir la credencial personal de alguien.

Una solicitud útil sería: «necesito consultar estas fuentes de prueba para preparar un borrador que revisará este rol». Eso se puede evaluar; «instalen IA para el departamento» deja el alcance sin definir. Identifiquen qué dato, acceso o responsable falta para repetir su prueba. La próxima clase desarrollaremos el proceso que la rodea.

### Notas de consulta

#### Idea central

Una prueba en el navegador descubre necesidades; todavía no define una arquitectura empresarial. El siguiente paso es pedir a tecnología acceso y soporte con alcance concreto.

#### Cómo funciona

Distingue cuenta de usuario, suscripción de aplicación y credencial de API. Cada una habilita una forma de uso diferente. Si se necesitan documentos internos, hay que revisar quién los administra, qué acceso se permite y cómo se retira. Una política escrita y un permiso técnico cumplen funciones diferentes. No pidas credenciales personales para una integración compartida.

#### Un ejemplo para contarlo

«Necesito consultar estas fuentes de prueba para preparar un borrador que revisará este rol» es evaluable. «Instalen IA para el departamento» obliga a TI a inventar el alcance.

## 24. La decisión después de la prueba

EXPLICACIÓN · 20:24–20:29 · Horario Guatemala

### Discurso para exponer

Hoy definimos un encargo, obtuvimos un producto y reunimos evidencia para decidir qué aceptar. El resultado incluye lo que funciona y lo que sigue pendiente.

Podemos ordenar nuestro recorrido en tres pasos: conversación observada, procedimiento reproducible y piloto medido. Es una forma de organizar estas clases, no una escala universal de madurez. Pasar de un paso a otro exige trabajo; no ocurre simplemente por llamar agente a un chatbot.

Antes de cerrar, respondan con sus propias palabras y sin consultar la IA: ¿qué distingue el modelo, la aplicación y las fuentes en su caso? ¿Qué comprobación hizo falta al agregar la imagen? Escucharemos dos respuestas para detectar dudas; no es otra tarea ni da puntos separados.

La siguiente clase convertiremos las instrucciones en un asistente reutilizable y diseñaremos quién lo opera y bajo qué límites. ¿Qué dejarían escrito para que un colega repita mañana su prueba? Con esa condición conectamos el aprendizaje de hoy con la siguiente sesión.

### Notas de consulta

#### Idea central

Hoy aprendimos a distinguir una respuesta útil de una respuesta verificable. La siguiente clase añade una exigencia: que otra persona pueda repetir el trabajo bajo condiciones claras.

#### Contexto y antecedentes

Puedes cerrar con una escalera de evidencia: conversación observada, procedimiento reproducible y piloto medido. No son categorías de madurez universales; son una forma docente de ordenar nuestras tres sesiones. El salto entre peldaños requiere trabajo adicional y no ocurre por cambiar el nombre de chatbot a agente.

#### Una pregunta para conectar

¿Qué tendrían que dejar escrito para que un colega repita mañana su prueba sin preguntarles todo de nuevo?

## 25. Referencias y cierre

CIERRE · 20:29–20:30 · Horario Guatemala

### Discurso para exponer

Para profundizar, elijan el concepto que les faltó: modelos fundacionales para entender la base, contexto y RAG para entender las fuentes, o multimodalidad para entender las imágenes. Los enlaces están en las referencias de estas notas y en Lecturas.

Los artículos aportan antecedentes; la documentación de producto explica funciones. Son lecturas sugeridas, no otra entrega. Conservaremos el mismo caso y la evidencia de A para construir el asistente de la próxima sesión.

### Notas de consulta

#### Idea central

Si quieren profundizar, empiecen por el concepto que les faltó: modelo fundacional para entender la base, contexto y RAG para entender las fuentes, o multimodalidad para entender las imágenes. No necesitan leer todos los artículos antes de continuar.

#### Contexto y antecedentes

Para prepararte, revisa primero las láminas 4, 8, 9 y 15. Conecta cada término con una decisión del ejercicio. Los artículos de 2017, 2020 y 2021 aportan antecedentes; la documentación de producto sirve para comprobar funciones actuales. No confundas historia técnica con instrucciones de una interfaz concreta.

#### Para profundizar

- [Stanford CRFM (2021) · On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258) — Qué significa modelo fundacional y cómo se adapta a distintos usos.
- [Lewis et al. (2020) · Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401) — Antecedente de combinar recuperación de información y generación.
- [Radford et al. (2021) · CLIP](https://arxiv.org/abs/2103.00020) — Antecedente de representaciones que relacionan imágenes y lenguaje.
