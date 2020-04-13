const body = document.getElementById("body");
const TempoH1 = document.getElementById("TempoH1");
const DiaDaSemana = document.getElementById("DiaDaSemana");
const pFooter = document.getElementById("pFooter");
const IndiomaSlect = document.getElementById("IndiomaSlect");

let semanaDia;
let corBody = true;

setInterval(() => mudaDeCorFundo(), 2000);

function mudaDeCorFundo() {
    const corMudar = funcMudarCor();

    if (corBody) {
        body.style.backgroundColor = "rgb(" + corMudar[0] + "," + corMudar[1] + "," + corMudar[2] + ")";
        corBody = false;
    } else {
        TempoH1.style.color = "rgb(" + corMudar[0] + "," + corMudar[1] + "," + corMudar[2] + ")";
        DiaDaSemana.style.color = "rgb(" + corMudar[0] + "," + corMudar[1] + "," + corMudar[2] + ")";
        pFooter.style.color = "rgb(" + corMudar[0] + "," + corMudar[1] + "," + corMudar[2] + ")";
        corBody = true;
    }
}

function funcMudarCor() {
    const corMudar = [];
    for (let i = 0; i < 3; i++) {
        corMudar[i] = Math.floor(Math.random() * 251);
    }
    return corMudar;
}

setInterval(
    () => {
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
    }, 1);