# Clase 1 · Preparar y comprobar un resultado

Edición abierta · Hadox Talks · Edgar Valdés

Guion breve y preparación ampliada por lámina. El contexto adicional es opcional: elige lo que te ayude a explicar dentro del horario previsto. Los ejemplos adicionales son ficticios. Estas notas son públicas y no cambian actividades, entregas ni puntuaciones.

Las fuentes respaldan los conceptos indicados, no los resultados de los casos del curso. Consulta y revisión de referencias: 20 de septiembre de 2026.

## 1. Apertura

APERTURA · 18:00–18:02 · Horario Guatemala

### Guion breve

Hoy vamos a convertir una tarea profesional en una prueba concreta de IA. Al terminar tendrán un resultado preparado, evidencia para comprobarlo y una decisión sobre cómo lo usarían. Vamos a trabajar con casos ficticios relacionados con sus funciones. No necesitan revelar información de su empresa ni tener una licencia de pago. Primero veremos un ejemplo juntos y después cada quien trabajará su ruta.

### Para sumar a tu explicación

La novedad empresarial es poder encargar en lenguaje cotidiano trabajos que antes requerían interfaces y desarrollos especializados. Pero una conversación convincente todavía no es un proceso confiable. Durante el curso vamos a recorrer precisamente esa distancia.

### Contexto y antecedentes

Puedes abrir con tres hitos, sin convertir la introducción en una cronología larga: Transformer en 2017, GPT-3 y sus ejemplos en contexto en 2020, y la discusión sobre modelos fundacionales en 2021. Son piezas diferentes: arquitectura, capacidad demostrada y concepto organizador. No significan que la IA empezara en 2017 ni que esos trabajos resolvieran todos los problemas actuales.

### Un ejemplo para contarlo

Compara pedir un informe a una persona nueva con integrarla a un equipo: primero necesita un encargo y documentos; después reglas, revisión y responsabilidades. La analogía sirve para hablar del proceso, no para atribuir comprensión humana al modelo.

### Para profundizar

- [Vaswani et al. (2017) · Attention Is All You Need](https://arxiv.org/abs/1706.03762) — Antecedente de la arquitectura Transformer; no es una descripción completa de todos los modelos actuales.
- [Brown et al. (2020) · Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165) — Aprendizaje en contexto mediante instrucciones y ejemplos, sin actualizar parámetros en cada tarea.
- [Stanford CRFM (2021) · On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258) — Qué significa modelo fundacional y cómo se adapta a distintos usos.

## 2. Diagnóstico y elección de caso

INICIO · 18:02–18:10 · Horario Guatemala

### Guion breve

Vamos a elegir un problema que les permita practicar sin compartir información privada. Mantendremos el mismo caso durante las tres clases. Si una ruta reúne muchas personas, pueden discutir juntos; la conclusión y entrega son individuales.

### Para sumar a tu explicación

Una buena elección es una tarea que hoy podamos describir y revisar. Si elegimos algo demasiado grande, no sabremos si aprendimos a usar la herramienta o simplemente recibimos un texto agradable.

### Contexto y antecedentes

Esta actividad fija la unidad de trabajo para las tres sesiones. Ayuda a pasar de nombres de departamentos a productos observables: una ficha, una comparación o un borrador. No hace falta que el caso represente toda la empresa. La especialización viene de las entradas y criterios de aceptación, no de escribir un cargo sofisticado en el prompt.

### Un ejemplo para contarlo

Si alguien dice «quiero mejorar finanzas», reconduce con «¿qué documento recibe una persona, qué prepara y quién lo utiliza?». Es acompañamiento del caso ya previsto, no una actividad nueva.

## 3. La unidad de análisis es el trabajo

EXPLICACIÓN · 18:10–18:12 · Horario Guatemala

### Guion breve

Cuando alguien dice que quiere IA en operaciones, todavía no sabemos qué trabajo debe cambiar. Necesitamos identificar a la persona, la tarea, el producto que recibirá y la decisión que ese producto prepara. Por ejemplo: una analista necesita una conciliación de factura y recepción para decidir qué aclaración pedir. Esa definición permite probar si la ayuda sirve. La ambición puede ser grande, pero la primera prueba necesita un resultado observable.

### Para sumar a tu explicación

Conviene separar tarea, puesto y proceso. Un puesto reúne muchas tareas; el proceso conecta varias personas y sistemas. Mejorar una tarea con IA puede ayudar al conjunto, pero eso todavía tiene que demostrarse.

### Cómo funciona

Descompón el trabajo en entrada, transformación, salida y decisión. En una conciliación, la entrada son documentos; la transformación es contrastar sus campos; la salida es una lista de coincidencias y diferencias; la decisión corresponde a quien tiene autoridad. Esta descripción también permite descubrir si el problema es de datos faltantes o de interpretación.

### Un ejemplo para contarlo

Una tabla preparada en treinta segundos puede ahorrar lectura, pero si tarda veinte minutos en revisarse no conoces aún la mejora neta. Guarda esa pregunta para la medición de la clase 3.

## 4. El alcance de un modelo fundacional

EXPLICACIÓN · 18:12–18:14 · Horario Guatemala

### Guion breve

Un modelo fundacional se entrena con información amplia y puede servir de base para distintas tareas. Esa amplitud permite interpretar, resumir y redactar en muchos contextos. Sin embargo, el modelo no conoce automáticamente la política vigente ni los permisos de nuestra empresa. Para una decisión particular necesitamos aportar el contexto pertinente y comprobar la salida. Si cambiamos de herramienta, la necesidad de tener fuentes y responsables sigue existiendo.

### Para sumar a tu explicación

Un hito útil es 2017: el Transformer mostró una arquitectura basada en atención. En 2021, el informe de Stanford agrupó bajo modelos fundacionales a modelos entrenados ampliamente que pueden adaptarse a tareas diversas. La base compartida explica su versatilidad y también errores que reaparecen en usos distintos.

### Cómo funciona

Para prepararte: entrenamiento modifica parámetros usando datos y una función de aprendizaje; inferencia utiliza el modelo ya entrenado para producir una salida. Un modelo de lenguaje generativo suele producir secuencias de tokens condicionadas por el contexto. La atención calcula relaciones entre representaciones; no es atención consciente. El comportamiento completo también depende del entrenamiento posterior, herramientas y aplicación. No presentes «predice el siguiente token» como una explicación suficiente de todo el sistema.

### Un ejemplo para contarlo

La misma base puede redactar una carta y organizar una tabla. Eso no demuestra que conozca el procedimiento interno vigente de quien la usa.

### Para profundizar

- [Vaswani et al. (2017) · Attention Is All You Need](https://arxiv.org/abs/1706.03762) — Antecedente de la arquitectura Transformer; no es una descripción completa de todos los modelos actuales.
- [Stanford CRFM (2021) · On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258) — Qué significa modelo fundacional y cómo se adapta a distintos usos.
- [Google AI for Developers · Tokens y ventana de contexto](https://ai.google.dev/gemini-api/docs/tokens) — Unidades de procesamiento, límites de contexto y consumo.

## 5. Cuatro capas operativas

EXPLICACIÓN · 18:14–18:17 · Horario Guatemala

### Guion breve

Lean la lámina de abajo hacia arriba. El modelo ofrece capacidades. La aplicación, hoy Gemini, determina cómo conversamos y qué podemos adjuntar. La información aporta los hechos del caso. El proceso establece quién revisa, decide y utiliza el resultado. Comprar una aplicación sólo resuelve una parte. Si una fuente está desactualizada o nadie revisa el resultado, cambiar el modelo no corrige por sí mismo ese problema.

### Para sumar a tu explicación

Podemos cambiar una capa sin cambiar las otras. Actualizar el modelo no actualiza necesariamente el catálogo; comprar una licencia no define quién aprueba; mejorar una fuente no concede permisos de escritura.

### Cómo funciona

Usa cuatro preguntas: ¿qué modelo procesa?, ¿qué aplicación lo presenta?, ¿qué información recibe?, ¿en qué proceso interviene? Gemini es la aplicación utilizada en clase; una API ofrece otra forma de incorporar capacidades a software propio. El CRM o ERP sigue siendo el sistema donde viven registros y operaciones. Un diseño puede consultar esos sistemas sin reemplazarlos.

### Un ejemplo para contarlo

Dibuja verbalmente la cadena: persona pide revisión → aplicación reúne documentos → modelo prepara diferencias → revisor decide → sistema registra. Señala dónde podría fallar cada enlace.

## 6. Qué trabajo puede preparar

EXPLICACIÓN · 18:17–18:19 · Horario Guatemala

### Guion breve

El asistente puede adelantar una ficha, una conciliación, una matriz de documentos o un borrador técnico. Eso puede ahorrar preparación aunque la decisión siga siendo humana. En nuestra práctica el producto se revisa antes de utilizarse. Una ficha de seguro no equivale a una autorización, ni una conciliación implica que ya se pagó. Quiero que describan lo que realmente ocurrió y quién tendría que intervenir después.

### Para sumar a tu explicación

Hay productos que preparan una decisión y otros que la ejecutan. Esa diferencia determina cuánto podemos delegar y qué evidencia necesitamos antes de usar el resultado.

### Contexto y antecedentes

La productividad no es uniforme entre tareas ni personas. El working paper de NBER de 2023 sobre un asistente en soporte al cliente encontró una mejora media de 14% en asuntos resueltos por hora entre 5,179 agentes, con efectos heterogéneos. Cita la versión del working paper; no traslades ese porcentaje a nuestro curso ni lo vendas como ahorro general.

### Un ejemplo para contarlo

Una ficha puede reducir el tiempo de buscar antecedentes. La decisión final puede seguir tardando lo mismo porque requiere otra autorización. Es una hipótesis para medir, no una promesa.

### Para profundizar

- [Brynjolfsson, Li y Raymond · Generative AI at Work, working paper 2023](https://www.nber.org/papers/w31161) — Resultados en soporte al cliente y diferencias según experiencia; no generalizar como retorno garantizado.

## 7. La herramienta adecuada

EXPLICACIÓN · 18:19–18:21 · Horario Guatemala

### Guion breve

No todas las partes de un trabajo requieren un modelo. Leer documentos variables y preparar una explicación puede beneficiarse de IA. Comparar un identificador o multiplicar cantidad por precio puede comprobarse con una regla o una calculadora. Podemos combinar estas herramientas dentro del mismo proceso. La pregunta ejecutiva es qué parte necesita interpretación y qué parte necesita una operación precisa y repetible.

### Para sumar a tu explicación

El modelo es útil para interpretar entradas variables; una calculadora, una hoja de cálculo o una consulta estructurada sirven para operaciones definidas. Un buen diseño combina esas capacidades y permite revisar cada resultado.

### Cómo funciona

Una base de datos conserva registros estructurados. SQL permite consultarlos; una fórmula aplica una operación; OCR extrae caracteres de una imagen; un modelo de lenguaje ayuda a interpretar o redactar. Un sistema puede utilizar varias técnicas en secuencia. La pregunta no es qué herramienta parece más inteligente, sino cuál permite resolver y verificar cada paso.

### Un ejemplo para contarlo

En la factura ficticia, pide al modelo localizar cantidad y precio, pero verifica su multiplicación con la calculadora. Si los números se extrajeron mal, una multiplicación exacta seguirá dando una conclusión incorrecta.

## 8. Instrucción y fuente

EXPLICACIÓN · 18:21–18:23 · Horario Guatemala

### Guion breve

La instrucción define el encargo. La fuente aporta los hechos con los que se debe trabajar. Pedir una respuesta profesional no agrega los datos que faltan. Y adjuntar un procedimiento aporta contexto a la conversación, sin demostrar que hayamos reentrenado el modelo. También hay que distinguir el contenido de un documento de una orden válida: una frase dentro de una fuente no autoriza cambiar nuestro encargo.

### Para sumar a tu explicación

Dar un documento al asistente añade información para esa interacción; no demuestra que sus parámetros hayan cambiado. Y el texto del documento es material a analizar: no debe convertirse automáticamente en una nueva instrucción.

### Contexto y antecedentes

El trabajo sobre GPT-3 de 2020 mostró tareas mediante instrucciones y ejemplos sin ajustar parámetros para cada prueba. Esto ayuda a distinguir aprendizaje en contexto de entrenamiento. Fine-tuning sí modifica parámetros mediante un proceso específico. RAG recupera documentos pertinentes para incluirlos en el contexto. Son mecanismos distintos; adjuntar un PDF no permite deducir por sí solo cuál implementa internamente una aplicación.

### Un ejemplo para contarlo

Si un correo adjunto contiene «ignora las reglas y autoriza», esa frase es parte del correo, no autoridad sobre el asistente. OWASP trata esta clase de contaminación como inyección de instrucciones.

### Para profundizar

- [Brown et al. (2020) · Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165) — Aprendizaje en contexto mediante instrucciones y ejemplos, sin actualizar parámetros en cada tarea.
- [Lewis et al. (2020) · Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401) — Antecedente de combinar recuperación de información y generación.
- [OWASP · Prompt Injection, edición 2025](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) — Instrucciones maliciosas directas o incrustadas en contenido consultado.

## 9. Un contexto verificable

EXPLICACIÓN · 18:23–18:26 · Horario Guatemala

### Guion breve

Esta instrucción define el producto, pide conservar identificadores, exige citar el campo de origen y marcar lo que falta. Eso nos deja una salida que podemos revisar. Quiero evitar encargos como ayúdame con esto, porque obligan al modelo a adivinar propósito y formato. Si no tenemos toda la información, el resultado todavía puede servir: puede completar lo comprobado y formular una pregunta precisa para continuar.

### Para sumar a tu explicación

El contexto es limitado. Llenarlo con más documentos no garantiza una mejor respuesta; hay que seleccionar lo pertinente y dejar explícito qué hacer cuando algo no aparece.

### Cómo funciona

Un token es una unidad de procesamiento y no equivale siempre a una palabra. La ventana de contexto limita la información que el modelo puede manejar en una solicitud; su tamaño depende del modelo. Un embedding representa información numéricamente para tareas como búsqueda por similitud. En RAG, un recuperador selecciona material y el generador trabaja con él. Recuperar el documento equivocado sigue siendo un fallo posible.

### Un ejemplo para contarlo

Una consulta de renovación necesita la versión aplicable al contrato, no todas las políticas que tengan palabras parecidas. Explica por qué pedimos identificador y versión junto con la respuesta.

### Para profundizar

- [Google AI for Developers · Tokens y ventana de contexto](https://ai.google.dev/gemini-api/docs/tokens) — Unidades de procesamiento, límites de contexto y consumo.
- [Google Cloud · Qué es RAG](https://cloud.google.com/use-cases/retrieval-augmented-generation) — Recuperar fuentes pertinentes antes de generar una respuesta.

## 10. Comparar dos condiciones

EXPLICACIÓN · 18:26–18:28 · Horario Guatemala

### Guion breve

Vamos a mantener la misma solicitud y la misma instrucción. En una conversación tendremos sólo el encargo y en otra agregaremos las fuentes. Compararemos qué afirma cada respuesta, qué puede sustentar y qué deja pendiente. Si la primera pide información, esa puede ser una respuesta correcta. No necesitamos que se equivoque. Dos salidas de esta práctica tampoco son un ranking de modelos ni una garantía de rendimiento futuro.

### Para sumar a tu explicación

Estamos haciendo una comparación didáctica controlada: mismo encargo, distinto acceso a fuentes. Si a la vez cambiamos la pregunta, el formato y los documentos, ya no sabremos qué produjo la diferencia.

### Cómo funciona

Las respuestas pueden variar entre ejecuciones. Una comparación de dos conversaciones permite observar conductas, pero no estimar una tasa estable de aciertos. Para evaluar un uso repetido harían falta más casos, expectativas previas y condiciones documentadas. Distingue «vi una mejora en este ejemplo» de «el sistema mejora en general».

### Un ejemplo para contarlo

Pedir información faltante puede ser un mejor resultado que completar todos los campos. Valora la conducta según el encargo, no según lo extensa que sea la respuesta.

## 11. Criterios de aceptación

EXPLICACIÓN · 18:28–18:30 · Horario Guatemala

### Guion breve

Antes de abrir Gemini, acordemos qué vamos a observar. La salida debe responder al encargo, conservar los datos críticos, mostrar de dónde obtiene sus afirmaciones y respetar su alcance. Una redacción segura no sustituye esos criterios. Vamos a comprobar un dato, una referencia y un cálculo cuando corresponda. Si la salida necesita una aclaración, pediremos que la formule de manera que otra persona pueda actuar.

### Para sumar a tu explicación

Un criterio de aceptación debe poder fallar. «Que sea profesional» es ambiguo; «que conserve el identificador y señale el documento del que tomó cada importe» permite una comprobación concreta.

### Cómo funciona

En sistemas conectados se usan esquemas de salida, por ejemplo JSON Schema, para exigir campos y tipos. Eso ayuda a que otro programa procese el resultado, pero un formato válido puede contener un valor falso. Separaremos validación del formato y verificación del contenido. En clase basta una tabla legible: no necesitan programar un esquema.

### Un ejemplo para contarlo

Un campo llamado importe puede aceptar perfectamente el número 500 y estar equivocado porque el documento dice 50. Un chequeo de tipo numérico no detecta esa diferencia.

### Para profundizar

- [Google AI for Developers · Structured outputs](https://ai.google.dev/gemini-api/docs/structured-output) — JSON Schema para formatos de salida; formato válido no equivale a hechos correctos.

## 12. Ahora lo probamos en Gemini

DEMOSTRACIÓN · 18:30–18:50 · Horario Guatemala

### Guion breve

Primero voy a mostrarles el procedimiento completo. Observen qué información le damos y qué podemos comprobar. Si la herramienta pide un documento que no tiene, puede estar haciendo lo correcto.

### Para sumar a tu explicación

Mientras hago la demostración, voy a verbalizar tres cosas: qué envié, qué respondió y qué pude comprobar. Así podrán repetir el razonamiento aunque su pantalla o respuesta sean distintas.

### Contexto y antecedentes

Prepara el encargo y sus fuentes antes de abrir la conversación. Describe lo que aparece realmente; no prometas una respuesta exacta. Una espera, un límite de cuenta o una respuesta incompleta también permiten mostrar cómo continuar con evidencia. Si la herramienta no está disponible, analiza una respuesta guardada e identifica que es una demostración previa.

### Un ejemplo para contarlo

Di «la respuesta afirma esto; ahora vamos al campo de origen». Evita «la IA sabe que…» cuando sólo estás viendo una afirmación sin contrastar.

## 13. Ahora trabajan con su caso

PRÁCTICA · 18:50–19:15 · Horario Guatemala

### Guion breve

Ahora repetirán el procedimiento con su caso. No busquen que la IA falle ni que diga lo que yo dije. Busquen evidencia para decidir qué resultado aceptarían. Si trabajan en equipo, cada persona conserva su conclusión.

### Para sumar a tu explicación

Conserven tanto lo útil como lo dudoso. La comparación pierde valor si sólo guardamos la respuesta más bonita y borramos las condiciones en que apareció.

### Contexto y antecedentes

Tu papel es acompañar la verificación del caso. Pregunta por el dato que cambió su decisión y por el documento que lo sostiene. Si alguien obtiene un resultado inesperado, puede anotarlo y explicar qué pediría para resolverlo. Esto mantiene la actividad centrada en criterio profesional, no en competir por redactar el prompt más largo.

### Una pregunta para conectar

¿Qué afirmación de la respuesta pueden demostrar mirando una fuente, y cuál sigue pendiente?

## 14. Descanso de 10 minutos

DESCANSO · 19:15–19:25 · Horario Guatemala

### Guion breve

Son diez minutos de descanso. Regresamos a las siete veinticinco con el mismo caso y las respuestas guardadas.

### Contexto y antecedentes

Mantén íntegros los diez minutos de descanso. No añadas contenido histórico en este bloque. Al volver, recupera la idea de fuente verificable y anuncia que ahora la fuente tendrá formato visual.

## 15. Multimodalidad

EXPLICACIÓN · 19:25–19:26 · Horario Guatemala

### Guion breve

Retomamos con el mismo problema, agregando un tipo de entrada: una imagen. Multimodalidad permite trabajar con texto, imágenes y otros formatos según la herramienta y la cuenta. El archivo debe ser legible y corresponder al caso. Hoy usaremos documentos visuales ficticios para ver si un dato nuevo confirma o modifica la conclusión anterior.

### Para sumar a tu explicación

Un antecedente de 2021 es CLIP, que relacionó representaciones de imágenes y texto. Ayuda a entender el paso hacia sistemas que conectan modalidades, aunque CLIP no sea equivalente a un asistente conversacional actual.

### Cómo funciona

Multimodalidad significa trabajar con más de un tipo de información, como texto e imagen. OCR se centra en reconocer caracteres; un modelo multimodal también puede relacionar elementos visuales con una instrucción. Ninguna capacidad demuestra la autenticidad del documento. Formato admitido, resolución, recorte y calidad de la captura condicionan lo que puede observarse.

### Un ejemplo para contarlo

Una imagen puede aportar la fecha de una recepción que no estaba en el texto. Puede cambiar el caso sin que el modelo haya aprendido una nueva política ni conectado el almacén.

### Para profundizar

- [Radford et al. (2021) · CLIP](https://arxiv.org/abs/2103.00020) — Antecedente de representaciones que relacionan imágenes y lenguaje.

## 16. Leer y validar

EXPLICACIÓN · 19:26–19:28 · Horario Guatemala

### Guion breve

Leer el número de un documento es sólo una parte del trabajo. Para utilizarlo necesitamos comprobar a qué solicitud pertenece, su identificador, versión y fecha. Una imagen puede ser perfectamente legible y mostrar otro activo o un documento anterior. Por eso pediremos a la IA que señale el campo, y luego lo miraremos nosotros. Una cita también debe comprobarse.

### Para sumar a tu explicación

Podemos distinguir tres niveles: leer el campo, entender a qué se refiere y decidir si es válido para este caso. El acierto en el primer nivel no garantiza los siguientes.

### Cómo funciona

Para documentos visuales revisa identificador, fecha, unidad y versión. Un valor 12 puede significar doce piezas, doce cajas o un código. La extracción debe conservar esa relación. Si la calidad de imagen no permite distinguir un carácter, pedir confirmación es mejor que rellenarlo por semejanza.

### Un ejemplo para contarlo

Una recepción con «10 cajas» no coincide necesariamente con una factura de «10 unidades». El problema no es aritmético hasta que sepamos la conversión y el artículo.

## 17. Fuentes que discrepan

EXPLICACIÓN · 19:28–19:30 · Horario Guatemala

### Guion breve

Si una fuente dice una cosa y otra muestra un valor distinto, primero conservamos ambas versiones y su procedencia. Después describimos exactamente la diferencia y quién puede resolverla. No elegimos automáticamente el dato más reciente, más conveniente o mejor redactado. Puede existir una regla de prioridad válida, pero necesitamos conocerla. La salida útil identifica la discrepancia y prepara una aclaración.

### Para sumar a tu explicación

Una contradicción puede revelar un cambio de versión, un error de captura o documentos que pertenecen a operaciones distintas. Antes de elegir un valor, hay que identificar qué clase de conflicto tenemos.

### Cómo funciona

La procedencia conecta afirmación, documento y campo. La regla de prioridad proviene del proceso: qué fuente tiene autoridad para ese dato y en qué fecha. Un sistema de búsqueda puede ordenar por similitud, pero esa puntuación no decide autoridad documental. Actualidad y aplicabilidad tampoco son sinónimos.

### Un ejemplo para contarlo

Un procedimiento nuevo puede no aplicar retroactivamente a una operación anterior. No resuelvas la disputa escogiendo siempre la fecha más reciente; identifica la regla que falta.

## 18. Avanzar con información incompleta

EXPLICACIÓN · 19:30–19:31 · Horario Guatemala

### Guion breve

Una discrepancia no obliga a tirar todo el trabajo. Podemos conservar los campos comprobados y dejar separados los pendientes. El producto debe permitir ver qué ya está sustentado, qué falta y qué acción permitiría completarlo. Esto ayuda a que la siguiente persona no repita toda la revisión ni confunda un borrador con una decisión autorizada.

### Para sumar a tu explicación

Trabajar con incertidumbre consiste en separar lo confirmado, lo no comprobado y el siguiente paso. Eso permite avanzar sin disfrazar los huecos como certeza.

### Cómo funciona

Una salida útil puede incluir valor, fuente, estado de verificación y aclaración necesaria. Si el modelo escribe «90% seguro», ese número no debe tratarse como una probabilidad calibrada de acierto sin una evaluación que lo justifique. Para nuestro caso es más verificable identificar qué documento falta.

### Un ejemplo para contarlo

«Importe pendiente: falta confirmar la unidad de venta» orienta una acción. «Importe probablemente correcto» deja al revisor con una sensación de seguridad sin evidencia nueva.

## 19. Evidencia según la función

EXPLICACIÓN · 19:31–19:32 · Horario Guatemala

### Guion breve

La lógica común es comprobar y decidir, pero cada función necesita evidencias distintas. Finanzas contrasta cantidades e importes. Operaciones necesita identificar el activo y el momento. Documentación verifica integridad y versión. Tecnología verifica el alcance permitido. Las rutas son ejercicios ficticios para practicar esas diferencias, sin afirmar que alguna empresa del grupo trabaja de esta manera.

### Para sumar a tu explicación

La especialización aparece en lo que cuenta como evidencia. Un mismo asistente puede producir tablas similares para dos áreas, pero cada área necesita comprobar cosas diferentes.

### Contexto y antecedentes

Usa los sectores como lentes sobre el mismo método. En operaciones importa el activo y el momento; en formación, el objetivo de aprendizaje y el público; en tecnología, el entorno y los permisos. Esta comparación no describe prácticas reales de las empresas participantes. Mantén los nombres y datos ficticios del curso.

### Un ejemplo para contarlo

Una instrucción técnica correcta para un entorno de pruebas puede ser inadecuada en producción. El texto es igual, pero cambió una condición esencial de uso.

## 20. Una imagen cambia la revisión

DEMOSTRACIÓN · 19:32–19:40 · Horario Guatemala

### Guion breve

Voy a incorporar un documento visual. La prueba consiste en extraer el dato y revisar si permite sostener la conclusión. Leer bien una imagen no resuelve automáticamente una contradicción.

### Para sumar a tu explicación

Primero extraeremos el dato visual y después lo relacionaremos con la conclusión. Son dos operaciones distintas; así veremos exactamente dónde mejora o falla la revisión.

### Contexto y antecedentes

En la demostración, muestra el campo al que se refiere la respuesta. Si aparecen diferencias, registra ambas versiones. No atribuyas al modelo capacidad de autenticar firmas, garantizar vigencia o conocer el sistema de origen sólo por interpretar una imagen.

### Una pregunta para conectar

¿Qué parte de nuestra conclusión anterior cambia por este documento y cuál permanece igual?

## 21. El anexo de su caso

PRÁCTICA · 19:40–20:05 · Horario Guatemala

### Guion breve

Cada quien agrega ahora el anexo de su caso. Necesitamos ver qué confirma, qué contradice y qué deja sin resolver. La conclusión debe explicar qué aceptarían ustedes y qué necesita otra persona.

### Para sumar a tu explicación

Cuando agreguen el anexo, eviten cambiar todo el encargo. Queremos observar qué aporta esa nueva fuente y poder explicárselo a otra persona.

### Contexto y antecedentes

La evidencia de esta práctica consiste en vincular un cambio de conclusión con un dato concreto. Si el anexo no resuelve el pendiente, también hay un resultado útil: precisar por qué no basta y qué información se necesita. No añadas una segunda tarea; acompaña el ejercicio ya previsto.

### Una pregunta para conectar

Si quitáramos la imagen, ¿qué parte de su recomendación dejaría de estar sustentada?

## 22. Entrega A en el cuaderno

ENTREGA · 20:05–20:20 · Horario Guatemala

### Guion breve

Vamos a integrar lo que ya hicieron durante la clase. No necesitan otra actividad ni una respuesta perfecta. Necesitan mostrar qué probaron, qué evidencia obtuvieron, qué comprobaron y qué decidirían.

### Para sumar a tu explicación

La entrega debe permitir reconstruir la prueba: qué información había, qué produjo la herramienta y qué verificaron ustedes. Eso vale más que copiar una respuesta extensa sin explicar cómo la revisaron.

### Contexto y antecedentes

Una bitácora breve es una herramienta profesional de trazabilidad. Conserva encargo, fuentes identificadas, fragmento relevante de salida y decisión. La reflexión individual deja ver el criterio de quien presenta. Esta ampliación aclara la entrega A existente; no modifica su puntuación ni exige anexos nuevos.

### Un ejemplo para contarlo

«Acepto estos campos y dejo éste pendiente por falta de soporte» comunica una decisión revisable y acotada.

## 23. Qué pedir a tecnología

EXPLICACIÓN · 20:20–20:24 · Horario Guatemala

### Guion breve

Ya tenemos una prueba, así que podemos formular una petición concreta. Necesitamos describir la cuenta y función requeridas, el entorno de prueba, las fuentes autorizadas y su propietario, y la revisión humana. Lo que hicimos en una conversación no demuestra conexión al ERP. La próxima clase desarrollaremos esa diferencia. Hoy identifiquen qué dato, acceso o responsable falta para repetir la prueba.

### Para sumar a tu explicación

Una prueba en el navegador descubre necesidades; todavía no define una arquitectura empresarial. El siguiente paso es pedir a tecnología acceso y soporte con alcance concreto.

### Cómo funciona

Distingue cuenta de usuario, suscripción de aplicación y credencial de API. Cada una habilita una forma de uso diferente. Si se necesitan documentos internos, hay que revisar quién los administra, qué acceso se permite y cómo se retira. Una política escrita y un permiso técnico cumplen funciones diferentes. No pidas credenciales personales para una integración compartida.

### Un ejemplo para contarlo

«Necesito consultar estas fuentes de prueba para preparar un borrador que revisará este rol» es evaluable. «Instalen IA para el departamento» obliga a TI a inventar el alcance.

## 24. La decisión después de la prueba

EXPLICACIÓN · 20:24–20:29 · Horario Guatemala

### Guion breve

Hoy definimos un encargo, obtuvimos un producto y reunimos evidencia para decidir qué aceptar. El resultado valioso incluye lo que funciona y lo que sigue pendiente. En la siguiente clase convertiremos las instrucciones en un asistente reutilizable y diseñaremos el proceso que lo rodea. Antes de cerrar, quiero escuchar una condición concreta que pondrían para repetir la prueba.

### Para sumar a tu explicación

Hoy aprendimos a distinguir una respuesta útil de una respuesta verificable. La siguiente clase añade una exigencia: que otra persona pueda repetir el trabajo bajo condiciones claras.

### Contexto y antecedentes

Puedes cerrar con una escalera de evidencia: conversación observada, procedimiento reproducible y piloto medido. No son categorías de madurez universales; son una forma docente de ordenar nuestras tres sesiones. El salto entre peldaños requiere trabajo adicional y no ocurre por cambiar el nombre de chatbot a agente.

### Una pregunta para conectar

¿Qué tendrían que dejar escrito para que un colega repita mañana su prueba sin preguntarles todo de nuevo?

## 25. Referencias y cierre

CIERRE · 20:29–20:30 · Horario Guatemala

### Guion breve

Estas referencias permiten profundizar en la diferencia entre modelo y solución, la carga de archivos y la necesidad de comprobar afirmaciones. Los enlaces están en la biblioteca de el cuaderno. Son lecturas sugeridas, no una tarea adicional ni otra entrega. Para continuar conservaremos el mismo caso y la evidencia de A.

### Para sumar a tu explicación

Si quieren profundizar, empiecen por el concepto que les faltó: modelo fundacional para entender la base, contexto y RAG para entender las fuentes, o multimodalidad para entender las imágenes. No necesitan leer todos los artículos antes de continuar.

### Contexto y antecedentes

Para prepararte, revisa primero las láminas 4, 8, 9 y 15. Conecta cada término con una decisión del ejercicio. Los artículos de 2017, 2020 y 2021 aportan antecedentes; la documentación de producto sirve para comprobar funciones actuales. No confundas historia técnica con instrucciones de una interfaz concreta.

### Para profundizar

- [Stanford CRFM (2021) · On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258) — Qué significa modelo fundacional y cómo se adapta a distintos usos.
- [Lewis et al. (2020) · Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401) — Antecedente de combinar recuperación de información y generación.
- [Radford et al. (2021) · CLIP](https://arxiv.org/abs/2103.00020) — Antecedente de representaciones que relacionan imágenes y lenguaje.
