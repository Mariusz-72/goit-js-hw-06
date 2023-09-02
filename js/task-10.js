function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createButton = document.querySelector("[data-create]");
// pobranie elementu html z atrybutem data-create i przypisanie go do zmiennej, podobnie pozostałe dwa
const destroyButton = document.querySelector("[data-destroy]");
const boxesDiv = document.getElementById("boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
// nasłuch na przyciski 
function createBoxes() {
  const amount = document.querySelector("input").value; //do amount wpada ilość podana w input
  let size = 30;
//pętla po zadanej w amount ilości:
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px"; //jak w poprzednim zad. musi być dodana jednostka px
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box); //dodaje nowy box do kontenera div
    size += 10; //każdy kolejny box będzie większy
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
} // usunięcie boxów z kontenera div