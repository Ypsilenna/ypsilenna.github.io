---
layout: default
title: 'Little Star and the City of Wonders - Summary'
ogimage: /static/image/thumbnails/2024-019.png
ogdesc: It is a story of an unknown priestess who tries to make a pact with one of the powerful sky spirit animals, only to find out why nobody deals with the Dusk Serpent.
---
 <p style="text-align: left"><b><a href="/stories"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg> Stories</a></b></p>
<div class="novel-container"><div class="novel-left-sidebar">
    <div>  <h2>Little Star and the City of Wonders</h2><br>
          <b>Genre:</b> Fantasy Dramedy<br>
        <b>Rating:</b> 16+<br>    
        <b>Content warnings:</b> Violence, Death, Alcohol/Tobacco Use, Trauma<br>
                  <b>Status:</b> In progress <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
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

<script>
const toggleBtn = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.setAttribute("data-theme", savedTheme);
  document.querySelector('#content').setAttribute("data-theme", savedTheme);
  document.querySelector('.progress-top').setAttribute("data-theme", savedTheme);


} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    document.body.setAttribute("data-theme", "dark");
    document.querySelector('#content').setAttribute("data-theme", "dark")
    document.querySelector('.progress-top').setAttribute("data-theme", "dark")
  }
}
toggleBtn.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  document.querySelector('#content').setAttribute("data-theme", newTheme);
  document.querySelector('.progress-top').setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  
});</script>