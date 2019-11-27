const mongoose = require('mongoose')

global.db = mongoose.connect('mongodb://localhost:27017/neventos', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
)

mongoose.connection.on('connected', function () {
  console.log('=====Conexão estabelecida com sucesso=====');
})
mongoose.connection.on('error', function (err) {
  console.log('=====Ocorreu um erro: ' + err);
})
mongoose.connection.on('disconnected', function () {
  console.log('=====Conexão finalizada=====');
})