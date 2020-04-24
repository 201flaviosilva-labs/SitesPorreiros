import { links } from "./links.js";

const ClickLink = document.getElementById("ClickLink");

const numRandom = Math.floor(Math.random() * links.length);
ClickLink.href = links[numRandom];

Click.addEventListener("click", () => {
    const numRandom = Math.floor(Math.random() * links.length);
    ClickLink.href = links[numRandom];
})