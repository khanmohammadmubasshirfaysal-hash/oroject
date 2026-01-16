const mongoose = require("mongoose");
const BagSchema = new mongoose.Schema({
  sellerId: String,
  price: Number,
  profit: Number,
  date: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Bag", BagSchema);
