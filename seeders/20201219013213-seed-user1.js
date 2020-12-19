'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [{
        nombre: 'jeronimo',
        email: 'jero@gmail.com',
        password: '$2y$12$OR9PHI8EUDFkoc5LyV1yM.C6k5PcOuZ82en3qw9FEEnzvwYlsEDF6',
        rol: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
    }]);
  },

  down: async(queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
