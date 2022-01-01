const express = require('express');
const NivelAcessoController = require('./controller/NivelAcessoController');
const UsuariosController = require('./controller/UsuariosController');

const routes = express.Router();

/**
 * Criando as rotas de dados
 */

//rota principal 
routes.get('/',(req, res) => {
    return res.json({
        "Autor":"Luiz Gabriel Deganutti",
        "Versão":"1.0.0",
        "Aplicação":"Crud NodeJs com Sequelize e Mysql",
        "Contato":{  
            "E-Mail":"deganutti@outlook.com",
        }
    });
});
//rota de nivel acesso
routes.get('/nivelacesso', NivelAcessoController.index);
routes.post('/nivelacesso', NivelAcessoController.store);
routes.put('/nivelacesso/:id', NivelAcessoController.post);
routes.delete('/nivelacesso/:id', NivelAcessoController.del);

//rota de usuarios
routes.get('/usuarios',UsuariosController.index);
routes.post('/usuarios',UsuariosController.store);
routes.put('/usuarios/:id',UsuariosController.post);
routes.delete('/usuarios/:id',UsuariosController.del);


module.exports = routes;