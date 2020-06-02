const tempo = document.getElementById("tempo");
const ulLista = document.getElementById("ulLista");

let segundoAtual = 0;

let intervalo;

document.getElementById("btnRec").addEventListener("click", () => {
  clearInterval(intervalo);
  limparLista();
  tempo.innerHTML = segundoAtual = 0;
  intervalo = setInterval(() => {
    segundoAtual++;
    tempo.innerHTML = segundoAtual;
  }, 1000);
});

document.getElementById("btnPar").addEventListener("click", () => {
  clearInterval(intervalo);
});

document.getElementById("btnGuar").addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerHTML = segundoAtual + " s";
  li.classList.add("list-group-item");
  li.classList.add("list-group-item-action");
  ulLista.appendChild(li);
});

document.getElementById("btnLimp").addEventListener("click", () => {
  limparLista();
});

function limparLista() {
  while (ulLista.hasChildNodes()) {
    ulLista.removeChild(ulLista.firstChild);
  }
}
