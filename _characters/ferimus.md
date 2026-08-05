---
layout: character
title: "Ferimus the Druid" 
shortname: Ferimus
categories: [oc]
tags: [complete] 
avatar: /static/image/thumbnails/characters/ferimus.webp
alt: ""
series: When You're Evil
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
            <td>Unknown</td>
          </tr>
          <tr>
            <th>Also known as</th>
            <td>The cute satyr (by Riamidea)</td>
          </tr>
          <tr>
            <th>Species</th>
            <td>Satyr</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>27</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Male</td>
          </tr>
          <tr>
            <th>Affiliation</th>
            <td>● Town of Parno (Formerly)</td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>● He thinks he wants to become an evil overlord...</td>
          </tr>
        </table>
      </aside>
      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
      </div>
        <p>
<b>Ferimus</b> never felt like he fit in among satyrs, so one day he decided to leave it all behind and flee into a human settlement to live a new life where nobody would objectify him. He let a quiet life surrounded with the joys of his plant magic until one day he met Riamidea...
<br><br>
        </p>
      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
He's a little shy, soft and oblivious. He always feels like he has to pretend to be more masculine, but it isn't how he is at the core.<br><br>

        </p>
      </details>

            <details open>
        <summary><b>Abilities</b></summary>
        <p>
<b>[Floramancy]</b> He can conjure or boost growth of plants.
<br>
<b>[TBA]</b><br>
        </p>
      </details>
<br>

      <details open>
        <summary><b>Fears</b></summary>
        <p>
He's scared that he will have to experience unpleasantries with women again the same way as he did back in his home land.
        </p>
      </details>
<br>
      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Plants, oranges, peaches, herbalism, cute critters<br>

<b>Dislikes:</b><br>
Pushy people, pants, cucumbers, fish, some spices
        </p>
      </details>
<br>
      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[<a href="/characters/riamidea">Riamidea the Necromancer</a>]</b> Mutual crush (he is oblivious of)<br>
     <b>[<a href="/characters/ramisallia">Ramisallia the Dragon Witch</a>]</b> Friend.<br>
     <b>[<a href="/characters/vermilicus">Archpriest Vermilicus</a>]</b> Ex-ally, now arch nemesis.<br>
        </p>
      </details>
<br>
      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) He used to be the protagonist of my discontinued webcomic, Hellcephira. After its cancellation I put him in an alternate universe based on a dream, and then I made it the main universe.<br>
2) He had his name changed three times over the course of his life as my OC.<br>
3) He rarely wears pants.
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | where_exp: "item", "item.tags contains 'Ferimus'" %}
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
