module.exports = {
    env: {
      API_URL: process.env.NODE_ENV === 'development' 
      ? process.env.DEV_API_URL 
      : process.env.API_URL
    },
  }