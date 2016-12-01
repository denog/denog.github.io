---
title: Archiv
lang: de
ref: archiv
---
{% assign meetingArray = site.pages|where: "lang", page.lang %}
{% assign searchString = page.lang|append: '/meetings/denog'|prepend: '/' %}
{% assign currentYear = site.time|date: '%Y'|plus: 0 %}

{% for entry in meetingArray reversed %}
	{% if entry.url contains searchString %}
		{% unless entry.url contains 'agenda' %}
			{% unless entry.url contains 'cfp' %}
				{% assign checkYear = entry.year|plus: 0 %}
				{% if checkYear < currentYear and checkYear > 0 %}
**{{ entry.year }} Meeting**\\
[{{ entry.title }}, {{ entry.city }}]({{ entry.url }})
				{% endif %}
			{% endunless %}
		{% endunless %}
	{% endif %}
{% endfor %}
