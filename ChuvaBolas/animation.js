const body = document.getElementById("body");

function funcMudarCor() {
    const corMudar = [];
    for (let i = 0; i < 3; i++) {
        corMudar[i] = Math.floor(Math.random() * 251);
    }
    return corMudar;
}

body.addEventListener(
    "click",
    () => {
        const corMudar = funcMudarCor();
        const rangeBola = Math.floor(Math.random() * window.innerWidth - 50);
        const bolinha = document.createElement("div");
        const tamanho = Math.floor(Math.random() * 50 + 1) + "px";
        bolinha.classList.add("bolas");
        bolinha.style.top = "0px";
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
            } else {
                pos++;
                bolinha.style.top = pos + "px";
            }
        }
    });