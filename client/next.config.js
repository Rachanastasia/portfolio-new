module.exports = {
    env: {
      API_URL: process.env.NODE_ENV === 'development' 
      ? process.env.DEV_API_URL 
      : process.env.API_URL,
      LOCAL_STORAGE_KEY: process.env.LOCAL_STORAGE_KEY
    },
  }