const fonts = [
	"Press Start 2P",
	"Anton",
	"Arial",
	"Brush Script MT",
	"Brygada 191",
	"Copperplate",
	"Courier New",
	"Courier",
	"Cursive",
	"Dancing Script",
	"Fantasy",
	"Fredoka One",
	"Garamond",
	"Georgia",
	"Hachi Maru Pop",
	"HanaArchitects Daughterlei",
	"Hanalei",
	"Helvetica",
	"Homemade Apple",
	"Inconsolata",
	"Indie Flower",
	"JetBrains Mono",
	"Jomhuria",
	"Lobster",
	"Long Cang",
	"Lucida Console",
	"Lucida Handwriting",
	"Monaco",
	"Monospace",
	"Monoton",
	"Montserrat",
	"Noto Sans JP",
	"Open Sans",
	"Oswald",
	"Pacifico",
	"Papyrus",
	"Parisienne",
	"Permanent Marker",
	"Play",
	"Roboto Mono",
	"Roboto",
	"Rock Salt",
	"Sacramento",
	"Sans-serif",
	"Sarina",
	"Serif",
	"Shadows Into Light",
	"Source Code Pro",
	"Stalinist One",
	"StarJout",
	"Tangerine",
	"Times New Roman",
	"Ubuntu",
	"Verdana",
	"swap"
];

const input = document.getElementById("input");
const output = document.getElementById("output");
const selectFont = document.getElementById("selectFont");

input.addEventListener("input", () => {
	output.innerHTML = " " + input.value + " ";
});

selectFont.addEventListener("change", () => {
	output.style.fontFamily = selectFont.value;
});

main();
function main() {
	fonts.map(f => {
		const option = document.createElement("option");
		option.text = f;
		option.value = f;
		selectFont.appendChild(option);
	});
}


