const inicioPantalla = () => {
  document.getElementById("indicators").style.display = "none";
  document.getElementById("root").style.display = "block";
}
inicioPantalla();

const countryData = document.getElementById("welcome")
const dataResult = () => {
  document.getElementById("root").style.display = "block";
  document.getElementById("indicators").style.display = "block";
  document.getElementById("initial-page").style.display = "none";
}
countryData.addEventListener("click", dataResult);
