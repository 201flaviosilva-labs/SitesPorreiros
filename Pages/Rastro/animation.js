const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const tilleSize = 20;
const row = [];
row.length = parseInt(canvasWidth / tilleSize);
const coll = [];
coll.length = parseInt(canvasHeight / tilleSize);

let trail = [];

const playerWidth = tilleSize;
const playerHeight = tilleSize;
let playerX = 0;
let playerY = 0;
let playerLatsPosition;
const speed = tilleSize;

draw();
function draw() {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	for (let i = 0; i < row.length; i++) {
		for (let j = 0; j < coll.length; j++) {
			ctx.strokeStyle = "rgb(255, 255, 255, 0.5)";
			ctx.strokeRect(i * tilleSize, j * tilleSize, tilleSize, tilleSize);
		}
	}
	ctx.fillStyle = "white";
	ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
	ctx.fillStyle = "red";
	ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
}

document.addEventListener("keydown", (e) => moverJogador(e));
function moverJogador(e) {
	const keyCode = e.keyCode;

	playerLatsPosition = { x: playerX, y: playerY };

	if (keyCode === 37) playerX -= speed;
	if (keyCode === 39) playerX += speed;
	if (keyCode === 38) playerY -= speed;
	if (keyCode === 40) playerY += speed;

	if (playerX < playerWidth - speed) playerX = 0;
	if (playerX > canvasWidth - playerWidth) playerX = canvasWidth - playerWidth;
	if (playerY < playerHeight - speed) playerY = 0;
	if (playerY > canvasHeight - playerHeight) playerY = canvasHeight - playerHeight;
	draw();
	drawSnake();
}

function drawSnake() {
	advanceSnake();
	trail.forEach(drawSnakePart);
}

function advanceSnake() {
	const head = {
		x: playerLatsPosition.x,
		y: playerLatsPosition.y
	};
	trail.unshift(head);
}

function drawSnakePart(trailPart) {
	ctx.fillStyle = 'lightgreen'; // Fundo
	ctx.strokestyle = 'darkgreen'; // Borda
	ctx.fillRect(trailPart.x, trailPart.y, tilleSize, tilleSize);
	ctx.strokeRect(trailPart.x, trailPart.y, tilleSize, tilleSize);
}

canvas.addEventListener("click", () => {
	trail = [];
	draw();
	drawSnake();
});