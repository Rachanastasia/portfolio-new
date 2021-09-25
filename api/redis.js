const redis = require('redis')
const Queue = require('bull')
const {getMediumArticles} = require('./getMediumArticles.js')

const BLOG = 'blog_posts'
const MAIL = 'send_mail'

const client = redis.createClient(6379, '127.0.0.1')
const mailQueue = new Queue(MAIL, { redis: { port: 6379, host: '127.0.0.1'} })

client.on('error', error => {
    console.error('Error ' + error)
})

mailQueue.process(function (job, done){
    job.progress(42)
    console.log('PRENTENDING TO PROCESS')
    done()
    throw new Error('Could not process mail')
})


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


