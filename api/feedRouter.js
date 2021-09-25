const express = require('express')
const {handleBlogCache} = require('./redis')
const { CLIENT_URL } = require('./config')

const feedRouter = express.Router()
feedRouter
    .post('/', async (req, res, next) => {
        try {
            const {offset=0} = req.body
            const articles = await handleBlogCache(offset)
            return res
            .set('Access-Control-Allow-Origin', CLIENT_URL)
            .status(200)
            .json(articles)
          } catch (error) {
              const errorMessage = 'Error fetching Medium articles: ' + (error?.message || error)
              if (process.env.NODE_ENV === 'development') console.error(errorMessage)
              return res
              .status(400)
              .set('Access-Control-Allow-Origin', CLIENT_URL)
              .json({message: errorMessage})
          }
    })

module.exports = feedRouter