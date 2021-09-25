const express = require('express')
const createDOMPurify = require('dompurify')
const {JSDOM} = require('jsdom')
const Queue = require('bull')

const mailjet = require ('node-mailjet').connect(process.env.MAILJET_KEY_1, process.env.MAILJET_KEY_2)
const { CLIENT_URL, REDIS_CONFIG, REDIS_KEYS: {MAIL} } = require('./config')
const mailQueue = new Queue(MAIL, { redis: REDIS_CONFIG})


const mailRouter = express.Router()

mailQueue.process(function (job){
    job.progress(42)
    const {name, email, message} = job.data
    console.log('PRENTENDING TO PROCESS')
    //RETURN PROMISE
    throw new Error('Could not process mail')
})

mailRouter
    .post('/',  async (req, res, next) => {
        try {
            const {name, email, message} = sanitizeData(req.body)
            //call func to offload task
            
            if (!name || !email || !message) return res
            .set('Access-Control-Allow-Origin', CLIENT_URL)
            .status(400)
            .json({message: 'Cannot send email without name, email, and message after sanitization'})

            const request = mailjet
            .post("send", {'version': 'v3.1'})
            .request({
            "Messages":[
                {
                "From": {
                    "Email": process.env.EMAIL,
                    "Name": name
                },
                "To": [
                    {
                    "Email": process.env.EMAIL_TEST,
                    "Name": "Rachel Reilly"
                    }
                ],
                "Subject":  `${name} Used Your Contact Form`,
                "TextPart": message,
                "HTMLPart":`
                <h1>Below is an email from the contact form:</h1>
                <p>${message}</p>
                <p>Respond to ${name} at</p> 
                <h3>__${email}__</h3>`
                }
            ]
            })
            request.then((result) => {
                return res
                .set('Access-Control-Allow-Origin', CLIENT_URL)
                .status(200)
                .json({message: 'Email was successfully sent!'})
            })
            .catch((error) => {
                const errorMessage = 'Error sending email: ' + (error?.message || error)
                if (process.env.NODE_ENV === 'development') console.error(errorMessage)
            })
          } catch (error) {
              const errorMessage = 'Error sending email: ' + (error?.message || error)
              if (process.env.NODE_ENV === 'development') console.error(errorMessage)
              return res
              .status(400)
              .set('Access-Control-Allow-Origin', CLIENT_URL)
              .json({message: errorMessage})
          }
    })



function sanitizeData({name, email, message}){
    const window = new JSDOM('').window
    const DOMPurify = createDOMPurify(window)
    const cleanName = DOMPurify.sanitize(name)
    const cleanEmail = DOMPurify.sanitize(email)
    const cleanMessage = DOMPurify.sanitize(message)
    return {
        message: cleanMessage,
        email: cleanEmail,
        name: cleanName
    }
}

module.exports = mailRouter

