// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// Convertir a Array
// console.log(Object.entries(WORLDBANK))
const allTheData = Object.entries(WORLDBANK);
console.log(allTheData);
/* const data = WORLDBANK.value;
const newDataBank = []*/

// Clona toda la data para solo usar dataClone
const dataClone = (dataBank) => {
  const newDataBank = [];
  for (let i = 0; i < dataBank.length; i++){
// newDataBank.push (dataBank[i])
  newDataBank.push ( Object.assign({},dataBank [i]))
}
  return newDataBank;
}

const data = dataClone(allTheData) // data es una array con 4 objetos (cada objeto es un pais)

// const peruInd = (dataPeru) => {
//   const newInd = [];
//   for (let i = 0; i <dataPeru.length; i++){
// console.log(dataPeru[i])
//   newInd(Object.values(WORLDBANK.peru))
// }
// return newInd;
// }
