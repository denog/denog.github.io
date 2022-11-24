---
lang: de
ref: community_blog
title: Community Blog
---

# Community Blog

Im DENOG Community Blog können Mitglieder unserer Community ihre persönliche Meinung zu Themen rund um das Internet, technische Beobachtungen und How Tos und sonstige relevante Themen veröffentlichen.  
Diese Themen widerspiegeln nicht zwingend die Sicht des DENOG e.V., sondern den Blickwinkel des jeweiligen Autors.

<hr/>

{% assign community_posts=site.pages|where:"lang", page.lang |oder:"date"%}
{% assign searchString = page.lang|append: '/community_blog/posts'|prepend: '/' %}

{% for post in community_posts reversed %}
{% if post.url contains searchString %}

## [{{ post.title }}]({{ post.url }})

_{{ post.date }} von {{ post.author }}_:  
{{ post.content | strip_html |truncatewords: 50 }} [weiter lesen]({{post.url}})

<hr>
{% endif %}
{% endfor %}
