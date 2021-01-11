const listaImagens = [
  "https://i.ibb.co/zV16KJK/Ninica1.jpg",
  "https://i.ibb.co/dcv3H6f/Ninica2.jpg",
  "https://i.ibb.co/JvWznQ5/Ninica3.jpg",
  "https://i.ibb.co/w7yXqZc/Ninica4.jpg",
  "https://i.ibb.co/mFKxfj3/Ninca5.jpg",
  "https://i.ibb.co/NxM7m18/Ninica6.jpg",
  "https://i.ibb.co/TLJK9rc/Ninica7.jpg",
  "https://i.ibb.co/XFgztSh/9-D537443-9581-4-FE1-B889-83-D5084-A1-B10.jpg",
  "https://i.ibb.co/Bq49QCS/56863887101-42-C8322-B-AD72-495-C-A4-EB-4-C35-A16-AD5-C2.jpg",
  "https://i.ibb.co/9Y7jpWp/D89-E63-EB-8-F2-B-401-A-888-A-49-BF0483-B212.jpg",
  "https://i.ibb.co/bF8rFm0/IMG-9566.jpg",
  "https://i.ibb.co/cFyK9WC/IMG-9573.jpg",
  "https://i.ibb.co/ThvCkyQ/IMG-9575.jpg",
  "https://i.ibb.co/vVtyTkn/IMG-9588.jpg",
  "https://i.ibb.co/k8T6sKq/IMG-9610.jpg",
  "https://i.ibb.co/1RcYt45/IMG-9611.jpg",
  "https://i.ibb.co/Fq7cJhG/IMG-9635.jpg",
  "https://i.ibb.co/sRrcT2D/IMG-9664.jpg",
  "https://i.ibb.co/zb60nF8/unnamed-1.jpg",
  "https://i.ibb.co/Wky0B79/unnamed-2.jpg",
  "https://i.ibb.co/HnTfbT6/unnamed-3.jpg",
  "https://i.ibb.co/GcMqgg4/unnamed-4.jpg",
  "https://i.ibb.co/gFcFNJz/unnamed-5.jpg",
  "https://i.ibb.co/hgBMWS6/unnamed-6.jpg",
  "https://i.ibb.co/j8fHzG6/unnamed.jpg"
];

document.getElementById("MudarE").addEventListener("click", () => novaImgs());
document.getElementById("MudarD").addEventListener("click", () => novaImgs());

function novaImgs() {
  const numRandom = Math.floor(Math.random() * listaImagens.length);
  document.getElementById("ImgNinica").src = listaImagens[numRandom];
}
