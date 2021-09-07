// UI
const repetitionsInput = document.getElementById("repetitions");
const timeLeftLabel = document.getElementById("TimeLeft");
const leftRepeationsLabel = document.getElementById("LeftRepeations");

// Configs
let repetitions = 0;
let timer = null;
const body = document.body;
const maxRepeats = 30; // max repetitions
let timeLeft = maxRepeats;

document.getElementById("startBtn").addEventListener("click", () => {
	body.style.backgroundColor = "white"; // change background color
	repetitions = Number(repetitionsInput.value); // get the number of repetitions
	if (timer) clearTimeout(timer); // clear previous timer
	timer = setTimeout(() => startRepeat(), 1000 * 3); // start new timer
});

function startRepeat() {
	if (repetitions > 0) { // if there are repetitions left
		body.style.backgroundColor = "green"; // change background color
		repetitions--; // decrement repetitions
		leftRepeationsLabel.innerHTML = repetitions; // update left repetitions label
		timeLeft = maxRepeats; // reset time left
		timeLeftLabel.innerHTML = timeLeft; // update time left label
		repeatAlarm(); // repeat alarm
	}
}

function repeatAlarm() {
	timer = setTimeout(() => { // set timeout
		timeLeft--;
		timeLeftLabel.innerHTML = timeLeft; // update time left label
		if (timeLeft <= 0) {
			body.style.backgroundColor = "red"; // change background color
			timer = setTimeout(() => { // wait for a second
				startRepeat(); // start new timer
			}, 1000);
		} else repeatAlarm(); // repeat alarm
	}, 1000);
}
