const { createClient } = require('redis')
const { REDIS_KEYS, REDIS_CONFIG } = require('./utils/config')
const { ERRORS } = require('./utils/errors')
const { getBlogPosts } = require('./utils/getBlogPosts')

const errorCallback = (error) => {
  console.error(`${ERRORS.REDIS} :${error}`)
}

async function handleBlogService() {
  const client = createClient({ url: REDIS_CONFIG })
  client.on('error', errorCallback)
  try {
    await client.connect()
    const cache = await client.get(REDIS_KEYS.BLOG)
    if (cache.length) {
      return JSON.parse(cache)
    }
    const blog = await getBlogPosts()
    await client.set(REDIS_KEYS.BLOG, JSON.stringify(blog))
    return JSON.parse(await client.get(REDIS_KEYS.BLOG))
  } catch (error) {
    errorCallback(error)
    client.quit()
  }
}

module.exports = { handleBlogService }
