document.getElementById("btnEviar").addEventListener("click", (event) => {
    event.preventDefault();
    const li = document.createElement("li");
    li.innerHTML = document.getElementById("txtBox").value;
    document.getElementById("Lista").appendChild(li);
    document.getElementById("txtBox").innerHTML = document.getElementById("txtBox").value = "";
})