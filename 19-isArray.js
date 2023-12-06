// El Array.isArray() método estático determina si el valor pasado es un archivo Array.

// Resumen 
// Comprueba si un objeto es una matriz

console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray("[1]"));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false
