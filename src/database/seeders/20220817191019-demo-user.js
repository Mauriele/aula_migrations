'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('livros', [
      {
        titulo: "Livro novo",
        quantidade_paginas: 243,
        autor: "jkl",
        ano_lancamento: 2001,
        estoque: 30
      },
      {
        titulo: "Livro dois",
        quantidade_paginas: 254,
        autor: "abc",
        ano_lancamento: 2002,
        estoque: 30
      },
      {
        titulo: "Livro três",
        quantidade_paginas: 256,
        autor: "def",
        ano_lancamento: 2001,
        estoque: 30
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('livros', null, {});
  }
};
