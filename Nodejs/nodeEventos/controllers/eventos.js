module.exports = function (app) {
    var EventosController = {
        menu: function (request, response) {
            const usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/menu', params);
        }
};
    return EventosController;
};