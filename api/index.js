require('dotenv').config();
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const { PORT, CLIENT_URL } = require('./config')
const feedRouter = require('./feedRouter')
const mainRouter = require('./mailRouter')

const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors())

app.get('/', async (req, res) => {
   
})

app.use('/api/feed', feedRouter)
app.use('/api/mail', mailRouter)

app.listen(PORT, () => {
    console.log(`server listening at http://localhost:${PORT}`)
})

module.exports = app;

