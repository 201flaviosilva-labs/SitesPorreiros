import { links } from "./links.js";
const ClickLink = document.getElementById("ClickLink");

// let numRandom = Math.floor(Math.random() * links.length);
// ClickLink.href = links[numRandom];

ClickLink.addEventListener("click", () => {
  const numRandom = Math.floor(Math.random() * links.length - 1);
  ClickLink.href = links[numRandom];
});
