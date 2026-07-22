---
layout: default
title: 'Little Star and the City of Wonders - Summary'
ogimage: /static/image/stories/LSCW-400400.png
ogdesc: Lusstoni was just a wounded man who one day decided to leave everything behind and depart on a journey to forget about the pain. Everything was going according to the plan for about five minutes until a child adopted him against his will.
---
 <div class="return-link"><a href="/stories"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg> Stories</a></div>
<div class="novel-container"><div class="novel-left-sidebar">
    <div>  <h2>Little Star and the City of Wonders</h2><br>
          <b>Genre:</b> Fantasy Dramedy<br>
        <b>Rating:</b> 16+<br>    
        <b>Content warnings:</b> Violence, Death, Alcohol/Tobacco Use, Trauma<br>
                  <b>Status:</b> In progress <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 11%" aria-valuenow="11" aria-valuemin="0" aria-valuemax="100">11%</div>
</div>
          <b>Synopsis:</b> Lusstoni was just a wounded man who one day decided to leave everything behind and depart on a journey to forget about the pain. Everything was going according to the plan for about five minutes until a child adopted him against his will.<br>

          </div>
    <div><img src="/static/image/stories/LSCW-2026-cover.png"></div>
<hr>
<h2 class="title">Chapters</h2>
<ul>
   {% assign stories = site.stories | sort: "date" %}
    {% for story in stories %}
        {% if story.tags contains "Little Star and the City of Wonders" %}
 <li><b><a href="{{ story.url }}">{{ story.public-title }} ({{ story.rating }})</a></b> - <i>{{ story.receipt }}</i></li>
        {% endif %}
    {% endfor %}
</ul><hr>
</div></div>

{% include colormode.html %}
