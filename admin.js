const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Bag = require("../models/Bag");

router.get("/stats", async (req, res) => {
  const users = await User.countDocuments();
  const bags = await Bag.countDocuments();
  const totalProfit = bags * 20;
  res.json({ users, bags, totalProfit });
});

module.exports = router;
