// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const example = () => {
  return 'example';
};

window.example = example;
*/

const allTheData = Object.entries(WORLDBANK); // con Object.entries convertimos en array y lo declaramos en la variable allTheData
// console.log(allTheData);
/* const data = WORLDBANK.value;
const newDataBank = []*/
const dataClone = (dataBank) => { // Clona toda la data para solo usar dataClone
  const newDataBank = [];
  for (let i = 0; i < dataBank.length; i++) {
    newDataBank.push(Object.assign({}, dataBank[i]));
  }
  return newDataBank;
};

const data = dataClone(allTheData); // data es una array con 4 objetos (cada objeto es un pais)

const getDataPeru = (arrayDePaises) => {
  const dataDePeru = arrayDePaises[0]; // un objeto con 2 propiedades que tiene la data de peru
  return dataDePeru['1'].indicators; // console.log(getDataPeru);
};
const getDataMexico = (arrayDePaises) => {
  const dataDeMexico = arrayDePaises[1];
  return dataDeMexico['1'].indicators;
};
const getDataBrasil = (arrayDePaises) => {
  const dataDeBrasil = arrayDePaises[2];
  return dataDeBrasil['1'].indicators;
};

const getDataChile = (arrayDePaises) => {
  const dataDeChile = arrayDePaises[3];
  return dataDeChile['1'].indicators;
};

const arrayDeIndicadoresDePeru = getDataPeru(data); // console.log(arrayDeIndicadoresDePeru);//
const arrayDeIndicadoresDeMexico = getDataMexico(data);
const arrayDeIndicadoresDeBrasil = getDataBrasil(data);
const arrayDeIndicadoresDeChile = getDataChile(data);

const comparaIndicadores = (indicat1, indicat2) => {
  // extraer los nombres ponemos variables para no poner en las condiciones indicatorName a cada rato
  let nombreInd1 = indicat1.indicatorName;
  let nombreInd2 = indicat2.indicatorName;
  // condiciones para ordenar alfabeticamente ver MDN
  if (nombreInd1 < nombreInd2)
    return -1;
  if (nombreInd1 > nombreInd2)
    return +1;
  if (nombreInd1 === nombreInd2)
    return 0;
};

arrayDeIndicadoresDePeru.sort(comparaIndicadores);
arrayDeIndicadoresDeMexico.sort(comparaIndicadores);//
arrayDeIndicadoresDeBrasil.sort(comparaIndicadores);
arrayDeIndicadoresDeChile.sort(comparaIndicadores);//

// -------------------------------------------------------------------------//
const one = WORLDBANK.PER.indicators;
const getPerValues = (valuesList) => {
for (let i = 0; i < one.length; i++) {
  const two = one[i].data[document.getElementById('year').value];
  const three = one[i].indicatorName;
  document.getElementById('out').innerHTML += `
  <tr>
    <td>${three}</td>
    <td>${two}</td>
  </tr>
`;
}
 };
const valuesListPeru = getPerValues(one);
