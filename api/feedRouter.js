const express = require("express");
const Promise = require("bluebird");

const redis = Promise.promisifyAll(require("redis"));

const { getMediumArticles } = require("./getMediumArticles.js");

const {
  REDIS_KEYS: { FEED },
  REDIS_CONFIG,
  CLIENT_URL,
} = require("./config");

const feedRouter = express.Router();

feedRouter.get("/", async (req, res, next) => {
  try {
    const articles = await handleBlogCache();
    return res
      .set("Access-Control-Allow-Origin", CLIENT_URL)
      .status(200)
      .json(articles);
  } catch (error) {
    const errorMessage =
      "Error fetching Medium articles: " + (error?.message || error);
    if (process.env.NODE_ENV === "development") console.error(errorMessage);
    return res
      .status(400)
      .set("Access-Control-Allow-Origin", CLIENT_URL)
      .json({ message: errorMessage });
  }
});

async function handleBlogCache() {
  const client = redis.createClient(REDIS_CONFIG);

  client.on("error", (error) => {
    console.error("Error " + error);
  });

  if (!client.get(FEED, redis.print)) {
    return getMediumArticles().then((articles) => {
      const articleString = JSON.stringify(articles);
      client.set(FEED, articleString, redis.print);
      return articles;
    });
  } else {
    return client.get(FEED, (err, reply) => {
      if (err) throw new Error("Could not get posts from Redis cache: " + err);
      return JSON.parse(reply);
    });
  }
}

module.exports = feedRouter;
