module.exports = function (app) {
    const mongoose = require('mongoose')
    const usuario = mongoose.Schema({
        nome: { type: String, required: true, index: { unique: true } },
        senha: { type: String, required: true }
    })

    return mongoose.model('usuarios', usuario)
};