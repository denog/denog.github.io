# DENOG Website

## Update in https://github.com/denog/media/

Das Verzeichnis media/ ist ein git submodule, das sich den Inhalt von
https://github.com/denog/media/ holt. Wenn dort ein Update gemacht wurde, muss
das submodule hier aktualisiert werden, bspw. mit 
```
git submodule update --init --force --remote
```
Danach muss auch die Webseite neu gebaut werden, damit die Media-Dateien wieder
eingelesen und in den html-Seiten gespeichert werden. 


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


# Hints
Docu: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll

Install: https://jekyllrb.com/tutorials/using-jekyll-with-bundler/

