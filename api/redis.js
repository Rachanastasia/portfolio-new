const redis = require('redis')

const client = redis.createClient({
    host: 'temp',
    port: 'temp',
    password: 'temp'
})

client.on('error', error => {
    console.log('Error ' + error)
})