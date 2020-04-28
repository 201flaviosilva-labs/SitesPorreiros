const vermelho = document.getElementById("vermelho");
const amarelo = document.getElementById("amarelo");
const verde = document.getElementById("verde");

let count = 0;
let flag = true;

setInterval(main, 500);

function main() {
    console.log(count)
    count++;
    if (count < 30) { // Vermelho
        amarelo.style.visibility = "hidden";
        vermelho.style.visibility = "visible";
    } else if (count > 29 && count < 60) { // Verde
        vermelho.style.visibility = "hidden";
        verde.style.visibility = "visible";
        if (count > 50) {
            if (flag === true) {
                flag = false;
                verde.style.backgroundColor = "green";
            } else {
                flag = true;
                verde.style.backgroundColor = "lightgreen";
            }
        }
    } else { // Amarelo
        vermelho.style.visibility = "hidden";
        amarelo.style.visibility = "visible";
        verde.style.visibility = "hidden";
        if (flag === true) {
            flag = false;
            amarelo.style.backgroundColor = "orange";
        } else {
            flag = true;
            amarelo.style.backgroundColor = "yellow";
        }
    }
    if (count === 70) {
        flag = true;
        count = 0;
    }
}