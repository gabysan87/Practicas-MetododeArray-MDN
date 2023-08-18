// El push() método de Array instancias agrega los elementos especificados al final de una matriz y devuelve la nueva longitud de la matriz.

// Resumen
// Agrega nuevos elementos al final de una matriz y devuelve la nueva longitud

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4

console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon");


console.log(fruits)