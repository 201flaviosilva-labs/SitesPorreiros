import { map } from "./map.js"; // get the Tile Map
const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const tilleSize = 15;

window.onload = () => draw();
function draw() {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	// Map 5 x 5 = 25
	for (let x = 0; x < map.length; x++) { // Horozontais
		for (let y = 0; y < map[x].length; y++) { // Verticais
			ctx.strokeStyle = "rgb(255, 255, 255, 0.5)";
			ctx.strokeRect(x * tilleSize, y * tilleSize, tilleSize, tilleSize);
			ctx.fillStyle = "black";
			if (map[x][y] == 0) ctx.fillStyle = "red";
			if (map[x][y] == 20) ctx.fillStyle = "blue";
			ctx.fillRect(x * tilleSize, y * tilleSize, tilleSize, tilleSize);
		}
	}
}