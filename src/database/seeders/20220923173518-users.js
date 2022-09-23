'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      email: 'john@gmail.com',
      birthday: '1996-03-03',
      balance: 6000,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },
};
