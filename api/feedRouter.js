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
feedRouter.post("/", async (req, res, next) => {
  try {
    let client = "";
    const articles = await handleBlogCache();
    console.log("THESE ARE MY ARTICLES", { articles });
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

module.exports = feedRouter;

async function handleBlogCache() {
  const client = redis.createClient(REDIS_CONFIG);

  client.on("error", (error) => {
    console.error("Error " + error);
  });

  client.once("ready", function () {
    //client.flushdb()
  });

  if (!client.get(FEED, redis.print)) {
    return getMediumArticles().then((articles) => {
      const articleString = JSON.stringify(articles);
      client.set(FEED, articleString, redis.print);
      return articles;
    });
  } else {
    return client.get(FEED, (err, reply) => {
      console.log("THIS IS THE REPLY IN CACHE", reply);
      return JSON.parse(reply);
    });
  }
}
