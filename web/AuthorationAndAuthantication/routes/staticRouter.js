const express = require("express");
const router = express.Router();
const {
  handleHomeStaticRoute,
  handleSignUpRoute,
  handleLoginRoute,
} = require("../controllers/static");
const { restrictTo } = require("../middleware/auth");

router.get(
  "/admin/urls",
  restrictTo(["ADMIN"]),
  async function handleHomeStaticRoute(req, res) {
    const allUrls = await URL.find({});
    return res.render("home", { urls: allUrls });
  }
);
router.get("/", restrictTo(["NORMAL", "ADMIN"]), handleHomeStaticRoute);
router.get("/signup", handleSignUpRoute);
router.get("/login", handleLoginRoute);
module.exports = router;
