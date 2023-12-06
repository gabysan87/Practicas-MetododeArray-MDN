// El findLastIndex() método de Array instancias itera la matriz en orden inverso y devuelve el índice del primer elemento que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, se devuelve -1.

const array1 = [50, 12, 39, 130, 44];

const isLargeNumber = (element) => element > 39;

console.log(array1.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130

