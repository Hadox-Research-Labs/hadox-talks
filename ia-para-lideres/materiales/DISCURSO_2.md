# Clase 2 · Discurso

## 1. Nuestro ejercicio: descubrir qué podemos hacer juntos

Hoy construiremos un sistema para conocernos mejor dentro del grupo y preparar mejores propuestas. El resultado concreto será un documento breve: qué queremos proponer al interlocutor que investigamos en la clase anterior, qué compañeros podrían contribuir, qué aportamos nosotros y qué falta confirmar.

El sistema empieza con información de ustedes: experiencia, intereses actuales y condiciones para colaborar. Una automatización prepara fichas comparables. Cada persona revisa la suya antes de compartirla. Después cada integrante consulta el mismo directorio con un objetivo diferente. Finalmente un agente trabaja con esas fichas, el objetivo y la investigación del interlocutor para preparar una propuesta.

La conversación entre compañeros es parte del ejercicio: alguien puede corregir lo que su ficha parecía sugerir. Esa corrección debe cambiar el resultado. No basta con que la IA escriba una propuesta convincente.

Yo haré tres demostraciones completas. Ustedes repetirán ese recorrido como tarea con su información y un desafío: cambiar una condición relevante y explicar qué cambió en su propuesta. Durante el ensayo usaré perfiles ficticios. Ana será la persona que busca colaborar: sabe diseñar materiales de aprendizaje y quiere trabajar con un problema operativo. Cada compañero aparecerá cuando necesitemos su información.

## 2. Automatizar las fichas

Primero resolveremos un problema de información y de proceso. Los documentos llegan con formatos distintos y no contienen todo lo que necesitamos saber. Tenemos que decidir qué conservar y qué preguntar. Después diseñaremos qué ocurre cada vez que entra un documento. Esta separación es fundamental: un buen flujo puede repetir miles de veces una mala representación. Antes de acelerar el trabajo, definimos qué significará un resultado correcto.

## 3. Una ficha es una representación

Representar consiste en conservar ciertos aspectos de algo para poder trabajar con ellos. Un mapa conserva relaciones espaciales y omite muchísimos detalles del territorio. Nuestra ficha hace algo parecido con una trayectoria profesional. La pregunta relevante es qué debe conservar para el uso que le daremos.

Si queremos encontrar colaboradores, no basta con extraer nombre, puesto y empresa. Debemos preguntar qué puede aportar la persona, qué quiere construir y qué necesita de otros. Esas variables determinan qué conexiones podrá encontrar después el sistema. Elegirlas ya es una decisión de dirección, aunque todavía no hayamos abierto ninguna herramienta.

Podemos escribirlo como una transformación: la ficha es una función del documento y del esquema que elegimos. Dos esquemas producen dos representaciones distintas del mismo documento. Además, un CV suele describir el pasado y puede decir poco sobre las intenciones actuales. Por eso añadimos información propia, declarada por la persona.

Toda selección pierde información. La solución práctica es conservar la fuente y permitir volver a ella. La ficha facilita una primera comparación; la evidencia original permite comprobarla. Antes de automatizar, preguntémonos qué decisión sería imposible con los campos que elegimos.

Aquí entra otra distinción: extracción, inferencia y pregunta. Si Ana dice que diseñó materiales y facilitó talleres, podemos extraer esas actividades. Decir que dirigió un departamento añade un cargo sin respaldo. Proponer que podría ayudar con una inducción es una hipótesis que debemos consultar. Si no declara disponibilidad, dejamos el campo pendiente.

Podemos pensar la ficha como R igual a una transformación del documento y del esquema elegido. El esquema determina lo que el sistema podrá distinguir. Si omitimos intereses, personas con la misma experiencia parecerán intercambiables aunque quieran proyectos distintos. Si confundimos ausencia con cero, descartaremos personas por información que nunca solicitamos. Por eso conservamos fuentes, faltantes y posibilidad de corrección.

## 4. Automatizar es definir qué ocurre después

Una automatización relaciona un evento con acciones y condiciones. Llega un archivo, obtenemos su contenido, transformamos ese contenido y registramos un resultado. El proceso puede incluir un modelo de lenguaje, pero la secuencia de pasos la hemos definido nosotros.

Conviene distinguir evento, estado y regla. El evento es que llegó un documento. El estado puede ser recibido, borrador, pendiente o vigente. La regla indica qué transición permitimos: por ejemplo, un borrador pasa a vigente después de la revisión de su propietario. Publicar automáticamente todo lo que produce el modelo sería otra regla, con consecuencias distintas.

La extracción puede fallar porque el archivo es ilegible. También puede funcionar técnicamente y producir una interpretación incorrecta. Son problemas diferentes. El primero requiere recuperar una entrada legible; el segundo exige revisar el contenido. Si no definimos esas rutas, el caso excepcional termina convertido en trabajo invisible para alguien.

La lámina describe el proceso completo que queremos dirigir. En la demostración, Make preparará el borrador y la publicación seguirá siendo una decisión humana. Esa frontera es parte del diseño: tener un paso manual no impide automatizar el resto.

El modelo de lenguaje puede producir una extracción diferente al repetir la misma entrada. El flujo sigue siendo predefinido aunque una de sus transformaciones sea probabilística. No debemos confundir orden de ejecución con exactitud del contenido.

También necesitamos memoria del proceso: identidad del documento, versión y estado. Si el archivo se recibe dos veces, no queremos dos personas nuevas. Si alguien actualiza su perfil, queremos una versión vigente. Reintentar una operación debe evitar duplicar sus efectos; esta propiedad se llama idempotencia. En nuestro prototipo, la revisión y publicación manual mantienen ese control. Una implementación posterior tendría que convertirlo en reglas y registro persistente.

La decisión de liderazgo es identificar quién responde por cada transición y qué ocurre cuando falla. Un archivo ilegible queda pendiente; una ficha sin autorización no se publica. Automatizar incluye esas rutas, además del caso que funciona.

## 5. Demo 1 · construir el directorio

Ahora salgo a Make. Tomaré un perfil ficticio y su intención actual, ejecutaré el flujo y abriré el borrador generado. Compararé lo que dice con el documento original, corregiré una afirmación si hace falta y mostraré cómo se publica la ficha revisada en el directorio. También mostraré qué ocurre con un faltante o un archivo repetido. Esta es la primera parte que repetirán con su propia información. El directorio compartido será la entrada de la siguiente demostración.

## 6. Encontrar colaboradores

Ahora ya tenemos información comparable. Pero un directorio no sabe por sí mismo qué conexión nos conviene. La recomendación depende de una pregunta y de condiciones concretas. Vamos a distinguir semejanza, complementariedad y posibilidad real de colaborar. Después usaremos exactamente las mismas fuentes y el mismo objetivo en tres herramientas para poder discutir sus diferencias.

## 7. Una conexión depende del objetivo

Una conexión útil es una relación entre personas y un objetivo, no una propiedad fija de una persona. Con los mismos perfiles podemos obtener recomendaciones distintas cuando cambia lo que buscamos.

Ana diseña materiales de aprendizaje. Si busca discutir cómo evaluar un taller, Clara puede ser pertinente porque tiene experiencia en evaluación. Eso es afinidad. Si Ana busca entender un relevo operativo para preparar una guía, Bruno aporta conocimiento que ella no tiene. Eso es complementariedad. Ninguna relación demuestra todavía que puedan trabajar juntos: necesitan interés, tiempo y autorización para usar la información.

Podemos expresar la recomendación como una función de los perfiles, el objetivo y las restricciones. Antes de ordenar candidatos, conviene aplicar condiciones de viabilidad: por ejemplo, si el trabajo debe ser remoto. Después comparamos aportaciones. No necesitamos inventar porcentajes de compatibilidad; necesitamos una justificación que podamos discutir y una pregunta que resuelva lo desconocido.

El criterio de Ana será: quiero preparar una guía breve para equipos de operación; busco experiencia en procesos y puedo aportar diseño de materiales. Pediremos evidencia, un aporte recíproco y una pregunta pendiente para cada conexión. Cuando hable con Bruno podrá descubrir que primero hace falta documentar el proceso. La conversación modifica el problema, no sólo confirma un nombre.

## 8. Demo 2 · encontrar con quién colaborar

Usaré el mismo directorio y el mismo criterio en las tres herramientas. No elegiré por lo elegante de la redacción: buscaré qué fuente respalda la conexión, qué supone y qué pregunta propone. Después mostraré cómo repetir esa consulta mediante el segundo flujo de Make cuando entra un nuevo criterio.

El resultado será una nota que pueda usar para iniciar una conversación: me interesa este problema, vi que tienes esta experiencia, yo podría aportar esto y quisiera preguntarte aquello. Mostraré una respuesta ficticia de Bruno, identificada como tal, para enseñar cómo incorporar una corrección. En la tarea ustedes conversarán con personas reales del grupo. Finalmente cambiaré una condición y compararé ambas recomendaciones.

## 9. Descanso

Tomamos diez minutos. Piensen en un objetivo propio: qué les gustaría construir, qué pueden aportar y qué necesitan de otra persona. Esa formulación será la entrada de su tarea. Al volver veremos qué cambia cuando el sistema puede elegir sus siguientes acciones para alcanzar un objetivo.

## 10. Delegar una propuesta

Hasta ahora definimos el recorrido: recibir, extraer, consultar y registrar. Ahora delegaremos un objetivo y permitiremos que el sistema elija parte de los pasos. Esa es la distinción que nos interesa estudiar.

Copiloto describe una relación de asistencia: la persona conduce el trabajo y solicita ayuda. Una automatización sigue transiciones que diseñamos de antemano. Un agente puede seleccionar acciones según lo que observa, revisar resultados y decidir cómo continuar. Las herramientas actuales pueden combinar estas formas de trabajo; no son tres categorías fijas de productos.

La pregunta útil es quién decide el siguiente paso, con qué información y bajo qué límites. Al delegar más decisiones tenemos que definir mejor la meta, las condiciones de aceptación y la autoridad.

## 11. El ciclo del agente

Un agente trabaja en un ciclo. Observa información del entorno, elige una acción, usa una herramienta y vuelve a observar el resultado. Su siguiente paso puede depender de lo que acaba de ocurrir. Esa retroalimentación es la diferencia que nos interesa estudiar.

Imaginemos que prepara una colaboración para Ana y encuentra que Clara tiene experiencia pertinente, pero no declaró disponibilidad. Puede consultar otro archivo autorizado. Si tampoco encuentra la respuesta, puede registrar la pregunta pendiente. La falta de información no se resuelve repitiendo indefinidamente la misma consulta ni inventando una condición conveniente.

En términos de sistemas, el estado cambia después de cada acción y la decisión siguiente depende del estado observado. Pero el agente no observa todo el mundo: sólo aquello que sus herramientas y permisos hacen accesible. Por eso un razonamiento aparentemente completo puede estar apoyado en una observación incompleta.

Necesitamos definir cuándo termina: por haber producido el resultado aceptable, por agotar un presupuesto de trabajo o por encontrar un bloqueo que requiere una persona. La lámina es un ejemplo conceptual. En la demostración veremos qué acciones ejecuta realmente la herramienta y abriremos los archivos que produzca.

Las instrucciones definen la tarea y las restricciones. El contexto aporta los perfiles y la investigación. Las herramientas permiten leer documentos o escribir archivos. El registro conserva qué hizo y con qué resultado. La evaluación compara ese resultado con la meta; sin ella podemos tener actividad que nunca converge.

La retroalimentación no garantiza corrección. Si el agente usa la misma suposición equivocada para producir y evaluar, puede reforzar su error. Por eso pedimos comprobaciones externas: volver al perfil, señalar la fuente y consultar a la persona. También definimos condiciones de parada: información indispensable ausente, acción fuera de permiso o propuesta lista para revisión.

En nuestro caso el agente puede leer fichas, plantear equipos, escribir una propuesta y revisarla. Si Clara no declaró disponibilidad, el ciclo debe producir una pregunta pendiente. No debe inventar el dato para poder terminar. La incertidumbre es un resultado legítimo cuando queda localizada y explicada.

## 12. Autoridad y pruebas de aceptación

Autonomía es cuánto puede decidir durante el trabajo. Autoridad es qué consecuencias tiene permiso de producir. Un agente puede tener autonomía para explorar documentos sin autoridad para invitar a alguien, enviar un correo o comprometer recursos. Esa separación debe aparecer en las herramientas disponibles y en el encargo, además del texto del prompt.

La aceptación observa conducta. No basta con leer una respuesta bien redactada. Quitaremos un dato para comprobar que mantiene el faltante; cambiaremos la disponibilidad para ver si revisa la propuesta; pediremos una acción no autorizada para ver si respeta la frontera. También debemos tratar las instrucciones incrustadas en documentos como contenido, no como órdenes que sustituyan el encargo.

Una prueba registra entrada, comportamiento esperado, resultado observado y corrección. El material incluye diez casos para la prueba funcional PBS y una suma de disponibilidad para comprobar unidades. Los recorreré dentro de la demostración con entradas preparadas; no serán diez ejercicios nuevos. Para ustedes será la misma batería sobre su ejecución.

Como líderes, decidimos quién revisa, quién autoriza y quién atiende excepciones. La calidad del sistema incluye ese reparto de responsabilidades.

## 13. Demo 3 · preparar y revisar una propuesta

Ahora entrego al agente una carpeta con el directorio revisado, el criterio de Ana y las fuentes de la investigación de clase 1. Usaremos también el catálogo ficticio de Nexo como límite de lo que la organización del ensayo puede ofrecer. Le pediré dos alternativas de colaboración y una propuesta breve para conversar con el interlocutor.

Observaré los documentos que consulta y comprobaré los archivos que guarda. Después incorporaré la respuesta ficticia de Bruno: antes de una capacitación necesita documentar el proceso. La propuesta deberá cambiar hacia una guía o un trabajo previo de documentación. No vamos a inventar una demanda de Juan José ni un compromiso de Bruno.

Cambiaré una restricción, ejecutaré los casos de aceptación preparados y mostraré el contraste con Codex sobre la misma carpeta. Al final veremos una propuesta inicial, una revisada y las razones de la revisión. Éste es el resultado que repetirán con sus conversaciones reales. Si una fuente indispensable falta, la salida correcta debe identificarla y proponer la pregunta necesaria; no completar el hueco con una historia.

## 14. Cómo dirigir su implementación

Ya vimos funcionar el recorrido. Ahora podemos formular un encargo que otra persona pueda implementar. Debe identificar entrada, salida, reglas, excepciones, herramientas, cuentas, permisos y responsables. Decir queremos un agente para conectar personas no basta: necesitamos explicar qué información recibe y cómo sabremos que el resultado sirve.

Comprar una solución existente puede reducir tiempo de puesta en marcha, pero debemos comprobar que admite nuestros datos y permisos. Configurar herramientas nos permite combinar componentes, a cambio de mantener las conexiones. Desarrollar tiene sentido cuando una necesidad relevante no está cubierta y podemos sostener su operación. La decisión depende del caso y sus restricciones; no de cuál opción suena más avanzada.

Nuestro prototipo tiene fronteras visibles: la persona revisa su ficha y se publica una versión; el traspaso hacia la carpeta del agente puede ser manual. Para convertirlo en un servicio continuo habría que resolver identidad, acceso, actualizaciones y atención a fallos. No debemos presentar un demo como si ya tuviera esa operación.

El encargo de la tarea será breve, ligado al sistema que acabamos de construir. Al cambiar de interlocutor podemos conservar la estructura, pero debemos reemplazar y verificar su investigación. La siguiente clase preguntará si esa propuesta es viable: recursos, costos, capacidad y escenarios.

## 15. Tu tarea: repetir el sistema con tu grupo

La tarea consiste en repetir el sistema que acabo de demostrar con su información y un interés propio. Cada persona comparte una ficha revisada. Lee al menos dos fichas del grupo, obtiene recomendaciones con su criterio y conversa con esos compañeros, ofreciendo también algo concreto. Si no recibe una respuesta, registra que está pendiente.

Con el agente prepara una propuesta para el interlocutor de clase 1 y la corrige con lo aprendido en las conversaciones. El desafío es cambiar una condición: el objetivo, la disponibilidad o la modalidad. Conserva ambas versiones y explica por qué cambió la propuesta. Cambiar sólo el nombre no cumple el desafío.

La entrega será un documento breve con anexos de ejecución: ficha, conexiones, conversaciones y propuesta antes y después. Incluye la misma batería funcional y el cálculo que mostramos, más un encargo breve con decisión tecnológica y responsables. La guía organiza todo como un solo recorrido, con veinte puntos de evaluación. No se pide contactar al interlocutor externo. Si mañana lo sustituyéramos por otra persona, tendríamos que investigar de nuevo su contexto antes de reutilizar el método.