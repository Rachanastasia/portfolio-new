module.exports = {
  PORT: process.env.PORT,
  CLIENT_URL:
    process.env.NODE_ENV === 'production'
      ? process.env.CLIENT_URL
      : process.env.DEV_CLIENT_URL,
  FEED_LIMIT: 5,
  REDIS_CONFIG:
    process.env.NODE_ENV === 'production'
      ? process.env.REDIS_URL
      : {
          port: process.env.REDIS_PORT,
          host: process.env.REDIS_HOST
        },
  REDIS_KEYS: {
    BLOG: 'blog'
  }
}
