const allTheData = Object.entries(WORLDBANK); // con Object.entries convertimos en array y lo declaramos en la variable allTheData
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

const inicioPantalla = () => {
  document.getElementById('initial-page').style.display = 'block';
  document.getElementById('indicators').style.display = 'none';
  document.getElementById('indStatus').style.display = 'none';
};
inicioPantalla();

const limpiarListaIndicadores = (listaHTML) => {
  listaHTML.innerHTML = '' ; // limpiar la lista en html para que no se repita varias veces cada vez que le de click en el pais
};

const imprimirIndicadores = (arregloIndicadores, listaHTML) => {
  for (let i = 0; i < arregloIndicadores.length; i++) {
    let indicador = arregloIndicadores[i].indicatorName;// obtengo el nombre del indicador
    let id = arregloIndicadores[i].indicatorCode;
    imprimirIndicador(id, indicador, listaHTML);
  }
};



// -----------------------------------PERU---------------------------------//
// OBTENER EL BOTON DE ARRIBA
let botonPeru = document.getElementById('btn-per');

// QUE DEBE HACER CUANDO SE HAGA GOPERU
const goPeru = () => {
  // OCULTA CIERTOS ELEMENTOS QUE NO DEBERIAN SER VISIBLES
  document.getElementById('root').style.display = 'block';
  document.getElementById('indicators').style.display = 'block';
  document.getElementById('initial-page').style.display = 'none';
  document.getElementById('ind-text').innerHTML = 'Indicadores de Perú';

  // OBTENEMOS EL ELEMENTO HTML DE LISTA
  let listaHTML = document.getElementById('list');

  // LIMPIAMOS E IMPRIMIMOS LA LISTA DE INDICADORES TOTAL
  limpiarListaIndicadores(listaHTML);
  imprimirIndicadores(arrayDeIndicadoresDePeru, listaHTML);


  // OBTENEMOS BOTONES LATERALES DERECHOS
  let botonFiltroPoblacion = document.getElementById('filter-pob');
  let botonFiltroViolencia = document.getElementById('filter-vio');
  let botonFiltroEducacion = document.getElementById('filter-edu');
  /* let botonFiltroProteccion = document.getElementById('filter-prot');
  let botonFiltroFinanzas = document.getElementById('filter-fin');*/

  // FUNCION DE FILTRADO
  const filtrarPoblacionPeru = () => {
    // reducir el arreglo
    let arrayFiltrado = window.filtrarPoblacion(arrayDeIndicadoresDePeru);
    let listaHTML = document.getElementById('list');
    limpiarListaIndicadores(listaHTML);
    imprimirIndicadores(arrayFiltrado, listaHTML);
  };
  const filtrarViolenciaPeru = () => {
    // reducir el arreglo
    let arrayFiltrado = window.filtrarViolencia(arrayDeIndicadoresDePeru);

    let listaHTML = document.getElementById('list');
    limpiarListaIndicadores(listaHTML);
    imprimirIndicadores(arrayFiltrado, listaHTML);
  };
  const filtrarEducacionPeru = () => {
    // reducir el arreglo
    let arrayFiltrado = window.filtrarEducacion(arrayDeIndicadoresDePeru);
    let listaHTML = document.getElementById('list');
    limpiarListaIndicadores(listaHTML);
    imprimirIndicadores(arrayFiltrado, listaHTML);
  };

  // CUANDO SE HAGA CLICK EN EL BOTON "POBLACION", SE LLAMARA A LA FUNCION YA DEFINIDA ARRIBA filtrarPoblacionPeru
  botonFiltroPoblacion.addEventListener('click', filtrarPoblacionPeru);
  botonFiltroViolencia.addEventListener('click', filtrarViolenciaPeru);
  botonFiltroEducacion.addEventListener('click', filtrarEducacionPeru);
  /* botonFiltroProteccion.addEventListener('click', filtrarProteccionPeru);
  botonFiltroFinanzas.addEventListener('click', filtrarFinanzasPeru);*/

  // ********* TERCERA VENTANA PARA MOSTRAR TABLA DE RESULTADO************ //
  let perIndicatorsList = document.getElementById('list')
const indicatorPerResult = () => {
    let indResult = valuesListPeru(getPerValues);
    limpiarListaIndicadores(listaHTML);
    getPerValues(one);
  };
  perIndicatorsList.addEventListener('click', perIndicatorsList);
// ********* aquí termina************ //
};

// CUANDO SE HAGA CLICK EN EL BOTON DE PERU SE REALIZARA LO QUE ES GOPERU
botonPeru.addEventListener('click', goPeru);

// -----------------------------------MEXICO---------------------------------//


let botonMexico = document.getElementById('btn-mex');
const goMexico = () => {
  document.getElementById('root').style.display = 'block';
  document.getElementById('indicators').style.display = 'block';
  document.getElementById('initial-page').style.display = 'none';
  document.getElementById('ind-text').innerHTML = 'Indicadores de México';
  document.getElementById('indStatus').style.display = 'block';

  let listaHTML = document.getElementById('list');
  limpiarListaIndicadores(listaHTML);
  imprimirIndicadores(arrayDeIndicadoresDeMexico, listaHTML);


  let botonFiltroPoblacion = document.getElementById('filter-pob');
  let botonFiltroViolencia = document.getElementById('filter-vio');
  let botonFiltroEducacion = document.getElementById('filter-edu');
  // let botonFiltroProteccion = document.getElementById('filter-prot');
  // let botonFiltroFinanzas = document.getElementById('filter-fin');


  const filtrarPoblacionMexico = () => {
    let arrayFiltrado = arrayDeIndicadoresDeMexico.filter(funcFiltroPob);
    let listaHTML = document.getElementById('list');
    limpiarListaIndicadores(listaHTML);
    imprimirIndicadores(arrayFiltrado, listaHTML);
  };
  botonFiltroPoblacion.addEventListener('click', filtrarPoblacionMexico);

  const filtrarViolenciaMexico = () => {
    let arrayFiltrado = arrayDeIndicadoresDeMexico.filter(funcFiltroVio);
    let listaHTML = document.getElementById('list');
    limpiarListaIndicadores(listaHTML);
    imprimirIndicadores(arrayFiltrado, listaHTML);
  };
  botonFiltroViolencia.addEventListener('click', filtrarViolenciaMexico);

  const filtrarEducacionMexico = () => {
    let arrayFiltrado = arrayDeIndicadoresDeMexico.filter(funcFiltroEduc);
    let listaHTML = document.getElementById('list');
    limpiarListaIndicadores(listaHTML);
    imprimirIndicadores(arrayFiltrado, listaHTML);
  };
  botonFiltroEducacion.addEventListener('click', filtrarEducacionMexico);
};

botonMexico.addEventListener('click', goMexico);

// -----------------------------------BRASIL---------------------------------//

let botonBrasil = document.getElementById('btn-bra');
const goBrasil = () => {
  document.getElementById('root').style.display = 'block';
  document.getElementById('indicators').style.display = 'block';
  document.getElementById('initial-page').style.display = 'none';
  document.getElementById('ind-text').innerHTML = 'Indicadores de Brasil';

  let listaHTML = document.getElementById('list');
  limpiarListaIndicadores(listaHTML);
  imprimirIndicadores(arrayDeIndicadoresDeBrasil, listaHTML);
};
botonBrasil.addEventListener('click', goBrasil);


// -----------------------------------CHILE---------------------------------//

let botonChile = document.getElementById('btn-chi');
const goChile = () => {
  document.getElementById('root').style.display = 'block';
  document.getElementById('indicators').style.display = 'block';
  document.getElementById('initial-page').style.display = 'none';
  document.getElementById('ind-text').innerHTML = 'Indicadores de Chile';

  let listaHTML = document.getElementById('list');
  limpiarListaIndicadores(listaHTML);
  imprimirIndicadores(arrayDeIndicadoresDeChile, listaHTML);
};

let selectedIndicator;

const abrirIndicador = (evt) => {
// debugger
  let id = evt.currentTarget.id;
  selectedIndicator = id;

  showYears();
};
document.getElementById('showyear').addEventListener('click', showYears);

function showYears() {
  let templateList = '';

  // console.log(selectedIndicator);

  for (let elemento of allTheData[3][1].indicators) {
    if (elemento.indicatorCode === selectedIndicator) {
      // debugger
    /* const printIndicator = allTheData.forEach((i) => {
      const li = `<label>${i.id}</label>`;
      templateList += li;
    });*/
      let year = document.getElementById('year').value;
      const year1 = document.getElementById('year1').value;
      templateList = '';
      while (year <= year1) {
        templateList += `<div><b>${year}:  </b>${elemento.data[year]}</div>`;
        year++;
      }

    // console.log(elemento)
    }
    const span = document.getElementById('txt-id').innerHTML = templateList;
  }
}

botonChile.addEventListener('click', goChile);
// ----------------------------------------------------------------------------- //
function imprimirIndicador(id, indicador, listaHTML) {
  let nombreIndicador = indicador ;// obtengo el nombre del indicador
  let nodoIndicador = document.createTextNode(nombreIndicador);// creo el texto HTML con el nombre del indicador
  let nodoEntradaLista = document.createElement('li');// creo la entrada de lista sin texto
  nodoEntradaLista.setAttribute('id', id); // hace que valores de id se "igualen"
  nodoEntradaLista.appendChild(nodoIndicador);// inserto el texto(nombre del indicador) en la entrada de la lista
  nodoEntradaLista.addEventListener('click', abrirIndicador); // al hacer click en el indicador
  listaHTML.appendChild(nodoEntradaLista);// inserto la entrada de la lista ahora con el texto en el documento HTML
}
// -----------------------------ocultar todo--------------------//

// *** let goToId = document.getElementById('id');

// QUE DEBE HACER CUANDO SE HAGA GOTOID
// **** const goId = () => {
// OCULTA CIERTOS ELEMENTOS QUE NO DEBERIAN SER VISIBLES
// ***  document.getElementById('root').style.display = 'block';
// ***   document.getElementById('indicators').style.display = 'block';
// *** document.getElementById('initial-page').style.display = 'none';
// ***   document.getElementById('id-text').innerHTML = 'Indicador de México';

// OBTENEMOS EL ELEMENTO HTML DEL INDICADOR
// let listaHTML = document.getElementById('list');

// LIMPIAMOS E IMPRIMIMOS LA LISTA DE INDICADORES TOTAL
// *** limpiarListaIndicadores(listaHTML);
