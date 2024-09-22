console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (input) => {
  // Eliminar espacios y saltos de línea
  const name = input.trim();
  console.log(`Your name is: ${name}\n`);

  process.stdin.end();
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
