const redis = require('redis')
const { getMediumArticles } = require('./utils/formatBlogPost.js')

const {
  REDIS_KEYS: { FEED },
  REDIS_CONFIG
} = require('./utils/config')
let Parser = require('rss-parser')
const { FEED_LIMIT } = require('./config')

let parser = new Parser()
async function getMediumArticles() {
  const MEDIUM_FEED = process.env.MEDIUM_FEED
  const feed = await parser.parseURL(MEDIUM_FEED)
  const endPaginatedItems = offset + FEED_LIMIT
  const paginatedItems = feed.items.slice(offset, endPaginatedItems)
  const parsedFeed = paginatedItems.map(parseArticle)
  return parsedFeed
}

async function handleBlogCache() {
  const client = redis.createClient(REDIS_CONFIG)

  client.on('error', (error) => {
    console.error('Error ' + error)
  })

  client.once('ready', function () {
    //client.flushdb()
  })

  if (!client.get(FEED, redis.print)) {
    return getMediumArticles().then((articles) => {
      const articleString = JSON.stringify(articles)
      client.set(FEED, articleString, redis.print)
      return articles
    })
  } else {
    return client.get(FEED, (err, reply) => {
      console.log('THIS IS THE REPLY IN CACHE', reply)
      return JSON.parse(reply)
    })
  }
}

async function handleOffloadMail() {}

module.exports = { handleBlogCache, handleOffloadMail }
