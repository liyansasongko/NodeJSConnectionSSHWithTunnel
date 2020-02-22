'use strict'
const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const PORT = process.env.PORT || '8001'

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => {
    res.send({message: "Welcome to APP"})
})
require('./src/routes/blogs.route') (app)

app.listen(PORT, () => {
    console.log("Server listening on port "+PORT)
})