let Parser = require('rss-parser');
const { FEED_LIMIT } = require('./config')

let parser = new Parser();

module.exports = {
    getMediumArticles: async (offset=0) => {
    const MEDIUM_FEED = process.env.MEDIUM_FEED
    const feed = await parser.parseURL(MEDIUM_FEED)
    const endPaginatedItems = offset + FEED_LIMIT
    const paginatedItems = feed.items.slice(offset, endPaginatedItems)
    const parsedFeed = paginatedItems.map(parseArticle)
    return parsedFeed
}}

function parseArticle(article){
    const articleBody = article['content:encoded']
    //to preserve semantic html of client
    const semanticArticleBody = articleBody.replace(/h3/g, 'h4')
    const date = new Date(article.isoDate)
    const dateFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    const datePosted = new Intl.DateTimeFormat('en-US', dateFormatOptions).format(date)
    return {
        title: article.title,
        link: {href: article.link, title: 'View on Medium'},
        content: semanticArticleBody,
        datePosted
    }
}