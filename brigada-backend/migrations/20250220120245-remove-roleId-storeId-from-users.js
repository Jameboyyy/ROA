'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'roleId');
    await queryInterface.removeColumn('Users', 'storeId');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'roleId', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id'
      },
      onDelete: 'SET NULL'
    });
    await queryInterface.addColumn('Users', 'storeId', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Stores',
        key: 'id'
      },
      onDelete: 'CASCADE'
    });
  }
};
