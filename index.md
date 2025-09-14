---
layout: home
---

<div id="sector1">
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
                        <img src="{{ artwork.thumbnail }}" alt="">
                    </a>
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
                        <img src="{{ doodle.thumbnail }}" alt="">
                    </a>
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
                        <img src="{{ pixelart.thumbnail }}" alt="">
                    </a>
                </div>
            {% endfor %}
            </div>
        </div>
    </div>
    <br />
    <div id="latestblog-title">
        <h3>About me</h3>
    </div>
    <div id="latestblog">
       <center><a href="https://ko-fi.com/ypsilenna">Ko-fi</a> ● <a href="https://bsky.app/profile/ypsilenna.art">Bluesky</a> ● <a rel="me" href="https://sunny.garden/@Ypsilenna">Mastodon</a> ● <a href="https://cara.app/ypsilenna">Cara</a> ● <a href="https://www.instagram.com/ypsilenna">Instagram</a> ● <a href="https://www.side7.com/u/Ypsilenna/profile">Side7</a></center>
        <hr>
        This is my personal website, as you can see, I draw and write. I am in my 30s, I was born in Poland but I currently live in Spain. <br>
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
        If you need to contact me, you can do so via Matrix: @ypsilenna:matrix.org<br>
        <div id="sector1">
            <div id="sector1-left"></div>
            <div id="sector1-right">
    <h1>What is Gloomvale?</h1>
        Gloomvale is a dark area between the physical realm and realm of the fae. Court of Gloomvale is a group of misfits who judge whether travelers are worthy to pass through. One thing is for sure, nobody ever stays in Gloomvale for long.
<br>
            </div>
        </div>
    </div><br>
      <center><h3>Discord Server</h3>
  <iframe src="https://discord.com/widget?id=1336302979422228564&theme=dark" width="95%" height="200px" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe></center>
  
</div>


