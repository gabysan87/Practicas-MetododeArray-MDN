// El reverse() método de Array instancias invierte una matriz en su lugar y devuelve la referencia a la misma matriz, el primer elemento de la matriz ahora se convierte en el último y el último elemento de la matriz se convierte en el primero. En otras palabras, el orden de los elementos en el arreglo estará girado hacia la dirección opuesta a la establecida anteriormente.

// Resumen
// Invierte el orden de los elementos en una matriz

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]


const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.reverse())