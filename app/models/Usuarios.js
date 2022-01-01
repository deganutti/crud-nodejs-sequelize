const {Sequelize, Model, DataTypes} = require('sequelize');

class Usuarios extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
        },{
            sequelize
        });
    }
    static associate(models){
        this.belongsTo(models.Nivel_Acesso,{
            foreignKey:'id_nivel_acesso',
            as:'nivel_acesso'
        });
    }
}

module.exports = Usuarios;