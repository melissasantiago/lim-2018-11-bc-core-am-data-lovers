const funcFiltroPob = (elemento) => {
  // debe retornar un valor verdadero o falso (booleano)
  let codigoIndicador = elemento.indicatorCode;
  let inicialesPob = codigoIndicador.slice(0, 6);
  return inicialesPob === 'SP.POP';
};
const funcFiltroVio = (elemento1) => {
  let codigoIndicador1 = elemento1.indicatorCode;
  let inicialesVio = codigoIndicador1.slice(0, 3);
  return inicialesVio === 'SG.';
};
const funcFiltroEduc = (elemento2) => {
  let codigoIndicador2 = elemento2.indicatorCode;
  let inicialesEduc = codigoIndicador2.slice(0, 3);
  return inicialesEduc === 'SE.';
};

const filtrarPoblacion = (data) => {
  let arrayFiltrado = data.filter(funcFiltroPob);
  return arrayFiltrado
}

const filtrarViolencia = (data) => {
  let arrayFiltrado = data.filter(funcFiltroVio);
  return arrayFiltrado
}

const filtrarEducacion = (data) => {
  let arrayFiltrado = data.filter(funcFiltroEduc);
  return arrayFiltrado
};

const comparaValor = (indicat1, indicat2) => {
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

// let dataordenada = window.sortData(arrayDeIndicadoresDePeru, 'anio', 'DESC')
const sortData = (data, sortBy, sortOrder) => {
  if (sortBy === 'valor') {
    //data.sort(comparaValor)
  } else if (sortBy === 'anio') {
    //data.sort(compareAnio)
  }
  if(sortOrder === 'DESC') {
    data = data.reverse();
  }
  return [];
}

window.filtrarPoblacion = filtrarPoblacion;
window.filtrarViolencia = filtrarViolencia;
window.filtrarEducacion = filtrarEducacion;
window.sortData = sortData;




// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const example = () => {
  return 'example';
};

window.example = example;
*/







// -------------------------------------------------------------------------//
/* const one = WORLDBANK.PER.indicators;
// const getPerValues = (valuesList) => {
for (let i = 0; i < one.length; i++) {
  //debugger
  const code = one[i].indicatorCode;
  const two = one[i].data[document.getElementById('year').value];
  const three = one[i].indicatorName;
  document.getElementById('out').innerHTML += `
  <tr>
    <td id="${code}">${three}</td>
    <td>${two}</td>
  </tr>
`;
}*/
// };
// const valuesListPeru = getPerValues(one);
