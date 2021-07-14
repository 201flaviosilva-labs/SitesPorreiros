import { randomNumber, download } from "../../../Scripts/utils.js";

export default class HillClimbing {
	constructor() {
		this.maxNumber = 0;
		this.hideNumbers = [];
		this.numberAIs = 3;
		this.bestCombo = {};
		this.data = [];
		this.actualAIWorking = 0;
	}

	init(max, hideNumber, numberAIs) {
		this.getStorage();

		this.actualAIWorking = 0;
		this.bestCombo = {};
		this.maxNumber = max;
		this.hideNumbers = hideNumber;
		this.numberAIs = numberAIs;
	}

	getNewNumber(attempt) {
		const aiNumbers = []; // Numeros Selecionados pela AI
		const newData = {
			attemptNumber: attempt, // Numero da tentativa
			score: 0,// Conjunto das diferenças das AIs
			combos: this.bestCombo.combos || [], // {AINumber: number, difference: number, }
		};

		if (this.bestCombo.score) {
			const newNumber = randomNumber(0, this.maxNumber);
			newData.combos[this.actualAIWorking].AINumber = newNumber;
			newData.combos[this.actualAIWorking].difference = Math.abs(newNumber - this.hideNumbers[this.actualAIWorking]);

		} else {
			for (let i = 0; i < this.numberAIs; i++) { // Primeira vez, numeros totalmente random
				const newNumber = randomNumber(0, this.maxNumber);
				aiNumbers.push(newNumber);
				newData.combos.push({
					AINumber: newNumber,
					difference: Math.abs(newNumber - this.hideNumbers[i]),
				});
			}
		}

		// Calcula a potuação
		for (let i = 0; i < this.numberAIs; i++) {
			aiNumbers.push(newData.combos[i].AINumber);
			newData.score += newData.combos[i].difference;
		}

		if ((!this.bestCombo.score || newData.score <= this.bestCombo.score) && newData.score !== 0) {
			this.bestCombo = newData;

			this.actualAIWorking++;
			if (this.actualAIWorking >= this.numberAIs) this.actualAIWorking = 0;
		}

		this.data.push(newData);
		return aiNumbers;
	}

	// ---------------------------------------------------------------- Data
	getStorage() {
		if (localStorage.getItem("data")) {
			this.data = JSON.parse(localStorage.getItem("data"));
		} else {
			localStorage.setItem("data", JSON.stringify(this.data));
		}
	}

	clearStorage() {
		this.data = [];
		localStorage.removeItem("data");
	}

	exportData() {
		download(JSON.stringify(this), "Data.json", "json");
	}
}
