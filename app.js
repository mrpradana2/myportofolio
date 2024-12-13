const express = require("express");
const app = express();

// Middleware untuk file statis
app.use(express.static("public"));

// Set template engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Route utama
app.get("/", (req, res) => {
  res.render("index", { title: "Homepage" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
