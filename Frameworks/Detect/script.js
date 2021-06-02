const DeviceContainer = document.getElementById("DeviceContainer");
const OSContainer = document.getElementById("OSContainer");
const BrowserContainer = document.getElementById("BrowserContainer");

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
}

show();
function show() {
  const ua = detect.parse(navigator.userAgent)
  console.log(ua);

  // // Device
  createNewElement("Nome", ua.device.name, "Device");
  createNewElement("Familia", ua.device.family, "Device");
  createNewElement("Versão", ua.device.version, "Device");
  createNewElement("Major", ua.device.major, "Device");
  createNewElement("Minor", ua.device.minor, "Device");
  createNewElement("Patch", ua.device.patch, "Device");
  createNewElement("Type", ua.device.type, "Device");
  createNewElement("Fabricante", ua.device.manufacturer, "Device");

  // // OS
  createNewElement("Nome", ua.os.name, "OS");
  createNewElement("Familia", ua.os.family, "OS");
  createNewElement("Versão", ua.os.version, "OS");
  createNewElement("Major", ua.os.major, "OS");
  createNewElement("Minor", ua.os.minor, "OS");
  createNewElement("Patch", ua.os.patch, "OS");

  // Browser
  createNewElement("Nome", ua.browser.name, "Browser");
  createNewElement("Familia", ua.browser.family, "Browser");
  createNewElement("Versão", ua.browser.version, "Browser");
  createNewElement("Major", ua.browser.major, "Browser");
  createNewElement("Minor", ua.browser.minor, "Browser");
  createNewElement("Patch", ua.browser.patch, "Browser");
}
