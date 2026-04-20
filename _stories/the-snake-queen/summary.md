---
layout: default
title: 'The Snake Queen - Summary'
---
 <p style="text-align: left"><b><a href="/stories"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg> Return to the list</a></b></p>
<div class="novel-container"><div class="novel-left-sidebar">
    <div>  <h2>The Snake Queen</h2><br>
          <b>Genre:</b> Fantasy/Drama/Action<br>
          <b>Status:</b> In progress<br>
          <b>Synopsis:</b> It is a story of an unknown priestess who tries to make a pact with one of the powerful sky spirit animals, only to find out why nobody deals with the Dusk Serpent.<br>
          <b>Content warnings:</b> Violence, death, implied nudity, implied sexual situations, use of alcohol, use of tobacco, trauma<br>
          <i>Chapters marked with the Ⓜ️ icon contain stronger themes, and they are meant for mature audiences. Read at your own discretion.</i>
          </div>
    <div><img src="/static/image/stories/okladka-text-mini.png"></div>
<hr>
<h2 class="title">Chapters</h2>
<ul>
   {% assign stories = site.stories | sort: "date" %}
    {% for story in stories %}
        {% if story.tags contains "The Snake Queen" %}
 <li><b><a href="{{ story.url }}">{{ story.public-title }}</a></b> - <i>{{ story.receipt }}</i></li>
        {% endif %}
    {% endfor %}
</ul><hr>
</div></div>