const squares = document.querySelectorAll("div#Canvas div");
const pontos = document.getElementById("pontos");

const width = 10;
let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [2, 1, 0];
let direction = 1;
let score = 0;
let speed = 1;
let intervalTime = 0;
let interval = 0;

document.addEventListener('keydown', control);
function control(e) {
	squares[currentIndex].classList.remove("snake");

	if (e.keyCode === 39) direction = 1;
	else if (e.keyCode === 38) direction = -width;
	else if (e.keyCode === 37) direction = -1;
	else if (e.keyCode === 40) direction = +width;
}

function starGame() {
	currentSnake.forEach(i => squares[i].classList.remove("snake"));
	squares[appleIndex].classList.remove("apple");
	clearInterval(interval);
	score = 0;
	// randomApple();
	direction = 1;
	pontos.innerHTML = score;
	intervalTime = 1000;
	currentSnake = [2, 1, 0];
	currentIndex = 0;
	currentSnake.forEach(i => squares[i].classList.add("snake"));
	interval = setInterval(moveOutcomes, intervalTime);
}