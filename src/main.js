const allTheData = Object.entries(WORLDBANK); // con Object.entries convertimos en array y lo declaramos en la variable allTheData
const dataClone = (dataBank) => { // Clona toda la data para solo usar dataClone
  const newDataBank = [];
  for (let i = 0; i < dataBank.length; i++) {
    newDataBank.push(Object.assign({}, dataBank[i]));
  }
  return newDataBank;
};

const data = dataClone(allTheData); // data es una array con 4 objetos (cada objeto es un pais)

const inicioPantalla = () => {
  document.getElementById('initial-page').style.display = 'block';
  document.getElementById('indicators').style.display = 'none';
  document.getElementById('indStatus').style.display = 'none';
};
inicioPantalla();

const limpiarListaIndicadores = (listaHTML) => {
  listaHTML.innerHTML = ''; // limpiar la lista en html para que no se repita varias veces cada vez que le de click en el pais
};

const imprimirIndicadores = (arregloIndicadores, listaHTML) => {
  for (let i = 0; i < arregloIndicadores.length; i++) {
    let indicador = arregloIndicadores[i].indicatorName;// obtengo el nombre del indicador
    let id = arregloIndicadores[i].indicatorCode;
    imprimirIndicador(id, indicador, listaHTML);
  }
};

// -----------------------------------MEXICO---------------------------------//
let botonMexico = document.getElementById('btn-mex');
const goMexico = () => {
  document.getElementById('root').style.display = 'block';
  document.getElementById('indicators').style.display = 'block';
  document.getElementById('initial-page').style.display = 'none';
  document.getElementById('ind-text').innerHTML = 'Indicadores de México';
  document.getElementById('indStatus').style.display = 'none';


  let listaHTML = document.getElementById('list');
  limpiarListaIndicadores(listaHTML);
  const dataDeMexico = window.filtrarDataPais(data, 'MEX');
  // console.log(dataDeMexico);
  imprimirIndicadores(dataDeMexico, listaHTML);


  let botonFiltroPoblacion = document.getElementById('filter-pob');
  let botonFiltroViolencia = document.getElementById('filter-vio');
  let botonFiltroEducacion = document.getElementById('filter-edu');


  const filtrarTemas = (nameDelTema) => {
    // llamar a dataPais = filtraDataPais(data, pais)
    let arrNewList1 = window.filtrarDataIndicador(dataDeMexico, nameDelTema);
    // let arrayFiltrado = arrayDeIndicadoresDeMexico.filter(funcFiltroPob);
    let listaHTML = document.getElementById('list');
    limpiarListaIndicadores(listaHTML);
    imprimirIndicadores(arrNewList1, listaHTML);
  };
  botonFiltroPoblacion.addEventListener('click', () => {
    filtrarTemas('poblacion');
  });
  botonFiltroViolencia.addEventListener('click', () => {
    filtrarTemas('violencia');
  });
  botonFiltroEducacion.addEventListener('click', () => {
    filtrarTemas('educacion');
  });
};

botonMexico.addEventListener('click', goMexico);

// -----------------------------------BRASIL---------------------------------//


// -----------------------------------CHILE---------------------------------//
// -------------------------------------------------------------------------//

let selectedIndicator;

const abrirIndicador = (evt) => {
  let id = evt.currentTarget.id;
  selectedIndicator = id;

  showYears();
};
document.getElementById('showyear').addEventListener('click', showYears);

function showYears() {
  let templateList = '';

  // console.log(selectedIndicator);

  for (let elemento of data[1][1].indicators) {
    if (elemento.indicatorCode === selectedIndicator) {
      let year = document.getElementById('year').value;
      const year1 = document.getElementById('year1').value;
      templateList = '';
      while (year <= year1) {
        templateList += `<div><b>${year}:  </b>${elemento.data[year]}</div>`;
        year++;
      }
    }
    document.getElementById('txt-id').innerHTML = templateList;
    document.getElementById('indicators').style.display = 'none';
    document.getElementById('indStatus').style.display = 'block';
  }
}
const orderByValue = () => {
  let templateList = '';
  for (let elemento of data[1][1].indicators) {
    if (elemento.indicatorCode === selectedIndicator) {
      let year = document.getElementById('year').value; // este es let xq cambia como inicial
      const year1 = document.getElementById('year1').value; // este es const xq el ultimo no cambiara
      let auxArr = [];
      while (year <= year1) {
        auxArr.push({ value: elemento.data[year], year: year });
        year++;
      }
      const orderBy = document.getElementById('orderBySelect').value;
      const direction = document.getElementById('direction').value;

      // console.log(sortData(auxArr, orderBy, direction));
      let sortedFinalData = window.sortData(auxArr, orderBy, direction);
      // sconsole.log(average(sortedFinalData));
      const getAverage = window.average(sortedFinalData);

      sortedFinalData.forEach((elem) => {
        templateList += `<div><b>${elem.year}:  </b>${elem.value}</div>`;
      });
      document.getElementById('percentage-id').innerHTML = getAverage;

      document.getElementById('txt-id').innerHTML = templateList;
      // console.log(elemento);
    }

    document.getElementById('txt-id').innerHTML = templateList;
  }
};
window.orderByValue = orderByValue;

document.getElementById('orderBy').addEventListener('click', orderByValue);


// ----------------------------------------------------------------------------- //
const imprimirIndicador = (id, indicador, listaHTML) => {
// function imprimirIndicador(id, indicador, listaHTML) {
  let nombreIndicador = indicador;// obtengo el nombre del indicador
  let nodoIndicador = document.createTextNode(nombreIndicador);// creo el texto HTML con el nombre del indicador
  let nodoEntradaLista = document.createElement('li');// creo la entrada de lista sin texto
  nodoEntradaLista.setAttribute('id', id); // hace que valores de id se "igualen"
  nodoEntradaLista.appendChild(nodoIndicador);// inserto el texto(nombre del indicador) en la entrada de la lista
  nodoEntradaLista.addEventListener('click', abrirIndicador); // al hacer click en el indicador
  listaHTML.appendChild(nodoEntradaLista);// inserto la entrada de la lista ahora con el texto en el documento HTML
};
