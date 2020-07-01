module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'scoreLists',
      'userId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'scoreLists',
      'userId' 
    );
  }
};