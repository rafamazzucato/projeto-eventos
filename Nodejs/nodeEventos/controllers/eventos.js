module.exports = function (app) {
    const EventoModel = app.models.eventos;

    const EventosController = {
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
            EventoModel.find(function (erro, eventos) {
                if (erro) {
                    response.render('/menu');
                } else {
                    const usuario = request.session.usuario
                    const params = { usuario, eventos };
                    response.render('eventos/listaEventos', params);
                }
            });
        },
        novoEvento: function (request, response) {
            const evento = request.body.evento;
            
            if (evento.descricao.trim().length == 0 || evento.data == 'undefined'
                || evento.preco.trim().length == 0) {
                    response.redirect('/cadEvento');
            } else {
                EventoModel.create(evento, function (erro, evento) {
                    if (erro) {
                        response.redirect('/cadEvento');
                    }
                    else {
                        response.redirect('/menu');
            } });
            }
        }
    }
    return EventosController
}