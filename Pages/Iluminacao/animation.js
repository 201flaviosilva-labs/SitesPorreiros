const h1Text = document.getElementById("h1Text");
const imagenImg = document.getElementById("imagenImg");
const btnOn = document.getElementById("btn");

const source = "../../Assets/Icons/Lampada/";

let flag = false;
// true === ligado
// flase === desligado

btn.addEventListener("click", () => {
  if (flag) {
    // Ligado
    document.body.style.backgroundColor = "black";
    h1Text.innerHTML = "Ilumina-me!";
    h1Text.style.color = "white";
    imagenImg.src = source + "lightoff.svg";
    btnOn.innerHTML = "Ligar";
    btnOn.classList.remove("btnOn");
    btnOn.classList.add("btnOff");
  } else {
    // Desligado
    document.body.style.backgroundColor = "white";
    h1Text.innerHTML = "Escurece-me";
    h1Text.style.color = "black";
    imagenImg.src = source + "lighton.svg";
    btnOn.innerHTML = "Desligar";
    btnOn.classList.remove("btnOff");
    btnOn.classList.add("btnOn");
  }
  flag = !flag;
});
