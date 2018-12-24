// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const example = () => {
  return 'example';
};

window.example = example; */


// Convertir a Array
const allTheData = Object.entries(WORLDBANK);

// Clona toda la data para solo usar dataClone
const dataClone = (dataBank) => {
  const newDataBank = [];
  for (let i = 0; i < dataBank.length; i++) {

    newDataBank.push(Object.assign({}, dataBank[i]));
  }
  return newDataBank;
};

const data = dataClone(allTheData); // data es una array con 4 objetos (cada objeto es un pais)

const getDataPeru = (arrayDePaises) => {
  const dataDePeru = arrayDePaises[0]; // un objeto con 2 propiedades que tiene la data de peru
  return dataDePeru['1'].indicators;
  // console.log(getDataPeru);
};
const getDataMexico = (arrayDePaises) => {
  const dataDeMexico = arrayDePaises[1];
  return dataDeMexico['1'].indicators;
  // console.log(getDataMexico);
};
const getDataBrasil = (arrayDePaises) => {
  const dataDeBrasil = arrayDePaises[2];
  return dataDeBrasil['1'].indicators;
  // console.log(getDataBrasil);
};
const getDataChile = (arrayDePaises) => {
  const dataDeBrasil = arrayDePaises[3];
  return dataDeBrasil['1'].indicators;
  // console.log(getDataBrasil);
};
const arrayDeIndicadoresDePeru = getDataPeru(data);
// console.log(arrayDeIndicadoresDePeru);

const arrayDeIndicadoresDeMexico = getDataMexico(data);
// console.log(arrayDeIndicadoresDeMexico);

const arrayDeIndicadoresDeBrasil = getDataBrasil(data);
// console.log(arrayDeIndicadoresDeBrasil);

const arrayDeIndicadoresDeChile = getDataChile(data);
// console.log(arrayDeIndicadoresDeChile);

for (let i = 0; i < arrayDeIndicadoresDePeru.length;i++) { // dEBO ASIGNARLE VARIABLE?? ese i puede ser cualquier letra

  let indicadorP = arrayDeIndicadoresDePeru[i].indicatorName;// obtengo el nombre del indicador
  let listaHTML = document.getElementById('list');
  let nodoEntradaLista = document.createElement('li');
  let nodoIndicador = document.createTextNode(indicadorP);
  nodoEntradaLista.appendChild(nodoIndicador);
  listaHTML.appendChild(nodoEntradaLista);


  console.log(indicadorP);
}
for (let a = 0; a < arrayDeIndicadoresDeMexico.length;a++) {
  let indicadorM = arrayDeIndicadoresDeMexico[a].indicatorName;// obtengo el nombre del indicador
console.log(indicadorM);
}
for (let a = 0; a < arrayDeIndicadoresDeBrasil.length;a++) {
  let indicadorB = arrayDeIndicadoresDeBrasil[a].indicatorName;// obtengo el nombre del indicador
  console.log(indicadorB);
}
for (let a = 0; a < arrayDeIndicadoresDeChile.length;a++) {
  let indicadorCh = arrayDeIndicadoresDeChile[a].indicatorName;// obtengo el nombre del indicador
  console.log(indicadorCh);
}


// let listaHTML = document.getElementById('list');// esto iria en el main.js //
/* for (let a = 0; a < arrayDeIndicadoresDePeru.length;a++) {
  let indicador = arrayDeIndicadoresDePeru[a].indicatorName;// obtengo el nombre del indicador
  console.log(indicador); */
  /* let nodoIndicador = document.createTextNode(indicador);// creo el texto HTML con el nombre del indicador
  let nodoEntradaLista = document.createElement('li');// creo la entrada de lista sin texto
  nodoEntradaLista.appendChild(nodoIndicador);// inserto el texto(nombre del indicador) en la entrada de la lista
  listaHTML.appendChild(nodoEntradaLista);// inserto la entrada de la lista ahora con el texto en el documento HTML*/
