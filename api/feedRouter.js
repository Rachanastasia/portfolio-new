const express = require('express')
const {getMediumArticles} = require('./getMediumArticles.js')
const { CLIENT_URL } = require('./config')

const feedRouter = express.Router()

feedRouter
    .get('/', async (req, res, next) => {
        try {
            const articles = await getMediumArticles()
            // FOR TESTING, PAGINATE INSTEAD OF RETURNING ALL ARTICLES!!!
            const PAGINATE_ME = articles.slice(0, 3)
            return res
            .status(200)
            .set('Access-Control-Allow-Origin', CLIENT_URL)
            .json(PAGINATE_ME)
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