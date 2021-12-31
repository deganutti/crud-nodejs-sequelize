const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Nivel_Acesso = require('../models/NivelAcesso');
const Usuarios = require('../models/Usuarios');

const connection = new Sequelize(dbConfig);

Nivel_Acesso.init(connection);
Usuarios.init(connection);

Usuarios.associate(connection.models);



module.exports = connection;