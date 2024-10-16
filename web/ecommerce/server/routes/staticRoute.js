const express = require("express");
const {
  handleHomeValidUser,
  handleAddTooCart,
} = require("../controllers/staticController");
const router = express.Router();

router.get("/", handleHomeValidUser);
router.post("/cart", handleAddTooCart);
module.exports = router;
