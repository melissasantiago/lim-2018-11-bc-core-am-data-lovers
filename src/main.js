//console.table(WORLDBANK.per);

//paa convertir a ARRAY en la consola
const newWorld = (Object.values(WORLDBANK.PER.indicators[0]));
//console.log(newWorld);// aparece en consola

//convertir en array la data
//const array2 = Object.values(newWorld);
const probando = Object.values(newWorld[0]);

console.log(probando)



//const newWorld2 = Object.entries(newWorld)  ;
  //for(let i = 0; i< newWorld.length; i++){
//const filPer = newWorld.filter(newWorld => newWorld.length >0)

//}
//para hacer una copia

/* const copyObj = (X) => {
  let newObj =[];

  for(let i = 0; i < X.length; i++){
    console.log(x[i])

    newObj.push(Object.assign({},X[i]))

  }return newObj

}

copyObj(newWorld);*/
