module.exports = function (app) {
    var mongoose = require('mongoose');
    var evento = mongoose.Schema({
        descricao: { type: String, required: true },
        data: { type: Date },
        preco: { type: Number }
    });
    return mongoose.model('eventos', evento);
};