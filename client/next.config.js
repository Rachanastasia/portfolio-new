module.exports = {
  env: {
    API_URL:
      process.env.NODE_ENV === "development"
        ? process.env.DEV_API_URL
        : process.env.API_URL,
    CLIENT_URL: "https://portfolio-staging-rachanastasia.vercel.app/",
  },
};
