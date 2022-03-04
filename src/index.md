---
eleventyExcludeFromCollections: true
layout: layouts/default-layout.njk
title: About
---

# About

Hi there, I'm [Carl Vitasa](https://carlvitasa.com/) and welcome to my <mark>cozy corner</mark> in the interwebs. I have <mark>a lot of interests</mark> 

`example code`

```csharp   
int[] arr1 = new int[] { 3, 4, 5 };
int[] arr2 = { 3, 4, 5 };
var arr3 = new int[] { 3, 4, 5 };
var arr4 = new int[3];
```
<div style="max-width: 640px; height: 360px;" class="corner-wrapper">
    <script src="https://unpkg.com/shader-doodle@alpha"></script>
    <shader-doodle shadertoy="shadertoy">
        <script type="x-shader/x-fragment">
            float random(vec2 p) {
                p = fract(p * vec2(123.45, 678.91));
                p += dot(p, p + 23.45);
                return fract(p.x * p.y);
            }
            void mainImage(out vec4 fragColor, in vec2 fragCoord) {
                vec2 uv = (fragCoord - .5 * iResolution.xy) / iResolution.y;
                vec3 pattern = vec3(0);
                float units = 18.;
                vec2 gv = fract(uv * units) - .5;
                vec2 id = floor(uv * units) + .5; // add .5 here to center
                float d = length(gv);
                float minRadius = .2;
                float maxRadius = .4;
                float speed = 10.2;
                float time = iTime * speed;
                float pulseAmount = 3.;
                float radiusTime = sin(random(id) * time) * .5 + .5;
                float radius = mix(minRadius, maxRadius, radiusTime);
                pattern += smoothstep(radius, radius * mix(.4, .7, (radiusTime)), d);
                float t = sin(length(gv - id) - time) * .5 + .5;
                vec3 color = vec3(random(id));
                fragColor = vec4(color * pattern, 1.);
            }
        </script>
    </shader-doodle>
</div>

```glsl
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = (fragCoord - .5 * iResolution.xy) / iResolution.y;
    vec3 pattern = vec3(0);
    float units = 18.;
    vec2 gv = fract(uv * units) - .5;
    vec2 id = floor(uv * units) + .5; // add .5 here to center
    float d = length(gv);
    float minRadius = .2;
    float maxRadius = .4;
    float speed = 10.2;
    float time = iTime * speed;
    float pulseAmount = 3.;
    float radiusTime = sin(random(id) * time) * .5 + .5;
    float radius = mix(minRadius, maxRadius, radiusTime);
    pattern += smoothstep(radius, radius * mix(.4, .7, (radiusTime)), d);
    float t = sin(length(gv - id) - time) * .5 + .5;
    vec3 color = vec3(random(id));
    fragColor = vec4(color * pattern, 1.);
}
```