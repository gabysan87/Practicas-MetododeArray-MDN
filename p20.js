// El join() método de Array instancias crea y devuelve una nueva cadena concatenando todos los elementos de esta matriz, separados por comas o una cadena de separación especificada. Si la matriz tiene solo un elemento, ese elemento se devolverá sin usar el separador.

// Resumen
// Une todos los elementos de una matriz en una cadena

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"


const fruits = ["Banana", "Orange", "Apple", "Mango"];


console.log(fruits.join(" and "))