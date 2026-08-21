---
layout: character
title: "Don Kaparro, the Greatest Showmaker Around" 
shortname: Don Kaparro
categories: [oc]
tags: [complete] 
avatar: /static/image/thumbnails/characters/kaparro.webp
alt: ""
series: Working Around
active: yes
role: Tertiary Character
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
            <td>The asshole (by the pirates)</td>
          </tr>
          <tr>
            <th>Species</th>
            <td>Human</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>35</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Male</td>
          </tr>
          <tr>
            <th>Affiliation</th>
            <td>● The Verdant Troupe</td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>He already has everything he wanted and now just boasts in it</td>
          </tr>
        </table>
      </aside>
      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
      </div>
        <p>
<b>Don Kaparro</b> is a famous showmaker and unknowingly also serves as the enemy to both the protagonists and antagonists while he doesn't even know who they are. He fills the void of his loneliness with sexy men and women who spend time with him in his tent between shows. He is temporarily infatuated with Aria when he meets her during a royal ball disguised as Lady Silverleaf. <br><br>

He is very tall which forces him to use an elephant as his mount. <br><br>
        </p>
      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
He's charismatic and a bit of a diva, but he is also charming and cultured. <br><br>

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
TBA
        </p>
      </details>
<br>
      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Money, theatre, elephants, mirrors, sexy people of all kinds and genders, wine, fancy parties, dancing, color green<br>

<b>Dislikes:</b><br>
Pirates, bigots, party poopers
        </p>
      </details>
<br>
      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[<a href="/characters/silvio">Sil the Bard</a>]</b> Doesn't acknowledge his existence.<br>
     <b>[<a href="/characters/kaspar">Kaspar the Dwarf</a>]</b>  Doesn't acknowledge his existence.<br>
     <b>[<a href="/characters/aria">Aria the Dryad</a>]</b> Doesn't acknowledge her existence until he meets her at the ball.<br>
     <b>[<a href="/characters/floria">Floria, Terror of the Sea</a>]</b> Arch Nemesis<br>
     <b>[<a href="/characters/gingerbeard">Captain Derek Giingerbeard</a>]</b> Arch Nemesis<br>
        </p>
      </details>
<br>
      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) The name was a joke I made before designing this character. My mom bought a jar of capparis, and there was one that was much bigger than others. She asked me what I think it is, and I said "Don Kaparro". Later I made him into an OC when I was making the comic version of Working Around.<br>
2) Don Kaparro is my tallest human character.<br>
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | where_exp: "item", "item.tags contains 'Kaparro'" %}
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
