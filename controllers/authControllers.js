const userLogin = (req, res) => {
  res.render("auth/login", { title: "Login" });
};

module.exports = {
  userLogin,
};
