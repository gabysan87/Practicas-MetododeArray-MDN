// El forEach() método de Array instancias ejecuta una función proporcionada una vez para cada elemento de la matriz.

// // Resumen
//  Llama a una función para cada elemento de la matriz

const array1 = ['a', 'b', 'c'];


array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"


const fruits = ["apple", "orange", "cherry"];

fruits.forEach((element) => console.log(element))


const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// after
items.forEach((item) => {
  copyItems.push(item);
});