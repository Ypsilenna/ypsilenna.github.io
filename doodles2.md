---
layout: default
title: Doodles
ogimage: /static/image/blank.png
ogdesc: A collection of doodles.
---

<h1 class="title">{{ page.title }}<a href="/feed/doodles.xml"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rss-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2m0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2m.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg></a></h1>


    {% for post in site.posts %}

        {% capture year_of_current_post %}
        {{ post.date | date: "%Y" }}
        {% endcapture %}

        {% capture year_of_previous_post %}
        {{ post.previous.date | date: "%Y" }}
        {% endcapture %}

        {% if forloop.first %}
            <details open>
                <h2><summary>{{ year_of_current_post }}</summary></h2>
                <li><a href="{{ post.url }}">{{ post.title }}</a></li>
            </details>
        {% else %}
            {% if year_of_current_post != year_of_previous_post %}
                <h2>
                    <details open>
                        <summary>{{ year_of_previous_post }}
                </h2>
                </summary>
                <ul>
            {% endif %}
        {% endif %}

    {% endfor %}
