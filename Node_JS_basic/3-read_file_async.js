const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== ''); // Ignorar líneas vacías

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const header = lines[0].split(',');
    const fieldData = {};
    let totalStudents = 0;

    for (let i = 1; i < lines.length; i++) {
      const student = lines[i].split(',');

      if (student.length < header.length) continue; // Ignorar líneas incompletas

      const firstname = student[0]; // Primer nombre del estudiante
      const field = student[3]; // Campo de estudio

      if (!fieldData[field]) {
        fieldData[field] = [];
      }

      fieldData[field].push(firstname);
      totalStudents++;
    }

    // Crear el mensaje que será retornado
    let result = `Number of students: ${totalStudents}\n`;
    for (const [field, students] of Object.entries(fieldData)) {
      result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }

    // Retornar el mensaje
    return result.trim();  // `trim()` para eliminar el último salto de línea
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
