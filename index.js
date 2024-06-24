const express = require("express");
const app = express();
const path = require("path");

const sources = require("./src/index");

module.exports = app;

app.set("views", path.join(__dirname, "src"));
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
// 	res.send(App.js);
// });

app.use("/", sources);

app.listen(8080, () => {
	console.log("Welcome CodeQueens 👑! we are listening on port 8080");
});
