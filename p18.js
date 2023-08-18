// El indexOf() método de Array instancias devuelve el primer índice en el que se puede encontrar un elemento dado en la matriz, o -1 si no está presente.

// Resumen 
// Busca en la matriz un elemento y devuelve su posición

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1