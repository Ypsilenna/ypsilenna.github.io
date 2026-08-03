---
layout: default
title: Original Characters
ogimage: /static/image/blank.png
ogdesc: List of original characters designed by Ypsilenna.
---
<h1 class="title">{{ page.title }}</h1><br>
<div class="character-list">
   {% assign characters = site.characters | sort: "title" | where_exp: "item", "item.tags contains 'complete'" %}
   {% for character in characters %}
<div class="character-list-item" title="{{ character.title }}">
            <a data-src="{{ character.avatar }}" data-caption="{{ character.title }}" href="{{ character.url | prepend: site.baseurl }}">
                <img src="/static/image/blank.png" data-echo="{{ character.avatar }}" alt="{{ character.alt }}" class="character-active{{ character.active }}">
                        <div class="character-tag"><br>{{ character.title }}</div></a>
        </div>
    {% endfor %}</div><br>
<div class="novel-container"><div class="alert alert-warning" role="alert">
 <b>Work in progress.</b> These characters don't have complete profiles. Some of them might be even missing from this list.
</div></div>
<div class="character-list">
   {% assign characters = site.characters | sort: "title" | where_exp: "item", "item.tags contains 'incomplete'" %}
   {% for character in characters %}
<div class="character-list-item" title="{{ character.title }}">
            <a data-src="{{ character.avatar }}" data-caption="{{ character.title }}" href="{{ character.url | prepend: site.baseurl }}">
                <img src="/static/image/blank.png" data-echo="{{ character.avatar }}" alt="{{ character.alt }}" class="character-active{{ character.active }}">
                        <div class="character-tag"><br>{{ character.title }}</div></a>
        </div>
    {% endfor %}</div>

{% include colormode.html %}

{% include lazyload.html %}
