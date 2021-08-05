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
        const t = await getMediumArticles()
        res.send(t)
    } catch (error) {
        console.error('Error fetching Medium articles: ', error?.message || error)
    }

})


app.listen(PORT, () => {
    console.log(`server listening at http://localhost:${PORT}`)
})

module.exports = app;

