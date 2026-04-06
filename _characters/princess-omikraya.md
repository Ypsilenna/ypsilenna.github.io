---
layout: character
title: "Princess Omikraya of the Crescent Moon Isle" 
shortname: Princess Omikraya
date: "2025-09-14"
draft: false
categories: [oc]
tags: [] 
avatar: /static/image/thumbnails/2021-003.png
series: Little Star and the City of Wonders
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
            <td>Princess Omikraya of the Crescent Moon Isle</td>
          </tr>
          <tr>
            <th>Also known as</th>
            <td>● Little Star (by her mother)<br>● Little Brat (by Lusstoni)</td>
          </tr>
          <tr>
            <th>Species</th>
            <td>Half-nymph</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>10</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Female</td>
          </tr>
          <tr>
            <th>Titles</th>
            <td>● Princess</td>
          </tr>
          <tr>
            <th>Affiliation</th>
            <td>● Crescent Moon Isle</td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>● Becoming a scholar</td>
          </tr>
        </table>
      </aside>

      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
      <b>Princess Omikraya</b> is the firstborn daughter of King of the Crescent Moon Isle and one of the maidens of goddess Omikraya. <br>
      After her father went insane from holding on to the magic core given to him by the blind goddess of stars, her mother gave her life to put her daughter on a ship that will take her away from the isle. The girl then finds an orchard and decides to move into it, much to the dismay of the owners.<br><br>
      </div>

      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
Curious, playful, cute. Has a difficulty reading the room and asks inapropriate questions, but she is a kid afterall. She will outgrow that phase... or so I hope.<br>
        </p>
      </details>

            <details open>
        <summary><b>Health Issues</b></summary>
        <p>
Asthmatic.<br>
        </p>
      </details>

      <details open>
        <summary><b>Fears</b></summary>
        <p>
She's scared that her new best-friend-against-his-will would leave her behind.
        </p>
      </details>
      
      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Ferrets, cherries, plush toys, Lusstoni (even though he doesn't seem to like her, but give him enough time!!!)<br>

<b>Dislikes:</b><br>
Bedtime, celery, owls (they scare her)
        </p>
      </details>

      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[Lusstoni]</b> He finds her and becomes her best friend, he just doesn't know it yet.<br>
     <b>[King and Queen of the Crescent Moon Isle]</b> Her parents. She loves her mom, but doesn't have a good relationship with her dad for obvious reasons.<br>
        </p>
      </details>

      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) She was originally supposed to be the daughter of the two main characters from my old webcomic, Hellcephira. That's why her father was able to shapeshift.<br>
2) In the first version of her design she was 16, but she was aged down to make it fit with the story more.<br>
3) Her namesake is Goddess Omikraya, but she was actually created first. The goddess was just an afterthought for storytelling purposes.<br>
4) She was supposed to have a pet ferret.
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | reverse | where_exp: "item", "item.tags contains 'Omikraya'" %}
{% for artwork in artworks %}
    <div class="artworks-item">
                     <a data-magnify="gallery" data-src="{{ artwork.cover }}" data-caption="{{ artwork.title }}" data-group="a" href="{{ artwork.cover }}">
                        <img src="/static/image/blank.png" data-echo="{{ artwork.thumbnail }}" alt="" title="{{ artwork.title }}">
                    </a><div class="gallery-link-bg"><a class="gallery-link" title="Artwork Page" href="{{ artwork.url }}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
</svg></a></div>
    </div>
  {% endfor %}
</div>


{% include lazyload.html %}
