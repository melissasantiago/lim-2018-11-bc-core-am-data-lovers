const inicioPantalla = () => {
  document.getElementById('indicators').style.display = 'none';
  document.getElementById('root').style.display = 'block';
};
inicioPantalla();

let botonPeru = document.getElementById('btn-per');
const goPeru = () => {
  document.getElementById('root').style.display = 'block';
  document.getElementById('indicators').style.display = 'block';
  document.getElementById('initial-page').style.display = 'none';

  //  listaNombreIndicadoresPeru.map(imprimirIndicador);
  let listaHTML = document.getElementById('list');// esto iria en el main.js
  //  let listaNombreIndicadoresPeru = getNombresIndicadores(data,'PER'); //asigna variable a indicaadores de peru y
  listaHTML.innerHTML = '' ; // limpiar la lista en html para que no se repita varias veces cada vez que le de click en el pais

  for (let a = 0; a < arrayDeIndicadoresDePeru.length;a++) {
    let indicador = arrayDeIndicadoresDePeru[a].indicatorName;// obtengo el nombre del indicador
    imprimirIndicador(indicador, listaHTML);
  }
};
botonPeru.addEventListener('click', goPeru);

let botonMexico = document.getElementById('btn-mex');
const goMexico = () => {
  document.getElementById('root').style.display = 'block';
  document.getElementById('indicators').style.display = 'block';
  document.getElementById('initial-page').style.display = 'none';

  let listaHTML = document.getElementById('list');
  listaHTML.innerHTML = '';

  for (let a = 0; a < arrayDeIndicadoresDeMexico.length; a++) {
    let indicador = arrayDeIndicadoresDeMexico[a].indicatorName;
    imprimirIndicador(indicador, listaHTML);
  }
};
botonMexico.addEventListener('click', goMexico);

let botonBrasil = document.getElementById('btn-bra');
const goBrasil = () => {
  document.getElementById('root').style.display = 'block';
  document.getElementById('indicators').style.display = 'block';
  document.getElementById('initial-page').style.display = 'none';

  let listaHTML = document.getElementById('list');
  listaHTML.innerHTML = '';

  for (let a = 0; a < arrayDeIndicadoresDeBrasil.length; a++) {
    let indicador = arrayDeIndicadoresDeBrasil[a].indicatorName;
    imprimirIndicador(indicador, listaHTML);
  }
};
botonBrasil.addEventListener('click', goBrasil);

let botonChile = document.getElementById('btn-chi');
const goChile = () => {
  document.getElementById('root').style.display = 'block';
  document.getElementById('indicators').style.display = 'block';
  document.getElementById('initial-page').style.display = 'none';

  let listaHTML = document.getElementById('list');
  listaHTML.innerHTML = '';

  for (let a = 0; a < arrayDeIndicadoresDeChile.length; a++) {
    let indicador = arrayDeIndicadoresDeChile[a].indicatorName;
    imprimirIndicador(indicador, listaHTML);
  }
};
botonChile.addEventListener('click', goChile);

function imprimirIndicador(indicador, listaHTML) {
  let nombreIndicador = indicador ;// obtengo el nombre del indicador
  let nodoIndicador = document.createTextNode(nombreIndicador);// creo el texto HTML con el nombre del indicador
  let nodoEntradaLista = document.createElement('li');// creo la entrada de lista sin texto
  nodoEntradaLista.appendChild(nodoIndicador);// inserto el texto(nombre del indicador) en la entrada de la lista
  listaHTML.appendChild(nodoEntradaLista);// inserto la entrada de la lista ahora con el texto en el documento HTML
}
