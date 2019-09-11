const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')

const app = express()

// for security
app.use(helmet())

// panggil package dotenv dan config dari .env files
const dotenv = require('dotenv').config();

// Parse the body request to json
app.use(bodyParser.json())

// panggil route pada routes/index.js
const router = require('./routes')
router(app)

// Default Error Fallback
app.use(( error , req, res, next) => {
	return res.status(422).send({ status: {
        code: 422,
        message: error.message,
        succeeded: false
    }});
});

// jalankan nodejs pada port dan nama sesuai dengan file .env
app.listen(process.env.PORT, () => {
    console.log('server running in ', process.env.APP_NAME ,'at', process.env.PORT)
})