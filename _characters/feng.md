---
layout: character
title: "Feng the Divine Messenger" 
shortname: Feng
date: "2025-09-14"
draft: true
categories: [oc]
tags: [] 
avatar: /static/image/blank.png
series: The Snake Queen
active: yes
role: Deuteragonist
---
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
            <td>Fang the Snake</td>
          </tr>
          <tr>
            <th>Also known as</th>
            <td>Feng <br>(by everyone)</td>
          </tr>
          <tr>
            <th>Species</th>
            <td>Snake</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>Unknown</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>● Unknown (The Snake Queen)<br>● Female (Feng: Before Dusk)</td>
          </tr>
          <tr>
            <th>Titles</th>
            <td>● Divine Messenger</td>
          </tr>
          <tr>
            <th>Affiliation</th>
            <td>● Raa</td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>● Teaching Raajimera the wisdom of Raa</td>
          </tr>
        </table>
      </aside>
      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
        <p>
        This entry does not and will not contain major spoilers until the end of the series. You can safely read it if you plan to read the novel!<br><hr>
   <b>Feng</b> is a happy-go-lucky snake of average reptilian intelligence. It was dispatched by <b>Raa</b> to guide <b>Raajimera</b> on her way to godhood.
        </p>
      </div>

      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
Silly as a goose.<br>
        </p>
      </details>

      <details open>
        <summary><b>Fears</b></summary>
        <p>
Feng is scared of the possibility that Raajimera's dark urge would destroy her progress and sabotage their mission.
        </p>
      </details>
      
      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Food, baths, pockets, Zephyr (he has no choice)<br>

<b>Dislikes:</b><br>
Bamieh the camel
        </p>
      </details>

      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[Raajimera the Snake Queen]</b> Best friend<br>
     <b>[Raa, Spirit of Dusk]</b> Best friend (somehow)<br>
    <b>[Zephyr of the Howling Pass]</b> TBA
        </p>
      </details>

      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) Feng was a last-minute addition when I was writing the first draft of the second chapter and realized I needed a character who would teach Raajimera how to use her powers.<br>
2) Feng is a glossy-bellied racer.<br>
3) Feng was supposed to be retired in chapter 8, but I folded under the pressure of my beta readers who didn't let me do it.
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | reverse | where_exp: "item", "item.tags contains 'Feng'" %}
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
