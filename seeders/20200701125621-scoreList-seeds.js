'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('scoreLists', [
      {
        userId: 1,
        en: 8,
        es: 6,
        de: 0,
        fr: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        en: 4,
        es: 9,
        de: 2,
        fr: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('scoreLists', null, {});
  }
};
