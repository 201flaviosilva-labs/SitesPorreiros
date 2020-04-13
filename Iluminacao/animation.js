const imagenImg = document.getElementById("imagenImg");

const main = document.getElementById("main");

const btnOn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff");


btnOn.addEventListener(
    "click",
    () => {
        imagenImg.src = "./Lampada/lighton.gif";
        main.style.backgroundColor = "white";
    });

btnOff.addEventListener(
    "click",
    () => {
        imagenImg.src = "./Lampada/lightoff.gif";
        main.style.backgroundColor = "black";
    });