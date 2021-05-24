import { links } from "./links.js";

const ulTag = document.getElementById("ul");

links.map(l => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.innerHTML = l
    .replace("Pages/", "")
    .replace("Frameworks/", "")
    .replace("/", "")
    .replace("/", "");
  a.href = l;
  li.appendChild(a);
  ulTag.appendChild(li);
});
