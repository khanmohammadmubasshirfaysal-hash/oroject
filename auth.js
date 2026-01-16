const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { name, phone } = req.body;
  const userId = "F" + Math.floor(Math.random() * 10000);
  const password = Math.floor(Math.random() * 100000).toString();
  await User.create({ name, phone, userId, password });
  res.json({ userId, password });
});

router.post("/login", async (req, res) => {
  const { userId, password } = req.body;
  if (userId === "admin" && password === "admin123") return res.json({ role: "admin" });
  const user = await User.findOne({ userId, password });
  if (!user) return res.status(401).json({ msg: "Invalid login" });
  res.json(user);
});

module.exports = router;
