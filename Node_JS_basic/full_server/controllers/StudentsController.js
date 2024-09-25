import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const filePath = process.argv[2]; // Obtener el archivo de la línea de comandos
      const data = await readDatabase(filePath);

      let responseText = 'This is the list of our students\n';
      const fields = Object.keys(data).sort(); // Ordenar campos alfabéticamente

      fields.forEach((field) => {
        responseText += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
      });

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const filePath = process.argv[2];
      const data = await readDatabase(filePath);

      if (data[major]) {
        res.status(200).send(`List: ${data[major].join(', ')}`);
      } else {
        res.status(200).send('List:');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
