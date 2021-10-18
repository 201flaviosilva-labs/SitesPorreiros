const globalOptions = { // https://f3oall.github.io/awesome-notifications/docs/customization/
	position: "top-right",
	duration: 10000,
	labels: {
		tip: "Dica",
		info: "Informação",
		success: "Sucesso",
		warning: "Perigo!",
		alert: "Alerta",
		async: "Sincronização",
		confirm: "Cormação",
		confirmOk: "Ok",
		confirmCancel: "Cancelar",
	},
};
const notifier = new AWN(globalOptions);

document.getElementById("tipNotification").addEventListener("click", () => { notifier.tip("Dica da semana", {}); });
document.getElementById("infoNotification").addEventListener("click", () => { notifier.info("My name is Bond, James Bond!", {}); });
document.getElementById("warningNotification").addEventListener("click", () => { notifier.warning("Lets play a game!", {}); });
document.getElementById("successNotification").addEventListener("click", () => { notifier.success("Game Over!", {}); });
document.getElementById("alertNotification").addEventListener("click", () => { notifier.alert("Do You Like Scary Movies?", {}); });

document.getElementById("asyncNotification").addEventListener("click", () => {
	notifier.async(fetch("https://bitbucket.org/201flaviosilva/assets/raw/28032c25fcb745d9abc2e7800d73409bd2b10c08/Sprite/KenneyInputPromptsPixel16/tilemap_packed512.png"), "Imagem Carregada");
});

document.getElementById("modalNotification").addEventListener("click", () => { notifier.modal("Uma Simples modal"); });

document.getElementById("confirmNotification").addEventListener("click", () => {
	const onOk = () => { notifier.info("Ok, the show must go on") };
	const onCancel = () => { notifier.info("Cancelaste uma oferta de Pizza grátis!") };
	const options = {
		labels: {
			confirm: "Just do it!",
		}
	};
	notifier.confirm("Queres mesmo continuar?", onOk, onCancel, options);
});
document.getElementById("asyncBlockNotification").addEventListener("click", () => {
	notifier.asyncBlock(fetch("https://bitbucket.org/201flaviosilva/assets/raw/28032c25fcb745d9abc2e7800d73409bd2b10c08/Sprite/KenneyInputPromptsPixel16/tilemap_packed512.png"), "Imagem Carregada");
});

