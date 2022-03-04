const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const moment = require('moment');

moment.locale('en');
const markdownIt = require("markdown-it");

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

    eleventyConfig.addPairedShortcode("myShortcode", function (content) {
        return content;
    });

    const md = new markdownIt({
        html: true
    });

    eleventyConfig.addPairedShortcode("markdown", (content) => {
        return md.render(content);
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
