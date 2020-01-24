exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
          tbl.increments();
          tbl.text('name').notNullable().index();
          tbl.text('description');
          tbl.boolean('completed').notNullable().defaultTo(false);
      })
      .createTable('tasks', tbl => {
          tbl.increments();
          tbl.text('description').notNullable().index();
          tbl.text('notes');
          tbl.boolean('completed').notNullable().defaultTo(false);
          tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects').onUpdate('CASCADE').onDelete('CASCADE');
      })
      .createTable('resources', tbl => {
          tbl.increments();
          tbl.text('name').notNullable().index();
          tbl.text('description');
          tbl.unique('name');
      })
      .createTable('projects_resources', tbl => {
          tbl.increments();
          tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects')
          tbl.integer('resources_id').unsigned().notNullable().references('id').inTable('projects')
      })
  };
  
  exports.down = function(knex) {
    return knex.schema    
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
      .dropTableIfExists('tasks')
      .dropTableIfExists('projects_resources')
  };