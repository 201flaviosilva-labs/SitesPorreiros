const DeviceContainer = document.getElementById("DeviceContainer");
const OSContainer = document.getElementById("OSContainer");
const BrowserContainer = document.getElementById("BrowserContainer");
const EngineContainer = document.getElementById("EngineContainer");

function createNewElement(prop, value, type) {
  const p = document.createElement("p");
  const propSpan = document.createElement("span");
  const valueSpan = document.createElement("span");

  propSpan.innerHTML = prop + ": ";
  valueSpan.innerHTML = value;

  p.appendChild(propSpan);
  p.appendChild(valueSpan);

  if (type === "Device") DeviceContainer.appendChild(p);
  else if (type === "OS") OSContainer.appendChild(p);
  else if (type === "Browser") BrowserContainer.appendChild(p);
  else if (type === "Engine") EngineContainer.appendChild(p);
}

show();
function show() {
  const b = bowser.getParser(window.navigator.userAgent);
  const out = b.parsedResult;
  console.log(b);

  // Device/Platform
  createNewElement("Tipo", out.platform.type, "Device");
  createNewElement("Fabricante", out.platform.vendor, "Device");

  // // OS
  createNewElement("Nome", out.os.name, "OS");
  createNewElement("Versão", out.os.version, "OS");
  createNewElement("Nome da versão", out.os.versionName, "OS");

  // Browser
  createNewElement("Nome", out.browser.name, "Browser");
  createNewElement("Versão", out.browser.version, "Browser");

  // Engine
  createNewElement("Nome", out.engine.name, "Engine");
  // createNewElement("Versão", out.engine.version, "Engine");
}
