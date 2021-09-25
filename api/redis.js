const redis = require('redis')
const {getMediumArticles} = require('./getMediumArticles.js')

const client = redis.createClient(6379, '127.0.0.1')

client.on('error', error => {
    console.error('Error ' + error)
})

const BLOG = 'blog_posts'

async function handleBlogCache(){
    if (!client.get(BLOG, redis.print)){
        getMediumArticles().then(articles => {
            const articleString = JSON.stringify(articles)
            client.set(BLOG, articleString, redis.print)
            return articles
        })
    } else {
        let blogs = client.get(BLOG, redis.print)
        const parsedBlogs = JSON.parse(blogs)
        return parsedBlogs
    }
}

async function handleOffloadMain(){

}

module.exports = {handleBlogCache, handleOffloadMain}


