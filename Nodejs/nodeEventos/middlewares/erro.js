exports.notFound = function (_, response, _) {
    response.status(404);
    response.render('erro404');
};
exports.serverError = function (error, _, response, _) {
    response.status(500);
    response.render('erroServidor', { error: error });
};