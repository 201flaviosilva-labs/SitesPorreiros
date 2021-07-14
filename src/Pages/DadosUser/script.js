document.getElementById("btn").addEventListener("click", () => {
  while (lista.hasChildNodes()) lista.removeChild(lista.firstChild);
  show();
});

const lista = document.getElementById("lista");

function createNewTitleElement(valor) {
  const h2 = document.createElement("h2");
  h2.innerHTML = "➜ " + valor;
  lista.appendChild(h2);
}

function createNewListElement(valor) {
  const li = document.createElement("li");
  li.innerHTML = valor;
  lista.appendChild(li);
}

function show() {
  createNewListElement("Muito provável que o teu Browser não suporte tudo!");
  createNewTitleElement("Window");
  createNewListElement("Lagura da tela ➜ " + window.innerWidth + "px");
  createNewListElement("Altura da tela ➜ " + window.innerHeight + "px");
  createNewListElement("Profundidade de cor ➜ " + screen.pixelDepth + "px");
  createNewListElement("Resolução de cor ➜ " + screen.colorDepth + "px");
  createNewListElement("URL da página ➜ " + window.location.href);
  createNewListElement("Chefe da página ➜ " + window.location.hostname);
  createNewListElement("Caminho da página ➜ " + window.location.pathname);
  createNewListElement("Protocol da página ➜ " + window.location.protocol);
  createNewListElement("Número da porta ➜ " + window.location.port);

  createNewTitleElement("Navigator");
  createNewListElement("CookiesEnabled ➜ " + navigator.cookieEnabled);
  createNewListElement("Navigator App ➜ " + navigator.appName);
  createNewListElement("Navigator Code ➜ " + navigator.appCodeName);
  createNewListElement("Motor ➜ " + navigator.product);
  createNewListElement("Sub Motor ➜ " + navigator.productSub);
  createNewListElement("Versão ➜ " + navigator.appVersion);
  createNewListElement("Agent ➜ " + navigator.userAgent);
  createNewListElement("Empresa ➜ " + navigator.vendor);
  createNewListElement("SubEmpresa ➜ " + navigator.vendorSub);
  createNewListElement("Processadores ➜ " + navigator.hardwareConcurrency);
  createNewListElement("Sistema Operativo ➜ " + navigator.platform);
  createNewListElement("Linguagem ➜ " + navigator.language);
  createNewListElement("Vigiado ➜ " + navigator.doNotTrack);
  createNewListElement("Maxido de Multiplos Toques ➜ " + navigator.maxTouchPoints);
  createNewListElement("CSS ➜ " + navigator.msManipulationViewsEnabled);
  createNewListElement("Online ➜ " + navigator.onLine);
  createNewListElement("Sistema Operativo Código ➜ " + navigator.oscpu);
  createNewListElement("Recebe inputs ➜ " + navigator.pointerEnabled);
  createNewListElement("Drivers ➜ " + navigator.webdriver);
  createNewListElement("Build ID ➜ " + navigator.buildID);
  createNewListElement("Clipboard ➜ " + navigator.clipboard);
  createNewListElement("Conecção ➜ " + navigator.connection);
  createNewListElement("Memória ➜ " + navigator.deviceMemory);
  createNewListElement("Geolocaliazação ➜ " + navigator.geolocation);
  createNewListElement("Teclado ➜ " + navigator.keyboard);
  createNewListElement("Locks ➜ " + navigator.locks);
  createNewListElement("xr ➜ " + navigator.xr);
  createNewListElement("Java Ativo ➜ " + navigator.javaEnabled());

  createNewTitleElement("Date");
  createNewListElement("Data ➜ " + new Date());
  createNewListElement("Dia ➜ " + new Date().getDate());
  createNewListElement("Dia da Semana ➜ " + new Date().getDay());
  createNewListElement("Ano ➜ " + new Date().getFullYear());
  createNewListElement("Horas ➜ " + new Date().getHours());
  createNewListElement("Milisegundos ➜ " + new Date().getMilliseconds());
  createNewListElement("Minutos ➜ " + new Date().getMinutes());
  createNewListElement("Mês ➜ " + new Date().getMonth());
  createNewListElement("Segundos ➜ " + new Date().getSeconds());
  createNewListElement("Milisegundos desde 1970 ➜ " + new Date().getTime());

  createNewTitleElement("Personalizadas");
  createNewListElement("Sistema Operativo ➜ " + getOS());
  createNewListElement("Versão Sistema Operativo ➜ " + getOSVersion());
  createNewListElement("É mobile ➜ " + isMobile());
  createNewListElement("Browser ➜ " + getBrowser());
  createNewListElement("Versão Browser ➜ " + getBrowserVersion());
}

function isMobile() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return "Verdade";
  else return "Falso";
}

function getOS() {
  // Credits ➜ https://stackoverflow.com/questions/38241480/detect-macos-ios-windows-android-and-linux-os-with-js

  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
  const iosPlatforms = ["iPhone", "iPad", "iPod"];

  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) os = "Mac OS";
  else if (iosPlatforms.indexOf(platform) !== -1) os = "iOS";
  else if (windowsPlatforms.indexOf(platform) !== -1) os = "Windows";
  else if (/Android/.test(userAgent)) os = "Android";
  else if (!os && /Linux/.test(platform)) os = "Linux";

  return os;
}

function getOSVersion() {
  // Credits ➜ https://stackoverflow.com/questions/9514179/how-to-find-the-operating-system-version-using-javascript

  if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) return "Windows 10";
  else if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) return "Windows 8.1";
  else if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) return "Windows 8";
  else if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) return "Windows 7";
  else if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) return "Windows Vista";
  else if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) return "Windows XP";
  else if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) return "Windows 2000";
  else if (window.navigator.userAgent.indexOf("Mac") != -1) return "Mac/iOS";
  else if (window.navigator.userAgent.indexOf("X11") != -1) return "UNIX";
  else if (window.navigator.userAgent.indexOf("Linux") != -1) return "Linux";
  else return "Desconhecido";
}


function getBrowser() {
  // Credits ➜ https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser

  if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) != -1) return "Opera";
  else if (navigator.userAgent.indexOf("Chrome") != -1) return "Chrome";
  else if (navigator.userAgent.indexOf("Safari") != -1) return "Safari";
  else if (navigator.userAgent.indexOf("Firefox") != -1) return "Firefox";
  else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) return "IE"; //IF IE > 10
  else return "Desconhecido";
}

function getBrowserVersion() {
  // Credits ➜ https://stackoverflow.com/questions/5916900/how-can-you-detect-the-version-of-a-browser

  const ua = navigator.userAgent;
  let tem = null;
  let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return "IE " + (tem[1] || "");
  }

  if (M[1] === "Chrome") {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem != null) return tem.slice(1).join(" ").replace("OPR", "Opera");
  }

  M = M[2] ? [M[2]] : [navigator.appVersion, "-?"]; // M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return M; // return M.join(" ");
}
