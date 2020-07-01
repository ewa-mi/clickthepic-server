"use strict";
module.exports = (sequelize, DataTypes) => {
  const card = sequelize.define(
    "card",
    {
      word: DataTypes.STRING,
      language: DataTypes.STRING,
      category: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {}
  );
  card.associate = function (models) {
    //none
  };
  return card;
};
