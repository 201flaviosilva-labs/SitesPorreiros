const lista = document.querySelector("main ul");
document.querySelector("main form button").addEventListener("click",
    (event) => {
        event.preventDefault();
        const li = document.createElement("li");
        const button = document.createElement("button");
        li.innerHTML = document.querySelector("main form input").value;
        li.style.background = `rgb(${Math.floor(Math.random()*251)},${Math.floor(Math.random()*251)},${Math.floor(Math.random()*251)})`;
        button.innerHTML = "X";
        button.addEventListener(
            "click",
            () => {
                lista.removeChild(li);
            }
        );
        li.appendChild(button);
        lista.appendChild(li);
    });