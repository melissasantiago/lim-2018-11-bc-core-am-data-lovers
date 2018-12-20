// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// Convertir a Array
// console.log(Object.entries(WORLDBANK))
const allTheData = Object.entries(WORLDBANK);
// console.log(allTheData);
/* const data = WORLDBANK.value;
const newDataBank = []*/

// Clona toda la data para solo usar dataClone
const dataClone = (dataBank) => {
  const newDataBank = [];
  for (let i = 0; i < dataBank.length; i++){
// newDataBank.push (dataBank[i])
  newDataBank.push ( Object.assign({}, dataBank [i]));
}
  return newDataBank;
};

const data = dataClone(allTheData); // data es una array con 4 objetos (cada objeto es un pais)

const getDataPeru = (arrayDePaises) => {
  const dataDePeru = arrayDePaises[0]; // un objeto con 2 propiedades que tiene la data de peru
  return dataDePeru['1'].indicators;
};

const arrayDeIndicadoresDePeru = getDataPeru(data);

// console.log(arrayDeIndicadoresDePeru);//

const comparaIndicadores = (indicat1, indicat2) => {
  // extraer los nombres
  let nombreInd1 = indicat1.indicatorName;
  let nombreInd2 = indicat2.indicatorName;

  // condiciones para ordenar alfabeticamente
  if (nombreInd1 < nombreInd2)
    return -1;
  if (nombreInd1 > nombreInd2)
    return +1;
  if (nombreInd1 === nombreInd2)
    return 0;
};

arrayDeIndicadoresDePeru.sort(comparaIndicadores);

let listaHTML = document.getElementById("list");// esto iria en el main.js
for(let a=0;a<arrayDeIndicadoresDePeru.length;a++){
  let indicador=arrayDeIndicadoresDePeru[a].indicatorName;// obtengo el nombre del indicador
  let nodoIndicador = document.createTextNode(indicador);// creo el texto HTML con el nombre del indicador
  let nodoEntradaLista = document.createElement("li");// creo la entrada de lista sin texto
  nodoEntradaLista.appendChild(nodoIndicador);// inserto el texto(nombre del indicador) en la entrada de la lista
  listaHTML.appendChild(nodoEntradaLista);// inserto la entrada de la lista ahora con el texto en el documento HTML
}

// const example = () => {
// return 'example';
// };

window.data = {
  dataClone,

};
