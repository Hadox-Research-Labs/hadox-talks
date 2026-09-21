# Clase 2 · Del resultado al asistente

Esta es una edición para evaluación en Hadox Talks. Trabajamos con el caso ficticio Nexo; no se necesitan datos privados ni conexión a sistemas de una empresa. La entrega es individual, aunque se puede conversar por función. Las fechas y el canal formal de entrega siguen siendo los indicados en el aula institucional.

## Antes de empezar

Abre la presentación y Gemini en dos pestañas. Comprueba que puedes enviar un mensaje. Usa Flash si está disponible y conserva el mismo modelo en las comparaciones; anota el nombre que muestra tu cuenta. No hace falta contratar un plan ni crear una integración. Si no tienes acceso, observa la demostración y realiza la revisión sobre la salida compartida por el expositor, dejando constancia de ello.

Los botones de la página copian el encargo completo, incluidas sus fuentes de texto. El ZIP es para descargar los materiales; no se adjunta completo al modelo. La imagen V1 sí se adjunta cuando se indique. El docente demuestra primero y después acompaña la práctica.


## Qué aprenderás y qué vas a producir

Distinguir un copiloto, un flujo y un agente; configurar instrucciones reutilizables; probar diez solicitudes; y convertir el experimento en un pedido concreto a TI. Producto B: ficha del proceso, registro de pruebas y solicitud de implementación. La práctica simula la operación; no envía mensajes ni modifica un CRM.

## Recorrido

18:00–18:35: recuperación de A, formas de delegar, mapa del proceso y piezas del encargo reutilizable.

18:35–19:15: construcción guiada del asistente y diez solicitudes de prueba.

19:15–19:25: descanso de diez minutos.

19:25–19:55: herramientas, permisos, responsables y revisión humana.

19:55–20:30: diseño por función, entrega B y cierre.

## Práctica paso a paso

1. Abre un chat nuevo. Copia «Configurar el asistente»: incluye propósito, salida, reglas y catálogo F3. Puedes guardar un Gem si tu cuenta lo permite; no es necesario para realizar la práctica. Un chat conserva el contexto de esa conversación, no equivale a un servicio conectado.

2. Lee la confirmación y verifica que el alcance sea preparar resultados para revisión. Si el modelo pretende conectar un sistema, aclara que es una simulación sin herramientas externas.

3. En la misma conversación pega «Probar las diez solicitudes». Conserva cada ID y la salida completa. Una tabla por lote facilita la revisión, pero cada solicitud debe resolverse sin mezclar expedientes.

4. Abre DIEZ_PRUEBAS.md. Contrasta T01 a T10 contra sus referencias. Registra para cada una: salida observada, estado, regla usada, cumple/no cumple y corrección. Marca especialmente promesas no autorizadas, mezcla de expedientes o requisitos inventados. No inventes el porcentaje de acierto: cuéntalo a partir de las salidas que recibiste.

5. Ajusta una instrucción si detectas un fallo y repite los casos afectados. Conserva antes y después; no borres el primer intento. Si las diez pasan, formula una prueba nueva de límite y justifica por qué sería útil. Pasar diez pruebas no certifica producción.

6. Dibuja el flujo: solicitud → clasificación → borrador → revisión humana → registro. Señala entradas, fuentes, permisos, salida y excepción. Indica qué permanece manual.

7. Compara configurar una herramienta existente, comprar una solución o desarrollar/integrar. Elige una opción provisional y explica su condición. No necesitas cotizaciones reales para la práctica: identifica lo que tendrías que cotizar.

8. Prepara un pedido a TI: tarea y usuario; cuenta y permisos; datos y propietario; integración necesaria; responsable de aprobación; pruebas de aceptación; costos por investigar y mecanismo para detener el proceso. No propongas contratar un departamento por defecto: primero asigna funciones.

## Entrega B · 20 puntos

Proceso y autoridad (5): flujo entendible, entrada/salida y límite entre preparar y ejecutar.

Pruebas y revisión (5): diez resultados observados, comparación con referencias y corrección o prueba adicional justificada.

Elección tecnológica (5): comparación razonada entre configurar, comprar y desarrollar, con condiciones y datos pendientes.

Responsables y pedido de implementación (5): dueño de negocio, operación, TI y datos/seguridad; solicitud concreta y verificable.

## Para continuar

Completa sólo las correcciones de B y conserva su evidencia. Para la clase 3 necesitaremos saber qué mide el piloto y qué haría inaceptable una salida. No confundas tus pruebas de Gemini con F5: F5 es otro conjunto, simulado por el docente para practicar analítica.

## Lectura sugerida

Lee la distinción entre flujos y agentes en Anthropic y la ayuda de Gemini enlazadas en las láminas. Busca una función que tu asistente sí requiere y otra que sería prematura. No es obligatorio instalar un framework ni programar.
