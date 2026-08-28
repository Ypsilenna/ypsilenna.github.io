---
layout: default
title: 'The Snake Queen - Summary'
ogimage: /static/image/stories/tsq-2026-cover.webp
ogdesc: It is a story of an unknown priestess who tries to make a pact with one of the powerful sky spirit animals, only to find out why nobody deals with the Dusk Serpent.
---
  <div class="return-link"><a href="/stories"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg> Stories</a></div>
<div class="novel-container"><div class="novel-left-sidebar">
    <div>  <h2>The Snake Queen</h2><br>
          <b>Genre:</b> Fantasy Dramedy<br>
        <b>Rating:</b> 16+<br>    
        <b>Content warnings:</b> Violence, Death, Suggestive Themes, Light Alcohol/Tobacco Use, Trauma<br>
        <b>Length:</b> ~50k words<br>
        <b>Status:</b> Completed <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
</div>
          <b>Synopsis:</b> It is a story of an unknown priestess who tries to make a pact with one of the powerful sky spirit animals, only to find out why nobody deals with the Dusk Serpent.<br>

          </div>
    <div><img src="/static/image/stories/tsq-2026-cover.webp" title="The Snake Queen cover image."></div>
<hr>
<h2 class="title">Chapters</h2>
<ul>
   {% assign stories = site.stories | sort: "date" %}
    {% for story in stories %}
        {% if story.tags contains "The Snake Queen" %}
 <li><b><a href="{{ story.url }}">{{ story.public-title }} ({{ story.rating }})</a></b> - <i>{{ story.receipt }}</i></li>
        {% endif %}
    {% endfor %}
</ul><hr>
<h2 class="title">Extras</h2><br>
<h3>Videos:</h3>
<ul><li><b><a href="https://peertube.wtf/w/eoRvXU2gb9ug7d2VaCdXov">Storyboard: If Zephyr didn't resist on the watchtower (Spoilers)</a></b></li></ul>
</div></div>

{% include colormode.html %}
