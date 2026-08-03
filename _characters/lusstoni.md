---
layout: character
title: "Lusstoni" 
shortname: Lusstoni
categories: [oc]
tags: [complete] 
avatar: /static/image/thumbnails/characters/lusstoni.webp
alt: "Portrait of a steampunk man looking through the window while holding a cigarette."
series: Little Star and the City of Wonders
active: yes
role: Protagonist
---
  <div class="page-wrapper">
<br>  
<div class="alert alert-success" role="alert">
 <b>Note:</b> This character is from an ongoing series, and their entry will not contain spoilers until the project comes to an end.
</div>
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
            <td>● Toni (by Omikraya)</td>
          </tr>
          <tr>
            <th>Species</th>
            <td>Human</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>30</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Male</td>
          </tr>
          <tr>
            <th>Titles</th>
            <td>None</td>
          </tr>
          <tr>
            <th>Affiliation</th>
            <td>● City of Norath</td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>● Getting his ex back</td>
          </tr>
        </table>
      </aside>

      <!-- ══ END INFOBOX ══ -->

<!-- Lead paragraph (always visible, outside any collapsible) -->
<div class="article-lead">
      <b>Lusstoni</b> is a grumpy, disabled alcoholic who was estranged by his family in his early adulthood. He used to work in a factory until he got in an accident and was forced to retire. He's still a handyman, though, but it doesn't matter to him because he hates himself almost as much as he hates children.<br> Haunted by the visions of his past, he decides to go on an adventure in his trusty personal zeppelin.
      <br><br>
      </div>

      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
Grumpy and bitter die hard atheist who would never change his mind even if gods slapped him in the face. He can't get over his past.<br>
        </p>
      </details>
<br>
            <details open>
        <summary><b>Health Issues</b></summary>
        <p>
Alcohol and tobacco addiction. He also lost an arm in a factory accident. One of his legs hurts him when he walks too much due to the same event.<br>
        </p>
      </details>
<br>
      <details open>
        <summary><b>Fears</b></summary>
        <p>
He's scared of commitment. He doesn't want to have a family even if that decision would cost him everything.
        </p>
      </details>
 <br>     
      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Cigarettes, alcohol, women, roasted meat, seafood, crabs, goggles, tinkering, his zeppelin<br>

<b>Dislikes:</b><br>
Pickles, olives, seaweed, dogs, yucca plants, loud people, children, Omikraya (for real, leave him be!!!)
        </p>
      </details>
<br>
      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[Caermirella]</b> His ex-girlfriend whom he deeply misses.<br>
     <b>[<a href="/characters/princess-omikraya">Omikraya</a>]</b> He's her best friend against his will.<br>
     <b>[Hagellish]</b> His golden child brother and his greatest rival who stole his ex-girlfriend. <br>
     <b>[Parents]</b> He never had the greatest relationship with them. <br>
        </p>
      </details>
<br>
      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) Lusstoni was one of the characters I made for my old webcomic, Hellcephira. He was supposed to be the antagonist who dies in the end, but I decided to just keep him as a character who cheated death.<br>
2) In the original version he was supposed to be Omikraya's biological uncle.
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | where_exp: "item", "item.tags contains 'Lusstoni'" %}
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
