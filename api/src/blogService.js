import { createClient } from 'redis'
import { REDIS_CONFIG, ERRORS, REDIS_KEYS, getBlogPosts } from './utils'

const errorCallback = (error) => {
  console.error(`${ERRORS.REDIS} :${error?.message ?? error}`)
}

export async function handleBlogService() {
  const client = createClient(REDIS_CONFIG)
  client.on('error', errorCallback)
  try {
    client.connected()
    client.get(REDIS_KEYS.BLOG, (error, reply) => {
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
