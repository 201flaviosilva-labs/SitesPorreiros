const btn = document.getElementById("btn");
const lista = document.getElementById("lista");

function main() {
    criarElemento("Muito provavel que o teu Browser não suporte tudo!");
    criarElemento("Lagura da tela: " + window.innerWidth + "px");
    criarElemento("Altura da tela: " + window.innerHeight + "px");
    criarElemento("Profundidade de cor: " + screen.pixelDepth + "px");
    criarElemento("Resolução de cor: " + screen.colorDepth + "px");
    criarElemento("URL da página: " + window.location.href);
    criarElemento("Chefe da página: " + window.location.hostname);
    criarElemento("Caminho da página: " + window.location.pathname);
    criarElemento("Protocol da página: " + window.location.protocol);
    criarElemento("Número da porta: " + window.location.port);
    criarElemento("CookiesEnabled: " + navigator.cookieEnabled);
    criarElemento("Navigator App: " + navigator.appName);
    criarElemento("Navigator Code: " + navigator.appCodeName);
    criarElemento("Motor: " + navigator.product);
    criarElemento("Sub Motor: " + navigator.productSub);
    criarElemento("Versão: " + navigator.appVersion);
    criarElemento("Agent: " + navigator.userAgent);
    criarElemento("Empresa: " + navigator.vendor);
    criarElemento("SubEmpresa: " + navigator.vendorSub);
    criarElemento("Processadores: " + navigator.hardwareConcurrency);
    criarElemento("Sistema Operativo: " + navigator.platform);
    criarElemento("Linguagem: " + navigator.language);
    criarElemento("Vigiado: " + navigator.doNotTrack);
    criarElemento("Maxido de Multiplos Toques: " + navigator.maxTouchPoints);
    criarElemento("CSS: " + navigator.msManipulationViewsEnabled);
    criarElemento("Online: " + navigator.onLine);
    criarElemento("Sistema Operativo Código: " + navigator.oscpu);
    criarElemento("Recebe inputs: " + navigator.pointerEnabled);
    criarElemento("Driveres: " + navigator.webdriver);
    criarElemento("Build ID: " + navigator.buildID);
    criarElemento("Clipboard: " + navigator.clipboard);
    criarElemento("Conecção: " + navigator.connection);
    criarElemento("Memória: " + navigator.deviceMemory);
    criarElemento("Geolocaliazação: " + navigator.geolocation);
    criarElemento("Teclado: " + navigator.keyboard);
    criarElemento("Locks: " + navigator.locks);
    criarElemento("xr: " + navigator.xr);
    criarElemento("Java Ativo: " + navigator.javaEnabled());
    criarElemento("Data: " + new Date());
    criarElemento("Dia: " + new Date().getDate());
    criarElemento("Dia da Semana: " + new Date().getDay());
    criarElemento("Ano: " + new Date().getFullYear());
    criarElemento("Horas: " + new Date().getHours());
    criarElemento("Milisegundos: " + new Date().getMilliseconds());
    criarElemento("Minutos: " + new Date().getMinutes());
    criarElemento("Mês: " + new Date().getMonth());
    criarElemento("Segundos: " + new Date().getSeconds());
    criarElemento("Milisegundos desde 1970: " + new Date().getTime());

};

btn.addEventListener("click",
    () => {
        main();
    });

function criarElemento(valor) {
    const li = document.createElement("li");
    li.innerHTML = valor;
    lista.appendChild(li);
}