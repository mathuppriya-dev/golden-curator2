const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  category: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  description: {
    type: String
  },
  district: {
    type: String,
    required: true
  },
  date: {
    type: Date
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("Event", eventSchema);