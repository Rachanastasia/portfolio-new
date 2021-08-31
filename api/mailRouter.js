const express = require('express')
const mailjet = require ('node-mailjet').connect(process.env.MAILJET_KEY_1, process.env.MAILJET_KEY_2)
const { CLIENT_URL } = require('./config')

const mailRouter = express.Router()

mailRouter
    .post('/',  async (req, res, next) => {
        try {
            const {name, message, email} = req.body
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
                "Subject":  `Someone Used Your Contact Form`,
                "TextPart": message,
                "HTMLPart":`
                <h1>Below is an email from the contact form on rachelrly.com</h1>
                <p>${message}</p>
                <p>Respond to ${name} at ${email}.</p>`
                }
            ]
            })
            request.then((result) => {
                return res.status(200).json({message: 'Email was successfully sent!'})
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

module.exports = mailRouter

