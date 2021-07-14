const body = document.getElementById("body");

criarBol();

body.addEventListener(
    "click",
    () => {
        criarBol()
    });

function funcMudarCor() {
    const corMudar = [];
    for (let i = 0; i < 3; i++) {
        corMudar[i] = Math.floor(Math.random() * 251);
    }
    return corMudar;
}


setInterval(() => criarBol(), 750);

function criarBol() {
    const corMudar = funcMudarCor();
    let rangeBola = Math.floor(Math.random() * window.innerWidth - 50);
    rangeBola = rangeBola < 50 ? 50 : rangeBola;
    const tamanho = Math.floor(Math.random() * 50 + 1) + "px";
    const bolinha = document.createElement("div");
    bolinha.classList.add("bolas");
    bolinha.style.left = rangeBola + "px";
    bolinha.style.width = tamanho;
    bolinha.style.height = tamanho;
    bolinha.style.backgroundColor = "rgb(" + corMudar[0] + "," + corMudar[1] + "," + corMudar[2] + ")";
    body.appendChild(bolinha);
    console.log(bolinha);

    let pos = 0;
    const id = setInterval(frame, 5);

    function frame() {
        if (pos == window.innerHeight) {
            clearInterval(id);
            bolinha.remove();
        } else {
            pos++;
            bolinha.style.top = pos + "px";
        }
    }
}