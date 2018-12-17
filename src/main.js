const inicioPantalla = () => {
  document.getElementById("indicators").style.display = "none";
  document.getElementById("root").style.display = "block";
}
inicioPantalla();

const countryData = document.getElementById("welcome")
const dataResult = () => {
  document.getElementById("root").style.display = "block";
  document.getElementById("indicators").style.display = "block";
  document.getElementById("initial-page").style.display = "none";
}
countryData.addEventListener("click", dataResult);


// todo en datajs

/*******const newDataClone = dataClone(allTheData);

const totaldata = Object.values(newDataClone);
const peru = totaldata[0];
const mexico = totaldata[1];

//console.log(peru[1].indicators);
const newPer = peru[1].indicators;
console.log(newPer[111 ]);*********/

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



//DOM para visualizar paginas
