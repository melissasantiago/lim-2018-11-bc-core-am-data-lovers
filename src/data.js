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
  return arrayFiltrado;
};

const filtrarViolencia = (data) => {
  let arrayFiltrado = data.filter(funcFiltroVio);
  return arrayFiltrado;
};

const filtrarEducacion = (data) => {
  let arrayFiltrado = data.filter(funcFiltroEduc);
  return arrayFiltrado;
};

// let dataordenada = window.sortData(arrayDeIndicadoresDePeru, 'anio', 'DESC')
const sortData = (data, sortBy, sortOrder) => {
  if (sortBy === 'valor') {
    // En data eperamos un arreglo de objetos con la estructura {value: x , year: y}
    const comparaValor = (valor1, valor2) => {
    // extraer los nombres ponemos variables para no poner en las condiciones indicatorName a cada rato
      let v1 = valor1.value;
      let v2 = valor2.value;
      // condiciones para ordenar alfabeticamente ver MDN
      if (v1 < v2)
        return -1;
      if (v1 > v2)
        return +1;
      if (v1 === v2)
        return 0;
    };
    data.sort(comparaValor);
  } else if (sortBy === 'anio') {
    const compareAnio = (valor1, valor2) => {
      // extraer los nombres ponemos variables para no poner en las condiciones indicatorName a cada rato
      let v1 = valor1.year;
      let v2 = valor2.year;
      if (v1 < v2)
        return -1;
      if (v1 > v2)
        return +1;
      if (v1 === v2)
        return 0;
    };
    data.sort(compareAnio);
  }

  if (sortOrder === 'DESC') {
    data = data.reverse();
  }

  return [];
};

window.filtrarPoblacion = filtrarPoblacion;
window.filtrarViolencia = filtrarViolencia;
window.filtrarEducacion = filtrarEducacion;
window.sortData = sortData;
window.funcFiltroPob = funcFiltroPob;


// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const example = () => {
  return 'example';
};
window.example = example;
*/


// -------------------------------------------------------------------------//
