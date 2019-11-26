const express = require('express')
const path = require('path')
const load = require('express-load')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const erros = require('./middlewares/erro')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(cookieParser('nodeEventos'))
app.use(expressSession({
  secret: 'nodeEventos',
  resave: false,
  saveUninitialized: true
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

load('models')
  .then('controllers')
  .then('routes')
  .into(app)

app.use(erros.notFound);
app.use(erros.serverError);

app.listen(3000, function(){
  console.log('Aplicação no ar.')
})

module.exports = app