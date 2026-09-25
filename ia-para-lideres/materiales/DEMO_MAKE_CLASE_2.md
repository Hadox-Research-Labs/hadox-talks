# Demostración Make · Guía de ensayo y repetición

Versión de revisión · 25 septiembre 2026. Procedimiento construido con documentación oficial; la conexión y ejecución en la cuenta del profesor deben ensayarse antes de impartir. Los nombres de campos pueden variar con el idioma y la actualización de Make.

## Preparación antes de clase

1. Accede a Make y a una cuenta Google autorizada para el ejercicio. Crea una hoja «Nexo · Clase 2» con pestañas Entrada y Registro. Usa los encabezados de ENTRADA_C2.tsv y REGISTRO_C2.tsv pegados en A1 de cada pestaña. No debe haber filas vacías entre entradas.
2. Crea un Google Form de ensayo con campos ID, Autor, Organizacion, Nota y Fuente. Vincula sus respuestas a una hoja de cálculo. Si Google crea automáticamente «Respuestas de formulario 1», ésa será tu pestaña de Entrada: elige ese nombre real en Make. No necesitas forzar que se llame Entrada. Conserva la columna de fecha que Google agrega.
3. Verifica que una respuesta de prueba llega a esa pestaña. La segunda pestaña, Registro, es el destino de Make. No uses la pestaña vigilada como destino, para no volver a procesar lo que el escenario escribe.
4. Sin formulario: utiliza los mismos encabezados y añade una fila manualmente a Entrada. Es una alternativa de entrada equivalente para probar el flujo; no demuestra la conexión con Forms.
5. Ten CASOS_CLASE_2.md a mano. Sólo se introducen datos ficticios de ensayo. Prepara ambas pestañas vacías de resultados para la demostración, conservando en otra hoja cualquier ensayo anterior que quieras mostrar.

## Recorrido A · Registro sin IA

1. Crea un escenario y nómbralo «Nexo · Registro de oportunidades».
2. Añade Google Sheets > Watch New Rows. Crea la conexión con la cuenta del ejercicio; revisa qué acceso solicita Google. Selecciona la hoja y la pestaña de entrada reales.
3. Indica que existen encabezados, comprueba su fila y fija un límite pequeño de registros para el ensayo. Guarda el módulo.
4. En Choose where to start, selecciona el punto de inicio que corresponda a tu prueba. «From now on» sirve para recibir las entradas que añadirás después; «All» reprocesará las existentes. Decide esto antes de introducir NEXO-01. Anota la opción elegida.
5. Añade Google Sheets > Add a Row. Selecciona la misma hoja y la pestaña Registro. Mapea ID, Autor, Organizacion, Nota y Fuente desde el módulo de entrada. Deja Sintesis_IA vacía, Version_instruccion=sin-IA y Estado=recibido.
6. Guarda el escenario. Mantén la programación apagada mientras ensayas. Introduce NEXO-01 con el formulario o la fila manual y pulsa Run once.
7. Inspecciona los datos de entrada y salida de los módulos. Abre Registro y comprueba ID, nota y fuente. Introduce NEXO-02 y repite.

Watch New Rows funciona por sondeo. La ejecución manual o la programación consulta filas nuevas; no es un webhook instantáneo. Una modificación de una fila vieja no equivale a una fila nueva.

## Recorrido B · Añadir IA

1. Entre el disparador y Add a Row inserta Make AI Toolkit > Simple Text Prompt. Usa Make's AI Provider si está disponible en tu cuenta. La disponibilidad y cuota deben comprobarse antes de la clase.
2. Crea la conexión integrada y elige un modelo disponible. No necesitas poner claves de Gemini, OpenAI y Anthropic para esta ruta. El módulo consume créditos de Make; no prometas uso ilimitado.
3. Pega PROMPT_C2_MAKE.txt. Reemplaza [MAPEAR NOTA] seleccionando el token de Nota del primer módulo desde el panel de mapeo. No escribas sólo «Nota» ni dejes el marcador literal. Mantén el catálogo del encargo.
4. En Add a Row conserva los campos originales desde el primer módulo y relaciona la respuesta textual de AI Toolkit con Sintesis_IA. El nombre exacto de la salida se identifica al inspeccionar una ejecución del módulo. Fija Version_instruccion=C2-v1 y Estado=por revisar.
5. Guarda. Introduce NEXO-03 como fila nueva, pulsa Run once y comprueba el registro y la síntesis. El proveedor de Make puede ser distinto del modelo usado en los chats; no atribuyas la salida a una de las tres marcas sin comprobarlo.
6. Repite con NEXO-04, que no tiene suficiente información. Esperamos preguntas y faltantes. Si cambias el encargo, identifica C2-v2 y usa NEXO-05 como nueva entrada para comparar.

## Cuando algo falla

- No aparece una ejecución: revisa el punto de inicio, la pestaña vigilada y si la entrada es realmente nueva.
- Se detiene después de una fila: comprueba filas vacías intermedias y el límite de registros.
- Se escriben datos en columnas equivocadas: revisa mapeo y encabezados; conserva la salida errónea como evidencia del ensayo y usa un nuevo ID para repetir.
- La respuesta contiene el marcador: sustituye [MAPEAR NOTA] por el token real.
- La IA inventa: vuelve al catálogo y a la nota; ajusta la instrucción y comprueba el caso normal además de la excepción.
- Cuota o conexión rechazada: conserva el error observado y termina el registro sin IA. El análisis en un chat puede preparar contenido, pero no acredita la integración de IA en Make. Reintenta esa parte cuando la cuenta esté disponible.
- Repetición duplicada: comprueba el ID antes de usar los resultados. En producción habría que diseñar deduplicación; este escenario inicial no la implementa.

## Evidencia de ensayo

Anota fecha, cuenta/plan sin datos de acceso, módulos utilizados, ID de entrada, resultado observado y corrección. Guarda una captura del escenario y de la fila. Después puedes exportar su blueprint desde Make si tu interfaz ofrece esa opción; las conexiones deberán configurarse en cada cuenta. Este kit incluye una guía de construcción, no un blueprint de Make probado.

## Fuentes oficiales

- Primer módulo: https://help.make.com/step-3-add-your-first-app
- Disparador: https://help.make.com/step-5-set-up-the-trigger
- AI Toolkit: https://apps.make.com/ai-tools
- Créditos: https://help.make.com/credits
