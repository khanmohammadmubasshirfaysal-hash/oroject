const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  phone: String,
  userId: String,
  password: String,
  role: { type: String, default: "farmer" },
  profit: { type: Number, default: 0 }
});
module.exports = mongoose.model("User", UserSchema);
