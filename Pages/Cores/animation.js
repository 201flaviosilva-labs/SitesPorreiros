const canvas = document.getElementById("Canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

function novaCor() { return Math.floor(Math.random() * 251); }

main();
function main() {
	for (let i = 0; i < canvasWidth; i++) {
		for (let j = 0; j < canvasHeight; j++) {
			const cor = `rgb(${novaCor()}, ${novaCor()}, ${novaCor()})`;
			ctx.fillStyle = cor;
			ctx.fillRect(i, j, 1, 1);
		}
	}
}
