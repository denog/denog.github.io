---
lang: de
ref: index
redirect_from: "/"
---
<div id="mainpage">
    <div class="pagecontentblock">
        <div class="mainpagebox mainpageboxlarge">
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                             <a href="{{ site.url }}/{{ page.lang }}/meetings/denog12/index.html" class="btn btn-custom-default pull-right"><img src="{{ site.url }}/images/20201110_DENOG13_Announcement.png" id="mainpagelogo" /></a>
                        </div>
                        <div class="col-sm-6">
                        <h2 class="mainpageboxheadline">Unterstütze die DENOG e.V.</h2>
                        <p><a href="/files/verein/DENOG_Antrag_Mitgliedschaft_v18_SEPA_20181002.pdf" class="btn btn-custom-default">Mitglied werden <i class="ion-arrow-right-c"></i></a> <a href="/files/verein/DENOG_Antrag_Foerdermitgliedschaft_v18_20181002.pdf" class="btn btn-custom-default">Fördermitglied werden <i class="ion-arrow-right-c"></i></a><br /> <br />
                        <a href="/files/gov/20201110_DENOG_Beitragsordnung FINAL 20201110.pdf" class="btn btn-custom-default">Zur Beitragsordnung <i class="ion-arrow-right-c"></i></a> <a href="/files/verein/20171124-DENOG_Satzung.pdf" class="btn btn-custom-default">Zur Satzung <i class="ion-arrow-right-c"></i></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">




            <div class="newsblockwrapper">
                <div class="newsblock">
                    <h4>Kostenfreie Meetup Registrierung gestartet</h4>
                    <p>Jetzt für das virtuelle Meetup am 02. Feb 2021 anmelden.</p>
                    <a href="{{ site.url }}/{{ page.lang }}/events/index.html" class="btn btn-custom-default pull-right">mehr Informationen <i class="ion-arrow-right-c"></i></a><br>

                </div>
                <div class="newsblock">
                    <h4>DENOG12 Presentations & Recordings</h4>
                    <p>Find all Recordings of #DENOG12 already on our Event Page.</p>
                    <a href="{{ site.url }}/{{ page.lang }}/meetings/denog12/recordings.html" class="btn btn-custom-default pull-right">Recordings <i class="ion-arrow-right-c"></i></a>

                </div>
                <div class="newsblock">
                    <h4>Mitgliederversammlung 2020</h4>
                    <p>Slidedeck und Dokumente online</p>
                    <a href="{{ site.url }}/{{ page.lang }}/governance/index.html" class="btn btn-custom-default pull-right">mehr Informationen <i class="ion-arrow-right-c"></i></a>
                </div>
            </div>

            <hr/>

            <div class="mainpagepaddedbox">
                <h3>Community Blog</h3>
                {% assign community_posts=site.pages|where:"lang", page.lang |oder:"date"%}
                {% assign searchString = page.lang|append: '/community_blog/posts'|prepend: '/' %}
                
                {% for post in community_posts reversed %}
                {% if post.url contains searchString %}
                
                Im <a href="community_blog/index.html">DENOG Community Blog</a> teilen Mitglieder Ihre Sicht auf spannende Themen rund um das Internet. <br />
                Im aktuellsten Beitrag schreibt <b>{{ post.author }}</b> über <b>{{ post.title}}</b>:<br/><br/>
                    <i> {{ post.content | strip_html | truncatewords: 50 }} </i><br/>
                
                    <a href="{{ post.url}}" class="btn btn-custom-default pull-right">Weiter lesen <i class="ion-arrow-right-c"></i></a>
                {% break %}
                {% endif %}
                {% endfor %}
            </div>

            <hr/>

            <div class="mainpagepaddedbox">
                <h3>Über Denog</h3>
                <p>DENOG ist eine Community für Menschen, die am Internet in Deutschland forschen, es betreiben und weiter
                    entwickeln. Im Rahmen dieses technischen Forums treffen sich Menschen, die mit, für oder am Internet arbeiten
                    und netzwerkspezifische Themen mit Gleichgesinnten diskutieren, um sie dadurch einfacher lösen zu können.</p>
                <p>Um diesem Austausch nicht nur zu ermöglichen, sondern weiter voran zu treiben und zu fördern wurde der Verein
                    DENOG e.V im Jahr 2017 gegründet.</p>
                <a href="{{ site.url }}/{{ page.lang }}/informationen.html" class="btn btn-custom-default pull-right">Mehr erfahren
                    <i class="ion-arrow-right-    c"></i></a>
                <div class="clearfix"></div>
            </div>

        </div>

    </div>

</div>
