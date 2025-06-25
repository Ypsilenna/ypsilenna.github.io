---
layout: default
---

<video id="player" playsinline controls data-poster="/path/to/poster.jpg">
  <source src="https://github.com/Ypsilenna/ypsilenna.github.io/raw/refs/heads/main/static/videos/doodle.mp4" type="video/mp4" />
  <source src="/path/to/video.webm" type="video/webm" />
</video>



<h1 class="title">{{ page.title }}</h1>

<div class="videos">
        <div class="artworks-item">
            <a data-magnify="gallery" data-src="https://github.com/Ypsilenna/ypsilenna.github.io/raw/refs/heads/main/static/videos/doodle.mp4" data-caption="{{ artwork.title }}" data-group="a" href="https://github.com/Ypsilenna/ypsilenna.github.io/raw/refs/heads/main/static/videos/doodle.mp4">
                <img src="/static/image/blank.png" data-echo="{{ artwork.thumbnail }}" alt="">
            </a>
        </div>
    {% endfor %}
</div>

{% include lazyload.html %}
