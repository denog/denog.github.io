---
title: Archive
lang: en
ref: archiv
---
{% assign archivColl = site.archivCollection|where: "lang", page.lang %}
{% for entry in archivColl reversed %}
**{{ entry.year }} Meeting**\\
[{{ entry.title }}, {{ entry.city }}]({{ entry.url }})
{% endfor %}