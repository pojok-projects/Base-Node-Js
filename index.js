const express = require('express')

const app = express()

// panggil package dotenv dan config dari .env files
const dotenv = require('dotenv').config();

// panggil route pada routes/index.js
const router = require('./routes')
router(app)

// jalankan nodejs pada port dan nama sesuai dengan file .env
app.listen(process.env.PORT, () => {
    console.log('server running in ', process.env.APP_NAME ,'at', process.env.PORT)
})