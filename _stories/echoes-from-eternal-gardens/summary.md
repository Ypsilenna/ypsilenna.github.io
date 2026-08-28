---
layout: default
title: 'Echoes from Eternal Gardens - Summary'
ogimage: /static/image/stories/tsq-2026-cover.webp
ogdesc: It is a collection of shirt stories about those who departed from this world.
---
  <div class="return-link"><a href="/stories"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg> Stories</a></div>
<div class="novel-container"><div class="novel-left-sidebar">
    <div>  <h2>Echoes from Eternal Gardens</h2><br>
          <b>Genre:</b> Fantasy<br>
        <b>Rating:</b> 16+<br>    
        <b>Content warnings:</b> TBA<br>
        <b>Synopsis:</b> Echoes from Eternal Gardens is a collection of short stories about those have passed away. Each chapter describes the last journey of at least one character from another novel and their fate in the afterlife.<br><br>
<b>Note:</b> This collection has no set length or update schedule. There is no continuity between chapters, so you don't have to wait for it to be completed if you want to fully experience everything it has to offer.

          </div>
    <div><img src="/static/image/stories/coming-soon.webp" title="Echoes from Eternal Gardens cover image."></div>
<hr>
<h2 class="title">Chapters</h2>
<ul>
   {% assign stories = site.stories | sort: "date" %}
    {% for story in stories %}
        {% if story.tags contains "Echoes from Eternal Gardens" %}
 <li><b><a href="{{ story.url }}">{{ story.public-title }} ({{ story.rating }})</a></b> - <i>{{ story.receipt }}</i></li>
        {% endif %}
    {% endfor %}
</ul>
</div></div>

{% include colormode.html %}
