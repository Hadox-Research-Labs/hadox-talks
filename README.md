# Hadox Talks

Charlas, cursos y talleres de Edgar Antonio Valdés Porras en Hadox Research Labs. El catálogo reúne presentaciones, narraciones, guías y prácticas para seguir cada sesión y continuar trabajando.

**[Abrir Hadox Talks](https://hadox-research-labs.github.io/hadox-talks/)**

## ERP e Inteligencia Artificial · UNAM

Materiales del módulo VII del diplomado de la Facultad de Química, UNAM: siete sesiones, del 19 de noviembre al 3 de diciembre de 2026. La sesión 1 está publicada; los materiales de las sesiones 2–7 se incorporarán durante el curso.

- [Curso y calendario de las siete sesiones](https://hadox-research-labs.github.io/hadox-talks/erp-e-inteligencia-artificial/)
- [Sesión 1: presentación y prácticas](https://hadox-research-labs.github.io/hadox-talks/erp-e-inteligencia-artificial/sesion-1/)
- [Seguimiento público del grupo](https://hadox-research-labs.github.io/hadox-talks/erp-e-inteligencia-artificial/seguimiento/)
- [Guía del curso y sus archivos](erp-e-inteligencia-artificial/README.md)

La primera sesión incluye 21 láminas con narración hasta **2×**, cuatro videos de recorridos SAP, actividades A1–A6 con checks por paso, cuaderno web, un repaso de diez preguntas y registro de finalización. La calificación del repaso es de práctica y es independiente del examen del diplomado en Moodle.

Cada participante puede publicar su nombre o alias, avance, estado de A1–A6 y nota desde **Mi avance y calificación → Publicar mi avance**. La tabla del grupo tiene búsqueda, filtros y actualización cada 30 segundos. La publicación requiere una autorización específica y puede retirarse desde el mismo navegador.

## Ediciones en este repositorio

| Presentación o curso | Contenido disponible |
| --- | --- |
| [ERP e Inteligencia Artificial](https://hadox-research-labs.github.io/hadox-talks/erp-e-inteligencia-artificial/) | Calendario de siete sesiones; sesión 1 con teoría, prácticas, videos, cuaderno, repaso y seguimiento del grupo. |
| [De datos a decisiones: IA, ciencia y ciudades inteligentes](https://hadox-research-labs.github.io/hadox-talks/de-datos-a-decisiones-2026/) | Semana de la Ciencia 2026, Red Global MX Capítulo España, 18 de noviembre. Portada, cuatro láminas, discurso de 15 minutos, audio y descargas. |
| [Perspectivas de Agentes de IA en Gemelos Digitales Locales para el análisis de Ciudades](https://hadox-research-labs.github.io/hadox-talks/igisc-2026-agentes-ia-gemelos-digitales-locales/) | iGISc 2026, 13 de noviembre. Presentación narrada, demostraciones, cuaderno de preguntas y trabajos, PPTX y PDF. |
| [IA para líderes: del uso básico a la ventaja competitiva](https://hadox-research-labs.github.io/hadox-talks/ia-para-lideres/revision-clase-3/#lamina-1) | Tres clases con teoría, demostraciones, guías y materiales. La portada enlaza a cada clase. |
| [Why cities are like elephants and companies are like mice](https://hadox-research-labs.github.io/hadox-talks/elephant-cities-mice-companies/index-en.html) | Presentación de 2021, narración en inglés y español y láminas originales. [Versión en español](https://hadox-research-labs.github.io/hadox-talks/elephant-cities-mice-companies/). |
| [Navigating Complexity: AI for Resilient Urban Systems](https://hadox-research-labs.github.io/hadox-talks/resilient-urban-ai/index-en.html) | Presentación de 2024, narración en inglés y español y láminas originales. [Versión en español](https://hadox-research-labs.github.io/hadox-talks/resilient-urban-ai/). |

## Otras presentaciones enlazadas en el catálogo

Estas ediciones se alojan en otros repositorios de Hadox Research Labs.

| Presentación | Encuentro o serie |
| --- | --- |
| [Imagina un camino más agradable](https://hadox-research-labs.github.io/changesprint-encuentro-2026/masterclass-uvg/) | ChangeSprint · Universidad del Valle de Guatemala. |
| [IA responsable en lo público](https://hadox-research-labs.github.io/changesprint-encuentro-2026/curso-1-ia-responsable/) | ChangeSprint · Sesión 01. |
| [De principios a agentes verificables](https://hadox-research-labs.github.io/changesprint-encuentro-2026/curso-2-agentes-verificables/) | ChangeSprint · Sesión 02. |
| [Mínimo viable para escalar IA con seguridad](https://hadox-research-labs.github.io/guatemala-ai-week-2026/scaling-secure-ai-infrastructure/) | AI Week Guatemala. |
| [Marco ético de la nueva era digital](https://hadox-research-labs.github.io/guatemala-ai-week-2026/operable-ai-governance/) | AI Week Guatemala. |
| [Quantum Technologies as Strategic Infrastructure](https://hadox-research-labs.github.io/quantum-technologies-national-strategy/reveal_quantum_strategic_infrastructure/) | Tecnologías cuánticas e infraestructura estratégica. |

## Organización

Cada edición conserva su presentación y ofrece sus propios controles, recursos y descargas. La estructura principal es:

```text
index.html
README.md
erp-e-inteligencia-artificial/
  README.md
  curso.json
  sesion-1/
    index.html
    leccion.json
    laminas/
    audio/
    videos/
    materiales/
  seguimiento/
de-datos-a-decisiones-2026/
igisc-2026-agentes-ia-gemelos-digitales-locales/
ia-para-lideres/
elephant-cities-mice-companies/
resilient-urban-ai/
```

Las narraciones usan audio grabado o lectura del navegador según la edición. Los controles de reproducción y velocidad aparecen en cada presentación; los atajos y opciones pueden variar.

## Consulta local y publicación

Para consultar las páginas estáticas desde una copia del repositorio:

```bash
python -m http.server 8129 --bind 127.0.0.1
```

Abre `http://127.0.0.1:8129/`. GitHub Pages publica la raíz de la rama `main` en [Hadox Talks](https://hadox-research-labs.github.io/hadox-talks/).

El seguimiento del curso utiliza un servicio separado para calcular la nota y compartir los registros autorizados. El cuaderno y el avance personal se conservan en el navegador. Los datos del grupo y el servicio de seguimiento no forman parte de la publicación estática de GitHub Pages.
