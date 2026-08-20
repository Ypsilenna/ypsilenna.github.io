---
layout: character
title: "Floria, Terror of the Sea" 
shortname: Floria
categories: [oc]
tags: [complete] 
avatar: /static/image/thumbnails/characters/floria.webp
alt: ""
series: Working Around/Unannounced Spin-Off
active: yes
role: Antagonist/Protagonist
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
            <td>Terror of the Sea</td>
          </tr>
          <tr>
            <th>Species</th>
            <td>Human</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>37</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Female</td>
          </tr>
          <tr>
            <th>Affiliation</th>
            <td>● Gingerbeard's Crew</td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>● Remaining a fearsome pirate forever</td>
          </tr>
        </table>
      </aside>
      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
      </div>
        <p>
<b>Floria</b> is the wife of Captain Derek Gingerbeard and one of the most fearsome pirates around. <br><br>
        </p>
      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
Terrifying, greedy, and without a sense of humor, but she is deeply in love with her husband.<br><br>

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
Pfft, scared? Floria?
        </p>
      </details>
<br>
      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Bread soup, afternoon naps, comfortable night gowns, piracy, gold, treasure, ships<br>

<b>Dislikes:</b><br>
Crabs, seaweed, elves
        </p>
      </details>
<br>
      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[<a href="/characters/silvio">Sil the Bard</a>]</b> Arch Nemesis<br>
     <b>[<a href="/characters/kaspar">Kaspar the Dwarf</a>]</b> Arch Nemesis<br>
     <b>[<a href="/characters/aria">Aria the Dryad</a>]</b> Arch Nemesis<br>
     <b>[<a href="/characters/gingerbeard">Captain Derek Giingerbeard</a>]</b> Husband<br>
     <b>[<a href="/characters/kaparro">Don Kaparro, the Greatest Showmaker Around</a>]</b> Arch Nemesis<br>
        </p>
      </details>
<br>
      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) Floria was created for the sole purpose of being included in a comic panel based on sea shanty called "Pacyfik" but I liked her too much and I made her a full-fledged OC.<br>
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | where_exp: "item", "item.tags contains 'Floria'" %}
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
