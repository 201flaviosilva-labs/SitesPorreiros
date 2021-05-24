const express = require("express")();
const storage = require("node-persist");

let counter = 0;

express.get("/", (req, res) => {
	counter++;
	storage.setItem("counter", counter).then(() => {
		res.json(counter);
	});
});

storage.init()
	.then(() => storage.getItem("counter")).then((value) => {
		if (value > 0) counter = value;
		else counter = 0;

		express.listen(5000, "0.0.0.0"); // Dev
	});

if (!process.env.PORT) console.log("http://localhost:5000/");
