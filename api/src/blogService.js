const { createClient } = require('redis')
const { REDIS_KEYS, REDIS_CONFIG } = require('./utils/config')
const { ERRORS } = require('./utils/errors')
const { getBlogPosts } = require('./utils/getBlogPosts')

const errorCallback = (error) => {
  console.error(`${ERRORS.REDIS} :${error}`)
}

async function handleBlogService() {
  const client = createClient()
  client.on('error', errorCallback)
  try {
    await client.connect()

    const cache = await client.get(REDIS_KEYS.BLOG)
    const blog = await getBlogPosts()
    await client.set(REDIS_KEYS.BLOG, JSON.stringify(blog))
    return blog
  } catch (error) {
    errorCallback(error)
    client.quit()
  }
}

module.exports = { handleBlogService }
