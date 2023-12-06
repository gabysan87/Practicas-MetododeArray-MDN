// El reduceRight()método de Arrayinstancias aplica una función contra un acumulador y cada valor del arreglo (de derecha a izquierda) para reducirlo a un solo valor.

// Resumen
// Reducir los valores de una matriz a un solo valor (de derecha a izquierda)

const array1 = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  
  const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
  
  console.log(result);
  // Expected output: Array [4, 5, 2, 3, 0, 1]
  

  const numbers = [2, 45, 30, 100];

const resultad = numbers.reduceRight((accumulator, currentValue) => accumulator - currentValue)

console.log(resultad)
 
