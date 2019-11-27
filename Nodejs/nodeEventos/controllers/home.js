module.exports = function (app) {

    const Usuarios = app.models.usuarios

    var HomeController = {
        index: function (_, res) {
            res.render('home/index')
        },
        login: function(req, res){
            if(req.body && req.body.usuario){
                const usuario = req.body.usuario
                const { nome, senha } = usuario

                const query = { 'nome': nome, 'senha': senha }

                Usuarios.findOne(query)
                    .select('nome senha')
                    .exec(function (erro, usuario) {
                        if (erro) {
                            console.log(erro)
                            res.redirect('/')
                        }
                        else {
                            req.session.usuario = usuario
                            res.redirect('/menu')
                        }
                })
            }else{
                res.redirect('/')
            }
        },
        logout: function(req, res){
            if(req.session){
                req.session.destroy()
            }
            
            res.redirect('/')
        },
        novoUsuario : function(req, res){
            if(req.body && req.body.usuario){
                const {nome, senha, confirma} = req.body.usuario

                if ((senha == confirma) && nome.trim().length > 0) {
                    var usuario = req.body.usuario;
                    
                    Usuarios.create(usuario, function (erro, usuario) {
                        if(erro){
                            res.redirect('/')
                        }
                        else {
                            res.redirect('/menu')
                        }
                    }); 
                }
            }else{
                res.redirect('/')
            }
        }
    }
    return HomeController
};