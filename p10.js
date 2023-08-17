// El findLast() método de Array instancias itera la matriz en orden inverso y devuelve el valor del primer elemento que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, undefined se devuelve.

const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);
// Expected output: 130
