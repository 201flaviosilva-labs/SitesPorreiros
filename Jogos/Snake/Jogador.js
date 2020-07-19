const direcoesPossiveis = ["left", "right", "up", "down"];
class Jogador {
	constructor() {
		this.Tamanho = 10;
		this.X = 0;
		this.Y = 0;
		this.Velocidade = 10;
		this.Direcao = null;
		this.Cauda = [];
		this.Pontos = 0;
	}

	mudarDirecao(e) {
		const keyCode = e.keyCode;
		if (keyCode === 37 && this.Direcao !== direcoesPossiveis[1]) this.Direcao = direcoesPossiveis[0];
		if (keyCode === 39 && this.Direcao !== direcoesPossiveis[0]) this.Direcao = direcoesPossiveis[1];
		if (keyCode === 38 && this.Direcao !== direcoesPossiveis[3]) this.Direcao = direcoesPossiveis[2];
		if (keyCode === 40 && this.Direcao !== direcoesPossiveis[2]) this.Direcao = direcoesPossiveis[3];
	}

	mover() {
		const jogadorX = this.X;
		const jogadorY = this.Y;
		if (this.Direcao === direcoesPossiveis[0]) this.X -= this.Velocidade;
		if (this.Direcao === direcoesPossiveis[1]) this.X += this.Velocidade;
		if (this.Direcao === direcoesPossiveis[2]) this.Y -= this.Velocidade;
		if (this.Direcao === direcoesPossiveis[3]) this.Y += this.Velocidade;

		if (this.X < this.Tamanho - this.Velocidade) {
			this.X = 0;
			this.Pontos = 0;
			this.Cauda = [];
		}
		if (this.X > canvasWidth - this.Tamanho) {
			this.X = canvasWidth - this.Tamanho;
			this.Pontos = 0;
			this.Cauda = [];
		}
		if (this.Y < this.Tamanho - this.Velocidade) {
			this.Y = 0;
			this.Pontos = 0;
			this.Cauda = [];
		}
		if (this.Y > canvasHeight - this.Tamanho) {
			this.Y = canvasHeight - this.Tamanho;
			this.Pontos = 0;
			this.Cauda = [];
		}

		this.Cauda.shift();
		this.Cauda.push({ X: jogadorX, Y: jogadorY });
	}

}