// El entries() método de Array 
// instancias devuelve un nuevo objeto iterador de matriz que contiene los pares clave/valor para cada índice de la matriz.

// Devuelve un objeto de iteración de matriz de par clave/valor

const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}


const fruits = ["Banana", "Orange", "Apple", "Mango"];

for (const [index, element] of fruits.entries()) {
    console.log(index, element);

}