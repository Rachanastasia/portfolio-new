require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const { PORT } = require('./utils/config')
const blogRouter = require('./blogRouter')

const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors())

app.get('/', async (_req, res) => {
  res.status(200).json({ message: 'Hello Endpoint!' })
})

app.use('/api/blog', blogRouter)

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`)
})

module.exports = app
