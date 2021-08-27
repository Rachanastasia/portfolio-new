let Parser = require('rss-parser');
let parser = new Parser();

module.exports = {
    getMediumArticles: async () => {
    const MEDIUM_FEED = process.env.MEDIUM_FEED
    const feed = await parser.parseURL(MEDIUM_FEED)
    const parsedFeed = feed.items.map(parseArticle)
    return parsedFeed
}}

function parseArticle(article){
    const articleBody = article['content:encoded']
    const date = new Date(article.isoDate)
    const dateFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }
    const datePosted = new Intl.DateTimeFormat('en-US', dateFormatOptions).format(date)
    
    return {
        title: article.title,
        link: {href: article.link, title: 'View on Medium'},
        content: articleBody,
        datePosted
    }
}