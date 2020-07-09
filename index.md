---
eleventyExcludeFromCollections: true
layout: default-layout.njk
title: Carl Vitasa's Blog
---



> Adapt what is useful, reject what is useless, and add what is specifically your own.
> <br> <small>Bruce Lee</small>

<div class="p5js-container">
<iframe style="width: 868px; height: 200px; scrolling="no"; src="https://editor.p5js.org/CarlVitasa/embed/oG7PAiEe3"></iframe>
</div>

<iframe style="width: 640px; height: 360px; overflow: hidden;"  scrolling="no" frameborder="0" src="https://editor.p5js.org/embed/B1j5yC2vQ"></iframe>


---

### sketch.js

```javascript
let recs = [];
let total = 0;
let xLength = 5;
let yLength = 100;
let passes = 4;
let spread = 0.1;
let screenWidth = 900;
let screenHeight = 200;

function setup() { 
  createCanvas(screenWidth, screenHeight);
  total = screenWidth/xLength;
  for (let i = 1; i < total + 1; i++) {
    let center = width / 2;
    let totalWidthHalved = (xLength * total / 2);
    let offset = (center - totalWidthHalved - xLength / 2);
    recs[i] = new Rectangle(offset + i * xLength, xLength, yLength);
  }
}


function draw() {
  background("#ffffff");
  translate(0, height); // moves the origin
  scale(1, -1); // flip y value so y is up

  for (let i = 1; i < total + 1; i++) {
    recs[i].draw();
  }
  for (let j = 0; j < passes; j++) {
    for (let i = 1; i < total + 1; i++) {
      if (i > 1) {
        recs[i].leftDelta = spread * (recs[i].currentHeight - recs[i-1].currentHeight);
        recs[i-1].speed += recs[i].leftDelta;
      }
      if (i < total ) {
        recs[i].rightDelta = spread * (recs[i].currentHeight - recs[i+1].currentHeight);
        recs[i+1].speed += recs[i].rightDelta;
      }
    }
  }
  for (let i = 1; i < total; i++) {
    if (i > 1) recs[i-1].currentHeight += recs[i].leftDelta;
    if (i < total) recs[i+1].currentHeight += recs[i].rightDelta;
  }
}
```