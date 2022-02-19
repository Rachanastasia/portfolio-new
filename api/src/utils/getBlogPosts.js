import Parser from 'rss-parser'
import { formatBlogPost, MEDIUM_FEED_URL } from './utils'

export async function getBlogPosts() {
  let parser = new Parser()
  const blog = await parser.parseURL(MEDIUM_FEED_URL)
  return blog.map(formatBlogPost)
}
