require('dotenv').config();
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const { PORT, CLIENT_URL } = require('./config')
const {getMediumArticles} = require('./getMediumArticles.js')

const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors())

app.get('/', async (req, res) => {
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


app.listen(PORT, () => {
    console.log(`server listening at http://localhost:${PORT}`)
})

module.exports = app;

