const listaImagens = ["Ninica1.jpeg", "Ninica2.jpeg", "Ninica3.jpeg"];

document.getElementById("MudarE").addEventListener("click", () => novaImgs());
document.getElementById("MudarD").addEventListener("click", () => novaImgs());

function novaImgs() {
  const numRandom = Math.floor(Math.random() * listaImagens.length);
  document.getElementById("ImgNinica").src =
    "./Assets/" + listaImagens[numRandom];
}
