const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const msPerDay = 24 * 60 * 60 * 1000; // 86 400 000

setInterval(() => {
	document.getElementById("Natal").innerHTML = calcular(25, month[11]);
	document.getElementById("Halloween").innerHTML = calcular(31, month[9]);
	document.getElementById("AnoNovo").innerHTML = calcular(31, month[11]);
}, 1000);


function calcular(dia, mes) {
	const today = new Date();
	const xmas = new Date(`${mes} ${dia} ${today.getFullYear()}`);
	if (today > xmas) xmas.setYear(today.getFullYear() + 1);

	const timeLeft = (xmas.getTime() - today.getTime());
	return Math.floor(timeLeft / msPerDay);
}