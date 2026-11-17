# Publication control: Semana de la Ciencia 2026

`editorial_gate.py` covers `de-datos-a-decisiones-2026/**`, the archive index,
and the control files listed in the review receipt. It checks known private
conversation and production residues, transcript and source presence, and
exact SHA-256 hashes. It reads PDF text, metadata and links as well as HTML
metadata and public text. Image content requires visual review.

The receipt records an agent editorial review, not human approval. Missing
review, a changed inventory or any changed reviewed file blocks publication.
Pattern matching is a limited check and cannot recognize every editorial defect.

Run `publish.py --git <git-executable>` from a checkout with an empty index.
This is the publication path for this edition: validate, install a scoped
pre-push hook, stage the exact reviewed files, validate again, commit and push.
The hook applies to this checkout. The existing GitHub Pages branch deployment
does not depend on this hook for other contributors or other checkouts.

Tests against the original rehearsal PDF and PPTX, and tests for missing review
and post-review modification, are recorded in the private production evidence.
Those source files are not part of the public package.
