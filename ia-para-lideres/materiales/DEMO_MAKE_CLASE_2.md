# Guía de ensayo · las dos automatizaciones

Las láminas 6 y 9 abren las demos. El profesor sale de la presentación y explica mientras opera. Los escenarios se construyen y prueban antes; esta guía no incluye un blueprint ejecutado en la cuenta del profesor.

## Resultado A: una fuente produce un borrador revisable
Entrada: un PDF profesional en Entradas. Salida: un documento en Borradores. La revisión, publicación y control de versiones son pasos humanos explícitos en esta versión mínima.

### Preparación
1. Completa PREPARACION_CLASE_2. Ten las seis carpetas de Drive y los PDF ficticios descargados.
2. Abre ENCARGOS_RED y localiza aula-extraer. Deja visible PERFIL_ANA_V1 como referencia.
3. Crea el escenario A y una conexión de ensayo de Drive/Docs. Comprueba que cada conexión ve la carpeta elegida.

### Construcción A
1. Añade Google Drive / Watch Files in a Folder y selecciona Entradas. Configura el punto inicial antes de subir el PDF. Este disparador revisa según su programación; no presupone respuesta instantánea.
2. Añade Google Drive / Download a File. Mapea el File ID que entregó el primer módulo.
3. Añade Make AI Content Extractor / Extract text from a document. Selecciona la entrada por archivo y mapea nombre y datos binarios del archivo descargado. Prueba este tramo e inspecciona el texto: un enlace o el nombre del PDF no equivalen a su contenido. Comprueba disponibilidad y nombres vigentes en tu cuenta: https://apps.make.com/make-ai-extractors
4. Coloca un filtro para continuar sólo con texto no vacío. Si falla la extracción, conserva la entrada pendiente y revisa el historial; resuelve y reejecuta manualmente en el ensayo. Una ruta automática de incidentes sería una ampliación que requiere pruebas adicionales.
5. Añade Make AI Toolkit / Simple Text Prompt. Copia aula-extraer. Sustituye FUENTE por el texto extraído y ARCHIVO por el nombre mapeado. Comprueba que no queden marcadores literales. Elige el proveedor y modelo disponibles. https://apps.make.com/ai-tools
6. Añade Google Docs / Create a Document. El título identifica BORRADOR, ID y versión de la entrada. El contenido es la respuesta textual del módulo anterior. Selecciona Borradores como destino o mueve el archivo a esa carpeta con Google Drive si tu módulo no permite escogerla.
7. Activa Run once y sube Ana. Abre el documento final y compáralo con la fuente. Debe conservar inducción y talleres, sin convertir a Ana en directora de un área.

### Revisión y registro A
La persona propietaria corrige la ficha. El responsable de publicación coloca la versión aprobada en Revisados y actualiza DIRECTORIO_VIGENTE. Conserva la anterior en Historial. Registra ID, versión, fuente, estado, fecha y revisor. Antes de publicar comprueba que no exista ya la misma combinación de ID y versión. A puede crear dos borradores si se repite la entrada; la versión mínima evita duplicar el directorio mediante revisión humana. No atribuyas deduplicación automática a este escenario.

### Ensayo para los 18 minutos de la demo 1
- Mostrar Ana: entrada, salida y contraste de una frase.
- Mostrar Clara: disponibilidad NO DECLARADA.
- Mostrar Bruno v2: prioridad nueva y publicación humana de la versión vigente.
- Cerrar señalando qué ejecutó Make y qué decidió una persona.

## Resultado B: un criterio produce una nota de conexión
Entrada: un PDF con un objetivo personal. Contexto adicional: el documento DIRECTORIO_VIGENTE. Salida: nota con conexiones, evidencia y preguntas.

### Construcción B
1. Crea un PDF que contenga sólo el criterio inicial de MI_CRITERIO. Guarda el cambio para una segunda entrada.
2. Crea el escenario B con Watch Files in a Folder sobre Encargos, Download a File, extractor y filtro de texto vacío, igual que A.
3. Añade Google Docs / Get Content of a Document para DIRECTORIO_VIGENTE. Copia el ID desde su URL. Inspecciona la salida: deben aparecer las cuatro fichas y sus versiones. Si el módulo devuelve una estructura de párrafos, agrega su texto antes de enviarlo al modelo; no mapees sólo el ID ni un objeto ilegible.
4. En Simple Text Prompt pega aula-conectar. En CRITERIO mapea el texto del PDF. En DIRECTORIO mapea el contenido completo del documento. Conserva ambos encabezados para distinguir las fuentes.
5. Crea un documento en Conexiones con la respuesta. El título identifica criterio y versión. Conserva una copia del directorio usado para poder explicar después la recomendación.
6. Ejecuta con el criterio inicial. Comprueba afinidad, complementariedad, reciprocidad, una alternativa descartada y preguntas pendientes.
7. Ejecuta con el criterio v2. Cambia primero el criterio manteniendo el directorio. Después introduce Bruno v2. Así puedes distinguir cambio de objetivo y cambio de evidencia.

### Ensayo para los 18 minutos de la demo 2
Ten preparados tres chats con el mismo contexto en Gemini, ChatGPT y Claude. Compara una afirmación con su fuente en cada salida. Ejecuta B una vez y muestra una segunda condición preparada. El objetivo es observar diferencias, no construir todos los módulos durante la sesión.

## Evidencia que guardamos
Captura del escenario, entrada identificada, resultado abierto, historial de ejecución y corrección humana. Tras ensayar puedes exportar un blueprint sin credenciales. Cada alumno deberá recrear sus propias conexiones. Si no ejecutaste una ruta, marca su evidencia pendiente.

## Documentación de las conexiones
https://apps.make.com/google-drive-modules
https://apps.make.com/google-docs-modules
