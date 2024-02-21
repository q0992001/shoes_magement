'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Shoes.init({
    img: DataTypes.STRING,
    shoesName: DataTypes.STRING,
    brandName: DataTypes.STRING,
    category: DataTypes.STRING,
    color: DataTypes.STRING,
    priceIn: DataTypes.DOUBLE,
    priceOut: DataTypes.DOUBLE,
    des: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Shoes',
  });
  return Shoes;
};