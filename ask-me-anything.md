---
layout: default
title: Ask Me Anything
ogimage: /static/image/blank.png
ogdesc: Askbox of Court of Gloomvale.
---
<div class="novel-container"><br>
<div class="ask-box">
    <h1 class="title">Askbox</h1><div style="text-align: center;"><img src="/static/image/armadillo512.png" style="max-width:512px!important;"><br>
    Ask me a question and I will answer it in one of my blog posts (probably, unless your question is SPAM, then I will not.)</div><hr>
  <form id="ask-form">
    <textarea
      name="question"
      placeholder="Type your question here..."
      maxlength="500"
      required
    ></textarea>

    <!-- honeypot: invisible to humans, bots tend to fill every field -->
    <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">

    <button type="submit">Send anonymously</button>
  </form>

  <p id="ask-success" style="display:none;">Sent! Thanks for the question 💌</p>
  <p id="ask-error" style="display:none;">Something went wrong — mind trying again?</p>
</div></div>

<script>
(function () {
  const form = document.getElementById("ask-form");
  const successMsg = document.getElementById("ask-success");
  const errorMsg = document.getElementById("ask-error");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorMsg.style.display = "none";

    try {
      const response = await fetch("https://formspree.io/f/xbdnyrne", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        form.style.display = "none";
        successMsg.style.display = "block";
      } else {
        errorMsg.style.display = "block";
      }
    } catch (err) {
      errorMsg.style.display = "block";
    }
  });
})();
</script>