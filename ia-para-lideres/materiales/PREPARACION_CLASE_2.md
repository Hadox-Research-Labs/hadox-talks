# Preparación e instalación · empezar aquí

Edición de aula, 27 septiembre 2026. Prepara el acceso antes de la clase: durante las demos observamos el recorrido y después lo repetimos como tarea. Este kit es material docente, no una certificación de que las conexiones ya funcionen en tu cuenta.

## Qué necesita cada parte
| Parte | Dónde se usa | Prueba mínima |
|---|---|---|
| Gemini, ChatGPT y Claude | Navegador | Pegar una fuente y recibir una respuesta |
| Google Drive y Docs | Navegador | Subir un PDF y crear un documento |
| Make | Navegador | Conectar Drive/Docs y ejecutar una entrada ficticia |
| OpenClaw | Instalación local y panel web | Leer una fuente y guardar un borrador |
| Codex | Aplicación de escritorio con proyecto local | Abrir carpeta y comprobar un archivo creado |

## 1. Preparar la carpeta del caso
Descarga KIT_CLASE_2.zip y extrae su contenido en una carpeta nueva. Abre PERFIL_ANA_V1.pdf y su versión de texto. Deben describir materiales de inducción y talleres. Conserva los documentos reales de tus compañeros fuera del ensayo ficticio.

## 2. Entrar a las tres conversaciones
Abre https://gemini.google.com/app, https://chatgpt.com y https://claude.ai. Inicia sesión y crea una conversación nueva en cada una. Pega el mismo DIRECTORIO_REVISION_DOCENTE y el criterio inicial. También puedes adjuntar los archivos cuando tu cuenta lo permita. Guarda el nombre del modelo que muestre cada aplicación, la fecha y su respuesta.

La comparación básica funciona con texto; no exige instalar tres aplicaciones. Los límites dependen de la cuenta. Una suscripción de chat y el consumo de una API son servicios distintos. Si no tienes acceso a una herramienta, registra cuál falta y compara con las salidas que el profesor muestre, identificando su procedencia.

## 3. Preparar Google y Make
Usa una cuenta de ensayo. En Drive crea PBS_RED y las carpetas Entradas, Borradores, Revisados, Encargos, Conexiones e Historial. Crea el documento DIRECTORIO_VIGENTE con la referencia docente y anota que es una preparación manual del caso ficticio.

En https://www.make.com abre un escenario y conecta Google Drive y Google Docs siguiendo la autorización de Google. La guía DEMO_MAKE_CLASE_2 detalla los dos recorridos. Make AI Toolkit permite usar su proveedor integrado; el uso consume créditos según la cuenta y configuración. Comprueba acceso al extractor y al módulo de texto antes de ensayar. Fuente: https://apps.make.com/ai-tools

## 4. Instalar OpenClaw
La guía oficial vigente ofrece una ruta rápida con **npx openclaw@latest**. Antes, comprueba **node --version**: la documentación consultada requiere Node 24.16+ o 26.1+. El asistente configura acceso al proveedor y abre el panel. La terminal mantiene el Gateway activo durante esta ruta de prueba. Fuente y pasos actualizados: https://docs.openclaw.ai/start/getting-started

En Windows puedes elegir la aplicación nativa Windows Hub o la ruta de PowerShell documentada. Si utilizas WSL, los archivos y rutas pertenecen a ese entorno. Elige una sola ruta y sigue sus instrucciones: https://docs.openclaw.ai/platforms/windows

Crea un workspace dedicado al caso. Revisa las herramientas y permisos efectivos para leer las fuentes y escribir borradores. La carpeta indicada en un prompt por sí sola no establece aislamiento. No hace falta conectar mensajería para el ejercicio. Consulta configuración de herramientas: https://docs.openclaw.ai/tools

Prueba primero con un archivo ficticio: pide leerlo y crear PRUEBA.md con una frase que cite su contenido. Abre PRUEBA.md por tu cuenta. Si sólo aparece una respuesta de chat, todavía no has comprobado escritura en archivos. Con instalación persistente, los comandos de diagnóstico incluyen **openclaw --version**, **openclaw doctor** y **openclaw gateway status**. Sigue la forma de invocación de tu instalación.

## 5. Preparar Codex para el contraste
Sigue la instalación oficial de la aplicación de escritorio y abre la carpeta del ensayo como proyecto local. Comprueba acceso de tu cuenta y el modo de trabajo sobre archivos. La documentación actual reúne la aplicación y Codex en la misma guía de inicio: https://learn.chatgpt.com/docs/quickstart

No necesitas un repositorio para este contraste: el resultado esperado son archivos de texto del caso. Revisa permisos y abre el archivo producido. Una conversación de ChatGPT que entrega texto no demuestra por sí misma que se escribió en tu carpeta.

## 6. Ensayar antes de exponer
Ejecuta A con Ana, Clara y Bruno v2. Ejecuta B con dos criterios. Comprueba las tres conversaciones y una lectura/escritura del agente. Completa la investigación real del interlocutor. Conserva capturas o salidas de tus ejecuciones y exporta el blueprint de Make sólo después de comprobarlo. No incluyas credenciales en el kit que compartas.

Si falla una ruta, anota la herramienta, el paso, el mensaje y lo que sí pudiste comprobar. Una revisión manual del caso puede apoyar la explicación, pero debe identificarse como revisión manual. El profesor acordará cómo completar una evidencia pendiente de acceso.
