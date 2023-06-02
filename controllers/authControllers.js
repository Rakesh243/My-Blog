const bcrypt = require("bcrypt");
const User = require("../models/user");

const userLogin = (req, res) => {
  res.render("auth/login", { title: "Login" });
};

const userLoginPost = (req, res) => {};

const userRegister = (req, res) => {
  res.render("auth/register", { title: "Register" });
};

const userRegisterPost = async (req, res) => {
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
  userLogin,
  userLoginPost,
  userRegister,
  userRegisterPost,
};
