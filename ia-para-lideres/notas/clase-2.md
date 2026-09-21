# Clase 2 · Diseñar un asistente y su operación

Edición abierta · Hadox Talks · Edgar Valdés

Guion breve y preparación ampliada por lámina. El contexto adicional es opcional: elige lo que te ayude a explicar dentro del horario previsto. Los ejemplos adicionales son ficticios. Estas notas son públicas y no cambian actividades, entregas ni puntuaciones.

Las fuentes respaldan los conceptos indicados, no los resultados de los casos del curso. Consulta y revisión de referencias: 20 de septiembre de 2026.

## 1. Apertura

APERTURA · 18:00–18:03 · Horario Guatemala

### Guion breve

La semana pasada prepararon y comprobaron un resultado. Hoy vamos a preguntar qué debe quedar configurado para que otra persona pueda repetir esa tarea con calidad. Conservaremos el mismo caso. Tendremos una demostración de configuración, pruebas con solicitudes y una propuesta del proceso y de lo que pediríamos a TI. Todo se integra en B, que vale veinte puntos.

### Para sumar a tu explicación

En la primera clase comprobamos una respuesta. Ahora cambia la pregunta: ¿otra persona podría repetir ese trabajo mañana con criterios similares? Ahí comienza el diseño de una operación.

### Contexto y antecedentes

La automatización empresarial ya existía con reglas, bases de datos y sistemas de gestión. La aportación de un modelo de lenguaje es trabajar con entradas menos estructuradas, como documentos y solicitudes. Esa flexibilidad introduce variación; por eso necesitamos pruebas y límites además de instrucciones.

### Un ejemplo para contarlo

Pasar de «redáctame una respuesta» a «prepara siempre estos campos, usa esta fuente y escala estas excepciones» convierte una demostración en una especificación que podemos revisar.

## 2. Qué conservamos de la primera prueba

CONVERSACIÓN · 18:03–18:10 · Horario Guatemala

### Guion breve

Necesitamos decidir qué vale la pena repetir. Una respuesta útil de ayer nos da una pista, pero todavía debemos organizar instrucciones, fuentes y revisión para otra persona.

### Para sumar a tu explicación

No necesitamos conservar toda la conversación. Necesitamos rescatar lo que explica por qué aceptamos o rechazamos el resultado: encargo, fuente, salida y comprobación.

### Cómo funciona

Una conversación mezcla instrucciones útiles, correcciones y pruebas fallidas. Para hacer repetible el trabajo, extraemos una versión explícita del procedimiento. Guardar un chat ayuda a recordar; mantener una instrucción identificada permite comparar cambios.

### Un ejemplo para contarlo

«Ayer funcionó» no indica qué versión de la tarifa se usó. «Probamos la instrucción 2 con el catálogo de septiembre y este caso» sí permite repetir la revisión.

## 3. Resultado y trabajo repetible

EXPLICACIÓN · 18:10–18:15 · Horario Guatemala

### Guion breve

Una conversación útil demuestra algo sobre ese intento. Para repetir el trabajo necesitamos mantener propósito, fuentes, formato de salida y comprobación. También hace falta alguien responsable de revisar cambios. Si cada persona copia instrucciones distintas o usa documentos viejos, el servicio deja de ser comparable. Vamos a dejar configurados los elementos que podemos controlar y registrar lo que todavía requiere habilitación.

### Para sumar a tu explicación

Repetible no significa que cada frase deba ser idéntica. Significa que los requisitos importantes se cumplen de manera consistente: campos, fuentes, límites y decisiones de escalamiento.

### Cómo funciona

Separa variaciones tolerables de errores materiales. Dos resúmenes pueden usar palabras distintas y ser igualmente útiles; dos importes diferentes no son equivalentes. La prueba debe mirar requisitos del trabajo, no parecido de redacción.

### Un ejemplo para contarlo

Para una ficha de proveedor, podemos aceptar un resumen de distinta longitud, pero exigir el mismo identificador, moneda y estado de documentación.

## 4. Copiloto, flujo y agente

EXPLICACIÓN · 18:15–18:20 · Horario Guatemala

### Guion breve

En un copiloto la persona dirige la tarea. En un flujo los pasos y las ramas principales están definidos. Un agente puede seleccionar acciones o herramientas dentro del alcance disponible. La diferencia relevante es quién decide el siguiente paso y qué permisos tiene. Ninguna opción es obligatoriamente superior: un camino definido puede resolver mejor un proceso estable. Hoy configuraremos asistencia y diseñaremos el proceso, sin afirmar que construimos una integración.

### Para sumar a tu explicación

Un copiloto ayuda a una persona que conduce el trabajo. En un flujo, el recorrido está definido; en un agente, el modelo puede decidir qué pasos o herramientas usar. Más autonomía exige más control sobre las consecuencias.

### Contexto y antecedentes

Anthropic distingue flujos con rutas predefinidas de agentes que dirigen dinámicamente su proceso. La utilidad de esa distinción es arquitectónica: preguntar quién decide el siguiente paso. Los nombres comerciales pueden mezclar estas categorías.

### Un ejemplo para contarlo

Resumir una solicitud bajo supervisión es asistencia. Recibirla, clasificarla y enviarla por una ruta fija es un flujo. Elegir qué sistemas consultar y cuándo terminar introduce decisiones propias de un agente. Ninguna etiqueta demuestra por sí sola mayor valor.

### Para profundizar

- [Anthropic (2024) · Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) — Diferencia entre flujos predefinidos y selección dinámica de pasos por el modelo.

## 5. Gems

EXPLICACIÓN · 18:20–18:24 · Horario Guatemala

### Guion breve

Un Gem permite reunir instrucciones reutilizables y, cuando la cuenta lo permite, fuentes de conocimiento. Nos ayuda a repetir el encargo con una base común. Eso no le concede acceso al ERP ni autorización para pagar, publicar o modificar un sistema. Si Gems no aparece en su cuenta, trabajarán en una conversación nueva con las mismas instrucciones y declararán esa modalidad. El razonamiento y la evidencia que evaluamos son los mismos.

### Para sumar a tu explicación

Un Gem permite reutilizar una configuración de instrucciones y, cuando se incorporan, archivos de referencia. Eso ayuda a mantener un encargo estable; no significa entrenar desde cero un modelo para la empresa.

### Cómo funciona

Distingue configuración de entrenamiento. En este ejercicio estamos definiendo cómo debe trabajar el asistente dentro de la aplicación. Tampoco estamos concediendo acceso automático al ERP: conectar sistemas requiere capacidades, permisos y una implementación adicionales.

### Un ejemplo para contarlo

Un Gem puede tener instrucciones para revisar una ficha de compra y un manual como referencia. Eso no lo convierte en un usuario autorizado para aprobar órdenes de compra.

### Para profundizar

- [Google · Cómo usar Gems](https://support.google.com/gemini/answer/15236405?hl=en) — Instrucciones reutilizables; confirmar disponibilidad en la cuenta usada.
- [Google · Crear y gestionar Gems](https://support.google.com/gemini/answer/15146780?hl=en-IN) — Configuración, vista previa y archivos de conocimiento.

## 6. Anatomía del asistente

EXPLICACIÓN · 18:24–18:28 · Horario Guatemala

### Guion breve

Empezamos por usuario y propósito. Después precisamos entradas, trabajo esperado, autoridad, fuentes y formato de salida. La configuración debe ser coherente: si el asistente sólo prepara recomendaciones, no escribimos instrucciones que le pidan actuar como si hubiera ejecutado un pago. Quiero que alguien pueda leerla y comprender qué puede pedir, qué recibirá y qué necesita revisión.

### Para sumar a tu explicación

La descripción útil de un asistente se parece más a una ficha de trabajo que a una personalidad. Tiene usuario, objetivo, entradas, salida esperada y límites.

### Cómo funciona

Formula un contrato de entrada y salida: qué campos recibe, cuáles son obligatorios, qué estructura produce y qué hace cuando falta información. Una instrucción como «sé experto y preciso» no permite evaluar cumplimiento. «Si falta la fecha, marca pendiente y pide el documento» sí se puede probar.

### Una pregunta para conectar

¿Qué debe devolver el asistente cuando no puede completar el trabajo sin inventar un dato?

## 7. Gobernanza de la información

EXPLICACIÓN · 18:28–18:31 · Horario Guatemala

### Guion breve

La fuente necesita propietario y un mecanismo de actualización. Si cambia un procedimiento, debemos revisar qué versión utiliza el asistente y volver a probar las tareas afectadas. Agregar archivos sin orden puede aumentar contradicciones. En clase usaremos el paquete identificado de cada caso. En una organización habría que definir quién mantiene esa base y cómo comunica los cambios.

### Para sumar a tu explicación

El conocimiento del asistente también necesita mantenimiento. Debemos saber quién responde por cada documento y cómo se retiran las versiones que ya no aplican.

### Cómo funciona

Una fuente tiene contenido y metadatos: fecha, versión, responsable y ámbito de uso. Para el ejercicio basta con identificarlos. En una operación real, esa información ayuda a filtrar consultas y a explicar de dónde salió una respuesta.

### Un ejemplo para contarlo

Una política antigua y una nueva pueden estar perfectamente redactadas. El problema no se arregla pidiendo «más precisión»; se arregla definiendo cuál está vigente y para qué solicitudes.

## 8. Autoridad

EXPLICACIÓN · 18:31–18:35 · Horario Guatemala

### Guion breve

Leer, preparar, proponer, modificar y aprobar implican capacidades y consecuencias diferentes. Nuestra configuración se mantiene en preparación y propuesta. Un usuario que escribe hazlo de todos modos no amplía los permisos. Además, describir una prohibición en un prompt no sustituye controles técnicos de acceso. La configuración y la arquitectura deben coincidir con la autoridad real.

### Para sumar a tu explicación

Dar una instrucción no equivale a conceder un permiso. El límite importante está en las acciones que el sistema realmente permite ejecutar.

### Cómo funciona

OWASP identifica el riesgo de otorgar demasiadas funciones, permisos o autonomía. En un diseño concreto, separa consultar, preparar, modificar y aprobar. Los controles técnicos y la revisión deben corresponder a la consecuencia de cada acción.

### Un ejemplo para contarlo

El asistente puede preparar un cambio de cuenta bancaria para revisión, mientras el sistema conserva la aprobación en una persona autorizada. Escribir «no te equivoques» no sustituye ese control.

### Para profundizar

- [OWASP · Excessive Agency, edición 2025](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) — Riesgos de otorgar funciones, permisos o autonomía excesivos.

## 9. Configuración del asistente

DEMOSTRACIÓN · 18:35–18:45 · Horario Guatemala

### Guion breve

Les voy a mostrar cómo traducimos lo anterior a una configuración concreta. Si Gems no está disponible, podemos usar la conversación nueva con las mismas instrucciones. No vamos a conectar sistemas ni a utilizar datos privados.

### Para sumar a tu explicación

Durante la demostración, explica el motivo de cada campo que configuras. Lo valioso es que el grupo entienda qué comportamiento esperas comprobar después.

### Un ejemplo para contarlo

Al escribir «cuando falte evidencia, no concluyas», muestra una entrada incompleta y observa qué ocurre. Si responde como esperabas, di que pasó esa prueba; evita presentarlo como una garantía para todos los casos.

### Una pregunta para conectar

¿Qué cambió en el resultado por esta instrucción y cómo lo sabemos? Mantén la demostración dentro del caso y del tiempo ya previsto.

### Para profundizar

- [Google · Cómo usar Gems](https://support.google.com/gemini/answer/15236405?hl=en) — Instrucciones reutilizables; confirmar disponibilidad en la cuenta usada.

## 10. Su asistente y sus pruebas

PRÁCTICA · 18:45–19:00 · Horario Guatemala

### Guion breve

Trabajarán su propia ruta. Distribuiremos las variantes del banco para revisar las diez solicitudes entre el grupo. Cada persona documentará al menos dos pruebas con profundidad: una normal y una de excepción.

### Para sumar a tu explicación

Una prueba normal comprueba que el asistente puede ayudar. Una excepción comprueba cómo se comporta cuando ayudar exige detenerse o pedir información.

### Cómo funciona

Mantén un conjunto de casos de referencia: entrada, comportamiento esperado y resultado observado. Al cambiar una instrucción, vuelve a ejecutar casos anteriores para detectar regresiones. Que una mejora resuelva un problema no implica que conserve todo lo que funcionaba.

### Un ejemplo para contarlo

Usa una ficha completa y otra con un dato obligatorio ausente. El criterio para la segunda no es producir una respuesta más larga, sino señalar la falta sin rellenarla con una suposición.

## 11. Pruebas y registro de calidad

EXPLICACIÓN · 19:00–19:04 · Horario Guatemala

### Guion breve

Cada prueba necesita una expectativa antes de ejecutar, un resultado observado y evidencia para compararlos. Una solicitud normal muestra si prepara algo útil. Una excepción muestra qué hace ante un dato faltante, contradicción o exigencia fuera de alcance. Si cambiamos una regla, repetimos la prueba afectada. Nuestro banco de diez solicitudes permite aprender a probar, sin certificar por sí solo confiabilidad operativa.

### Para sumar a tu explicación

La calidad tiene varias dimensiones: exactitud, completitud, formato, utilidad y respeto de los límites. Una sola nota global puede ocultar un fallo importante.

### Cómo funciona

Define el criterio antes de mirar la respuesta. Distingue comprobaciones automáticas, como presencia de campos, de revisión experta, como si una recomendación está justificada. La rúbrica del curso se conserva; estas dimensiones ayudan a explicar la revisión del asistente.

### Un ejemplo para contarlo

Una salida puede contener todos los campos y citar el documento equivocado. Pasar la comprobación de formato no debe borrar el fallo de evidencia.

## 12. Una excepción y un ajuste

PRÁCTICA Y DISCUSIÓN · 19:04–19:15 · Horario Guatemala

### Guion breve

Una mejora debe verse en la prueba afectada. Si modificamos todo a la vez, será difícil explicar qué produjo el cambio. Conservemos la respuesta anterior y formulemos una expectativa concreta.

### Para sumar a tu explicación

Cuando algo falla, identifica primero si falló la instrucción, la fuente, la entrada o el criterio de aceptación. Cambiar todo a la vez impide aprender qué corrigió el problema.

### Cómo funciona

Registra una hipótesis y modifica una variable cuando sea viable. Después repite el caso que falló y una prueba que antes funcionaba. Esto convierte la corrección en un pequeño experimento de ingeniería.

### Un ejemplo para contarlo

Si el asistente confunde dos políticas, primero revisa sus fechas y ámbitos. Añadir «eres un experto mundial» no aclara cuál de las dos aplica.

## 13. Descanso de 10 minutos

DESCANSO · 19:15–19:25 · Horario Guatemala

### Guion breve

Regresamos a las siete veinticinco. Conserven lo que configuraron y las pruebas, porque ahora veremos cómo se relacionan con el proceso completo.

### Contexto y antecedentes

Descanso de diez minutos. No agregues una explicación ni una tarea en este espacio. Al regresar retomamos el proceso completo que rodea al asistente.

## 14. Proceso completo

EXPLICACIÓN · 19:25–19:29 · Horario Guatemala

### Guion breve

Ahora ubicamos el asistente dentro de un proceso. Tenemos entrada, validación, preparación, revisión, salida y registro. En cada paso necesitamos saber qué lo activa, quién responde y qué se entrega al siguiente. Marquen lo que hoy hace una persona, lo configurado en clase y lo que exigiría una integración futura. Eso permite describir el avance real y estimar el trabajo pendiente.

### Para sumar a tu explicación

Un proceso incluye lo que ocurre antes y después de la respuesta. Si esas partes siguen sin dueño, el asistente puede acelerar la producción de pendientes.

### Cómo funciona

Dibuja la secuencia como entrada, validación, preparación, revisión, salida y registro. Pregunta también qué ocurre cuando una etapa falla. El recorrido de excepción importa tanto como el recorrido normal.

### Un ejemplo para contarlo

Preparar treinta propuestas en un minuto no resuelve una cola si sólo una persona puede revisarlas. La mejora debe observarse hasta la salida que necesita el usuario del proceso.

## 15. Reglas y decisiones

EXPLICACIÓN · 19:29–19:32 · Horario Guatemala

### Guion breve

Cuando una condición está completamente definida, una regla puede resolverla. Cuando necesitamos interpretar documentos variables, un modelo puede apoyar esa parte. Un flujo puede combinar ambos. La decisión depende del tipo de entrada, del error aceptable y de las consecuencias. Conectar herramientas no arregla un proceso cuyo recorrido nadie ha definido.

### Para sumar a tu explicación

Utiliza reglas claras para condiciones claras y el modelo donde aporte interpretación. No necesitamos convertir cada paso en una decisión probabilística.

### Cómo funciona

Una suma, una fecha límite o la presencia de un identificador pueden comprobarse con código o consultas. La interpretación de una solicitud ambigua puede requerir un modelo y revisión. Anthropic recomienda empezar con soluciones simples y aumentar complejidad cuando exista una necesidad demostrada.

### Un ejemplo para contarlo

El modelo propone una categoría para un correo; una regla impide avanzar si falta el número de expediente. La combinación es más fácil de explicar que pedirle al modelo que decida todo.

### Para profundizar

- [Anthropic (2024) · Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) — Diferencia entre flujos predefinidos y selección dinámica de pasos por el modelo.

## 16. Integración

EXPLICACIÓN · 19:32–19:35 · Horario Guatemala

### Guion breve

Una API es un mecanismo para que sistemas interactúen. Para proponer su uso necesitamos identificar sistema, método, permisos de lectura o escritura, entorno de prueba y responsable. Tener una API disponible no autoriza cualquier operación. En esta clase dibujaremos la integración necesaria y sus condiciones; no conectaremos sistemas empresariales ni pediremos credenciales.

### Para sumar a tu explicación

Una API es una interfaz para que sistemas intercambien solicitudes y respuestas. El modelo puede proponer una llamada; el software que lo rodea decide si la ejecuta y con qué permisos.

### Cómo funciona

En function calling, el modelo genera una solicitud estructurada de uso de herramienta y la aplicación ejecuta la función. MCP es un protocolo para conectar aplicaciones de IA con herramientas y recursos mediante clientes y servidores. Ninguno determina por sí solo qué operaciones conviene autorizar: siguen haciendo falta autenticación, permisos y controles de la aplicación.

### Un ejemplo para contarlo

Consultar el estado de un pedido y cancelar ese pedido pueden usar interfaces del mismo sistema, pero tienen consecuencias y permisos distintos. Primero especifica la operación; después elige la integración.

### Para profundizar

- [Google AI for Developers · Function calling](https://ai.google.dev/gemini-api/docs/function-calling) — El modelo propone una llamada y la aplicación ejecuta la función autorizada.
- [Model Context Protocol · Arquitectura](https://modelcontextprotocol.io/docs/learn/architecture) — Host, cliente y servidor para conectar aplicaciones con herramientas y recursos.

## 17. El proceso alrededor del asistente

PRÁCTICA · 19:35–19:45 · Horario Guatemala

### Guion breve

Ya probamos una preparación. Ahora indiquen dónde entraría en el proceso y quién puede utilizarla. El dibujo debe permitir distinguir lo que existe de lo que sólo proponemos.

### Para sumar a tu explicación

En el dibujo del proceso, marca con claridad dónde se escribe en otro sistema y dónde alguien aprueba. Son puntos que suelen desaparecer cuando sólo dibujamos una flecha llamada «IA».

### Cómo funciona

Un flujo necesita estados: recibido, incompleto, preparado, en revisión, aprobado o rechazado, según el caso. También debe evitar duplicar operaciones cuando una solicitud se reintenta. Para explicar idempotencia, usa esta idea: repetir la misma petición no debería crear dos compras por accidente.

### Un ejemplo para contarlo

Si la red falla después de crear un registro, reenviar a ciegas puede duplicarlo. Una referencia única y la comprobación del resultado forman parte del diseño que se pide a TI, no del ejercicio de configuración del Gem.

## 18. Pedido a TI

EXPLICACIÓN · 19:45–19:48 · Horario Guatemala

### Guion breve

Si mañana entregamos la propuesta a TI, debería poder evaluar viabilidad sin adivinar el problema. La ficha incluye usuarios y volumen, fuentes y propietario, entorno, permisos, entradas y salidas, registro, recuperación y pruebas de aceptación. Lo que no conocemos se marca como pendiente de confirmación o cotización. No rellenamos un dato inventado para que la ficha parezca completa.

### Para sumar a tu explicación

El pedido a TI debe permitir estimar y comprobar el trabajo. «Queremos un agente» es un nombre; «queremos preparar estas solicitudes sin modificar el sistema de origen» es un alcance.

### Cómo funciona

Describe usuarios, volumen, fuentes, entorno de prueba, operaciones permitidas, salida, registro y recuperación. Añade un ejemplo aceptado y uno que debe detenerse. Separa lo que ya existe de lo que se solicita construir.

### Un ejemplo para contarlo

«Leer expedientes de prueba, producir un borrador con fuentes y ponerlo en una cola de revisión; no enviar respuestas al cliente». Esa frase deja decisiones técnicas abiertas, pero fija un límite observable.

## 19. Comprar, configurar o construir

EXPLICACIÓN · 19:48–19:51 · Horario Guatemala

### Guion breve

Comprar puede cubrir una necesidad resuelta. Configurar adapta capacidades disponibles. Construir puede justificarse cuando hay requisitos que las otras opciones no satisfacen. Comparamos integración, control, costo total y capacidad de mantenimiento. La opción más sofisticada no recibe puntos adicionales. En nuestro caso, un borrador asistido puede ser suficiente para validar el valor antes de desarrollar una integración.

### Para sumar a tu explicación

Comprar, configurar y construir distribuyen de forma distinta el trabajo y la responsabilidad. La decisión depende del ajuste al proceso y del costo de sostenerlo.

### Cómo funciona

Compara lo necesario para operar: administración de usuarios, integración, controles, pruebas, soporte, cambios y salida del proveedor. Un prototipo barato puede necesitar mucho trabajo para funcionar todos los días; un producto existente puede resolver requisitos que no vimos en la demostración.

### Un ejemplo para contarlo

Si el trabajo consiste en preparar borradores revisados por una persona, una configuración puede bastar para probar valor. Si exige escribir en varios sistemas con trazabilidad, hay un proyecto adicional que evaluar.

## 20. Responsables

EXPLICACIÓN · 19:51–19:54 · Horario Guatemala

### Guion breve

Necesitamos dueño del proceso, propietario de datos, responsable técnico y revisor. En un piloto pequeño una persona puede cubrir más de una función, siempre que las decisiones estén claras. Crear un departamento no reemplaza esa definición. Lo esencial es saber quién acepta el resultado, quién corrige las fuentes, quién mantiene la solución y quién responde cuando falla.

### Para sumar a tu explicación

No todos los responsables son técnicos. Alguien debe decidir qué resultado sirve y qué errores son aceptables para ese proceso.

### Cómo funciona

Distribuye funciones: el dueño del proceso define el resultado; el responsable de datos valida fuentes; el equipo técnico mantiene integraciones y permisos; el revisor toma las decisiones reservadas. Una persona puede cubrir más de una función en un piloto pequeño, si queda explícito.

### Una pregunta para conectar

Si mañana cambia una política y el asistente sigue usando la anterior, ¿quién detecta el cambio, quién lo incorpora y quién verifica el resultado?

## 21. Equipo central y áreas de negocio

EXPLICACIÓN · 19:54–19:57 · Horario Guatemala

### Guion breve

Un equipo central puede coordinar herramientas, estándares y soporte. Las áreas de negocio conocen sus procesos, proponen pilotos y generan evidencia para priorizar. La distribución se justifica por demanda y capacidad sostenidas. Para este ejercicio basta proponer funciones y decisiones cubiertas; no necesitamos inventar un organigrama nuevo. Si ya existe apoyo técnico, la pregunta es cómo lo involucramos.

### Para sumar a tu explicación

No hace falta crear un departamento nuevo antes de probar una tarea. Sí hace falta una forma clara de coordinar conocimientos y responsabilidades.

### Contexto y antecedentes

Como propuesta de organización, puedes explicar un equipo central que ofrece herramientas y criterios comunes, con responsables de negocio que conocen cada proceso. No es una estructura universal ni un requisito del curso: sirve para discutir qué conviene compartir y qué debe permanecer cerca de la operación.

### Un ejemplo para contarlo

La gestión de accesos puede ser común, mientras seguros y formación definen criterios de aceptación diferentes. Centralizar la licencia no centraliza automáticamente el conocimiento del trabajo.

## 22. Mantenimiento

EXPLICACIÓN · 19:57–20:00 · Horario Guatemala

### Guion breve

Una solución cambia cuando cambian fuentes, instrucciones, modelos o procesos. Necesitamos registrar versiones, revisar resultados y repetir las pruebas afectadas. También hace falta una alternativa cuando falla: quién retoma el trabajo y con qué información. Los registros ayudan a corregir y explicar qué ocurrió. En la propuesta de hoy señalen una responsabilidad de mantenimiento y una vía de recuperación.

### Para sumar a tu explicación

La puesta en marcha no termina el trabajo. Cambian las instrucciones, las fuentes, las herramientas y el entorno; debemos poder detectar si un cambio empeoró el resultado.

### Cómo funciona

Versiona la configuración y conserva pruebas de referencia. Antes de liberar cambios, compara resultados; después observa errores y excepciones. Define cómo regresar al procedimiento anterior si el servicio falla. Una versión más reciente no debe aceptarse sólo por ser más reciente.

### Un ejemplo para contarlo

Si se actualiza una tabla de requisitos, repite las pruebas de casos completos e incompletos. El mantenimiento busca conservar el comportamiento necesario, no congelar el sistema para siempre.

## 23. El pedido concreto a TI

PRÁCTICA · 20:00–20:05 · Horario Guatemala

### Guion breve

Usen lo que acabamos de explicar para que TI no tenga que adivinar el alcance. No necesitamos inventar costos o nombres de productos. Un pendiente claramente descrito ayuda más que un dato falso.

### Para sumar a tu explicación

El resultado de esta práctica es un pedido que otra persona pueda entender sin haber estado en nuestra conversación.

### Un ejemplo para contarlo

«Primero validaremos borradores con datos ficticios. Para una prueba posterior pedimos lectura limitada a estas fuentes, revisión humana antes de cualquier envío y registro de la versión utilizada». Adapta la frase a la ruta elegida sin prometer una integración que aún no existe.

### Una pregunta para conectar

¿Con esta descripción TI puede identificar qué se necesita habilitar y el negocio puede comprobar que recibió lo solicitado?

## 24. Entrega B en el cuaderno

ENTREGA · 20:05–20:20 · Horario Guatemala

### Guion breve

Vamos a consolidar lo trabajado. La evidencia puede discutirse en equipo, pero su explicación debe identificar qué configuraron, qué observaron y qué proponen habilitar. No afirmen que conectaron un sistema si sólo lo dibujaron.

### Para sumar a tu explicación

La entrega B conecta el asistente con su proceso. No buscamos una captura de pantalla bonita, sino evidencia de cómo trabaja y dónde termina su autoridad.

### Contexto y antecedentes

La configuración, las pruebas y el pedido a TI deben contar la misma historia. Si una parte dice que sólo prepara y otra que envía automáticamente, hay una contradicción que resolver. Usa los criterios y el formato de la guía vigente; no se agrega una entrega ni cambia la puntuación.

## 25. Listo para un piloto

EXPLICACIÓN · 20:20–20:28 · Horario Guatemala

### Guion breve

Revisemos cuatro condiciones: alcance útil, pruebas documentadas, responsable y recursos identificados. Que las tengamos descritas no demuestra aún valor en operación. Eso requiere métricas, resultados y decisión, que trabajaremos en la tercera clase. Escucharemos dos defensas breves de B. Cada persona dirá qué quedó configurado y qué habilitación sigue pendiente.

### Para sumar a tu explicación

Estar listo para un piloto significa que tenemos una hipótesis comprobable y condiciones para observarla. No significa que ya podamos desplegar a toda la empresa.

### Cómo funciona

La siguiente sesión añade medición: tiempo completo, calidad, costos y riesgos. Podemos descubrir que el asistente funciona técnicamente y que el proyecto no conviene económicamente, o que conviene sólo para un subconjunto del trabajo.

### Una pregunta para conectar

¿Qué resultado del piloto te haría cambiar de opinión? Si ninguna respuesta podría hacerlo, aún no hemos formulado una prueba útil.

## 26. Referencias y cierre

CIERRE · 20:28–20:30 · Horario Guatemala

### Guion breve

La biblioteca contiene la guía de Gems, la comparación de flujos y agentes y una referencia de organización del trabajo con IA. Son materiales sugeridos para profundizar. La siguiente sesión utiliza datos sintéticos compartidos para decidir si conviene continuar, modificar o detener una propuesta. Nadie necesita traer métricas privadas de su empresa como tarea.

### Contexto y antecedentes

Para preparar esta sesión, prioriza la distinción entre flujo y agente de la lámina 4, los permisos de la 8 y las integraciones de la 16. Las páginas de Gems sirven para revisar el funcionamiento de la herramienta; las de function calling y MCP, para entender las piezas de una implementación posterior. No se pide programarlas durante esta clase.

### Para profundizar

- [Google · Cómo usar Gems](https://support.google.com/gemini/answer/15236405?hl=en) — Instrucciones reutilizables; confirmar disponibilidad en la cuenta usada.
- [Anthropic (2024) · Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) — Diferencia entre flujos predefinidos y selección dinámica de pasos por el modelo.
- [Google AI for Developers · Function calling](https://ai.google.dev/gemini-api/docs/function-calling) — El modelo propone una llamada y la aplicación ejecuta la función autorizada.
- [Model Context Protocol · Arquitectura](https://modelcontextprotocol.io/docs/learn/architecture) — Host, cliente y servidor para conectar aplicaciones con herramientas y recursos.
- [OWASP · Excessive Agency, edición 2025](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) — Riesgos de otorgar funciones, permisos o autonomía excesivos.
