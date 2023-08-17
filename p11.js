// El findLastIndex() método de Array instancias itera la matriz en orden inverso y devuelve el índice del primer elemento que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, se devuelve -1.

const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Penguin')); 
console.log(animals.lastIndexOf('Tiger')); // 1

const array = [2, 5, 9, 2];

console.log(array.lastIndexOf(2)); // 3
console.log(array.lastIndexOf(7)); // -1
console.log(array.lastIndexOf(2, 3)); // 3
console.log(array.lastIndexOf(2, 2)); // 0
console.log(array.lastIndexOf(2, -2)); // 0
console.log(array.lastIndexOf(2, -1)); // 3