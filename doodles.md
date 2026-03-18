---
layout: default
title: Doodles
ogimage: /static/image/blank.png
ogdesc: A collection of doodles.
---

<h1 class="title">{{ page.title }}</h1>
<div class="artworks">
    {% assign doodles = site.doodles | sort: "stamp" %}
    {% for doodle in doodles %}
        <div class="artworks-item">
            <a data-magnify="gallery" data-src="{{ doodle.cover }}" data-caption="{{ doodle.title }}" data-group="a" href="{{ doodle.cover }}">
                <img src="/static/image/blank.png" data-echo="{{ doodle.thumbnail }}" alt="" title="{{ doodle.title }}">
            </a><div class="gallery-link-bg"><a class="gallery-link" title="Artwork Page" href="{{ doodle.url }}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
</svg></a></div>
        </div>
    {% endfor %}
</div>

{% include lazyload.html %}
