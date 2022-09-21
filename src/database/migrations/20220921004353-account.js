'use strict';

module.exports = {
  async up (queryInterface, Sequelize) { 
    return await queryInterface.createTable('account', { 
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
    saldo: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    debito: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    credito: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    estorno: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    total: {
      type: Sequelize.DOUBLE,
      allowNull: false,
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
    return await queryInterface.dropTable('account');
  }
};
