const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  image: {
    type: String,
    default: "https://i.pravatar.cc/100" // fallback avatar
  },
  status: {
    type: String,
    enum: ["pending", "approved"],
    default: "pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);