const listaImagens = ["https://i.ibb.co/zV16KJK/Ninica1.jpg",
  "https://i.ibb.co/dcv3H6f/Ninica2.jpg",
  "https://i.ibb.co/JvWznQ5/Ninica3.jpg",
  "https://i.ibb.co/w7yXqZc/Ninica4.jpg",
  "https://i.ibb.co/mFKxfj3/Ninca5.jpg",
  "https://i.ibb.co/NxM7m18/Ninica6.jpg",
  "https://i.ibb.co/TLJK9rc/Ninica7.jpg"
];

document.getElementById("MudarE").addEventListener("click", () => novaImgs());
document.getElementById("MudarD").addEventListener("click", () => novaImgs());

function novaImgs() {
  const numRandom = Math.floor(Math.random() * listaImagens.length);
  document.getElementById("ImgNinica").src = listaImagens[numRandom];
}
