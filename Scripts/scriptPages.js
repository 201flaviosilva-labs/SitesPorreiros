import { links } from "./links.js";

const ulTag = document.getElementById("ul");

links.map((valor) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.innerHTML = valor
    .replace("https://", "")
    .replace("http://", "")
    .replace("./Pages/", "")
    .replace("./Jogos/", "")
    .replace("/index.html", "")
    .replace(".github.io", "")
    .replace(".netlify.app", "")
    .replace(".netlify.com", "")
    .replace(".vercel.app", "")
    .replace(".vercel.com", "")
    .replace(".epizy.com", "")
    .replace("/", "");
  a.href = valor;
  li.appendChild(a);
  ulTag.appendChild(li);
});
