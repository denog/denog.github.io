---
lang: de 
ref: agenda8
title: DENOG8 - AGENDA
meeting: DENOG8
layout: conference
---
Die Folien aller Vorträge werden in englischer Sprache vorliegen. Alle Vorträge werden ebenfalls in englisch gehalten.

### Tag 1 - 23.11.2016 

<table class="table">
  <tbody><tr><th>Start</th><th>Ende</th><th>Titel</th><th>Autor</th><th>Folien</th></tr>
  <tr bgcolor="#1fb714"><td>12:00</td><td>13:00</td><td colspan="3">Anmeldung &amp; Welcome Lunch</td></tr>
  <tr>
    <td>13:00</td>
    <td>13:45</td>
    <td>Begrüßung</td>
    <td>DENOG Orga</td>
    <td></td>
  </tr>
  <tr>
    <td>13:45</td>
    <td>14:15</td>
    <td><a href="#agenda10" name="showtip" id="showtip">BH, sBH &amp; RTDCoS</a></td>
    <td>Markus Weber</td>
    <td></td>
  </tr>
  <tr>
    <td>14:15</td>
    <td>14:45</td>
    <td><a href="#agenda11" name="showtip" id="showtip">Criminal Clouds, Rouge Routers and Darknet DDoS Deals</a></td>
    <td>Infoblox</td>
    <td></td>
  </tr>
  <tr>
    <td>14:45</td>
    <td>15:10</td>
    <td><a href="#agenda3" name="showtip" id="showtip">Lightning Talks</a></td>
    <td></td>
    <td></td>
  </tr>
  <tr bgcolor="#1fb714"><td>15:10</td><td>16:00</td><td colspan="3">Kaffeepause</td></tr>
  <tr>
    <td>16:00</td>
    <td>16:30</td>
    <td><a href="#agenda4" name="showtip" id="showtip">Illegimate Source IPs At Internet Exchange Points</a></td>
    <td>Florian Streibelt</td>
    <td></td>
  </tr>
  <tr>
    <td>16:30</td>
    <td>17:00</td>
    <td><a href="#agenda1" name="showtip" id="showtip">Next-Generation Traffic Engineering with SPRING</a></td>
    <td>Sebastian Graf</td>
    <td></td>
  </tr>
  <tr>
    <td>17:00</td>
    <td>17:30</td>
    <td><a href="#agenda6" name="showtip" id="showtip">Layer 2 Bitstream Access als TAL-Ersatz</a></td>
    <td>Oliver Knapp</td>
    <td></td>
  </tr>
  <tr>
    <td>17:30</td>
    <td>18:00</td>
    <td><a href="#agenda7" name="showtip" id="showtip">Naughty Port Project and POC at ECIX</a></td>
    <td>Erik Bais, Stefan Plug</td>
    <td></td>
  </tr>
  <tr bgcolor="#1fb714">
    <td>18:30</td>
    <td>Social Event</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</tbody></table>

### Tag 2 - 24.11.2016

<table class="table">
  <tbody><tr><th>Start</th><th>Ende</th><th>Titel</th><th>Autor</th><th>Folien</th></tr>
  <tr>
    <td>9:00</td>
    <td>9:30</td>
    <td><a href="#agenda8" name="showtip" id="showtip">BGP PCAP Parser</a></td>
    <td>Christoph Dietzel</td>
    <td></td>
  </tr>
  <tr>
    <td>9:30</td>
    <td>10:00</td>
    <td><a href="#agenda9" name="showtip" id="showtip">Monitoring with Prometheus and Grafana</a></td>
    <td>Richard Hartmann</td>
    <td></td>
  </tr>
  <tr>
    <td>10:00</td>
    <td>10:30</td>
    <td><a href="#agenda5" name="showtip" id="showtip">New Developments in Address Policy and Community Tools</a></td>
    <td>Vesna Manojlovic, Florian Obser</td>
    <td></td>
  </tr>
  <tr>
    <td>10:30</td>
    <td>10:50</td>
    <td><a href="#agenda13" name="showtip" id="showtip">Monitoring ISP Networks Without DPI</a></td>
    <td>Timo Klos, Stefan Meinders</td>
    <td></td>
  </tr>

  <tr bgcolor="#1fb714"><td>10:50</td><td>11:40</td><td colspan="3">Kaffeepause</td></tr>
  <tr>
    <td>11:40</td>
    <td>12:10</td>
    <td><a href="#agenda2" name="showtip" id="showtip">Protect your edge, BGP security made simple</a></td>
    <td>Theo Voss</td>
    <td></td>
  </tr>
  <tr>
    <td>12:10</td>
    <td>12:40</td>
    <td><a href="#agenda12" name="showtip" id="showtip">Scaling BIRD Routeservers</a></td>
    <td>Benedikt Rudolph</td>
    <td></td>
  </tr>
  <tr>
    <td>12:40</td>
    <td>13:00</td>
    <td>Closing Talk</td>
    <td>DENOG Orga</td>
    <td></td>
  </tr>
  <tr bgcolor="#1fb714"><td>13:00</td><td>14:30</td><td colspan="3">Abschiedslunch &amp; Kaffee</td></tr>
</tbody></table>

### "Next-Generation Traffic Engineering with SPRING" - Sebastian Graf

In MPLS networks it is often required to validate the proper working of the data plane by sending and tracking test packets (probes). With LDP and RSVP as the current signalling protocols deployed in MPLS networks, one can only verify specific/selected links through the control plane or with dedicated probes directly attached to the corresponding routers. 
Source packet routing in networking (SPRING) provides an alternative method to signal transport labels in MPLS networks and offers an interesting approach to realize OAM functionality. With SPRING one could verify data plane operation in several segments by sending a single packet. Moreover, SPRING provides mechanisms to direct the packets to any link in the network independent of the position of the sender, which in turn reduces the number of probes required.

[zur Agenda](#top)

### "Protect your edge, BGP security made simple" - Theo Voss

Pioneers of the internet are putting great effort in protecting their networks by establishing strict filtering, trying to eliminate the last holes in their walls and using third-party DDoS mitigation solutions. However, we have seen avoidable route leaks and a tremendous increase in DDoS attacks in the last years. Unfortunately, the majority of ISPs in the world still filter on max-prefix limits at most and hope for the best. We at SysEleven have combined common filter best-practices with a self-made generator for prefix-filters and RPKI to establish strict filtering at the edge. Additionally, we have integrated a simple open-source tool for detecting and mitigating volumetric DDoS attacks. And by adding FlowSpec, the maximum attack bandwidth is no longer limited to our edge capacity. Altogether, this is a concept that has proven his capability in the past. I believe that every ISP who shares his individual and even non-perfect concept enables others to protect themselves better and finally makes the internet more secure. Therefore, I would like to present our solution as a thought-provoking impulse and give an exclusive insight into our Juniper based network.

[zur Agenda](#top)

## Lightning Talks

### Introduction to Computermuseum München - Wolfgang Stief

The Computermuseum München is an effort by some vintage computing enthusiasts to bring vintage computers of all sizes back to life and preserve knowledge about system architectures. In several groups, we collect, restore and run computers from the 8-bit era, mini computers (mostly DEC), several Unix systems, as well as supercomputers from NEC, Control Data and Cray Research. I'm an active member of the supercomputing group. The lightning talk will give a short introduction into our organization, a brief overview on our collection and aims to initiate a discussion (for the breaks, not while the talk) on how to display vintage network technology like Frame Relay, FDDI or ATM.

### Nesting DWDM within CWDM - Moritz Frenzel

Sometimes old CWDM Muxes could use an 'upgrade' but can't be fully replaced. Since DWDM waves are so tiny and overlap with CWDM Channels they should fit, shouldn't they? This talk will outline which waves fit and why, and what to consider.

### Turris Omnia Router, the open-source center of your home - Jan Čermák

Home router is necessary to connect you to the Internet but it is idle most of the time, just eating electricity. Why not use it for more tasks? With powerful hardware, Turris Omnia can handle gigabit traffic and still be able to do much more. You can use it as a home server, NAS, printserver and it even has a virtual server built-in.

[zur Agenda](#top)

### "Illegimate Source IPs At Internet Exchange Points" - Florian Streibelt

This presentation features a measurement study we conducted at two large european IXPs. We studied sampled flow data and evaluated the corresponding metadata, that is source IP address and IXP member, to analyze traffic that in theory should not be present. Here, we consider traffic where we find the source IP to be illegitimate within the scope of the public Internet. This includes intentionally spoofed traffic, internal traffic leaked by mistake (e.g., RFC1918), and traffic resulting from misconfiguration. To accomplish this, we use public BGP dumps from RIPE and Routeviews to assess which ASes announce which prefixes and determine valid transit ASes for each prefix present in the global routing table. Our analysis shows that a small set of IXP members without proper ingress filtering can have global impact and are responsible for a substantial portion of this traffic. Surprisingly, large networks generally perform better when compared to smaller ones, although typically implementing proper filtering seems easier for smaller networks. While our methodology cannot guarantee a completely accurate categorization of traffic, it can easily be deployed in a local network to analyze traffic received from peers and hint towards cases where ingress filtering might not be configured correctly.

[zur Agenda](#top)

### "New Developments in Address Policy and Community Tools" - Vesna Manojlovic, Florian Obser

The presentation will consist of two parts: Part one will inform the audience about some recent developments in address policy, including IPv4 and Inter-RIR transfers and highlight some discussions taking place in the larger RIPE community. The second part will cover new developments and features of popular RIPE NCC tools, with a special focus on changes and improvement to the RIPE Routing Information Service (RIS). This is an update to the developments published on RIPE Labs some time ago: https://labs.ripe.net/Members/colin_petrie/updates-to-the-ripe-ncc-routing-information-service If there is interest in other topics such as IPv6 deployment or the current state of RIPE Atlas, we are happy to adjust the focus of the presentation.

[zur Agenda](#top)

### "Layer 2 Bitstream Access als TAL-Ersatz" - Oliver Knapp

Im Zuge der Einführung von VDSL-Vectoring ist im deutschen Tk-Markt eine Neuregelung für den Zugang zur entbündelten TAL getroffen, und stattdessen ein reguliertes Layer-2 Vorleistungsprodukt als Ersatz eingeführt worden. Der Vortrag beleuchtet die Rahmenbedingungen im Markt, geht auf die technische Hintergründe ein, und zeigt Implementierungsvorschläge sowohl für Vorleistungsnehmer, als auch potentielle Vorleistungsanbieter mit eigenen Ausbaugebieten auf.

[zur Agenda](#top)

### "Naughty Port Project and POC at ECIX" - Erik Bais, Stefan Plug

https://ripe72.ripe.net/archives/video/116/ The Naughty Port presentation explains how what the actual issue is with DDOS Amplification attacks.. How we investigated the actual cause and source of the traffic that was flooding our network during an attack and if we could find a way to mitigate the issue. We created a complete database that allowed us to create a ranking system for each ASn globally … And based on the results of the ranking, we can decide if we will peer with a peering party on our regular (premium) peering port .. or .. if we peer with them (via de routeserver ) on our Naughty port. 
This presentation will show a proof of concept on the ECIX peering platform for Eric Bias's 'Naughty Ports' project.

[zur Agenda](#top)

### "BGP PCAP Parser" - Christoph Dietzel

Network operations increasingly relies on tools and features to perform in-depth analysis of Internet routing behavior to optimize traffic flows or dissect DDoS attacks. In particular, IXPs commonly operate software routers such as BIRD or Quagga as BGP route servers. However, the implemented data processing features and tools are somewhat limited. BIRD does not support continues BGP exports, MRT dumps allow a post-best-path-selection view only, and the tshark BGP filtering capabilities are limited, just to name a few. In this talk we present a TCP dump BGP parser to overcome these limitations. The raw packets can be captured with tcpdump at the network interface of any software router and either be processed as a live-stream or stored and analyzed subsequently. For a post mortem analysis the BGP parser comes with a rich set of filters and export formats to meet the desired level of granularity. The presentation will showcase some compelling examples. Moreover, the tool can be extended as favored since it is available as open source project at GitHub.

[zur Agenda](#top)

### "Monitoring with Prometheus and Grafana" - Richard Hartmann

While the cornerstones of efficient monitoring and alerting have been the same for ages, they are rarely applied in a consequent and consistent manner. The first half of this talk will give a perspective on how to do monitoring with minimal human interaction to avoid overload and/or pager fatigue. The second half will focus on how much more powerful and adaptive Prometheus is compared to legacy monitoring solutions. To wrap up, we will look at how pretty and useful Grafana is in combination with Prometheus.

[zur Agenda](#top)

### "BH, sBH & RTDCoS" - Markus Weber

BH (Blackholing) as (very) effective (D)DOS mitigation is nothing new and widely available (will not be further touched). sBH (Selective Blackholing or Regional Blackholing) is also not that new (~2005 outlined by Cisco if not before) but was brought to a wider audience by Job Snijders @ RIPE68 in 2014. Job suggested an implementation in the normal iBGP mesh, which was not an option for us. We roughly outlined on #nlnog how we did it (via dedicated RR) and we are open to share this in more depth with the community. However, any kind of Blackholing is effectively switching of the service; but at the same time protects the rest of ISP's network from suffering by such an attack (overloaded links, too high load on servers). To verify if the attack is over (or to take some traffic samples), the BH needs to be removed ... exposing again ISP's full network to the risk of suffering because of the attack (if still ongoing). Here "RTDCoS" might help. The idea behind RTDCoS (remote triggered destination IP based CoS - or however this will be called in the end) is to allow a downstream to signal via eBGP very simple CoS characteristics to its upstream. This could be (and will be in most cases only) something like "rate-limit all traffic targeted to the tagged prefixes to a (predefined) bandwidth". Even though the techniques used aren't that special, most likely not too many have yet considered of really making use of this. [And then make this eventually regional / selective (with the same reasoning as sBH might be of use) and enable the upstream to use this CoS information not to carry "just all the crap" up to the egress PE where most of it would be discarded anyway.

[zur Agenda](#top)

### "Criminal Clouds, Rouge Routers and Darknet DDoS Deals" - Infoblox

A wide and deep infiltration of a Service Provider and/or its subscribers consists of many smaller process steps by different roles and actors on the criminal side. Do we need different technologies and products to detect and mitigate each criminal actor, role and process step? The Criminal Cloud relies on a functioning Domain Name System (DNS) for the different roles in the Criminal Gang to communicate amongst each other, to reach and infect their next victims, do reconnaissance on new planned targets, command and control botnets and marketing campaigns in the darknet. Above and beyond DNS, Threat Intelligence is a proven tool in identifying, mitigating, remediating and even helping predict the cyber criminal’s next move. By leveraging a combination of DNS based security, Threat Intelligence and collaboration across vendors, many attack vectors can be more effectively prevented, detected, mitigated, and remediated thereby improving security of subscribers and the operator’s network. Participants will get an overview of how Threat Intelligence can complement DNS based protection, why machine learning and entropy analysis are critical for the moving targets in the criminal cloud, why vendor collaboration is key, and what questions to ask the next security vendor that comes knocking on their door.

[zur Agenda](#top)

### "Scaling BIRD Routeservers" - Benedikt Rudolph

The BIRD Route Server Software comes with the inherent limitation of being single threaded. While a gross of the deployments are by far too small (in terms of the number of peers/sessions and FIB entries) to reach any scalability limits, the application as a Route Server at a large IXP can easily overload a single BIRD instance.This talk presents a strategy to scale an existing deployment of BIRD on modern multi-core machines. The proposed solution spreads the load originating from peer-specific routing tables and an extensive amount of filtering to multiple instances of BIRD. Traditionally iBGP and BGP confederations are solution candidates, however they are not suitable to the IXP scenario. By also looking at the processing overhead and caveats of the configuration process we present the approach taken. We highlight current issues with BIRD deployments that have a number of peers in the hundreds and thousands range and also process a large number of prefixes.While our initial investigations are based on an unmodified version of the BIRD software we give an outlook towards further modifications that can help to make BIRD scale for possibly another ten years.

[zur Agenda](#top)

### "From Peak Time to Prime Time Availability" - Timo Klos, Stefan Meinders

In this presentation, we will review trends in Over-the-Top (OTT) traffic usage, user behavior and rapidly growing volumes of video streaming from services such as Netflix. The amount of video traffic carried by networks and its interconnections is significant. Delivery methods and encryption are challenges for today’s methods of network analysis—as are unexpected network changes that can drastically impact subscribers, transit costs, and network overload. Recent research unveiled that existing monitoring tools cannot cope with these variations in traffic delivery, caching strategies, and encryption. Finally, we describe how the use of "big data" techniques and multi-dimensional databases combined with global internet service mapping provides new insights into traffic delivery, consumption, and quality.

[zur Agenda](#top)