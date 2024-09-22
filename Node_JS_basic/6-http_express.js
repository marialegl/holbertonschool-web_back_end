const express = require('express');
const app = express();
const PORT = 1245;

// Definir la ruta principal
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Exportar la aplicación
module.exports = app;
