const http = require('http');

// Crear el servidor
const app = http.createServer((req, res) => {
  res.statusCode = 200; // Código de estado 200 significa que la solicitud fue exitosa
  res.setHeader('Content-Type', 'text/plain'); // El tipo de contenido es texto sin formato
  res.end('Hello Holberton School!'); // Respuesta del servidor
});

// El servidor escucha en el puerto 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Exportar el servidor para que pueda ser utilizado en otros archivos si es necesario
module.exports = app;
