const express = require("express");

const app = express();

// register view engine
app.set("view engine", "ejs");
app.set("views", "pages");

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./pages/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./pages/about.html", { root: __dirname });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.status(404).sendFile("./pages/404.html", { root: __dirname });
});
