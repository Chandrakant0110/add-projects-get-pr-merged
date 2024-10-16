const User = require("../models/userModel");
const Products = require("../models/productsModel");
const { setUser } = require("../service/auth");

async function handleUserSignUp(req, res) {
  const { username, email, password } = req.body;

  try {
    const newUser = await User.create({ name: username, email, password });
    await Products.create({ orders: [{}], cart: [{}], createdBy: newUser._id });
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error during user sign-up:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function handleUserLogIn(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(404).json({ message: "Invalid Username or Password" });
  }
  const token = setUser(user);

  res.cookie("token", token);

  return res.status(200).json({ Login: true, message: "login success full" });
}

module.exports = { handleUserSignUp, handleUserLogIn };
