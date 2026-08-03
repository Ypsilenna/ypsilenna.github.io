---
layout: character
title: "Ambly Odipsas" 
shortname: Ambly
categories: [oc]
tags: [complete] 
avatar: /static/image/thumbnails/characters/ambly.webp
alt: "Portrait of a female genie."
series: Divorce by Magic (Planned)
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
            <td>Amblina Odipsas</td>
          </tr>
          <tr>
            <th>Also known as</th>
            <td>The barmaid (by the customers of The Trickster)</td>
          </tr>
          <tr>
            <th>Species</th>
            <td>Genie</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>20 (in Divorce by Magic), 38 (in Divorce by Magic 2)</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Female</td>
          </tr>
          <tr>
            <th>Affiliation</th>
            <td>● The Trickster (Barmaid)</td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>● Chaos</td>
          </tr>
        </table>
      </aside>
      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
      </div>
        <p>
She was just minding her business at The Trickster when suddenly a distressed werewolf ordered a drink. Which genie would resist such an opportunity to wreak havoc?
<br><br>
<b>Ambly</b> comes from a long line of genies. Her kind dates back to the Old Empire, in which the last empress kept them locked up, effectively preventing them from escaping from the Underworld. We can all see how it ended. <br><br>

She is bisexual in terms of attraction and asexual in terms of commitment. <br><br>
        </p>
      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
A chaotic neutral kleptomaniac who loves fun and fashion. She is both overly feminine and completely unhinged.<br><br>

        </p>
      </details>

            <details open>
        <summary><b>Abilities</b></summary>
        <p>
<b>[Mind control]</b> She WILL tell you what to do. 
<br>
<b>[TBA]</b><br>
        </p>
      </details>
<br>

      <details open>
        <summary><b>Fears</b></summary>
        <p>
She's scared of commitment. Stability feels like the opposite of her beloved chaos.
        </p>
      </details>
<br>
      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Cocktails with little umbrellas, pineapple, card games, glitter, tasmanian devils, fashion, fancy cushions, her grandmother's baking, her motorbike, the firefighter pole she installed in her corridor<br>

<b>Dislikes:</b><br>
Chores that cannot be done with magic, tents, boring people, carrots
        </p>
      </details>
<br>
      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[<a href="/characters/frederic">Frederic Cadieux</a>]</b> Husband for a month<br>
     <b>[Carmen]</b> Her phantom ex-girlfriend who GHOSTED her.<br>
     <b>[Carmen's dog]</b> Went missing and she refused to find him and bring them both to life because that could mean committment and she wanted none of that.<br>
     <b>[Grandma Odipsas]</b> Her favorite family member. She absolutely adores her.<br>
     <b>[Odipsas Family]</b> She loves them so much despite not being in contact with them too often.<br>
     <b>[<a href="/characters/coralie">Coralie</a>]</b> Her daughter. (Divorce by Magic 2)<br>
        </p>
      </details>
<br>
      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) She started as a The Sims 3 character that I used to make a lot of money without utilizing cheat codes. I just used mind control and stole the hell out of it.<br>
2) Amblyodipsas is a real world kind of a snake. I named her after that creature.<br>
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | where_exp: "item", "item.tags contains 'Ambly'" %}
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
