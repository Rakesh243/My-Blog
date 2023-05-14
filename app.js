const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const { result } = require("lodash");

const app = express();

const dbURI = "";

mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "New Blog 2",
    snippet: "About New Blog",
    body: "The text of New Blog.",
  });

  blog
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get("/single-blog", (req, res) => {
  Blog.findById("645fe2e36d3d666012306574")
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => console.log(err));
});

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => res.redirect("/blogs"))
    .catch((err) => console.log(err));
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
