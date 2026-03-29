---
layout: character
title: "Raajimera the Snake Queen" 
shortname: Raajimera
date: "2025-09-14"
draft: false
categories: [oc]
tags: [] 
avatar: /static/image/thumbnails/characters/raajimera.png
series: The Snake Queen
active: yes
role: Protagonist
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
            <td>The Snake Queen <br>(by the people of Duskvale)</td>
          </tr>
          <tr>
            <th>Species</th>
            <td>Human/Demigod*</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>Unknown</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Female</td>
          </tr>
          <tr>
            <th>Titles</th>
            <td>● Priestess of the Diurnal Cycle (formerly)<br>● The Snake Queen (Duskvale)</td>
          </tr>
          <tr>
            <th>Affiliation</th>
            <td>● Sisterhood of the Diurnal Cycle (formerly)<br>● Duskvale Village</td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>● Becoming the next Archpriestess (Formerly)<br>● Becoming the sole savior of Duskvale</td>
          </tr>
        </table>
      </aside>
      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
        <p>
        This entry does not and will not contain major spoilers until the end of the series. You can safely read it if you plan to read the novel!<br><hr>
   In her past life, <strong>Raajimera</strong> was cruel and selfish. She made a pact with a spirit animal to acquire demigod powers, but she lost her memory in the process. The woman ended up wandering into the village of Duskvale where the inhabitants insisted that she was the fabled Snake Queen from their prophecy and she would save them from the terrifying Hazyan Empire.
        </p>
      </div>

      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
Selfish and cruel overachiever with no regard for others (as a human), fairly skittish amnesiac who tries to do good despite suspecting that in her past life she was a bad person (in early demigod stage).<br><br>

<b>Additional info:</b> curious, refuses to listen when she thinks she knows best, blocks herself out of anxiety<br>
        </p>
      </details>

      <details open>
        <summary><b>Fears</b></summary>
        <p>
She's scared of both not knowing who she is and facing her past. She wishes to know what led her into this predicament, but at the same time she would like to remain blissfully ignorant, thinking her old personality would break her heart. The moment she realized she didn't know how the ending of the prophecy, she started being really anxious about it, suspecting that they will probably leave her behind or worse.
        </p>
      </details>
      
      <details open>
        <summary><b>Abilities</b></summary>
        <p>
          <b>[Snake Speech]</b><br>
          <b>[Sand and water bending]</b> She's able to control sand and underground water with her willpower.<br>
          <b>[Glass Flowers]</b> Raajimera utilizes sand bending over fire to create beautiful glass flowers that can hold enchantments.<br>
          <b>[Third Eye]</b> Mark of Raa allows her to see layers of life energy.<br>
          <b>[Illusions]</b> Combined with glass flowers, give her nearly unlimited possibilities.<br>
          <b>[Changing Properties]</b> Raajimera can alter properties of certain objects, such as temperature or state of water.<br>
          <b>[Protective Dome]</b> She can create a protective barrier around the village.<br>
        </p>
      </details>

      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Mornings, warmth of the sun, flowers, fruit, snakes, dresses, dark blue<br>

<b>Dislikes:</b><br>
Wine, thick blankets/duvets, show-offs, ungrateful people, watching sports, Feng's sense of humor (occasionally), her amnesia, Raa (initially)
        </p>
      </details>

      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[Raa, Spirit of Dusk]</b> Deity who bestowed the gift of immortality upon her and indirectly guided her on her path to great power<br>
     <b>[Zephyr of the Howling Pass]</b> TBA<br>
     <b>Family and Friends:</b><br>
     <b>[Feng the Snake]</b> Best friend and spiritual guide
        </p>
      </details>

      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) The moonflower used to be a part of her design back in 2023; it was, however, rewritten to be a one-time item rather than something permanently attached to her outfit, for the simple reason that it would look ridiculous and greatly affect her mobility. It would suck to become a demigod, only to be nerfed by your own outfit. <br>
2) Raajimera originated from a short story I wrote as a teenager when I listened to Powerwolf a little bit too much, and I fell in love with a song called "Kiss of the Cobra King".  I didn't know what the lyrics meant, so I decided to make up my story behind them, and that's how she was born. <br>
3) I usually draw her the way she looks by the end of the first half of the story, but in the second half she has a scar on her chest from an event at the village.<br>
4) In the first chapter of the story, her eyes are black; however, they turn green after she makes a deal with Raa.<br>
5) The setting of the story was never officially stated, but her world is inspired by ancient Persia. Despite happening in a fictional country, various elements of her outfits and backstory have been Persianized (e.g., her shoes).
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | reverse | where_exp: "item", "item.tags contains 'Raajimera'" %}
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
