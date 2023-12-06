// El entries() método de Array 
// instancias devuelve un nuevo objeto iterador de matriz que contiene los pares clave/valor para cada índice de la matriz.

// Resumen
// Devuelve un objeto de iteración de matriz de par clave/valor

const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}


const fruits = ["Banana", "Orange", "Apple", "Mango"];

for (const [index, element] of fruits.entries()) {
    console.log(index, element);

}

const arr = ["a", "b", "c"];
const iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}

const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]
