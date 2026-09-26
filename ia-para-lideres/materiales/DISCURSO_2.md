# Clase 2 · Discurso y transiciones

16 láminas · 4 bloques · 150 minutos.

## 01 · De una oportunidad a trabajo organizado

18:00–18:03 · 3 min

La clase pasada vimos cómo cambia una respuesta cuando la herramienta dispone de contexto. Después propusimos investigar, compartir fuentes y preparar una oportunidad para Nexo. Hoy vamos a mirar qué trabajo hay entre encontrar una idea y llegar a una reunión bien preparada.

Imaginen que diez personas del comité encuentran oportunidades. Una llega por mensaje, otra está en un documento y una tercera queda dentro de un chat. Alguien debe reunirlas, conservar su origen y preparar el material para decidir. Ése es nuestro punto de partida: organizar trabajo que ya entendemos.

Vamos a alternar explicación y demostración. Yo haré los recorridos y les mostraré tanto la configuración como el resultado. Ustedes observarán qué ocurre y podrán preguntar. Después repetirán las demostraciones como tarea y las adaptarán a una oportunidad diferente. Aprenderemos primero a usar las herramientas y después a decidir dónde tendrían sentido en una empresa.

## 02 · Automatización

18:03–18:04 · 1 min

Ahora entramos al bloque 1: Automatización. Del trabajo repetitivo a un recorrido claro.

Verás: una entrada que llega a su registro. Decidirás: qué tarea vale la pena automatizar. Primero explico la idea y después la muestro en la herramienta.

## 03 · Automatizar es acordar un recorrido

18:04–18:14 · 10 min

Automatizar es acordar un recorrido.

Automatizar significa que un sistema ejecuta un recorrido definido cuando sucede algo. Un disparador inicia el trabajo: llega una respuesta a un formulario o aparece una fila nueva. La entrada es la información que recibe. Las reglas describen condiciones, las acciones hacen el trabajo y la salida es lo que otra persona necesita.

Un ejemplo cotidiano es registrar una oportunidad comercial. El formulario recoge la nota, su fuente y quién la encontró. La automatización toma esos campos y los coloca en una tabla. No necesita comprender el negocio para hacer esa primera transferencia.

Conviene separar la tarea del proceso. Copiar una nota es una tarea. Investigar, registrar, revisar, priorizar y preparar una reunión forman un proceso. Podemos automatizar una parte y dejar otras en personas. Como líderes, debemos saber dónde termina la responsabilidad del sistema y quién recibe su resultado.

Pensemos en su trabajo: ¿qué información vuelve a copiar alguien cada semana? Escuchemos un ejemplo. Para describirlo necesitamos un inicio, una entrada y una salida que podamos reconocer, incluso antes de elegir software.

Elegir una tarea que valga la pena.

La primera decisión de un líder es elegir un trabajo que merezca el esfuerzo. Una tarea frecuente, con datos accesibles y una salida clara, suele ser un buen punto de partida para aprender. Si nadie sabe qué debe pasar, automatizar sólo vuelve más rápida la confusión.

En Nexo queremos que una oportunidad llegue al comité sin perder la fuente ni quedarse en la cuenta de una persona. Podemos observar cuántos pasos manuales exige registrarla y si la información queda completa. Todavía no estamos demostrando ventas, ahorro o retorno: estamos comprobando una mejora concreta del trabajo.

También debemos mirar el paso siguiente. Si la tabla crece pero nadie revisa las oportunidades, habremos producido una nueva cola. Por eso asignamos a alguien del comité la revisión y definimos qué significa una fila útil. Hoy pediremos conservar identificador, nota y fuente, sin mezclar oportunidades.

Veamos el recorrido funcionando. Voy a empezar con una transferencia sencilla para que podamos reconocer qué hace cada pieza.

## 04 · Make: conectar, ejecutar y comprobar

18:14–18:30 · 16 min

Make: conectar una entrada con una salida.

Voy a abrir dos pestañas: nuestra hoja y el escenario de Make. La hoja tiene una pestaña de entrada y otra de registro. El formulario alimenta la entrada; para ensayar también podemos añadir una fila directamente. La segunda pestaña es donde veremos el resultado de la automatización.

En Make añado Google Sheets y el módulo que observa filas nuevas. Elijo la hoja de entrada, señalo que tiene encabezados y selecciono desde dónde comenzar. Ésta es una consulta por sondeo: el sistema revisa cuando ejecutamos el escenario o cuando llega su horario; no significa que el formulario dispare una reacción instantánea.

Ahora agrego la acción de añadir una fila en la pestaña de registro. Relaciono cada campo de entrada con su columna de destino. Esto se llama mapear: decir de dónde sale cada valor. Todavía no interviene ningún modelo de IA. La conexión permite que Make acceda a la hoja y la configuración define qué operación hará con ella.

Guardo el escenario y miro el recorrido completo. Antes de ejecutarlo, ¿en qué pestaña esperan ver aparecer la nueva fila?

Ejecutar, mirar y volver a ejecutar.

Introduzco la primera nota y ejecuto Run once. Abrimos la salida del primer módulo: ésta es la información que Make recibió. Después abrimos el módulo que escribe. Finalmente miramos la hoja. Las tres observaciones nos permiten seguir el mismo dato, desde que entra hasta que queda registrado.

Una ejecución verde indica que los módulos terminaron, pero no nos dice si la información quedó en la columna correcta. Por eso comparo el identificador y la fuente con la entrada. Si el autor apareció donde iba la organización, la conexión funciona y el mapeo está mal. Corregimos esa relación y ensayamos con una fila nueva.

Ahora envío una segunda oportunidad. Queremos comprobar que el recorrido vuelve a funcionar sin reconstruirlo. Un disparador que recuerda las filas procesadas puede no recuperar la misma fila otra vez. Para una nueva prueba añadimos otro registro o cambiamos deliberadamente el punto de inicio; no pulsamos ejecutar sin saber qué estamos reprocesando.

Como líderes, lo relevante es que podamos describir qué se hizo y mostrar una salida útil. Ya tenemos automatización. En el siguiente bloque veremos qué cambia cuando la entrada necesita interpretación.

## 05 · IA en el flujo

18:30–18:31 · 1 min

Ahora entramos al bloque 2: IA en el flujo. Cuando mover datos ya no es suficiente.

Verás: tres chats y una interpretación dentro de Make. Decidirás: qué debe cumplir una respuesta útil. Primero explico la idea y después la muestro en la herramienta.

## 06 · Una regla mueve datos; la IA interpreta

18:31–18:41 · 10 min

Una regla mueve datos; la IA interpreta.

Nuestra automatización ya funciona, pero la nota sigue siendo un párrafo. Para preparar el comité queremos una síntesis: qué idea apareció, con qué servicio podría relacionarse y qué debemos preguntar. Aquí interviene una capacidad de interpretación.

Una regla puede comprobar si existe un campo. Un modelo puede leer frases redactadas de maneras diferentes y proponer una síntesis. La combinación resulta útil: conservamos identificador y fuente con un mapeo fijo, y pedimos al modelo que trabaje sobre el contenido de la nota. Así sabemos qué datos llegaron y qué texto fue generado.

El resultado de la IA no debe reemplazar la nota original. Guardamos ambos porque cumplen funciones distintas. El hallazgo es el material recibido; la síntesis ayuda a revisarlo. Si cambia la síntesis, necesitamos poder volver a su origen.

Como líderes, decidimos dónde merece la pena incorporar interpretación y qué evidencia necesitaremos para aceptarla. No estamos obligados a añadir IA en todos los pasos: elegimos el paso donde mejora el trabajo.

Un encargo que otra herramienta puede ejecutar.

Un encargo útil describe el resultado y la información disponible. En nuestro caso, el modelo recibe el catálogo de Nexo y una nota. Le pedimos una oportunidad resumida, un posible encaje, preguntas y un siguiente paso. Si no hay evidencia suficiente, queremos que lo haga visible.

Antes de conectarlo definimos dos pruebas. Una nota completa debe producir una ficha coherente. Una nota vaga debe conservar lo que sabemos y formular preguntas, sin convertir una posibilidad en una necesidad confirmada. El criterio se establece antes de leer la respuesta. Una prueba de aceptación expresa qué tendría que ocurrir para que el resultado sirva.

También distinguimos las vías de acceso. Usar Gemini, ChatGPT o Claude en el navegador es una experiencia de usuario. Una API permite que otro programa solicite trabajo a un modelo. Un conector facilita ese intercambio. Sus permisos, cuotas y cobros pueden ser diferentes de los de una suscripción de chat.

Vamos a probar el encargo en las aplicaciones y luego lo incorporaremos al recorrido. Primero entendemos el comportamiento que buscamos; después lo conectamos.

## 07 · Tres chats → IA en Make → prueba de excepción

18:41–19:05 · 24 min

El mismo trabajo en tres aplicaciones.

Tengo preparadas las tres aplicaciones. Voy a usar el mismo encargo y los mismos documentos, empezando en conversaciones nuevas. Primero muestro dónde se adjunta el contexto o cómo se pega el texto cuando una cuenta no permite adjuntar. Después envío el encargo y observamos la salida.

No buscamos proclamar un ganador por tres respuestas. Queremos reconocer el trabajo que debe hacer un usuario: proporcionar información, pedir una salida, leerla y corregirla. Si una herramienta añade un servicio que Nexo no tiene, le pedimos separar esa idea como una capacidad por desarrollar. Si omite una fuente, volvemos al material original.

Conservo una respuesta por aplicación y anoto qué tuve que aclarar. En Gemini podemos mostrar brevemente dónde se guardan instrucciones reutilizables con un Gem, si está disponible. Eso ayuda a repetir un encargo; no le concede por sí solo herramientas para actuar en otros sistemas.

En la tarea podrán repetir esta comparación con sus cuentas. Si aparece un límite de uso, documentarán cuál y continuarán con otra opción disponible.

Añadir interpretación al flujo.

Regresamos al escenario. Entre la entrada y el registro añado Make AI Toolkit con Simple Text Prompt. Usaremos el proveedor integrado disponible en la cuenta, por lo que esta demostración no depende de configurar tres claves de API.

En el texto del encargo incluyo el catálogo breve y relaciono el campo de la nota con el dato recibido. Esta parte es importante: escribir el nombre de una columna no siempre inserta su contenido. Selecciono el valor de salida del módulo anterior usando el panel de mapeo.

Conservo las columnas originales y llevo la respuesta del modelo a la columna Síntesis_IA. Registro también qué versión de instrucción usé. Ejecuto una nueva entrada y miro el resultado. El recorrido está definido por nosotros; la interpretación ocurre dentro de uno de sus pasos.

Observen lo que hemos conseguido: la misma información entra una vez, se conserva y recibe un primer tratamiento. El comité sigue decidiendo qué oportunidad merece atención. El tiempo total, la utilidad del resumen y la revisión necesaria serán mejores medidas que contar cuántas palabras produjo el modelo.

Una entrada incompleta también tiene salida.

Voy a enviar una nota deliberadamente vaga. La automatización puede funcionar desde el punto de vista técnico y aun así producir una ficha poco útil. Observemos si la respuesta reconoce qué información falta o inventa una oportunidad específica.

La corrección consiste en mejorar el encargo y repetir con una nueva fila. Si el problema es que la nota nunca llegó al modelo, no necesitamos un prompt más largo: necesitamos corregir el mapeo. Si la fuente está vacía, la revisión debe pedirla. Si la conexión falla, tenemos que recuperar el acceso y volver a ejecutar de forma controlada.

Aquí aparece una responsabilidad de liderazgo: definir qué resultado permite continuar y cuál debe esperar. Esa decisión se puede traducir después a una regla o una aprobación. Pasar estas pruebas nos permite seguir aprendiendo; todavía no demuestra que el proceso esté listo para cualquier entrada.

## 08 · Copilotos y agentes

19:05–19:06 · 1 min

Ahora entramos al bloque 3: Copilotos y agentes. De pedir una respuesta a delegar un trabajo.

Verás: un agente que crea y revisa archivos. Decidirás: cuánto puede hacer y cuándo consultar. Primero explico la idea y después la muestro en la herramienta.

## 09 · Copilotos y agentes: quién decide el siguiente paso

19:06–19:15 · 9 min

El nombre del producto no explica su autonomía.

Encontrarán la palabra copiloto en muchas propuestas comerciales. Sirve para describir una experiencia de asistencia, pero no nos dice cómo está construido el sistema. Una misma aplicación puede conversar, ejecutar un flujo y poner en marcha agentes.

La distinción que nos ayuda a diseñar es quién decide el siguiente paso. En Make elegimos primero leer, después resumir y finalmente registrar. Aunque un módulo use IA, el recorrido sigue definido. En un agente, el modelo puede decidir que necesita abrir un archivo, buscar otro dato, crear una tabla o revisar lo que acaba de producir.

Son capacidades que pueden combinarse. Un flujo puede llamar a un agente para resolver una parte variable y después continuar con reglas. Un agente puede utilizar una automatización como herramienta. No existe una obligación de pasar de uno a otro por madurez.

Como líderes, conviene pedir una descripción del comportamiento: qué recibe, qué decisiones toma y qué hace cuando no puede terminar. Esa explicación resulta más útil que aceptar una etiqueta comercial.

Un agente trabaja en un ciclo.

Un agente necesita un objetivo y medios para trabajar. Puede decidir una acción, utilizar una herramienta y observar lo que devolvió. Con esa observación decide cómo continuar. El recorrido se construye durante la ejecución dentro del alcance que le damos.

Por ejemplo, al preparar una reunión podría leer el catálogo y descubrir que una idea requiere una capacidad que Nexo no tiene. Entonces puede separar lo disponible de lo que necesitaría un aliado y reformular la propuesta. Esa adaptación es parte del valor que queremos observar.

Autonomía y autoridad son diferentes. Un agente puede elegir cómo ordenar los documentos y seguir necesitando autorización para enviar una propuesta. También puede preguntar cuando falta una decisión de negocio. La pregunta oportuna no implica que falló: puede ser la forma correcta de avanzar.

Después del descanso veremos un encargo completo sobre una carpeta. Miraremos acciones y archivos producidos; lo que la interfaz muestra es un registro de trabajo, no una ventana directa a todo el razonamiento interno del modelo.

## 10 · Descanso

19:15–19:25 · 10 min

Hacemos una pausa de diez minutos. Regresamos a las 19:25. No hay una actividad que completar durante el descanso.

## 11 · Codex: crear archivos y cambiar una condición

19:25–19:45 · 20 min

Codex: del encargo a los archivos.

Ahora voy a dar un objetivo completo. Abro la carpeta del ensayo en Codex o en la experiencia de trabajo disponible en ChatGPT. Allí están el contexto de Nexo, las notas y el encargo. Los archivos de salida irán a una subcarpeta para distinguir lo recibido de lo producido.

Pido tres materiales: una propuesta breve, una agenda de preguntas y una lista de asuntos pendientes. Describo para quién es el resultado, el contexto disponible y qué debe conservar como hipótesis. No voy a indicarle cada clic. Quiero observar cómo organiza la tarea usando sus herramientas.

Mientras trabaja, señalo las acciones visibles. Leer el catálogo, crear un archivo o revisar una tabla son acciones diferentes de escribir una respuesta en el chat. Si pide una decisión que corresponde al comité, la respondo. Si una herramienta no está disponible, lo explicamos y ajustamos el alcance.

Al terminar abrimos los archivos. Comparamos lo solicitado con lo entregado: ¿está la propuesta?, ¿la agenda sirve para una reunión?, ¿los pendientes son concretos? Una respuesta que afirma haber creado archivos necesita archivos que podamos abrir. Ésta es la comprobación que hacemos como usuarios y como responsables del trabajo.

Cambiar una condición y comparar.

El trabajo empresarial cambia durante su preparación. Voy a introducir una condición: la primera conversación durará veinte minutos y sólo abordará formación. El agente debe revisar la propuesta y la agenda sin inventar que el interlocutor ya aceptó esa condición. En el ejercicio es una restricción del comité para preparar su propia reunión.

Le pido conservar la versión inicial y explicar los cambios. Después abrimos el nuevo material. Queremos ver si ajustó la duración y el alcance, si retiró lo que ya no corresponde y si conservó la información válida.

Ahora muestro brevemente el mismo encargo en Claude Cowork, si está habilitado en la cuenta del profesor. Seleccionamos la carpeta de ensayo y damos el mismo objetivo. No repetiremos toda la ejecución: compararemos cómo se concede contexto, qué acciones aparecen y dónde queda el resultado.

Cowork requiere un plan compatible. Quienes no tengan acceso pueden repetir el trabajo de archivos con Codex si su cuenta lo permite. Un chat que devuelve texto es una alternativa de preparación de contenido, pero debe identificarse como tal: no demuestra ejecución sobre la carpeta.

## 12 · OpenClaw e implementación

19:45–19:46 · 1 min

Ahora entramos al bloque 4: OpenClaw e implementación. Hacerlo funcionar. Saber cómo sostenerlo.

Verás: configuración, ejecución y cambio de objetivo. Decidirás: herramientas, permisos y responsables. Primero explico la idea y después la muestro en la herramienta.

## 13 · Piezas, implementación y responsables

19:46–19:57 · 11 min

Las piezas que permiten trabajar al agente.

La interfaz puede parecer una conversación, pero el agente reúne varias piezas. El modelo aporta capacidades de interpretación; las instrucciones orientan el trabajo; el contexto contiene la información disponible; las herramientas permiten operar; el entorno determina dónde ocurren esas acciones.

Memoria no significa que todo se recuerde siempre ni que cargar un archivo entrene el modelo. Puede consistir en instrucciones persistentes, notas o información guardada que el sistema recupera. Necesitamos saber qué conserva y poder corregirlo cuando cambia.

Como usuarios configuramos un objetivo y aportamos material. Como líderes decidimos qué información debe estar disponible, quién la mantiene y qué accesos corresponde conceder. Una instrucción escrita no sustituye un permiso técnico. Pedir que guarde archivos necesita una herramienta de escritura; pedir que envíe correos exige acceso a un servicio adicional.

Comprar, configurar o desarrollar.

La elección tecnológica depende del trabajo que necesitamos sostener. Comprar una solución puede cubrir un proceso ya resuelto. Configurar permite adaptar herramientas existentes. Desarrollar se justifica cuando hay requisitos que las opciones disponibles no cubren suficientemente. Las tres rutas pueden convivir.

Hoy configuramos un flujo y utilizamos agentes existentes. Eso no demuestra que tengamos una plataforma empresarial lista para todos los usuarios. Hay que considerar cuentas, accesos, continuidad, soporte y cambios. Una herramienta gratuita puede requerir tiempo de preparación y consumo de modelos de pago.

Para comparar opciones, describamos el mismo resultado y preguntemos cuánto trabajo queda en nuestro equipo. ¿Quién prepara los datos? ¿Quién revisa? ¿Qué ocurre si cambia una conexión? ¿Podemos recuperar nuestros archivos? La decisión se toma con requisitos y evidencia, no por la cantidad de funciones que muestra una página de venta.

Un encargo que el equipo puede implementar.

No necesitamos crear un departamento antes de hacer una prueba, pero sí distribuir responsabilidades. El dueño del proceso define para qué sirve el resultado. El responsable de datos mantiene las fuentes. Tecnología habilita las conexiones. El revisor decide si la propuesta está lista para usarse. Una persona puede cubrir varias funciones si queda claro que las asume.

Un pedido concreto podría decir: queremos recibir notas del comité, conservar su fuente, preparar una ficha y guardarla para revisión. La prueba debe incluir una nota completa y otra que requiera aclaración. Necesitamos saber quién mantendrá el catálogo y cómo detener el flujo si empieza a escribir mal.

Esto convierte lo aprendido como usuarios en una conversación de implementación. Ya podemos mostrar una entrada, una salida y una excepción. TI o un proveedor podrá discutir con nosotros el alcance y estimar el trabajo. Veamos ahora otra forma de configurar estas piezas: OpenClaw.

## 14 · OpenClaw: configurar, ejecutar y ajustar

19:57–20:17 · 20 min

OpenClaw: ver la configuración detrás del agente.

OpenClaw nos permite observar con más claridad cómo se configura un agente. Ya lo instalé y probé antes de la sesión. Voy a mostrar qué proveedor de modelos utiliza, en qué espacio trabaja y cuáles son las herramientas disponibles para este ejercicio. No necesitamos conectar un servicio de mensajería para empezar con el panel.

La instalación y el acceso al modelo son cosas distintas. Podemos tener el programa funcionando y necesitar una clave o una cuenta compatible para generar respuestas. La guía del curso enlaza las rutas oficiales por sistema operativo y explica esa separación.

Para esta demostración usaremos los mismos documentos del caso en un espacio de ensayo. El objetivo será leerlos y preparar un archivo de preguntas para la reunión. Así podemos comparar con lo que acabamos de hacer en Codex y Cowork, manteniendo reconocible el trabajo.

No vamos a dedicar estos minutos a descargar dependencias. Quien quiera repetirlo tendrá la guía de preparación y deberá comprobar la primera respuesta antes de empezar el encargo. Ahora enfoquémonos en las piezas que hacen posible la ejecución.

OpenClaw: ejecutar y ajustar el objetivo.

Envío el encargo. El agente debe leer el contexto de Nexo y la nota de oportunidad para crear un archivo de preguntas. Miramos qué acciones ejecuta y después abrimos el archivo. Si sólo responde en el chat, comprobamos si tenía herramienta y permiso de escritura; no damos por hecha la creación del documento.

Ahora cambiamos el foco a formación. Le pedimos conservar el original y preparar una segunda versión con preguntas más adecuadas. El valor no está en que escriba mucho, sino en que utilice el catálogo, conserve los límites del caso y ajuste el material a la nueva condición.

Comparemos con el flujo de Make. Allí nosotros definimos los módulos y sus relaciones. Aquí encargamos un producto y el sistema organiza parte de los pasos. Ambos pueden ser útiles. Una automatización puede reunir entradas de manera regular y un agente puede elaborar un expediente cuando el comité lo solicita.

Como líderes, necesitamos saber dónde conviene cada forma de trabajo y qué resultado vamos a revisar. La demostración nos da una primera evidencia para discutirlo.

Combinar capacidades sin perder el proceso.

Abrimos juntos la tabla y el expediente. Ésta es la cadena que hemos construido como experiencia de trabajo. En la demostración trasladamos los materiales entre herramientas de forma manual; no hemos conectado automáticamente Make con OpenClaw o Codex.

Ese paso manual puede ser suficiente para aprender y para un proceso de poco volumen. Si queremos integrarlo, debemos especificar qué archivo o dato se transfiere, cómo se autentican los sistemas y qué evento inicia al agente. La flecha de un diagrama no crea una conexión.

Ahora sí podemos elegir. Mantendríamos fijo el registro de la información y delegaríamos la preparación variable del expediente. La revisión comercial seguiría en el comité. Otra organización podría escoger una distribución distinta. Lo importante es explicar la elección con el trabajo que vimos, no con la marca que más nos gustó.

## 15 · Tu tarea: repetir y después transformar

20:17–20:25 · 8 min

La tarea comienza repitiendo lo que yo hice. Tendrán el contexto, las notas, las instrucciones y la guía de construcción. Primero ejecutarán la automatización y conservarán una evidencia del registro. Después repetirán el encargo en las aplicaciones disponibles y realizarán una ejecución de agente que produzca archivos.

El desafío consiste en elegir otra oportunidad para Nexo y cambiar una condición del trabajo. Puede ser una primera reunión más breve, otro público o una restricción de alcance. Tendrán que adaptar un paso del flujo y el encargo del agente, mostrando qué cambió y por qué.

Compartan con un compañero una técnica que les sirvió o un problema que pudieron resolver. Pueden incorporar ideas con crédito. La entrega es individual: resultado, evidencia breve y una decisión ejecutiva sobre qué pondrían a funcionar, quién lo mantendría y qué revisarían.

No se evalúa pagar una herramienta. Cowork se puede sustituir por una ejecución equivalente en Codex u OpenClaw. Si ninguna ruta de agente está disponible, documenten el bloqueo y soliciten una repetición acompañada o en pareja; un texto producido por chat no se presenta como ejecución de archivos. Esta versión de la tarea está en revisión para el ensayo del docente; la fecha oficial se comunicará en Moodle.

## 16 · Ahora puedes pedir y dirigir ese trabajo

20:25–20:30 · 5 min

Hoy empezamos con algo sencillo: llevar información de un lugar a otro. Después añadimos interpretación y finalmente delegamos un trabajo de varios pasos. Vimos que una aplicación, un flujo y un agente pueden participar en el mismo proceso con funciones distintas.

Como usuarios, ahora tienen un recorrido para configurar, ejecutar y revisar. Como líderes, pueden formular un encargo más preciso: qué resultado quieren, qué datos hacen falta, qué autoridad conceden y quién se hace cargo. No necesitan convertirse en programadores para hacer esas preguntas, pero usar las herramientas les permite comprender mejor las respuestas.

Antes de cerrar, pensemos en un proceso de su organización. ¿Qué parte dejarían fija? ¿En cuál ayudaría interpretar información? ¿Qué resultado pedirían a un agente? Escuchemos dos respuestas breves.

La próxima clase nos concentrará en otra pregunta: cómo utilizar datos y evidencia para decidir si una aplicación merece continuar. Conserven los resultados y las dificultades de la tarea; serán material útil para esa conversación.