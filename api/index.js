require('dotenv').config();
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const { PORT } = require('./config')
const {getMediumArticles} = require('./getMediumArticles.js')

const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors())

app.get('/', async (req, res) => {
    try {
      const articles = await getMediumArticles()
      return res.status(200).json(articles)
    } catch (error) {
        const errorMessage = 'Error fetching Medium articles: ' + (error?.message || error)
        if (process.env.NODE_ENV === 'development') console.error(errorMessage)
        return res.status(400).json({message: errorMessage})
    }
})


app.listen(PORT, () => {
    console.log(`server listening at http://localhost:${PORT}`)
})

module.exports = app;

