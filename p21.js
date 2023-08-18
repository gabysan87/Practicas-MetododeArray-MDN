// El keys() método de Array instancias devuelve un nuevo objeto iterador de matriz que contiene las claves para cada índice de la matriz.

// Resumen
// Devuelve un objeto de iteración de matriz que contiene las claves de la matriz original

const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2
