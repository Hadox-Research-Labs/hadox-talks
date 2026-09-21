# Negocios y reserva del expositor · Mapa del machine learning

Usar al inicio (lámina 3) y al cierre (lámina 13).

### Casos de negocio por aplicación

Las oportunidades siguientes son propuestas didácticas. Los enlaces documentan la técnica, herramienta o caso de referencia; no prueban la viabilidad de cada negocio propuesto.

#### 1. Meaningful compression · Monitoreo industrial

Rama: Reducción de dimensionalidad.

**Negocio posible:** Servicio que resume muchas señales para facilitar la detección de cambios operativos.

**Datos necesarios:** Series de sensores, condiciones de operación y eventos conocidos.

**Técnica:** PCA; autoencoders según el problema.

**Herramienta o ruta técnica:** Orange para explorar PCA; scikit-learn para un prototipo.

**Qué medir:** Información relevante conservada y utilidad en una tarea posterior.

**Matiz para explicar:** Reducir variables puede borrar una señal rara importante.

Referencia: [Scikit-learn · Guía de métodos](https://scikit-learn.org/stable/user_guide).

#### 2. Structure Discovery · Análisis de devoluciones

Rama: Reducción de dimensionalidad.

**Negocio posible:** Diagnóstico comercial por proyecto para formular hipótesis sobre patrones de devoluciones.

**Datos necesarios:** Producto, canal, fecha, devolución y contexto de venta.

**Técnica:** Exploración de representaciones y relaciones.

**Herramienta o ruta técnica:** Orange: PCA, distancias y proyecciones.

**Qué medir:** Hipótesis verificables identificadas y luego contrastadas.

**Matiz para explicar:** Un patrón encontrado no demuestra la causa de las devoluciones.

Referencia: [Orange · Exploración visual y modelos](https://orangedatamining.com/widget-catalog/).

#### 3. Feature Elicitation · Preparación de datos industriales

Rama: Reducción de dimensionalidad.

**Negocio posible:** Servicio que transforma registros en características reutilizables para modelos de mantenimiento.

**Datos necesarios:** Señales originales y eventos con tiempos consistentes.

**Técnica:** Extracción de características; PCA o representaciones aprendidas.

**Herramienta o ruta técnica:** Scikit-learn: transformadores y pipelines.

**Qué medir:** Mejora fuera de muestra frente a usar las variables originales.

**Matiz para explicar:** Evitar usar datos del futuro al construir una característica.

Referencia: [Scikit-learn · Guía de métodos](https://scikit-learn.org/stable/user_guide).

#### 4. Big data Visualisation · Inteligencia comercial

Rama: Reducción de dimensionalidad.

**Negocio posible:** Explorador de similitudes entre sucursales o productos vendido como herramienta de análisis.

**Datos necesarios:** Variables comparables y datos de contexto de cada sucursal.

**Técnica:** PCA, MDS o t-SNE para exploración.

**Herramienta o ruta técnica:** Orange: widgets de proyección y gráficos.

**Qué medir:** Tiempo para investigar anomalías y validar interpretaciones.

**Matiz para explicar:** La proyección puede distorsionar distancias; no decide por sí sola.

Referencia: [Orange · Exploración visual y modelos](https://orangedatamining.com/widget-catalog/).

#### 5. Recommender Systems · Comercio electrónico y contenidos

Rama: Clustering.

**Negocio posible:** Recomendaciones integradas al catálogo, con operación y evaluación continuas.

**Datos necesarios:** Catálogo, interacciones y señales de preferencia con uso autorizado.

**Técnica:** Vecinos, filtrado colaborativo y ranking; clustering es una posible pieza.

**Herramienta o ruta técnica:** Prototipo de similitud con scikit-learn; servicio de ranking al crecer.

**Qué medir:** Conversión o satisfacción mediante comparación controlada.

**Matiz para explicar:** No atribuir toda la personalización de Netflix a clustering.

Referencia: [Netflix · Cómo funcionan las recomendaciones](https://help.netflix.com/en/node/100639).

#### 6. Targeted Marketing · Agencia de experimentación comercial

Rama: Clustering.

**Negocio posible:** Servicio de campañas por segmento que mide respuesta incremental.

**Datos necesarios:** Segmentos, campañas, costes y resultados, con grupo de comparación.

**Técnica:** Clustering para explorar grupos y experimentos para evaluar campañas.

**Herramienta o ruta técnica:** Orange para segmentar; CRM existente para operar las campañas.

**Qué medir:** Margen incremental y coste por resultado frente al grupo de comparación.

**Matiz para explicar:** Un segmento prometedor no garantiza que una campaña genere ventas.

Referencia: [Orange · Exploración visual y modelos](https://orangedatamining.com/widget-catalog/).

#### 7. Customer Segmentation · Distribución y servicio al cliente

Rama: Clustering.

**Negocio posible:** Consultoría para proponer niveles de servicio por patrones de compra.

**Datos necesarios:** Frecuencia, variedad de compra y variables pertinentes del servicio.

**Técnica:** K-means o clustering jerárquico, tras preparar las variables.

**Herramienta o ruta técnica:** Orange o scikit-learn.

**Qué medir:** Estabilidad e interpretabilidad de grupos y efecto de la acción posterior.

**Matiz para explicar:** Los grupos son construcciones analíticas; no categorías naturales definitivas.

Referencia: [Scikit-learn · Guía de métodos](https://scikit-learn.org/stable/user_guide).

#### 8. Fraud Detection · Prevención de pérdidas en pagos

Rama: Clasificación.

**Negocio posible:** Producto que prioriza operaciones para revisión y permite ajustar reglas.

**Datos necesarios:** Transacciones y resultados posteriores de fraude, con controles de acceso.

**Técnica:** Clasificación probabilística y reglas; anomalías como complemento.

**Herramienta o ruta técnica:** Stripe Radar como producto existente; scikit-learn para enseñanza con datos ficticios.

**Qué medir:** Pérdidas, falsos rechazos y coste de revisión.

**Matiz para explicar:** Una precisión global alta puede ocultar que casi nunca detecta fraude.

Referencia: [Stripe · Guía técnica de Radar](https://stripe.com/guides/primer-on-machine-learning-for-fraud-protection).

#### 9. Image Classification · Inspección de calidad

Rama: Clasificación.

**Negocio posible:** Integración de cámara, modelo y cola de revisión para una línea de producción.

**Datos necesarios:** Imágenes representativas de condiciones y defectos reales.

**Técnica:** Clasificación de imágenes con transfer learning.

**Herramienta o ruta técnica:** PyTorch para adaptar un modelo; evaluar también métodos de anomalías.

**Qué medir:** Defectos omitidos, falsas alarmas y tiempo de inspección.

**Matiz para explicar:** Clasificar, localizar un defecto y detectar una anomalía son tareas distintas.

Referencia: [PyTorch · Transfer learning para imágenes](https://docs.pytorch.org/tutorials/beginner/transfer_learning_tutorial.html).

#### 10. Customer Retention · Servicios por suscripción

Rama: Clasificación.

**Negocio posible:** Sistema de priorización de seguimiento integrado al CRM.

**Datos necesarios:** Historial de uso y resultados de renovación dentro de un periodo definido.

**Técnica:** Clasificación de riesgo; experimentos para evaluar intervenciones.

**Herramienta o ruta técnica:** Scikit-learn; CRM de la empresa para registrar acciones.

**Qué medir:** Retención incremental y coste de contacto, además de calidad predictiva.

**Matiz para explicar:** Riesgo de abandono no equivale a probabilidad de responder a una oferta.

Referencia: [Scikit-learn · Guía de métodos](https://scikit-learn.org/stable/user_guide).

#### 11. Diagnostics · Mantenimiento de maquinaria

Rama: Clasificación.

**Negocio posible:** Servicio de alertas y revisión de posibles fallos por equipo.

**Datos necesarios:** Sensores, síntomas, fallos confirmados y mantenimiento realizado.

**Técnica:** Clasificación de estados o fallos; anomalías como alternativa.

**Herramienta o ruta técnica:** Scikit-learn para un prototipo sobre registros tabulares.

**Qué medir:** Fallos omitidos, falsas alarmas y tiempo de anticipación.

**Matiz para explicar:** Se requieren datos de las condiciones reales y revisión técnica.

Referencia: [Scikit-learn · Guía de métodos](https://scikit-learn.org/stable/user_guide).

#### 12. Forecasting · Planeación de inventarios

Rama: Regresión.

**Negocio posible:** Servicio recurrente de pronósticos por tienda y producto.

**Datos necesarios:** Demanda histórica, calendario, disponibilidad y promociones conocidas.

**Técnica:** Modelos de series temporales o regresión con variables rezagadas.

**Herramienta o ruta técnica:** Scikit-learn para regresión; comparar con un pronóstico estacional sencillo.

**Qué medir:** Error en periodos posteriores y efecto en faltantes y excedentes.

**Matiz para explicar:** Separar por tiempo y reconocer ventas limitadas por falta de inventario.

Referencia: [Uber · Michelangelo](https://www.uber.com/us/en/blog/michelangelo-machine-learning-platform/).

#### 13. Predictions · Cotización y promesa de servicio

Rama: Regresión.

**Negocio posible:** Estimador de duración o coste para apoyar cotizaciones.

**Datos necesarios:** Servicios anteriores, contexto e importe o duración observada.

**Técnica:** Regresión lineal, árboles o ensembles.

**Herramienta o ruta técnica:** Scikit-learn.

**Qué medir:** Error de estimación por tipo de servicio y desviaciones costosas.

**Matiz para explicar:** Mostrar incertidumbre y revisar casos fuera de experiencia.

Referencia: [Scikit-learn · Guía de métodos](https://scikit-learn.org/stable/user_guide).

#### 14. Process Optimization · Planeación de producción

Rama: Regresión.

**Negocio posible:** Servicio que combina estimaciones con una programación sujeta a capacidades.

**Datos necesarios:** Duraciones estimadas, recursos, plazos y restricciones verificadas.

**Técnica:** Predicción más optimización matemática; no confundir sus funciones.

**Herramienta o ruta técnica:** Modelo predictivo más Google OR-Tools.

**Qué medir:** Cumplimiento, coste y factibilidad de los planes.

**Matiz para explicar:** OR-Tools optimiza; no es en sí un modelo de machine learning.

Referencia: [Google OR-Tools · Optimización](https://developers.google.com/optimization).

#### 15. New Insights · Analítica de operaciones

Rama: Regresión.

**Negocio posible:** Estudio de factores asociados con retrasos o desperdicio.

**Datos necesarios:** Resultados, condiciones operativas y calidad del registro.

**Técnica:** Regresión e interpretación; diseño causal si se quieren medir intervenciones.

**Herramienta o ruta técnica:** Scikit-learn y visualización exploratoria.

**Qué medir:** Hipótesis útiles contrastadas, no cantidad de gráficos generados.

**Matiz para explicar:** Asociación estadística no establece causalidad.

Referencia: [Scikit-learn · Guía de métodos](https://scikit-learn.org/stable/user_guide).

#### 16. Real-Time Decisions · Control energético

Rama: Refuerzo.

**Negocio posible:** Posible servicio de control que ajusta equipos dentro de restricciones.

**Datos necesarios:** Estado del sistema, acciones, consumo y restricciones operativas.

**Técnica:** Políticas de control; refuerzo cuando resulte adecuado.

**Herramienta o ruta técnica:** Gymnasium y Stable-Baselines3 para investigar en simulación.

**Qué medir:** Consumo junto con estabilidad y cumplimiento de restricciones.

**Matiz para explicar:** Tiempo real no significa aprendizaje en línea. El caso de refrigeración no garantiza ahorro en otro edificio.

Referencia: [DeepMind · Refrigeración de centros de datos, 2016](https://deepmind.google/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40/).

#### 17. Game AI · Videojuegos y simulación

Rama: Refuerzo.

**Negocio posible:** Oponentes de entrenamiento o simuladores para probar estrategias.

**Datos necesarios:** Estado, acciones, recompensas y reglas del entorno.

**Técnica:** Refuerzo, autojuego, imitación, búsqueda o reglas según objetivo.

**Herramienta o ruta técnica:** Gymnasium y Stable-Baselines3 para un prototipo acotado.

**Qué medir:** Desempeño frente a oponentes nuevos y diversidad de estrategias.

**Matiz para explicar:** AlphaStar es investigación específica; no una solución lista para cualquier negocio.

Referencia: [DeepMind · AlphaStar, enero de 2019](https://deepmind.google/blog/alphastar-mastering-the-real-time-strategy-game-starcraft-ii/).

#### 18. Robot Navigation · Logística interna

Rama: Refuerzo.

**Negocio posible:** Integración y soporte de robots móviles para mover materiales.

**Datos necesarios:** Mapas, sensores, trayectorias y condiciones físicas.

**Técnica:** Planificación y control; refuerzo como una opción dentro de la arquitectura.

**Herramienta o ruta técnica:** NVIDIA Isaac Sim para pruebas de simulación.

**Qué medir:** Llegadas correctas, colisiones, bloqueos e intervenciones humanas.

**Matiz para explicar:** Simular no sustituye la validación en el entorno físico.

Referencia: [NVIDIA Isaac Sim · Simulación robótica](https://developer.nvidia.com/isaac/sim).

#### 19. Skill Acquisition · Integración de células robóticas

Rama: Refuerzo.

**Negocio posible:** Adaptación de habilidades de manipulación a nuevas piezas.

**Datos necesarios:** Demostraciones, interacción, sensores y criterios de éxito.

**Técnica:** Imitación y/o refuerzo para habilidades específicas.

**Herramienta o ruta técnica:** Isaac Sim para simular; Stable-Baselines3 en entornos compatibles.

**Qué medir:** Éxito con variaciones de piezas y condiciones nuevas.

**Matiz para explicar:** La habilidad aprendida requiere evaluar transferencia a hardware real.

Referencia: [NVIDIA Isaac Sim · Simulación robótica](https://developer.nvidia.com/isaac/sim).

#### 20. Learning Tasks · Operación robótica por servicio

Rama: Refuerzo.

**Negocio posible:** Servicio de recoger, transportar y colocar objetos con seguimiento del resultado.

**Datos necesarios:** Objetivo, estados, acciones, fallos y criterios de terminación.

**Técnica:** Coordinación de habilidades, planificación y aprendizaje según la tarea.

**Herramienta o ruta técnica:** Gymnasium para definir un entorno; herramientas robóticas para la ejecución.

**Qué medir:** Tareas completas correctas y coste de recuperación de fallos.

**Matiz para explicar:** Etiqueta amplia del gráfico: no identifica por sí sola un algoritmo diferente.

Referencia: [Gymnasium · Entornos de aprendizaje por refuerzo](https://gymnasium.farama.org/).

### Reserva del expositor

Elegir sólo si hay tiempo disponible. Los minutos incluyen la conversación propuesta; no forman parte adicional del programa de 150 minutos. No hace falta abrir ni instalar estas herramientas durante la sesión.

#### Historia · La ambición ya estaba escrita en 1955 · +2 min

Cuándo usarlo: Si preguntan cuándo empezó la IA o por qué parece nueva.

En 1955, McCarthy, Minsky, Rochester y Shannon propusieron reunirse en Dartmouth en el verano siguiente para estudiar inteligencia artificial. El documento ya hablaba de lenguaje, abstracciones, redes neuronales y mejora de los sistemas. Es interesante compararlo con lo que hoy le pedimos a una aplicación. La ambición precede por décadas a las herramientas que tenemos a mano.

Pregunta al grupo: si una idea lleva tanto tiempo planteada, ¿qué tiene que cambiar para que pueda convertirse en un negocio? Escucha dos respuestas y enlaza con datos disponibles, capacidad de cómputo e integración. Esa conexión empresarial es nuestra interpretación, no una promesa que hiciera aquel documento.

Referencias: [McCarthy et al. · Propuesta de Dartmouth, 1955](https://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html).

#### Historia y técnica · ImageNet y el salto de la visión · +3 min

Cuándo usarlo: Si el grupo se interesa por inspección, imágenes o deep learning.

En el trabajo de ImageNet de 2012, Krizhevsky, Sutskever y Hinton entrenaron una red convolucional profunda para clasificar imágenes a gran escala, utilizando GPU. El caso permite explicar una combinación concreta de datos, arquitectura y cómputo. Deep learning tiene una historia anterior; este trabajo es un hito influyente.

Para una fábrica, el siguiente desafío es mucho más específico: reconocer defectos de sus piezas bajo sus condiciones. Pregunta: ¿cuál sería más difícil, conseguir fotografías o conseguir fotografías correctamente etiquetadas que representen las excepciones? Escucha ejemplos. Cierra: una demostración visual convincente todavía necesita pruebas con datos distintos y condiciones reales.

Referencias: [Krizhevsky, Sutskever y Hinton · ImageNet, 2012](https://www.cs.toronto.edu/~hinton/absps/imagenet.pdf), [Amazon Science · Inspección visual](https://www.amazon.science/blog/making-automated-visual-inspection-systems-practical).

#### Historia y estrategia · De AlphaGo a StarCraft · +3 min

Cuándo usarlo: Si quieres profundizar en Game AI y decisiones encadenadas.

En 2016 AlphaGo venció a Lee Sedol en Go. En 2019 AlphaStar llevó la conversación a StarCraft II, con decisiones en tiempo real e información incompleta. Son problemas diferentes, con entornos y evaluaciones específicos.

Pregunta: ¿qué harían en una empresa si no pudieran ver todas las acciones de sus competidores y tuvieran que elegir entre invertir ahora o conservar recursos? Escucha dos posturas. Usa la analogía para hablar de horizontes y consecuencias, sin presentar ganar un videojuego como prueba de capacidad para dirigir una empresa. Para investigar una estrategia necesitamos definir estado, acciones y qué resultado vamos a valorar.

Referencias: [DeepMind · AlphaGo](https://deepmind.google/research/alphago/), [DeepMind · AlphaStar, octubre de 2019](https://deepmind.google/blog/alphastar-grandmaster-level-in-starcraft-ii-using-multi-agent-reinforcement-learning/).

#### Caso · Netflix vende una experiencia de elección · +2 min

Cuándo usarlo: Si el grupo está pensando en clientes, catálogos o ventas.

Netflix describe recomendaciones basadas, entre otras señales, en interacciones, preferencias de miembros similares e información de los títulos. Utilízalo para mostrar una aplicación documentada, sin afirmar que todo ocurre mediante clustering.

Propuesta para conversar: imaginemos un distribuidor con miles de productos. ¿Le conviene mostrar lo que más se vende, lo que deja más margen o lo más relevante para ese comprador? Escucha dos respuestas. Ahí aparece una decisión empresarial que el algoritmo no resuelve por nosotros. Un piloto tendría que comparar la experiencia propuesta con la actual y medir resultados. Este ejemplo del distribuidor es hipotético.

Referencias: [Netflix · Cómo funcionan las recomendaciones](https://help.netflix.com/en/node/100639).

#### Caso · Cuando una predicción equivocada cuesta dinero · +3 min

Cuándo usarlo: Si hay interés en finanzas, controles o calidad del modelo.

Stripe explica Radar como un sistema que combina aprendizaje automático y herramientas para prevenir fraude. Una transacción legítima rechazada también tiene coste.

Ejemplo ficticio: hay cien mil operaciones y sólo cien son fraudulentas. Un sistema que siempre responde «legítima» acierta el 99.9 % de las veces y detecta cero fraudes. Deja que el grupo haga esa cuenta. Pregunta: ¿comprarían ese sistema por su porcentaje de aciertos? Ahora distingue pérdidas por fraude, rechazos legítimos y esfuerzo de revisión. Es una forma de pasar de una métrica vistosa a una decisión de negocio.

Referencias: [Stripe · Guía técnica de Radar](https://stripe.com/guides/primer-on-machine-learning-for-fraud-protection).

#### Caso · Refrigeración y ahorro medido · +2 min

Cuándo usarlo: Si preguntan por operaciones, energía o retorno de inversión.

DeepMind reportó en 2016 una reducción de hasta 40 % en la energía destinada a refrigeración en su experiencia con centros de datos de Google. Conserva el alcance: refrigeración, no toda la factura eléctrica de cualquier organización.

Pregunta qué habría que conocer antes de ofrecer algo parecido a una planta local: consumo de referencia, límites operativos, instrumentos y quién puede autorizar un ajuste. La oportunidad propuesta sería un servicio que combine medición, predicción y control. El resultado publicado sirve como caso; el cliente nuevo necesita su propia evaluación.

Referencias: [DeepMind · Refrigeración de centros de datos, 2016](https://deepmind.google/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40/).

#### Herramientas · Qué pedirle realmente a un equipo técnico · +4 min

Cuándo usarlo: Si piden nombres concretos o qué instalar para explorar.

Para explorar datos de forma visual, Orange ofrece flujos con widgets de análisis, agrupación y proyección. Para desarrollar modelos tabulares, scikit-learn reúne métodos de clasificación, regresión y transformación. PyTorch permite trabajar con redes neuronales; un tutorial de transfer learning ayuda a explicar por qué no siempre entrenamos desde cero.

Para investigar decisiones por refuerzo, Gymnasium define entornos y Stable-Baselines3 aporta implementaciones de algoritmos. En robótica, Isaac Sim ayuda con simulación. Para asignar recursos con restricciones, OR-Tools es un optimizador, que puede trabajar junto a predicciones. Son rutas técnicas distintas, no una lista de instalaciones obligatorias para esta clase.

Pregunta: si queremos prever demanda y programar producción, ¿qué herramienta cubre cada parte? Pide identificar primero datos, predicción, decisión y medición. Hoy mantenemos la práctica con Gemini; estas referencias sirven para conversar con un equipo especialista.

Referencias: [Orange · Exploración visual y modelos](https://orangedatamining.com/widget-catalog/), [Scikit-learn · Guía de métodos](https://scikit-learn.org/stable/user_guide), [PyTorch · Transfer learning para imágenes](https://docs.pytorch.org/tutorials/beginner/transfer_learning_tutorial.html), [Gymnasium · Entornos de aprendizaje por refuerzo](https://gymnasium.farama.org/), [Stable-Baselines3 · Algoritmos de refuerzo](https://stable-baselines3.readthedocs.io/en/master/), [NVIDIA Isaac Sim · Simulación robótica](https://developer.nvidia.com/isaac/sim), [Google OR-Tools · Optimización](https://developers.google.com/optimization).

#### Técnica · Un Transformer no es todo el mapa · +2 min

Cuándo usarlo: Si confunden modelos generativos, deep learning y tipos de aprendizaje.

El artículo Attention Is All You Need, de 2017, presentó la arquitectura Transformer basada en atención. Una arquitectura indica cómo organiza el modelo sus operaciones. Aprendizaje supervisado, no supervisado y por refuerzo describen formas de aprender; son dimensiones diferentes.

Podemos utilizar redes profundas para imágenes o para políticas de acción, y un modelo de lenguaje puede pasar por varias etapas de entrenamiento. Pregunta: cuando pegamos un expediente en el chat, ¿cambiamos los parámetros del modelo o el contexto de esa respuesta? Recupera la comparación que hicieron en clase. Esta distinción evita llamar entrenamiento a cualquier interacción.

Referencias: [Vaswani et al. · Attention Is All You Need, 2017](https://arxiv.org/abs/1706.03762).

#### Puente · De una capacidad a un asistente en un proceso · +3 min

Cuándo usarlo: Para ampliar el cierre y preparar la siguiente clase.

Propuesta ficticia: un servicio recibe consultas y prepara respuestas. Describamos quién entrega la información, qué puede consultar el asistente, qué borrador debe producir y quién lo aprueba. Si falta una fuente, debe pedirla o señalar el vacío. Si el caso rebasa su alcance, debe escalarlo.

Pide al grupo elegir una excepción que quieran probar. Después pregunta qué guardarían para comprobar el resultado: entrada, fuentes, salida, revisión y acción realizada. Éste es el puente al diseño del asistente. Podemos combinar varias capacidades del mapa dentro del proceso. Llamarlo agente no significa que use aprendizaje por refuerzo ni que tenga autorización ilimitada.
