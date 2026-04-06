---
layout: default
title: Original Characters
ogimage: /static/image/blank.png
ogdesc: List of original characters designed by Ypsilenna.
---
<h1 class="title">{{ page.title }} by Project</h1><hr>
<h2 class="title">The Snake Queen</h2>
<div class="character-list">
   {% assign characters = site.characters | sort: "name" | where_exp: "item", "item.series contains 'The Snake Queen'" %}
   {% for character in characters %}
<div class="character-list-item">
            <a data-src="{{ character.avatar }}" data-caption="{{ character.title }}" href="{{ character.url | prepend: site.baseurl }}">
                <img src="/static/image/blank.png" data-echo="{{ character.avatar }}" alt="" class="character-active{{ character.active }}">
                        <div class="character-tag"><br>{{ character.title }}</div></a>
        </div>
    {% endfor %}</div>
<hr>
<h2 class="title">Little Star and the City of Wonders</h2>
<div class="character-list">
   {% assign characters = site.characters | sort: "name" | where_exp: "item", "item.series contains 'Little Star and the City of Wonders'" | reverse %}
   {% for character in characters %}
<div class="character-list-item">
            <a data-src="{{ character.avatar }}" data-caption="{{ character.title }}" href="{{ character.url | prepend: site.baseurl }}">
                <img src="/static/image/blank.png" data-echo="{{ character.avatar }}" alt="" class="character-active{{ character.active }}">
                        <div class="character-tag"><br>{{ character.title }}</div></a>
        </div>
    {% endfor %}</div>

<hr>
<h2 class="title">When You're Evil</h2>
<div class="character-list">
   {% assign characters = site.characters | sort: "name" | where_exp: "item", "item.series contains 'When You&#39;re Evil'" | reverse %}
   {% for character in characters %}
<div class="character-list-item">
            <a data-src="{{ character.avatar }}" data-caption="{{ character.title }}" href="{{ character.url | prepend: site.baseurl }}">
                <img src="/static/image/blank.png" data-echo="{{ character.avatar }}" alt="" class="character-active{{ character.active }}">
                        <div class="character-tag"><br>{{ character.title }}</div></a>
        </div>
    {% endfor %}</div>
<hr>
<h2 class="title">Working Around</h2>
<div class="character-list">
   {% assign characters = site.characters | sort: "name" | where_exp: "item", "item.series contains 'Working Around'" | reverse %}
   {% for character in characters %}
<div class="character-list-item">
            <a data-src="{{ character.avatar }}" data-caption="{{ character.title }}" href="{{ character.url | prepend: site.baseurl }}">
                <img src="/static/image/blank.png" data-echo="{{ character.avatar }}" alt="" class="character-active{{ character.active }}">
                        <div class="character-tag"><br>{{ character.title }}</div></a>
        </div>
    {% endfor %}</div>
<br><img src="/static/image/s-kme-separator.png">

<h2 class="title">Unsorted</h2>
<div class="character-list">
   {% assign characters = site.characters | sort: "name" | where_exp: "item", "item.series contains 'N/A'" | reverse %}
   {% for character in characters %}
<div class="character-list-item">
            <a data-src="{{ character.avatar }}" data-caption="{{ character.title }}" href="{{ character.url | prepend: site.baseurl }}">
                <img src="/static/image/blank.png" data-echo="{{ character.avatar }}" alt="" class="character-active{{ character.active }}">
                        <div class="character-tag"><br>{{ character.title }}</div></a>
        </div>
    {% endfor %}</div>



{% include lazyload.html %}
