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
                        <div class="col-md-6 col-sm-12">
                             <a href="/de/meetings/denog17/"><img src="{{ site.url }}/images/meetings/denog17/denog17_banner.jpg" id="mainpagelogo" /></a>
                        </div>
                        <div class="col-md-6 col-sm-12">
                        <h2 class="mainpageboxheadline">Unterstütze den DENOG e.V.</h2>
                        <p><a href="/de/governance/become_member.html" class="btn btn-custom-default">Mitglied werden <i class="ion-arrow-right-c"></i></a> <a href="/de/governance/become_sustaining_member.html" class="btn btn-custom-default">Fördermitglied werden <i class="ion-arrow-right-c"></i></a><br /> <br />
                        <a href="/files/gov/20201110_DENOG_Beitragsordnung FINAL 20201110.pdf" class="btn btn-custom-default">Zur Beitragsordnung <i class="ion-arrow-right-c"></i></a> <a href="/files/verein/20171124-DENOG_Satzung.pdf" class="btn btn-custom-default">Zur Satzung <i class="ion-arrow-right-c"></i></a> <br /><br />
                        <a href="/de/archiv.html" class="btn btn-custom-default">Alle Veranstaltungen <i class="ion-arrow-right-c"></i></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">



            <div class="newsblockwrapper">

                <article>
                    <h4>Neuer Vorstand gewählt</h4>
                    <p>In unserer gestrigen Mitglieder- versammlung wurden drei neue Vorstandsmitglieder gewählt!</p> 
                    <a href="/de/governance/board.html" class="btn btn-custom-default pull-right">Vorstand <i class="ion-arrow-right-c"></i></a>
                <br>
                </article>

                <article>
                    <h4>DENOG16 is over :-(</h4>
                    <p>But you find all the videos online! :-)</p>
                    <a href="https://media.ccc.de/b/conferences/denog/denog16" class="btn btn-custom-default pull-right">media.ccc.de <i class="ion-arrow-right-c"></i></a><br /><br />
                    <a href="https://www.youtube.com/@DENOG" class="btn btn-custom-default pull-right">Youtube <i class="ion-arrow-right-c"></i></a>
                <br>
                </article>

                <article>
                    <h4>DENOG@ instagram</h4>
                    <p>We are pleased that you will follow us at </p><br /><br />
                    <a href="https://www.instagram.com/denog.de/" class="btn btn-custom-default pull-right"><i class="ion-social-instagram"></i> instagram <i class="ion-arrow-right-c"></i></a>
                <br>
                </article>

            </div>

            <hr/>

            <div class="mainpagepaddedbox">
                <h3>Community Blog</h3>
                {% assign community_posts=site.pages|where:"lang", page.lang |oder:"date"%}
                {% assign searchString = page.lang|append: '/community_blog/posts'|prepend: '/' %}

                {% for post in community_posts reversed %}
                {% if post.url contains searchString %}

                Im <a href="community_blog/index.html">DENOG Community Blog</a> teilen Mitglieder Ihre Sicht auf spannende Themen rund um das Internet, den Verein und die weltweite Community. <br />
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
