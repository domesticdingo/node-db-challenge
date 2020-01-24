
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Computer', description: 'A computer may be needed for some tasks.'},
        {id: 2, name: 'Snacks', description: 'The human brain uses 20% of your caloric intake, fuel is required.'},
        {id: 3, name: 'Dog', description: 'Provides moral and emotional support.'}
      ]);
    });
};
