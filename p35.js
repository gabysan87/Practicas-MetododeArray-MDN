// El toLocaleString()método de Arrayinstancias devuelve una cadena que representa los elementos de la matriz. Los elementos se convierten en cadenas utilizando sus toLocaleStringmétodos y estas cadenas están separadas por una cadena específica de la configuración regional (como una coma ",").

// Resumen
// toLocaleString() devuelve una fecha como una cadena, utilizando la configuración regional

const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary