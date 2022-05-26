---
eleventyExcludeFromCollections: true
layout: layouts/default-layout.njk
title: Lists
---

Looking for some content to consume? Here's an arbitrary lists of reccomendations in no particular order.

<div class = "post-container">
{% for post in collections.list %}
  <article >
    <a href="{{ post.url | url }}" class="post">
      {{ post.data.title }}
    </a>
  </article>
{% endfor %}
</div>
