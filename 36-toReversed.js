// El toReversed()método de Array las instancias es la contrapartida copiadora del reverse()método. Devuelve una nueva matriz con los elementos en orden inverso.

const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]