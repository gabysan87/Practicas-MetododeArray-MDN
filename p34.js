// El splice()método de Arrayinstancias cambia el contenido de una matriz eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar .


// Resumen
// método agrega y/o elimina elementos de la matriz.


// En la posición 2, agregue 2 elementos:

const fruits = ["Banana", "Orange", "Apple", "Mango"]

fruits.splice(2, 0, "Lemon","Kiwi")
console.log(fruits)


// En la posición 2, elimine 2 elementos:
const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits2.splice(2, 2);

console.log(fruits2)


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]