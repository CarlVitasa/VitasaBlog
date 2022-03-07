---
eleventyExcludeFromCollections: true
layout: layouts/default-layout.njk
title: About
---

Hi there, I'm <a href="https://carlvitasa.com/" target="_blank">Carl Vitasa</a>
 and welcome to my <mark>cozy corner</mark> in the interwebs. Below is an example of sketch done using `p5.js`.

<div id="sketch1" class="corner-wrapper"></div>
<script src="/assets/p5-sketches/sketch_001.js"></script>

<div id="sketch2" class="corner-wrapper"></div>
<script src="/assets/p5-sketches/sketch_002.js"></script>


```js   
new p5((s) => {

    let x = 100;
    let y = 100;
    let size = 50;

    s.setup = () => {
        s.frameRate(144);
        s.createCanvas(640, 360).parent('sketch1');
    };

    s.draw = () => {
        s.background(0);
        s.fill(255);
        s.noStroke();
        s.circle(s.mouseX, s.mouseY, size);
    };
});
```
<!-- <div class="corner-wrapper">
    <iframe frameborder="0" src="https://www.shadertoy.com/embed/4sKBzD?gui=false&t=10&paused=false&muted=true"></iframe>
</div> -->
