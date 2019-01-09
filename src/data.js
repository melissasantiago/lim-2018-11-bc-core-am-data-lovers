const filtrarDataPais = (data, filterValue) => {
  let newData = [];
  for (let pais of data) {
    if (pais[0] === filterValue) {
      newData = pais[1].indicators;
    }
  }
  return newData;
};

const filtrarDataIndicador = (data, filterValue) => {
  let newData = [];

  if (filterValue === 'poblacion') {
    newData = filtrarPoblacion(data);
  } else if (filterValue === 'violencia') {
    newData = filtrarViolencia(data); // llamar a funcion violencia
  } else if (filterValue === 'educacion') {
    newData = filtrarEducacion(data); // llamar a funcion educacion
  }
  // devuelvo arreglo de data filtrado por poblacion o educacion, ...
  // let newData = data.filter(funcFiltroPob);

  return newData;
};

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
  // console.log(arrayFiltrado);
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

// let dataordenada
/* const arrPratice = [1, 2, 3, 4];
const numeros = arrPratice.map(arroz => arroz);
console.log(numeros); */
const sortData = (data, sortBy, sortOrder) => {
  let dataTwo = data.map(arroz => arroz);
  // console.log(dataTwo);
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
    dataTwo.sort(comparaValor);
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
    dataTwo.sort(compareAnio);
  }

  if (sortOrder === 'DESC') {
    dataTwo = dataTwo.reverse();
  } else {
    return dataTwo;
  }
  // console.log(dataTwo);
  return dataTwo;
};
/* window.worldbank = {
  filtrarDataPais,
  filtrarDataIndicador,
  sortData,
}; */
window.filtrarDataPais = filtrarDataPais;
window.filtrarDataIndicador = filtrarDataIndicador;
// window.filtrarPoblacion = filtrarPoblacion;
// window.filtrarViolencia = filtrarViolencia;
// window.filtrarEducacion = filtrarEducacion;
window.sortData = sortData;
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const example = () => {
  return 'example';
};
window.example = example;
*/
