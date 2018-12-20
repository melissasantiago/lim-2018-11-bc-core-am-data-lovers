const inicioPantalla = () => {
  document.getElementById("indicators").style.display = "none";
  document.getElementById("root").style.display = "block";
}
inicioPantalla();
/*
const countryData = document.getElementById("welcome")
const dataResult = () => {
  document.getElementById("root").style.display = "block";
  document.getElementById("indicators").style.display = "block";
  document.getElementById("initial-page").style.display = "none";
}
countryData.addEventListener("click", dataResult);
*/

let botonPeru=document.getElementById("btn-per");

const goPeru = () => {
  document.getElementById("root").style.display = "block";
  document.getElementById("indicators").style.display = "block";
  document.getElementById("initial-page").style.display = "none";


  let listaHTML = document.getElementById("list");//esto iria en el main.js
  let listaNombreIndicadoresPeru=getNombresIndicadores(data,"PER");

  // limpiar la lista en html
  listaHTML.innerHTML="";

  function imprimirIndicador(indicador){


    let nombreIndicador=indicador;// obtengo el nombre del indicador
    let nodoIndicador = document.createTextNode(nombreIndicador);// creo el texto HTML con el nombre del indicador
    let nodoEntradaLista = document.createElement("li");// creo la entrada de lista sin texto
    nodoEntradaLista.appendChild(nodoIndicador);// inserto el texto(nombre del indicador) en la entrada de la lista
    listaHTML.appendChild(nodoEntradaLista);// inserto la entrada de la lista ahora con el texto en el documento HTML
 }
listaNombreIndicadoresPeru.map(imprimirIndicador);
};
botonPeru.addEventListener("click",goPeru);
