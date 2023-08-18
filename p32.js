// El some() método de Array instancias comprueba si al menos un elemento de la matriz pasa la prueba implementada por la función proporcionada. Devuelve verdadero si, en la matriz, encuentra un elemento para el cual la función proporcionada devuelve verdadero; de lo contrario, devuelve falso. No modifica la matriz.

// Resumen
// Comprueba si alguno de los elementos de una matriz pasa una prueba

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true

const ages = [3, 10, 18, 20];

const checkAdult = (element) => element > 18

console.log(ages.some(checkAdult))

