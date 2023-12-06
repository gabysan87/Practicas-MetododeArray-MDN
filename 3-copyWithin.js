// El copyWithin()
// método de Array instancias superficiales copia parte de esta matriz a otra ubicación en la misma matriz y devuelve esta matriz sin modificar su longitud.
// arr.copyWithin(target, start, end)

// Resumen
// Copia elementos de matriz dentro de la matriz, hacia y desde posiciones especificadas

const array1 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
// Copie en el índice 0 el elemento en el índice 3
console.log(array1.copyWithin(0, 2, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
// Copie en el índice 1 todos los elementos desde el índice 3 hasta el finl
console.log(array1.copyWithin(1, 3));

console.log(array1.copyWithin(1, 2));
console.log(array1.copyWithin(1, 2));

