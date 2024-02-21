'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    //addcolumn
    await queryInterface.createTable('saleitem', {
      // shoesId: DataTypes.STRING,
      // size: DataTypes.STRING,
      // quantity: DataTypes.INTEGER,
      // priceOut: DataTypes.DOUBLE,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shoesId: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      priceOut: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('saleitem');
  }
};