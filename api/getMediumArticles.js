let Parser = require('rss-parser');
let parser = new Parser();

module.exports = {
    getMediumArticles: async () => {
    const url = "https://medium.com/feed/@rachelrly"
    const feed = await parser.parseURL(url)
    // const test = await fetch(url, {encoding: null})
    console.log('THIS IS THE XML', feed)
    return feed
}}