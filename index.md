---
layout: home
---

<div id="sector1">
    <div id="sector1-left">
        <img src="/static/image/ymrepng.png">
        <div id="sector1-right">
            <div id="latestart-title">
                <h3>Latest artworks</h3>
            </div>
            <br>
            <div style="clear:both"></div>
            <div class="artworks">
    {% assign artworks = site.artworks | sort: "stamp" %}
    {% for artwork in artworks limit:5 %}
                <div class="artworks-item">
                    <a data-magnify="gallery" data-src="{{ artwork.cover }}" data-caption="{{ artwork.title }}" data-group="a" href="{{ artwork.cover }}">
                        <img src="{{ artwork.thumbnail }}" alt="">
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
        <div id="sector1">
            <div id="sector1-left">
                Hello!<br>
                Welcome to Court of Gloomvale - my friendly art corner on the net!
            </div>
            <div id="sector1-right">
    <h1>What is Gloomvale?</h1>
        Gloomvale is a dark area between the physical realm and realm of the fae. Court of Gloomvale is a group of misfits who judge whether travelers are worthy to pass through. One thing is for sure, nobody ever stays in Gloomvale for long.
            </div>
        </div>
    </div>
</div>
