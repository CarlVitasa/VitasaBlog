---
eleventyExcludeFromCollections: true
layout: layouts/default-layout.njk
title: About
---

# About

Hi there, I'm <a href="https://carlvitasa.com/" target="_blank">Carl Vitasa</a>
 and welcome to my <mark>cozy corner</mark> in the interwebs. Below is an example of sketch done using `p5.js`.

<div id="sketch" class="corner-wrapper"
     style="max-width: 640px; height: 360px;">
</div>
<script src="./assets/p5-sketches/about.js"></script>

```js   
const sketch1 = ( s ) => {

  let x = 100;
  let y = 100;
  let size = 50;
  let c = 0;

  s.setup = () => {
    s.createCanvas(640, 360).parent('sketch');
    s.background(0);
  };

  s.draw = () => {
    if (s.mouseIsPressed) {c = s.random(255); }
    s.fill(c);
    s.noStroke();
    s.circle(s.mouseX, s.mouseY,  size);
  };
};

let box1 = new p5(sketch1);
```


