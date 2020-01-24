
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Roll out of bed', notes: 'Must escape bed or you are never truly awake', completed: 'false', project_id: '1'},
        {id: 2, description: 'Make bed', notes: '', completed: 'false', project_id: '1'},
        {id: 3, description: 'Turn on computer', notes: '', completed: 'false', project_id: '2'},
        {id: 4, description: 'Fork and clone sprint project', notes: 'Do it right or you will have a bad time', completed: 'false', project_id: '2'}
      ]);
    });
};
