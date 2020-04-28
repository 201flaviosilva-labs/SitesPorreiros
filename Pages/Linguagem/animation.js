import { ind } from "./indiomas.js";


const DiaSemanaH2 = document.getElementById("DiaSemanaH2");
const TextP = document.getElementById("TextP");
const IndiomaSlect = document.getElementById("IndiomaSlect");

let semanaDia;
let indioma = ind.Portugues;

main();

function main() {
    console.log("Mensagem - IV. O MOSTRENGO -=> Fernando Pessoa");
    const valorIndiomaSlect = Object.keys(ind);
    for (let i = 0; i < valorIndiomaSlect.length; i++) {
        let opt = valorIndiomaSlect[i];
        const el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        if (valorIndiomaSlect[i] == "Portugues") {
            el.selected = "selected";
        }
        IndiomaSlect.appendChild(el);
    }
    atualizarIndioma();
}

IndiomaSlect.onchange = function function1() {
    switch (IndiomaSlect.value) {
        case "Ingles":
            indioma = ind.Ingles;
            break;
        case "Frances":
            indioma = ind.Frances;
            break;
        case "Japones":
            indioma = ind.Japones;
            break;
        case "Portugues":
            indioma = ind.Portugues;
            break;
        case "Russo":
            indioma = ind.Russo;
            break;
        default:
            console.log("Deffaut");
            break;
    }
    atualizarIndioma();
};


function atualizarIndioma() {
    switch (new Date().getDay()) {
        case 1:
            semanaDia = indioma.dia1;
            break;
        case 2:
            semanaDia = indioma.dia2;
            break;
        case 3:
            semanaDia = indioma.dia3;
            break;
        case 4:
            semanaDia = indioma.dia4;
            break;
        case 5:
            semanaDia = indioma.dia5;
            break;
        case 6:
            semanaDia = indioma.dia6;
            break;
        default:
            semanaDia = indioma.dia7;
            break;
    }
    DiaSemanaH2.innerHTML = semanaDia;
    TextP.innerHTML = indioma.texto;
}