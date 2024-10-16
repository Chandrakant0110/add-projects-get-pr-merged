const User = require("../models/userModel");
const Products = require("../models/productsModel");

async function handleHomeValidUser(req, res) {
  const user = req.user;
  return res.status(200).json({ message: "valid user", user });
}

async function handleAddTooCart(req, res) {
  const { selectCard, userData, quantity } = req.body;

  const userProducts = await Products.find({ createdBy: userData._id });

  if (!userProducts) res.status(400).json({ message: "user not found" });
  await Products.updateMany(
    { createdBy: userData._id },
    { $push: { cart: { ...selectCard, quantity } } }
  );
  res.status(200).json({ message: "Added to cart" });
}

module.exports = { handleHomeValidUser, handleAddTooCart };
