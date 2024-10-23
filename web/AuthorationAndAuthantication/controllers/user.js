const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");
const { setUser } = require("../service/auth");

const handleUserSignUp = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.render("home");
};

const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user)
    return res.render("login", { error: "Invalid Username or Password" });
  const token = setUser(user);
  res.cookie("token", token);
  return res.redirect("/");
};

module.exports = {
  handleUserSignUp,
  handleUserLogin,
};
