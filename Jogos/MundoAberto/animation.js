const canvas = document.getElementById("Canvas");
const jogador = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const jogadorWidth = 10;
const jogadorHeight = 10;
let jogadorX = canvasWidth / 2 + jogadorWidth / 2;
let jogadorY = canvasHeight / 2 + jogadorHeight / 2;

const velocidade = 10;

desenhar();
function desenhar() {
	jogador.clearRect(0, 0, canvasWidth, canvasHeight);
	jogador.fillStyle = "white";
	jogador.fillRect(jogadorX, jogadorY, jogadorWidth, jogadorHeight);
}

document.addEventListener("keydown", (e) => moverJogador(e));

function moverJogador(e) {
	const keyCode = e.keyCode;
	if (keyCode === 37 && jogadorX >= jogadorWidth) jogadorX -= velocidade;
	if (keyCode === 39 && jogadorX <= canvasWidth - jogadorWidth - velocidade) jogadorX += velocidade;
	if (keyCode === 38 && jogadorY >= jogadorHeight) jogadorY -= velocidade;
	if (keyCode === 40 && jogadorY <= canvasHeight - jogadorHeight - velocidade) jogadorY += velocidade;
	desenhar();
}