# Preparar cuentas, equipos y ensayo

Versión de revisión · 25 septiembre 2026. Instalar y conectar antes de la clase. La sesión se dedica a teoría y demostración; la tarea repite el recorrido. Las rutas de instalación se han revisado documentalmente; falta validarlas en las cuentas y equipos que utilizarán el profesor y los alumnos.

## Make + Google

Se utilizan en navegador. Abre https://www.make.com/ y una cuenta Google autorizada. Prepara la hoja y el formulario según DEMO_MAKE_CLASE_2.md. Comprueba acceso a AI Toolkit y créditos. El plan gratuito tiene límites; consulta https://www.make.com/en/pricing y https://help.make.com/credits antes de fijar el ejercicio. No es necesario conectar tres APIs: la ruta propuesta utiliza el proveedor integrado de Make.

Prueba de preparación: una entrada nueva aparece en Registro con el mismo ID. Después añade IA y verifica una síntesis real en otra columna. Guarda captura y salida para el ensayo.

## Gemini, ChatGPT y Claude

Abre https://gemini.google.com/, https://chatgpt.com/ y https://claude.ai/. Inicia sesión. Prueba que puedes adjuntar o pegar el contexto de Nexo. Si un plan limita archivos o mensajes, registra la limitación y prueba con el texto del caso. No se necesita crear cuentas de pago en las tres plataformas.

## Codex / ChatGPT Work de escritorio

Descarga desde la documentación oficial: https://learn.chatgpt.com/docs/app . Selecciona la versión adecuada a tu sistema. Entra con tu cuenta y comprueba que tienes acceso a trabajo sobre una carpeta. La documentación de planes incluye acceso limitado en Free sujeto a disponibilidad: https://learn.chatgpt.com/docs/pricing . No prometemos que todas las cuentas tengan las mismas herramientas o cuota.

Prueba de preparación: en una carpeta vacía de ensayo, pide crear un archivo PRUEBA.md con una frase y ábrelo. Después elimina o conserva tú ese archivo según tu preferencia. La prueba sólo confirma la escritura en ese entorno; no demuestra todas las funciones.

## Claude Desktop y Cowork

Descarga desde el enlace oficial de https://support.claude.com/en/articles/10065433-install-claude-desktop . El chat está disponible con Free; Cowork requiere un plan compatible de pago. El docente demuestra Cowork con su cuenta si lo tiene habilitado. Un alumno puede repetir la ejecución de agente con Codex u OpenClaw y usar Claude Chat para la comparación de contenido.

## OpenClaw · Windows

1. Lee https://docs.openclaw.ai/platforms/windows y descarga Windows Hub desde el enlace oficial de esa página, eligiendo x64 o ARM64 según tu equipo.
2. Ejecuta el instalador oficial. En el primer inicio, sigue la configuración local o conecta un Gateway que ya tengas. La ruta local documentada utiliza un entorno WSL administrado por la aplicación; instalar la interfaz y disponer del Gateway son pasos relacionados pero distintos.
3. Si tu equipo corporativo bloquea WSL, virtualización o instalaciones, consulta con su administrador. Para la tarea usa mientras tanto un entorno disponible de Codex o una repetición acompañada; no cambies políticas del equipo para completar un ejercicio.
4. Completa la elección de proveedor y abre el panel. No necesitas enlazar Telegram o WhatsApp para esta demostración.

## OpenClaw · macOS / Linux

Usa https://docs.openclaw.ai/install y la ruta oficial de tu sistema. macOS ofrece aplicación de menú; Linux dispone de instalación por CLI. El instalador y las versiones de Node requeridas cambian: sigue la documentación enlazada en lugar de copiar comandos antiguos de redes. Completa onboarding, proveedor y Gateway antes de abrir la tarea. Las rutas de modelos locales requieren recursos adicionales y no son requisito de esta clase.

## Conectar el modelo en OpenClaw

Una ruta documentada usa una clave de Google AI Studio: https://docs.openclaw.ai/providers/google . Crea tu clave desde https://aistudio.google.com/ y configúrala con el asistente oficial. No la copies en el chat de clase, entregas, capturas ni repositorios. Selecciona un modelo disponible con cuota suficiente en tu proyecto; una clave gratuita no significa que todos los modelos tengan uso gratuito. Consulta https://ai.google.dev/gemini-api/docs/billing . La suscripción de la aplicación Gemini y el uso de la API son accesos distintos.

Prueba de preparación: obtener una respuesta en el panel, leer un archivo del caso y crear un archivo de salida en el espacio de ensayo. Si sólo funciona el chat, aún falta habilitar o comprobar la parte de herramientas.

## Alternativa de automatización local: n8n

n8n Community permite autoalojamiento; requiere preparar el entorno además de abrir una cuenta. Consulta https://n8n.io/pricing/ y https://github.com/n8n-io/n8n . Es una extensión opcional para después, no una segunda instalación exigida durante la clase. Make es la ruta común de las demostraciones.

## Antes de impartir

- Ejecutar una vez cada recorrido que se mostrará en vivo.
- Guardar fecha, herramienta, plan y salidas propias de contingencia.
- Descargar el kit y comprobar que se abre.
- Ensayar cambio entre presentación, Make y aplicaciones.
- Mantener disponibles una entrada normal, una incompleta y el cambio de condición.
- Mostrar como grabación o salida previa cualquier recorrido que no se ejecute en vivo; no presentarlo como ejecución actual.
- La mesa local del sitio es una simulación didáctica para comprender el mapeo. No llama a modelos ni sustituye la prueba de Make.
