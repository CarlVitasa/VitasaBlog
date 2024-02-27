const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const moment = require('moment');
const md = new markdownIt({ html: true });
moment.locale('en');

// extracting code from a file
const { readFileSync } = require("fs");
const SOURCE_DIR = "src"
const P5_SKETCHES_DIR = "/assets/p5-sketches/";

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addWatchTarget('./src/assets');
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addFilter('dateIso', date => {
        return moment(date).toISOString();
    });

    eleventyConfig.addFilter('dateReadable', date => {
        return moment(date).utc().format('YYYY MMM DD').toUpperCase(); // e.g. 2020 JUL 07
    });

    eleventyConfig.addPairedShortcode("markdown", (content) => {
        return md.render(content);
    });

    eleventyConfig.addShortcode("renderSketch", (sketchId, filename, touch = false) => {
        let result = `<div id=\"${sketchId}\" class=\"corner-wrapper\"></div>
        <script src =\"${P5_SKETCHES_DIR + filename}\"></script>`

        if (touch) {
            return result;
        } else {
            return result += `<script>document.getElementById('${sketchId}').addEventListener('touchstart', function (event) { event.preventDefault() });</script>`;
        }
    });

    eleventyConfig.addShortcode("getCode", (filename) => {
        const code = readFileSync(SOURCE_DIR + P5_SKETCHES_DIR + filename).toString();
        return "\n\`\`\`js\n" + code + "\n\`\`\`\n";
    });

    eleventyConfig.addShortcode("openNewTab", (text, link) => {
        return `<a href=\"${link}\" target=\"_blank\">${text}</a>`;
    });

    eleventyConfig.addShortcode("youtube", (link) => {
        const embedCode = link.replace("watch?v=", "embed/");
        return `<div class=\"video-container\"><iframe width=\"560\" height=\"315\" src=\"${embedCode}\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay=0; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>`;
    });

    return {
        dir: {
            input: "src",
            output: "dist",
        },
        templateFormats: ["md", "njk", "html",],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
