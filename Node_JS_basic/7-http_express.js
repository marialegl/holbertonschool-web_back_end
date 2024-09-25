const express = require('express');

const app = express();

// Importamos la función countStudents del archivo 3-read_file_async.js
const countStudents = require('./3-read_file_async');

// Puerto
const PORT = 1245;

// Ruta para "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Ruta para "/students"
app.get('/students', (req, res) => {
  const databasePath = process.argv[2]; // Pasamos el archivo de base de datos como argumento

  countStudents(databasePath)
    .then((message) => {
      res.send(`This is the list of our students\n${message}`);
    })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Exportar la app
module.exports = app;
