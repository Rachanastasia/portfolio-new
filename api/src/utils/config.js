module.exports = {
  PORT: process.env.PORT,
  CLIENT_URL:
    process.env.NODE_ENV === 'production'
      ? [process.env.CLIENT_URL]
      : [process.env.DEV_CLIENT_URL],
  REDIS_CONFIG: process.env.REDIS_URL,
  REDIS_KEYS: {
    BLOG: 'blog'
  },
  MEDIUM_FEED_URL: 'https://www.medium.com/feed/@rachelrly'
}
