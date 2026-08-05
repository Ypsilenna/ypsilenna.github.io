---
layout: character
title: "King Beelzeberiad" 
shortname: Beelzeberiad
categories: [oc]
tags: [complete] 
avatar: /static/image/thumbnails/characters/beelzeberiad.webp
alt: ""
series: To Be Announced
active: yes
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
            <td>● The Cursed King<br>● The Specter King<br>● King of the Monster Kingdom</td>
          </tr>
          <tr>
            <th>Species</th>
            <td>Human (Originally)/Specter (Currently)</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>Unknown</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Male</td>
          </tr>
          <tr>
            <th>Affiliation</th>
            <td>TBA</td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>TBA</td>
          </tr>
        </table>
      </aside>
      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
      </div>
        <p>
Once a monarch of the most prosperous human kingdom in recorded history, <b>Beelzeberiad</b> earned his name in a shameful way. The neighboring nations were troubled by wars and plagues, yet he refused to let their refugees stay. Everything changed for him when one day a group of strange-looking women asked for asylum, but he rejected them, stating that there is no place for monsters like them behind his walls. He later found out that the mysterious women were blood witches who cursed his entire kingdom to roam on the borderline between life and death in the form of specters.<br><br>

Each citizen was then bound to a cursed mask they couldn't remove from their body. Legend has it that there is a way to cleanse their affliction and relieve them from their suffering. However, now King Beelzeberiad is about to find out firsthand how cruel the world is when you're different.

        </p>
      <!-- ══ COLLAPSIBLE SECTIONS ══ -->
<br>
            <details open>
        <summary><b>Personality</b></summary>
        <p>
Stoic and xenophobic tired old man.<br><br>

        </p>
      </details>

            <details open>
        <summary><b>Abilities</b></summary>
        <p>
<b>[Form Shift]</b> Beelzeberiad can shift between human form and specter form by placing or removing the cursed mask from his face.
<br>
<b>[TBA]</b><br>
        </p>
      </details>
<br>

      <details open>
        <summary><b>Fears</b></summary>
        <p>
He's worried he will never lift the curse.
        </p>
      </details>
<br>
      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Archery, horses, color red, his demonic mare named Blood Moon<br>

<b>Dislikes:</b><br>
Other races and monsters (initially), sweet food, swimming
        </p>
      </details>
<br>
      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[<a href="/characters/rajiushi">Queen Rajiushi</a>]</b> Future wife.<br>
     <b>[TBA]</b><br>
        </p>
      </details>
<br>
      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) He was one of the characters scavenged from my old webcomic, Hellcehpira.<br>
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | where_exp: "item", "item.tags contains 'Beelzeberiad'" %}
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
