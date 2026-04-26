const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 5000;

// ✅ MIDDLEWARE FIRST (VERY IMPORTANT)
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// ✅ MODELS
const Event = require("./Models/Event");
const seedData = require("./seed/seedData");

// ✅ ROUTES (AFTER middleware)
const userRoutes = require("./Routes/userRoutes");
const eventRoutes = require("./Routes/eventRoutes");

app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("API running with database 🚀");
});

// ✅ SEED FUNCTION
const ensureSeedData = async () => {
  const counts = await Event.aggregate([
    { $group: { _id: "$status", total: { $sum: 1 } } }
  ]);

  const byStatus = counts.reduce((acc, row) => {
    acc[row._id] = row.total;
    return acc;
  }, {});

  const missingStatuses = ["approved", "pending", "rejected"].filter(
    (status) => !byStatus[status]
  );

  if (missingStatuses.length === 0) return;

  const rowsToInsert = seedData.filter((event) =>
    missingStatuses.includes(event.status)
  );

  if (rowsToInsert.length > 0) {
    await Event.insertMany(rowsToInsert);
    console.log(`🌱 Seeded missing statuses: ${missingStatuses.join(", ")}`);
  }
};

// ✅ START SERVER
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      family: 4,
    });

    console.log("✅ MongoDB Connected");

    await ensureSeedData();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on ${PORT}`);
    });

  } catch (error) {
    console.error("❌ DB Connection Error:", error.message);
  }
};

startServer();