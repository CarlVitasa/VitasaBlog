---
eleventyExcludeFromCollections: true
layout: layouts/default-layout.njk
title: About
---

Hi there, I'm {% openNewTab "Carl Vitasa", "https://carlvitasa.com/" %} and welcome to my <mark>cozy corner</mark> in the interwebs. This website was built using {% openNewTab "11ty", "https://www.11ty.dev/" %} and features generative art utilizing {% openNewTab "p5.js", "https://p5js.org/" %}.

{% youTubeEmbed "https://www.youtube.com/watch?v=YUQJMhEbJmk" %}

{% renderSketch "sketch1", "sketch_001.js" %}
{% getCode "sketch_001.js" %}

{% renderSketch "sketch2", "sketch_002.js" %}
{% getCode "sketch_002.js" %}

{% raw %}
```liquid
{% renderSketch "sketch1", "sketch_001.js" %}
{% getCode "sketch_001.js" %}

{% renderSketch "sketch2", "sketch_002.js" %}
{% getCode "sketch_002.js" %}
```
{% endraw %}

{% raw %}
~~~liquid
```liquid
{% renderSketch "sketch1", "sketch_001.js" %}
{% getCode "sketch_001.js" %}

{% renderSketch "sketch2", "sketch_002.js" %}
{% getCode "sketch_002.js" %}
```
{% endraw %}
~~~

<!-- <div class="corner-wrapper">
    <iframe frameborder="0" src="https://www.shadertoy.com/embed/4sKBzD?gui=false&t=10&paused=false&muted=true"></iframe>
</div> -->

