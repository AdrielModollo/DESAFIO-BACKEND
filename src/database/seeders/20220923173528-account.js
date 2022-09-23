'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('accounts', [{
      user_id: 1,
      debit: 350,
      credit: 1000,
      estorn: 500,
      total: 7850,
      created_at: new Date(),
      updated_at: new Date()
    }], {});

  },
};
