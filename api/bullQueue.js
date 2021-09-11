const Queue = require('bull')

const feedQueue = new Queue('fetch feed')
const mailQueue = new Queue('send email')

feedQueue.process(function (job, done){


})

mailQueue.process(function (job, done){

    
})

module.exports = {feedQueue, mailQueue}