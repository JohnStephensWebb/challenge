
exports.seed = function(knex, Promise) {

  return knex('books').del()
    .then(function () {

      return knex('books').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
