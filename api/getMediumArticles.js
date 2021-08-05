let Parser = require('rss-parser');
let parser = new Parser();

module.exports = {
    getMediumArticles: async () => {
    const MEDIUM_FEED = "https://medium.com/feed/@rachelrly"
    const feed = await parser.parseURL(MEDIUM_FEED)
    const parsedFeed = feed.items.map(parseArticle)
    return parsedFeed
}}

function parseArticle(article){
    const articleBody = article['content:encoded']
    const date = new Date(article.isoDate)
    const datePosted = date.toDateString()
    return {
        title: article.title,
        link: article.link,
        content: articleBody,
        datePosted
    }
}