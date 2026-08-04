---
layout: character
title: "Aria the Dryad" 
shortname: Aria
categories: [oc]
tags: [complete] 
series: Working Around (Planned)
avatar: /static/image/thumbnails/characters/aria.webp
alt: "Portrait of a dryad with her eyes closed."
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
            <td>Aria, sister of Sonata, daughter of Melody</td>
          </tr>
          <tr>
            <th>Also known as</th>
            <td>Our dryad (by the pirates who kidnapped her)</td>
          </tr>
          <tr>
            <th>Species</th>
            <td>Dryad</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>19</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Female</td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>● Becoming the best dancer she could be</td>
          </tr>
        </table>
      </aside>
      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
      </div>
        <p>
<b>Aria</b> comes from a long line of singing dryads. Despite being from a family of wonderful singers, her voice is almost as pleasant as a flock of hens wearing styrofoam shoes running across wet glass. Her passion is dancing.<br><br>

Dancing dryads have brnach-like antlers made of living wood that bloom when their owner reaches the peak of their singing abilities. For Aria blooming branches is an unobtainable dream that makes her feel inferior to her family. <br><br>
        </p>
      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
She's a good girl, although she's also anxious and insecure. Aria can seem joyful, although she is sometimes too serious for her age.<br><br>

        </p>
      </details>

            <details open>
        <summary><b>Physical limitations</b></summary>
        <p>
<b>[Vegetarianism]</b> As a dryad she is forced to be on a plant-based diet. 
<br>
<b>[Upright Sleeping]</b> She sleeps in a sitting position and avoids lying on her back.<br>
        </p>
      </details>
<br>

      <details open>
        <summary><b>Fears</b></summary>
        <p>
She's worried that nobody will ever acknowledge her talent for dancing due to her inability to follow her parents's footsteps. 
        </p>
      </details>
<br>
      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Dishes with seeds as the main ingredient, color green, dancing, music, forest, sea, seashells, coral, birds and other small critters<br>

<b>Dislikes:</b><br>
Lying, stealing, people who hate insects, alcohol, pirates
        </p>
      </details>
<br>
      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[<a href="/characters/silvio">Sil the Bard</a>]</b> Friend<br>
     <b>[<a href="/characters/kaspar">Kaspar the Dwarf</a>]</b> Friend<br>
     <b>[<a href="/characters/floria">Floria, Terror of the Sea</a>]</b> Arch Nemesis<br>
     <b>[<a href="/characters/gingerbeard">Captain Derek Giingerbeard</a>]</b> Arch Nemesis<br>
     <b>[<a href="/characters/kaparro">Don Kaparro, the Greatest Showmaker Around</a>]</b> Not a nemesis, but he always seems to get in their way<br>
     <b>[Sonata]</b> Older sister. She always overshadowed Aria.<br>
        </p>
      </details>
<br>
      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) Aria was a random character I drew once just because I could and decided to keep her as my OC.<br>
2) In some versions of her story Kaspar has a crush on her, although it's not set in stone whether it will appear in the upcoming novel.<br>
3) The story she appeared in was originally a webcomic, however due to severe burnout regarding sequential art I was forced to put it on an indefinite hiatus.
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | where_exp: "item", "item.tags contains 'Aria'" %}
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

