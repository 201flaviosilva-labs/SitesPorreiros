const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

function novoNumero(max = 1) { return parseInt(Math.random() * max); }
class Bola {
	constructor() {
		this.x = parseInt(canvasWidth / 2);
		this.y = parseInt(canvasHeight / 2);
		this.speedX = Number(`${novoNumero(2) ? "+" : "-"}${novoNumero(21)}`);
		this.speedY = Number(`${novoNumero(2) ? "+" : "-"}${novoNumero(21)}`);
		this.raio = novoNumero(10);
		this.cor = `rgb(${novoNumero(250)}, ${novoNumero(250)}, ${novoNumero(250)})`;
	}

	moverBola() {
		this.x += this.speedX;
		this.y += this.speedY;

		if (this.x < this.raio) this.speedX = -this.speedX;
		if (this.x > canvasWidth - this.raio) this.speedX = -this.speedX;
		if (this.y < this.raio) this.speedY = -this.speedY;
		if (this.y > canvasHeight - this.raio) this.speedY = -this.speedY;

		this.desenhar();
	}

	desenhar() {
		ctx.fillStyle = this.cor;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2, true);
		ctx.fill();
	}
}

const bolas = [];
let numBolas;

const probBolas = Math.random();
if (probBolas < 0.25) numBolas = novoNumero(10);
else if (probBolas < 0.5) numBolas = novoNumero(100);
else if (probBolas < 0.75) numBolas = novoNumero(1000);
else numBolas = novoNumero(10000);

for (let i = 0; i < numBolas; i++) bolas[i] = new Bola();

const limparTela = Math.random() > 0.5 ? true : false;
setInterval(() => {
	if (limparTela) ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	for (let i = 0; i < bolas.length; i++) bolas[i].moverBola();
}, 1000 / 30);
