const express = require('express');

const Database = require('./data/db-config.js');

const server = express();

server.use(express.json());

//  V ENDPOINTS V

//Get projects +
server.get('/projects', (req, res) => {
    Database('projects')
    .then(proj => res.status(200).json(proj))
    .catch(err => res.status(500).json(err))
})

//Add project +
server.post('/projects', (req, res) => {
    Database('projects').insert(req.body)
        .then(ids => {
            const id = ids[0];

            Database('projects')
                .where({ id })
                .first()
            .then(proj => res.status(201).json(proj))
            .catch(err => res.status(500).json(err))
        })
})

//Get tasks for a project +
server.get('/projects/:id/tasks', (req, res) => {
    const { id } = req.params;

    Database('tasks')
        .join('projects', 'projects.id', 'tasks.project_id')
        .select('tasks.id', 'tasks.description', 'tasks.notes', 'tasks.completed', 'tasks.project_id', 'projects.name', 'projects.description')
    .then(task => res.status(201).json(task))
    .catch(err => res.status(500).json(err))
})

//Add task to a project +
server.post('/projects/:id/tasks', (req, res) => {
    Database('tasks').insert(req.body)
        .then(ids => {
            const id = ids[0];

            Database('tasks')
                .where({ id })
                .first()
            .then(task => res.status(201).json(task))
            .catch(err => res.status(500).json(err))
        })
})

//Get resources +
server.get('/resources', (req, res) => {
    Database('resources')
        .then(resource => res.status(200).json(resource))
        .catch(err => res.status(500).json(err))
})

//Add a resource +
server.post('/resources', (req, res) => {
    Database('resources').insert(req.body)
        .then(ids => {
            const id = ids[0];

            Database('resources')
                .where({ id })
                .first()
            .then(resource => res.status(201).json(resource))
            .catch(err => res.status(500).json(err))
        })
})

module.exports = server;