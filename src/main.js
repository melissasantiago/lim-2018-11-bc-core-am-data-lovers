const inicioPantalla = () => {
  document.getElementById('initial-page').style.display = 'block';
  document.getElementById('indicators').style.display = 'none';
};
inicioPantalla();

const limpiarListaIndicadores = (listaHTML) => {
  listaHTML.innerHTML = '' ; // limpiar la lista en html para que no se repita varias veces cada vez que le de click en el pais
};

const imprimirIndicadores = (arregloIndicadores, listaHTML) => {
  for (let a = 0; a < arregloIndicadores.length;a++) {
    let indicador = arregloIndicadores[a].indicatorName;// obtengo el nombre del indicador
    imprimirIndicador(indicador, listaHTML);
  }
};

const funcFiltroPob = (elemento) => {
  // debe retornar un valor verdadero o falso (booleano)
  let codigoIndicador = elemento.indicatorCode;
  let iniciales = codigoIndicador.slice(0, 6);
  return iniciales === 'SP.POP';
};

const filtradoEduc = (elemento1) => {
  let codigo = elemento1.indicatorCode;
  if (codigo.slice(0, 3) === 'SE.') {
    return true;
  } else {
    return false;
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
  let botonFiltroProteccion = document.getElementById('filter-prot');
  let botonFiltroFinanzas = document.getElementById('filter-fin');

  // FUNCION DE FILTRADO
  const filtrarPoblacionPeru = () => {
    // reducir el arreglo
    let arrayFiltrado = arrayDeIndicadoresDePeru.filter(funcFiltroPob);

    let listaHTML = document.getElementById('list');
    limpiarListaIndicadores(listaHTML);
    imprimirIndicadores(arrayFiltrado, listaHTML);
  };

  // CUANDO SE HAGA CLICK EN EL BOTON "POBLACION", SE LLAMARA A LA FUNCION YA DEFINIDA ARRIBA filtrarPoblacionPeru
  botonFiltroPoblacion.addEventListener('click', filtrarPoblacionPeru);

  botonFiltroViolencia.addEventListener('click', filtrarViolenciaPeru);
  botonFiltroEducacion.addEventListener('click', filtrarEducacionPeru);
  botonFiltroProteccion.addEventListener('click', filtrarProteccionPeru);
  botonFiltroFinanzas.addEventListener('click', filtrarFinanzasPeru);
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

  let listaHTML = document.getElementById('list');
  limpiarListaIndicadores(listaHTML);
  imprimirIndicadores(arrayDeIndicadoresDeMexico, listaHTML);


  let botonFiltroPoblacion = document.getElementById('filter-pob');
  let botonFiltroViolencia = document.getElementById('filter-vio');
  let botonFiltroEducacion = document.getElementById('filter-edu');
  let botonFiltroProteccion = document.getElementById('filter-prot');
  let botonFiltroFinanzas = document.getElementById('filter-fin');


  const filtrarPoblacionMexico = () => {
    let arrayFiltrado = arrayDeIndicadoresDeMexico.filter(funcFiltroPob);

    let listaHTML = document.getElementById('list');
    limpiarListaIndicadores(listaHTML);
    imprimirIndicadores(arrayFiltrado, listaHTML);
  };

  botonFiltroPoblacion.addEventListener('click', filtrarPoblacionMexico);

  const filtrarEducacionMexico = () => {
    let arrayFiltrado = arrayDeIndicadoresDeMexico.filter(filtradoEduc);
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

botonChile.addEventListener('click', goChile);

function imprimirIndicador(indicador, listaHTML) {
  let nombreIndicador = indicador ;// obtengo el nombre del indicador
  let nodoIndicador = document.createTextNode(nombreIndicador);// creo el texto HTML con el nombre del indicador
  let nodoEntradaLista = document.createElement('li');// creo la entrada de lista sin texto
  nodoEntradaLista.appendChild(nodoIndicador);// inserto el texto(nombre del indicador) en la entrada de la lista
  listaHTML.appendChild(nodoEntradaLista);// inserto la entrada de la lista ahora con el texto en el documento HTML
}
