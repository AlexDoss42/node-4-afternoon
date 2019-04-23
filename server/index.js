require('dotenv').config()
const express = require('express');
const session = require('express-session');
const checkForSession = require('./middlewares/checkForSession');
const swagCtrl = require('./controllers/swagController');
const authCtrl = require('./controllers/authController')

const app = express();

let { SERVER_PORT, SESSION_SECRET } = process.env;


app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);
app.use(checkForSession);

app.post('/api/login', authCtrl.login)
app.post('/api/register', authCtrl.register)
app.post('/api/signout', authCtrl.signout)
app.get('/api/user', authCtrl.getUser)

app.get('/api/swag', swagCtrl.read)

app.listen(SERVER_PORT, () => {
  console.log(`It's over Anakin. I have the ${SERVER_PORT} port!`)
})