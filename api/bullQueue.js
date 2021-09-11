let REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379'
const Queue = require('bull')

const feedQueue = new Queue('fetch feed', REDIS_URL)
const mailQueue = new Queue('send email', REDIS_URL)

feedQueue.process(function (job, done){


})

mailQueue.process(function (job, done){

    
})

module.exports = {feedQueue, mailQueue}