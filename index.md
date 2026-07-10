---
layout: home
title: Home
ogimage: /static/image/blank.png
ogdesc: Welcome to Court of Gloomvale, the creative space of Ypsilenna! You can find here artworks, stories, art time-lapses, and other creative things!
---
<div id="sector1">
<a href="/guestbook"><h3 class="guestbook">Check out my guestbook!</h3></a>
    
<div id="sector1-left"><div id="sector1-image"><img src="/static/image/sk8-frontpage.png"></div>
        <div id="sector1-right">
            <div id="latestart-title">
            <h3><a href="/illustrations">Latest Artworks</a></h3></div>
<br>
<div style="clear:both"></div>
<div class="artworks">
{% assign artworks = site.artworks | sort: "stamp" | where_exp: "item", "item.categories contains 'Artworks'" %}
{% for artwork in artworks limit: 4 %}
    <div class="artworks-item">
                     <a data-magnify="gallery" data-src="{{ artwork.cover }}" data-caption="{{ artwork.title }}" data-group="a" href="{{ artwork.cover }}">
                        <img src="/static/image/blank.png" data-echo="{{ artwork.thumbnail }}" alt="" title="{{ artwork.title }}">
                    </a><div class="gallery-link-bg"><a class="gallery-link" title="Artwork Page" href="{{ artwork.url }}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
</svg></a></div>
    </div>
  {% endfor %}
</div>
<br>

<div id="latestart-title2">
    <h3><a href="/doodles">Latest Doodles</a></h3></div>
<br>
<div style="clear:both"></div>
<div class="artworks">
{% assign artworks = site.artworks | sort: "stamp" | where_exp: "item", "item.categories contains 'doodles'" %}
{% for artwork in artworks limit: 4 %}
    <div class="artworks-item">
                       <a data-magnify="gallery" data-src="{{ artwork.cover }}" data-caption="{{ artwork.title }}" data-group="a" href="{{ artwork.cover }}">
                        <img src="/static/image/blank.png" data-echo="{{ artwork.thumbnail }}" alt="" title="{{ artwork.title }}">
                    </a><div class="gallery-link-bg"><a class="gallery-link" title="Artwork Page" href="{{ artwork.url }}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
</svg></a></div>
    </div>
  {% endfor %}
</div>
<br>
<div id="latestart-title">
    <h3><a href="/pixelart">Latest Pixel Art</a></h3></div>
<br>
<div style="clear:both"></div>
<div class="artworks">

{% assign artworks = site.artworks | sort: "stamp" | where_exp: "item", "item.categories contains 'Pixelart'" %}
{% for artwork in artworks limit: 4 %}
    <div class="artworks-item">
                        <a data-magnify="gallery" data-src="{{ artwork.cover }}" data-caption="{{ artwork.title }}" data-group="a" href="{{ artwork.cover }}">
                        <img src="/static/image/blank.png" data-echo="{{ artwork.thumbnail }}" alt="" title="{{ artwork.title }}">
                    </a><div class="gallery-link-bg"><a class="gallery-link" title="Artwork Page" href="{{ artwork.url }}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
</svg></a></div>
    </div>
  {% endfor %}
</div>

<br>
            </div>
        </div>
    <br />
    <div id="latestblog-title">
        <h3>About me</h3>
    </div>
    <div id="latestblog2">
    
    <div id="sector3">
    <div id="sector3-left">
    <div class="sector3-justify"><p>I'm a person who draws and writes, this is my personal website as you can see. In '94 I was 0 years old because I was born. I am originally from Poland but I currently live in Spain. I'm allergic to the modern web, so I am most likely to be found on some obscure small sites and Mastodon. <br>If you need to contact me, you can do so via Matrix: <i>@ypsilenna:matrix.org</i><br><br>
    <b>Commissions</b>: 🔴 Closed<br>
    <b>Trades</b>: 🟢 Open<br>
    <b>Requests</b>: 🔴 Closed<br>
    <b>Collabs:</b> 🟡 Ask<br><br>
    <b>Disclaimer</b>: I don't really use Discord anymore. If someone reaches out to you claiming they are me, it probably isn't me. Always reference this website before interacting with them.</p><br></div>

<div id="sector3-image"><img src="/static/image/author-frontpage.png"></div></div>
<br>
            </div>       <h3>My interests</h3>
<div class="interests-bar">🎨 Hobbies/Interests<hr>
<p>Art (both making and viewing), writing, video games, learning languages, designing</p></div>
<div class="interests-bar">🎥 Movies/TV Series<hr>
<p>I think my favorite movie would be The Road to El Dorado? And my favorite TV series would be What We Do In The Shadows (the duality of man).</p></div>
<div class="interests-bar">📚 Books/Comics<hr>
<p>Howl's Moving Castle. I was about to put it in the movie section, but the book is better.</p></div>
<div class="interests-bar">🎼 Music/Bands <hr>
<p>It would be faster to say what I don't like because I listen to most genres, depending on the mood. Pitbull gets honorable mention, though, because his music is so silly that it got me out of a pretty long depressive state. Pitbull saves lives.</p></div>
<div class="interests-bar">👾 Games<hr>
<p>I'll be honest with you, the number of games I own makes me feel kind of ashamed. I mostly enjoy playing various RPGs and cozy games, though. This is sort of the same as my answer about music. DON'T LOOK AT MY STEAM PROFILE! <br>(Just kidding. My Steam profile is public, and the name there is the same as I use here). &nbsp;</p></div>
 <div class="sector3-footer"><h1>What is Gloomvale?</h1>
        Gloomvale is a dark area between the physical realm and the realm of the fae. The Court of Gloomvale is a group of misfits who judge whether travelers are worthy to pass through or not. One thing is for sure: nobody ever stays in Gloomvale for long.<br>
        <p style="text-align: center">🌺🌺🌺</p></div></div>
        </div>
<br>
<div id="sector2">
<h3 class="guestbook">Links: <a href="https://ko-fi.com/ypsilenna">Ko-fi</a> ● <a href="https://bsky.app/profile/ypsilenna.art">Bluesky</a> ● <a rel="me" href="https://mastodon.green/@Ypsilenna">Mastodon</a>  ● <a href="https://cara.app/ypsilenna">Cara</a> ● <a href="https://www.instagram.com/ypsilenna">Instagram</a></h3>
    
<div id="sector2-left"><div id="sector2-image"><img src="/static/image/wyvern-frontpage.png"></div>
        <div id="sector2-right"><small>Remember to check the ratings and content warnings before reading.</small><br><br>
<div id="latestart-title4">
    <h3><a href="/stories#literature">Latest Literature Updates</a></h3></div>
<br>
<ul><br>
   {% assign stories = site.stories | sort: "date" | where_exp: "item", "item.categories contains 'stories'" | reverse %}
   {% for story in stories limit: 3 %}
 <li><b><a href="{{ story.url }}">{{ story.title }} ({{ story.rating }})</a></b></li>
    {% endfor %}
</ul><br>

<div id="latestart-title3">
    <h3><a href="/stories#comics">Latest Comic Updates</a></h3></div><div style="clear:both"></div>
<div class="artworks">
{% assign artworks = site.artworks | sort: "stamp" | reverse | where_exp: "item", "item.categories contains 'Minicomic'" %}
{% for artwork in artworks limit: 4 %}
    <div class="artworks-item">
                       <a data-magnify="gallery" data-src="{{ artwork.cover }}" data-caption="{{ artwork.title }}" data-group="a" href="{{ artwork.cover }}">
                        <img src="/static/image/blank.png" data-echo="{{ artwork.thumbnail }}" alt="" title="{{ artwork.title }}">
                    </a><div class="gallery-link-bg"><a class="gallery-link" title="Artwork Page" href="{{ artwork.url }}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
</svg></a></div>
    </div>
  {% endfor %}
</div>
</div>

{% include lazyload.html %}
