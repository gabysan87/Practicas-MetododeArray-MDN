// El map() método de Array instancias crea una nueva matriz que se completa con los resultados de llamar a una función proporcionada en cada elemento de la matriz que llama.

// Resumen
// Crea una nueva matriz con el resultado de llamar a una función para cada elemento de la matriz

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]


const numbers = [65, 44, 12, 4];
const newArr = numbers.map((x) => x * 10)

console.log(newArr)