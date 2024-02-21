
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    //addcolumn
    await queryInterface.createTable('status', {
      // statusId: DataTypes.STRING,
      // shoesId: DataTypes.INTEGER,
      // customerId: DataTypes.INTEGER,
      // date: DataTypes.DATE,
      // timeType: DataTypes.STRING
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      statusId: {
        type: Sequelize.STRING
      },
      shoesId: {
        type: Sequelize.INTEGER
      },
      customerId: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      timeType: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('status');
  }
};