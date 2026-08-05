---
layout: character
title: "Zephyr of the Howling Pass" 
shortname: Zephyr
categories: [oc]
tags: [complete] 
avatar: /static/image/thumbnails/characters/zephyr.webp
alt: "Portrait of a man peeling an apple."
series: The Snake Queen
active: yes
role: Deuteragonist
---
  <div class="page-wrapper">
<br>  
<div class="alert alert-danger" role="alert">
 <b>Note:</b> This character's profile contains marked spoilers. Don't say I didn't warn you.
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
            <td>● The Spy <br>(by the people of Duskvale)<br>
            <div class="spoiler-block" id="spoiler-3"><div class="spoiler-content">● Imperial Consort (After marrying Raajimera)</div>
  <div class="spoiler-overlay" onclick="document.getElementById('spoiler-3').classList.add('revealed')"><button>Spoiler</button></div></div></td>
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
            <td><span>● Duskvale Village (formerly) ● Hazyan Empire (formerly)
  <div class="spoiler-block" id="spoiler-4"><div class="spoiler-content">
● Hazyan Empire (currently)</div><div class="spoiler-overlay" onclick="document.getElementById('spoiler-4').classList.add('revealed')">
    <br><button>Spoiler</button></div></div></span><br></td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>● Survival</td>
          </tr>
          <tr>
            <th>Biome</th>
            <td>Desert Shrubland</td>
          </tr>
        </table>
      </aside>
      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
        <span>
   <b>Zephyr</b> is a serisian spy. He was born in Duskvale as the son of the previous chieftain, but the betrayal of the current leader of the village ended up with him being imprisoned in the empire. He abandoned his old identity and fled the capital city in the dead of the night becoming one of the most efficient spies for hire in the empire. Also one of the most elusive ones.<br><br>
   <div class="spoiler-block" id="spoiler-2"><div class="spoiler-content">
   After helping Raajimera conquer the Hazyan city, he marries her and stays out of the shadows. Not being able to give up on his past life, he creates an order of spies called Sons of the Wind to assist her when he's no longer around.</div><div class="spoiler-overlay" onclick="document.getElementById('spoiler-2').classList.add('revealed')"><br><button>Spoiler</button>
  </div>
</div>
        </span>
      </div><br>
      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
Troubled by his past and self-sufficient, as well as an emotionally suppressed recluse. Becomes protective over Raajimera initially out of a sense of duty, but later because of something more.<br>

        </p>
      </details>
<br>
            <details open>
        <summary><b>Health Issues</b></summary>
        <p>
He still suffers the aftermath of the overwhelming amount of stress he went through as a child. He drinks hop cone infusion to stop his hands from trembling.<br>
        </p>
      </details>

<br>
      <details open>
        <summary><b>Fears</b></summary>
        <p>
He's scared to leave the shadows from all he suffered over the years. 
        </p>
      </details>
<br>
      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Cheese, grapes, flat bread, his camel, nights<br>

<b>Dislikes:</b><br>
Public speeches, being perceived, some spices, noise
        </p>
      </details>
<br>
      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <span>His family is dead, and all that is left is his ugly camel
  <div class="spoiler-block" id="spoiler-1"><div class="spoiler-content">
<b>[<a href="/characters/raajimera">Raajimera the Snake Queen</a>]</b> His wife<br><b>[<a href="/characters/feng">Feng the Divine Messenger</a>]</b> His wife's familiar</div>
  <div class="spoiler-overlay" onclick="document.getElementById('spoiler-1').classList.add('revealed')">
<button>Spoiler</button>
  </div></div></span>
      </details>
<br>
      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) Zephyr is one of the oldest characters in the story that didn't get a permanent design for about 15 years.<br>
2) He was originally an elf with very long ears, black hair, and green eyes.<br>
3) In the first version of this story he was just a neurotic weirdo with shaking hands. Now he is a traumatized weirdo with shaking hands. Hooray, I love progress.<br>
4) In the first version of the story he was an excellent tactician and led armies for Raajimera.<br>
5) Zephyr would be Raa's first choice for a herald had he ever asked for it; however, he never wanted such a burden, and the gods can't force the unwilling.
6) Until the end of chapter 12, he had two possible endings, and I was on the fence trying to decide which one I would give him. I decided to make him happy. I mean, as much as he can be in the place he ended up in.
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
