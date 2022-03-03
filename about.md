---
eleventyExcludeFromCollections: true
layout: layouts/default-layout.njk
title: About
---
# About

Here you'll find <mark> all my notes, but it's mostly for fun.</mark>

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

Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](/).

<!-- <input type="checkbox" onclick="return false" checked="checked"/> -->

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

### Here is a table

| head1        | head two          | three |
| :----------- | :---------------- | :---- |
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

---

### Here is an unordered list:

-   Item foo
-   Item bar
-   Item baz
-   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://docs.github.com/assets/cb-23923/images/help/repository/branching.png)


```text
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this. 
```

```text
The final element.
```

```js
var x = 24;
```
