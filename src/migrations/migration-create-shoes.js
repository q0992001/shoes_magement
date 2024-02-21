'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    //addcolumn
    await queryInterface.createTable('shoes', {
    // shoesName: DataTypes.STRING,
    // brandName: DataTypes.STRING,
    // category: DataTypes.STRING,
    // color: DataTypes.STRING,
    // priceIn: DataTypes.DOUBLE,
    // priceOut: DataTypes.DOUBLE,
    // des: DataTypes.STRING
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      img: {
        type: Sequelize.STRING
      },
      shoesName: {
        type: Sequelize.STRING
      },
      brandName: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      priceIn: {
        type: Sequelize.DOUBLE
      },
      priceOut: {
        type: Sequelize.DOUBLE
      },
      des: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('shoes');
  }
};