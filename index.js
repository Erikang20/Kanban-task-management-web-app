const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello from our server!");
});

app.listen(8080, () => {
	console.log("Welcome CodeQueens 👑! we are listening on port 8080");
});
