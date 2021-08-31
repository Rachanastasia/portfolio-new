const express = require('express')
const mailjet = require ('node-mailjet')

const mailRouter = express.Router()
const jsonBodyParser = express.json()
mailjet.connect(process.env.MAILJET_KEY_1, process.env.MAILJET_KEY_2)

mailRouter
    .post('/', jsonBodyParser, async (req, res, next) => {
        try {
            console.log('THIS IS THE REQ BODY', req.body)
            const {name, email, message} = {name: 'TEST', email: process.env.EMAIL_TEST, message:'testing, testing mofos'}
            const request = mailjet
            .post("send", {'version': 'v3.1'})
            .request({
            "Messages":[
                {
                "From": {
                    "Email": email,
                    "Name": name
                },
                "To": [
                    {
                    "Email": process.env.EMAIL,
                    "Name": "Rachel Reilly"
                    }
                ],
                "Subject":  `Rachel, ${name} Reached Out via Your Contact Form`,
                "TextPart": message,
                "CustomID": email
                }
            ]
            })
            request
            .then((result) => {
                console.log(result.body)
                if (result?.ok){
                    return res.status(200).end()
                }
            })
            .catch((err) => {
                console.log(err.statusCode)
            })

          } catch (error) {
              const errorMessage = 'Error fetching Medium articles: ' + (error?.message || error)
              if (process.env.NODE_ENV === 'development') console.error(errorMessage)
              return res
              .status(400)
              .set('Access-Control-Allow-Origin', CLIENT_URL)
              .json({message: errorMessage})
          }
    })

module.exports = feedRouter

