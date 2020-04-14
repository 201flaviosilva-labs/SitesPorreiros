const h1Text = document.getElementById("h1Text");
const imagenImg = document.getElementById("imagenImg");
const btnOn = document.getElementById("btn");

let flag = false;
// true === ligado
// flase === desligado

btn.addEventListener(
    "click",
    () => {
        if (flag) { // Ligado
            main.style.backgroundColor = "black";
            h1Text.innerHTML = "Ilumina-me!";
            h1Text.style.color = "white";
            imagenImg.src = "./Lampada/lightoff.gif";
            btnOn.innerHTML = "Ligar";
        } else { // Desligado
            main.style.backgroundColor = "white";
            h1Text.innerHTML = "Escurece-me";
            h1Text.style.color = "black";
            imagenImg.src = "./Lampada/lighton.gif";
            btnOn.innerHTML = "Desligar";
        }
        flag = !flag;
    });