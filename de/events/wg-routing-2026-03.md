---
title: DENOG WG Routing - Meeting Q3
date: 2026-09-08
layout: page
lang: de
year: 2026
city: Remote
meeting: WG Routing - Meeting Q3
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


# DENOG Routing WG - Meeting Q3

| ----- | ------- |
| Wann  | 08.09.2026, 10:00 - 13:00 Uhr, Zeitzone: Europe/Berlin |
| Wo    | Google Meet-Teilnahmeinformationen: Link für Videoanruf: <a href="https://meet.google.com/zxk-znkm-ery">https://meet.google.com/zxk-znkm-ery</a> <br /> Oder telefonisch: (DE) +49 40 8081619292 PIN: 763 505 336# <br />  Weitere Telefonnummern: https://tel.meet/zxk-znkm-ery?pin=6175212490576 | 


Mehr Informationen: <a href="/de/wg.html">DENOG Working Groups</a>
