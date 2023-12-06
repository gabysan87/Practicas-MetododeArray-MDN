// El metodo de array fill() 
//  instancias cambia todos los elementos dentro de un rango de índices en una matriz a un valor estático. Devuelve la matriz modificada.

// Resumen
// Rellene los elementos en una matriz con un valor estático

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Rellene todos los elementos con un valor:
console.log(fruits.fill("Kiwi"))


// Rellena los dos últimos elementos:
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits1.fill("Kiwi", 2, 4))


const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
// Rellenar con 0 desde la posición 2 hasta la posición 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
// Rellena con 5 desde la posición 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
