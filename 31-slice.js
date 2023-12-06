// El slice() método de Array instancias devuelve una copia superficial de una parte de una matriz en un nuevo objeto de matriz seleccionado desde start hasta end ( end no incluido) donde start y end representa el índice de elementos en esa matriz. La matriz original no se modificará.

// Resumen 
// Selecciona una parte de una matriz y devuelve la nueva matriz

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
