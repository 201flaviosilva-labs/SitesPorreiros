import { links } from "./links.js";
const ClickLink = document.getElementById("ClickLink");

ClickLink.addEventListener("click", () => {
  const numRandom = Math.floor(Math.random() * links.length);
  ClickLink.href = "./src/" + links[numRandom] + "index.html";
});
