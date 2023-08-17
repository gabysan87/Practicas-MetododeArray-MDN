// El flatMap() método de Array instancias devuelve una nueva matriz formada al aplicar una función de devolución de llamada determinada a cada elemento de la matriz y luego aplanar el resultado en un nivel. Es idéntico a map()seguido de a flat()de profundidad 1 ( arr.map(...args).flat()), pero un poco más eficiente que llamar a esos dos métodos por separado.

// Resumen
// Mapea todos los elementos de la matriz y crea una nueva matriz plana

const arr1 = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);

console.log(newArr);
