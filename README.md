# DENOG Website

## Neue Konferenz anlegen

Um eine neue Konferenz anzulegen muss im Ordner `de/meetings/<event>` ein neuer Unterordner erstellt werden.
Das Konferenzlogo muss in `images/logos/<event>.png` abgelegt werden.
Der Header der Seite muss wie folgt aufgebaut sein:
```
---
layout: conference
lang: de
title: DENOG11 - <SEITENNAME>
year: 2019
city: Hamburg
meeting: DENOG11
---
```

Der Text in der Navigationsleiste entspricht dem Titeltext nach dem `-`.
Wenn eine Seite im Ordner nicht auftauchen soll, kann `hide: true` hinzugefügt werden.

Ein Redirect (z.B. auf einen externen Shop) kann wie folgt hinzugefügt werden:
```
---
layout: redirected
sitemap: false
permalink: /de/meetings/denog10/tickets/
redirect_to: https://pretix.eu/denog/denog10/
meeting: DENOG10
title: DENOG10 - Tickets
---
```

### Sponsoren
Die Sponsoren-Logos müssen im Ordner `images/meetings/denogXX/` abgelegt werden.

Die HTML-Datei für die Rechte Sponsor-Leiste liegt in `de/meetings/<event>/_includes/sponsors.html`:
```html
<div id="conference_sponsors">

    <section class="conference_sponsors_large">
        <h4>Großer Sponsor</h4>
        <a href="https://www." target="_blank">
            <img src="/images/meetings/denog14/sponsor_XXX.png" title="xxx">
        </a>
    </section>

    <section>
        <h4>Mittlerer Sponsor</h4>
        <a href="https://www." target="_blank">
            <img src="/images/meetings/denog14/sponsor_XXX.png" title="xxx">
        </a>
    </section>

    <section class="conference_sponsors_small">
        <h4>Kleiner Sponsor</h4>
        <a href="https://www." target="_blank">
            <img src="/images/meetings/denog14/sponsor_XXX.png" title="xxx">
        </a>
    </section>
</div>
```