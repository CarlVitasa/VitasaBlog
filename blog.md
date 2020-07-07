---
layout: default-layout.njk
pagination:
  data: collections.post
  size: 10
  reverse: true
  alias: posts
---

{% for post in posts %}
  <article>
    <h3>
      <a href="{{ post.url | url }}">{{ post.data.title }}</a>
    </h3>
      <time datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time>
  </article>
{% endfor %}
