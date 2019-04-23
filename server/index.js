require('dotenv').config()
const express = require('express')
const session = require('express-session')
const checkForSession = require('./middlewares/checkForSession')

const { SERVER_PORT, SESSION_SECRET } = process.env

app.use(express.json())
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(checkForSession)


app.listen(SERVER_PORT, () => {
  console.log(`It's over Anakin. I have the ${SERVER_PORT} port!`)
})