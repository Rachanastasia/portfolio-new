const { createClient } = require('redis')
const { REDIS_CONFIG, REDIS_KEYS } = require('./utils/config')
const { ERRORS } = require('./utils/errors')
const { getBlogPosts } = require('./utils/getBlogPosts')

const errorCallback = (error) => {
  console.error(`${ERRORS.REDIS} :${error?.message ?? error}`)
}

async function handleBlogService() {
  const client = createClient(REDIS_CONFIG)
  client.on('error', errorCallback)
  try {
    client.connected()
    client.get(REDIS_KEYS.BLOG, async (error, reply) => {
      if (error) {
        const blog = await getBlogPosts()
        client.set(REDIS_KEYS.BLOG, JSON.stringify(blog))
        return client.get(REDIS_KEYS.BLOG, (error, reply) => JSON.parse(reply))
      }
      return JSON.parse(reply)
    })
  } catch (error) {
    errorCallback(error)
    await client.disconnect()
  }
}

module.exports = { handleBlogService }
