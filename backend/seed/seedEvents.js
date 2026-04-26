const mongoose = require("mongoose");
require("dotenv").config();
const Event = require("../Models/Event");
const seedData = require("./seedData");

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected for seeding");

    await Event.deleteMany(); // clear old data
    await Event.insertMany(seedData);

    console.log("🌱 Data Seeded");
    process.exit();
  })
  .catch(err => console.log(err));