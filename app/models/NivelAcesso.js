const { Sequelize, Model, DataTypes } = require('sequelize');

class Nivel_Acesso extends Model {
  static init(sequelize) {
    super.init(
      {
      //  id_nivel_acesso: DataTypes.INTEGER,
        descricao: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Nivel_Acesso; //deve estar igual ao nome da tabela do banco de dados, não pode estar diferente.
