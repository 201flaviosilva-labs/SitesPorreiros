const textoElement = document.getElementById("texto");
let i = 0;
const txt = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex illum cupiditate maiores, voluptate, praesentium, voluptatem nisi debitis possimus perferendis dignissimos est at.Quibusdam voluptatum explicabo, earum quam veniam nostrum ex.';
const speed = 50;

function escrever() {
	if (i < txt.length) {
		textoElement.innerHTML += txt.charAt(i);
		i++;
		setTimeout(escrever, speed);
	}
}
escrever();
