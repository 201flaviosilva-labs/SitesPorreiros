export const randomNumber = (min = 0, max = 10) => Math.floor(Math.random() * (max - min + 1) + min);
export const getMinArrayObjects = (arr, prop) => {
	let min = +Infinity, index = null;
	arr.map(function (v, k) {
		if (min > v[prop]) {
			min = v[prop];
			index = k;
		}
	});
	return { value: min, index: index };
}

export function download(data, filename, type) {
	const file = new Blob([data], { type: type });
	if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(file, filename);
	else {
		const a = document.createElement("a"),
			url = URL.createObjectURL(file);
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		setTimeout(function () {
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);
		}, 0);
	}
}

// Eliminate all child elements of a choice parent element, for example: ul
export const deleteAllChildDom = (domElement) => {
	while (domElement.hasChildNodes()) {
		domElement.removeChild(domElement.firstChild);
	}
}
