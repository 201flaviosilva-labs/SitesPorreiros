const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const ts = 25; // tile size
const row = [];
row.length = parseInt(canvasWidth / ts);
const coll = [];
coll.length = parseInt(canvasHeight / ts);


for (let i = 0; i < row.length; i++) {
	for (let j = 0; j < coll.length; j++) {
		ctx.strokeStyle = "rgb(255, 255, 255, 0.5)";
		ctx.strokeRect(i * ts, j * ts, ts, ts);
	}
}


document.addEventListener("keydown", (e) => moverJogador(e));
function moverJogador(e) {
	const keyCode = e.keyCode;

	playerLatsPosition = { x: playerX, y: playerY };

	if (keyCode === 37) playerX -= speed;
	if (keyCode === 39) playerX += speed;
	if (keyCode === 38) playerY -= speed;
	if (keyCode === 40) playerY += speed;
}