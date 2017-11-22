---
lang: de
---
{% assign dePages = site.pages|where: "lang", "de" %}
{% for p in dePages %}
	{% if p.ref == 'index' %}
		{{ p.content }}
	{% endif %}
{% endfor %}
