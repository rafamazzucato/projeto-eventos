var express = require('express')
var path = require('path')
var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, function(){
  console.log('Aplicação no ar.')
})

module.exports = app