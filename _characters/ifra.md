---
layout: character
title: "Ifra Shadowbringer" 
shortname: Ifra
categories: [oc]
tags: [complete] 
avatar: /static/image/thumbnails/characters/ifra.webp
alt: ""
series: Friends in Dark Places (Planned)
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
            <td>Ifra Shadowbringer, Daughter of Warchief Terkal</td>
          </tr>
          <tr>
            <th>Also known as</th>
            <td>The tainted one (by the people in her tribe)</td>
          </tr>
          <tr>
            <th>Species</th>
            <td>Orc</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>25</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Female</td>
          </tr>
          <tr>
            <th>Affiliation</th>
            <td>● The Shadow Realm</td>
          </tr>
          <tr>
            <th>Biome</th>
            <td>Tundra</td>
          </tr>
        </table>
      </aside>
      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
      </div>
        <p>
<b>Ifra</b> is the youngest daughter of Warchief Terkal. She was cast out from her tribe after she decided to follow the footsteps of her maternal ancestors and wield shadow magic. Ifra learned to live in The Shadow Realm with her newfound demon friends until one day the tribe summons her to deal with a threat only shadow could vanquish.<br><br>
        </p>
      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
She's surprisingly cheerful and excitable of a shadow demonologist, but can act really tough. She loves her demons as much as she loved her family, but she has very little patience for her tribe. <br><br>

        </p>
      </details>

            <details open>
        <summary><b>Abilities</b></summary>
        <p>
<b>[Summon]</b> She can summon demons from The Shadow Realm. 
<br>
<b>[TBA]</b><br>
        </p>
      </details>
<br>

      <details open>
        <summary><b>Fears</b></summary>
        <p>
She's scared of her tribe's reaction if she returns from The Shadow Realm. It could be dangerous.
        </p>
      </details>
<br>
      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Her demons, magic, vegetarian dishes (she eats them for the flavor, though), herbalism, old books, her ancestors, color amaranth<br>

<b>Dislikes:</b><br>
The way her people treat shadow magic, oversized clothes, insects, traditional weapons
        </p>
      </details>
<br>
      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[TBA]</b><br>
        </p>
      </details>
<br>
      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) Ifra was put together from three different concepts I made earlier.<br>
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | where_exp: "item", "item.tags contains 'Ifra'" %}
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
