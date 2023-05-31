const userLogin = (req, res) => {
  res.render("auth/login", { title: "Login" });
};
const userRegister = (req, res) => {
  res.render("auth/register", { title: "Register" });
};

module.exports = {
  userLogin,
  userRegister,
};
