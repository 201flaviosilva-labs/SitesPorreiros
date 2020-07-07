const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

let trail = [{ x: 0, y: 10 }, { x: 10, y: 10 }, { x: 20, y: 10 }];

// Player
const playerWidth = 10;
const playerHeight = 10;
let playerX = 30;
let playerY = 10;
let playerLatsPosition;
const speed = 10;

let frutX = canvasWidth / 2 + playerWidth / 2;
let frutY = canvasHeight / 2 + playerHeight / 2;

// function draw() show in the screen all objects
draw();
function draw() {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	ctx.fillStyle = "white";
	ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
	ctx.fillStyle = "blue";
	ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
}

document.addEventListener("keydown", (e) => moverJogador(e));
// This function move the player
// Move the Player by keyboard
// if Player touch in the canvas wall
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

	for (let i = 0; i < trail.length; i++) {
		if (playerX == trail[i].x &&
			playerY == trail[i].y) console.log("Beep");
	}
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
	trail.pop();
}

function drawSnakePart(trailPart) {
	ctx.fillStyle = 'lightgreen'; // Fundo
	ctx.strokestyle = 'darkgreen'; // Borda
	ctx.fillRect(trailPart.x, trailPart.y, 10, 10);
	ctx.strokeRect(trailPart.x, trailPart.y, 10, 10);
}