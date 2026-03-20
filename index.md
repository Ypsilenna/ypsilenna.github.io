---
layout: home
title: Home
ogimage: /static/image/blank.png
ogdesc: Welcome to Court of Gloomvale, the creative space of Ypsilenna! You can find here artworks, stories, art time-lapses, and other creative things!
---
<div id="sector1">
<a href="/guestbook"><h3 class="guestbook">Check out my guestbook!</h3></a>
    
    <div id="sector1-left">
        <img src="/static/image/sk8-frontpage.png">
        <div id="sector1-right">
            <div id="latestart-title">
                <h3><a href="/artworks">Latest Artworks</a></h3>
            </div>
            <br>
            <div style="clear:both"></div>
            <div class="artworks">
    {% assign artworks = site.artworks | sort: "stamp" %}
    {% for artwork in artworks limit:4 %}
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
                <h3><a href="/doodles">Latest Doodles</a></h3>
            </div>
<br>
                        <div class="artworks">
    {% assign doodles = site.doodles | sort: "stamp" %}
    {% for doodle in doodles limit:4 %}
                <div class="artworks-item">
                    <a data-magnify="gallery" data-src="{{ doodle.cover }}" data-caption="{{ doodle.title }}" data-group="a" href="{{ doodle.cover }}">
                        <img src="/static/image/blank.png" data-echo="{{ doodle.thumbnail }}" alt="" title="{{ doodle.title }}">
                    </a><div class="gallery-link-bg"><a class="gallery-link" title="Artwork Page" href="{{ doodle.url }}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
</svg></a></div>
                </div>
            {% endfor %}
            </div>

            <br>
            <div id="latestart-title">
                <h3><a href="/pixelarts">Latest Pixel Art</a></h3>
            </div>
<br>
                        <div class="artworks">
    {% assign pixelarts = site.pixelarts | sort: "stamp" %}
    {% for pixelart in pixelarts limit:4 %}
                <div class="artworks-item">
                    <a data-magnify="gallery" data-src="{{ pixelart.cover }}" data-caption="{{ pixelart.title }}" data-group="a" href="{{ pixelart.cover }}">
                        <img src="/static/image/blank.png" data-echo="{{ pixelart.thumbnail }}" alt="" title="{{ pixelart.title }}">
                    </a><div class="gallery-link-bg"><a class="gallery-link" title="Artwork Page" href="{{ pixelart.url }}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
</svg></a></div>
                </div>
            {% endfor %}
            </div>
        </div>
    </div>
    <br />
    <div id="latestblog-title">
        <h3>About me</h3>
    </div>
    <div id="latestblog2">
           <h3>Links</h3>
        <center><a href="https://ko-fi.com/ypsilenna">Ko-fi</a> ● <a href="https://bsky.app/profile/ypsilenna.art">Bluesky</a> ● <a rel="me" href="https://mastodon.green/@Ypsilenna">Mastodon</a>  ● <a href="https://cara.app/ypsilenna">Cara</a> ● <a href="https://www.instagram.com/ypsilenna">Instagram</a></center>
        <hr>
        I'm a person who draws and writes, this is my personal website as you can see. In '94 I was 0 years old because I was born. I am originally from Poland but I currently live in Spain. I'm allergic to the modern web, so I am most likely to be found on some obscure small sites and Mastodon. If you need to contact me, you can do so via Matrix: <i>@ypsilenna:matrix.org</i><br><br>
        <b>Commission status</b>: Closed<br>
        <b>Disclaimer</b>: I don't really use Discord anymore. If someone reaches out to you claiming they are me, it probably isn't me. Always reference this website before interacting with them.<br><hr>
    <h3>Interests</h3>
<p style="background-color: #dbecfe; padding: 10px; border-radius: 10px; color: black; border: 1px solid #87a0c8; margin-top: 2px; margin-bottom: 2px; text-align: left;">🎨 Hobbies/Interests</p>
<p>Art, Writing, Video Games, Language Learning, Designing</p>
<p style="background-color: #dbecfe; padding: 10px; border-radius: 10px; color: black; border: 1px solid #87a0c8; margin-top: 2px; margin-bottom: 2px;">🎥 Movies/TV Series</p>
<p>I think my favorite movie would be The Road to El Dorado? And my favorite TV series would be What We Do In The Shadows (the duality of man).</p>
<p style="background-color: #dbecfe; padding: 10px; border-radius: 10px; color: black; border: 1px solid #87a0c8; margin-top: 2px; margin-bottom: 2px;">📚 Books/Comics</p>
<p>Howl's Moving Castle. I was about to put it in the movie section, but the book is better.</p>
<p style="background-color: #dbecfe; padding: 10px; border-radius: 10px; color: black; border: 1px solid #87a0c8; margin-top: 2px; margin-bottom: 2px;">🎼 Music/Bands</p>
<p>It would be faster to say what I don't like because I listen to most genres depending on the mood. Pitbull gets honorable mention, though, because his music is so silly that it got me out of a pretty long depressive state. Pitbull saves lives.</p>
<p style="background-color: #dbecfe; padding: 10px; border-radius: 10px; color: black; border: 1px solid #87a0c8; margin-top: 2px; margin-bottom: 2px;">👾 Games</p>
<p>I'll be honest with you, the number of games I own makes me feel kind of ashamed. I mostly enjoy playing various RPGs and cozy games, though. This is sort of the same as my answer about music.&nbsp;</p><hr>
        <div id="sector1">
            <div id="sector1-left"></div>
            <div id="sector1-right">
    <h1>What is Gloomvale?</h1>
        Gloomvale is a dark area between the physical realm and the realm of the fae. The Court of Gloomvale is a group of misfits who judge whether travelers are worthy to pass through or not. One thing is for sure: nobody ever stays in Gloomvale for long.<br>
<br>
            </div>
        </div>
    </div><br>
  
</div>


{% include lazyload.html %}
