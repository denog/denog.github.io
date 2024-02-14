---
title: Vorstandsprotokolle
lang: de
ref: BoardDocuments
---

# Boardmeeting Protokolle

Der Vorstand trifft sich regelmäßig am 1. Dienstag des Monats zu einem Boardmeeting, die Protokolle werden im jeweils folgenden Boardmeeting verabschiedet und im Anschluss veröffentlicht.


## Protokolle

{% assign protocols = site.static_files | where: "board_meeting", true %}
<ul>
  {% for protocol in protocols reversed %}
    <li><a href="{{ protocol.path }}">{{ protocol.basename }}</a></li>
  {% endfor %}
</ul>
