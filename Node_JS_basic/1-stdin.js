console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (input) => {
  // Normalizar el input para eliminar saltos de línea en diferentes plataformas
  const name = input.replace(/(\r\n|\n|\r)/gm, '').trim();
  console.log(`Your name is: ${name}\r`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
  process.exit(); // Finalizar el proceso de forma correcta
});
