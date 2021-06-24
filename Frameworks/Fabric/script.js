import { download } from "../../Scripts/utils.js";

// Setup
const WIDTH = window.innerWidth - 10;
const HEIGHT = window.innerHeight - 10;

const canvas = new fabric.Canvas("canvas", {
	width: WIDTH,
	height: HEIGHT,
});

init();
function init() {
	// Rectangle
	const rectangle = new fabric.Rect({
		left: 100,
		top: 100,
		width: 100,
		height: 100,
		fill: "Blue",
		angle: 45,
	});

	// Circle
	const circle = new fabric.Circle({
		left: 0,
		top: 0,
		fill: "Blue",
		radius: 50,
	});

	// Ellipse
	const ellipse = new fabric.Ellipse({
		left: 400,
		top: 100,
		originX: "left",
		originY: "top",
		rx: 10,
		ry: 30,
		angle: 0,
		fill: "white",
		stroke: "white",
		strokeWidth: 3,
	});

	// Triangle
	const triangle = new fabric.Triangle({
		left: 300,
		top: 100,
		width: 50,
		height: 50,
		fill: "Green",
	});

	// Line
	const line = new fabric.Line([300, 500, 600, 400], {
		// left: 170,
		// top: 150,
		stroke: "gold",
		strokeWidth: 10,
	});

	// Polyline
	const polyline = new fabric.Polyline(
		[
			{ x: 200, y: 10, },
			{ x: 250, y: 50, },
			{ x: 250, y: 180, },
			{ x: 150, y: 180, },
			// { x: 150, y: 50, },
			// { x: 200, y: 10, },
		],
		{
			fill: "white",
			stroke: "blue",
			strokeWidth: 4,
		});

	// Text
	const text = new fabric.Text("Fabirc.js", {
		left: WIDTH / 2,
		top: HEIGHT / 2,
		fontFamily: "Press Start 2P",
		fontSize: 50,
		fontWeight: "bold",
		fontStyle: "italic",
		shadow: "rgba(255, 0, 0, 0.5) 0 0 5px",
		stroke: "#00ff00",
		strokeWidth: 3,
		textAlign: "center", // right, left
		lineHeight: 3,
		underline: true, // overline: true, // linethrough: true,
		textBackgroundColor: "rgb(0, 0, 255, 0.1)",
	});

	// Images
	const domImg = document.createElement("img");
	domImg.src = "https://picsum.photos/100/100";
	domImg.onload = () => {
		const img = new fabric.Image(domImg, {
			left: 10,
			top: HEIGHT - 100,
			angle: -30,
			opacity: 0.5,
		});
		canvas.add(img);
	}

	// Anims
	const timeAnimatedRect = 2500;
	const animatedRect = new fabric.Rect({
		left: 250,
		top: 0,
		width: 50,
		height: 50,
		fill: "#B82589",
	});
	animatedRect.animate("angle", "180", {
		onChange: canvas.renderAll.bind(canvas),
		duration: timeAnimatedRect,
		easing: fabric.util.ease.easeOutBounce, // http://fabricjs.com/docs/fabric.util.ease.html
	});
	animatedRect.animate("top", HEIGHT, {
		from: 0,
		duration: timeAnimatedRect,
		easing: fabric.util.ease.easeOutBounce,
		onComplete: () => { console.log("Complete"); },
		onChange: canvas.renderAll.bind(canvas),
	});

	// Gradients
	const gradient = new fabric.Gradient({
		type: "linear", // radial
		gradientUnits: "pixels", // percentage
		coords: { x1: 0, y1: 0, x2: circle.width, y2: circle.height },
		colorStops: [
			{ offset: 0, color: "#000" },
			{ offset: 0.15, color: "#f00" },
			{ offset: 0.3, color: "orange" },
			{ offset: 0.45, color: "#0f0" },
			{ offset: 0.60, color: "#0ff" },
			{ offset: 0.75, color: "#00f" },
			{ offset: 0.9, color: "#fff" },
			{ offset: 1, color: "#000" },
		]
	})

	canvas.add(
		rectangle,
		circle,
		ellipse,
		triangle,
		line,
		polyline,
		text,
		animatedRect,
	);

	// Change Properties after add
	rectangle.set({ left: 200, top: 200, });
	circle.set("fill", gradient);
	ellipse.set({ strokeWidth: 5, stroke: "rgba(100,200,200,0.5)", });
	triangle.set("angle", 15);
	polyline.set("flipY", true);


	// Download
	console.log(canvas.toObject());
	// console.log(canvas.toDataURL("png"));
	// console.log(canvas.toDataURL("jpg"));

	const downloadJSON = new fabric.Text("JSON", {
		left: WIDTH - 50,
		top: HEIGHT - 50,
		fontSize: 20,
		selectable: false,
	});
	downloadJSON.on("mouseup", () => download(canvas.toJSON(), "data.json", "json"));

	const downloadSVG = new fabric.Text("SVG", {
		left: WIDTH - 100,
		top: HEIGHT - 50,
		fontSize: 20,
		selectable: false,
	});
	downloadSVG.on("mouseup", () => download(canvas.toSVG(), "data.svg", "svg"));


	canvas.add(
		downloadJSON,
		downloadSVG,
	);

	// canvas.renderAll();
}
