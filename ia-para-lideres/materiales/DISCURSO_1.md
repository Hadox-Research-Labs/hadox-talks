# Clase 1 · Preparar una decisión con IA

Guion del expositor · Hadox Talks · Nueva edición para revisión

## 1. IA para líderes

18:00–18:05 · APERTURA · 5 minutos

Pregunta: ¿Qué necesitas saber antes de decidir?

### Discurso

Imaginen que mañana tienen comité. Llegan más solicitudes y aumentan las quejas. Una persona pide contratar, otra propone automatizar y otra exige más datos. Ustedes deben preparar una decisión. Ésa será nuestra situación de trabajo.

Soy Edgar Valdés. Hoy vamos a entender de dónde vienen estas capacidades, quién las está utilizando y cómo podemos trabajar con ellas. Verán una demostración completa en Gemini antes de hacer su práctica. Primero construiremos un informe con texto; después incorporaremos una imagen que permite mirar el problema de otra forma.

Al terminar, cada persona tendrá un informe de una página desde su función y podrá explicar qué aportó la IA y qué decidió ella. En las siguientes clases convertiremos una parte del trabajo en un asistente y evaluaremos un piloto. Todo el expediente es ficticio. Para empezar, ¿qué información pedirían antes de recomendar contratar o automatizar? Escuchemos dos respuestas y conservémoslas para el cierre.

### Conducción

0–2 min: bienvenida, situación del comité y resultado de las tres clases.

2–4 min: escuchar dos necesidades de información; anotarlas sin abrir una actividad.

4–5 min: presentar el recorrido y conectar con la historia.

## 2. Cómo llegamos aquí

18:05–18:12 · EXPLICACIÓN · 7 minutos

Pregunta: ¿Por qué esta ola de IA cambia quién puede encargar trabajo?

### Discurso

La IA tiene una historia más larga que los chats que usamos hoy. La propuesta de Dartmouth de 1955, para un encuentro en 1956, ayudó a nombrar un campo de investigación. Durante décadas convivieron enfoques distintos: reglas que alguien escribe y métodos que aprenden patrones a partir de datos. Esa convivencia sigue siendo útil: una regla, una calculadora y un modelo pueden trabajar juntos.

En 2017, el Transformer presentó una arquitectura basada en atención. Es un mecanismo para relacionar representaciones de información, no atención consciente. En 2021, el informe de Stanford sobre modelos fundacionales describió bases entrenadas ampliamente que pueden adaptarse a muchos usos. La misma capacidad puede ayudar a redactar, sintetizar o interpretar una entrada, con resultados que dependen de la tarea y el contexto.

El cambio para un líder también está en la interfaz: puede expresar una necesidad con lenguaje cotidiano, aportar documentos y revisar un producto. Antes de decidir qué adoptar, necesitamos comprender qué parte hace la tecnología y qué parte aporta la organización. Piensen en una regla fija para calcular un descuento y en un encargo para explicar una situación a un comité. ¿Qué necesita cada uno? Esa comparación nos permite entrar al mapa actual sin convertirlo en una lista de marcas.

### Conducción

0–3 min: recorrer los hitos y separar reglas de aprendizaje.

3–5 min: contraste verbal entre calcular un descuento y redactar una explicación.

5–7 min: recoger una respuesta y conectar la base compartida con aplicaciones distintas.

Para ampliar: parámetros son valores aprendidos; entrenamiento los ajusta. Inferencia usa el modelo entrenado. Estos hitos no son una historia exhaustiva ni significan que todas las tecnologías sigan una sola línea evolutiva.

### Referencias

- [Dartmouth · Propuesta de 1955 para el encuentro de 1956](https://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html): Origen del nombre y del programa de investigación; no inicio de toda la computación inteligente.

- [Vaswani et al. (2017) · Attention Is All You Need](https://arxiv.org/abs/1706.03762): Antecedente de la arquitectura Transformer; no es una descripción completa de todos los modelos actuales.

- [Stanford CRFM (2021) · On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258): Qué significa modelo fundacional y cómo se adapta a distintos usos.

## 3. Quién desarrolla y dónde trabajamos

18:12–18:20 · EXPLICACIÓN · 8 minutos

Pregunta: ¿Qué estamos eligiendo: empresa, modelo o aplicación?

### Discurso

Separaremos tres nombres que suelen mezclarse. OpenAI desarrolla modelos de la familia GPT y ofrece ChatGPT como aplicación. Google desarrolla Gemini, nombre que también utiliza su aplicación. Anthropic desarrolla Claude y utiliza ese nombre en sus productos. No hace falta memorizar versiones para comprender la distinción.

El modelo aporta capacidades; la aplicación ofrece una interfaz, archivos, herramientas y condiciones de acceso. Por eso dos productos que utilizan una familia similar pueden permitir trabajos diferentes. Una licencia de aplicación tampoco es automáticamente acceso a una API para integrar software.

Para nuestro ejercicio usaremos Gemini. Revisaremos el nombre del modelo que muestra la cuenta y lo mantendremos en la comparación. Flash es la opción con la que estamos ensayando; si una cuenta muestra otra opción, hay que registrar cuál se usó y comparar bajo las mismas condiciones. No estamos haciendo un ranking entre proveedores.

Antes de contratar una solución, las preguntas útiles son: qué tarea resuelve, qué información admite, cómo se comprueba la salida y qué acceso permite la organización. Veamos ahora por qué empresas distintas eligen usos distintos.

### Conducción

0–3 min: explicar las tres columnas del mapa.

3–5 min: pedir un ejemplo de aplicación conocida y ubicarlo.

5–8 min: explicar los criterios de selección y anticipar la configuración visible de Gemini.

Los nombres y funciones cambian. La documentación enlazada sirve para revisar disponibilidad; no inferir el modelo activo en una cuenta a partir del catálogo API.

### Referencias

- [OpenAI · Catálogo de modelos](https://developers.openai.com/api/docs/models): Familia GPT y nombres de modelos; API y aplicación no son equivalentes.

- [Google · Catálogo de modelos Gemini](https://ai.google.dev/gemini-api/docs/models): Modelos y estados estable/preview; no identifica por sí solo el modelo activo en una cuenta.

- [Anthropic · Model system cards](https://www.anthropic.com/system-cards): Familia Claude y documentación por versión; no implica acceso universal.

- [Google · Subir y analizar archivos en Gemini](https://support.google.com/gemini/answer/14903178?hl=es): Carga de documentos e imágenes; disponibilidad y límites según cuenta.

## 4. La IA cambia el trabajo y los productos

18:20–18:30 · EXPLICACIÓN · 10 minutos

Pregunta: ¿Qué cambia para el empleado y qué cambia para el cliente?

### Discurso

Miremos dos usos públicos y luego nuestro ejercicio. BBVA describe aplicaciones de ChatGPT en trabajo interno, como localizar información, preparar documentos y apoyar marketing. Lo interesante para esta clase es el trabajo que se prepara y cómo se incorpora a una función; una cifra de licencias por sí sola no explica ese cambio.

Mercedes-Benz anunció capacidades de conversación sobre navegación y puntos de interés con Gemini sobre Vertex AI. Aquí la capacidad forma parte de la experiencia del cliente. Ese uso no demuestra conducción autónoma. Los dos ejemplos corresponden a descripciones de las organizaciones, no a resultados que podamos trasladar automáticamente a nuestra empresa.

En cada caso podemos preguntar: qué necesidad había, qué información utiliza la solución, qué producto entrega y quién responde por su uso. Ésas serán nuestras cuatro preguntas de lectura. En Nexo construiremos una versión pequeña de trabajo interno: un informe para dirección. No reproduciremos la infraestructura de un banco ni la de un vehículo.

Piensen en su función. ¿Les interesa preparar mejor un trabajo interno o incorporar una capacidad al servicio que recibe su usuario? Escuchemos dos ejemplos y señalemos qué cambia en los datos, responsables y producto esperado.

### Conducción

0–4 min: contar el caso de trabajo interno; señalar problema, herramienta y producto.

4–7 min: contrastar con experiencia de cliente.

7–10 min: dos intervenciones del grupo y síntesis de la decisión empresarial.

### Referencias

- [BBVA · Usos internos de ChatGPT, enero de 2025](https://www.bbva.com/es/innovacion/bbva-ya-incorpora-chatgpt-para-agilizar-consultas-legales-y-los-procesos-de-marketing/): Casos reportados por la empresa: documentación, consultas y marketing. No promesa de resultados para Nexo.

- [Mercedes-Benz · Conversación y navegación con Gemini](https://group.mercedes-benz.com/technology/innovation/collaboration/ai-powered-conversational-search.html): Anuncio de enero de 2025: Gemini sobre Vertex AI en el asistente MBUX. No conducción autónoma.

## 5. La región también está experimentando

18:30–18:40 · EXPLICACIÓN · 10 minutos

Pregunta: ¿Qué podemos aprender de experiencias cercanas sin suponer que son iguales?

### Discurso

El contexto regional permite hacer preguntas más cercanas. En Guatemala, Banrural reporta en su memoria 2025 un asistente generativo en WhatsApp y Messenger, apoyado en conocimiento de sus productos y servicios. En Costa Rica, TEC y CCSS documentan formación y desarrollo de prototipos para retos de salud pública. Son estados diferentes: una implementación reportada y una experiencia de formación y prototipado.

La diferencia importa al evaluar un caso. Una demostración enseña posibilidad; una implementación requiere operación; un resultado medido necesita condiciones y datos que podamos revisar. No vamos a atribuir a las personas del grupo participación en proyectos por el nombre de su empresa.

Nuestro expediente representa un servicio regional ficticio con operaciones en Guatemala, El Salvador y Costa Rica. No trae datos separados por país: no podremos comparar su desempeño nacional. Sí podremos trabajar necesidades compartidas, como solicitudes incompletas, claridad de información y coordinación.

Para aterrizarlo, nombren un documento o pregunta que atraviesa varias áreas de su organización. No necesitan revelar datos internos. Ese tipo de fricción explica por qué el mismo caso puede tener lecturas desde operaciones, finanzas, tecnología, salud administrativa o formación.

### Conducción

0–4 min: casos de Guatemala y Costa Rica, distinguiendo alcance de evidencia.

4–7 min: escuchar fricciones de coordinación sin datos reservados.

7–10 min: conectar con las cuatro perspectivas del expediente.

El estudio de UNIS es lectura opcional sobre ejecutivos; su muestra no representa estadísticamente a todas las empresas de Guatemala. El ejemplo regional Nexo es una construcción docente, no un caso atribuido.

### Referencias

- [Banrural · Memoria de labores 2025](https://www.banrural.com.gt/memoria2025): Implementación reportada de asistente generativo en WhatsApp y Messenger.

- [TEC y CCSS · Formación y prototipos, diciembre de 2025](https://www.tec.ac.cr/tec-ccss-impulsan-uso-inteligencia-artificial-resolver-retos-salud-publica): Trabajo institucional de formación y prototipos; no afirmar despliegue clínico generalizado.

- [UNIS Business School · Estudio empresarial de IA 2025](https://unisbs.edu.gt/wp-content/uploads/sites/3/2025/09/UBS_CIHE_ESTUDIOAI_2025.pdf): Encuesta a ejecutivos; muestra no representativa de todas las empresas de Guatemala.

## 6. Qué hace el modelo con nuestro encargo

18:40–18:50 · EXPLICACIÓN · 10 minutos

Pregunta: ¿Qué cambia cuando aportamos los documentos correctos?

### Discurso

El esquema distingue entrenamiento e inferencia. Entrenar modifica parámetros aprendidos; usar el modelo para producir una respuesta es inferencia. Al aportar un reporte a una conversación damos contexto. Ese acto, por sí solo, no demuestra que hayamos reentrenado el modelo.

Los modelos de lenguaje trabajan con tokens, unidades que pueden ser palabras, partes de palabras o signos. La atención calcula relaciones entre representaciones. Para nuestro trabajo interesa una consecuencia: el encargo y la información disponible influyen en lo que puede preparar la respuesta. Una solicitud de tono profesional no sustituye un dato que falta.

Ahora miren mi pantalla. Abro Gemini, verifico el modelo seleccionado y empiezo una conversación nueva. El primer botón de la mesa de trabajo copia un encargo completo sin documentos. El segundo repite exactamente ese encargo y agrega F1, F2 y el catálogo F3. Se pega en otra conversación con el mismo modelo. No necesitan reconstruir el prompt por partes.

Después del descanso descargaremos V1 y la adjuntaremos como imagen. Por ahora no cargamos el ZIP ni la imagen. Vamos a observar qué producto podemos preparar con la solicitud sola y qué mejora al incorporar el expediente.

### Conducción

0–4 min: explicar entrenamiento, inferencia y contexto con el diagrama.

4–7 min: mostrar chat nuevo, selector de modelo y campo de texto.

7–10 min: ubicar los botones completos de la mesa de trabajo; confirmar que todos saben dónde encontrarla.

### Referencias

- [Stanford CRFM (2021) · On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258): Qué significa modelo fundacional y cómo se adapta a distintos usos.

- [Google AI for Developers · Tokens y ventana de contexto](https://ai.google.dev/gemini-api/docs/tokens): Unidades de procesamiento, límites de contexto y consumo.

- [Brown et al. (2020) · Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165): Aprendizaje en contexto mediante instrucciones y ejemplos, sin actualizar parámetros en cada tarea.

- [Google · Subir y analizar archivos en Gemini](https://support.google.com/gemini/answer/14903178?hl=es): Carga de documentos e imágenes; disponibilidad y límites según cuenta.

## 7. Mañana hay comité

18:50–19:15 · DEMOSTRACIÓN · 25 minutos

Pregunta: ¿Qué aporta el expediente a la recomendación inicial?

### Discurso

Vamos a preparar una reunión. Nexo recibe más solicitudes y escucha quejas por demoras. Copiaré el encargo completo sin fuentes. Antes de enviarlo, hagan una predicción: ¿podrá recomendar algo y qué tendría que preguntar? Guardaremos la respuesta, incluso si pide información.

Ahora abriré otra conversación con el mismo modelo y usaré el botón con expediente. Incluye el reporte operativo, ocho comentarios seleccionados y el catálogo del servicio. Mientras responde, miraremos los documentos: cada semana entran y salen solicitudes, y la cola es lo que sigue abierto. Una solicitud cerrada puede haber entrado antes.

Compararemos un hallazgo, una hipótesis y una alternativa. La IA puede preparar una estructura útil para discutir, pero nosotros elegimos qué fundamento aceptar. Si escribe que algo no tiene costo, preguntaremos qué evidencia lo demuestra. Si propone cambiar la clasificación, evaluaremos qué necesita para probarlo.

El resultado es un informe para continuar una conversación de dirección. Antes de corregir estilo, comprobaré con ustedes un dato y la relación con su fuente. Después pediremos una mejora breve del texto. Identifiquen dónde hubo síntesis, comparación y redacción. Conserven esa observación para su propia prueba.

### Conducción

0–4 min: leer el encargo y recoger una predicción.

4–9 min: ejecutar SIN fuentes; guardar salida.

9–15 min: chat nuevo, mismo modelo, ejecutar CON expediente; guardar salida.

15–20 min: comparar un hallazgo, una hipótesis y una alternativa; comprobar la cola final.

20–25 min: mejorar una frase del informe y explicar el trabajo adelantado.

Si no hay acceso, usar la respuesta docente de referencia identificada como ejemplo, o analizar la demostración observada. No atribuirla a una ejecución real del alumno. No hace falta que la primera respuesta falle.

## 8. Descanso

19:15–19:25 · DESCANSO · 10 minutos

Pregunta: ¿Qué podría aportar una imagen?

### Discurso

Tenemos diez minutos de descanso. Regresamos a las siete veinticinco. Conserven las respuestas. Después incorporaremos una fuente visual para revisar la recomendación que acabamos de preparar.

### Conducción

Descanso completo de 19:15 a 19:25. No añadir una tarea durante la pausa.

## 9. Una imagen puede cambiar la pregunta

19:25–19:40 · DEMOSTRACIÓN · 15 minutos

Pregunta: ¿Qué cambia al conocer cómo se distribuye la cola?

### Discurso

El reporte escrito mostraba cuántas solicitudes quedaron abiertas. La imagen añade cómo se distribuyen en ese corte. Multimodalidad significa trabajar con distintos tipos de información; aquí relacionaremos texto e imagen. OCR reconoce caracteres y un modelo multimodal puede relacionar información visual con el encargo.

Descargo V1, adjunto el PNG a la conversación con expediente y pego el prompt visual. No le escribiré los números que quiero que lea. Primero observaremos qué campos extrajo y después comprobaremos la suma y su relación con F1.

Una distribución de estados puede orientar preguntas distintas: documentación, clasificación, revisión especializada o dependencia de un proveedor. No identifica por sí sola la causa de una demora. Quiero que vean qué alternativa gana fundamento, cuál necesita más información y qué parte del informe sigue siendo útil.

Miren el antes y el después. El producto no tiene que cambiar por completo; una pregunta mejor formulada ya puede mejorar la reunión. En su práctica conservarán una evidencia concreta del campo visual y del efecto que tuvo en su recomendación.

Una cita automática tampoco garantiza que la fuente sostenga la frase. En nuestra prueba, el modelo citó la imagen junto a datos históricos que venían de F1. Comprobaremos el dato y el documento: V1 describe el cierre de una semana, mientras F1 contiene la serie. Si una hipótesis sobre falta de personal aparece como certeza, la devolveremos a una pregunta por investigar.

### Conducción

0–3 min: explicar multimodalidad y mostrar cómo adjuntar un PNG.

3–7 min: adjuntar V1 y ejecutar revisión en el chat con expediente.

7–11 min: localizar categorías y suma; relacionarlas con la cola de F1.

11–15 min: comparar recomendaciones y guardar la versión revisada.

 Primero adjunta V1 y pide una lectura simple. Si la carga falla, vuelve a adjuntarla en ese mismo mensaje. Sólo después de verificar los números solicita la revisión del informe. Si la herramienta sigue sin verla, usa la transcripción explícita como contingencia y registra que no se completó la prueba multimodal.

### Referencias

- [Radford et al. (2021) · CLIP](https://arxiv.org/abs/2103.00020): Antecedente de representaciones que relacionan imágenes y lenguaje.

- [Google · Subir y analizar archivos en Gemini](https://support.google.com/gemini/answer/14903178?hl=es): Carga de documentos e imágenes; disponibilidad y límites según cuenta.

## 10. Un expediente, distintas decisiones

19:40–20:10 · PRÁCTICA · 30 minutos

Pregunta: ¿Qué necesita tu función para llevar una propuesta al comité?

### Discurso

Ahora trabajan ustedes. Elijan una perspectiva en la mesa de trabajo: dirección, operaciones, finanzas y control, o tecnología y conocimiento. Dentro de esta última pueden enfocar documentación, formación, datos o seguridad. Son formas de mirar el mismo expediente; pueden elegir por interés, sin quedar asignados por su cargo.

El botón sin fuentes ya incluye el encargo de esa perspectiva. Péguenlo en una conversación nueva. Guarden la salida. En otra conversación con el mismo modelo, peguen el botón con expediente. Comparen qué cambió. Después adjunten V1 a esa segunda conversación y utilicen el prompt visual.

El producto es un informe de una página para una decisión propia de su función. Anoten una capacidad que ayudó, un fragmento que mejoró con fuentes y un campo comprobado de la imagen. Si trabajan juntos, cada persona debe explicar su propia conclusión.

Quienes terminen antes pueden probar qué ocurre al cambiar una condición o pedir una salida estructurada, sin mezclar esa extensión con la comparación principal. Yo voy a acompañar dudas sobre las fuentes y la interpretación; no buscamos una respuesta idéntica a la del profesor.

### Conducción

0–3 min: elegir perspectiva y ubicar los tres botones.

3–10 min: ejecutar sin y con fuentes en chats separados; conservar ambas respuestas.

10–18 min: adjuntar V1, comprobar un campo y revisar informe.

18–25 min: decidir qué aceptar y qué falta investigar.

25–30 min: compartir un hallazgo breve y completar evidencia individual.

Profundización opcional: pedir la salida en una tabla de hallazgo/fuente/hipótesis/acción, o modificar una entrada en una tercera prueba y documentar qué cambió. No suma puntos por complejidad.

## 11. Tu decisión tiene que poder explicarse

20:10–20:25 · ENTREGA · 15 minutos

Pregunta: ¿Otra persona puede reconstruir tu razonamiento?

### Discurso

Vamos a organizar lo que ya hicieron. Entrega A conserva veinte puntos y cuatro criterios: relacionar necesidad con capacidad; comparar las respuestas; integrar fuentes; y comprobar el resultado y sus límites.

Registren cinco cosas: perspectiva y decisión buscada; encargo, modelo y condiciones; comparación sin y con fuentes; campo visual y su efecto; decisión propia y siguiente paso. Pueden acompañar el informe de una página con una bitácora breve y fragmentos de las salidas. No vuelvan a producir el trabajo desde cero.

Una conclusión distinta de la mía puede estar mejor sustentada. Lo que necesitamos ver es cómo llegaron a ella. Revisen especialmente si una causa está demostrada o es una hipótesis, y si un recurso que proponen tiene un costo conocido o pendiente. Escucharemos dos propuestas para comparar qué información necesita cada función.

### Conducción

0–5 min: completar los cinco campos con evidencia recogida.

5–10 min: revisar los cuatro criterios de A, cinco puntos cada uno.

10–15 min: escuchar dos recomendaciones y una pregunta pendiente de cada una.

## 12. Lo que llevarías a la siguiente reunión

20:25–20:30 · CIERRE · 5 minutos

Pregunta: ¿Qué parte del trabajo querrías repetir con un asistente?

### Discurso

Volvamos a la pregunta inicial. Ahora podemos llevar un hallazgo sustentado, una alternativa razonada y una pregunta que falta resolver. La IA ayudó a organizar y producir trabajo; su decisión depende de cómo interpretan y comprueban ese producto.

Dos preguntas finales: al aportar el expediente, ¿cambiamos el contexto o demostramos entrenamiento? Al agregar la imagen, ¿qué dato observamos y qué conclusión todavía necesita investigación? Escuchemos respuestas y aclaremos lo que haga falta.

La próxima clase tomaremos una parte concreta del proceso: preparar respuestas de servicio con instrucciones reutilizables, un catálogo y pruebas. Conservamos Nexo y la perspectiva elegida. Primero aprendimos a preparar una decisión; ahora diseñaremos cómo repetir una parte del trabajo.

### Conducción

0–2 min: recuperar dos preguntas del inicio.

2–4 min: comprobación oral de contexto y multimodalidad.

4–5 min: continuidad hacia el asistente de clase 2.

### Referencias

- [Stanford CRFM (2021) · On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258): Qué significa modelo fundacional y cómo se adapta a distintos usos.

- [Radford et al. (2021) · CLIP](https://arxiv.org/abs/2103.00020): Antecedente de representaciones que relacionan imágenes y lenguaje.
