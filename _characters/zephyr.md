---
layout: character
title: "Zephyr of the Howling Pass" 
shortname: Zephyr
date: "2025-09-14"
draft: false
categories: [oc]
tags: [] 
avatar: /static/image/thumbnails/2025-003.jpg
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
            <td>Unknown</td>
          </tr>
          <tr>
            <th>Also known as</th>
            <td>The Spy <br>(by the people of Duskvale)</td>
          </tr>
          <tr>
            <th>Species</th>
            <td>Seris</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>Approximately 37</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Male</td>
          </tr>
          <tr>
            <th>Affiliation</th>
            <td>● Duskvale Village (formerly) ● Hazyan Empire (formerly)</td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>● Survival</td>
          </tr>
        </table>
      </aside>
      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
        <p>
        This entry does not and will not contain major spoilers until the end of the series. You can safely read it if you plan to read the novel!<br><hr>
   <b>Zephyr</b> is a serisian spy. He was born in Duskvale as the son of the previous chieftain, but the betrayal of the current leader of the village ended up with him being imprisoned in the empire. He abandoned his old identity and fled the capital city in the dead of the night becoming one of the most efficient spies for hire in the empire. Also one of the most elusive ones.<br>
        </p>
      </div>

      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
Troubled by his past, self sufficient. An emotionally suppressed recluse. Becomes protective over Raajimera initially out of sense of duty, but later because of something more.<br><br>

        </p>
      </details>

            <details open>
        <summary><b>Health Issues</b></summary>
        <p>
He still suffers the aftermath of the overwhelming amount of stress he went through as a child. He drinks hop cone infusion to stop his hands from trembling.<br>
        </p>
      </details>


      <details open>
        <summary><b>Fears</b></summary>
        <p>
He's scared to leave the shadows from all he suffered over the years. 
        </p>
      </details>

      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Cheese, grapes, flat bread, his camel, nights<br>

<b>Dislikes:</b><br>
Public speeches, being perceived, some spices, noise
        </p>
      </details>

      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[Raajimera the Snake Queen]</b> TBA<br>
     His family is dead, and all that is left is his ugly camel
        </p>
      </details>

      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) Zephyr is one of the oldest characters in the story that didn't get a permanent design for about 15 years.<br>
2) He was originally an elf with very long ears, black hair and green eyes.<br>
3) In the first version of this story he was just a neurotic weirdo with shaking hands. Now he is a traumatized weirdo with shaking hands, hooray, I love progress.<br>
4) In the first version of the story he was an excellent tactician and led armies for Raajimera.
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | reverse | where_exp: "item", "item.tags contains 'Zephyr'" %}
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
