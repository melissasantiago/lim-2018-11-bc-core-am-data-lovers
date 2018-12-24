const inicioPantalla = () => {
  document.getElementById('initial-page').style.display = 'block';
  document.getElementById('indicators').style.display = 'none';
};
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

  const botonPeru = document.getElementById('btn-per');
  const goPeru = () => {
    document.getElementById('initial-page').style.display = 'none';
    document.getElementById('indicators').style.display = 'block';
}
botonPeru.addEventListener('click', goPeru);
