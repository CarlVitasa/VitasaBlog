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
    {{ post.date }}
  </article>
{% endfor %}