const express = require('express');

const server = express();

server.use(express.json());

const courses = ['FullStack Master', 'Desenvolvimento de Games', 'Viver de Youtube'];

// Return course
server.get('/courses/:index', (req, res) => {
   const { index } = req.params;

   return res.json(courses[index]);
});

// Return all courses
server.get('/courses', (req, res) => {
   return res.json(courses);
});

// Create new course
server.post('/courses', (req, res) => {
   const { name } = req.body;
   courses.push(name);
   return res.json(courses);
});

// Update course
server.put('/courses/:index', (req, res) => {
   const { index } = req.params;
   const { name } = req.body;
   courses[index] = name;
   return res.json(courses);
});

// Delete course
server.delete('/courses/:index', (req, res) => {
   const { index } = req.params;
   courses.splice(index, 1);
   return res.json({ message: 'O curso foi deletado com sucesso!' });
});


server.listen(3000);
