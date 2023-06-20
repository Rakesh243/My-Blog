const User = require("../models/User");

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  // validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const loginGet = (req, res) => {
  res.render("auth/login", { title: "Login" });
};

const loginPost = (req, res) => {};

const registerGet = (req, res) => {
  res.render("auth/register", { title: "Register" });
};

const registerPost = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports = {
  loginGet,
  loginPost,
  registerGet,
  registerPost,
};
