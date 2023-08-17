// El método estático crea una nueva instancia Array.from() de copia superficial a partir de un objeto iterable o similar a una matriz .Array

// // Resumen
// Crea una matriz a partir de un objeto.

console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]
