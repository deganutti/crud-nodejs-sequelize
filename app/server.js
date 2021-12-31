const express = require('express');//servidor que ira manter a conexão
const routes = require('./routes');


require('./database');

//utilizando o express para iniciar o processo.
const app = express();

//faz o uso do JSON de leitura do body
app.use(express.json());

//Rotas
app.use(routes);

/**
 * Porta de conexão
 * Ex: http://localhost:88
 * Ex: http://localhost:80
 */
app.listen(80);