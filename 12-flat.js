// El flat()método de Arrayinstancias crea una nueva matriz con todos los elementos de la sub-matriz concatenados recursivamente hasta la profundidad especificada.

// Resumen 
// Concatena elementos de subarreglo

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// Expected output: Array [0, 1, 2, Array [3, 4]]

const myArr = [[1,2],[3,4],[5,6]];

console.log(myArr.flat())


const myArreg = [1, 2, [3, [4, 5, 6], 7], 8];

console.log(myArreg.flat(2))
