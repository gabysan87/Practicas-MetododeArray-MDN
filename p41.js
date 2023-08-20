// El values() método de Array instancias devuelve un nuevo objeto iterador de matriz que itera el valor de cada elemento de la matriz.

const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
