const redis = require('redis')
const {getMediumArticles} = require('./getMediumArticles.js')

const { REDIS_KEYS: {FEED}, REDIS_CONFIG } = require('./config')

const client = redis.createClient(REDIS_CONFIG)

client.on('error', error => {
    console.error('Error ' + error)
})


async function handleBlogCache(){
    if (!client.get(FEED, redis.print)){
        getMediumArticles().then(articles => {
            const articleString = JSON.stringify(articles)
            client.set(FEED, articleString, redis.print)
            return articles
        })
    } else {
        let blogs = client.get(FEED, redis.print)
        const parsedBlogs = JSON.parse(blogs)
        return parsedBlogs
    }
}

async function handleOffloadMail(){

}

module.exports = {handleBlogCache, handleOffloadMail}


