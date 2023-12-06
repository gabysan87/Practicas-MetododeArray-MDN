// El shift() método de Array instancias elimina el primer elemento de una matriz y devuelve ese elemento eliminado. Este método cambia la longitud de la matriz.

// Resumen
// Elimina el primer elemento de una matriz y devuelve ese elemento


const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.shift())