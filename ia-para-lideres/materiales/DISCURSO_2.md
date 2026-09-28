# Clase 2 · Conocernos para proponer mejor

27 septiembre 2026 · 22 láminas · 150 minutos

## 01 · Conocernos para proponer mejor

18:00–18:05 · 5 min

En la primera clase investigamos un interlocutor: Juan José Gutiérrez Mayorga y un negocio de su entorno. Compartimos fuentes y pensamos qué podría ofrecer Nexo. Hoy añadimos una pregunta: ¿qué podríamos ofrecer si conociéramos mejor lo que cada uno de nosotros sabe hacer y quiere desarrollar?

Un grupo puede reunir mucha experiencia y aprovechar muy poca. La información está distribuida, las personas describen su trabajo de maneras distintas y no siempre sabemos qué pedirles. Nuestra tarea consiste en hacer esa información utilizable sin confundir una descripción con una capacidad comprobada, ni una coincidencia con una alianza.

Veremos cuatro movimientos: representar capacidades, buscar conexiones, delegar exploración y construir propuestas. Yo haré las demostraciones con personas ficticias. Después ustedes repetirán el recorrido, compartirán una ficha revisada y conversarán con compañeros para mejorar una propuesta individual. El resultado no es un directorio por sí mismo: es una posibilidad de colaboración que antes no veíamos.

## 02 · Procesos y representación

18:05–18:06 · 1 min

Entramos a procesos y representación. Qué conservamos de una persona y cómo circula esa información.

Demostración: documento profesional → ficha revisable. Primero construimos el concepto; después lo observamos en una demostración.

## 03 · Evento, estado y transición

18:06–18:12 · 6 min

Automatizar es especificar cómo cambia un sistema cuando ocurre un evento. En nuestro ejemplo, subir un documento es un evento; que su perfil esté recibido, extraído o aprobado es un estado; pasar de uno a otro es una transición. Esta distinción obliga a definir algo más preciso que “usar IA para conocernos”.

Podemos expresarlo como estado siguiente igual a una transformación del estado actual y el evento. La notación no añade magia: obliga a nombrar entradas, condiciones y resultados. Si llega una versión nueva, ¿creamos otra persona o actualizamos la existente? Si el documento no se puede leer, ¿se publica una ficha vacía o se interrumpe esa transición?

El recorrido puede ser fijo aunque uno de sus pasos sea probabilístico. Un modelo puede extraer información de forma variable dentro de un flujo cuyo orden ya decidimos nosotros. Por eso automatización y determinismo no son sinónimos, y añadir un modelo no convierte automáticamente el proceso en un agente.

Como líderes debemos elegir qué variaciones toleramos, qué operaciones se repiten y qué evidencia permite avanzar. La unidad de valor no es el número de ejecuciones, sino que la información correcta llegue a la persona que puede utilizarla. Pidan un ejemplo del grupo: ¿qué evento les haría revisar una colaboración que habían descartado?

## 04 · Representar implica seleccionar

18:12–18:18 · 6 min

Un CV es una descripción orientada a ciertos propósitos. Un perfil de colaboración es otra representación. No basta con resumir el primero: necesitamos decidir qué información será relevante para la segunda tarea. El CV cuenta principalmente una trayectoria; la declaración personal añade intención presente.

En física elegimos variables según el fenómeno que queremos explicar. Aquí también la elección de variables determina qué relaciones podremos observar. La analogía termina ahí: no estamos midiendo a la persona completa ni descubriendo leyes de su comportamiento. Estamos construyendo una descripción parcial, situada y revisable.

Una transformación que reduce el documento a una ficha puede perder matices. “Participó en un proyecto” no debe convertirse en “dirigió un proyecto”. Por eso cada capacidad conserva una referencia y un fragmento breve. Distinguimos lo declarado por la persona, lo que aparece en un documento y lo que el modelo sólo propone como interpretación. Una declaración sigue siendo una declaración, aunque la IA la ordene bien.

El esquema tendrá experiencia, capacidades, intereses, lo que ofrece, lo que busca y restricciones que la persona quiera compartir. No necesitamos domicilios, documentos de identidad ni datos ajenos. Antes de compartir, el propietario corrige la ficha. La revisión confirma que lo representa razonablemente; no certifica toda su experiencia. ¿Qué parte valiosa de ustedes no aparece en su CV?

## 05 · El flujo también necesita memoria

18:18–18:23 · 5 min

La memoria de un proceso puede ser tan sencilla como conservar un identificador, una versión y un estado. No necesita ser memoria de un modelo. Con esos datos podemos distinguir una nueva persona de una nueva versión, y un borrador de una ficha revisada.

La idempotencia significa que repetir una operación no produce efectos adicionales indebidos. Si procesamos dos veces el mismo archivo, no queremos que una persona aparezca dos veces en las búsquedas. Para lograrlo hay que diseñar una clave y una regla, no pedir al modelo que “tenga cuidado”. En el recorrido mínimo llevaremos un registro de versiones; la ampliación puede automatizar ese control con un almacén de datos.

Las excepciones revelan el diseño. Un texto ilegible, dos perfiles mezclados o una experiencia sin fecha no se resuelven inventando. Tampoco todas las fallas exigen abandonar el flujo: podemos guardar el borrador y dejarlo pendiente de aclaración. Lo esencial es que la siguiente etapa conozca ese estado.

Probamos tres cosas distintas: que el mecanismo ejecuta, que la extracción respeta la fuente y que la salida sirve para la decisión. Un escenario en verde sólo responde parcialmente a la primera. En la demostración veremos un perfil normal, un faltante y una actualización. El criterio de éxito se escribe antes de ejecutar.

## 06 · Demostración 1 · Un perfil que otros puedan usar

18:23–18:35 · 12 min

Voy a mostrar el recorrido con un perfil ficticio. El documento incluye trayectoria e intención profesional. Make detecta el archivo, recupera su texto y pide una extracción con un esquema definido. Abrimos el resultado y lo comparamos con el original antes de compartirlo.

Observen una diferencia esencial: que el modelo termine no significa que la ficha esté aprobada. El paso de borrador a revisado lo realiza la persona. Después repito con un perfil al que le falta disponibilidad y con una versión nueva. El faltante debe seguir visible y la versión anterior debe poder identificarse.

El detalle de cada módulo está en la guía. Durante la explicación permanezco en Make y en los documentos, no avanzo una lámina por cada clic. Al final preguntamos qué decisión facilita esta representación y qué información no deberíamos deducir.

## 07 · Afinidad y complementariedad

18:35–18:36 · 1 min

Entramos a afinidad y complementariedad. La cercanía depende de la pregunta que hacemos.

Demostración: mismos perfiles, distintos criterios de colaboración. Primero construimos el concepto; después lo observamos en una demostración.

## 08 · Recuperar, comparar, decidir

18:36–18:45 · 9 min

Buscar información y tomar una decisión son problemas distintos. Primero recuperamos candidatos; después analizamos si cumplen criterios; finalmente decidimos qué conversación o colaboración explorar. Mezclar esos pasos hace que un resultado de búsqueda parezca una recomendación definitiva.

Un embedding representa un contenido mediante un vector. Una función de similitud permite comparar esas representaciones. La cercanía resultante depende del modelo, del texto y de la tarea. No equivale a una distancia objetiva entre personas ni a una medida de valor profesional. Una proyección en dos dimensiones puede ayudar a explicar la idea, pero también oculta información.

Además hay búsquedas simétricas y asimétricas. “¿Quién se parece a mí?” compara perfiles. “¿Quién aporta lo que me falta?” relaciona una necesidad con una capacidad. Cambiar la pregunta cambia la representación útil, la recuperación y el criterio de selección.

Para un grupo pequeño podemos entregar las fichas al modelo y pedir comparación explícita. No necesitamos construir una base vectorial para enseñar el razonamiento. Cuando la colección crece, recuperar primero puede reducir contexto y costo, pero abre otra pregunta: ¿qué candidato relevante se quedó fuera?

La prueba importante consiste en mostrar la evidencia que conecta un perfil con un criterio, y también por qué no lo elegiríamos. Un puntaje inventado de 94 por ciento no sustituye esa explicación. En nuestro ensayo no presentaremos puntuaciones como probabilidades de éxito.

## 09 · Parecernos no basta para colaborar

18:45–18:53 · 8 min

Si todos tenemos la misma pieza, podemos coincidir mucho y aun así no completar el trabajo. La complementariedad depende del objetivo y del conjunto de capacidades disponibles. Una persona valiosa para una propuesta puede ser irrelevante para otra, sin que haya cambiado su calidad profesional.

Pensemos en Ana, que diseña formación. Clara comparte ese campo y puede ayudarle a evaluar aprendizaje. Bruno conoce la operación logística. Diego puede revisar datos y costos. Según el problema, Ana puede necesitar profundidad pedagógica, conocimiento operativo o análisis. La selección no es un concurso de personas: es una hipótesis sobre cómo combinar contribuciones.

Podemos ver al grupo como una red. Los nodos representan participantes; las relaciones pueden indicar afinidad, una aportación posible o una colaboración confirmada. No son el mismo tipo de relación. Dibujar una línea sugerida por IA no crea confianza ni compromiso. La relación debe poder explicar qué aporta cada lado.

La estrategia para conectarse consiste en formular una pregunta concreta y recíproca: esto quiero desarrollar, esto puedo aportar y esto creo que podríamos explorar juntos. Después escuchar la corrección. El compañero puede decir que interpretamos mal su experiencia o que ahora le interesa algo distinto. Esa respuesta mejora los datos y la propuesta. El ejercicio incorpora esa conversación como una parte del método.

## 10 · Demostración 2 · Cambiar el criterio cambia la red

18:53–19:05 · 12 min

Usaré el mismo paquete pequeño de perfiles en Gemini, ChatGPT y Claude. Ana quiere preparar formación para operaciones distribuidas. Pido dos conexiones: una por afinidad y otra por complementariedad, cada una con evidencia, límites y una pregunta para el compañero.

No buscamos declarar un modelo ganador. Comparamos qué información usa cada respuesta, qué omite y qué infiere sin base. Después cambiamos la condición: ahora necesitamos medir resultados con datos ya disponibles y trabajar de forma remota. La selección debe revisarse y los datos ausentes deben seguir ausentes.

En Make muestro cómo ese mismo encargo puede entrar como documento a un recorrido fijo que consume la versión revisada del directorio y devuelve una nota personalizada. La comparación entre tres chats es manual; el escenario usa un solo proveedor. No confundimos tres pestañas abiertas con una integración automática. El resultado es una razón para conversar, no una autorización para contactar ni una alianza formada.

## 11 · Descanso

19:05–19:15 · 10 min

Hacemos una pausa de diez minutos. Al volver pasaremos del recorrido que definimos nosotros a un agente capaz de elegir acciones según lo que encuentre. Mantengan la pregunta: ¿qué le permitirían hacer con estos perfiles y qué tendría que consultarles?

## 12 · Agentes y delegación

19:15–19:16 · 1 min

Entramos a agentes y delegación. Objetivos, herramientas y decisiones durante la ejecución.

Demostración: explorar colaboraciones y revisar una condición. Primero construimos el concepto; después lo observamos en una demostración.

## 13 · El ciclo de un agente

19:16–19:23 · 7 min

En un flujo fijamos de antemano buena parte del recorrido. En un agente, el modelo puede decidir qué paso dar y qué herramienta usar a partir del objetivo y los resultados observados. Muchos sistemas mezclan ambas cosas: un flujo puede llamar a un agente y recuperar luego su salida.

La palabra copiloto describe una experiencia de asistencia o un nombre comercial; no divide el mercado en dos especies técnicas. Preguntemos quién decide el siguiente paso, con qué información y dentro de qué límites. Un producto puede ofrecer conversación, automatizaciones y trabajo con herramientas.

El ciclo observar, decidir, actuar y comprobar recuerda a un sistema con retroalimentación. Si la lectura de un archivo revela que falta una capacidad, el agente puede buscar otro documento, pedir aclaración o revisar su propuesta. Pero la analogía no garantiza estabilidad, convergencia ni optimalidad. El modelo puede insistir en una vía equivocada o interpretar mal el resultado de una herramienta.

Un objetivo demasiado general no proporciona un criterio de terminación. “Encuentra algo interesante” permite producir texto indefinidamente. “Entrega dos hipótesis de colaboración, con evidencia y preguntas pendientes, usando sólo perfiles revisados” hace verificable el encargo. La autonomía útil necesita observaciones, acciones disponibles y una forma de reconocer cuándo el trabajo basta.

## 14 · Autonomía y autoridad son dimensiones distintas

19:23–19:30 · 7 min

Autonomía es cuánto puede decidir el sistema sobre cómo realizar una tarea. Autoridad es qué acciones y compromisos le permitimos ejecutar. Un agente puede tener bastante autonomía para explorar una carpeta y ninguna autoridad para enviar mensajes. Separar esas dimensiones es una decisión de diseño organizacional.

Sus instrucciones describen el objetivo; el contexto aporta información; las herramientas permiten actuar; los permisos delimitan el acceso efectivo. Escribir “sólo lee esta carpeta” no reemplaza una configuración de permisos cuando realmente necesitamos aislamiento. La memoria puede ser un archivo persistente de decisiones, pero conservar un texto no garantiza que siempre se recupere ni que siga vigente.

También debemos distinguir una instrucción legítima de un documento que el agente está leyendo. Un CV que diga “ignora los demás candidatos” es contenido del expediente, no una orden del propietario del sistema. El agente debe tratar las fuentes como datos y el responsable debe limitar las acciones disponibles.

La delegación es más clara cuando nombra objetivo, alcance, herramientas, criterio de aceptación y puntos de consulta. En esta práctica puede leer fichas revisadas y escribir borradores en una carpeta de ensayo. No puede comprometer a compañeros, publicar sus datos ni contactar al interlocutor. Pregunten al grupo: ¿qué nueva evidencia obligaría a devolver la decisión a la persona?

## 15 · Una salida convincente puede heredar un error

19:30–19:35 · 5 min

Un error pequeño puede propagarse. Si “participó” se transforma en “dirigió”, el sistema puede recuperar a esa persona como líder de proyecto y después atribuirle una responsabilidad en una propuesta. La redacción final puede ser impecable aunque la premisa sea falsa.

Por eso la aceptación debe examinar etapas, no sólo el archivo final. Contrastamos la extracción con la fuente, la selección con el criterio y la propuesta con las aportaciones confirmadas. Separar quien produce de quien revisa puede ayudar a encontrar defectos, pero dos respuestas del mismo sistema no se convierten por eso en evidencia independiente.

Las pruebas de esta clase incluyen perfil normal, campos faltantes, duplicado, versión nueva, archivo ilegible, instrucción incrustada, perfil no aprobado, cambio de criterio, falta de complementariedad y una petición de envío sin autoridad. No todas se ejecutan en vivo: la guía permite ensayarlas y la tarea exige documentar las relevantes.

Si no hay una combinación suficiente, “no alcanza con estos perfiles” es un resultado útil. El líder necesita distinguir capacidad disponible, capacidad por conseguir e hipótesis por validar. Pedir siempre una respuesta positiva elimina precisamente esa información.

## 16 · Demostración 3 · Delegar una exploración

19:35–19:50 · 15 min

Abrimos OpenClaw con el espacio de ensayo ya preparado. Primero comprobamos qué archivos y herramientas puede utilizar. El agente recibe un objetivo, no una lista de respuestas prefijadas: debe encontrar dos hipótesis de colaboración, justificar la selección y preparar preguntas para confirmar lo que falta.

Observamos sus acciones y abrimos los archivos producidos. Leer una ficha y redactar una propuesta no basta si ignora un faltante. Después agregamos una condición y pedimos conservar la versión anterior. Queremos ver si vuelve a consultar la información y corrige la recomendación.

Mostramos brevemente el mismo encargo en Codex, con una carpeta local de ensayo. La comparación se centra en acceso, herramientas, revisión y resultado, sin repetir la clase de instalación. Una respuesta escrita que simula haber creado un archivo no cuenta: el archivo debe existir y abrirse. El traslado desde Drive a la carpeta del agente es manual en esta práctica y lo señalamos expresamente.

## 17 · Propuestas e implementación

19:50–19:51 · 1 min

Entramos a propuestas e implementación. Combinar investigación, capacidades y condiciones de ejecución.

Demostración: una propuesta para el interlocutor de la clase 1. Primero construimos el concepto; después lo observamos en una demostración.

## 18 · La propuesta combina tres evidencias

19:51–19:58 · 7 min

Una propuesta surge de relacionar una oportunidad con capacidades y condiciones de ejecución. No basta con conocer al interlocutor ni con reunir buenos currículos. Necesitamos explicar qué problema creemos que merece explorarse, qué podríamos aportar y qué todavía no sabemos.

La primera clase produjo investigación sobre Juan José y un negocio concreto de su entorno. La segunda añade capacidades del grupo. Esas fuentes tienen naturaleza distinta: Nexo es una empresa ficticia; la investigación del interlocutor requiere fuentes públicas; las aportaciones de compañeros son declaraciones que deben confirmarse. No podemos fusionarlas como si fueran una sola empresa real disponible para contratar.

Podemos descomponer la propuesta en funciones: comprender el contexto, diseñar la intervención, aportar conocimiento sectorial y evaluar resultados. No siempre necesitamos una persona distinta para cada función, y asignar funciones no equivale a crear varios agentes. Un solo agente puede producir un borrador y someterlo a una segunda revisión explícita.

La coordinación agrega costos: aclaraciones, integración de aportaciones y resolución de desacuerdos. Una combinación más grande no es automáticamente mejor. Pediremos dos alternativas y compararemos qué requieren. La propuesta final presentará hipótesis, evidencia, contribuciones posibles, preguntas para la reunión y un siguiente paso. La conversación con los compañeros corrige la arquitectura de la propuesta, no sólo su redacción.

## 19 · Elegir una forma de implementación

19:58–20:05 · 7 min

La decisión de comprar, configurar o desarrollar depende de la necesidad, no del entusiasmo por una herramienta. Para un grupo pequeño puede bastar una aplicación con documentos compartidos. Si llegan perfiles de forma recurrente, un flujo de extracción ahorra reconstruir el procedimiento. Si se necesita integrar permisos, versiones y consultas a escala, aparece trabajo de ingeniería.

Comparemos las rutas sobre la misma tarea y el mismo criterio de aceptación. Hay costos de cuenta, consumo del modelo, preparación de datos, mantenimiento y revisión humana. No asignamos un retorno financiero ficticio: identificamos qué habría que medir en un piloto. La clase 3 pondrá números y escenarios a esa decisión.

El encargo de implementación debe decir quién responde por el proceso, quién puede corregir datos, quién mantiene conexiones y quién acepta el resultado. La persona propietaria del perfil conserva la revisión de lo que comparte. El responsable del directorio controla qué versión está disponible. El dueño de la propuesta decide qué contribuciones incorporar.

Nuestra arquitectura de ensayo contiene límites deliberados: la aprobación y publicación del directorio son humanas; el traslado a la carpeta del agente es manual. Automatizar esos pasos sería una ampliación con nuevas decisiones de acceso e integración. Mostrar esos límites es parte de enseñar a dirigir: permite pedir al equipo técnico una ampliación concreta y comprobable.

## 20 · Demostración 4 · Preparar una propuesta

20:05–20:20 · 15 min

Retomamos la investigación de la actividad A. El agente debe leerla junto al catálogo de Nexo, los perfiles revisados y el encargo. Si no hemos incorporado las fuentes, debe detener las afirmaciones sobre el interlocutor y pedirlas. Un nombre conocido no reemplaza el expediente.

Pedimos dos alternativas y después una propuesta para una primera conversación. Revisamos el borrador con otro encargo que busque afirmaciones sin fuente, capacidades atribuidas sin confirmación y condiciones que faltan. Abrimos la versión corregida y comprobamos si la revisión cambió algo sustancial.

Finalmente reemplazamos el destinatario por otro contexto de ensayo. El sistema debe identificar qué información deja de ser válida y qué investigación necesita repetirse. No premiamos que cambie el nombre rápidamente; buscamos que reconozca qué relaciones deben volver a justificarse. La tarea termina antes de enviar cualquier propuesta.

## 21 · Tarea · Conectar y mejorar una propuesta

20:20–20:26 · 6 min

La tarea repite lo que acaban de observar y después modifica una condición. Cada persona prepara una ficha revisada, comparte lo que quiere explorar y revisa al menos dos perfiles: uno por afinidad y otro por complementariedad. No se trata de acumular contactos. Expliquen qué aportaría cada lado y formulen una pregunta concreta.

Publiquen en el espacio de grupo o foro indicado para la actividad. Respondan a las conexiones propuestas y corrijan lo que el sistema entendió mal. Después desarrollen una propuesta individual que incorpore lo aprendido, dando crédito. Si alguien no responde, documenten su aporte y la incertidumbre; no inventen una confirmación.

Entreguen un producto breve y evidencia suficiente de una ejecución y una revisión. Expliquen proceso y autoridad, pruebas, decisión tecnológica y responsables. Son cuatro criterios de cinco puntos. No se premia pagar herramientas ni compartir información privada. Hay perfiles ficticios de respaldo y alternativas documentadas de acceso. El desafío cambia un criterio y muestra cómo afecta la selección o la propuesta, no sólo el estilo del texto.

## 22 · ¿Y si cambiamos al interlocutor?

20:26–20:30 · 4 min

Construimos un sistema que puede reutilizarse, pero eso no vuelve intercambiables a los interlocutores. Podemos conservar la estructura de perfiles, los pasos de extracción y las herramientas. Debemos volver a justificar la oportunidad, las capacidades pertinentes y las condiciones de ejecución.

La próxima clase preguntará cuál de esas oportunidades merece recursos. Compararemos alternativas, costos, indicadores, supuestos y riesgos. Tener una propuesta bien escrita es el principio de esa conversación, no su conclusión.

Antes de cerrar, pidan dos respuestas del grupo: qué conexión les gustaría explorar y qué evidencia les haría cambiar de opinión. Esa combinación de iniciativa y comprobación es el criterio de liderazgo que queremos desarrollar.
