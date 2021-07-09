import { updateData } from "./chartUtils.js";
import { randomNumber } from "../../Scripts/utils.js";


window.onload = () => {
	const canvas = document.getElementById("canvas").getContext("2d");

	const score = {
		rock: 0,
		paper: 0,
		scissors: 0,
	};

	const chartsTypes = ["line", "bar", "radar", "pie", "doughnut", "polarArea"]; // scatter, bubble // https://www.chartjs.org/docs/2.9.4/charts/

	const chartSelectType = chartsTypes[randomNumber(0, chartsTypes.length - 1)];
	console.log("Chart type: " + chartSelectType);

	const config = {
		type: chartSelectType,
		data: {
			labels: ["Pedra", "Papel", "Tesoura"],
			datasets: [{
				label: "Pedra Papel Tesoura",
				data: [0, 0, 0],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
				],
				borderWidth: 1,
			}],
		},
		options: {
			responsive: false,
			maintainAspectRatio: true,
			legend: {
				labels: {
					fontSize: 0,
				},
			},
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		},
	};

	const chart = new Chart(canvas, config);

	setInterval(() => {
		const scoreKeys = Object.keys(score);

		const selectOption = randomNumber(0, scoreKeys.length - 1);

		score[scoreKeys[selectOption]]++;

		updateData(chart, selectOption, score[scoreKeys[selectOption]]);
	}, 500);

}
