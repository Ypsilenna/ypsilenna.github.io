---
layout: character
title: "Ramisallia the Dragon Witch" 
shortname: Ramisallia
categories: [oc]
tags: [complete] 
avatar: /static/image/thumbnails/characters/ramisallia.webp
alt: ""
series: When You're Evil (Planned)
active: yes
role: Deuteragonist
---
<br>  
<div class="alert alert-warning" role="alert">
 <b>Work in progress.</b> This character is from a future project and their lore may change.
</div>
  <div class="page-wrapper">

    <h1 class="page-title">{{ page.title }}</h1>
    <p class="page-subtitle">From <em>{{ page.series }}</em> · {{ page.role }}</p>
<hr>
    <div class="article-body">

      <!-- ══ INFOBOX ══ -->
      <aside class="infobox">
        <div class="infobox-header">{{ page.shortname }}</div>

        <div class="infobox-image">
          <img src="{{ page.avatar }}">
        </div>
        <div class="infobox-image-caption"><em>{{ page.title }}</em></div>

        <table>
          <tr>
            <th>Full name</th>
            <td>Unknown</td>
          </tr>
          <tr>
            <th>Also known as</th>
            <td>The Dragon Witch</td>
          </tr>
          <tr>
            <th>Species</th>
            <td>Elf</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>27</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Female</td>
          </tr>
          <tr>
            <th>Affiliation</th>
            <td>● The Nightwing Clan</td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>● Finalizing her pact with the Nightwing dragons</td>
          </tr>
        </table>
      </aside>
      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
      </div>
        <p>
Master of the ancient art of dracomancy, <b>Ramisallia</b> is the brain of the mission for the Nightwing Clan.<br><br>

After her sister, Riamidea was assassinated, she did all she could to bring her back to life with dragon magic. <br><br>

Ramisallia has three pet pygmy wyverns: Crocosmia (fire), Hellebore (ice), and Magnolia (storm). She can use their magic to power up her elemental spells.<br><br>

Has an ex-boyfriend she never talks about.<br><br>
        </p>
      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
Distanced and serious, yet protective over her own people.<br><br>

        </p>
      </details>

            <details open>
        <summary><b>Abilities</b></summary>
        <p>
<b>[TBA]</b><br>
        </p>
      </details>
<br>

      <details open>
        <summary><b>Fears</b></summary>
        <p>
She's scared of losing her sister again.
        </p>
      </details>
<br>
      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Star-shaped jewelry, color blue, learning about ancient magic, hot springs, sunflowers, wyverns<br>

<b>Dislikes:</b><br>
Talking about her ex-boyfriend, long hair, wasting food
        </p>
      </details>
<br>
      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[<a href="/characters/riamidea">Riamidea the Necromancer</a>]</b> Sister.<br>
     <b>[<a href="/characters/ferimus">Ferimus the Druid</a>]</b> Friend.<br>
     <b>[Crocosmia, Hellebore, and Magnolia]</b> Beloved per wyverns.<br>
     <b>[<a href="/characters/vermilicus">Archpriest Vermilicus</a>]</b> Arch Nemesis<br>
        </p>
      </details>
<br>
      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) She used to be a character in my discontinued webcomic, Hellcephira.<br>
2) She was supposed to marry her ex-boyfriend back in the comic days, but I decided to split them up as Riamidea canonically hated him and he was pretty offputting.<br>
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | where_exp: "item", "item.tags contains 'Ramisallia'" %}
{% for artwork in artworks %}
    <div class="artworks-item">
                     <a data-magnify="gallery" data-src="{{ artwork.cover }}"  data-permalink="{{ artwork.url }}" data-caption="{{ artwork.title }}" data-group="a" href="{{ artwork.cover }}">
                        <img src="/static/image/blank.png" data-echo="{{ artwork.thumbnail }}" alt="{{ artwork.alt }}" title="{{ artwork.title }}">
                    </a><div class="gallery-link-bg">
                    <a class="gallery-link" title="Artwork Details. Click here to see the author's note, leave a like/comment, or to simply get a permalink." href="{{ artwork.url }}" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg></a></div>
    </div>
  {% endfor %}
</div>


{% include lazyload.html %}
