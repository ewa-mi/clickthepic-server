'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class scoreList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      scoreList.belongsTo(models.user)
    }
  };
  scoreList.init({
    userId: DataTypes.INTEGER,
    en: DataTypes.INTEGER,
    es: DataTypes.INTEGER,
    de: DataTypes.INTEGER,
    fr: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'scoreList',
  });
  return scoreList;
};