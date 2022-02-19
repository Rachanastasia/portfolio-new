const Parser = require('rss-parser')
const { formatBlogPost, MEDIUM_FEED_URL } = require('./config')

async function getBlogPosts() {
  let parser = new Parser()
  const blog = await parser.parseURL(MEDIUM_FEED_URL)
  return blog.map(formatBlogPost)
}

module.exports = { getBlogPosts }
