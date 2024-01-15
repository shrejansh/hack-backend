'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('ideas', 'description', { transaction: t }),
        queryInterface.addColumn('ideas', 'desc', {
          type: Sequelize.DataTypes.TEXT,
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('ideas', 'description', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t }),
        queryInterface.removeColumn('ideas', 'desc', { transaction: t })
      ]);
    });
  }
};