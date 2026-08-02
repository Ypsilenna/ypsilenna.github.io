---
layout: page
title: 25 Recent statuses
ogimage: /static/image/blank.png
ogdesc: Ypsilenna's recent thoughts.
---
<hr><div class="squeeze"><div class="post-list">
    {% for thought in site.thoughts limit: 25 %}
    <div class="speech-bubble">        
        <div>
      {{ thought.content }}
      <p style="text-align: right"><small><b>Mood:</b> {{ thought.moods }} <b>Date:</b> <i><time datetime="{{ thought.date }}">{{ thought.date | date: "%B %d, %Y" }}</time></i></small></P>
        </div>
    </div><br>
    {% endfor %}
</div></div>