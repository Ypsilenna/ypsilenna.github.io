---
layout: character
title: "Rallosameer the Dream Wanderer" 
shortname: Rallosameer
categories: [oc]
tags: [complete] 
avatar: /static/image/thumbnails/characters/rallosameer.webp
alt: "Portrait of a man relaxing in a park."
series: Council of Kreyilon (Planned)
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
            <th>Species</th>
            <td>TBA</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>31</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Male</td>
          </tr>
          <tr>
            <th>Affiliation</th>
            <td>● Council of Kreyilon<br>● Kreyilon<br>● The Dream Dimension</td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>● Protecting the Dream Dimension while keeping everyone else away</td>
          </tr>
          <tr>
            <th>Special Items</th>
            <td>● Cape of Nightmares<br>● Incense of Dreams</td>
          </tr>
        </table>
      </aside>
      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
      </div>
        <p>
His father used to be the previous councilor. After the death of <b>Anshrilda</b>'s mother, <b>Rallosameer</b> got in a fight with him and ended up stealing the Cape of Nightmares effectively sealing the access to the Dream Dimension away from his family.<br><br>His father begged the primal deities to restore his previous position, yet they refused which made him one of the official councilors. <br><br>
        </p>
      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
He's reserved and distant. He can smile, but mostly in the Dream Dimension.<br><br>

        </p>
      </details>

            <details open>
        <summary><b>Abilities</b></summary>
        <p>
<b>[Cape of Nightmares]</b> He can go between the Dream Dimension and the Central Dimension at will for as long as he wears it. 
<br>
<b>[TBA]</b><br>
        </p>
      </details>
<br>

      <details open>
        <summary><b>Fears</b></summary>
        <p>
He's scared that he will have to depend on other people once more.
        </p>
      </details>
<br>
      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Swimming, water, outdoors, trinkets, tarot cards and magical crystals, color brown, books, ducks<br>

<b>Dislikes:</b><br>
Crowds, vulnerability, strong lights, mountains, spicy food, metallic textures
        </p>
      </details>
<br>
      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[<a href="/characters/anshrilda">Anshrilda</a>]</b> His partner in the new council.<br>
     <b>[<a href="/characters/saahrimei">Saahrimei</a>] </b>Close friend.<br>
     <b>[<a href="/characters/xivaillon">Xivaillon</a>] </b>His co-counilor.<br>
     <b>[<a href="/characters/zethareshmi">Zethareshmi</a>] </b>His co-counilor.<br>
     <b>[<a href="/characters/romisellius">Romisellius</a>] </b>His co-counilor.<br>
     <b>[<a href="/characters/mennarath">Mennarath</a>] </b> His co-counilor.<br>
     <b>[<a href="/characters/ymreiva">Ymreiva the Goddess of Death</a>] </b> His boss.<br>
     <b>[<a href="/characters/lwiviear">Lwiviear the God of Life</a>] </b> His boss.<br>
     <b>[His family]</b> His relationship with them isn't too good after the incident.<br>
        </p>
      </details>
<br>
      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) He was never supposed to date Anshrilda, but one day they just clicked.<br>
2) Originally he was teal, but then I redesigned him to look more like a sea turtle on which he is based.<br>
3) He is one of the characters who are to blame for the cancellation of Hellcephira. The potential story between him and Anshrilda was just much better than whatever the protagonists had in that comic.<br>
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | where_exp: "item", "item.tags contains 'Rallosameer'" %}
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
