const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    orders: [],
    cart: [],
    find: [{ name: String }],
    flow: {},
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("product", productSchema);

module.exports = Products;
