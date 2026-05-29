# Hadox Talks

Public talk archive for Hadox Research Labs.

This repository publishes narrated web editions of talks, slide decks, and
editorial packages by Edgar Valdes. The archive is designed to preserve the
original visual artifact while adding public narration, language variants, and
social handoff material for later distribution.

## Published Site

- Archive root: [https://hadox-research-labs.github.io/hadox-talks/](https://hadox-research-labs.github.io/hadox-talks/)
- Current talk: [Por que las ciudades son como elefantes y las empresas como ratones](https://hadox-research-labs.github.io/hadox-talks/elephant-cities-mice-companies/)
- English narration: [https://hadox-research-labs.github.io/hadox-talks/elephant-cities-mice-companies/index-en.html](https://hadox-research-labs.github.io/hadox-talks/elephant-cities-mice-companies/index-en.html)

## Current Talks

| Talk | Source | Status |
| --- | --- | --- |
| `elephant-cities-mice-companies` | Historical Google Slides deck, 2021 | Published with original slide images, Spanish narration, English narration, speaker scripts, and social handoff package |

## Editorial Standard

Hadox Talks uses a conservative archival model:

- Preserve original slides as the primary artifact.
- Add narration and speaker scripts without rewriting the historical deck.
- Use a polished Hadox Talks shell around the deck.
- Keep language variants explicit, normally `index.html` for Spanish and
  `index-en.html` for English.
- Keep social copy and Telegram handoff files next to the talk so publication
  steps are auditable.
- Review partner marks, institutional references, dates, and public contact
  information before promoting each talk.

## Repository Structure

```text
.
|-- index.html
|-- README.md
|-- .nojekyll
`-- elephant-cities-mice-companies/
    |-- index.html
    |-- index-en.html
    |-- deck.js
    |-- theme.css
    |-- narration.js
    |-- speaker_script.md
    |-- speaker_script_en.md
    |-- social_pack.json
    |-- telegram_handoff.md
    |-- telegram_publish_outbox.json
    `-- assets/
        |-- slides/
        `-- social/
```

## Local Preview

From the repository root:

```bash
python -m http.server 8129 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:8129/
```

## Narration Controls

Each deck uses Reveal.js plus the browser Web Speech API.

- `Narrate` or `N`: read the current slide notes.
- `Auto` or `A`: read from the current slide and advance.
- `Pause` or `P`: pause or resume.
- `Stop` or `X`: stop narration.
- Use the voice selector and rate control for rehearsal.

## Publishing

GitHub Pages serves this repository from the `main` branch root.

Canonical URL:

```text
https://hadox-research-labs.github.io/hadox-talks/
```

The build source lives in the Hadox editorial workspace and should regenerate
this static repository rather than hand-editing generated files.
