# Clase 1 · Preparar una decisión con IA

Guion del expositor · Hadox Talks

## 1. IA para líderes

18:00–18:05 · 5 minutos

Pregunta: ¿Qué necesitas saber antes de decidir?

### Discurso

Imaginen que mañana tienen comité. Llegan más solicitudes y aumentan las quejas. Una persona pide contratar, otra propone automatizar y otra exige más datos. Ustedes deben preparar una decisión. Ésa será nuestra situación de trabajo.

Soy Edgar Valdés. Hoy vamos a recorrer una historia: cómo llegamos a hablar con una máquina, qué podemos aprender de empresas que coordinan viajes, estancias y pagos, y cómo aterrizar eso en una decisión de nuestra organización. Verán una demostración completa en Gemini antes de hacer su práctica. Primero construiremos un informe con texto; después incorporaremos una imagen que permite mirar el problema de otra forma.

Al terminar, cada persona tendrá un informe de una página desde su función y podrá explicar qué aportó la IA y qué decidió ella. En las siguientes clases convertiremos una parte del trabajo en un asistente y evaluaremos un piloto. Todo el expediente es ficticio. Para empezar, ¿qué información pedirían antes de recomendar contratar o automatizar? Escuchemos dos respuestas y conservémoslas para el cierre.

### Cómo conducirla

0–2 min: bienvenida, situación del comité y resultado de las tres clases.

2–4 min: escuchar dos necesidades de información; anotarlas sin abrir una actividad.

4–5 min: presentar el recorrido y conectar con la historia.

## 2. ¿Cómo llegamos a hablar con una máquina?

18:05–18:12 · 7 minutos

Pregunta: ¿Qué cambió para que podamos encargar trabajo en lenguaje cotidiano?

### Discurso

Antes de abrir un chat, quiero que miremos algo extraño: hoy podemos pedirle un informe a una máquina usando la misma lengua con la que pedimos un café. ¿Cómo llegamos hasta aquí? Miren las tres escenas. Son una ilustración conceptual, no fotografías históricas ni etapas que se hayan sustituido por completo.

Primera escena: Dartmouth. En 1955, John McCarthy y sus colegas propusieron un encuentro para el verano de 1956 con una pregunta enorme: ¿podemos describir aspectos de la inteligencia de manera suficientemente precisa para que una máquina los simule? Imaginen plantear esa ambición cuando trabajar con computadoras era algo muy distinto de abrir una aplicación. La aspiración era grande; construir sistemas útiles llevaría décadas de investigación, avances y límites.

Pensemos en una instrucción: si una compra supera cierta cantidad, pide autorización. Podemos escribir esa regla. Pero ahora intenten escribir todas las reglas para reconocer una queja, distinguir una fotografía o interpretar una frase ambigua. La lista empieza a crecer. Aprender patrones a partir de ejemplos ofrece otro camino. Estos enfoques conviven: en una empresa seguimos necesitando reglas explícitas junto a modelos aprendidos.

Segunda escena: en 2017, el trabajo del Transformer presentó una arquitectura basada en atención. Aprender patrones no nació ese año. El hito fue una forma de relacionar información que resultó muy influyente. Atención aquí significa un mecanismo matemático; no que la máquina tenga conciencia o interés por nuestro negocio.

Tercera escena: en 2021, investigadores de Stanford describieron los modelos fundacionales como bases entrenadas ampliamente que pueden adaptarse a diferentes tareas. Tampoco nacieron todos los chats ese año. La idea que nos interesa es que una misma base puede ayudarnos con varios trabajos: resumir, comparar, redactar o relacionar información, según sus capacidades.

Hagamos una comparación rápida: ¿qué es más fácil dejar en una regla, calcular un descuento o explicar por qué crecen las quejas? Escuchemos una respuesta. El descuento tiene condiciones que podemos definir; explicar las quejas necesita contexto y evidencia. Un modelo puede ayudar a preparar esa explicación, pero también puede proponer una causa que nadie ha demostrado.

Éste es el cambio que nos toca como líderes: podemos expresar un encargo en lenguaje cotidiano, aportar documentos y revisar un resultado. La capacidad cambia; el criterio sigue siendo nuestro. Antes de conocer a los desarrolladores, vamos a recorrer el mapa de capacidades del aprendizaje automático.

### Cómo conducirla

0–1 min: mostrar la imagen completa y plantear cómo llegamos a conversar con una máquina.

1–3 min: contar Dartmouth y contrastar una regla de autorización con aprender de ejemplos.

3–5 min: explicar Transformer y modelos fundacionales; aclarar que son hitos, no fechas de nacimiento de cada capacidad.

5–6 min: escuchar una respuesta a descuento frente a quejas; no abrir Gemini todavía.

6–7 min: rematar con criterio humano y pasar al mapa del machine learning.

Para ampliar: parámetros son valores aprendidos; entrenamiento los ajusta. Inferencia usa el modelo entrenado. Estos hitos no son una historia exhaustiva ni significan que todas las tecnologías sigan una sola línea evolutiva.

### Referencias

- [Dartmouth · Propuesta de 1955 para el encuentro de 1956](https://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html): Origen del nombre y del programa de investigación; no inicio de toda la computación inteligente.

- [Vaswani et al. (2017) · Attention Is All You Need](https://arxiv.org/abs/1706.03762): Antecedente de la arquitectura Transformer; no es una descripción completa de todos los modelos actuales.

- [Stanford CRFM (2021) · On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258): Qué significa modelo fundacional y cómo se adapta a distintos usos.

- [Dartmouth · Our Story](https://ai.dartmouth.edu/our-story): Propuesta de 1955 y encuentro de 1956. Contexto histórico de la investigación en IA.

## 3. Tu maestría de IA: capacidades y negocios

18:12–18:24 · 12 minutos

Pregunta: ¿Qué negocio o mejora empresarial puede construirse con cada capacidad?

### Discurso

Aquí tienen su maestría de inteligencia artificial, cortesía del Dr. Valdés. Tómenle una foto, porque este mapa les va a ayudar a entender qué les están vendiendo cuando alguien llega a su empresa diciendo que trae inteligencia artificial. Vamos a recorrerlo con una pregunta: ¿qué problema resuelve cada cosa y dónde podría estar el negocio?

En el centro está machine learning: sistemas que aprenden patrones a partir de datos o experiencia. Alrededor hay distintas maneras de aprender. Miren las ramas como un portafolio de capacidades. Una empresa puede necesitar varias a la vez, y también puede vender un servicio construido sobre una de ellas. Empecemos por la izquierda, en azul.

Aprendizaje no supervisado significa explorar estructura sin entregar una respuesta correcta para cada registro. En reducción de dimensionalidad, Meaningful compression consiste en conservar lo útil de muchos datos en una representación más pequeña. Imaginen una fábrica con cientos de señales: una oportunidad sería ofrecer monitoreo que reduzca esa complejidad y ayude a detectar cuándo cambia la operación. Structure Discovery busca relaciones que no estaban claras. Una consultora podría explorar patrones de devoluciones por producto, canal y temporada, para formular mejores preguntas sobre lo que está ocurriendo.

Feature Elicitation obtiene características que otro análisis pueda aprovechar. Una empresa que recibe registros de maquinaria podría convertirlos en señales útiles para modelos de mantenimiento. Big data Visualisation permite explorar muchas variables mediante una representación visible: un servicio de inteligencia comercial podría mostrar qué sucursales o productos se parecen y cuáles merecen investigación. Estas cuatro aplicaciones ayudan a representar y explorar información. Una proyección atractiva o un patrón curioso todavía necesita validación antes de convertirse en una decisión.

Bajemos a clustering. Customer Segmentation identifica grupos de comportamiento: una distribuidora puede descubrir que atender a todos sus compradores de la misma manera desperdicia oportunidades. Targeted Marketing utiliza esas diferencias para diseñar y probar campañas; ahí puede existir una agencia especializada que cobre por operar experimentos comerciales y medir su resultado. Recommender Systems ayuda a seleccionar productos o contenidos relevantes. Una tienda podría contratar recomendaciones como servicio. Netflix es un caso documentado de personalización, aunque su sistema combina métodos y no se explica sólo por clustering. El negocio propuesto sería facilitar una elección útil; habría que demostrar su efecto sobre compras, permanencia o satisfacción.

Pasemos a la derecha, en terracota. En aprendizaje supervisado tenemos ejemplos con resultados conocidos. Clasificación estima categorías o sus probabilidades. Fraud Detection identifica operaciones sospechosas: Stripe Radar es un ejemplo comercial documentado. Aquí se puede vender prevención de pérdidas, pero hay que medir también cuántos clientes legítimos estamos rechazando. Image Classification reconoce categorías en imágenes. Piensen en inspección de calidad como servicio: una cámara ayuda a identificar piezas que requieren revisión, con datos de defectos y condiciones reales de iluminación.

Customer Retention empieza por estimar riesgo de abandono. Una empresa de suscripción podría priorizar a quién contactar; un proveedor podría ofrecer ese análisis conectado a su CRM. Después debe probar qué intervención conserva clientes, porque predecir abandono no basta. Diagnostics permite clasificar posibles fallos: una empresa de mantenimiento podría ofrecer alertas sobre maquinaria usando síntomas y sensores. En ambos casos se necesita seguimiento de lo que ocurrió realmente para saber si el modelo acertó y si la acción valió la pena.

La siguiente rama es regresión: estimamos cantidades. Forecasting mira hacia adelante; una cadena comercial puede estimar demanda por tienda y producto para preparar compras. Podría contratar un servicio de planeación de inventario. Predictions es más amplio: una empresa de logística podría estimar duración o coste de un servicio antes de comprometerse. Uber ha documentado una plataforma para operar modelos de clasificación, regresión y pronóstico: detrás de una experiencia sencilla existe infraestructura para mantener predicciones en funcionamiento.

Process Optimization conecta esas estimaciones con decisiones: qué producir, cuándo y con qué recursos. Una consultora podría vender planeación operativa, combinando un pronóstico con un optimizador sujeto a restricciones. New Insights abre un servicio de análisis sobre qué variables se relacionan con retrasos, desperdicio o margen. Esa relación genera hipótesis; para afirmar que una intervención produce una mejora necesitamos evidencia adicional. Noten el cambio de conversación: ya podemos pedir una capacidad concreta, los datos que necesita y una medida de resultado.

Abajo, en ocre, está el aprendizaje por refuerzo. Un agente actúa en un entorno y aprende una política mediante recompensas. Real-Time Decisions nos lleva a actuar mientras cambian las condiciones. Piensen en un posible servicio de control energético: ajustar equipos manteniendo límites de operación. Hay experiencias documentadas de DeepMind con refrigeración; no significa que cualquier edificio pueda copiar el resultado. Tiempo real tampoco equivale automáticamente a refuerzo: muchas decisiones rápidas usan reglas u otros modelos.

Game AI es una puerta excelente para entender estrategia. Imaginen StarCraft: recursos limitados, un rival que no ven por completo y decisiones que darán resultado después. AlphaStar combinó aprendizaje a partir de partidas humanas y por refuerzo. Como oportunidad de negocio podemos imaginar oponentes de entrenamiento o simuladores para probar decisiones. La transferencia a una empresa necesita su propio diseño y validación. Un chatbot que representa un personaje no es automáticamente un agente entrenado por refuerzo.

Robot Navigation lleva el problema al mundo físico: un robot de almacén debe llegar a destino evitando obstáculos. Ahí puede haber un negocio de integración de flotas y soporte operativo. Skill Acquisition aprende habilidades reutilizables, como agarrar una pieza; un integrador puede especializarse en adaptar una célula robótica a diferentes productos. Learning Tasks reúne habilidades para resolver una tarea, como recoger, trasladar y colocar. Un proveedor podría vender una operación robótica por servicio. Son posibilidades empresariales, no una promesa de que baste descargar un modelo: necesitan sensores, integración, pruebas y mantenimiento.

Ahora ubiquemos lo que haremos hoy. Este mapa clásico no dibuja por separado el aprendizaje autosupervisado. En muchos modelos de lenguaje, el propio texto proporciona una señal para aprender a predecir tokens. Deep learning se refiere a modelos basados en redes neuronales profundas y puede aparecer en distintas familias. Los modelos fundacionales pueden servir de base para múltiples tareas. Al poner documentos en Gemini aportamos contexto a un modelo ya entrenado; no estamos construyendo desde cero todos los sistemas de este mapa.

Quédense con una aplicación que podría tener sentido en su organización. Si yo les pidiera defenderla ante dirección, ¿qué problema resolvería, qué datos tendrían y cómo comprobarían que mejora algo? Escuchemos una respuesta. Con este mapa en mente, ahora sí veamos quién desarrolla los modelos y dónde podemos empezar a utilizarlos.

### Cómo conducirla

0–1 min: abrir con «Aquí tienen su maestría de inteligencia artificial, cortesía del Dr. Valdés». Invitar a tomar una foto del mapa.

1–4 min: recorrer las siete aplicaciones de la rama azul y conectar cada una con una oportunidad de negocio.

4–7 min: recorrer las ocho aplicaciones de clasificación y regresión; distinguir ejemplo documentado de oportunidad propuesta.

7–10 min: recorrer las cinco aplicaciones de refuerzo, con una pausa breve en Game AI y estrategia.

10–11 min: ubicar los modelos fundacionales y la práctica de hoy dentro de este panorama.

11–12 min: recoger una oportunidad del grupo y pasar a quién desarrolla los modelos. Las ampliaciones son opcionales.

Los negocios propuestos son ejemplos didácticos. Los casos empresariales documentados tienen referencias. Si sobra tiempo, elige una ampliación del banco bajo el discurso; sus minutos se añaden sólo si los tienes disponibles.

Banco de negocios y ampliaciones: [NEGOCIOS_Y_RESERVA_ML.md](NEGOCIOS_Y_RESERVA_ML.md). En la web aparece desplegable bajo el discurso de esta lámina.

### Referencias

- [Google · Introducción al aprendizaje automático](https://developers.google.com/machine-learning/intro-to-ml/what-is-ml): Tipos de aprendizaje y formulación de tareas.

- [Scikit-learn · Descomposición y reducción de dimensiones](https://scikit-learn.org/stable/modules/decomposition.html): Representaciones compactas, extracción de características y límites.

- [Scikit-learn · Clustering](https://scikit-learn.org/stable/modules/clustering.html): Agrupación por similitud y supuestos de los métodos.

- [DeepMind · AlphaStar en StarCraft II](https://deepmind.google/blog/alphastar-mastering-the-real-time-strategy-game-starcraft-ii/): Información incompleta, estrategia y combinación de aprendizaje supervisado y por refuerzo.

- [DeepMind · From motor control to embodied intelligence](https://deepmind.google/blog/from-motor-control-to-embodied-intelligence): Habilidades motoras y tareas en entornos físicos.

- [Stanford CRFM · On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258): Modelos fundacionales y relación con aprendizaje autosupervisado.

- [Orange · Exploración visual y modelos](https://orangedatamining.com/widget-catalog/): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Scikit-learn · Guía de métodos](https://scikit-learn.org/stable/user_guide): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [PyTorch · Transfer learning para imágenes](https://docs.pytorch.org/tutorials/beginner/transfer_learning_tutorial.html): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Netflix · Cómo funcionan las recomendaciones](https://help.netflix.com/en/node/100639): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Stripe · Guía técnica de Radar](https://stripe.com/guides/primer-on-machine-learning-for-fraud-protection): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Uber · Michelangelo](https://www.uber.com/us/en/blog/michelangelo-machine-learning-platform/): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Amazon Science · Inspección visual](https://www.amazon.science/blog/making-automated-visual-inspection-systems-practical): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [DeepMind · Refrigeración de centros de datos, 2016](https://deepmind.google/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40/): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [DeepMind · AlphaStar, octubre de 2019](https://deepmind.google/blog/alphastar-grandmaster-level-in-starcraft-ii-using-multi-agent-reinforcement-learning/): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Gymnasium · Entornos de aprendizaje por refuerzo](https://gymnasium.farama.org/): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Stable-Baselines3 · Algoritmos de refuerzo](https://stable-baselines3.readthedocs.io/en/master/): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [NVIDIA Isaac Sim · Simulación robótica](https://developer.nvidia.com/isaac/sim): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Google OR-Tools · Optimización](https://developers.google.com/optimization): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [McCarthy et al. · Propuesta de Dartmouth, 1955](https://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Krizhevsky, Sutskever y Hinton · ImageNet, 2012](https://www.cs.toronto.edu/~hinton/absps/imagenet.pdf): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Vaswani et al. · Attention Is All You Need, 2017](https://arxiv.org/abs/1706.03762): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [DeepMind · AlphaGo](https://deepmind.google/research/alphago/): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

## 4. Quién desarrolla y dónde trabajamos

18:24–18:32 · 8 minutos

Pregunta: ¿Qué estamos eligiendo: empresa, modelo o aplicación?

### Discurso

Separaremos tres nombres que suelen mezclarse. OpenAI desarrolla modelos de la familia GPT y ofrece ChatGPT como aplicación. Google desarrolla Gemini, nombre que también utiliza su aplicación. Anthropic desarrolla Claude y utiliza ese nombre en sus productos. No hace falta memorizar versiones para comprender la distinción.

El modelo aporta capacidades; la aplicación ofrece una interfaz, archivos, herramientas y condiciones de acceso. Por eso dos productos que utilizan una familia similar pueden permitir trabajos diferentes. Una licencia de aplicación tampoco es automáticamente acceso a una API para integrar software.

Para nuestro ejercicio usaremos Gemini. Revisaremos el nombre del modelo que muestra la cuenta y lo mantendremos en la comparación. Flash es la opción con la que estamos ensayando; si una cuenta muestra otra opción, hay que registrar cuál se usó y comparar bajo las mismas condiciones. No estamos haciendo un ranking entre proveedores.

Antes de contratar una solución, las preguntas útiles son: qué tarea resuelve, qué información admite, cómo se comprueba la salida y qué acceso permite la organización. Veamos ahora por qué empresas distintas eligen usos distintos.

### Cómo conducirla

0–3 min: explicar las tres columnas del mapa.

3–5 min: pedir un ejemplo de aplicación conocida y ubicarlo.

5–8 min: explicar los criterios de selección y anticipar la configuración visible de Gemini.

Los nombres y funciones cambian. La documentación enlazada sirve para revisar disponibilidad; no inferir el modelo activo en una cuenta a partir del catálogo API.

### Referencias

- [OpenAI · Catálogo de modelos](https://developers.openai.com/api/docs/models): Familia GPT y nombres de modelos; API y aplicación no son equivalentes.

- [Google · Catálogo de modelos Gemini](https://ai.google.dev/gemini-api/docs/models): Modelos y estados estable/preview; no identifica por sí solo el modelo activo en una cuenta.

- [Anthropic · Model system cards](https://www.anthropic.com/system-cards): Familia Claude y documentación por versión; no implica acceso universal.

- [Google · Subir y analizar archivos en Gemini](https://support.google.com/gemini/answer/14903178?hl=es): Carga de documentos e imágenes; disponibilidad y límites según cuenta.

## 5. ¿Qué conectan Uber, Airbnb y Visa?

18:32–18:38 · 6 minutos

Pregunta: ¿Qué trabajo de coordinación podríamos preparar mejor con IA?

### Discurso

Miren estos tres nombres: Uber, Airbnb y Visa. A primera vista hablamos de viajes, estancias y pagos. ¿Qué tienen en común? Les doy diez segundos. Escuchemos dos ideas antes de explicar la imagen.

Imaginen que llegan a una ciudad que no conocen: necesitan trasladarse, encontrar dónde quedarse y pagar. Detrás de esos actos cotidianos hay personas que deben encontrarse, información que debe circular y reglas que permiten coordinar el servicio. Esa coordinación es la idea común que quiero que observemos; cada empresa tiene un negocio y una tecnología diferentes.

Uber describe el emparejamiento entre pasajeros y conductores como una parte central de su plataforma. Importan la disponibilidad y las condiciones del viaje. Airbnb conecta anfitriones y huéspedes; disponibilidad, condiciones y mecanismos de confianza ayudan a que una estancia pueda acordarse. Visa opera una red de pagos que conecta a participantes como comercios e instituciones financieras. Una tarjeta visible es sólo una parte de lo que permite una transacción.

En mis charlas de transformación digital utilizaba esta pregunta para mirar más allá de la aplicación que vemos. Aquí nos sirve para preguntar algo muy concreto: ¿qué información y qué coordinación hacen posible el servicio de ustedes? No estamos diciendo que esos tres negocios sean modelos generativos, ni que todas sus funciones dependan de un chat.

Ahora añadamos una capacidad: una herramienta que puede preparar un resumen, clasificar una solicitud o redactar un borrador a partir de información disponible. Eso abre posibilidades para el trabajo entre esas conexiones. Es una analogía de negocio que vamos a probar en pequeño, no una promesa de que copiar una aplicación reproduce una plataforma.

Veamos dos casos de IA que ya tenemos documentados en las referencias. BBVA describe usos de ChatGPT en trabajo interno, como preparar documentos y apoyar distintas funciones. Mercedes-Benz anunció capacidades conversacionales para navegación y puntos de interés con Gemini sobre Vertex AI. Uno nos acerca al trabajo del equipo; el otro, a una interacción con el cliente. El segundo caso no significa que el modelo conduzca el vehículo.

En ambos conviene mirar cuatro cosas: necesidad, información, resultado y responsable. Nexo, nuestro caso ficticio, empieza en algo más cercano: varias áreas tienen piezas de información y alguien necesita preparar una decisión. ¿En qué parte de su organización ocurre eso cada semana? Escuchemos dos ejemplos breves. Con esa pregunta pasamos del panorama global a nuestra región.

### Cómo conducirla

0–1 min: observar las conexiones y escuchar una respuesta.

1–3 min: explicar coordinación, información y reglas con Uber, Airbnb y Visa.

3–5 min: enlazar con los usos documentados de BBVA y Mercedes-Benz.

5–6 min: recoger una fricción organizacional y pasar al contexto regional.

### Referencias

- [BBVA · Usos internos de ChatGPT, enero de 2025](https://www.bbva.com/es/innovacion/bbva-ya-incorpora-chatgpt-para-agilizar-consultas-legales-y-los-procesos-de-marketing/): Casos reportados por la empresa: documentación, consultas y marketing. No promesa de resultados para Nexo.

- [Mercedes-Benz · Conversación y navegación con Gemini](https://group.mercedes-benz.com/technology/innovation/collaboration/ai-powered-conversational-search.html): Anuncio de enero de 2025: Gemini sobre Vertex AI en el asistente MBUX. No conducción autónoma.

- [Uber · Marketplace Matching](https://www.uber.com/us/en/marketplace/matching/): Cómo la plataforma empareja pasajeros y conductores. Ejemplo de coordinación, no demostración de IA generativa.

- [Airbnb · A People-to-People Marketplace](https://news.airbnb.com/en-au/airbnb-a-people-to-people-marketplace): Descripción del mercado que conecta anfitriones y huéspedes. Fuente histórica sobre su funcionamiento, no cifras actuales.

- [Visa · VisaNet](https://corporate.visa.com/en/about-visa/visanet.html): Red de pagos y conexión con instituciones y participantes. Base para la analogía de coordinación.

## 6. La región también está experimentando

18:38–18:44 · 6 minutos

Pregunta: ¿Qué podemos aprender de experiencias cercanas sin suponer que son iguales?

### Discurso

Acerquemos el mapa. Es fácil escuchar un caso de una empresa global y pensar: eso requiere un presupuesto que aquí no tenemos. Por eso quiero que observemos usos de nuestra región y distingamos exactamente qué está documentado.

El contexto regional permite hacer preguntas más cercanas. En Guatemala, Banrural reporta en su memoria 2025 un asistente generativo en WhatsApp y Messenger, apoyado en conocimiento de sus productos y servicios. En Costa Rica, TEC y CCSS documentan formación y desarrollo de prototipos para retos de salud pública. Son estados diferentes: una implementación reportada y una experiencia de formación y prototipado.

La diferencia importa al evaluar un caso. Una demostración enseña posibilidad; una implementación requiere operación; un resultado medido necesita condiciones y datos que podamos revisar. No vamos a atribuir a las personas del grupo participación en proyectos por el nombre de su empresa.

Nuestro expediente representa un servicio regional ficticio con operaciones en Guatemala, El Salvador y Costa Rica. No trae datos separados por país: no podremos comparar su desempeño nacional. Sí podremos trabajar necesidades compartidas, como solicitudes incompletas, claridad de información y coordinación.

Para aterrizarlo, piensen en la última vez que un cliente tuvo que contar su problema dos veces porque cambió de área. ¿Qué información se perdió en ese paso? Escuchemos un ejemplo breve y nombremos el documento o la pregunta que atraviesa esas áreas. No necesitan revelar datos internos. Ese tipo de fricción explica por qué el mismo caso puede tener lecturas desde operaciones, finanzas, tecnología, salud administrativa o formación.

### Cómo conducirla

0–1 min: pasar del panorama global a una fricción reconocible.

1–4 min: contrastar Banrural y TEC/CCSS; distinguir implementación de prototipado.

4–5 min: escuchar un ejemplo de información perdida entre áreas.

5–6 min: conectar con Nexo y el contexto que necesita el modelo.

El estudio de UNIS es lectura opcional sobre ejecutivos; su muestra no representa estadísticamente a todas las empresas de Guatemala. El ejemplo regional Nexo es una construcción docente, no un caso atribuido.

### Referencias

- [Banrural · Memoria de labores 2025](https://www.banrural.com.gt/memoria2025): Implementación reportada de asistente generativo en WhatsApp y Messenger.

- [TEC y CCSS · Formación y prototipos, diciembre de 2025](https://www.tec.ac.cr/tec-ccss-impulsan-uso-inteligencia-artificial-resolver-retos-salud-publica): Trabajo institucional de formación y prototipos; no afirmar despliegue clínico generalizado.

- [UNIS Business School · Estudio empresarial de IA 2025](https://unisbs.edu.gt/wp-content/uploads/sites/3/2025/09/UBS_CIHE_ESTUDIOAI_2025.pdf): Encuesta a ejecutivos; muestra no representativa de todas las empresas de Guatemala.

## 7. Qué hace el modelo con nuestro encargo

18:44–18:50 · 6 minutos

Pregunta: ¿Qué cambia cuando aportamos los documentos correctos?

### Discurso

El esquema distingue entrenamiento e inferencia. Entrenar modifica parámetros aprendidos; usar el modelo para producir una respuesta es inferencia. Al aportar un reporte a una conversación damos contexto. Ese acto, por sí solo, no demuestra que hayamos reentrenado el modelo.

Los modelos de lenguaje trabajan con tokens, unidades que pueden ser palabras, partes de palabras o signos. La atención calcula relaciones entre representaciones. Para nuestro trabajo interesa una consecuencia: el encargo y la información disponible influyen en lo que puede preparar la respuesta. Una solicitud de tono profesional no sustituye un dato que falta.

Ahora miren mi pantalla. Abro Gemini, verifico el modelo seleccionado y empiezo una conversación nueva. El primer botón de la mesa de trabajo copia un encargo completo sin documentos. El segundo repite exactamente ese encargo y agrega F1, F2 y el catálogo F3. Se pega en otra conversación con el mismo modelo. No necesitan reconstruir el prompt por partes.

Después del descanso descargaremos V1 y la adjuntaremos como imagen. Por ahora no cargamos el ZIP ni la imagen. Vamos a observar qué producto podemos preparar con la solicitud sola y qué mejora al incorporar el expediente.

### Cómo conducirla

0–2 min: explicar entrenamiento, inferencia, tokens y contexto.

2–4 min: mostrar chat nuevo y selector de modelo.

4–6 min: ubicar los encargos completos y preparar la demostración.

### Referencias

- [Stanford CRFM (2021) · On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258): Qué significa modelo fundacional y cómo se adapta a distintos usos.

- [Google AI for Developers · Tokens y ventana de contexto](https://ai.google.dev/gemini-api/docs/tokens): Unidades de procesamiento, límites de contexto y consumo.

- [Brown et al. (2020) · Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165): Aprendizaje en contexto mediante instrucciones y ejemplos, sin actualizar parámetros en cada tarea.

- [Google · Subir y analizar archivos en Gemini](https://support.google.com/gemini/answer/14903178?hl=es): Carga de documentos e imágenes; disponibilidad y límites según cuenta.

## 8. Mañana hay comité

18:50–19:15 · 25 minutos

Pregunta: ¿Qué aporta el expediente a la recomendación inicial?

### Discurso

Ahora ustedes son el comité. Yo voy a pedirle una recomendación a Gemini. Antes de verla, piensen: ¿qué tendría que mostrarles para que ustedes la aceptaran? No necesitan abrir nada todavía; primero observamos juntos.

Nexo recibe más solicitudes y escucha quejas por demoras. Una persona quiere contratar; otra quiere automatizar. Voy a copiar el encargo completo sin expediente y enviarlo en un chat nuevo. Hagan una predicción: ¿nos dará una recomendación, pedirá datos o hará ambas cosas?

Miremos la respuesta que realmente produjo. ¿La llevarían así al comité? Levanten la mano si sí; ahora quienes pedirían más información. Escuchemos una razón de cada lado. Si la respuesta es prudente y pregunta por los datos, reconozcámoslo: detectar lo que falta también es útil. Si propone acciones, elijamos una frase y preguntemos qué la sostiene. No necesitamos que el modelo falle para aprender.

Ahora viene la comparación. Abriré otra conversación con el mismo modelo y pegaré el mismo encargo con F1, F2 y F3. El botón ya incluye los documentos. Lo que cambiamos es el contexto disponible; todavía no hemos demostrado ningún reentrenamiento. Mientras responde, observen conmigo las entradas, los cierres y las solicitudes que siguen abiertas. Una solicitud cerrada puede haber llegado en una semana anterior.

Busquemos el momento en que la respuesta deja de ser una recomendación general y empieza a hablar de este expediente. ¿Qué frase mejoró gracias a una fuente? ¿Qué sigue siendo sólo una hipótesis? Comparemos un hallazgo, una hipótesis y una alternativa. El objetivo es preparar una conversación de dirección con mejor fundamento.

Vamos a comprobar un dato con su fuente y una operación con calculadora. Si afirma que una medida no cuesta nada, preguntaremos dónde está ese costo documentado. Si la información no permite elegir una causa, dejaremos una pregunta pendiente. Una redacción elegante puede ayudar a comunicar; la evidencia es lo que permite defender lo que estamos diciendo.

Pidamos una mejora breve del informe y conservemos las dos versiones. Ustedes han visto síntesis, comparación y redacción, pero también revisión humana. Antes del descanso, elijan una conclusión provisional. Al regresar aparecerá una fuente visual adicional: veremos si fortalece su recomendación o les obliga a cambiar la pregunta.

### Cómo conducirla

0–3 min: asignar al grupo el papel de comité y escuchar una predicción; el docente controla Gemini.

3–7 min: ejecutar sin expediente; votación a mano alzada y dos razones. Una respuesta prudente también cuenta.

7–13 min: abrir otro chat con el mismo modelo y ejecutar con expediente; leer las fuentes durante la generación.

13–20 min: comparar hallazgo, hipótesis y alternativa; comprobar un dato y un cálculo.

20–23 min: pedir una mejora y conservar ambas versiones.

23–25 min: fijar una conclusión provisional y anunciar la revelación visual tras el descanso.

Si no hay acceso, usar la respuesta docente de referencia identificada como ejemplo, o analizar la demostración observada. No atribuirla a una ejecución real del alumno. No hace falta que la primera respuesta falle.

## 9. Descanso

19:15–19:25 · 10 minutos

Pregunta: ¿Qué podría aportar una imagen?

### Discurso

Tenemos diez minutos de descanso. Regresamos a las siete veinticinco. Conserven las respuestas. Después incorporaremos una fuente visual para revisar la recomendación que acabamos de preparar.

### Cómo conducirla

Descanso completo de 19:15 a 19:25. No añadir una tarea durante la pausa.

## 10. Una imagen puede cambiar la pregunta

19:25–19:40 · 15 minutos

Pregunta: ¿Qué cambia al conocer cómo se distribuye la cola?

### Discurso

Antes de volver a Gemini, abran conmigo la imagen V1 de la mesa de trabajo. Tienen diez segundos para observarla: si tuvieran que intervenir en una parte del proceso, ¿dónde empezarían? Todavía no consulten al modelo. Escuchemos dos respuestas y el dato que cada persona utilizó.

El reporte escrito mostraba cuántas solicitudes quedaron abiertas. La imagen añade cómo se distribuyen en ese corte. Multimodalidad significa trabajar con distintos tipos de información; aquí relacionaremos texto e imagen. OCR reconoce caracteres y un modelo multimodal puede relacionar información visual con el encargo.

Descargo V1, adjunto el PNG a la conversación con expediente y pego el prompt visual. No le escribiré los números que quiero que lea. Primero observaremos qué campos extrajo y después comprobaremos la suma y su relación con F1.

Una distribución de estados puede orientar preguntas distintas: documentación, clasificación, revisión especializada o dependencia de un proveedor. No identifica por sí sola la causa de una demora. Quiero que vean qué alternativa gana fundamento, cuál necesita más información y qué parte del informe sigue siendo útil.

Miren el antes y el después. El producto no tiene que cambiar por completo; una pregunta mejor formulada ya puede mejorar la reunión. En su práctica conservarán una evidencia concreta del campo visual y del efecto que tuvo en su recomendación.

Una cita automática tampoco garantiza que la fuente sostenga la frase. En nuestra prueba, el modelo citó la imagen junto a datos históricos que venían de F1. Comprobaremos el dato y el documento: V1 describe el cierre de una semana, mientras F1 contiene la serie. Si una hipótesis sobre falta de personal aparece como certeza, la devolveremos a una pregunta por investigar.

Volvamos a lo que dijeron al mirar la imagen. ¿Cambió la prioridad, apareció una duda o sólo se confirmó lo que pensaban? Cualquiera de las tres cosas puede ser un resultado útil. El momento importante es poder explicar qué dato cambió su juicio. Ahora ya pueden repetir el recorrido desde su propia función.

### Cómo conducirla

0–2 min: abrir V1, dar diez segundos de observación y escuchar dos lecturas con su dato.

2–4 min: explicar multimodalidad y distinguir leer campos de inferir causas.

4–9 min: adjuntar V1 y ejecutar lectura; comprobar 88 = 36 + 28 + 16 + 8 antes de revisar la recomendación.

9–13 min: ejecutar revisión del informe, contrastar fuentes y corregir atribuciones.

13–15 min: volver a las respuestas iniciales y explicar qué cambió; dar paso a la práctica.

 Primero adjunta V1 y pide una lectura simple. Si la carga falla, vuelve a adjuntarla en ese mismo mensaje. Sólo después de verificar los números solicita la revisión del informe. Si la herramienta sigue sin verla, usa la transcripción explícita como contingencia y registra que no se completó la prueba multimodal.

### Referencias

- [Radford et al. (2021) · CLIP](https://arxiv.org/abs/2103.00020): Antecedente de representaciones que relacionan imágenes y lenguaje.

- [Google · Subir y analizar archivos en Gemini](https://support.google.com/gemini/answer/14903178?hl=es): Carga de documentos e imágenes; disponibilidad y límites según cuenta.

## 11. Un expediente, distintas decisiones

19:40–20:10 · 30 minutos

Pregunta: ¿Qué necesita tu función para llevar una propuesta al comité?

### Discurso

Ahora trabajan ustedes. Elijan una perspectiva en la mesa de trabajo: dirección, operaciones, finanzas y control, o tecnología y conocimiento. Dentro de esta última pueden enfocar documentación, formación, datos o seguridad. Son formas de mirar el mismo expediente; pueden elegir por interés, sin quedar asignados por su cargo.

El botón sin fuentes ya incluye el encargo de esa perspectiva. Péguenlo en una conversación nueva. Guarden la salida. En otra conversación con el mismo modelo, peguen el botón con expediente. Comparen qué cambió. Después adjunten V1 a esa segunda conversación y utilicen el prompt visual.

El producto es un informe de una página para una decisión propia de su función. Anoten una capacidad que ayudó, un fragmento que mejoró con fuentes y un campo comprobado de la imagen. Si trabajan juntos, cada persona debe explicar su propia conclusión.

Quienes terminen antes pueden probar qué ocurre al cambiar una condición o pedir una salida estructurada, sin mezclar esa extensión con la comparación principal. Yo voy a acompañar dudas sobre las fuentes y la interpretación; no buscamos una respuesta idéntica a la del profesor.

### Cómo conducirla

0–3 min: elegir perspectiva y ubicar los tres botones.

3–10 min: ejecutar sin y con fuentes en chats separados; conservar ambas respuestas.

10–18 min: adjuntar V1, comprobar un campo y revisar informe.

18–25 min: decidir qué aceptar y qué falta investigar.

25–30 min: compartir un hallazgo breve y completar evidencia individual.

Profundización opcional: pedir la salida en una tabla de hallazgo/fuente/hipótesis/acción, o modificar una entrada en una tercera prueba y documentar qué cambió. No suma puntos por complejidad.

## 12. Tu decisión tiene que poder explicarse

20:10–20:25 · 15 minutos

Pregunta: ¿Otra persona puede reconstruir tu razonamiento?

### Discurso

Vamos a organizar lo que ya hicieron. Entrega A conserva veinte puntos y cuatro criterios: relacionar necesidad con capacidad; comparar las respuestas; integrar fuentes; y comprobar el resultado y sus límites.

Registren cinco cosas: perspectiva y decisión buscada; encargo, modelo y condiciones; comparación sin y con fuentes; campo visual y su efecto; decisión propia y siguiente paso. Pueden acompañar el informe de una página con una bitácora breve y fragmentos de las salidas. No vuelvan a producir el trabajo desde cero.

Una conclusión distinta de la mía puede estar mejor sustentada. Lo que necesitamos ver es cómo llegaron a ella. Revisen especialmente si una causa está demostrada o es una hipótesis, y si un recurso que proponen tiene un costo conocido o pendiente. Escucharemos dos propuestas para comparar qué información necesita cada función.

### Cómo conducirla

0–5 min: completar los cinco campos con evidencia recogida.

5–10 min: revisar los cuatro criterios de A, cinco puntos cada uno.

10–15 min: escuchar dos recomendaciones y una pregunta pendiente de cada una.

## 13. El mismo mapa, otra perspectiva

20:25–20:30 · 5 minutos

Pregunta: ¿Cómo convertimos una capacidad de IA en un asistente dentro de un proceso?

### Discurso

¿Se acuerdan de su maestría de inteligencia artificial, cortesía del Dr. Valdés? Volvamos al mismo mapa. Al principio lo miramos para descubrir capacidades y oportunidades de negocio. Ahora vamos a ver la IA desde otra perspectiva: cómo una capacidad llega a formar parte del trabajo de una organización.

Hoy ustedes prepararon una decisión con un modelo ya entrenado. Le dieron contexto, incorporaron una imagen y comprobaron el resultado. ¿Qué parte de ese trabajo conservarían si tuvieran que repetirlo mañana? Escuchemos dos respuestas. Una puede ser organizar información, otra preparar un borrador o revisar si falta algo. Cada respuesta empieza a dibujar un proceso.

Miren las aplicaciones del mapa. Detectar riesgo de abandono sirve cuando alguien sabe qué hacer con esa señal. Un pronóstico sirve cuando influye en una compra o una programación. Una recomendación sirve cuando llega a la persona correcta y podemos evaluar su efecto. Entre la capacidad técnica y el valor de negocio hacen falta datos, responsables, reglas de actuación y seguimiento. Ésa será nuestra siguiente perspectiva.

En la próxima clase pasaremos de obtener un resultado a diseñar una forma de repetir trabajo con un asistente: qué recibe, qué instrucciones conserva, qué herramientas necesita, qué puede hacer por sí mismo y cuándo debe pedir revisión. Probaremos su comportamiento con ejemplos. Llamarlo agente no significa que lo entrenemos por refuerzo; muchas soluciones combinan modelos existentes, instrucciones y flujos definidos.

Antes de cerrar: cuando agregamos el expediente, ¿aportamos contexto o demostramos entrenamiento? Y con la imagen, ¿qué dato pudimos observar y qué explicación seguía siendo una hipótesis? Recuperemos esas dos distinciones. Conserven su entrega y elijan un paso repetible de su trabajo. Hoy aprendimos a preparar una decisión; la próxima vez diseñaremos cómo apoyar ese paso de forma consistente. Ahora el mapa también les sirve para conversar con quienes van a construirlo.

### Cómo conducirla

0–1 min: recuperar la frase de la maestría y mostrar el mismo mapa desde la perspectiva del proceso.

1–2 min: escuchar dos partes del trabajo que el grupo querría repetir mañana.

2–3 min: conectar capacidad con datos, responsabilidades, reglas y seguimiento.

3–4 min: explicar el puente a asistentes, herramientas, límites y pruebas de la siguiente clase.

4–5 min: comprobar contexto frente a entrenamiento y dato visual frente a hipótesis; pedir conservar la entrega.

Reaparición deliberada de la lámina 3. No repetir la explicación completa: cerrar con otra pregunta. Si hay minutos disponibles, abrir una historia o caso de la reserva. Mantener el cierre dentro de las 20:30.

Banco de negocios y ampliaciones: [NEGOCIOS_Y_RESERVA_ML.md](NEGOCIOS_Y_RESERVA_ML.md). En la web aparece desplegable bajo el discurso de esta lámina.

### Referencias

- [Stanford CRFM (2021) · On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258): Qué significa modelo fundacional y cómo se adapta a distintos usos.

- [Radford et al. (2021) · CLIP](https://arxiv.org/abs/2103.00020): Antecedente de representaciones que relacionan imágenes y lenguaje.

- [Orange · Exploración visual y modelos](https://orangedatamining.com/widget-catalog/): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Scikit-learn · Guía de métodos](https://scikit-learn.org/stable/user_guide): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [PyTorch · Transfer learning para imágenes](https://docs.pytorch.org/tutorials/beginner/transfer_learning_tutorial.html): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Netflix · Cómo funcionan las recomendaciones](https://help.netflix.com/en/node/100639): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Stripe · Guía técnica de Radar](https://stripe.com/guides/primer-on-machine-learning-for-fraud-protection): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Uber · Michelangelo](https://www.uber.com/us/en/blog/michelangelo-machine-learning-platform/): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Amazon Science · Inspección visual](https://www.amazon.science/blog/making-automated-visual-inspection-systems-practical): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [DeepMind · Refrigeración de centros de datos, 2016](https://deepmind.google/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40/): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [DeepMind · AlphaStar, enero de 2019](https://deepmind.google/blog/alphastar-mastering-the-real-time-strategy-game-starcraft-ii/): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [DeepMind · AlphaStar, octubre de 2019](https://deepmind.google/blog/alphastar-grandmaster-level-in-starcraft-ii-using-multi-agent-reinforcement-learning/): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Gymnasium · Entornos de aprendizaje por refuerzo](https://gymnasium.farama.org/): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Stable-Baselines3 · Algoritmos de refuerzo](https://stable-baselines3.readthedocs.io/en/master/): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [NVIDIA Isaac Sim · Simulación robótica](https://developer.nvidia.com/isaac/sim): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Google OR-Tools · Optimización](https://developers.google.com/optimization): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [McCarthy et al. · Propuesta de Dartmouth, 1955](https://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Krizhevsky, Sutskever y Hinton · ImageNet, 2012](https://www.cs.toronto.edu/~hinton/absps/imagenet.pdf): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [Vaswani et al. · Attention Is All You Need, 2017](https://arxiv.org/abs/1706.03762): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.

- [DeepMind · AlphaGo](https://deepmind.google/research/alphago/): Referencia para los casos, técnicas o ampliaciones del mapa. Las oportunidades comerciales propuestas son ejemplos didácticos.
