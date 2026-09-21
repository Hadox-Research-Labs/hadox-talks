# Clase 2 · Diseñar un asistente y su operación

Guion del expositor · Hadox Talks · Nueva edición para revisión

## 1. Del resultado al asistente

18:00–18:05 · APERTURA · 5 minutos

Pregunta: ¿Qué parte del informe puede convertirse en trabajo repetible?

### Discurso

La clase pasada preparamos una decisión. Hoy escogeremos una pieza del trabajo de Nexo: clasificar una solicitud y preparar una respuesta con el catálogo. El responsable seguirá revisando la comunicación. El objetivo es que el comportamiento pueda describirse, probarse y discutirse con TI.

Vamos a distinguir copilot, flujo y agente; configurar o simular un asistente; revisar diez solicitudes; y terminar con un encargo de implementación. La salida de hoy alimentará el piloto de la siguiente clase. Recuperen una acción propuesta en su informe: ¿qué entrada recibiría y qué producto tendría que entregar?

### Conducción

0–2 min: recuperar A y definir continuidad.

2–5 min: dos ejemplos de entrada y salida; fijar la tarea común.

## 2. Tres formas de delegar

18:05–18:15 · EXPLICACIÓN · 10 minutos

Pregunta: ¿Quién elige los pasos y quién ejecuta las acciones?

### Discurso

Usaremos tres distinciones prácticas. Un copilot apoya a una persona que conduce el trabajo. Un flujo sigue pasos definidos: recibir, clasificar, preparar y revisar. En un sistema con agentes, el modelo puede seleccionar pasos y herramientas según el objetivo y lo que encuentra. Los nombres comerciales no bastan para saber qué hace un producto.

La autonomía se observa en acciones y permisos. Un asistente puede redactar una solicitud de cambio sin tener permiso para ejecutarla. Otro sistema puede consultar información mediante herramientas y necesitar aprobación antes de escribir en un registro.

Pensemos en Nexo. Preparar un borrador desde un catálogo puede resolverse con instrucciones y contexto. Consultar un estado vivo requiere una conexión. Actualizarlo requiere además autoridad. ¿Qué nivel necesitamos para la primera prueba y cuál añade costo o complejidad? Ésa es una decisión de diseño que el negocio debe compartir con TI.

### Conducción

0–4 min: explicar los tres mecanismos.

4–7 min: ubicar lectura, propuesta y escritura en Nexo.

7–10 min: pedir una elección de alcance y su razón.

La distinción de flujos y agentes sigue el marco práctico de Anthropic de 2024. El artículo avisa que las herramientas han evolucionado; usamos la distinción conceptual, no sus versiones de producto como receta actual.

### Referencias

- [Anthropic (2024) · Building effective agents](https://www.anthropic.com/engineering/building-effective-agents): Diferencia entre flujos predefinidos y selección dinámica de pasos por el modelo.

- [Google AI for Developers · Function calling](https://ai.google.dev/gemini-api/docs/function-calling): El modelo propone una llamada y la aplicación ejecuta la función autorizada.

## 3. Dónde entra el asistente

18:15–18:25 · EXPLICACIÓN · 10 minutos

Pregunta: ¿Qué cambia en el proceso y qué sigue haciendo una persona?

### Discurso

Dibujemos el recorrido de una solicitud: llega, se clasifica, se prepara una respuesta, alguien la revisa y finalmente se registra lo autorizado. El asistente de hoy trabajará en clasificación y preparación. Esa frontera permite medir si realmente ayuda.

Necesitamos especificar la entrada mínima, el producto y el siguiente responsable. Si la solicitud no tiene ID, pedirlo es parte del trabajo. Si exige una compensación, hay que llevar la decisión al responsable. Un procedimiento puede mejorar incluso sin IA, por ejemplo aclarando un formulario o manteniendo un catálogo actualizado.

Desde su perspectiva, señalen dónde se pierde información o se repite una actividad. Tecnología puede necesitar campos y accesos; operación necesita reglas para derivar; formación necesita que las personas entiendan el nuevo procedimiento. Esa conversación define la función del asistente antes de elegir la integración.

### Conducción

0–4 min: recorrer el proceso y marcar alcance del asistente.

4–7 min: cada perspectiva identifica una necesidad.

7–10 min: separar mejora de proceso y capacidad de IA.

## 4. Un encargo que puede reutilizarse

18:25–18:35 · EXPLICACIÓN · 10 minutos

Pregunta: ¿Qué instrucción debe permanecer aunque cambie la solicitud?

### Discurso

Una configuración reutilizable tiene un propósito, fuentes autorizadas, formato de salida y una conducta cuando falta información. El catálogo de Nexo distingue consultas de estado, revisión documental y consultas técnicas. No necesitamos inventar un departamento nuevo para definir esta primera pieza.

Le pediremos conservar el ID, identificar la regla aplicada y preparar un borrador breve. Si falta catálogo o un dato necesario, debe pedirlo. Si hay contradicción o una petición fuera de autoridad, debe escalar. Estas instrucciones permanecen mientras cambian las solicitudes.

Un Gem, cuando la cuenta lo permite, puede guardar instrucciones reutilizables. También podemos probar la lógica en una conversación nueva pegando la configuración completa. Esa alternativa demuestra comportamiento conversacional; no demuestra persistencia empresarial ni una conexión a sistemas. Primero comprobaremos la función y después discutiremos la forma de operarla.

### Conducción

0–4 min: explicar las cuatro partes de la configuración.

4–7 min: leer dos reglas de F3 y su efecto en una salida.

7–10 min: mostrar la alternativa de Gem o chat de configuración.

### Referencias

- [Google · Cómo usar Gems](https://support.google.com/gemini/answer/15236405?hl=en): Instrucciones reutilizables; confirmar disponibilidad en la cuenta usada.

- [Google · Crear y gestionar Gems](https://support.google.com/gemini/answer/15146780?hl=en-IN): Configuración, vista previa y archivos de conocimiento.

## 5. Construimos el asistente Nexo

18:35–18:55 · DEMOSTRACIÓN · 20 minutos

Pregunta: ¿La configuración produce el comportamiento que necesitamos?

### Discurso

Voy a abrir una conversación nueva y pegar la configuración completa, incluido el catálogo. Si usamos un Gem, estas instrucciones van en su configuración y las fuentes en el lugar que habilite la cuenta. En ambos casos registraré cómo lo hice.

Primero enviaré T01, una solicitud de estado con ID y fuente disponible. Miraremos si prepara el borrador sin inventar acceso al sistema. Después T02, donde falta el ID. Compararemos qué conserva y qué pide. La capacidad útil está en preparar el siguiente paso adecuado para cada entrada.

Si el asistente se sale del alcance, ajustaremos una instrucción concreta y conservaremos qué cambió. Una mejora en dos ejemplos no demuestra funcionamiento general. Por eso viene una batería pequeña de diez solicitudes con condiciones diferentes. Ustedes podrán configurar el asistente o analizar la ejecución observada y dejarlo declarado.

### Conducción

0–5 min: chat nuevo o Gem, configuración completa y catálogo.

5–10 min: ejecutar T01; revisar ID, estado y borrador.

10–15 min: ejecutar T02; comprobar petición de ID.

15–20 min: explicar una corrección si hace falta y registrar configuración usada.

### Referencias

- [Google · Crear y gestionar Gems](https://support.google.com/gemini/answer/15146780?hl=en-IN): Configuración, vista previa y archivos de conocimiento.

## 6. Diez solicitudes, una prueba visible

18:55–19:15 · PRÁCTICA · 20 minutos

Pregunta: ¿Qué pasa cuando la entrada cambia?

### Discurso

La mesa de trabajo contiene diez solicitudes. Hay entradas normales, incompletas, contradictorias y fuera de alcance. Pueden enviarlas como lote para practicar la lectura comparada, conservando una fila por ID. En una solución real también habría que comprobar aislamiento entre conversaciones y repetir pruebas.

Revisen el resultado frente a la referencia. Marquen cumple, corregir o escalar, y señalen el fragmento que justifica su evaluación. No basta con que la salida use la palabra escalar: importa que no revele otro expediente ni prometa una resolución que no puede asegurar.

Cada persona conserva la tabla de diez pruebas y elige dos para explicar con detalle, una normal y otra excepcional. Si la cuenta limita la ejecución, pueden analizar las respuestas observadas en la demostración, indicándolo. Después del descanso veremos qué cambiaría al conectar herramientas y asignar permisos.

### Conducción

0–3 min: revisar entradas y referencia de evaluación.

3–10 min: ejecutar o analizar las diez solicitudes.

10–17 min: marcar resultados y seleccionar dos ejemplos explicados.

17–20 min: recoger un fallo o duda y conservar evidencia.

Profundización: ejecutar T05 y T08 en conversaciones aisladas y comparar. El conjunto de diez casos no certifica seguridad ni permite estimar una tasa de error estable. En la prueba docente de Flash del 21/09 se observó que pidió el catálogo interno al cliente y afirmó una canalización no ejecutada. Úsalos como ejemplos de revisión, no como fallos que necesariamente aparecerán en cada cuenta. El botón de corrección permite repetir cinco solicitudes.

## 7. Descanso

19:15–19:25 · DESCANSO · 10 minutos

Pregunta: ¿Qué le permitirías hacer sin aprobación?

### Discurso

Tenemos diez minutos de descanso. Regresamos a las siete veinticinco. Conserven configuración y resultados. Al volver conectaremos la prueba con accesos, herramientas y responsabilidades.

### Conducción

Descanso de 19:15 a 19:25.

## 8. Conectar también es dar autoridad

19:25–19:40 · EXPLICACIÓN · 15 minutos

Pregunta: ¿Qué cambia entre consultar, proponer y ejecutar?

### Discurso

Una API permite que programas interactúen. El modelo puede proponer una llamada a una herramienta; la aplicación valida y ejecuta lo permitido, y devuelve el resultado. Esas piezas necesitan identidad, permisos, manejo de fallos y registros. Escribir en el chat «ya lo registré» no prueba que haya ocurrido.

En Nexo podemos diseñar tres niveles: consultar estado, proponer una actualización y ejecutar un cambio autorizado. Hoy simularemos el registro en una tabla; no conectaremos sistemas reales. Eso deja visible dónde hace falta aprobación.

Si una herramienta falla, la salida debe explicar qué quedó sin ejecutar. Si falta permiso, el flujo debe detener esa acción. La pregunta ejecutiva es concreta: ¿qué acción tiene valor suficiente para justificar una conexión y cómo sabemos que se realizó? Comparen una solución en navegador con un flujo conectado y nombren una condición adicional de operación.

### Conducción

0–5 min: explicar el ciclo de llamada y ejecución.

5–10 min: simular una propuesta de actualización y su aprobación en una tabla.

10–15 min: discutir fallo de herramienta y permiso de escritura.

MCP es una forma de conectar aplicaciones con herramientas y recursos; no sustituye autorización ni concede acceso automáticamente. Es lectura opcional para perfiles técnicos.

### Referencias

- [Google AI for Developers · Function calling](https://ai.google.dev/gemini-api/docs/function-calling): El modelo propone una llamada y la aplicación ejecuta la función autorizada.

- [Model Context Protocol · Arquitectura](https://modelcontextprotocol.io/docs/learn/architecture): Host, cliente y servidor para conectar aplicaciones con herramientas y recursos.

## 9. Quién se hace cargo

19:40–19:55 · EXPLICACIÓN · 15 minutos

Pregunta: ¿Qué funciones deben existir aunque todavía no haya un departamento de IA?

### Discurso

Antes de crear puestos, asignemos responsabilidades. Negocio define el resultado y decide si sirve. Operación revisa las salidas y resuelve excepciones. TI habilita acceso e integración. Quienes administran datos y seguridad definen fuentes, permisos y condiciones de uso. Una persona puede asumir varias funciones en una organización pequeña.

Para crecer, puede convenir una coordinación compartida que mantenga estándares y apoye a las áreas, con responsables de cada proceso. La estructura se justifica por necesidades y volumen; hoy no tenemos datos para recomendar un organigrama universal.

En nuestro caso, escriban quién mantiene el catálogo, quién aprueba el borrador y quién responde si aparece otro expediente. Después identifiquen qué capacitación necesita el usuario para interpretar la salida. Esa asignación convierte una demostración en una propuesta operativa discutible.

### Conducción

0–5 min: explicar responsabilidades y posibles acumulaciones de roles.

5–10 min: asignarlas por función en Nexo.

10–15 min: discutir mantenimiento del catálogo y capacitación.

### Referencias

- [NIST · AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework): Marco voluntario de gestión de riesgos; no es una certificación del curso.

## 10. Diseña la operación de tu asistente

19:55–20:15 · PRÁCTICA · 20 minutos

Pregunta: ¿Configurar, comprar o desarrollar, y por qué?

### Discurso

Ahora preparen el diseño desde su perspectiva. Mantengan la tarea que probamos: clasificar y preparar una respuesta. Describan entrada, salida, acción permitida, excepción, responsable y prueba para aceptar el producto. Pueden señalar qué parte adaptarían a su trabajo, sin cambiar silenciosamente los resultados de las diez pruebas.

Comparen tres caminos: configurar una aplicación disponible, adquirir una solución para el proceso o desarrollar una integración. La elección depende de requisitos, sistemas existentes, datos y capacidad de mantenerla. Registren qué costo o función necesitan investigar antes de comprometerse.

El resultado es un encargo de implementación de una página. Una persona de TI debería poder responder qué puede habilitar, qué falta definir y qué debe probar. Quienes tengan más experiencia pueden añadir un esquema de campos y un ejemplo de fallo de conexión.

### Conducción

0–5 min: describir el proceso y su autoridad.

5–12 min: comparar tres caminos y justificar una elección provisional.

12–17 min: definir accesos, responsables y prueba de aceptación.

17–20 min: revisar si un colega entiende el encargo.

## 11. El pedido que TI puede evaluar

20:15–20:25 · ENTREGA · 10 minutos

Pregunta: ¿Tu propuesta une proceso, pruebas, tecnología y responsables?

### Discurso

Entrega B reúne el proceso diseñado, la tabla de diez pruebas y el encargo a TI. Conserva cuatro criterios de cinco puntos: proceso y autoridad, pruebas, decisión tecnológica y responsables con encargo. Identifiquen si configuraron, ejecutaron u observaron la demostración.

Revisen que la elección tecnológica responda a una necesidad concreta. Si sólo hace falta preparar un borrador, expliquen por qué proponen una integración o por qué prefieren posponerla. Si hubo un fallo, dejarlo documentado con una medida y otra prueba es más útil que ocultarlo.

El encargo debe permitir decidir el siguiente paso y quién lo llevará a cabo. En la próxima sesión usaremos datos ficticios de costos y un piloto simulado para revisar si conviene avanzar.

### Conducción

0–5 min: completar B con configuración, pruebas y encargo.

5–10 min: revisar los cuatro criterios y una decisión tecnológica.

## 12. Repetir una prueba no demuestra retorno

20:25–20:30 · CIERRE · 5 minutos

Pregunta: ¿Qué tendríamos que medir para decidir si vale la pena?

### Discurso

Hoy definimos una forma de trabajo, probamos condiciones distintas y asignamos responsabilidades. Todavía necesitamos observar cuánto tiempo requiere, qué calidad produce y cuánto cuesta mantenerlo.

La siguiente clase comparará una mejora de proceso sin IA, asistencia en navegador e integración. Conservamos los resultados de B como evidencia de comportamiento. Los datos del piloto docente serán un conjunto separado y claramente identificado. Antes de salir, nombren un indicador de valor y una condición que impediría ampliar el uso.

### Conducción

0–3 min: escuchar un indicador de valor y una condición de detención.

3–5 min: explicar continuidad hacia C y el memo final.
