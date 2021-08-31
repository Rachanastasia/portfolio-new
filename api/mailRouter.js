const express = require('express')
const mailjet = require ('node-mailjet')

const {getMediumArticles} = require('./getMediumArticles.js')

const mailRouter = express.Router()
mailjet.connect(process.env.MAILJET_KEY_1, process.env.MAILJET_KEY_2)

mailRouter
    .get('/', async (req, res, next) => {
        try {
            const articles = await getMediumArticles()
            // FOR TESTING, PAGINATE INSTEAD OF RETURNING ALL ARTICLES!!!
            const PAGINATE_ME = articles.slice(0, 3)
            return res
            .status(200)
            .set('Access-Control-Allow-Origin', CLIENT_URL)
            .json(PAGINATE_ME)
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
  })
  .catch((err) => {
    console.log(err.statusCode)
  })