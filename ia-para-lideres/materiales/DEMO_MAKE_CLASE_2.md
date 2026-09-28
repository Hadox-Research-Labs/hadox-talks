# Make · De documentos a conexiones útiles

Dos recorridos preparados antes de clase. El profesor los ejecuta y explica; los alumnos los reproducen como tarea. Esta guía documenta la construcción. No contiene un blueprint validado ni afirma que se ejecutó en las cuentas del profesor.

## Preparar una vez
1. Lee PREPARACION_CLASE_2.md. Conecta una cuenta de Google de ensayo en Make y comprueba acceso a Drive y Docs. No uses datos privados para la prueba inicial.
2. En Drive crea PBS_RED y las carpetas 01_Entradas, 02_Borradores, 03_Revisados, 04_Encargos, 05_Conexiones e Historial. Son carpetas privadas de trabajo; la publicación de fichas revisadas al grupo se decide después.
3. Descarga los PDF PERFIL_ANA_V1, PERFIL_BRUNO_V1, PERFIL_CLARA_V1, PERFIL_DIEGO_V1 y PERFIL_BRUNO_V2 del kit. Sube únicamente los V1 durante la primera prueba.
4. Crea en Google Docs DIRECTORIO_VIGENTE pegando DIRECTORIO_REVISION_DOCENTE.md. Es una instantánea ficticia de referencia, preparada manualmente para el ensayo. Copia su ID desde la URL. En uso real sólo contendrá fichas revisadas por sus propietarios.
5. Ten abiertos ENCARGOS_RED.md y PRUEBAS_RED.md. La comparación entre Gemini, ChatGPT y Claude se hace en tres chats separados; el escenario Make llama a un solo proveedor.

## Recorrido A · Detectar → extraer → preparar borrador
1. Crea un escenario. Añade Google Drive / Watch Files in a Folder y selecciona 01_Entradas. Elige empezar desde ahora antes de subir un nuevo PDF de prueba. El disparador revisa la carpeta según el horario configurado; no prometas respuesta instantánea.
2. Añade Google Drive / Download a File. Mapea File ID desde el archivo que entregó el disparador.
3. Añade Make AI Content Extractor / Extract text from a document. En la ruta By File mapea el nombre del PDF y los datos binarios del módulo Download. Ejecuta hasta aquí: inspecciona que la salida tenga el texto del PDF, no sólo el nombre o un enlace.
4. Añade un filtro que sólo deje seguir cuando el texto extraído no esté vacío. Si la extracción falla, conserva la entrada pendiente y revisa el error en el historial. No trates el error como perfil publicado. Para el ensayo resuelve y reejecuta manualmente; el tratamiento automático de errores es una ampliación.
5. Añade Make AI Toolkit / Simple Text Prompt. Pega red-extraer de ENCARGOS_RED.md y reemplaza el marcador FUENTE por el campo de texto del extractor. Incluye el nombre original del archivo. Selecciona el proveedor disponible en tu cuenta; comprueba consumo y cuota.
6. Añade Google Docs / Create a Document. Título: BORRADOR seguido del nombre del archivo de entrada. Contenido: respuesta de texto del módulo de IA. Selecciona 02_Borradores como carpeta si el módulo lo permite; en caso contrario usa Google Drive / Move a File para mover el documento creado a esa carpeta. El texto puede conservar marcas Markdown: lo importante en esta prueba es la estructura y la evidencia, no el formato.
7. Pulsa Run once y sube PERFIL_ANA_V1.pdf después de activar la escucha. Inspecciona los datos de cada módulo y abre el documento final. Contrasta capacidades, versión y faltantes con el PDF.
8. Repite con CLARA V1. Disponibilidad debe quedar «no declarada». Después procesa BRUNO V2; compara el interés y las restricciones con V1.

## Revisión y control de versiones · paso humano explícito
El escenario A termina en BORRADOR. La persona corrige y aprueba su ficha; el responsable la coloca en 03_Revisados. Actualiza manualmente DIRECTORIO_VIGENTE con una única versión vigente por ID y lleva la anterior a Historial. Conserva un registro ID / versión / archivo / estado / revisor / fecha. El directorio no se actualiza automáticamente en esta ruta mínima.
Antes de promover una ficha, comprueba que ID y versión no existan ya. Una repetición puede generar un segundo borrador, pero no debe duplicar el directorio publicado. Para automatizar la deduplicación añade un almacén de datos con clave de archivo y versión, comprobación previa y registro sólo después de una escritura exitosa. Eso requiere otra prueba; no lo atribuyas al escenario mínimo.

## Recorrido B · Mi criterio → nota de conexión
1. Prepara un PDF de MI_CRITERIO.md. Puedes abrir el texto en Google Docs y descargarlo como PDF. Su primera versión debe contener sólo el encargo inicial; deja el cambio para una segunda entrada.
2. Crea otro escenario con Google Drive / Watch Files in a Folder sobre 04_Encargos, Download a File y el mismo extractor de texto. Aplica el control de texto vacío del recorrido A.
3. Añade Google Docs / Get Content of a Document y selecciona el ID de DIRECTORIO_VIGENTE. Inspecciona su salida. Según la versión del módulo puede entregar texto o una estructura por párrafos; si entrega estructura, mapea o agrega el texto de los párrafos, no el objeto completo ni sólo el ID. Comprueba que estén los cuatro perfiles y sus versiones antes de continuar.
4. En AI Toolkit / Simple Text Prompt pega red-conectar. Sustituye CONTEXTO por dos secciones claramente delimitadas: CRITERIO (texto del PDF) y DIRECTORIO (contenido completo del documento). No dejes marcadores sin sustituir.
5. Crea un Google Doc en 05_Conexiones con la respuesta y un título que identifique el encargo y su versión. Conserva el encargo original y una copia del directorio usado para poder revisar el resultado.
6. Ejecuta con el criterio inicial. Busca una afinidad, una complementariedad, una alternativa descartada y preguntas pendientes. Una respuesta fluida sin evidencia no pasa la prueba.
7. Sube una segunda versión del encargo con la condición de trabajo remoto y medición. Contrasta ambas notas. Repite con el directorio actualizado de BRUNO V2 para distinguir un cambio de criterio de un cambio de evidencia.

## Qué mostrar en los doce minutos de cada demostración
Demostración 1: ejecutar ANA, inspeccionar fuente y borrador, mostrar faltante de CLARA y actualización de BRUNO. Demostración 2: contrastar tres chats ya preparados, ejecutar B y cambiar el criterio. Construye y ensaya los escenarios antes; la clase no depende de configurar todos los módulos en vivo.
Si una cuenta falla, usa el texto y la referencia docente para explicar la comparación, declara que es una revisión manual y registra el bloqueo. No presentes esa alternativa como una automatización ejecutada. Guarda después del ensayo el blueprint exportado, las capturas de ejecución y las conexiones que cada alumno deberá crear en su propia cuenta; nunca incluyas credenciales.

## Documentación oficial
https://apps.make.com/google-drive-modules
https://apps.make.com/make-ai-extractors
https://apps.make.com/ai-tools
https://apps.make.com/google-docs-modules
