const canvas = document.getElementById("Canvas");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const ctx = canvas.getContext("2d");

class Inimigo {
	constructor() {
		const tamanho = Math.floor(Math.random() * 20) + 10;
		this.Width = tamanho;
		this.Height = tamanho;
		this.X = 0;
		this.Y = Math.floor(Math.random() * canvasHeight - tamanho);
		this.Velocidade = Math.floor(Math.random() * 50) + 2;
		this.Cor = `rgb(${randomCor()}, ${randomCor()}, ${randomCor()})`;
	}
	mover() {
		this.X += this.Velocidade;
		desenhar();
	}
}
function randomCor() { return Math.floor(Math.random() * 251); }

let inimigosArr = [];
inimigosArr[0] = new Inimigo();


function desenhar() {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	for (let i = 0; i < inimigosArr.length; i++) {
		ctx.fillStyle = inimigosArr[i].Cor;
		ctx.fillRect(inimigosArr[i].X, inimigosArr[i].Y, inimigosArr[i].Width, inimigosArr[i].Height);
	}
}

setInterval(() => {
	for (let i = 0; i < inimigosArr.length; i++) {
		inimigosArr[i].mover();
		if (inimigosArr[i].X > canvasWidth) inimigosArr.splice(i, 1);
	}
}, 50);

setInterval(() => inimigosArr[inimigosArr.length] = new Inimigo(), 1);