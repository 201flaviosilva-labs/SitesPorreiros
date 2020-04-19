import { links } from "./links.js";

const ulTag = document.getElementById("ul");

links.map((e) => {
    let valor = e;
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerHTML = valor.replace("./Pages/", "").replace("/index.html", "");
    a.href = valor;
    li.appendChild(a);
    ulTag.appendChild(li);
});