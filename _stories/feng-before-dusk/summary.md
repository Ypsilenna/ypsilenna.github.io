---
layout: default
title: 'Feng: Before Dusk - Summary'
ogimage: /static/image/stories/feng-cover.png
ogdesc: Feng&#58; Before Dusk is a spin-off mini-comic series based on The Snake Queen. The episodes follow the early life of a silly danger noodle originally named Fang before it befriended goddess Raa and had its tail in the creation of a new legend.
---

 <p style="text-align: left"><b><a href="/stories"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg> Stories</a></b></p>
<div class="novel-container"><div class="novel-left-sidebar">
    <div>  <h2>Feng: Before Dusk</h2><br>
        <b>Genre:</b> Slice-of-life Comedy<br>
        <b>Rating:</b> 13+<br>    
        <b>Content warnings:</b> N/A<br>
        <b>Status:</b> Ongoing<br>
        <b>Synopsis:</b> Feng: Before Dusk is a spin-off mini-comic series based on The Snake Queen. <br>
The episodes follow the early life of a silly danger noodle originally named Fang before it befriended goddess Raa and had its tail in the creation of a new legend.<br>

          </div>
    <div><img src="/static/image/stories/feng-cover.png"></div>
</div></div><hr>
<h2 class="title">Comics</h2>
<div class="artworks">
{% assign artworks = site.artworks | sort: "date" | reverse | where_exp: "item", "item.tags contains 'Feng&#58; Before Dusk'" %}
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
<hr>

