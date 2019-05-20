
exports.seed = function(knex, Promise) {

  return knex('books').del()
    .then(function () {

      return knex('books').insert([
        
      ]);
    });
};
