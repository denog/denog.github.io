---
layout: page
lang: de
title: DENOG Routing WG 2024-01
year: 2024
city: Frankfurt
date: 2024-02-07
meeting: Routing WG Hackathon 2024-01
meeting_type: wg
home: true
breadcrumbs: [<a href="../archiv.html">Archiv</a>]
---

{% include text-expand.html %}

# DENOG Meetups 2024
Alle Meetups aus 2024: 
{% assign meetingArray = site.pages|where: "lang", page.lang|sort: 'date' %}
{% assign selectedYear = page.year %}

{% for entry in meetingArray reversed %}
    {% if entry.meeting %}
        {% if entry.home and entry.home == true %}
            {% assign checkYear = entry.date|date: '%Y'|plus: 0 %}
            {% if checkYear == selectedYear and entry.meeting_type == 'meetup' %}
**{{ entry.date }}**: [{{ entry.meeting }} in {{ entry.city }}]({{ entry.url }})
           {% endif %}
        {% endif %}
    {% endif %}
{% endfor %}


# DENOG Routing WG Hackathon 2024-01 - Frankfurt am Main<br />

| ----- | ------- |
| Wann  | 07.02.2024 10:00 - 17:00 Uhr |
| Bei wem | Xantaro |
| Wo    | Xantaro Deutschland GmbH, Hahnstraße 31-35, 60528 Frankfurt am Main |

<br>
<br>

DENOG ist eine Community für Menschen, die am Internet in Deutschland forschen, es betreiben und weiter entwickeln. 
Dies ist ein Hackathon vor-Ort und Remote der Routing WG des DENOG: [https://routing.denog.de/](https://routing.denog.de/).

## Kostenlose Anmeldung 

If the event is sold out, please click on "Waiting list" to secure a seat if someone drops out! 

<pretix-widget event="https://pretix.eu/denog/denog-routingwg-2024-01/"></pretix-widget>
<noscript>
   <div class="pretix-widget">
        <div class="pretix-widget-info-message">
            JavaScript ist in Ihrem Browser deaktiviert. Um unseren Ticket-Shop ohne JavaScript aufzurufen, klicken Sie bitte <a target="_blank" rel="noopener" href="https://pretix.eu/denog/denog-routingwg-2024-01/">hier</a>.
        </div>
    </div>
</noscript>


## Agenda

Diese wird innerhalb der Routing WG besprochen und verteilt. 


## Teilnehmer:innenliste:
(Aktualisiert ca. alle 60 Minuten)<br>
<iframe src="https://www.denog.de/pretix-attendeelist/denog-routingwg-2024-01/" width="100%" height="768" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" name="Attendeelist" title="DENOG Working WG 2024-01 Attendees">
</iframe>
<br>
*Use of the personal information above is governed by German data protection legislation. Prior consent from the owner is required before that information can be used. Note: These details are intended to enhance networking opportunities between attendees and should not be used for commercial purposes.*

