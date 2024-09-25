const fs = require('fs');

export default function countStudents(path) {
  try {
    // Leer el archivo de forma sincrónica
    const data = fs.readFileSync(path, 'utf8');

    // Dividir los datos en líneas
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Ignorar líneas vacías

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Extraer el encabezado (primera línea)
    const header = lines[0].split(',');

    // Inicializar los contadores y listas por campo
    const fieldData = {};
    let totalStudents = 0;

    // Procesar cada línea (cada estudiante)
    for (let i = 1; i < lines.length; i += 1) {
      const student = lines[i].split(',');

      if (student.length < header.length) { // Ignorar líneas incompletas
        const firstname = student[0]; // Primer nombre del estudiante
        const field = student[3]; // Campo de estudio

      // Si el campo no está en el objeto, lo inicializamos
      if (!fieldData[field]) {
        fieldData[field] = [];
      }

      // Añadimos el nombre del estudiante al campo correspondiente
      fieldData[field].push(firstname);
      totalStudents += 1;
    }

    // Mostrar el número total de estudiantes
    console.log(`Number of students: ${totalStudents}`);

    // Mostrar la cantidad de estudiantes por campo y sus nombres
    for (const [field, students] of Object.entries(fieldData)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    // Si ocurre algún error al leer el archivo
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
