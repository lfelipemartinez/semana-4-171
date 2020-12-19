'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articulos', [{
        codigo: '1234',
        nombre: 'Articulo_test',
        createdAt: new Date(),
        updatedAt: new Date()

    }]);
  },

  down: async(queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Articulos', null, {});
  }
};
