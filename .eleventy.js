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
    eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "/favicon.ico" });
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

    eleventyConfig.addShortcode("renderSketch", (sketchId, filename, interactable = false) => {
        let result = `<div id=\"${sketchId}\" class=\"corner-wrapper\"></div>
        <script src =\"${P5_SKETCHES_DIR + filename}\"></script>`

        if (interactable) {
            return result += `<script>document.getElementById('${sketchId}').addEventListener('touchstart', function (event) { event.preventDefault() });</script>`;
        } else {
            return result;
        }
    });

    eleventyConfig.addShortcode("getCode", (filename) => {
        const code = readFileSync(SOURCE_DIR + P5_SKETCHES_DIR + filename).toString();
        return "\n\`\`\`js\n" + code + "\n\`\`\`\n";
    });

    eleventyConfig.addShortcode("openNewTab", (text, link) => {
        return `<a href=\"${link}\" target=\"_blank\">${text}</a>`;
    });

    // Function to extract video ID from YouTube URL
    function extractVideoID(link) {
        try {
            const url = new URL(link);
            if (url.hostname === 'youtu.be') {
                return url.pathname.slice(1);
            } else if (url.hostname.includes('youtube.com')) {
                return url.searchParams.get('v');
            }
        } catch (e) {
            console.error('Invalid YouTube URL:', link);
        }
        return null;
    }

    eleventyConfig.addShortcode("youtube", (link) => {
        const videoId = extractVideoID(link);
        if (!videoId) {
            return `<p>Error: Invalid YouTube URL.</p>`;
        }
        return `<lite-youtube videoid="${videoId}"></lite-youtube>`;
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
