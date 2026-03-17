---
layout: default
---
<div class="novel-container">
    <h1 class="title">Welcome to my guestbook!</h1>
<!-- Guestbook Script -->
<script async src="https://guestbooks.meadow.cafe/resources/js/embed_script/6106/script.js"></script>
<!-- Guestbook Form -->
<div id="guestbooks___guestbook-form-container">
  <form id="guestbooks___guestbook-form" 
        action="https://guestbooks.meadow.cafe/guestbook/6106/submit" 
        method="post">
    <div class="guestbooks___input-container">
      <input type="text" 
             id="name" 
             name="name" 
             placeholder="Your Name" 
             required>
    </div>
    <div class="guestbooks___input-container">
      <input type="url" 
             id="website" 
             name="website" 
             placeholder="Website (optional)">
    </div>
    <div id="guestbooks___challenge-answer-container"></div>
    <div class="guestbooks___input-container">
      <textarea id="text" 
                name="text" 
                placeholder="Leave your message here..." 
                rows="4"
                style="width: 100%; box-sizing: border-box; resize: vertical;"
                required></textarea>
    </div>
    <div id="guestbooks___pow-status"></div>
    <button type="submit">Sign Guestbook</button>
    <div id="guestbooks___error-message"></div>
  </form>
</div>
<!-- Attribution (optional but appreciated!) -->
<div id="guestbooks___guestbook-made-with" style="text-align: right; margin-top: 10px;">
  <small>Powered by <a href="https://guestbooks.meadow.cafe" target="_blank">Guestbooks</a></small>
</div>
<!-- Messages Section -->
<hr style="margin: 2em 0;"/>
<h3 id="guestbooks___guestbook-messages-header">Messages</h3>
<div id="guestbooks___guestbook-messages-container"></div>
<hr>
</div>

