// El findIndex() método de Array instancias devuelve el índice del primer elemento de una matriz que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, se devuelve -1.

// Resumen
// Devuelve el índice del primer elemento de una matriz que pasa una prueba

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13 ;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3


const ages = [3, 10, 18, 20];

ages.findIndex(checkAge);

function checkAge(age) {
  return age > 5;
}

console.log(ages.findIndex(checkAge))