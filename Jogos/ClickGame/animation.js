const MoedaP = document.getElementById("MoedaP");
const ProducaoP = document.getElementById("ProducaoP");
const AtualP = document.getElementById("AtualP");
const NecessarioP = document.getElementById("NecessarioP");
const tempoP = document.getElementById("tempoP");
const imgRocha = document.getElementById("imgRocha");
const btnMenu = document.getElementById("btnMenu");
const painel = document.getElementById("painel");
const imgMenu = document.getElementById("imgMenu");
const AumentarMoedas = document.getElementById("AumentarMoedas");
const Mensagns = document.getElementById("Mensagns");
const body = document.getElementById("body");

let tempo = {
  horas: 0,
  minutos: 0,
  segundos: 0,
};

let producaoMoedas = 1; // Produçao por segundo
let Moeda = 1; // Dinehiro atual
let pontosEvoluir = 30; // preciso para evoluir a primeira vez
let pontosAgora = 0; // Pontos que o jogador tem atualmente, soma dos clickes
let percentagem = 0; // Percentagem do jogador na barra em baixo

function evoluir() {
  pontosAgora += producaoMoedas;
  percentagem = (100 * pontosAgora) / pontosEvoluir;
  progressBar.style.width = percentagem + "%";
  console.log(percentagem);

  if (percentagem >= 100) {
    pontosAgora = 0;
    percentagem = 0;
    progressBar.style.width = percentagem + "%";
    Moeda += producaoMoedas;
    MoedaP.innerHTML = "Moedas: " + Moeda;
    pontosEvoluir *= 2;
  }

  AtualP.innerText = "Atual: " + pontosAgora + " P";
  NecessarioP.innerText = "Necessario: " + pontosEvoluir + " P";
}

AumentarMoedas.addEventListener("click", () => {
  if (Moeda >= 5) {
    Moeda -= 5;
    producaoMoedas++;
    MoedaP.innerHTML = "Moedas: " + Moeda;
    ProducaoP.innerHTML = "Produção: " + producaoMoedas + "/S";
  } else {
    console.log("entrou");
    Mensagns.innerHTML = "Não Tens moedas suficientes";
    Mensagns.style.display = "block";
    setTimeout(() => {
      Mensagns.style.display = "none";
    }, 5000);
  }
});

function imagnsApresentar() {
  if (Moeda > 4) {
    body.style.background = "url(" + wallpaper.floresta3 + ")";
  }
  if (Moeda > 9) {
    body.style.background = "url(" + wallpaper.mar1 + ")";
    imgRocha.src = pedras.simples;
  }
  if (Moeda > 19) {
    body.style.background = "url(" + wallpaper.cidade1 + ")";
  }
  if (Moeda > 24) {
    imgRocha.src = pedras.comErva;
  }
  if (Moeda > 29) {
    body.style.background = "url(" + wallpaper.savana1 + ")";
  }
  if (Moeda > 39) {
    body.style.background = "url(" + wallpaper.espaco1 + ")";
  }
  if (Moeda > 49) {
    body.style.background = "url(" + wallpaper.futuro1 + ")";
    imgRocha.src = pedras.magica;
  }
}

function aumentarTempo() {
  evoluir();
  imagnsApresentar();

  tempo.segundos++;
  if (tempo.segundos >= 60) {
    tempo.minutos++;
    tempo.segundos = 0;
  }
  if (tempo.minutos >= 60) {
    tempo.horas++;
    tempo.minutos = 0;
  }

  tempoP.innerHTML =
    "Tempo: " + tempo.horas + ":" + tempo.minutos + ":" + tempo.segundos;
}

setInterval(aumentarTempo, 1000);
imgRocha.addEventListener("click", () => evoluir());

btnMenu.addEventListener("click", () => {
  console.log("Removeu");
  if (imgRocha.classList.contains("classDispalayNone")) {
    painel.classList.add("classDispalayNone");
    painel.classList.remove("classDispalayDefaut");
    imgRocha.classList.remove("classDispalayNone");
    imgRocha.classList.add("classDispalayDefaut");
    imgMenu.src = "./img/menu.svg";
  } else {
    painel.classList.remove("classDispalayNone");
    painel.classList.add("classDispalayDefaut");
    imgRocha.classList.add("classDispalayNone");
    imgRocha.classList.remove("classDispalayDefaut");
    imgMenu.src = "./img/x-circle.svg";
  }
});
