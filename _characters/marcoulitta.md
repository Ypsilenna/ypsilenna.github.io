---
layout: character
title: "Duchess Marcoulitta" 
shortname: Marcoulitta
categories: [oc]
tags: [complete] 
avatar: /static/image/thumbnails/characters/marcoulitta.webp
alt: ""
series: Roses of Kvetograd (Planned)
active: yes
role: Protagonist
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
            <td>Duchess Marcoulitta, the sole ruler of Kvetograd</td>
          </tr>
          <tr>
            <th>Species</th>
            <td>Fae</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>Unknown</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Female</td>
          </tr>
         <tr>
            <th>Titles</th>
            <td>● Duchess<br>● Rose of Kvetograd</td>
          </tr>
          <tr>
            <th>Affiliation</th>
            <td>● Kvetograd</td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>● Successfully rule over Kvetograd</td>
          </tr>
        </table>
      </aside>
      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
      </div>
        <p>
Cold and calculated, <b>Marcoulitta</b> thinks she has it all under control. She managed to become the first ruler of the land of the fae, Kvetograd, without ever needing to marry. <br><br>
She thinks the only thing that interests her is politics, but then why does she keep thinking about her cute advisor, Zoriselida? Could it be a crush? No, she's too serious for that. <br><br>
        </p>
      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
Stoic with a slight hint of contempt for non-fae.<br><br>

        </p>
      </details>

      <details open>
        <summary><b>Fears</b></summary>
        <p>
She's scared of losing the position she worked hard to establish.
        </p>
      </details>
<br>
      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Gardens, flowers, books, painting, brooding, deers, stained-glass windows, berries<br>

<b>Dislikes:</b><br>
Humans, noise, thorns, strong light, industrial constructions, figs
        </p>
      </details>
<br>
      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[<a href="/characters/zoriselida">Zoriselida the Advisor</a>]</b> Faithful advisor. For some reason she gives Marcoulitta strange dreams and desires.<br>
        </p>
      </details>
<br>
      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) She comes from my abandoned project titled simply "Marcoulitta" which was supposed to be about the world in which humans were on the verge of destroying the world and the dimension of plant souls sent some agents disguised as humans to stop the cataclysm. Marcoulitta was a spirit of a black rose who found a gardener who were supposed to help her, but they ultimately failed and everyone died. I remade her, but I kept her irrational hatred for humans in place.<br>
2) In her original design she had long black hair.<br>
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | where_exp: "item", "item.tags contains 'Marcoulitta'" %}
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
