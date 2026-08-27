---
title: DENOG WG Routing - Meeting @DENOG18
date: 2026-11-16
layout: page
lang: de
year: 2026
city: Essen
meeting: WG Routing - Meeting @DENOG18
meeting_type: wg
home: true
breadcrumbs:
- <a href="../archiv.html">Archiv</a>
---

{% include text-expand.html %}

# DENOG Working Groups 2026
Alle Working Group Meetings aus 2026: 
{% assign meetingArray = site.pages|where: "lang", page.lang|sort: 'date' %}
{% assign selectedYear = page.year %}

{% for entry in meetingArray reversed %}
    {% if entry.meeting %}
        {% if entry.home and entry.home == true %}
            {% assign checkYear = entry.date|date: '%Y'|plus: 0 %}
            {% if checkYear == selectedYear and entry.meeting_type == 'wg' %}
**{{ entry.date }}**: [{{ entry.meeting }} in {{ entry.city }}]({{ entry.url }})
           {% endif %}
        {% endif %}
    {% endif %}
{% endfor %}


# DENOG Routing WG - Meeting @DENOG18

| ----- | ------- |
| Wann  | 15.-17.11.2026, Tag und Uhrzeit to be done |
| Wo    | Essen, Germany - @DENOG18 | 


Mehr Informationen: <a href="/de/wg.html">DENOG Working Groups</a>
