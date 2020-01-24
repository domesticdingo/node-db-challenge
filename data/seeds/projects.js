
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Wake up', description: 'Hard to do things while asleep.', completed: 'false'},
        {id: 2, name: 'Program sprint challenge', description: 'Fridays have sprint challenges, must complete.', completed: 'false'},
        {id: 3, name: 'Survive', description: 'Hard to do things while dead.', completed: 'false'}
      ]);
    });
};
