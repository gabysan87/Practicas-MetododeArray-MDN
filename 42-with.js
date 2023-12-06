// El with() método de Array instancias es la versión de copia del uso de la notación de corchetes para cambiar el valor de un índice dado. Devuelve una nueva matriz con el elemento en el índice dado reemplazado con el valor dado.

const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]