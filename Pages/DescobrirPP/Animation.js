const ppTxt = document.getElementById("ppTxt");
const dataComeco = document.getElementById("dataComeco");
const dataFim = document.getElementById("dataFim");
const dataTempo = document.getElementById("dataTempo");
const Combinacao = document.getElementById("Combinacao");
const MostrarPPCheckBox = document.getElementById("MostrarPPCheckBox");

let palavrapasse = ppTxt.value;
let dataAtual = "";
let dataFinal = "";
let combinacao = "";

const catarteres = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

ppTxt.addEventListener(
    "keyup",
    () => {
        dataAtual = "" + new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + ":" + new Date().getMilliseconds();
        console.log(dataAtual);
        dataComeco.innerHTML = "Começo: " + dataAtual;
        palavrapasse = ppTxt.value;
        console.log(palavrapasse);
        encontrar();
    });

async function encontrar() {
    let milisegundosInicio = new Date().getTime();
    combinacao = "";
    let tantativa = combinacao;
    for (i = 0; i < palavrapasse.length; i++) {
        for (j = 0; j < catarteres.length; j++) {
            if (palavrapasse[i] == catarteres[j]) {
                combinacao += catarteres[j];
                break;
            }
            tantativa = combinacao + catarteres[j];
            console.log(tantativa);
        }
    }
    Combinacao.innerHTML = "Comb: " + combinacao;
    console.log("Descobri!");
    dataFinal = "" + new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + ":" + new Date().getMilliseconds();
    console.log("Data Final: " + dataFinal);
    dataFim.innerHTML = "Fim:" + dataFinal;
    milisegundosInicio = new Date().getTime() - milisegundosInicio;
    dataTempo.innerHTML = "Tempo: " + milisegundosInicio;
};

MostrarPPCheckBox.addEventListener("click",
    () => {
        if (ppTxt.type === "text") {
            ppTxt.type = "password";
        } else {
            ppTxt.type = "text";
        }
    })