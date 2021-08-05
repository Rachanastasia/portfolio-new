require('dotenv').config();
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const fetch = require('node-fetch')
const { PORT } = require('./config')

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

async function getMediumArticles(){
    const url = "https://medium.com/@rachelrly/latest?format=json"
    const test = await fetch(url, { method: 'get', headers: { 'Content-Type': 'application/json' }}).then(r => console.log(JSON.parse(r.body)))
 
    return test
}

app.listen(PORT, () => {
    console.log(`server listening at http://localhost:${PORT}`)
})

module.exports = app;

