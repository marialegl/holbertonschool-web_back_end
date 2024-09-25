const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

console.log(countStudents);

// Crear el servidor
const app = http.createServer((req, res) => {
  // Ruta para '/'
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }
  // Ruta para '/students'
  else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    // Llamar a la función countStudents para procesar el archivo CSV
    countStudents(process.argv[2])
      .then((data) => {
        res.end(data); // Enviar la información de los estudiantes como respuesta
      })
      .catch((error) => {
        res.end(error.message); // Enviar el mensaje de error si no se puede cargar la base de datos
      });
  }
  // Manejar rutas no definidas
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

// El servidor escucha en el puerto 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Exportar el servidor para ser usado en otros archivos o pruebas
module.exports = app;
