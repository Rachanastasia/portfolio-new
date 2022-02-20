const Parser = require('rss-parser')
const { MEDIUM_FEED_URL } = require('./config')
const { formatBlogPost } = require('./formatBlogPost')

async function getBlogPosts() {
  let parser = new Parser({ timeout: 10000 })
  const posts = await parser.parseURL(MEDIUM_FEED_URL)
  return posts.items.map(formatBlogPost)
}

module.exports = { getBlogPosts }
