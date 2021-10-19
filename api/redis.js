const redis = require('redis')
const {getMediumArticles} = require('./getMediumArticles.js')

const { REDIS_KEYS: {FEED}, REDIS_CONFIG } = require('./config')





async function handleBlogCache(){
    const client = redis.createClient(REDIS_CONFIG)
    
    client.on('error', error => {
        console.error('Error ' + error)
    })

    client.once('ready', function (){
        //client.flushdb()
    })
    
    if (!client.get(FEED, redis.print)){
       return getMediumArticles().then(articles => {
            const articleString = JSON.stringify(articles)
            client.set(FEED, articleString, redis.print)
            return articles
        })
    } else {
        return client.get(FEED, (err, reply) => {
            console.log('THIS IS THE REPLY IN CACHE', reply)
            return JSON.parse(reply)
        })
    }
}

async function handleOffloadMail(){

}

module.exports = {handleBlogCache, handleOffloadMail}


