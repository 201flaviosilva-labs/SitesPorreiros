function update(e) {
	const x = e.clientX || 1;
	const y = e.clientY || 1;
	document.documentElement.style.setProperty('--cursorX', x + 'px');
	document.documentElement.style.setProperty('--cursorY', y + 'px');
}
document.addEventListener('mousemove', update);
document.addEventListener('touchmove', update);



const canvas = document.getElementById("Canvas");
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var ctx = canvas.getContext("2d");

ctx.font = "6px monospace";
ctx.fillText("Eu sou invisivel!!", Math.floor(Math.random() * canvasWidth), Math.floor(Math.random() * canvasHeight));

function criarBol() {
	const posicaoX = Math.floor(Math.random() * canvasWidth);
	const posicaoY = Math.floor(Math.random() * canvasHeight);
	const tamanho = Math.floor(Math.random() * 25 + 1);

	ctx.beginPath();
	ctx.fillStyle = "rgb(" + funcMudarCor() + "," + funcMudarCor() + "," + funcMudarCor() + ")";
	ctx.arc(posicaoX, posicaoY, tamanho, 0, Math.PI * 2, true);
	ctx.fill();

	// ctx.beginPath();
	// ctx.arc(posicaoX, posicaoY, 50, 0, tamanho * Math.PI, false);
	// ctx.fillStyle = "rgba(" + funcMudarCor() + "," + funcMudarCor() + "," + funcMudarCor() + ", 0.25)";
	// ctx.fill();
	// ctx.lineWidth = 1;
	// ctx.strokeStyle = '#000000';
	// ctx.stroke();
}

function funcMudarCor() {
	return Math.floor(Math.random() * 251);
}

setInterval(() => criarBol(), 5000);

// <p>Eu sou invisivel!!</p>
