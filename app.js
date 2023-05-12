const express = require("express");
const mongoose = require("mongoose");

const app = express();

const dbURI = "";

mongoose
  .connect(dbURI)
  .then((result) => console.log("connected to DB"))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

app.listen(3000);

// middleware and static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  const testBlogs = [
    { title: "Blog 1", snippet: "Lorem ipsum dolor sir amet" },
    { title: "Blog 2", snippet: "Lorem ipsum dolor sir amet" },
    { title: "Blog 3", snippet: "Lorem ipsum dolor sir amet" },
    { title: "Blog 4", snippet: "Lorem ipsum dolor sir amet" },
  ];

  res.render("index", { title: "Home", testBlogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "Àbout" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create new Blog" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
