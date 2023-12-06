//  El every() 
//  método de Array instancias comprueba si todos los elementos de la matriz pasan la prueba implementada por la función proporcionada. Devuelve un valor booleano.

// Resumen
// Comprueba si todos los elementos de una matriz pasan una prueba

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
