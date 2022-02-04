'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Financas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        validate: {
          notEmpty: { msg: "Campo data não pode ser vazio" }
        }
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Campo categoria não pode ser vazio" }
        },
        references: {
          model: "Categoria",
          key: "id"
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      titulo: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: { msg: "Campo titulo não pode ser vazio" }
        }
      },
      valor: {
        allowNull: false,
        type: Sequelize.DOUBLE,
        validate: {
          notEmpty: { msg: "Campo valor não pode ser vazio" }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Financas');
  }
};