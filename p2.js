// El concat() 
// método de Array instancias se utiliza para fusionar dos o más matrices. Este método no cambia las matrices existentes, sino que devuelve una nueva matriz.
// Une matrices y devuelve una matriz con las matrices unidas

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]