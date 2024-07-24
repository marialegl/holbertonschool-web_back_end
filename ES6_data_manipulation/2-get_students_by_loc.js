export default function getStudentsByLocation(students, city) {
  const byLocation = students.filter((students) => students.location === city);
  return (byLocation);
}
