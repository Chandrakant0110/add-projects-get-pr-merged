const express = require("express");
const router = express.Router();
const {
  handleGenerateNewShortURL,
  handleGetShortURL,
  handleGetAnalytics,
} = require("../controllers/url");

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", handleGetShortURL);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
