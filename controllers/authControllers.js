const bcrypt = require("bcrypt");
const User = require("../models/User");

const loginGet = (req, res) => {
  res.render("auth/login", { title: "Login" });
};

const loginPost = (req, res) => {};

const registerGet = (req, res) => {
  res.render("auth/register", { title: "Register" });
};

const registerPost = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User(req.body);
    user.password = hashedPassword;

    user
      .save()
      .then((result) => res.redirect("/auth/login"))
      .catch((err) => console.log(err));
  } catch {
    res.redirect("/auth/register");
  }
};

module.exports = {
  loginGet,
  loginPost,
  registerGet,
  registerPost,
};
