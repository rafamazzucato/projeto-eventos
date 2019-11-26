module.exports = function (app) {
    var EventosController = {
        menu: function (request, response) {
            const usuario = request.session.usuario
            response.render('eventos/menu', { usuario })
        },
        cadastroUsuario: function (request, response) {
            const usuario = request.session.usuario
            response.render('eventos/cadUsuario', { usuario })
        },
        cadastroEvento: function (request, response) {
            const usuario = request.session.usuario
            response.render('eventos/cadEvento', { usuario })
        },
        listaEventos: function (request, response) {
            const usuario = request.session.usuario
            response.render('eventos/listaEventos', { usuario })
        }
    }
    return EventosController
}