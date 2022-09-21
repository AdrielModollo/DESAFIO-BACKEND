'use strict';

module.exports = {
  async up (queryInterface, Sequelize) { 
    return await queryInterface.createTable('accounts', { 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    debit: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    credit: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    estorn: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    total: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('accounts');
  }
};
