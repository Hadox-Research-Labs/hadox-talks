# Conocernos para construir juntos · Discurso

## 1. Conocernos para construir juntos

En la primera clase investigamos a una persona para preparar una conversación con fundamento. Hoy vamos a investigar otra parte del problema: nosotros mismos. ¿Qué capacidades hay en este grupo? ¿Qué queremos hacer con ellas? ¿Qué oportunidades aparecen cuando combinamos lo que sabemos?

La automatización nos ayudará a organizar información que llega dispersa. Los agentes nos permitirán delegar parte de la exploración y de la preparación de una propuesta. La conversación entre ustedes pondrá a prueba lo que la máquina haya interpretado. Vamos a estudiar los principios y después los veremos operar en tres demostraciones. La tarea será repetir ese recorrido con un interés propio y un cambio que obligue a reconsiderar el resultado.

## 2. El resultado que vamos a construir

Pongamos primero el destino. Al terminar tendremos una propuesta breve para conversar con el interlocutor investigado en la clase anterior. No es un mensaje enviado ni una venta cerrada. Debe explicar un problema posible, una aportación que podemos sostener, las personas que podrían contribuir y las preguntas pendientes.

Para llegar ahí construiremos un directorio con fichas que cada persona revisa. Cada integrante lo consultará con su propio objetivo. Por ejemplo: quiero desarrollar una guía para un equipo operativo; puedo diseñar materiales, pero necesito entender el proceso que debería explicar. La IA puede ayudarme a localizar experiencia pertinente y a formular una invitación recíproca. La otra persona puede decirme que el problema es diferente o que no dispone del tiempo que imaginé.

Esa respuesta cambia la propuesta. Así entra la realidad en el sistema. El ejercicio tiene una parte automática, una parte de razonamiento delegado y una parte de conversación humana. Ninguna sustituye a las otras.

En las demostraciones usaré perfiles ficticios y la organización Nexo del caso. En su tarea ustedes compartirán fichas propias, revisadas, con el grupo; no necesitan publicar sus CV completos. Recuperarán la investigación real de clase 1 y conservarán la diferencia entre una oportunidad posible y una necesidad confirmada.

## 3. Automatización

Antes de elegir una herramienta necesitamos responder dos preguntas distintas. Qué información conviene conservar y qué procedimiento seguirá esa información. La primera define nuestra representación. La segunda define el proceso. Si el esquema omite lo que importa, un flujo perfectamente ejecutado puede producir fichas inútiles. Empezaremos por el significado y después construiremos la repetición.

## 4. Representar información es elegir qué conservar

Un modelo de información reduce la complejidad para permitir una operación. Un mapa conserva unas relaciones del territorio y descarta otras. Una ficha profesional hace lo mismo: selecciona variables para que podamos comparar, buscar y decidir. La reducción es útil precisamente porque no conserva todo. El problema es perder lo que necesitaremos después.

Podemos escribir la representación como R igual a f de D y E: documento y esquema. El mismo documento produce representaciones distintas si cambia el esquema. Un directorio de cargos sirve para unas preguntas; un directorio de aportaciones, intereses y condiciones sirve para otras. Elegir las variables ya es una decisión de dirección.

Un CV describe principalmente experiencia pasada. No nos dice necesariamente qué quiere construir alguien hoy, qué está dispuesto a compartir o cuánto tiempo puede dedicar. Por eso añadimos una declaración de intención y condiciones. No le pedimos al modelo que adivine esas variables.

Aquí hay tres estados epistemológicos diferentes. Declarado: la fuente dice que diseñó materiales de inducción. Inferido: podría contribuir a una guía. No disponible: no sabemos su tiempo. Convertir la inferencia en un cargo o el faltante en disponibilidad produce una certeza falsa. El sistema debe conservar esas diferencias.

La fuente original permite comprobar y corregir la reducción. En el ejercicio, cada persona revisa su ficha antes de compartirla. La calidad no consiste en que todas las casillas estén llenas: consiste en que podamos distinguir lo que sabemos, lo que suponemos y lo que necesitamos preguntar.

## 5. Un flujo es una regla de transición

Una automatización relaciona eventos, estados y acciones. Un evento sucede: llega un archivo. El sistema tiene un estado: recibido, borrador, pendiente o vigente. Una regla decide qué puede ocurrir después. La fórmula del diagrama es conceptual: el estado siguiente depende del estado actual y del evento que observamos.

En nuestro caso, recibir un archivo inicia extracción y organización. El resultado es un borrador. Para convertirlo en una ficha compartida exigimos revisión. Esa transición tiene un responsable. El sistema no debería tratar borrador y vigente como equivalentes.

Puede haber IA dentro de una secuencia predefinida. El hecho de que un modelo redacte una ficha no vuelve agente al conjunto. Tampoco vuelve correcta la ficha. El flujo puede terminar técnicamente y conservar una afirmación falsa. Por eso distinguimos éxito de ejecución y aceptación del contenido.

Ahora imaginemos una interrupción. Reintentamos y llega el mismo documento otra vez. Queremos repetir la operación sin duplicar a la persona: ésa es la idea de idempotencia. Si llega una corrección, debemos reconocer la identidad, conservar la trazabilidad y publicar la versión vigente. En el prototipo resolveremos parte de ese control con revisión humana explícita; automatizarlo completamente exige reglas y almacenamiento adicionales.

Un archivo ilegible debe tomar una ruta de excepción. Dejarlo pendiente, registrar el motivo y pedir otra fuente es un resultado controlado. El trabajo de dirección consiste en definir esos resultados y quién responde por ellos, además de describir el camino ideal.

## 6. Demo 1 · del documento al directorio

Voy a salir de las láminas y construir este recorrido en Make. El perfil de ensayo es de Ana: ha diseñado materiales de inducción y quiere colaborar en un problema operativo. Su documento aparecerá en pantalla antes de pedirle a la IA que lo interprete.

Mostraré la entrada, la ficha generada y la comparación con la fuente. Revisaré un faltante y explicaré la publicación de la ficha. Después mostraré cómo tratamos una repetición o corrección. La salida que vamos a conservar es el directorio revisado. Será la entrada de la siguiente demostración. Ustedes repetirán esta parte con su información y compartirán sólo lo que hayan autorizado.

## 7. Conexiones

Ya tenemos un directorio, pero todavía no una colaboración. La relación entre dos personas depende de lo que buscan construir. Cambiaremos de pregunta sin cambiar los perfiles, para observar esa dependencia. Después veremos por qué una recomendación necesita una conversación antes de convertirse en un compromiso.

## 8. La conexión depende de la pregunta

Una red no es solamente una lista de personas: incluye relaciones. Y una relación de colaboración no significa lo mismo bajo cualquier objetivo. En el dibujo mantenemos a las mismas personas y cambiamos la pregunta. Las conexiones relevantes cambian aunque nadie haya modificado su trayectoria.

Para diseñar y evaluar un taller puede servir la afinidad entre aprendizaje y evaluación. Para explicar un proceso, quien diseña materiales necesita a alguien que conoce la operación. Esa complementariedad combina aportaciones distintas. Ninguna de las dos garantiza por sí misma que exista un proyecto viable.

La recomendación depende de perfiles, objetivo y restricciones. Conviene separar condiciones indispensables de preferencias. Si el proyecto requiere trabajo remoto y una persona sólo puede participar presencialmente, la restricción pesa antes de cualquier semejanza temática. Si la disponibilidad no está declarada, la salida es una pregunta; no una exclusión automática ni un tiempo inventado.

También hay una dimensión recíproca. ¿Por qué le interesaría a la otra persona colaborar conmigo? La consulta debe describir lo que busco y lo que ofrezco. El resultado útil incluye una razón respaldada y una pregunta concreta que abra conversación.

En la práctica compararemos Gemini, ChatGPT y Claude con los mismos datos y criterio. Observaremos las razones, los faltantes y las diferencias. No atribuiremos calidad a una marca por una sola respuesta. Finalmente cambiaremos el criterio: el sistema tiene que poder explicar por qué su recomendación cambia o se mantiene.

## 9. Demo 2 · una búsqueda con propósito propio

Ahora consultaré el directorio como alguien que quiere preparar una guía para equipos operativos y puede aportar diseño de materiales. Abriré los perfiles relevantes al leer sus nombres: Bruno conoce procesos; Clara ha trabajado en evaluación de talleres. Nadie será un personaje que tengamos que recordar de una historia anterior.

Enviaré la misma consulta a Gemini, ChatGPT y Claude. Compararé qué fuente citan, qué suponen y qué preguntan. Después ejecutaré el segundo flujo de Make para repetir esa consulta a partir de un criterio recibido.

Con una recomendación prepararé una pregunta recíproca. Mostraré una respuesta ficticia de ensayo: antes de capacitar hace falta documentar el proceso. Esa información obliga a revisar el objetivo. En su tarea la respuesta vendrá de sus compañeros reales. Cambiaré una condición y conservaré ambas salidas para que podamos observar la diferencia.

## 10. Descanso

Tomamos diez minutos. Quédense con estas dos preguntas: qué quieren construir y qué pueden aportar. Al volver delegaremos al agente la preparación de una propuesta, usando los perfiles, el objetivo y la investigación de clase 1.

## 11. Agentes

En los flujos anteriores definimos el recorrido de antemano. Ahora permitiremos que el sistema elija parte de sus acciones para alcanzar una meta. Para dirigir ese trabajo tenemos que entender qué observa, cómo decide, qué puede hacer y cómo sabe cuándo detenerse.

## 12. Tres formas de organizar el trabajo

Copiloto es una manera de describir una relación de asistencia: la persona mantiene la conducción y pide ayuda en momentos concretos. No necesitamos imaginar una categoría de productos que sólo haga eso. Una misma herramienta puede responder una pregunta, participar en un flujo o ejecutar un trabajo con mayor autonomía.

En un flujo, las transiciones relevantes fueron diseñadas previamente. Puede haber condiciones, ramas y modelos de lenguaje; no tiene por qué ser una línea simple. La distinción es que el procedimiento determina cómo avanzar.

En un agente, el sistema selecciona acciones en función de un objetivo y de lo que observa. Puede decidir qué documento leer después, qué herramienta invocar o qué alternativa revisar. Esa selección no le concede autoridad ilimitada.

Pensemos en el mismo objetivo: preparar una propuesta. Con asistencia, yo llevo documentos y pido operaciones una por una. Con un flujo, defino etapas que se repiten. Con un agente, doy una meta, fuentes y herramientas, y permito que el sistema elija una parte del recorrido. En la práctica podemos combinarlos: un flujo prepara los datos, un agente explora y una persona autoriza el resultado.

La decisión depende de la variabilidad de la tarea y del control que necesitamos. Delegar más no es automáticamente mejor: puede introducir costo, dificultad para diagnosticar errores y acciones innecesarias. Primero definimos qué decisión merece delegarse.

## 13. El agente necesita un ciclo de evaluación

El agente funciona mediante un ciclo. Observa información, decide una acción, la ejecuta y comprueba el efecto. El resultado cambia lo que puede observar en la siguiente vuelta. La retroalimentación permite adaptar el recorrido; también puede propagar un error si la comprobación es deficiente.

Las instrucciones describen meta y restricciones. El contexto contiene perfiles, criterio e investigación. Las herramientas determinan qué acciones son posibles: leer archivos, escribir borradores o consultar una fuente. El registro permite reconstruir qué se hizo. El modelo, por sí solo, no equivale a todo ese sistema.

Debemos definir qué significa avanzar. Una propuesta más larga no necesariamente está mejor sustentada. Si faltaba disponibilidad y el agente produjo un párrafo adicional, no resolvió el problema. Una comprobación útil vuelve a la fuente, detecta el faltante y solicita aclaración.

Hay condiciones de parada distintas: tarea aceptable, evidencia insuficiente, acción fuera de permiso o límite de recursos. Detenerse con una pregunta localizada puede ser mejor resultado que seguir generando texto.

La analogía con un sistema de control ayuda: hay una meta, observaciones, acciones y una comparación. Pero la observación puede ser incompleta y la evaluación también puede equivocarse. Por eso incorporamos comprobaciones externas y revisión humana. En nuestro ejercicio, la respuesta de un compañero es nueva información que obliga a revisar la propuesta; es una realimentación desde el mundo y no sólo desde otro texto del modelo.

## 14. Autonomía, autoridad y aceptación

Autonomía y autoridad responden a preguntas distintas. Autonomía: cuánto puede elegir el sistema durante su trabajo. Autoridad: qué consecuencias tiene permiso de producir. Podemos darle libertad para explorar alternativas sin darle permiso para comprometer a nadie ni enviar documentos.

Esa frontera debe aparecer en el encargo y en los accesos disponibles. Si una tarea sólo requiere leer perfiles y escribir borradores, no necesita herramientas de mensajería. Una carpeta seleccionada no equivale por sí misma a una barrera de seguridad; hay que revisar los permisos reales de la herramienta.

La prueba de aceptación traduce expectativas en conducta observable. Preparamos una entrada, definimos qué esperamos, ejecutamos y comparamos. Quitamos un dato: debe conservar el faltante. Cambiamos el criterio: debe revisar la propuesta. Introducimos una instrucción dentro de un documento: debe tratarla como contenido de la fuente, no como una orden que sustituye el encargo.

Los diez casos del material son una batería funcional del mismo sistema, no diez proyectos nuevos. Incluyen excepciones y un cálculo sencillo de disponibilidad que verificaremos con unidades. Una salida bien escrita no demuestra que se leyó una fuente, se guardó un archivo o se respetó un permiso. Abriremos las evidencias.

La pregunta de liderazgo es quién acepta el resultado y quién atiende los fallos. Sin esos responsables, la autonomía sólo desplaza el trabajo de revisión hacia alguien que no fue identificado.

## 15. Demo 3 · una propuesta que puede corregirse

Abriré OpenClaw con la carpeta del caso y un encargo claro. El agente podrá consultar perfiles, comparar aportaciones y escribir borradores. Recuperaremos la investigación verificada del interlocutor de clase 1 y el catálogo ficticio de Nexo, que limita lo que podemos ofrecer dentro del ensayo.

Mostraré las fuentes y los archivos de salida. Elegiremos una alternativa y revisaremos si cada afirmación tiene respaldo. Después incorporaré la respuesta ficticia del compañero y cambiaré una condición. Abriremos las dos versiones para ver qué cambió y por qué.

Haré un contraste con Codex sobre una copia de las mismas fuentes y recorreré la batería funcional preparada, incluyendo el cálculo. No necesitamos que todas las herramientas respondan igual; necesitamos observar su comportamiento frente al mismo encargo.

En la tarea, ustedes reemplazarán los perfiles de ensayo por las fichas autorizadas del grupo y la conversación ficticia por sus intercambios reales. El producto será una propuesta para revisar, no un envío automático al interlocutor.

## 16. Convertir el prototipo en un encargo

Después de la demostración podemos distinguir un prototipo de un sistema en operación. El prototipo muestra que un recorrido es posible bajo ciertas condiciones. La operación debe sostenerlo cuando cambian usuarios, archivos, permisos y versiones.

Comprar, configurar y desarrollar son alternativas con costos de operación diferentes. Comprar puede reducir el tiempo de inicio, pero debemos comprobar acceso, portabilidad y adecuación al proceso. Configurar permite combinar componentes, a cambio de mantener conexiones y excepciones. Desarrollar permite resolver requisitos propios y también crea responsabilidad de mantenimiento. La comparación empieza por una necesidad concreta, no por una preferencia por herramientas.

Nuestro encargo describe el mismo sistema del grupo. Entradas: documentos e intención. Salidas: ficha, conexiones y propuesta revisada. Incluye cuentas, quién autoriza los datos, dónde se conserva la versión vigente y cómo pasa la información al agente. Si ese paso es manual, lo escribimos como manual. No prometemos una integración que no mostramos.

Asignamos responsabilidades: cada integrante revisa su ficha; alguien administra el espacio compartido; una persona atiende fallos del flujo; quien presenta la propuesta verifica fuentes y compromisos. Definimos aceptación mediante los casos observados.

Para justificar la inversión todavía faltan recursos, costos y escenarios. Ésa será la tercera clase. Hoy la decisión es si sabemos formular un trabajo suficientemente preciso como para implementarlo y verificarlo. El encargo de una página obliga a hacer explícitas las condiciones que el entusiasmo por el demo suele ocultar.

## 17. La tarea: construir la red del grupo

La tarea repite lo que yo he demostrado. Cada persona prepara su ficha y comparte una versión revisada. Consulta el directorio con su propio objetivo y conversa con al menos dos compañeros. La conversación debe ser recíproca: qué me interesa, qué puedo ofrecer y qué necesito preguntar. También respondemos a quienes se acerquen a nosotros.

El agente prepara una propuesta con esas fichas y la investigación de clase 1. Ustedes verifican lo que afirma e incorporan lo aprendido al conversar. Si una respuesta sigue pendiente, así debe aparecer.

El desafío consiste en cambiar una condición que importe: objetivo, disponibilidad o modalidad. Conservan la propuesta inicial y la revisada y explican la diferencia. Una variación de redacción o cambiar sólo el nombre no demuestra adaptación.

La entrega reúne el recorrido en un documento con anexos: ficha, conexiones, conversación, propuestas, batería funcional y cálculo, más el encargo de implementación. La rúbrica conserva los cuatro criterios PBS: proceso y autoridad, pruebas, decisión tecnológica, responsables y encargo. Son veinte puntos. La participación y sus correcciones son evidencia del proceso y de las pruebas. Las cuentas y las instrucciones de instalación están en el material de preparación.

## 18. ¿Y si cambiamos de interlocutor?

Hoy organizamos información, encontramos conexiones y delegamos la preparación de una propuesta. El valor está en que podemos explicar cómo llegamos a ella y qué tendría que cambiar si aparece información nueva.

Si sustituimos al interlocutor de clase 1 por otra persona, podemos conservar el directorio y buena parte del procedimiento. Pero debemos volver a investigar su contexto, revisar la pertinencia de nuestra aportación y comprobar los supuestos. Reutilizar el método no significa reciclar una promesa cambiando el nombre.

La siguiente pregunta es económica y operativa: cuánto tiempo exige, qué recursos consume, qué beneficio esperamos y bajo qué escenario deja de convenir. En la tercera clase construiremos esa evaluación. Por ahora, el grupo tiene una tarea concreta: convertir lo que sabe de sus propios integrantes en una propuesta que se pueda discutir y corregir.