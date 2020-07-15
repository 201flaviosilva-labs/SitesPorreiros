const canvas = document.getElementById("Canvas");
const tilleSize = 20;
const maxX = parseInt(canvas.width / tilleSize) - 1;
const maxY = parseInt(canvas.height / tilleSize) - 1;
let dificulade = 0.9;
let map = [];

defenirDificuldade();
function defenirDificuldade(valor) {
	console.log("Beep");
	if (valor == "Dificil") dificulade = 0.65;
	if (valor == "Medio") dificulade = 0.75;
	else dificulade = 0.9;

	for (let x = 0; x <= maxX; x++) {
		map[x] = [];
		for (let y = 0; y <= maxY; y++) {
			map[x][y] = Math.random() > dificulade ? 0 : 1;
		}
	}
	map[maxX][maxY] = 2;
}

