// El reduce() método de Array instancias ejecuta una función de devolución de llamada "reductora" proporcionada por el usuario en cada elemento de la matriz, en orden, pasando el valor de retorno del cálculo en el elemento anterior. El resultado final de ejecutar el reductor en todos los elementos de la matriz es un valor único.


// Resumen
// Reducir los valores de una matriz a un solo valor (de izquierda a derecha)

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);
// Expected output: 10