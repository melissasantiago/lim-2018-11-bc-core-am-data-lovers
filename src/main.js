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

const newDataClone = dataClone(allTheData);

const totaldata = Object.values(newDataClone);
const peru = totaldata[0];
const mexico = totaldata[1];

//console.log(peru[1].indicators);
const newPer = peru[1].indicators;
console.log(newPer[11]);

//console.log(mexico[1].dataSource);

/* for each para ubicar elementos dentro de array
const newPer = peru[1].indicators;
newPer.forEach(function(result)) {
  console.log(result);
}*/



//Usar para entrar a loa indicadores del objeto
/*for( let i = 0; i < dataclone.length; i++){
 const enterToProperty = dataClone[i].PER;
    console.log(dataClone[i]).PER;
}*/

/*Simple clone
const newArr = dataClone(WORLDBANK)
newArr.push({name : "URU"})

console.log(newArr)
console.log(WORLDBANK)*/
