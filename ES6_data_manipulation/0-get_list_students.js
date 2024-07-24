export default function getListStudents(id, firstName, location) {
  return `${firstName}, id: ${id}, in ${location}`
}

console.log([
  { firstName: 'Guillaume', id: 1, location: 'San Francisco' },
  { firstName: 'James', id: 2, location: 'Columbia' },
  { firstName: 'Serena', id: 5, location: 'San Francisco' }
]);
