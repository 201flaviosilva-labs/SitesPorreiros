import { randomNumber } from "../../Scripts/utils.js";

window.onload = () => {
	paper.setup("island");

	const islandCanvas = document.getElementById("island");
	const perlinCanvas = document.getElementById("perlin");

	islandCanvas.addEventListener("click", () => {
		Island.toggleDebug();
		perlinCanvas.style.display = (perlinCanvas.style.display == "block" ? "none" : "block");
	});

	Island.init();
}
