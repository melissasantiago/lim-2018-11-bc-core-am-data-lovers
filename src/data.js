// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//Convertir a Array
//console.log(Object.entries(WORLDBANK))
const allTheData = Object.entries(WORLDBANK);
console.log(allTheData)
/*const data = WORLDBANK.value;
const newDataBank = []*/

//Clona toda la data para solo usar dataClone
const dataClone = (dataBank) => {
  const newDataBank = [];
  for (let i = 0; i < dataBank.length; i++){
    //newDataBank.push(dataBank[i])
    console.log(dataBank[i])
    newDataBank.push(Object.assign({},dataBank[i]))
  }
  return newDataBank;
}
//Esto funciona solo con la funcion de arriba
//dataClone(allTheData);

//const example = () => {
  //return 'example';
//};

function filterData(PER) {
  return PER === [5];
}
 const filterList = (PER, indicatorName ) => {
 const indicatorsList = PER.indicatorName.filter(filterData);
 }

 console.log(indicatorsList);


//sortData(data, sortBy, sortOrder)
//computeStats(data)
window.data = {
  filterData:filterData,
  //sortData:sortData
};
