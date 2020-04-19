const body = document.getElementById("body");
const bolinha = document.createElement("div");
let tamanho = 1;
let pausa = 1000;
let cor = 0;

body.addEventListener(
    "click",
    () => {
        const rangeBolaW = Math.floor(Math.random() * window.innerWidth);
        const rangeBolaH = Math.floor(Math.random() * window.innerHeight);

        bolinha.classList.add("bolas");
        bolinha.style.left = rangeBolaW + "px";
        bolinha.style.top = rangeBolaH + "px";
        bolinha.style.width = bolinha.style.height = tamanho + "px";
        body.appendChild(bolinha);
    });

function bolinhaCresce() {
    cor = cor * 2;
    tamanho++;
    bolinha.style.width = bolinha.style.height = tamanho + "px";
    bolinha.style.backgroundColor = "rgb(" + cor + "," + cor + "," + cor + ")";
}

setInterval(() => bolinhaCresce(), pausa);