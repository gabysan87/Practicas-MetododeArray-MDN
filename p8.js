// El find() método de Array instancias devuelve el primer elemento de la matriz proporcionada que satisface la función de prueba proporcionada. Si ningún valor satisface la función de prueba, undefinedse devuelve.


// Resumen
// Devuelve el valor del primer elemento de una matriz que pasa una prueba

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12

const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

console.log(ages.filter(checkAge))