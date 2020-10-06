const DiaSpan = document.getElementById("Dia");

setInterval(() => {
	const today = new Date();
	const xmas = new Date("December 24, " + today.getFullYear());
	if (today > xmas) xmas.setYear(today.getFullYear() + 1);

	msPerDay = 24 * 60 * 60 * 1000; // 86 400 000
	timeLeft = (xmas.getTime() - today.getTime());
	daysLeft = Math.floor(timeLeft / msPerDay);

	DiaSpan.innerHTML = daysLeft;
}, 1000);
