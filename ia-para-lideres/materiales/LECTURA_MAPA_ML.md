# Lectura completa de la lámina original de machine learning

Revisión: 21 de septiembre de 2026. Referencia: lámina p4 de la presentación de Edgar Valdés de 2022. Este documento interpreta los conceptos; no pretende reconstruir literalmente su discurso oral.

## Qué debe preservarse

La lámina funciona como un mapa para explicar múltiples capacidades de la IA. Su riqueza está en poder recorrer del centro a una familia de aprendizaje, después a un método y finalmente a aplicaciones reconocibles. Deben mantenerse las tres familias, los cuatro grupos de métodos y sus veinte aplicaciones. El acabado visual puede subir de nivel sin cambiar esa arquitectura.

El hilo para presentarla: «Antes de elegir una herramienta, entendamos qué clase de problema queremos resolver y de qué experiencia puede aprender un sistema». El mapa permite ubicar oportunidades empresariales mucho más allá de conversar con un asistente.

## Centro y familias

| Concepto | Qué explicar |
|---|---|
| Machine learning | Construir modelos que aprendan patrones a partir de datos o experiencia. El resultado se evalúa con situaciones distintas de las usadas al entrenarlo. |
| Unsupervised learning | Buscar estructura sin proporcionar la respuesta correcta para cada ejemplo. Los grupos encontrados requieren interpretación. |
| Supervised learning | Aprender a relacionar entradas con resultados conocidos: categorías o valores numéricos. La calidad de los ejemplos y las etiquetas importa. |
| Reinforcement learning | Un agente actúa en un entorno y aprende una política usando recompensas. Una acción puede afectar resultados mucho después: importa la secuencia, no sólo acertar una respuesta aislada. |

## Aprendizaje no supervisado: dos ramas y siete aplicaciones

**Dimensionality reduction:** representar datos con menos dimensiones procurando conservar información relevante. Se puede usar para explorar, representar o preparar datos; reducir dimensiones también puede perder información.

| Etiqueta original | Explicación y ejemplo para el discurso |
|---|---|
| Meaningful compression | Resumir muchas variables mediante una representación compacta que conserve lo útil. Por ejemplo, representar cientos de mediciones mediante unos pocos factores; no es simplemente comprimir un archivo ZIP. |
| Structure Discovery | Encontrar relaciones y formas de organización ocultas en los datos. Un patrón descubierto no prueba una relación causal. |
| Feature Elicitation | Obtener características o representaciones útiles para analizar un problema. Explicar cómo múltiples mediciones pueden convertirse en señales aprovechables por otro modelo. |
| Big data Visualisation | Proyectar datos de muchas dimensiones en dos o tres para explorarlos. Advertir que una proyección puede distorsionar distancias y aparentes agrupaciones. |

**Clustering:** agrupar observaciones por una noción de similitud. El resultado depende de las variables, su escala y el método elegido; un grupo matemático todavía necesita significado empresarial.

| Etiqueta original | Explicación y ejemplo para el discurso |
|---|---|
| Recommended Systems | Recomendar productos o contenidos usando similitudes entre usuarios o elementos. El mapa presenta una vía posible: los recomendadores también utilizan otros métodos. |
| Targetted Marketing | Diseñar propuestas diferentes para grupos con comportamientos distintos. Encontrar segmentos no garantiza que una campaña produzca ventas. |
| Customer Segmentation | Identificar grupos por comportamiento, necesidades o patrones de compra. Aquí nace el segmento; en marketing se decide qué hacer con él. |

## Aprendizaje supervisado: dos ramas y ocho aplicaciones

**Classification:** asignar categorías o estimar sus probabilidades. **Regression:** estimar valores numéricos. Una probabilidad de fraude y un importe previsto responden preguntas distintas.

| Rama y etiqueta original | Explicación y ejemplo para el discurso |
|---|---|
| Classification — Fraud Detection | Identificar operaciones sospechosas. Un falso positivo puede bloquear una compra legítima; un falso negativo deja pasar fraude. También existen enfoques de anomalías no supervisados. |
| Classification — Image Classification | Reconocer la categoría de una imagen, por ejemplo pieza conforme o defectuosa. Clasificar una imagen no equivale a localizar cada objeto en ella. |
| Classification — Customer Retention | Estimar quién podría abandonar un servicio para orientar una intervención. Predecir abandono y demostrar qué intervención lo evita son problemas distintos. |
| Classification — Diagnostics | Clasificar posibles fallos, por ejemplo en maquinaria, a partir de síntomas o sensores. Una predicción requiere validación en su contexto de uso. |
| Regression — Forecasting | Estimar valores futuros, como demanda semanal. Hay que respetar el orden temporal al evaluar y considerar cambios de temporada o de condiciones. |
| Regression — Predictions | Estimar cantidades desconocidas, como coste o duración. No toda predicción se refiere al futuro; forecasting es un caso particular. |
| Regression — Process Optimization | Usar predicciones para comparar opciones operativas. La optimización necesita además un objetivo y restricciones: predecir un tiempo no decide automáticamente el mejor plan. |
| Regression — New Insights | Obtener información útil sobre relaciones en los datos. Es un beneficio posible del análisis, no un algoritmo ni una garantía de explicación causal. |

## Aprendizaje por refuerzo: las cinco aplicaciones, sin fusionarlas

| Etiqueta original | Qué abre en la explicación | Ejemplo o pregunta |
|---|---|---|
| Real-Time Decisions | Elegir acciones dentro de un plazo mientras cambia el entorno. Tiempo real describe una exigencia operativa; no significa necesariamente aprender en vivo ni usar refuerzo. | ¿Cómo elegir la siguiente acción cuando la situación ya cambió? Distinguir entrenamiento previo de ejecución. |
| Game AI | Estrategia, secuencias de acciones, adversarios y consecuencias diferidas. La IA de videojuegos incluye también reglas, búsqueda y planificación. | AlphaStar en StarCraft II permite hablar de información incompleta, recursos limitados y múltiples decisiones. No es sólo «una máquina que juega». |
| Robot Navigation | Elegir movimientos para llegar a una meta en un entorno físico, considerando obstáculos y percepción imperfecta. | Un robot de almacén debe llegar, evitar colisiones y recuperarse de cambios. El refuerzo es una opción dentro de una arquitectura mayor. |
| Skill Acquisition | Aprender una habilidad reutilizable mediante práctica y retroalimentación. | Aprender a caminar, girar, levantarse o manipular un objeto. La habilidad puede servir para varias tareas posteriores. |
| Learning Tasks | Aprender a resolver tareas definidas por objetivos y recompensas. Es una etiqueta amplia del gráfico, no una categoría técnica independiente con frontera universal. | Distinguir «aprender a agarrar» como habilidad de «recoger y colocar objetos» como tarea completa. |

Conexión ejecutiva: estos ejemplos enseñan a formular objetivos, restricciones y consecuencias. No implican que una empresa necesite entrenar su propio agente de refuerzo. La pregunta es qué capacidad necesita y qué solución resulta justificable.

## El costado de valor empresarial

| Concepto | Cómo sostenerlo sin prometer de más |
|---|---|
| Easier | Reducir esfuerzo o complejidad para el usuario. Medir pasos, errores y necesidad de supervisión. |
| Cheaper | Reducir el coste total de una tarea, incluyendo datos, integración, uso y revisión. |
| Faster | Reducir el tiempo hasta obtener un resultado utilizable, no sólo el tiempo de respuesta del modelo. |

La frase original sobre transmisión de datos no define machine learning. La propuesta visual conserva los tres beneficios y usa una formulación condicional: «Machine learning can make working with data…».

## Procedencia y gráfica histórica encontrada

La referencia a Dinh y Thai impresa en la lámina no basta para atribuirles el mapa. Su artículo de 2018 *AI and Blockchain: A Disruptive Integration* contiene otra figura sobre integración de ambas tecnologías.

Encontré una taxonomía muy cercana en el apéndice 2, página impresa 99, del informe de Amsterdam University of Applied Sciences sobre IA en transporte y logística. La atribuye a Gesing, Peterson y Michelsen, *Artificial Intelligence in Logistics*, DHL/IBM, 2018. Coinciden las familias y numerosas aplicaciones; los ejemplos de regresión difieren. Por ello, es una referencia estrechamente relacionada, no una atribución comprobada de la adaptación exacta de Edgar.

También encontré *The Rise of AI*, reproducida en la página 32 de una presentación de National Taipei University y atribuida a DHL (2018). Puede ser la otra gráfica que recuerda Edgar; falta confirmarlo. Organiza el relato en nacimiento de la IA, inteligencia específica y solución de problemas específicos, con dos inviernos y sus limitaciones técnicas/comerciales. Su valor narrativo está en conectar avances con condiciones que los hicieron posibles. La curva es conceptual, no una serie cuantitativa; sus fechas e hitos necesitan verificarse antes de reutilizarlos.

## Referencias para profundizar

- [Presentación original de Edgar, lámina p4](https://docs.google.com/presentation/d/19X9UVkhcf42RXgcYG_RLz_dfsuZHposGd3iJWTOQ2UY/edit#slide=id.p4).
- [Google: introducción al aprendizaje automático](https://developers.google.com/machine-learning/intro-to-ml/what-is-ml).
- [Google: aprendizaje supervisado](https://developers.google.com/machine-learning/intro-to-ml/supervised).
- [Scikit-learn: clustering y supuestos de los métodos](https://scikit-learn.org/stable/modules/clustering.html).
- [Scikit-learn: descomposición y reducción de dimensiones](https://scikit-learn.org/stable/modules/decomposition.html).
- [Sutton y Barto: Reinforcement Learning, segunda edición](https://mitpress.ublish.com/book/reinforcement-learning-an-introduction-2).
- [DeepMind: AlphaStar y StarCraft II](https://deepmind.google/blog/alphastar-mastering-the-real-time-strategy-game-starcraft-ii/).
- [DeepMind: de control motor a inteligencia corporizada](https://deepmind.google/blog/from-motor-control-to-embodied-intelligence).
- [Informe académico con taxonomía, apéndice 2, página impresa 99](https://pure.hva.nl/ws/files/35567013/AI_Application_in_TL_Final_Report_8_05_23.pdf).
- [Reproducción de The Rise of AI, página 32](https://web.ntpu.edu.tw/~myday/teaching/1132/AIFQA/1132AIFQA01_AI_in_Finance_and_Quantitative_Analysis.pdf).
- [Dinh y Thai: AI and Blockchain: A Disruptive Integration](https://thang-dinh.github.io/files/IEEEComp18_BlockchainAI.pdf).

## Criterio para aprobar la mejora visual

Conservar la silueta central de tres lóbulos, los nodos circulares, las posiciones relativas de familias y métodos, las veinte aplicaciones y los tres beneficios. Mejorar definición, tipografía, alineaciones y acabado. Verificar que no haya etiquetas omitidas, repetidas o conectadas a una rama incorrecta. La lámina debe seguir reconociéndose como la original.
