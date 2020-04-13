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


body.onmousemove = findScreenCoords;

function findScreenCoords(mouseEvent) {
    var xpos;
    var ypos;
    if (mouseEvent) {
        //FireFox
        xpos = mouseEvent.screenX;
        ypos = mouseEvent.screenY;
    } else {
        //IE
        xpos = window.event.screenX;
        ypos = window.event.screenY;
    }
    console.log("X: " + xpos + ", Y: " + ypos);

    bolinha.style.top = ypos - 100 + "px";
    bolinha.style.left = xpos + "px";
}