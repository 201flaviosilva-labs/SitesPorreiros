const BodyId = document.getElementById("BodyId");
const TempoH1 = document.getElementById("TempoH1");
const DiaDaSemana = document.getElementById("DiaDaSemana");

let semanaDia;
let corBody = true;

setInterval(mudaDeCorFundo, 2000);

function mudaDeCorFundo() {
    if (corBody) {
        BodyId.style.backgroundColor = "rgb(" + funcMudarCor() + "," + funcMudarCor() + "," + funcMudarCor() + ")";
        corBody = false;
    } else {
        TempoH1.style.color = "rgb(" + funcMudarCor() + "," + funcMudarCor() + "," + funcMudarCor() + ")";
        DiaDaSemana.style.color = "rgb(" + funcMudarCor() + "," + funcMudarCor() + "," + funcMudarCor() + ")";
        corBody = true;
    }
}

const funcMudarCor = () => Math.floor(Math.random() * 251);

setInterval(temporolizador);
function temporolizador() {
    let atualMes2 = new Date().getMonth() + 1;
    TempoH1.innerHTML = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + ":" + new Date().getMilliseconds() + " - " + new Date().getDate() + "/" + atualMes2 + "/" + new Date().getFullYear();

    switch (new Date().getDay()) {
        case 1:
            semanaDia = "Segunda - Feira";
            break;
        case 2:
            semanaDia = "Terça - Feira";
            break;
        case 3:
            semanaDia = "Quarta - Feira";
            break;
        case 4:
            semanaDia = "Quinta - Feira";
            break;
        case 5:
            semanaDia = "Sexta - Feira";
            break;
        case 6:
            semanaDia = "Sábado";
            break;
        default:
            semanaDia = "Domingo";
            break;
    }
    DiaDaSemana.innerHTML = semanaDia;
}

let onFullscreen = false;
BodyId.addEventListener("click", fullScreen);
function fullScreen() {
    if (onFullscreen) closeFullscreen();
    else openFullscreen();

    onFullscreen = !onFullscreen;
}

function openFullscreen() {
    if (BodyId.requestFullscreen) BodyId.requestFullscreen();
    else if (BodyId.webkitRequestFullscreen) BodyId.webkitRequestFullscreen(); // Safari
    else if (BodyId.msRequestFullscreen) BodyId.msRequestFullscreen();
}

function closeFullscreen() {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen(); // Safari
    else if (document.msExitFullscreen) document.msExitFullscreen(); // IE11

}