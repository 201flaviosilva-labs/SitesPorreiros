const OSContainer = document.getElementById("OSContainer");

function createNewElement(prop, value, type) {
  const p = document.createElement("p");
  const propSpan = document.createElement("span");
  const valueSpan = document.createElement("span");

  propSpan.innerHTML = prop + ": ";
  valueSpan.innerHTML = value;

  p.appendChild(propSpan);
  p.appendChild(valueSpan);

  if (type === "Browser") BrowserContainer.appendChild(p);
  if (type === "OS") OSContainer.appendChild(p);
}

show();
function show() {
  console.log(platform);
  // Browser
  createNewElement("Descrição", platform.description, "Browser");
  createNewElement("Nome", platform.name, "Browser");
  createNewElement("Versão", platform.version, "Browser");
  createNewElement("Layout", platform.layout, "Browser");
  createNewElement("Manufacturer", platform.manufacturer, "Browser");
  createNewElement("Prerelease", platform.prerelease, "Browser");
  createNewElement("Product", platform.product, "Browser");
  createNewElement("UA", platform.ua, "Browser");

  // OS
  createNewElement("Descrição", platform.os, "OS");
  createNewElement("Familia", platform.os.family, "OS");
  createNewElement("Versão", platform.os.version, "OS");
  createNewElement("Arquitetura", platform.os.architecture, "OS");
}
