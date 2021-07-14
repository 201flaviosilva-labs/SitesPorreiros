const bolinha = document.getElementById("bolinha");

function funcMudarCor() {
    const corMudar = [];
    for (let i = 0; i < 3; i++) {
        corMudar[i] = Math.floor(Math.random() * 251);
    }
    return corMudar;
}

setInterval(() => {
    const corMudar = funcMudarCor();
    bolinha.style.backgroundColor = "rgb(" + corMudar[0] + "," + corMudar[1] + "," + corMudar[2] + ")";
}, 500);

setInterval(() => { bolinha.style.width = bolinha.style.height = Math.floor((Math.random() * 25) + 1) + "px" }, 1500)

body.onmousemove = findScreenCoords;

function findScreenCoords() {
    let xpos = event.clientX;
    let ypos = event.clientY;
    console.log("X: " + xpos + ", Y: " + ypos);

    bolinha.style.top = ypos + "px";
    bolinha.style.left = xpos + "px";
}