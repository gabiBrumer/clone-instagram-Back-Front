'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
        id: {
          type: Sequelize.DataTypes.INTEGER(10),
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },

        email: {
          type: Sequelize.DataTypes.STRING(200),
          allowNull: false,
          unique: true
        },
        name: {
          type: Sequelize.DataTypes.STRING(200),
          allowNull: false,
        },
        password: {
          type: Sequelize.DataTypes.STRING(256),
          allowNull: false
        },

        username: {
          type: Sequelize.DataTypes.STRING(200),
          allowNull: false,
        },

        avatar: {
          type: Sequelize.DataTypes.STRING(200),
          allowNull: true
        },

        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,

    });
    
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.dropTable('users');
    
  }
};