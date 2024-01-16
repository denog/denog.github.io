---
layout: page
lang: de
title: DENOG Meetups
year: 2023
breadcrumbs: [<a href="../archiv.html">Archiv</a>]
---
{% include text-expand.html %}

# DENOG Meetups 2023

{% assign meetingArray = site.pages|where: "year", page.year|where: "meeting_type", "meetup"|where: "lang", page.lang | sort: 'date' %}
{% assign currentYear = site.time|date: '%Y'|plus: 0 %}
{% assign presentations = site.static_files | where: "media", true %}

{% for entry in meetingArray reversed %}
    {% if entry.meeting %}
        {% if entry.home and entry.home == true %}
**{{ entry.date }}**: [{{ entry.meeting }}, {{ entry.city }}]({{ entry.url }})
        {% endif %}
    {% endif %}
{% endfor %}
