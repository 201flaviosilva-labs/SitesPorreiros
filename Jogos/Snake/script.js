let maca = new Maca();
const jogador = new Jogador();
document.addEventListener("keydown", (e) => jogador.mudarDirecao(e));
if (!localStorage.maiorPontuacao) localStorage.maiorPontuacao = 0;

window.load = () => desenhar();
let tempo = setInterval(desenhar, 50);
function desenhar() {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);

	ctx.font = "18px monospace";
	ctx.fillStyle = "rgb(0,0,255, 0.7)";
	ctx.fillText(`Pontos: ${jogador.Pontos} / ${localStorage.maiorPontuacao}`, canvasWidth / 2 - 25, 20);

	ctx.beginPath();
	ctx.fillStyle = "Red";
	ctx.arc(maca.X, maca.Y, maca.Raio, 0, 2 * Math.PI);
	ctx.fill();
	ctx.closePath();

	jogador.mover();


	ctx.strokeStyle = "White";
	ctx.fillStyle = "Green";
	ctx.fillRect(jogador.X, jogador.Y, jogador.Tamanho, jogador.Tamanho);
	ctx.strokeRect(jogador.X, jogador.Y, jogador.Tamanho, jogador.Tamanho);

	for (let i = 0; i < jogador.Cauda.length; i++) {
		ctx.fillStyle = "blue";
		ctx.fillRect(jogador.Cauda[i].X, jogador.Cauda[i].Y, jogador.Tamanho, jogador.Tamanho);
		ctx.strokeRect(jogador.Cauda[i].X, jogador.Cauda[i].Y, jogador.Tamanho, jogador.Tamanho);
	}

	colisao();
}

function colisao() {
	if (jogador.X > maca.X &&
		jogador.X < maca.X + maca.Raio &&
		jogador.Y > maca.Y &&
		jogador.Y < maca.Y + maca.Raio) {
		jogador.Pontos++;
		if (jogador.Pontos > localStorage.maiorPontuacao) localStorage.maiorPontuacao = jogador.Pontos;
		maca = new Maca();
		const jogadorX = jogador.X;
		const jogadorY = jogador.Y;
		jogador.Cauda.push({ X: jogadorX, Y: jogadorY });
	};
}