---
title: DENOG Meetups
layout: page
lang: de
year: 2023
breadcrumbs:
- <a href="../archiv.html">Archiv</a>
---

{% include text-expand.html %}

# DENOG Meetups {{page.year}}

{% assign meetingArray = site.pages|where: "lang", page.lang|sort: 'date' %}
{% assign selectedYear = page.year %}

{% for entry in meetingArray reversed %}
    {% if entry.meeting %}
        {% if entry.home and entry.home == true %}
            {% assign checkYear = entry.date|date: '%Y'|plus: 0 %}
            {% if checkYear == selectedYear and entry.meeting_type == 'meetup' %}
**{{ entry.date }}**: [{{ entry.meeting }}, {{ entry.city }}]({{ entry.url }})
           {% endif %}
        {% endif %}
    {% endif %}
{% endfor %}
