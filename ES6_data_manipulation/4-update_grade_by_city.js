export default function updateStudentGradeByCity(students, city, newGrades) {
  const filtredStudents = students.filter((students) => students.location === city);
  const updateStudents = filtredStudents.map((student) => {
    const foundGrade = newGrades.find((grade) => grade.studentId === student.id);

    if (foundGrade) {
      // Si se encuentra la calificación, actualizarla
      return {
        ...student,
        grade: foundGrade.grade,
      };
    }
    // Si no se encuentra la calificación, asignar 'N/A'
    return {
      ...student,
      grade: 'N/A',
    };
  });
  // Retornar el array actualizado de estudiantes con calificaciones
  return updateStudents;
}
