// El sort() método de Arrayinstancias ordena los elementos de una matriz en su lugar y devuelve la referencia a la misma matriz, ahora ordenada. El orden de clasificación predeterminado es ascendente, basado en convertir los elementos en cadenas y luego comparar sus secuencias de valores de unidades de código UTF-16.


// Resumen
// Ordena los elementos de una matriz

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort())

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();

console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]