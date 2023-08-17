// El filter() método de Array instancias crea una copia superficial de una parte de una matriz dada, filtrada solo a los elementos de la matriz dada que pasan la prueba implementada por la función proporcionada.

// Resumen
// Crea una nueva matriz con cada elemento de una matriz que pasa una prueba

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

const ages = [32, 33, 16, 40];
const resultd = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(ages.filter(checkAdult))
