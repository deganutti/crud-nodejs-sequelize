'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable("pessoa", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      razao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fantasia:{
        type: Sequelize.STRING,
        allowNull: false
      },
      ie:{
        type: Sequelize.STRING,
        allowNull:false
      },
      cnpj:{
        type: Sequelize.STRING,
        allowNull:false
      },
      id_tipo_pessoa:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tipo_pessoa',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('pessoa');
  }
};
