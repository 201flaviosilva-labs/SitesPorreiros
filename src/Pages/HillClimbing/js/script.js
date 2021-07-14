// Util
import HillClimbing from "./HillClimbing.js";
import { randomNumber, deleteAllChildDom } from "../../../Scripts/utils.js";

class GuessNumber {
	constructor() {
		// UI
		document.getElementById("btnStartGame").addEventListener("click", () => this.reset());
		document.getElementById("btnClear").addEventListener("click", () => this.clear());
		document.getElementById("btnChangeMax").addEventListener("click", () => this.changeMax());
		document.getElementById("btnExport").addEventListener("click", () => this.hillClimbing.exportData());
		this.TableAttempts = document.getElementById("TableAttempts");

		// Config
		this.hillClimbing = new HillClimbing();
		this.numberAIs = 4;
		this.tryAINumber = []; // Numero "Input" AI

		this.maxNumber = 10;
		this.numberAttempts = 0;// Numero de tentativas
		this.hideNumbers = [];

		this.win = false;

		document.getElementById("spanMaxNumber").innerHTML = this.maxNumber;
	}

	reset() {
		this.clear();

		this.win = false;
		this.numberAttempts = 0;

		for (let i = 0; i < this.numberAIs; i++) {
			this.hideNumbers[i] = randomNumber(0, this.maxNumber);
			this.tryAINumber[i] = 0;
			document.getElementById("spanNumberHide" + (i + 1)).innerHTML = this.hideNumbers[i];
		}

		this.hillClimbing.init(this.maxNumber, this.hideNumbers, this.numberAIs);
		setTimeout(() => this.startAI(), 1);
	}

	startAI() {
		const stopLoop = 100 * this.maxNumber * this.numberAIs; // Stop loop, if have a Bug :) // Sistema de segurança

		do {
			const AIAttempts = this.numberAttempts + 1;
			this.tryAINumber = this.hillClimbing.getNewNumber(AIAttempts);
			this.checkNumber();
		} while (!this.win && this.numberAttempts < stopLoop);
	}

	checkNumber() {
		if (this.tryAINumber[0] === this.hideNumbers[0] &&
			this.tryAINumber[1] === this.hideNumbers[1] &&
			this.tryAINumber[2] === this.hideNumbers[2]) {
			this.win = true;
			console.log("CONCLUÍDO", this.hillClimbing.data, this.hillClimbing.bestCombo);
		}
		this.numberAttempts++;

		this.printGuessNumber(this.tryAINumber);
	}

	printGuessNumber(value) {
		const tr = document.createElement("tr");
		const tdAttr = document.createElement("td");
		tdAttr.innerHTML = this.numberAttempts;
		tr.appendChild(tdAttr);

		for (let i = 0; i < this.numberAIs; i++) {
			const td = document.createElement("td");
			td.innerHTML = this.tryAINumber[i] + " (" + Math.abs(this.tryAINumber[i] - this.hideNumbers[i]) + ")";
			td.title = this.hideNumbers[i];
			tr.appendChild(td);
		}
		this.TableAttempts.appendChild(tr);
	}

	changeMax() {
		this.maxNumber = Math.floor(prompt("Escreve o numero maximo", 5));
		document.getElementById("spanMaxNumber").innerHTML = this.maxNumber;
		this.clear();
	}

	clear() {
		console.clear();
		deleteAllChildDom(this.TableAttempts);
	}
}

const game = new GuessNumber();
