const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TrunDownService = require('turndown');

function sanitizeMarkdownContent(markdownContent) {
    const turndownService = new TrunDownService();

    // 1. Convert markdown to html
    const convertedHtml = marked.parse(markdownContent);
    // 2. sanitize html
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
    })

    // 3. convert the sanitized html back to markdown
    const sanitizeMarkdown = turndownService.turndown(sanitizedHtml);

    return sanitizeMarkdown;
}

module.exports = sanitizeMarkdownContent;