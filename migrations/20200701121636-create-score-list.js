'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('scoreLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      en: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      es: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      de: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      fr: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('scoreLists');
  }
};