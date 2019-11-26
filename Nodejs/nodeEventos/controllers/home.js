module.exports = function (app) {
    var HomeController = {
        index: function (_, res) {
            res.render('home/index')
        },
        login: function(req, res){
            if(req.body && req.body.usuario){
                const usuario = req.body.usuario
                const { nome, senha } = usuario

                if (nome == 'admin' && senha == 'admin') {
                    req.session.usuario = usuario
                    res.redirect('/menu')
                    return
                }
            }
            
            res.redirect('/')
        },
        logout: function(req, res){
            if(req.session){
                req.session.destroy()
            }
            
            res.redirect('/')
        },
        novoUsuario : function(req, res){
            
        }
    }
    return HomeController
};