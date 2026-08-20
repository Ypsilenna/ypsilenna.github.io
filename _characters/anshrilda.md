---
layout: character
title: "Anshrilda the Chronomancer" 
shortname: Anshrilda
categories: [oc]
tags: [complete] 
avatar: /static/image/thumbnails/characters/anshrilda.webp
alt: "Portrait of a green-skinned woman."
series: Council of Kreyilon (Planned)
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
            <td>Unknown</td>
          </tr>
          <tr>
            <th>Species</th>
            <td>TBA</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>21</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Female</td>
          </tr>
          <tr>
            <th>Affiliation</th>
            <td>● Council of Kreyilon<br>● Kreyilon<br></td>
          </tr>
          <tr>
            <th>Life Goals</th>
            <td>● Not letting her abilities become her demise like her mother did</td>
          </tr>
          <tr>
            <th>Special Items</th>
            <td>● Cape of Glimpse of a Moment<br></td>
          </tr>
        </table>
      </aside>
      <!-- ══ END INFOBOX ══ -->

      <!-- Lead paragraph (always visible, outside any collapsible) -->
      <div class="article-lead">
      </div>
        <p>
Coming from a family of oracles, <b>Anshrilda</b> was chosen to become the exalted chronomancer in the Great Council of Kreyilon. The tragic memory of her mother's death, howvever, prevents her from reaching the peak of her abilities.<br><br>
        </p>
      <!-- ══ COLLAPSIBLE SECTIONS ══ -->

            <details open>
        <summary><b>Personality</b></summary>
        <p>
She's an anxious scaredy cat. <br><br>

        </p>
      </details>

            <details open>
        <summary><b>Abilities</b></summary>
        <p>
<b>[Cape of Glimpse of a Moment]</b> Allows her to access the Beach of Time which is a miniature district of the Dream Dimension over which Rallosameer has no control. 
<b>[Mismatched Eyes]</b> She can see the past with her black eye, the future with her white eye and the present time with both. 
<br>
<b>[TBA]</b><br>
        </p>
      </details>
<br>

      <details open>
        <summary><b>Fears</b></summary>
        <p>
She can see the timelines, but she doesn't use her abilities due to her fear of failure.
        </p>
      </details>
<br>
      <details open>
        <summary><b>Likes/Dislikes</b></summary>
        <p>
<b>Likes:</b><br>
Flowers, yoga, climbing, books, caterpillars, gardening, sunbathing, color purple<br>

<b>Dislikes:</b><br>
Swimming, rain, water in general, responsibilities, wasps
        </p>
      </details>
<br>
      <details open>
        <summary><b>Relationships/Ties</b></summary>
        <p>
     <b>[<a href="/characters/Rallosameer">Rallosameer</a>]</b> Her partner in the new council.<br>
     <b>[<a href="/characters/saahrimei">Saahrimei</a>] </b>Future close friend.<br>
     <b>[<a href="/characters/xivaillon">Xivaillon</a>] </b>Her co-counilor.<br>
     <b>[<a href="/characters/zethareshmi">Zethareshmi</a>] </b>Her co-counilor.<br>
     <b>[<a href="/characters/romisellius">Romisellius</a>] </b>Her co-counilor.<br>
     <b>[<a href="/characters/mennarath">Mennarath</a>] </b> Her co-counilor.<br>
     <b>[<a href="/characters/ymreiva">Ymreiva the Goddess of Death</a>] </b> Her boss.<br>
     <b>[<a href="/characters/lwiviear">Lwiviear the God of Life</a>] </b> Her boss.<br>
     <b>[Her family]</b> She has a decent relationship with her family.<br>
        </p>
      </details>
<br>
      <details open>
        <summary><b>Trivia</b></summary>
        <p>
1) She was never supposed to date Rallosameer, but one day they just clicked.<br>
2) She is one of the characters who are to blame for the cancellation of Hellcephira. The potential story between her and Rallosameer was just much better than whatever the protagonists had in that comic.<br>
        </p>
      </details>
    </div><!-- .article-body -->
  </div><!-- .page-wrapper --><div style="clear:both"></div>
<hr>
<h3 class="title">{{ page.shortname }}'s Gallery</h3>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | where_exp: "item", "item.tags contains 'Anshrilda'" %}
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
