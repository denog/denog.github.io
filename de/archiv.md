---
title: Archiv
lang: de
ref: archiv
---

{% include text-expand.html %}

# Archiv

Alle Slides vergangener Veranstaltungen finden sich auch im <b>[Media Repository](https://github.com/denog/media).</b> 

Alle Videos sind veröffentlich auf dem <b>[Youtube-Kanal von DENOG](https://www.youtube.com/@DENOG).</b>


{% assign meetingArray = site.pages|where: "lang", page.lang | sort: 'date' %}
{% assign currentDate = site.time|date: '%Y-%m-%d' %}
{% assign presentations = site.static_files | where: "media", true %}

# Bevorstehende Veranstaltungen
{% for entry in meetingArray reversed %}
    {% if entry.meeting %}
        {% if entry.home and entry.home == true %}
            {% assign checkDate = entry.date|date: '%Y-%m-%d' %}
            {% if checkDate >= currentDate %}
                {% if entry.meeting_type == 'conference' %}
<span style="color:blue">**{{ entry.date }}**</span>: [{{ entry.meeting }}, {{ entry.city }}]({{ entry.url }})
                {% else %}
**{{ entry.date }}**: [{{ entry.meeting }}, {{ entry.city }}]({{ entry.url }})
                {% endif %}
<!-- Funktioniert nie und geht immer wieder kaputt: 
<details>
    <summary><b>Slides</b> (click to expand)</summary>
<ul>
		{% for presentation in presentations %}
<li>{{ presentation.path }}</li>
    			{% if presentation.path contains entry.meeting %}
<li><a href="{{ presentation.path }}">{{ presentation.basename | replace: "_", " " }}</a></li>
    			{% endif %}
		{% endfor %}
</ul>
</details> -->
           {% endif %}
        {% endif %}
    {% endif %}
{% endfor %}


# Vergangene Veranstaltungen

{% for entry in meetingArray reversed %}
    {% if entry.meeting %}
        {% if entry.home and entry.home == true %}
            {% assign checkDate = entry.date|date: '%Y-%m-%d' %}
            {% if checkDate < currentDate %}
                {% if entry.meeting_type == 'conference' %}
<span style="color:blue">**{{ entry.date }}**</span>: [{{ entry.meeting }}, {{ entry.city }}]({{ entry.url }})
                {% else %}
**{{ entry.date }}**: [{{ entry.meeting }}, {{ entry.city }}]({{ entry.url }})
                {% endif %}
<!-- Funktioniert nie und geht immer wieder kaputt: 
<details>
    <summary><b>Slides</b> (click to expand)</summary>
<ul>
		{% for presentation in presentations %}
<li>{{ presentation.path }}</li>
    			{% if presentation.path contains entry.meeting %}
<li><a href="{{ presentation.path }}">{{ presentation.basename | replace: "_", " " }}</a></li>
    			{% endif %}
		{% endfor %}
</ul>
</details> -->
           {% endif %}
        {% endif %}
    {% endif %}
{% endfor %}
