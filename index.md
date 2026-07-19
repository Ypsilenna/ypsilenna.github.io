---
layout: home
title: Home
ogimage: /static/image/blank.png
ogdesc: Welcome to Court of Gloomvale, the creative space of Ypsilenna! You can find here artworks, stories, art time-lapses, and other creative things!
---
<div id="sector1">
<h3 class="guestbook"><a href="/guestbook">Guestbook</a> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"/>
</svg> <a href="/ask-me-anything">Ask Me Anything</a> </h3>
    
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
                    </a><div class="gallery-link-bg">
                    <a class="gallery-link" title="Artwork Details. Click here to see the author's note, leave a like/comment, or to simply get a permalink." href="{{ artwork.url }}" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
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
                    </a><div class="gallery-link-bg">
                    <a class="gallery-link" title="Artwork Details. Click here to see the author's note, leave a like/comment, or to simply get a permalink." href="{{ artwork.url }}" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
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
                    </a><div class="gallery-link-bg">
                    <a class="gallery-link" title="Artwork Details. Click here to see the author's note, leave a like/comment, or to simply get a permalink." href="{{ artwork.url }}" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
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
<p>Art (both making and viewing), writing, video games (buying and playing, believe me, these are two separate hobbies, haha), learning languages, designing.</p></div><br>
<div class="interests-bar">🎥 Movies/TV Series<hr>
<p>I think my favorite movie would be The Road to El Dorado? And my favorite TV series would be What We Do In The Shadows (the duality of man).</p></div><br>
<div class="interests-bar">📚 Books/Comics<hr>
<p>Howl's Moving Castle. I was about to put it in the movie section, but the book is better.</p></div><br>
<div class="interests-bar">🎼 Music/Bands <hr>
<p>Franz Ferdinand, Burn the Ballroom, Animal Sun, The Fratellis, LOOK MUM NO COMPUTER, Mother Mother, Deathstars, Powerwolf, Amaranthe, I DON'T KNOW HOW BUT THEY FOUND ME, Lewky... You know what? Just visit my <a href="https://www.last.fm/user/Saahrimei" target="_blank">Last.fm </a>at this point.</p></div><br>
<div class="interests-bar">👾 Games<hr>
<p>I have a new favorite game every five minutes, so I am not going to go through the hassle of updating this page every time the raffle machine points at a new title. I like RPGs, cozy games, shooting games, simulators, strategy games, dating sims (sometimes, but they must be funny), point-and-click games... Just check out my <a href="https://steamcommunity.com/id/ypsilenna/" target="_blank">Steam profile.</a> &nbsp;</p></div><br>
<div class="interests-bar">🐈 Favorite Animal<hr>
<p>Capybara and chameleon. &nbsp;</p></div><br>
 <div class="sector3-footer"><h1>What is Gloomvale?</h1>
        Gloomvale is a dark area between the physical realm and the realm of the fae. The Court of Gloomvale is a group of misfits who judge whether travelers are worthy to pass through or not. One thing is for sure: nobody ever stays in Gloomvale for long.<br>
        <p style="text-align: center">🌺🌺🌺</p></div></div>
        </div>
<br>
<div id="sector2">
<h3 class="guestbook">Links: <a href="https://ko-fi.com/ypsilenna" target="_blank" >Ko-fi</a> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"/>
</svg> <a href="https://bsky.app/profile/ypsilenna.art" target="_blank">Bluesky</a> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"/>
</svg> <a rel="me" href="https://mastodon.green/@Ypsilenna" target="_blank">Mastodon</a>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"/>
</svg> <a href="https://cara.app/ypsilenna" target="_blank">Cara</a><br> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"/>
</svg> <a href="https://sheezy.art/ypsilenna" target="_blank">SheezyArt</a> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"/>
</svg> <a href="https://www.deviantart.com/ypsilenna" target="_blank">DeviantArt</a> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"/>
</svg> <a href="https://www.pillowfort.social/Ypsilenna" target="_blank">PillowFort</a>
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"/>
</svg> <a href="https://archiveofourown.org/users/Ypsilenna/pseuds/Ypsilenna" target="_blank">Ao3</a></h3><br>
    
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
                    </a><div class="gallery-link-bg">
                    <a class="gallery-link" title="Artwork Details. Click here to see the author's note, leave a like/comment, or to simply get a permalink." href="{{ artwork.url }}" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg></a></div>
    </div>
  {% endfor %}
</div>
</div>

{% include lazyload.html %}
