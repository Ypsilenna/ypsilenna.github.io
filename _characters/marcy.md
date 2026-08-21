---
layout: character
title: "Marcy the Guinea Pig Illusionist" 
shortname: Marcy
categories: [oc]
tags: [complete] 
avatar: /static/image/thumbnails/characters/marcy.webp
alt: ""
series: Marcy and Mistletoe's Wondrous Show (Planned)
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
            <td>Marcyanna Fritz</td>
          </tr>
          <tr>
            <th>Also known as</th>
            <td>TBA</td>
          </tr>
          <tr>
            <th>Species</th>
            <td>Guinea Pig (Anthro)</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>18 (Human years)</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Female</td>
          </tr>
          <tr>
            <th>Affiliation</th>
            <td>● Marcy and Mistletoe's Wondrous Show</td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>● Becoming a world famous illusionist</td>
          </tr>
        </table>
      </aside>
      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
      </div>
        <p>
<b>Marcy</b> had always dreamed of becoming an illusionist. Only when her rich auntie gifted her some props could she finally realize her dream.<br><br>

Her best friend, Mistletoe, decided to help as well, becoming her beautiful assistant. <br><br>
        </p>
      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
Marcy is an excitable dreamer. She is very ambitious, but also a little anxious.<br><br>

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
She's scared that their show will flop.
        </p>
      </details>
<br>
      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Plush toys, illusionists, Jayce the Hatter, marshmallows, glitter<br>

<b>Dislikes:</b><br>
Brussels sprouts, airhorns, volleyball
        </p>
      </details>
<br>
      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[<a href="/characters/mistletoe">Mistletoe</a>]</b> Her best friend and beautiful assistant.<br>
        </p>
      </details>
<br>
      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) I originally drew her as a random punk anthro, but then I put a hat on her and decided to make her a wannabe illusiosnist.<br>
2) She looks quite skinny for a guinea pig because she wears a concealed corset.<br>
3) The majority of her worldbuilding came from the one time when I was trying to create an RPG sheet with skills an items and I used her as the model.<br>
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | where_exp: "item", "item.tags contains 'Marcy'" %}
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
