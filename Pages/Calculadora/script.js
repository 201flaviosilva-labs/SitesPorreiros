const resp = document.getElementById("resp");

const btnIgual = document.getElementById("btn-Igual");
const btnLimpar = document.getElementById("btn-Limpar");
const btnNove = document.getElementById("btn-Nove");
const btnOito = document.getElementById("btn-Oito");
const btnSete = document.getElementById("btn-Sete");
const btnSeis = document.getElementById("btn-Seis");
const btnCinco = document.getElementById("btn-Cinco");
const btnQuatro = document.getElementById("btn-Quatro");
const btnTres = document.getElementById("btn-Tres");
const btnDois = document.getElementById("btn-Dois");
const btnUm = document.getElementById("btn-Um");
const btnZero = document.getElementById("btn-Zero");
const btnPi = document.getElementById("btn-Pi");
const btnDiv = document.getElementById("btn-Div");
const btnMult = document.getElementById("btn-Mult");
const btnSoma = document.getElementById("btn-Soma");
const btnSub = document.getElementById("btn-Sub");
const btnQuadrado = document.getElementById("btn-Quadrado");
const btnCubo = document.getElementById("btn-Cubo");
const btnPotencia = document.getElementById("btn-Potencia");

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

let result = "";

btnIgual.addEventListener("click", () => resp.innerHTML = result = eval(result));
btnLimpar.addEventListener("click", () => resp.innerHTML = result = "0");
btnNove.addEventListener("click", () => resp.innerHTML = result += "9");
btnOito.addEventListener("click", () => resp.innerHTML = result += "8");
btnSete.addEventListener("click", () => resp.innerHTML = result += "7");
btnSeis.addEventListener("click", () => resp.innerHTML = result += "6");
btnCinco.addEventListener("click", () => resp.innerHTML = result += "5");
btnQuatro.addEventListener("click", () => resp.innerHTML = result += "4");
btnTres.addEventListener("click", () => resp.innerHTML = result += "3");
btnDois.addEventListener("click", () => resp.innerHTML = result += "2");
btnUm.addEventListener("click", () => resp.innerHTML = result += "1");
btnZero.addEventListener("click", () => resp.innerHTML = result += "0");
btnPi.addEventListener("click", () => resp.innerHTML = result += Math.PI);
btnDiv.addEventListener("click", () => resp.innerHTML = result += "/");
btnMult.addEventListener("click", () => resp.innerHTML = result += "*");
btnSoma.addEventListener("click", () => resp.innerHTML = result += "+");
btnSub.addEventListener("click", () => resp.innerHTML = result += "-");

// btnQuadrado.addEventListener("click", () => resp.result += 9);
// btnCubo.addEventListener("click", () => resp.innerHTML = result += 9);
// btnPotencia.addEventListener("click", () => resp.innerHTML = result += 9);