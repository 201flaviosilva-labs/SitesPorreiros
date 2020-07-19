class Maca {
	constructor() {
		const tamanho = 20;
		this.Raio = tamanho;
		do {
			do {
				this.X = Math.floor(Math.random() * canvasWidth - tamanho);
				this.Y = Math.floor(Math.random() * canvasHeight - tamanho);
			} while (this.X < 0);
		} while (this.Y < 0);
	}
}