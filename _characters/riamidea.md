---
layout: character
title: "Riamidea the Necromancer" 
shortname: Riamidea
categories: [oc]
tags: [complete] 
avatar: /static/image/thumbnails/characters/riamidea.webp
alt: ""
series: When You're Evil (Planned)
active: yes
role: Deuteragonist
---
  <div class="page-wrapper">
<br>  
<div class="alert alert-warning" role="alert">
 <b>Work in progress.</b> This character is from a future project and their lore may change.
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
            <td>Dia (by Ramisallia and Ferimus)</td>
          </tr>
          <tr>
            <th>Species</th>
            <td>Undead Elf</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>30</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Female</td>
          </tr>
          <tr>
            <th>Affiliation</th>
            <td>● The Nightwing Clan</td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>● Finalizing her pact with the Nightwing dragons</td>
          </tr>
        </table>
      </aside>
      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
      </div>
        <p>
<b>Riamidea</b> used to be one of the most powerful sorcerers in the world. Fearing of her power, Order of the White Crow got her assassinated. Her sister, Ramisallia, had her reincarnated by the elder dragon of the Nightwing Clan.<br><br>
        </p>
      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
She has a strong presence and is super over the top. She can be decent and flirt relentlessly, but she doesn't lack more violent tendencies. Sometimes prone to being sarcastic and passive aggressive.<br><br>

        </p>
      </details>

            <details open>
        <summary><b>Abilities</b></summary>
        <p>
<b>[Soulflame]</b> Soul fire stolen from the Eternal Gardens when she was temporarily dead. It replaced her former fire magic.<br>
<b>[Resurrection]</b> Resurrects the target* (Conditions and restrictions apply)<br>
<b>[TBA]</b><br>
        </p>
      </details>
<br>

      <details open>
        <summary><b>Fears</b></summary>
        <p>
She's scared of failing her task.
        </p>
      </details>
<br>
      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Roses, long baths, fashion, music, color black, jewelry, honey, full moon, gloves, her sister's pygmy wyverns<br>

<b>Dislikes:</b><br>
Order of the White Crow, people who taint the art of necromancy, rosemary, fudge, rain, cabbage
        </p>
      </details>
<br>
      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[<a href="/characters/ramisallia">Ramisallia the Dragon Witch</a>]</b> Sister<br>
     <b>[<a href="/characters/ferimus">Ferimus the Druid</a>]</b> Mutual crush<br>
     <b>[<a href="">Archpriest Vermilicus</a>]</b> Arch nemesis<br>
        </p>
      </details>
<br>
      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) She was the deuteragonist of my discontinued webcomic, Hellcephira. After I cancelled that comic, I created an alternate unverse with her based on a dream I had. Then I made it the main universe.<br>
2) She's my most redesigned character and probably went through almost all possible color palettes a character can have.<br>
3) In her original version, she had to hide her hands under gloves because she had tattoos made with illegal ink on them. Her sister gave them to her to save her (long story.) Currently she doesn't need them anymore, but she still likes them.
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | where_exp: "item", "item.tags contains 'Riamidea'" %}
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
