const express = require("express");
const router = express.Router();
const Bag = require("../models/Bag");
const User = require("../models/User");

router.post("/sell", async (req, res) => {
  const { sellerId } = req.body;
  const profit = 20;
  await Bag.create({ sellerId, price: 100, profit });
  await User.updateOne({ userId: sellerId }, { $inc: { profit } });
  res.json({ msg: "Bag submitted" });
});

router.get("/:id", async (req, res) => {
  const bags = await Bag.find({ sellerId: req.params.id });
  const user = await User.findOne({ userId: req.params.id });
  res.json({ totalBags: bags.length, profit: user.profit });
});

module.exports = router;
